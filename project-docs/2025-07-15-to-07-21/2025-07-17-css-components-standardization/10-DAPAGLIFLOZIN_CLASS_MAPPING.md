# dapagliflozin.html クラスマッピングと適用計画

**作成日時**: 2025-07-17 20:13  
**対象ファイル**: `/docs/drugs/dapagliflozin.html`  
**目的**: 使用クラスの定義場所特定とcomponents.css適用プランの策定

## 1. 現在のcomponents.css使用状況

### 1.1 使用状況サマリー
| クラス名 | 使用箇所数 | 行番号 | 備考 |
|---------|-----------|--------|------|
| info-box | 1箇所 | 173 | インラインスタイル付き |
| content-section | 2箇所 | 308, 317 | レベル3コンテンツで使用 |
| content-grid | 2箇所 | 185, 212 | ✅components.css活用済み |
| content-item | 7箇所 | 186, 192, 198, 213, 218, 223, 228 | ✅components.css活用済み |
| alert-box | 0箇所 | - | 未使用 |
| highlight-box | 0箇所 | - | 未使用 |
| **合計** | **13箇所** | - | sacubitril修正後（11箇所）より多い |

### 1.2 他ファイルとの比較（更新版）
| ファイル | components.css使用箇所 | 状態 |
|---------|----------------------|------|
| lemborexant.html | 22箇所 | 最高水準 |
| dapagliflozin.html | 13箇所 | 良好 |
| sacubitril-valsartan.html（修正後） | 11箇所 | 良好 |
| sacubitril-valsartan.html（修正前） | 0箇所 | 要改善 |

## 2. 使用クラス一覧と定義場所

### 2.1 基本レイアウトクラス
| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `drug-detail` | drug-page-v2.css | body要素のベースクラス | ✅定義済み |
| `sidebar-layout` | sidebar.css | サイドバー付きレイアウト | ✅定義済み |
| `sidebar` | sidebar.css | サイドバー本体 | ✅定義済み |
| `main-content` | drug-page-v2.css | メインコンテンツエリア | ✅定義済み |

### 2.2 薬剤情報クラス
| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `drug-header` | drug-page-v2.css | 薬剤ヘッダー | ✅定義済み |
| `brand-name` | drug-page-v2.css | 商品名 | ✅定義済み |
| `generic-name` | drug-page-v2.css | 一般名 | ✅定義済み |
| `drug-classification` | drug-page-v2.css | 薬剤分類 | ✅定義済み |
| `drug-class` | drug-page-v2.css | 薬効分類 | ✅定義済み |
| `generation` | drug-page-v2.css | 世代表示 | ✅定義済み |

### 2.3 コンテンツ構造クラス
| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `container` | drug-page-v2.css | 基本コンテナ | ✅定義済み |
| `impact-grid` | drug-page-v2.css | インパクトグリッド | ✅定義済み |
| `impact-item` | drug-page-v2.css | インパクトアイテム | ✅定義済み |
| `indications` | drug-page-v2.css | 適応症セクション | ✅定義済み |
| `indications__list` | drug-page-v2.css | 適応症リスト | ✅定義済み |
| `quick-summary` | drug-page-v2.css | クイックサマリー | ✅定義済み |

### 2.4 特殊スタイルクラス（改善候補）
| クラス名 | 定義場所 | 用途 | 状態 | components.css代替案 |
|---------|----------|------|------|-------------------|
| `faq-note` | drug-page-v2.css | FAQ注記 | ✅定義済み | そのまま維持（良好なデザイン） |
| `prescribing-data` | drug-page-v2.css | 処方データ | ✅定義済み | そのまま維持 |
| `design-spec` | drug-page-v2.css | 処方仕様 | ✅定義済み | そのまま維持 |
| `combination-drugs` | drug-page-v2.css | 併用薬セクション | ✅定義済み | そのまま維持 |
| `combination-drugs__list` | drug-page-v2.css | 併用薬リスト | ✅定義済み | そのまま維持 |
| `comparison-table` | components.css | 比較テーブル | ✅components.css使用中 | - |
| `card` | components.css | カード要素 | ✅components.css使用中 | - |
| `level-hint` | drug-page-v2.css | レベルヒント | ✅定義済み | そのまま維持 |

## 3. 装飾不足箇所の特定

### 3.1 FAQ部分（240-255行目）
**現状**:
```html
<dl>
    <dt>Q: なぜダパグリフロジンは「糖を捨てる」という発想が革命的なの？</dt>
    <dd>A: 従来の糖尿病薬はすべて...</dd>
</dl>
```
- dl要素にクラスが振られていない
- 構造化されていない

**改善案**:
- content-sectionで全体を包含
- FAQの視覚的構造化

### 3.2 レベル2コンテンツの各項目
**現状**:
- card level-2-contentクラスが使用されている（sacubitrilと同様）
- 内部の項目が構造化されていない可能性

**改善案**:
- cardをcontent-sectionに変更
- 内部項目にinfo-boxを適用

### 3.3 重要な注意事項
**現状**:
- 注意事項にalert-boxが使われていない

**改善案**:
- 重要な副作用情報にalert-box適用

## 4. 実装優先順位

### Phase 1: FAQ部分の構造化（優先度：高）
1. dl要素全体をcontent-sectionで包含
2. 視覚的な構造化により読みやすさ向上

### Phase 2: レベル2コンテンツの改善（優先度：中）
1. card → content-sectionへの変更
2. 内部項目へのinfo-box適用

### Phase 3: 注意事項の強調（優先度：中）
1. 重要な副作用情報へのalert-box適用
2. 注意喚起の視覚化

## 5. 期待される効果

### 定量的効果
- components.css使用箇所：13箇所 → 約20箇所（目標）
- 構造化されたセクション：2個 → 5個以上
- 視覚的に強調された注意事項：0個 → 2個以上

### 定性的効果
- lemborexant.htmlと同等レベルの視覚的品質
- FAQ部分の読みやすさ向上
- 重要情報の視認性向上

## 6. 注意事項

### 既に良好な部分は維持
- content-grid/content-item（7箇所）
- faq-note（1箇所）
- prescribing-data/design-spec（3箇所）
- combination-drugs関連（複数箇所）

### 重点改善エリア
- FAQ部分の構造化
- レベル2コンテンツの各項目
- 重要な注意事項の強調

## 7. 結論

dapagliflozin.htmlは既に13箇所でcomponents.cssを使用しており、sacubitril-valsartan.htmlの修正後（11箇所）よりも良好な状態です。しかし、lemborexant.html（22箇所）と比較するとまだ改善の余地があります。

特に、FAQ部分の構造化と重要情報の視覚的強調が主な改善ポイントとなります。