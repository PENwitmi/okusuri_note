# 薬剤ページ設計原則
**作成日**: 2025-07-01 23:00  
**作成者**: CEO  
**目的**: ユーザーフィードバックに基づく設計原則の明文化

---

## 🎯 重要な設計原則

### 1. 例外情報の優先表示
**原則**: 「普通のこと」は書かない、「注意すべきこと」を強調する

#### ❌ 避けるべき記載
```
粉砕: 可能
一包化: 可能  
半錠: 可能
保存: 室温
```
→ これらは大半の薬剤で共通なので、情報価値が低い

#### ✅ 記載すべき情報
```
粉砕不可（腸溶錠）
水以外での服用不可（キレート形成）
冷所保存必須
食前服用厳守
```
→ これらは薬剤特有の注意事項で、実習で困る可能性がある

### 2. 情報の密度と可読性のバランス

#### 問題
「全部の薬に粉砕の可否を書いていたら読みにくい」

#### 解決策
- **条件付き表示**: 注意事項がある場合のみセクションを表示
- **視覚的階層**: 重要度に応じた強調表示
- **簡潔な記述**: 理由は括弧内に短く

---

## 📋 調剤注意事項の判断基準

### 必ず記載すべき事項

#### 1. 剤形に関する制限
- 粉砕不可（腸溶錠、徐放錠）
- 分割不可（特殊コーティング）
- 噛み砕き不可（舌下錠）

#### 2. 服用方法の制限
- 水以外での服用不可
- 食前・食後の厳密な指定
- 服用時の体位指定（起立性）

#### 3. 保存方法の特殊性
- 冷所保存
- 遮光保存
- 湿気厳禁

#### 4. 取り扱い上の注意
- 素手で触れない（抗がん剤）
- 専用器具が必要
- 廃棄方法の指定

### 記載不要な事項
- 粉砕可能
- 一包化可能
- 室温保存
- 通常の服用方法

---

## 🎨 UIデザインの実装方針

### 条件付き表示の実装
```html
<!-- 注意事項がある場合 -->
<div class="formulation-alerts" v-if="hasAlerts">
    <h4>⚠️ 調剤上の重要注意</h4>
    <ul>
        <!-- 該当する注意事項のみ表示 -->
    </ul>
</div>

<!-- 注意事項がない場合 -->
<div class="standard-notice" v-else>
    <p>通常の調剤で問題ありません</p>
</div>
```

### 視覚的強調のルール
```css
/* 禁止事項 */
.no-crush, .no-divide {
    color: var(--danger);
    font-weight: bold;
}

/* 注意事項 */
.water-only, .special-timing {
    color: var(--warning);
    font-weight: 600;
}

/* 理由説明 */
.reason {
    color: #666;
    font-size: 0.9em;
    font-weight: normal;
}
```

---

## 📝 具体例

### ケース1: メトホルミン（通常錠）
```html
<div class="standard-notice">
    <p>通常の調剤で問題ありません</p>
</div>
```

### ケース2: メトホルミン（徐放錠）
```html
<div class="formulation-alerts">
    <h4>⚠️ 調剤上の重要注意</h4>
    <ul>
        <li class="no-crush">
            <strong>粉砕不可</strong>
            <span class="reason">（徐放性製剤）</span>
        </li>
    </ul>
</div>
```

### ケース3: アレンドロン酸（ビスホスホネート）
```html
<div class="formulation-alerts">
    <h4>⚠️ 調剤上の重要注意</h4>
    <ul>
        <li class="water-only">
            <strong>水以外での服用不可</strong>
            <span class="reason">（Ca含有飲料で吸収阻害）</span>
        </li>
        <li class="special-timing">
            <strong>起床時即服用・30分間絶食</strong>
            <span class="reason">（食道潰瘍予防）</span>
        </li>
    </ul>
</div>
```

---

## 🔍 今後の改善指針

### フィードバックの重要性
ユーザーからの「読みにくい」という直接的な指摘は、設計改善の最も重要な情報源です。

### 継続的な見直し
- 薬学生の実習での困りごとを収集
- 現場薬剤師からの意見を反映
- 情報の取捨選択を常に検討

### 原則の徹底
**「必要な情報を、必要な人に、必要なタイミングで」**

---

**この原則に基づいて、真に価値ある薬剤情報ページを作成していきます。**