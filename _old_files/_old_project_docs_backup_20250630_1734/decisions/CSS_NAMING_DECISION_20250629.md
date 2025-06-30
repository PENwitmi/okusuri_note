# CSS命名規則決定事項
**決定日時**: 2025-06-29 19:10
**決定者**: CEO
**承認者**: Manager（通知予定）

## 🎯 決定事項

### 薬剤詳細ページのCSS名
**正式名称**: `drug-detail.css`

### 理由
1. **既存資産の活用**: 28KBの完成されたCSSファイルが`drug-detail.css`として存在
2. **意味的な正確性**: 「薬剤詳細」を表す`drug-detail`が内容を正確に表現
3. **修正コストの最小化**: Dev2が既に全ファイルを`drug-detail.css`参照に統一済み

## 📋 統一ルール

### 薬剤ページのCSS参照方法
```html
<!-- 推奨パターンA（シンプル）-->
<link rel="stylesheet" href="../css/drug-detail.css">

<!-- 推奨パターンB（共通スタイル含む）-->
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/drug-detail.css">
```

### その他のCSS命名規則
| ページ種別 | CSSファイル名 | 用途 |
|-----------|--------------|------|
| トップページ | style.css | 共通スタイル |
| 薬剤詳細 | drug-detail.css | 薬剤個別ページ |
| カテゴリ比較 | category-comparison.css | 薬効群比較ページ |
| 使い分け表 | differentiation-table.css | 使い分け一覧 |
| ストーリー | story-layout.css | 開発物語ページ |

## ⚠️ 注意事項
- `drug-page.css`という名前は**使用禁止**
- 新規CSSファイルはkebab-case命名を遵守
- 意味的に正確な名前を選択

## 📢 通知事項
この決定はすべてのチームメンバーに周知し、今後の開発で遵守すること。

## 更新履歴
- 2025-06-29 19:10: 初版作成・決定