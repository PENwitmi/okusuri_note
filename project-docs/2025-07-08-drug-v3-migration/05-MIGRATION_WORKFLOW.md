# 05-MIGRATION_WORKFLOW.md

**ドキュメント**: 薬剤v3移行ワークフロー  
**作成日**: 2025-07-08 02:28  
**作成者**: AI開発チーム  
**目的**: 個別薬剤をv2からv3へ移行する具体的な作業手順  
**想定時間**: 1薬剤あたり60-90分

---

## 📋 v3作成の基本ルール（2025-07-08追加）

### 必須の3つのルール
1. **テンプレートを参照する**
   - `_template-v3.html`の構造とプレースホルダーを必ず確認
   - プレースホルダーの正確な置換を心がける

2. **metformin-refined.htmlを参考にする**
   - v3の理想的な完成形として参照
   - コンテンツの詳細度・記載方法の参考
   - レベル別の情報配置の見本

3. **プレースホルダーにない情報はレベル3に配置**
   - テンプレートに該当するプレースホルダーがない情報
   - 開発裏話・技術革新などの詳細情報
   - 専門的な内容や追加の臨床データ
   - → すべてレベル3（研修中向け）セクションに追加

---

## 🎯 ワークフローの全体像

### 移行プロセス概要
```
1. 事前準備（10分）
   ├── source_materials確認
   ├── 関連ファイル収集
   └── 作業環境準備

2. テンプレート準備（5分）
   ├── _template-v3.htmlコピー
   └── ファイル名変更

3. 情報収集・整理（20分）
   ├── 基本情報抽出
   ├── 進化モデル分析
   └── ストーリー要素探索

4. コンテンツ作成（30分）
   ├── レベル1作成
   ├── レベル2作成
   └── レベル3作成

5. 統合・調整（15分）
   ├── 関連薬剤設定
   ├── 相互リンク確認
   └── 全体調整

6. 品質確認（10分）
   ├── 動作確認
   ├── 品質チェック
   └── 最終調整
```

---

## 📋 詳細ワークフロー

### Phase 1: 事前準備（10分）

#### 1.1 対象薬剤の確認
```bash
# 移行対象薬剤名の確認
DRUG_NAME="atorvastatin"  # 例：アトルバスタチン
DRUG_NAME_JP="アトルバスタチン"
BRAND_NAME="リピトール"
```

#### 1.2 source_materials内の関連ファイル特定
```bash
# 関連ファイルの検索
find source_materials -name "*${DRUG_NAME}*" -type f

# 期待される結果例：
# source_materials/drugs/cardiovascular/statins/atorvastatin.md
# source_materials/drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md
```

#### 1.3 情報マッピング表の確認
- 04-INFORMATION_MAPPING.mdで該当薬剤のセクションを確認
- 利用可能な情報源をリストアップ
- 不足情報の特定

### Phase 2: テンプレート準備（5分）

#### 2.1 テンプレートファイルのコピー
```bash
# テンプレートをコピー
cp docs/drugs-v3/_template-v3.html docs/drugs-v3/${DRUG_NAME}-v3.html

# 例：
cp docs/drugs-v3/_template-v3.html docs/drugs-v3/atorvastatin-v3.html
```

#### 2.2 基本メタデータの置換
```html
<!-- title要素 -->
<title>{{薬剤名_日本語}} - 薬剤詳細 | おくすりノート</title>
↓
<title>アトルバスタチン - 薬剤詳細 | おくすりノート</title>

<!-- meta description -->
<meta name="description" content="{{薬剤名_日本語}}（{{ブランド名}}）の詳細情報...">
↓
<meta name="description" content="アトルバスタチン（リピトール）の詳細情報。HMG-CoA還元酵素阻害薬として高コレステロール血症に使用。作用機序、使い分け、開発ストーリーまで。">
```

### Phase 3: 情報収集・整理（20分）

#### 3.1 基本情報の抽出（drugs/[薬剤名].md）
```markdown
収集項目：
- 薬効群と分類
- 歴史的意義
- 適応症
- 薬剤の本質（1段落の要約）
- なぜ重要なのか（4つのポイント）
- 開発の軌跡（年表形式）
```

#### 3.2 進化モデルの分析（drug_evolution/）
```markdown
収集項目：
- 薬効群内での位置づけ
- 強度分類（該当する場合）
- 他剤との比較表
- 処方選択フローチャート
- 臨床的な使い分け
```

#### 3.3 開発経緯・技術革新の収集（drug_stories/）
```markdown
収集項目：
- 開発年・承認年の事実
- 画期的な臨床試験結果（数値データ）
- 開発企業の技術的ブレークスルー
- 開発過程での課題と解決策
- 予想外の効果の発見（例：SGLT2の心保護効果）
- 社会的インパクトのデータ
- 薬効群における位置づけの変遷
```

### Phase 4: コンテンツ作成（30分）

#### 4.1 レベル1コンテンツ作成（10分）

##### 薬剤ヘッダー
```html
<div class="drug-header">
    <h1 class="brand-name">リピトール®</h1>
    <p class="generic-name">アトルバスタチンカルシウム水和物</p>
</div>

<div class="drug-classification">
    <span class="drug-class" data-category="cardiovascular">
        <i>💊</i>
        HMG-CoA還元酵素阻害薬（スタチン系）
    </span>
    <span class="generation">第一選択薬</span>
</div>
```

##### 30秒サマリー
```html
<div class="impact-grid">
    <div class="impact-item">
        <h4>開発の経緯</h4>
        <p>1997年、スタチン戦争の最中に登場した最強のスタチン</p>
    </div>
    <div class="impact-item">
        <h4>なぜ重要か</h4>
        <p>史上最高売上1,640億ドルを記録、心血管イベントを確実に減少</p>
    </div>
    <!-- 以下続く -->
</div>
```

#### 4.2 レベル2コンテンツ作成（10分）

##### 作用機序
```html
<div class="mechanism">
    <h3>🔬 作用機序</h3>
    <div class="mechanism-content">
        <h4>HMG-CoA還元酵素の競合的阻害</h4>
        <ol>
            <li>肝細胞内でHMG-CoA還元酵素を阻害</li>
            <li>コレステロール合成が減少</li>
            <li>LDL受容体が増加</li>
            <li>血中LDLコレステロールが低下</li>
        </ol>
    </div>
</div>
```

##### 臨床使い分け
```html
<div class="clinical-use">
    <h3>🏥 臨床での使い分け</h3>
    <table class="comparison-table">
        <thead>
            <tr>
                <th>状況</th>
                <th>推奨薬剤</th>
                <th>理由</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>LDL-C高度上昇</td>
                <td>アトルバスタチン40-80mg</td>
                <td>最強のLDL-C低下効果</td>
            </tr>
            <!-- 以下続く -->
        </tbody>
    </table>
</div>
```

#### 4.3 レベル3コンテンツ作成（10分）

##### 開発経緯
```html
<div class="development-history">
    <h3>📖 開発の歴史と経緯</h3>
    
    <div class="history-section">
        <h4>1997年：アトルバスタチン承認</h4>
        <p>プラバスタチン（1989年）、シンバスタチン（1991年）に続き、
        第3世代スタチンとしてアトルバスタチンが承認。
        LDLコレステロール低下率39-60%を達成。</p>
    </div>
    
    <div class="history-section">
        <h4>2003-2004年：大規模臨床試験</h4>
        <p>ASCOT-LLA試験（10,305例）で心血管イベント36%減少、
        CARDS試験（2,838例）で糖尿病患者の心血管イベント37%減少を実証。</p>
    </div>
</div>
```

### Phase 5: 統合・調整（15分）

#### 5.1 関連薬剤の設定
```html
<!-- サイドバー内 -->
<div class="sidebar-section">
    <h3 class="sidebar-title">🔗 関連薬剤</h3>
    <div class="sidebar-links">
        <a href="rosuvastatin-v3.html" class="sidebar-link">
            📋 ロスバスタチン
            <span class="drug-category">最強スタチン</span>
        </a>
        <a href="pravastatin-v3.html" class="sidebar-link">
            📋 プラバスタチン
            <span class="drug-category">最安全スタチン</span>
        </a>
        <!-- 3-4薬剤設定 -->
    </div>
</div>
```

#### 5.2 薬効群リンクの設定
```html
<div class="sidebar-section">
    <h3 class="sidebar-title">🎯 薬効群</h3>
    <div class="sidebar-links">
        <a href="../categories/cardiovascular.html" class="sidebar-link">
            🏥 循環器系薬剤
            <span class="category-desc">心臓・血管疾患治療薬</span>
        </a>
        <a href="../groups/statins.html" class="sidebar-link">
            💊 スタチン系薬剤
            <span class="category-desc">コレステロール低下薬一覧</span>
        </a>
    </div>
</div>
```

### Phase 6: 品質確認（10分）

#### 6.1 構造確認チェックリスト
- [ ] すべてのプレースホルダーが置換されているか
- [ ] 3つのレベルセクションが存在するか
- [ ] サイドバー構造が正しいか
- [ ] モバイル用要素が含まれているか

#### 6.2 コンテンツ確認チェックリスト
- [ ] 各レベルに十分な情報量があるか（目安：L1 200行、L2 300行、L3 400行）
- [ ] source_materialsの情報が適切に統合されているか
- [ ] 薬剤の特徴・価値が明確に表現されているか
- [ ] 医学的に正確な情報か

#### 6.3 動作確認
```bash
# ローカルサーバーで確認
cd docs && python -m http.server 8000

# 確認項目：
# - レベル切替が動作するか
# - サイドバーが表示されるか（PC）
# - フローティングボタンが機能するか（モバイル）
# - リンクが正しく機能するか
```

---

## 🚀 効率化のヒント

### スニペット活用
```html
<!-- よく使うHTML構造をスニペット登録 -->
<!-- 例：story-section スニペット -->
<div class="story-section">
    <h4>${1:タイトル}</h4>
    <p>${2:内容}</p>
</div>
```

### バッチ処理の準備
```bash
# 薬効群ごとに関連薬剤リストを事前作成
# cardiovascular_drugs.txt
atorvastatin:rosuvastatin,pravastatin,simvastatin,ezetimibe
bisoprolol:carvedilol,atenolol,propranolol,enalapril
```

### 情報整理テンプレート
```markdown
# [薬剤名]情報整理シート

## 基本情報
- ブランド名：
- 一般名：
- 薬効群：
- カテゴリーID：

## レベル1素材
- 開発年：
- 重要性：
- 適応症：
- 特徴：

## レベル2素材
- 作用機序：
- 使い分け：
- エビデンス：

## レベル3素材
- 開発経緯・技術革新：
- 進化の位置づけ：
- 将来展望：
```

---

## ⚠️ よくある問題と対処法

### 問題1: source_materialsに情報が少ない
**対処法**:
- drug_database_originated/を確認
- 薬効群の共通情報から補完
- 添付文書・インタビューフォームを参照

### 問題2: レベル3の開発経緯・技術革新情報が不足
**対処法**:
- 開発企業の公式資料・技術論文を調査
- 薬効群全体の技術進化の歴史から事実を抽出
- 臨床試験の結果から発見された予想外の効果
- 特許情報や学会発表から技術的工夫を探索

### 問題3: 関連薬剤の選定に迷う
**対処法**:
- 04-INFORMATION_MAPPING.mdの関連薬剤マトリックス参照
- 同一薬効群を最優先
- 臨床での併用頻度を考慮

---

## 📊 作業記録テンプレート

### 移行作業記録
```markdown
## [薬剤名] v3移行記録

### 基本情報
- 作業日時：2025-07-08 HH:MM
- 作業者：
- 所要時間：XX分

### 使用したsource_materials
1. drugs/[パス]
2. drug_evolution/[パス]
3. その他：

### 特記事項
- 工夫した点：
- 困難だった点：
- 追加した独自要素：

### 品質評価
- 情報充実度：[S/A/B/C]
- 構造完成度：[S/A/B/C]
- 総合評価：[S/A/B/C]
```

---

**ワークフローステータス**: ✅ 策定完了、実作業準備完了