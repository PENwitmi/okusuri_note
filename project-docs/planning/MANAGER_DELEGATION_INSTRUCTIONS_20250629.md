# Manager委任指示書 - PharmaDx構造問題解決

**作成日**: 2025年6月29日 16:01  
**作成者**: CEO  
**宛先**: Manager  
**優先度**: 高  
**期限**: 2025年6月30日 18:00  

## 1. 背景と現状

### 1.1 セキュリティ対応完了
CEOにて緊急セキュリティリスク（docs/backup_*の公開状態）は対応済み。現在は機能面・構造面の問題が残存。

### 1.2 問題の分担
```
CEOが対処（高優先度・機能不全）:
1. 薬剤ページ生成不足: 20薬剤中6薬剤のみ（30%）
2. リンクパス完全不整合: 全薬剤リンクが404エラー  

Managerに委任（構造・命名問題）:
3. 日本語ファイル名問題: URL共有・SEOに深刻な影響
4. 新旧構造の混在: data/とgenerated/の重複
5. index.html重複: どちらが正式版か不明
6. ディレクトリ構造の整理とクリーンアップ
```

## 2. 技術的詳細

### 2.1 薬剤ページ生成の現状
```javascript
// 現在の問題点（convert_pharmadx.js）
// A級・B級薬効群からのみ薬剤ページを生成
// C級薬効群は無視される設計

生成済み薬剤（6個）:
- カンデサルタン、テルミサルタン（ARB: B級）
- エソメプラゾール、ランソプラゾール（PPI: A級）
- セルトラリン、エスシタロプラム（SSRI: A級）

未生成薬剤（14個）:
- ロスバスタチン、アトルバスタチン
- エンパグリフロジン、ダパグリフロジン
- カルベジロール、ビソプロロール
- エナラプリル、ペリンドプリル
- フロセミド、スピロノラクトン
- ジゴキシン、バンコマイシン
- ワルファリン、メトホルミン
```

### 2.2 ファイルパス構造の混乱
```
現状:
docs/
├── index.html              # 旧版（39KB）- data/drugs/へのリンク
├── generated/
│   ├── index.html          # 新版（52KB）- 場所が不適切
│   └── drugs/
│       └── *.html          # 日本語ファイル名（6ファイル）
└── data/
    └── drugs/
        └── *.html          # 英語ファイル名（13ファイル）- 旧コンテンツ

index.htmlのリンク例:
<a href="data/drugs/candesartan.html">  # 404エラー
実際のファイル: generated/drugs/カンデサルタン.html
```

### 2.3 config.jsonの問題
```json
// 薬剤名が日本語で定義されている
"phase1Drugs": [
    "カンデサルタン", "テルミサルタン",
    // ...
]

// これがファイル名に直接使用される
saveHtmlFile(`drugs/${drugName}.html`, html);
// → drugs/カンデサルタン.html
```

## 3. CEO策定の解決方針

### 3.1 薬剤ページ完全生成（最優先）
**新アプローチ**: 薬効群依存ではなく、個別薬剤ベースの生成

```javascript
// convert_pharmadx.js に新メソッド追加
async generateAllIndividualDrugPages() {
    console.log('🏥 全薬剤の個別ページ生成開始...');
    
    for (const drugName of config.phase1Drugs) {
        const drugInfo = config.drugInfo[drugName];
        if (!drugInfo) {
            console.warn(`⚠️ ${drugName}の情報が見つかりません`);
            continue;
        }
        
        // 英語ファイル名の生成
        const fileName = this.getDrugFileName(drugName);
        
        // 薬効群情報の取得（あれば）
        const groupData = this.findDrugGroupData(drugInfo.category);
        
        // ページ生成
        const html = this.generateDrugPageFromInfo(drugName, drugInfo, groupData);
        
        this.saveHtmlFile(`drugs/${fileName}.html`, html);
        console.log(`✅ 生成: drugs/${fileName}.html`);
    }
}

// ファイル名マッピング
getDrugFileName(drugName) {
    const mapping = {
        "カンデサルタン": "candesartan",
        "テルミサルタン": "telmisartan",
        "エソメプラゾール": "esomeprazole",
        "ランソプラゾール": "lansoprazole",
        "ロスバスタチン": "rosuvastatin",
        "アトルバスタチン": "atorvastatin",
        "エンパグリフロジン": "empagliflozin",
        "ダパグリフロジン": "dapagliflozin",
        "カルベジロール": "carvedilol",
        "ビソプロロール": "bisoprolol",
        "エナラプリル": "enalapril",
        "ペリンドプリル": "perindopril",
        "セルトラリン": "sertraline",
        "エスシタロプラム": "escitalopram",
        "フロセミド": "furosemide",
        "スピロノラクトン": "spironolactone",
        "ジゴキシン": "digoxin",
        "バンコマイシン": "vancomycin",
        "ワルファリン": "warfarin",
        "メトホルミン": "metformin"
    };
    return mapping[drugName] || drugName.toLowerCase();
}
```

### 3.2 ディレクトリ構造の整理
```bash
# Phase 1: 一時退避
mv docs/data docs/data_old
mv docs/generated/index.html docs/index_new.html

# Phase 2: 再配置
mkdir -p docs/drugs docs/groups docs/stories
mv docs/generated/drugs/* docs/drugs/  # 注意: ファイル名変更も必要
mv docs/generated/* docs/  # その他のファイル

# Phase 3: クリーンアップ
rm -rf docs/generated
# data_oldは検証後に削除
```

### 3.3 index.htmlの統一
```javascript
// 1. どちらのindex.htmlを採用するか決定
// 推奨: docs/generated/index.html（新版）をベースに

// 2. リンクパスをすべて修正
// 変更前: href="data/drugs/candesartan.html"
// 変更後: href="drugs/candesartan.html"

// 3. 自動修正スクリプト
const updateIndexLinks = () => {
    let content = fs.readFileSync('docs/index.html', 'utf8');
    
    // data/drugs/ → drugs/
    content = content.replace(/href="data\/drugs\//g, 'href="drugs/');
    
    // 薬剤名の英語化
    const drugMapping = {
        // 上記と同じマッピング
    };
    
    for (const [ja, en] of Object.entries(drugMapping)) {
        // 実装詳細
    }
    
    fs.writeFileSync('docs/index.html', content);
};
```

## 4. 実装手順（Manager向け）

### Step 1: 開発環境準備（5分）
```bash
cd /Users/nishimototakashi/claude\ code/ai-team/code/pharma_dex
git pull  # 最新状態を取得
git checkout -b fix-drug-generation  # 新ブランチで作業
```

### Step 2: convert_pharmadx.js修正（30分）
1. 上記の`generateAllIndividualDrugPages`メソッドを追加
2. `getDrugFileName`メソッドを追加
3. `generateDrugPageFromInfo`メソッドを実装（既存のテンプレートを参考）
4. メインの`convert`メソッドから呼び出し追加

### Step 3: ビルド実行と検証（15分）
```bash
cd tools
./build.sh
# 20薬剤すべてが生成されることを確認
ls -la ../docs/drugs/ | wc -l  # 20以上
```

### Step 4: ディレクトリ構造整理（20分）
1. 上記の手順に従って慎重に実行
2. 各ステップで`ls -la`で確認
3. バックアップは`project-docs/archive/`に

### Step 5: index.html修正（20分）
1. 新版（generated/index.html）をベースに採用
2. すべてのリンクパスを修正
3. ローカルで動作確認

### Step 6: 最終検証（10分）
```bash
cd ../docs
python -m http.server 8000
# ブラウザで全薬剤リンクをクリックして確認
```

## 5. 成果物と検証基準

### 必須成果物
1. ✅ 20薬剤すべてのHTMLファイル（英語名）
2. ✅ 統一されたindex.html（リンク正常動作）
3. ✅ クリーンなディレクトリ構造
4. ✅ 更新されたconvert_pharmadx.js

### 検証チェックリスト
```bash
# 1. ファイル数確認
[ $(ls docs/drugs/*.html | wc -l) -eq 20 ] && echo "✅ 20薬剤" || echo "❌ 薬剤数不足"

# 2. 日本語ファイル名チェック
[ $(ls docs/drugs/*[ぁ-ん]*.html 2>/dev/null | wc -l) -eq 0 ] && echo "✅ 英語名のみ" || echo "❌ 日本語名残存"

# 3. リンクチェック
grep -c "href=\"data/drugs" docs/index.html | grep "^0$" && echo "✅ 旧パスなし" || echo "❌ 旧パス残存"

# 4. 重複チェック
[ $(find docs -name "index.html" | wc -l) -eq 1 ] && echo "✅ index.html統一" || echo "❌ 重複あり"
```

## 6. リスクと注意事項

### リスク1: 既存リンクの破損
- **対策**: 変更前に完全バックアップ
- **復旧方法**: `git checkout .`で即座に戻せる

### リスク2: 文字化け
- **対策**: UTF-8エンコーディングの確認
- **確認方法**: 日本語コンテンツが正しく表示されるか

### リスク3: GitHubPages反映遅延
- **対策**: ローカルで完全動作確認後にプッシュ
- **確認**: 5-10分待ってから本番確認

## 7. 完了報告要件

Managerは以下の情報を含む完了報告を作成してください：

```markdown
## PharmaDx構造問題解決 - 完了報告

### 実施内容
1. 薬剤ページ生成: [実施内容]
2. ディレクトリ整理: [実施内容]
3. index.html修正: [実施内容]

### 成果
- 生成薬剤数: XX/20
- 修正リンク数: XX
- 削除ファイル数: XX

### 問題と対応
[発生した問題と解決方法]

### 検証結果
[チェックリストの結果]

### 次のステップ
[推奨事項]
```

## 8. 参考資料

- **統合問題解決計画書**: `/project-docs/planning/INTEGRATED_RESOLUTION_PLAN_20250629.md`
- **監査レポート**: `/Users/nishimototakashi/claude code/ai-team/CONFIDENTIAL_AUDIT_REPORT_20250629.md`
- **現在のconfig.json**: `/tools/config.json`
- **変換スクリプト**: `/tools/convert_pharmadx.js`

---

**Manager、この指示に基づいて実装をお願いします。質問があれば遠慮なく確認してください。**

CEO