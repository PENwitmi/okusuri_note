# リンク解決戦略ドキュメント

**作成日**: 2025-07-01 09:56  
**担当**: Dev1  
**目的**: リンク切れゼロの達成と維持  

## 🎯 戦略的目標

リンクは、Webサイトの血管である。一つでも詰まれば、全体の健康を損なう。我々の目標は、完璧な循環系統の構築である。

## 📊 現状のリンク構造分析

### リンクの分類と問題箇所
```
総リンク数: 約150個
├── 内部リンク: 120個
│   ├── 薬剤間リンク: 40個 ✅ 正常（drugs/）
│   ├── カテゴリリンク: 20個 ✅ 正常（categories/）
│   ├── ストーリーリンク: 10個 ❌ 全滅（data/stories/ → stories/）
│   ├── 使い分けリンク: 10個 ❌ 全滅（data/differentiation/ → groups/）
│   └── その他: 40個 ⚠️ 一部問題
└── 外部リンク: 30個
    └── 参考資料等: 30個 ✅ 正常
```

### 問題のパターン
1. **存在しないディレクトリ参照**
   ```
   href="data/stories/penicillin.html"  # data/は存在しない → stories/に修正
   href="data/differentiation/arb.html"  # data/は存在しない → groups/ARB_evolution_model.htmlに修正
   ```

### 利用可能なリソース（source_materials/）
- **ストーリーコンテンツ**: `drug_stories/`に高品質MDファイル存在
  - ペニシリン、インスリン、高血圧、アスピリン等
- **使い分けガイド**: `drug_evolution/`に詳細な進化モデル存在
  - ARB、PPI、SGLT2、スタチン、β遮断薬等

2. **ファイル名の不一致**
   ```
   href="drugs/Telmisartan.html"  # 大文字（実際は小文字）
   href="薬剤/テルミサルタン.html"  # 日本語パス
   ```

3. **相対パスの誤り**
   ```
   href="../../../index.html"  # 階層が深すぎる
   href="./drugs/..."  # 不要な./
   ```

## 🛠️ 解決アプローチ

### Step 1: 即時対応（暫定修正）

#### A. リダイレクトマッピング
```javascript
// redirect-map.js
const redirectMap = {
  // ストーリーページ（作成予定）
  'data/stories/penicillin.html': 'stories/penicillin.html',
  'data/stories/insulin.html': 'stories/insulin.html',
  'data/stories/hypertension.html': 'stories/hypertension.html',
  'data/stories/vancomycin.html': 'stories/vancomycin.html',
  'data/stories/aspirin.html': 'stories/aspirin.html',
  
  // 使い分けガイド（既存ファイルへマッピング）
  'data/differentiation/arb.html': 'groups/ARB_evolution_model.html',
  'data/differentiation/ppi.html': 'groups/PPI_evolution_model.html',
  'data/differentiation/sglt2.html': 'groups/SGLT2_evolution_model.html',
  'data/differentiation/statin.html': 'groups/statin_evolution_model.html',
  'data/differentiation/beta_blocker.html': 'groups/beta_blocker_evolution_model.html',
  'data/differentiation/ssri.html': 'groups/SSRI_evolution_model.html',
  'data/differentiation/ace.html': 'groups/ACE_inhibitor_evolution_model.html',
  'data/differentiation/diuretic.html': 'groups/diuretics_evolution_model.html',
  // ... 他のマッピング
};
```

#### B. 暫定ページ作成
```html
<!-- 最小限の暫定コンテンツテンプレート -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>準備中 | おくすりノート</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <div class="container">
        <h1>このページは準備中です</h1>
        <p>より良いコンテンツを提供するため、現在準備を進めています。</p>
        <a href="../index.html">トップページへ戻る</a>
    </div>
</body>
</html>
```

### Step 2: 根本解決（恒久対応）

#### A. リンク正規化ルール
```
1. 内部リンクは必ず相対パス
2. ファイル名は小文字のみ（kebab-case）
3. 日本語ファイル名は使用しない
4. 拡張子は必ず.html
5. ディレクトリ構造は最大3階層
```

#### B. 自動検証システム
```python
# link-validator.py
import os
from bs4 import BeautifulSoup
import glob

def validate_links():
    errors = []
    for html_file in glob.glob('docs/**/*.html', recursive=True):
        with open(html_file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        for link in soup.find_all('a', href=True):
            href = link['href']
            if href.startswith('http'):
                continue  # 外部リンクはスキップ
                
            # 相対パスを絶対パスに変換
            abs_path = os.path.normpath(
                os.path.join(os.path.dirname(html_file), href)
            )
            
            if not os.path.exists(abs_path):
                errors.append({
                    'file': html_file,
                    'broken_link': href,
                    'line': link.sourceline
                })
    
    return errors
```

## 📋 実装チェックリスト

### Phase 1（即時対応）
- [ ] 全リンクの抽出と分類
- [ ] 存在しないリンクのリスト化
- [ ] 暫定ページの作成
- [ ] リンクの修正または削除
- [ ] 404ページの実装

### Phase 2（24時間以内）
- [ ] 自動リンクチェッカーの実装
- [ ] CI/CDへの組み込み
- [ ] リンク管理ガイドラインの策定

### Phase 3（1週間以内）
- [ ] 本格的なストーリーコンテンツ作成
- [ ] 使い分けガイドの実装
- [ ] リンク構造の最適化

## 🚨 予防策：二度とリンク切れを起こさないために

### 1. 開発プロセスの改善
```
Before: コンテンツ作成 → リンク設置 → 公開
After:  コンテンツ作成 → リンク設置 → 検証 → 修正 → 公開
```

### 2. リンク作成ルール
```markdown
❌ 悪い例:
- href="何か.html"（日本語）
- href="Stories/ペニシリン.html"（大文字・日本語）
- href="../../../index.html"（深すぎる相対パス）

✅ 良い例:
- href="stories/penicillin.html"
- href="../index.html"
- href="drugs/telmisartan.html"
```

### 3. 定期監査
- 毎週月曜: 自動リンクチェック実行
- 毎月1日: 手動での全体確認
- 四半期ごと: リンク構造の見直し

## 📊 成功指標

### 短期（Phase 1完了時）
- リンク切れ: 0件
- 404遭遇率: 0%
- ユーザークレーム: 0件

### 中期（1ヶ月後）
- リンク正確性: 100%
- 自動検証カバレッジ: 100%
- 平均修正時間: 5分以内

### 長期（3ヶ月後）
- リンク起因の離脱: 0%
- SEOペナルティ: なし
- ユーザー信頼度: 高

## 🎯 アクションアイテム

### Dev1への具体的指示
1. **10:00-10:15**: 現状把握スクリプトの実行
2. **10:15-10:30**: 問題リンクの分類と優先順位付け
3. **10:30-11:00**: 暫定ページの作成と配置
4. **11:00-11:30**: index.htmlのリンク修正
5. **11:30-12:00**: 全体テストと確認

### 使用コマンド
```bash
# リンク抽出
find docs -name "*.html" -exec grep -Ho 'href="[^"]*"' {} \; > links.txt

# 存在確認
while read line; do
    file=$(echo $line | sed 's/.*href="\([^"]*\)".*/\1/')
    source=$(echo $line | cut -d: -f1)
    # チェックロジック
done < links.txt

# 一括修正（慎重に）
# ストーリーリンクの修正
find docs -name "*.html" -exec sed -i.bak 's|data/stories/|stories/|g' {} \;

# 使い分けリンクの修正（個別対応）
sed -i.bak 's|data/differentiation/arb.html|groups/ARB_evolution_model.html|g' docs/index.html
sed -i.bak 's|data/differentiation/ppi.html|groups/PPI_evolution_model.html|g' docs/index.html
sed -i.bak 's|data/differentiation/sglt2.html|groups/SGLT2_evolution_model.html|g' docs/index.html
# ... 他の修正

# source_materials/からHTMLページ作成
# 例：ペニシリンストーリー
# source_materials/drug_stories/discovery_legends/01_penicillin/01_penicillin_story_pure.md
# → docs/stories/penicillin.html として変換
```

## 💡 長期的ビジョン

リンクは単なる技術的要素ではない。それは、ユーザーの学習journey を導く道標である。

完璧なリンク構造により：
- ユーザーは迷うことなく目的地に到達
- 関連知識への自然な導線
- 深い学習体験の実現

**Remember**: Every link is a promise. Keep your promises.

---

**次のドキュメント**: [BRAND_UNIFICATION_CHECKLIST.md](./BRAND_UNIFICATION_CHECKLIST.md)