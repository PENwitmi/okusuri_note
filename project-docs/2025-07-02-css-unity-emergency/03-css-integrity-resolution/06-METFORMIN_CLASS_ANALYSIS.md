# メトホルミンHTML クラス分析レポート

**作成日時**: 2025-07-02 23:45  
**作成者**: CEO  
**目的**: メトホルミンHTMLのクラス使用状況を分析し、共通化戦略を策定  
**重要度**: 高（CSS削減の具体的実装の第一歩）

---

## 📌 現状分析

### 数値サマリー
```
メトホルミンHTML使用クラス: 168個
既存CSSとの重複: 約10個（推定）
新規実装が必要: 約158個
```

### 問題点
- 1つの薬剤ページで168個は明らかに過剰
- 薬剤固有のクラス名が多すぎる（`ampk-effects`等）
- 汎用的に使えるはずのクラスが薬剤名付きで定義

---

## 🔍 クラスの分類と共通化提案

### 1. 構造系クラス（共通化優先度: 最高）

#### 現状のクラス例
```
drug-container-metformin
section-header-metabolism
content-wrapper-diabetes
```

#### 共通化提案
```html
<!-- Before -->
<div class="drug-container-metformin">
<div class="section-header-metabolism">

<!-- After -->
<div class="drug-container" data-drug="metformin">
<div class="section-header" data-topic="metabolism">
```

**削減効果**: 約30個 → 5個

### 2. 臨床情報系クラス（共通化優先度: 高）

#### 現状のクラス例
```
clinical-benefit-glycemic
clinical-trial-ukpds
patient-selection-t2dm
monitoring-parameters-metformin
```

#### 共通化提案
```html
<!-- Before -->
<div class="clinical-benefit-glycemic">
<div class="clinical-trial-ukpds">

<!-- After -->
<div class="clinical-benefit" data-type="primary">
<div class="clinical-trial" data-study="ukpds">
```

**削減効果**: 約40個 → 8個

### 3. 薬理作用系クラス（部分的共通化）

#### 現状のクラス例
```
ampk-effects              /* メトホルミン特有 */
glucose-production        /* 糖尿病薬共通 */
insulin-sensitivity       /* 糖尿病薬共通 */
microbiome-changes       /* メトホルミン特有 */
```

#### 共通化提案
```html
<!-- すべて共通化 -->
<div class="mechanism-effect" data-target="glucose-production">
<div class="mechanism-effect" data-target="insulin-sensitivity">
<div class="mechanism-effect" data-target="ampk-activation">
<div class="mechanism-effect" data-target="microbiome">
```

**削減効果**: 約30個 → 1個（mechanism-effectのみ）

### 4. 警告・注意系クラス（完全共通化）

#### 現状のクラス例
```
warning-lactic-acidosis
contraindication-egfr
caution-gi-symptoms
monitoring-b12
```

#### 共通化提案
```html
<!-- Before -->
<div class="warning-lactic-acidosis">
<div class="contraindication-egfr">

<!-- After -->
<div class="warning warning--severe" data-condition="lactic-acidosis">
<div class="contraindication" data-parameter="egfr">
```

**削減効果**: 約20個 → 4個

### 5. UI要素系クラス（完全共通化）

#### 現状のクラス例
```
expand-button-clinical
collapse-icon-studies
toggle-content-mechanism
show-more-benefits
```

#### 共通化提案
```html
<!-- Before -->
<button class="expand-button-clinical">
<span class="collapse-icon-studies">

<!-- After -->
<button class="btn-expand" data-target="clinical">
<span class="icon-collapse">
```

**削減効果**: 約30個 → 6個

### 6. 学習レベル系クラス（既に共通化済み）

```
level-1-content
level-2-content
level-3-content
```

**削減効果**: なし（既に最適）

---

## 📊 共通化による削減効果予測

### カテゴリ別削減
| カテゴリ | 現状 | 共通化後 | 削減率 |
|---------|------|----------|--------|
| 構造系 | 30個 | 5個 | 83% |
| 臨床情報系 | 40個 | 8個 | 80% |
| 薬理作用系 | 30個 | 1個 | 97% |
| 警告・注意系 | 20個 | 4個 | 80% |
| UI要素系 | 30個 | 6個 | 80% |
| その他 | 18個 | 10個 | 44% |
| **合計** | **168個** | **34個** | **80%** |

### 3薬剤全体での予測
```
現状: 637個（3薬剤合計）
共通化後: 
  - 共通クラス: 40個
  - 薬効群クラス: 10個
  - 薬剤固有: 0個（完全排除）
  - 合計: 50個
削減率: 92%
```

---

## 🎯 実装戦略

### Phase 1: HTMLクラスの書き換え（2時間）
1. メトホルミンHTMLのバックアップ作成
2. 共通クラスへの置換作業
3. data属性での薬剤固有情報の保持

### Phase 2: 共通CSS作成（3時間）
```css
/* ver2-unified.css内に統合 */

/* 構造系 */
.drug-container { ... }
.section-header { ... }

/* 臨床情報系 */
.clinical-benefit { ... }
.clinical-trial { ... }

/* 薬理作用系 */
.mechanism-effect { ... }

/* 警告系 */
.warning { ... }
.warning--severe { ... }

/* 薬効群スタイル（薬剤固有は作らない） */
[data-category="diabetes"] {
    --theme-color: var(--category-endocrine);
}
```

---

## 📝 次のステップ

1. **メトホルミンHTMLの詳細分析**
   - 全168個のクラスをリストアップ
   - 共通化可能/不可能の分類

2. **共通クラス命名規則の確定**
   - BEM記法の採用
   - data属性の活用方針

3. **実装開始**
   - まず10個のクラスで試験的実装
   - 動作確認後、全面展開

---

## 🚀 期待される成果

1. **開発効率の劇的向上**
   - 新薬剤追加: 2日 → 1時間（薬剤固有CSS不要）
   - メンテナンス: 90%削減

2. **パフォーマンス向上**
   - CSSファイルサイズ: 90%削減
   - 読み込み時間: 50%短縮

3. **保守性の向上**
   - 1箇所の修正で全薬剤に反映
   - 命名規則の統一で可読性向上

---

**文書作成完了**: 2025-07-02 23:45  
**次のアクション**: メトホルミンHTML全クラスの詳細リストアップと分類