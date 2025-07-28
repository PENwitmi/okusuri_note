# components.css と feature-page.css のクラス定義重複調査報告

**作成日**: 2025-07-27 22:27  
**調査対象**: components.css と feature-page.css  
**調査目的**: 両CSSファイル間でのクラス名重複の確認

## 調査結果

### CSSファイルの概要

| ファイル | 定義クラス数 | 作成日 | 主な用途 |
|---------|------------|--------|----------|
| components.css | 38クラス | 2025-07-16 | 汎用コンポーネントスタイル（ボックス、テーブル、セクション、グリッド） |
| feature-page.css | 111クラス | - | 特集ページ専用スタイル |

### 重複しているクラス

両ファイルで定義されているクラスは **2個** のみ：
1. `comparison-table`
2. `comparison-table-wrapper`

## 重複クラスの詳細比較

### 1. comparison-table クラス

#### components.css での定義（252-264行目）
```css
/* 比較テーブル（ダークネイビーヘッダー） */
.comparison-table { 
    overflow-x: auto; 
    margin-top: 2rem; 
}
.comparison-table h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
}
.comparison-table table { 
    width: 100%; 
    border-collapse: collapse; 
    background: white; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
}
```

#### feature-page.css での定義（784-800行目）
```css
/* 比較表（汎用） - ダークネイビーヘッダー版 */
.comparison-table { 
    overflow-x: auto; 
    margin-top: 2rem; 
}

.comparison-table h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
}

table.comparison-table { 
    width: 100%; 
    border-collapse: collapse; 
    background: white; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
}
```

**相違点**:
- components.css: `.comparison-table table` セレクタを使用
- feature-page.css: `table.comparison-table` セレクタを使用
- その他のスタイル定義は完全に同一

### 2. comparison-table-wrapper クラス

#### components.css での定義（246-250行目）
```css
.comparison-table-wrapper,
.data-table-wrapper,
.clinical-table-wrapper,
.summary-table-wrapper {
    margin-bottom: 40px;
    overflow-x: auto;
}
```

#### feature-page.css での定義（768-770行目）
```css
.comparison-table-wrapper {
    margin-bottom: 40px;
}
```

**相違点**:
- components.css: 他の3つのクラスと共通定義、`overflow-x: auto` を含む
- feature-page.css: 単独定義、`overflow-x` プロパティなし

## その他の関連クラス

### feature-page.css にのみ存在する comparison-table 関連クラス
- `table.comparison-table th` (802-808行目)
- `table.comparison-table th:not(.hfref):not(.hfpef)` (811-813行目)
- `table.comparison-table th small` (815-820行目)
- `table.comparison-table td` (822-826行目)
- `table.comparison-table .category` (828-832行目)
- `table.comparison-table td strong` (835-838行目)
- `table.comparison-table td:first-child` (841-845行目)
- `table.comparison-table tbody tr:hover` (847-849行目)
- `table.comparison-table strong` (851-853行目)

### モバイル対応（@media内）での追加定義
feature-page.css には、768px以下のモバイル表示用に以下の追加定義が存在：
- 1090-1097行目: フォントサイズとパディングの調整
- 1106-1161行目: 横スクロールとsticky列の実装

## まとめ

- 重複クラスは2個のみ（comparison-table、comparison-table-wrapper）
- 基本的な定義はほぼ同一（コメントからコピペの可能性が高い）
- feature-page.css の方が詳細な定義を含む（特にテーブル要素の細かいスタイリング）
- モバイル対応は feature-page.css のみに実装されている