# クラス共通化 実例集

**作成日時**: 2025-07-02 23:42  
**作成者**: CEO  
**目的**: 具体的なクラス共通化の実例を示し、実装イメージを明確化  
**重要度**: 高（実装者向けガイドライン）

---

## 📌 共通化の基本原則

1. **機能で分類、薬剤名は除外**
2. **data属性で固有情報を保持**
3. **BEM記法で階層を明確化**
4. **既存CSSを最大限活用**

---

## 🔄 実例1: 警告・注意系の共通化

### Before（現状）
```html
<!-- メトホルミン -->
<div class="contraindication-box">
  <div class="danger">腎機能低下</div>
  <div class="caution-box">消化器症状</div>
</div>

<!-- テルミサルタン -->
<div class="warning-hyperkalemia">
  <div class="alert-potassium">高カリウム血症</div>
</div>

<!-- ロスバスタチン -->
<div class="myopathy-warning">
  <div class="rhabdomyolysis-alert">横紋筋融解症</div>
</div>
```

### After（共通化後）
```html
<!-- 共通テンプレート -->
<div class="warning-container">
  <div class="warning warning--severe">
    <span class="warning__icon">⚠️</span>
    <span class="warning__text">腎機能低下</span>
  </div>
  <div class="warning warning--moderate">
    <span class="warning__icon">⚡</span>
    <span class="warning__text">消化器症状</span>
  </div>
</div>
```

### CSS（共通）
```css
.warning-container {
  margin: 1.5rem 0;
}

.warning {
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning--severe {
  background: var(--color-danger-light);
  border: 2px solid var(--color-danger);
}

.warning--moderate {
  background: var(--color-warning-light);
  border: 2px solid var(--color-warning);
}
```

**削減効果**: 9個のクラス → 3個の共通クラス

---

## 🔄 実例2: 薬効群バッジの実装（最小限の色分け）

### Before（現状）
```html
<!-- 各薬剤で異なるクラス -->
<body class="endo-theme">
  <span class="drug-class-badge endocrine">
    <i class="icon-endocrine">💊</i>
    ビグアナイド系糖尿病薬
  </span>
</body>
```

### After（共通化後）
```html
<!-- bodyテーマクラス廃止、バッジのみ色分け -->
<body>
  <span class="drug-class-badge" style="--badge-bg: var(--category-endocrine);">
    <i class="icon-drug">💊</i>
    ビグアナイド系糖尿病薬
  </span>
</body>
```

### CSS（共通）
```css
.drug-class-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background-color: var(--badge-bg, #f0f0f0);
  color: #fff;
}

.icon-drug {
  font-size: 1.2em;
}
```

**削減効果**: テーマクラス完全廃止、バッジのCSS変数のみで薬効群表現

---

## 🔄 実例3: 臨床データ表示の共通化

### Before（現状）
```html
<!-- メトホルミン -->
<div class="clinical-trial-ukpds">
  <div class="trial-name-ukpds">UKPDS試験</div>
  <div class="glycemic-reduction">HbA1c -2.0%</div>
</div>

<!-- テルミサルタン -->
<div class="clinical-study-ontarget">
  <div class="study-title-ontarget">ONTARGET試験</div>
  <div class="cv-risk-reduction">心血管リスク 21%減少</div>
</div>
```

### After（共通化後）
```html
<!-- 共通テンプレート -->
<div class="clinical-study" data-study="ukpds">
  <h3 class="clinical-study__title">UKPDS試験</h3>
  <div class="clinical-study__results">
    <div class="result-item">
      <span class="result-item__label">HbA1c</span>
      <span class="result-item__value">-2.0%</span>
    </div>
  </div>
</div>
```

### CSS（共通）
```css
.clinical-study {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-light);
}

.clinical-study__title {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-light);
}
```

---

## 🔄 実例4: 薬理作用の視覚化

### Before（現状）
```html
<!-- メトホルミン特有 -->
<div class="ampk-effects">
  <div class="ampk-activation">AMPK活性化</div>
  <div class="glucose-production">糖新生抑制</div>
</div>

<!-- テルミサルタン特有 -->
<div class="at1-blockade">
  <div class="receptor-binding">AT1受容体遮断</div>
  <div class="vasoconstriction-inhibition">血管収縮抑制</div>
</div>
```

### After（共通化後）
```html
<!-- 共通テンプレートのみ（薬剤固有・薬効群固有なし） -->
<div class="mechanism-display">
  <!-- 共通部分 -->
  <div class="mechanism-step">
    <span class="mechanism-step__number">1</span>
    <span class="mechanism-step__text">AMPK活性化</span>
  </div>
  
  <!-- 視覚効果 -->
  <div class="mechanism-visual">
    <!-- SVGやアニメーション -->
  </div>
</div>
```

### CSS（共通のみ）
```css
/* 共通CSS */
.mechanism-display {
  position: relative;
  padding: 2rem;
  background: var(--bg-secondary);
}

.mechanism-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

.mechanism-visual {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
}
```

---

## 🔄 実例5: タイムライン表示

### Before（現状）
```html
<!-- 各薬剤で別々 -->
<div class="adoption-timeline">
<div class="development-milestones">
<div class="approval-history">
```

### After（共通化後）
```html
<div class="timeline" data-type="drug-history">
  <div class="timeline__item timeline__item--highlight">
    <span class="timeline__year">1957</span>
    <span class="timeline__event">初回合成</span>
  </div>
  <div class="timeline__item">
    <span class="timeline__year">1995</span>
    <span class="timeline__event">FDA承認</span>
  </div>
</div>
```

---

## 📊 共通化による最終的な構成

### CSS ファイル構成
```
ver2-unified.css (50-60個のクラス)
├── @import "../style.css"
├── @import "../drug-detail.css"
├── 構造系 (10個)
├── レイアウト系 (10個)
├── タイポグラフィ (8個)
├── コンポーネント (15個)
├── ユーティリティ (10個)
└── 薬剤固有: 0個（完全排除）
```

### HTML での使用例
```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1つのCSSファイルのみ -->
  <link rel="stylesheet" href="../assets/css/ver2-unified.css">
</head>
<body>
  <div class="drug-container" data-drug="metformin">
    <!-- 共通クラスで構成、薬剤固有スタイルなし -->
  </div>
</body>
</html>
```

---

## 🎯 実装チェックリスト

- [ ] 警告系クラスの共通化
- [ ] 臨床データ表示の共通化
- [ ] タイムライン表示の共通化
- [ ] ボタン・アイコンの共通化
- [ ] レイアウトグリッドの共通化
- [ ] タイポグラフィの統一
- [ ] カラーシステムの統一

---

**文書作成完了**: 2025-07-02 23:42  
**次のアクション**: メトホルミンHTMLでの試験的実装開始