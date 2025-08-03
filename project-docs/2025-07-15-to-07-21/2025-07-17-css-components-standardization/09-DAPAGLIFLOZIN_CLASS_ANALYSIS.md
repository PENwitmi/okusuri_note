# dapagliflozin.html クラス分析ドキュメント

**作成日時**: 2025-07-17 17:15  
**対象ファイル**: `/docs/drugs/dapagliflozin.html`  
**目的**: 使用クラスの洗い出しとcomponents.css適用計画の策定

## 1. 初期調査結果

### 1.1 CSSファイルのリンク状況
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/sidebar.css">
<link rel="stylesheet" href="../assets/css/mobile-controls.css">
<link rel="stylesheet" href="../assets/css/level-selector.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/components.css">
```
✅ components.cssは適切にリンクされています（15行目）

### 1.2 components.css使用状況
| クラス名 | 使用箇所数 | 行番号 |
|---------|-----------|--------|
| info-box | 1箇所 | 173 |
| content-section | 2箇所 | 308, 317 |
| alert-box | 0箇所 | - |
| highlight-box | 0箇所 | - |
| **合計** | **3箇所** | - |

### 1.3 他ファイルとの比較
| ファイル | components.css使用箇所 |
|---------|----------------------|
| lemborexant.html | 22箇所 |
| dapagliflozin.html | 3箇所 |
| sacubitril-valsartan.html（修正前） | 0箇所 |
| sacubitril-valsartan.html（修正後） | 11箇所 |

## 2. 使用クラス詳細分析

### 2.1 基本レイアウトクラス
- drug-detail
- sidebar-layout
- sidebar
- main-content

### 2.2 サイドバー関連クラス
- sidebar-section
- sidebar-title
- sidebar-links
- sidebar-link
- category-desc
- drug-category

### 2.3 レベル選択関連クラス
- level-selector
- level-selector__inner
- level-btn
- level-indicator
- level-1-indicator
- level-2-indicator
- level-3-indicator

### 2.4 薬剤情報クラス
- drug-header
- brand-name
- generic-name
- drug-classification
- drug-class
- generation

### 2.5 コンテンツクラス
- level-1-content
- level-2-content
- level-3-content
- indications
- indications__list
- quick-summary
- container
- impact-grid
- impact-item

### 2.6 その他の固有クラス（要調査）
- prescribing-pattern
- combination-note
- feature-cards
- mechanism-detail
- 他（詳細調査中）

## 3. 装飾不足の可能性がある箇所

### 3.1 レベル1コンテンツ
- FAQ部分（dl/dt/dd要素）
- 薬理学基礎セクション
- 注意事項セクション

### 3.2 レベル2コンテンツ
- なぜSGLT2阻害薬なのかセクション
- 処方パターン詳細
- 他剤との使い分け

### 3.3 レベル3コンテンツ
- 開発ストーリー
- 臨床試験データ
- 最新エビデンス

## 4. 改善方針（仮）

### Phase 1: 即効性の高い改善
- FAQ部分への構造化（content-section + info-box）
- 重要な注意事項へのalert-box適用
- レベル2の各項目へのinfo-box適用

### Phase 2: セクション構造化
- 主要セクションへのcontent-section適用
- 開発ストーリーセクションの構造化

### Phase 3: 視覚的強調
- 重要データへのhighlight-box適用
- 警告事項へのalert-box適用

## 5. 次のステップ

1. 全クラスの詳細な洗い出し（grep実行）
2. 各クラスのCSS定義場所の特定
3. lemborexant.htmlとの詳細比較
4. 具体的な修正計画の策定
5. バックアップ作成後、実装開始