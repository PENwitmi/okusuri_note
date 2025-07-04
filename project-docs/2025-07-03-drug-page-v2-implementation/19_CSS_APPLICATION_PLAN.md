# Step 3: CSS付与作業計画

**作成日時**: 2025-07-03 23:40  
**作成者**: CEO  
**対象**: drug_cssed内の全ファイル

---

## 📊 現在の準備状況

### drug_cssedディレクトリ（23:40時点）
```
完了: 10薬剤
- グループA: 9薬剤（クラスなし→要付与）
- グループC: 1薬剤（atorvastatin、クラス調整済み）

作業中: 9薬剤
- グループB: Manager作業中（クラス追加後にコピー予定）
```

---

## 🎯 CSS付与の基本方針

### 使用するクラス（29個）
`04_TEMPLATE_ANALYSIS.md`に基づく標準クラスセット：

#### 構造系（7個）
- drug-detail（body）
- container（各セクション内）
- level-selector, level-selector__inner
- level-btn, active
- card（汎用カード）

#### 薬剤情報系（8個）
- drug-header, brand-name, generic-name
- drug-classification, drug-class, generation
- indications, indications__list

#### コンテンツ系（11個）
- quick-summary, impact-grid, impact-item
- faq-note, prescribing-data, design-spec
- combination-drugs, combination-drugs__list
- quote-box, specialist-perspective

#### レベル系（3個）
- level-1-content, level-2-content, level-3-content

---

## 📝 作業手順

### Phase 1: グループA（9薬剤）への付与

**対象ファイル**:
```
candesartan, dapagliflozin, empagliflozin, 
enalapril, escitalopram, losartan, 
perindopril, sertraline, vancomycin
```

**作業内容**:
1. bodyタグに `class="drug-detail" data-category="[薬効群]"`
2. 各構造要素に適切なクラスを付与
3. metformin-refined.htmlを参照しながら実施

### Phase 2: グループB確認（9薬剤）

**Manager作業完了後**:
- クラス付与状況の確認
- 不足があれば追加
- 統一性の確保

### Phase 3: 最終確認

**全19薬剤共通**:
- クラス数の確認（29個前後）
- 動作確認（レベル切り替え）
- drugs-v2への最終配置

---

## 🔧 具体的な付与例

### 1. body要素
```html
<!-- 変更前 -->
<body>

<!-- 変更後 -->
<body class="drug-detail" data-category="cardiovascular">
<!-- cardiovascular, endocrine, cns等、薬効群に応じて設定 -->
```

### 2. レベルセレクター
```html
<!-- 変更前 -->
<div>
    <div>
        <button data-level="1">薬学生</button>

<!-- 変更後 -->
<div class="level-selector">
    <div class="level-selector__inner">
        <button class="level-btn active" data-level="1">薬学生</button>
```

### 3. 薬剤ヘッダー
```html
<!-- 変更前 -->
<div>
    <h1>薬剤名</h1>
    <p>一般名</p>

<!-- 変更後 -->
<div class="drug-header">
    <h1 class="brand-name">薬剤名</h1>
    <p class="generic-name">一般名</p>
```

---

## ⏰ 作業時間見積もり

### CEO担当（9-10薬剤）
- 1薬剤あたり: 5-10分
- 合計: 約1.5時間

### Manager担当（9-10薬剤）
- 1薬剤あたり: 5-10分
- 合計: 約1.5時間

**並行作業により約1.5時間で全19薬剤完了見込み**

---

## ✅ 品質チェックリスト

各薬剤完了時に確認：
- [ ] bodyタグのclass設定
- [ ] data-categoryの適切な設定
- [ ] レベルセレクターの完全実装
- [ ] containerクラスの配置
- [ ] 薬剤情報系クラスの付与
- [ ] JavaScriptが動作すること

---

## 🚀 開始条件

1. Manager作業（グループB）の完了
2. 全19薬剤がdrug_cssedに配置
3. CEO-Manager作業分担の決定

**開始予定**: 24:00頃