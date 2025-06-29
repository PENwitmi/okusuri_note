# PharmaDx 命名規則ガイド
**作成日時**: 2025-06-29 19:45
**目的**: 404エラー防止と開発者間の認識統一

## 📁 ファイル命名規則

### HTMLファイル
- **薬剤個別ページ**: `[drug-name].html` (英語小文字、ハイフン区切り)
  - ✅ 正: `candesartan.html`, `omeprazole.html`
  - ❌ 誤: `Candesartan.html`, `カンデサルタン.html`

### CSSファイル
- **形式**: `[category]-[function].css`
- **薬剤詳細ページ用CSS**: `drug-detail.css` （統一名称）
- **その他の例**:
  - `style.css` - メイン・共通スタイル
  - `category-comparison.css` - 薬効群比較ページ
  - `differentiation-table.css` - 使い分け表
  - `story-layout.css` - ストーリーページ

### JavaScriptファイル
- **形式**: `[function].js`
- **例**:
  - `search.js` - 検索機能
  - `navigation.js` - ナビゲーション
  - `drug-interaction.js` - 薬物相互作用

## 📂 ディレクトリ構造と相対パス

### 基本構造
```
docs/
├── index.html
├── css/
│   ├── style.css
│   └── drug-detail.css
├── js/
│   └── search.js
└── drugs/
    ├── candesartan.html
    └── omeprazole.html
```

### 相対パス参照ルール
**drugs/内のHTMLファイルから:**
- CSS参照: `../css/[filename].css`
- JS参照: `../js/[filename].js`
- トップページ: `../index.html`

**例（candesartan.html内）:**
```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/drug-detail.css">
<script src="../js/search.js"></script>
<a href="../index.html">ホーム</a>
```

## ⚠️ 重要な注意事項

### 禁止事項
1. **日本語ファイル名**: `薬効群比較.html` ❌
2. **大文字小文字の混在**: `DrugDetail.css` ❌
3. **スペースを含む名前**: `drug detail.css` ❌
4. **特殊文字**: `drug-detail!.css` ❌

### CSS統一ルール（2025-06-29決定）
- **drug-page.css は使用禁止**
- 薬剤詳細ページは必ず `drug-detail.css` を使用
- 新規作成時もこの命名規則を厳守

## 🔄 変更時の手順
1. 命名規則に従った新ファイル作成
2. 既存ファイルからの参照を全て更新
3. 古いファイルを削除
4. Git commit & push
5. GitHub Pagesでの動作確認

## 📝 チェックリスト
新規ファイル作成時:
- [ ] 英語小文字のみ使用
- [ ] ハイフンで単語区切り
- [ ] 機能が明確に分かる名前
- [ ] 既存の命名パターンに従う
- [ ] 相対パスが正しい

この命名規則により、404エラーを防ぎ、保守性の高いコードベースを維持します。