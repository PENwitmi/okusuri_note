# telmisartan.html クラス分析ドキュメント

**作成日時**: 2025-07-17 22:29  
**対象ファイル**: `/docs/drugs/telmisartan.html`  
**目的**: 使用クラスの洗い出しとcomponents.css適用状況の分析

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
| comparison-table | 1箇所 | 361 |
| info-box | 4箇所 | 552, 569, 584, 602 |
| content-section | 0箇所 | - |
| alert-box | 0箇所 | - |
| highlight-box | 0箇所 | - |
| content-grid | 0箇所 | - |
| content-item | 0箇所 | - |
| **合計** | **5箇所** | - |

### 1.3 他ファイルとの比較
| ファイル | components.css使用箇所 | 状態 |
|---------|----------------------|------|
| lemborexant.html | 22箇所 | 最高水準 |
| dapagliflozin.html（修正後） | 28箇所 | 最高水準達成 |
| dapagliflozin.html（修正前） | 13箇所 | 良好 |
| sacubitril-valsartan.html（修正後） | 11箇所 | 良好 |
| telmisartan.html（現在） | 5箇所 | 要改善 |
| sacubitril-valsartan.html（修正前） | 0箇所 | 最低水準 |

## 2. 使用クラス頻度分析

### 2.1 上位使用クラス（出現回数）
| クラス名 | 使用回数 | 備考 |
|---------|---------|------|
| impact-item | 12回 | インパクトアイテム |
| sidebar-link | 7回 | サイドバーリンク |
| container | 6回 | 基本コンテナ |
| info-box | 4回 | ✅components.css活用 |
| impact-grid | 4回 | インパクトグリッド |
| level-1/2/3-content | 各3-4回 | レベル別コンテンツ |
| prescribing-data | 3回 | 処方データ |
| design-spec | 3回 | 処方仕様 |

### 2.2 注目すべき単独使用クラス
- quote-box（1回）- 引用ボックス（要調査）
- quick-summary（1回）- クイックサマリー

## 3. 装飾不足の可能性がある箇所（推定）

### 3.1 components.css未使用クラス
- **content-section**: セクション構造化に使用可能
- **alert-box**: 重要な注意事項の強調に使用可能
- **highlight-box**: 臨床データの強調に使用可能
- **content-grid/content-item**: グリッドレイアウトに使用可能

### 3.2 改善対象候補
1. **FAQ部分**: 構造化されていない可能性
2. **レベル2コンテンツ**: 番号付き項目の構造化
3. **副作用・注意事項**: alert-boxでの強調
4. **臨床試験データ**: highlight-boxでの強調

## 4. 次のステップ

1. ファイル全体の詳細調査
2. FAQ部分の存在確認と現状分析
3. レベル2/3コンテンツの構造分析
4. quote-boxクラスの定義場所確認
5. 具体的な修正計画の策定