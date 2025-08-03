# metformin.html クラス分析ドキュメント

**作成日時**: 2025-07-17 22:48  
**対象ファイル**: `/docs/drugs/metformin.html`  
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
✅ components.cssは適切にリンクされています（13行目）

### 1.2 components.css使用状況
| クラス名 | 使用箇所数 | 行番号 | 備考 |
|---------|-----------|--------|------|
| quote-box | 1箇所 | 217 | ✅components.css活用 |
| info-box | 0箇所 | - | 未使用 |
| content-section | 0箇所 | - | 未使用 |
| alert-box | 0箇所 | - | 未使用 |
| highlight-box | 0箇所 | - | 未使用 |
| content-grid | 0箇所 | - | 未使用 |
| content-item | 0箇所 | - | 未使用 |
| comparison-table | 0箇所 | - | 未使用 |
| **合計** | **1箇所** | - | 改善余地大 |

### 1.3 他ファイルとの比較
| ファイル | components.css使用箇所 | 状態 |
|---------|----------------------|------|
| dapagliflozin.html（修正後） | 28箇所 | 最高水準 |
| lemborexant.html | 22箇所 | 高水準 |
| telmisartan.html（修正後） | 19箇所 | 良好 |
| sacubitril-valsartan.html（修正後） | 11箇所 | 良好 |
| metformin.html（現在） | 1箇所 | 最低水準 |

## 2. 使用クラス頻度分析

### 2.1 上位使用クラス（出現回数）
| クラス名 | 使用回数 | 備考 |
|---------|---------|------|
| impact-item | 13回 | インパクトアイテム |
| sidebar-link | 6回 | サイドバーリンク |
| combination-box | 5回 | 併用薬ボックス |
| container | 5回 | 基本コンテナ |
| level-1/2/3-content | 各3-5回 | レベル別コンテンツ |
| prescribing-data | 3回 | 処方データ |
| design-spec | 3回 | 処方仕様 |

### 2.2 注目すべき固有クラス
- combination-box（5回）- 併用薬情報
- combination-drugs（複数）- 併用薬関連
- quote-box（1回）- 既にcomponents.css活用

## 3. 改善可能箇所の特定

### 3.1 FAQ部分（279-294行）
**現状**: 構造化されていない
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>...</dl>
    </div>
</section>
```

### 3.2 番号付き項目（多数）
#### レベル2コンテンツ（301-322行）
- 1. 安全性の圧倒的蓄積
- 2. 効果の確実性
- 3. 心血管保護（UKPDS試験）
- 4. 体重中性
- 5. コストパフォーマンス

#### 日本の特殊事情（343-356行）
- 1. SU薬中心主義の長期継続
- 2. フェンホルミン事件のトラウマ

#### 詳細な理由（702-721行）
- 1. フェンホルミン事件のトラウマ
- 2. SU薬の成功体験
- 3. 欧米データへの不信

**合計**: 10箇所以上の番号付き項目

### 3.3 重要な副作用・警告（多数）
- **乳酸アシドーシス**（213-242行）：重要な副作用セクション
- **絶対禁忌**（248-255行）：腎機能高度低下等
- **重要な注意点**（258-265行）：造影剤使用時等
- **服薬指導のポイント**（268-275行）

### 3.4 臨床試験・重要データ
- **UKPDS試験結果**（313行）：全死亡36%減少、糖尿病関連死42%減少
- **フェンホルミン事件のデータ**（580-582行）：年間300-400人死亡
- **メトホルミンの安全性データ**（648行）：乳酸アシドーシス発生率1万人に0.03例

## 4. 改善方針

### Phase 1: 基本構造化（優先度：高）
1. FAQ部分をcontent-sectionで包含
2. 重要な副作用セクション全体の構造化

### Phase 2: 番号付き項目改善（優先度：高）
1. レベル2コンテンツの5項目にinfo-box適用
2. 日本の特殊事情の2項目にinfo-box適用
3. 詳細な理由の3項目にinfo-box適用

### Phase 3: 重要情報の強調（優先度：高）
1. 乳酸アシドーシス警告にalert-box適用
2. 絶対禁忌・重要な注意点にalert-box適用
3. UKPDS試験結果にhighlight-box適用
4. フェンホルミン事件の重要データにhighlight-box適用

## 5. 期待される成果

### 定量的指標
- components.css使用：1箇所 → 25箇所以上（目標）
- 構造化セクション：0個 → 2個以上
- 強調表示：1個（quote-box）→ 6個以上

### 定性的改善
- 重要な副作用情報の視認性向上
- 歴史的背景の構造化
- 臨床データの視覚的強調
- 全体的な統一感の向上

## 6. 特記事項

metformin.htmlは現在components.cssをほとんど活用していない状態（1箇所のみ）ですが、重要な医薬品安全性情報（乳酸アシドーシス、フェンホルミン事件）を多く含んでいるため、改善の優先度と効果が非常に高いと考えられます。