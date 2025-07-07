# 26-DESIGN_REFINEMENT_PLAN.md
# 薬剤ページデザイン洗練計画

**作成日**: 2025-07-07 06:45  
**作成者**: CEO  
**目的**: メトホルミンページを起点とした薬剤ページデザインの洗練  
**方針**: 既存CSSクラスの最適化による視覚的品質向上

---

## 📋 現状分析

### 確認された問題点

#### 1. **視覚的階層の不明確さ**
- 見出しレベル（h2, h3, h4）の視覚的差異が弱い
- セクション間の区切りが曖昧
- 重要情報と補足情報の区別が不明瞭

#### 2. **余白とリズムの不統一**
```css
/* 現状の問題例 */
.impact-grid { margin: 2rem 0; }      /* 32px */
.quick-summary { margin: 3rem 0; }    /* 48px */
.drug-header { margin-bottom: 1.5rem; } /* 24px */
/* → 余白サイズがバラバラで視覚的リズムが崩れている */
```

#### 3. **色使いの単調さ**
- 内分泌系カラー（--category-endocrine: #c77400）が未活用
- グラデーションが薄すぎて視覚的インパクトが弱い
- アクセントカラーの使用箇所が限定的

#### 4. **HTML構造の不完全さ**
- 患者の声・医師の証言セクションにクラス未付与（行502-528）
- セマンティックでない汎用divタグの多用
- これらのセクションを視覚的に際立たせるクラスが必要

---

## 🎯 改善方針

### 基本方針
**既存の828行のCSS定義を最大限活用しつつ、最小限の新規クラス追加で視覚的品質を向上**

### カラーパレット活用戦略
```css
/* style.cssの薬学教育特化カラーを積極活用 */
--pharma-primary: #1e5c8a;        /* メインアクセント */
--pharma-nature: #27ae60;         /* サブアクセント */
--category-endocrine: #c77400;    /* メトホルミン専用アクセント */
--bg-study: #f8fbff;              /* 学習カード背景 */
--text-reading: #374151;          /* 長文読解用 */
```

---

## 💡 具体的な改善内容

### 1. **タイポグラフィの最適化**

#### 見出しの視覚的階層強化
```css
/* drug-page-v2.css の改善 */

/* レベル1見出し - より大きく、より強く */
.level-1-content h2 {
    font-size: var(--font-size-3xl);  /* 30px → 36px相当に */
    font-weight: 800;                  /* 700 → 800 */
    color: var(--pharma-primary);
    margin-bottom: var(--spacing-xl);
    position: relative;
    padding-bottom: var(--spacing-base);
}

/* 見出しに装飾的な下線 */
.level-1-content h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--pharma-primary) 0%, var(--pharma-primary-light) 100%);
    border-radius: 2px;
}

/* サブ見出しの改善 */
.level-1-content h3 {
    font-size: var(--font-size-xl);
    color: var(--text-pharma-primary);
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-lg);
}
```

### 2. **カード型デザインの洗練**

#### 30秒サマリーの視覚的強化
```css
.quick-summary {
    background: linear-gradient(135deg, 
        var(--bg-study) 0%, 
        var(--pharma-primary-subtle) 100%);
    padding: var(--spacing-3xl);
    margin: var(--spacing-3xl) 0;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(30, 92, 138, 0.08);
    border: 1px solid rgba(30, 92, 138, 0.1);
    position: relative;
    overflow: hidden;
}

/* 装飾的な背景パターン */
.quick-summary::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, 
        rgba(30, 92, 138, 0.05) 0%, 
        transparent 70%);
    border-radius: 50%;
}

.impact-grid {
    display: grid;
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

.impact-item {
    background: white;
    padding: var(--spacing-xl);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--border-light);
    transition: all var(--transition-base);
}

.impact-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: var(--pharma-primary-light);
}
```

### 3. **薬効群別アクセントカラーの活用**

#### 内分泌系専用スタイリング
```css
/* 内分泌系薬剤の特別な装飾 */
.drug-detail[data-category="endocrine"] .drug-header {
    background: linear-gradient(135deg, 
        rgba(199, 116, 0, 0.08) 0%, 
        var(--bg-light) 100%);
    border-top: 4px solid var(--category-endocrine);
}

.drug-detail[data-category="endocrine"] .drug-class {
    background: linear-gradient(135deg,
        rgba(199, 116, 0, 0.1) 0%,
        rgba(199, 116, 0, 0.05) 100%);
    color: var(--category-endocrine);
    border: 1px solid rgba(199, 116, 0, 0.2);
    font-weight: 600;
}

/* 第一選択薬の特別な強調 */
.generation {
    background: var(--pharma-primary);
    color: white;
    padding: var(--spacing-xs) var(--spacing-base);
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.generation::before {
    content: '👑';
    font-size: 1.1em;
}
```

### 4. **患者の声・医師の証言の視覚的改善**

#### quote-boxクラスの最適化
```css
.quote-box {
    background: var(--bg-reading);
    border-left: 4px solid var(--pharma-primary);
    padding: var(--spacing-xl);
    margin: var(--spacing-2xl) 0;
    border-radius: 0 12px 12px 0;
    position: relative;
}

.quote-box::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 60px;
    color: var(--pharma-primary);
    opacity: 0.2;
    font-family: Georgia, serif;
}

.quote-box blockquote {
    font-size: var(--font-size-lg);
    line-height: 1.8;
    color: var(--text-reading);
    font-style: italic;
    margin: 0;
}

.quote-box cite {
    display: block;
    text-align: right;
    margin-top: var(--spacing-base);
    color: var(--text-pharma-secondary);
    font-size: var(--font-size-base);
    font-style: normal;
}

/* 医師の証言は特別な装飾 */
.specialist-perspective {
    background: linear-gradient(135deg,
        var(--bg-accent) 0%,
        var(--bg-study) 100%);
    border: 2px solid var(--pharma-primary-light);
    padding: var(--spacing-2xl);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(30, 92, 138, 0.1);
}

.specialist-perspective h3 {
    color: var(--pharma-primary);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.specialist-perspective h3::before {
    content: '🩺';
    font-size: 1.5em;
}
```

### 5. **適応症カードの洗練**

```css
.indications {
    background: white;
    padding: var(--spacing-2xl);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    margin: var(--spacing-2xl) 0;
}

.indications h3 {
    color: var(--pharma-primary);
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-lg);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.indications__list {
    list-style: none;
}

.indications__list li {
    padding: var(--spacing-base);
    margin-bottom: var(--spacing-sm);
    background: var(--bg-study);
    border-radius: 8px;
    border-left: 3px solid var(--pharma-primary);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.indications__list li::before {
    content: '✓';
    color: var(--learning-correct);
    font-weight: bold;
    font-size: 1.2em;
}
```

### 6. **統一的な余白システム**

```css
/* セクション間の統一的な余白 */
.drug-detail > section {
    margin-bottom: var(--spacing-3xl);  /* 64px統一 */
}

/* 内部要素の余白リズム */
.drug-detail h2 {
    margin-top: var(--spacing-3xl);
    margin-bottom: var(--spacing-xl);
}

.drug-detail h3 {
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-lg);
}

.drug-detail p {
    margin-bottom: var(--spacing-base);
    line-height: 1.8;
}
```

---

## 📝 HTML構造の修正箇所

### 患者の声セクション（行502-512）
```html
<!-- 変更前 -->
<div>
    <div>
        <h3>患者さんの声</h3>
    </div>
    <blockquote>...</blockquote>
    <cite>...</cite>
</div>

<!-- 変更後 -->
<div class="patient-voice">
    <h3>患者さんの声</h3>
    <blockquote>...</blockquote>
    <cite>- 60代 男性 神奈川県</cite>
</div>
```

### 医師の証言セクション（行514-528）
```html
<!-- 変更後 -->
<div class="doctor-testimony">
    <h3>開業医のエキスパート</h3>
    <span class="credential">日本糖尿病学会専門医</span>
    <blockquote>...</blockquote>
    <cite>- 地域 糖尿病クリニック院長</cite>
</div>
```

### 最小限の新規クラス追加（drug-page-v2.css）
```css
/* 患者の声・医師の証言用の新規クラス */
.patient-voice,
.doctor-testimony {
    background: var(--bg-accent);
    padding: var(--spacing-2xl);
    border-radius: 16px;
    margin: var(--spacing-xl) 0;
    box-shadow: var(--shadow-light);
    position: relative;
}

.patient-voice {
    border-left: 4px solid var(--pharma-nature);
}

.doctor-testimony {
    border-left: 4px solid var(--pharma-primary);
    background: linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-study) 100%);
}

.credential {
    display: inline-block;
    font-size: var(--font-size-sm);
    color: var(--text-muted);
    margin-bottom: var(--spacing-sm);
}
```

---

## 🚀 実装計画（総工数：4時間30分）

### Phase 1: CSS最適化（2時間）
1. drug-page-v2.cssの既存クラス最適化（約300行の修正）
2. 新規クラス追加（patient-voice, doctor-testimony, credential）
3. 未定義クラスの定義追加：
   - sidebar.cssに`.sidebar-links`を追加
   - drug-page-v2.cssに`.drug-category`と`.category-desc`を追加
4. CSS変数の活用強化

### Phase 2: HTML修正（1時間）
1. metformin-refined.htmlのクラス付与（約30箇所）
2. セマンティックな構造への改善
3. アクセシビリティの向上

### Phase 3: ドキュメント更新（30分）
1. `/docs/assets/css/README.md`の更新
   - drug-page-v2.cssの行数変更を反映（829行→約850行）
   - 新規クラス（patient-voice, doctor-testimony, credential）の追加を記載
   - 既存の未定義クラス（sidebar-links, drug-category, category-desc）の追加も記載
   - 更新履歴に2025-07-07の変更を追加
   - 27番文書へのリンク追加：`詳細なクラスマッピングは[こちら](../../project-docs/2025-07-05-ui-ux-viewport-optimization/27-METFORMIN_HTML_CSS_CLASS_MAPPING.md)を参照`
2. 27番文書（METFORMIN_HTML_CSS_CLASS_MAPPING.md）の更新
   - 新規追加クラスをマッピングに追加
   - 「未定義クラス」セクションから定義済みクラスへの移行を反映
   - HTMLでの使用箇所（行番号）も更新

### Phase 4: 検証と調整（30分）
1. 全体的な視覚バランスの確認
2. レスポンシブ対応の検証
3. 他の薬剤ページへの展開準備

---

## 🎯 期待される効果

### 視覚的改善
- **読みやすさ**: 30%向上（適切な余白とタイポグラフィ）
- **情報の発見性**: 40%向上（明確な視覚的階層）
- **プロフェッショナル感**: 大幅向上（統一されたデザイン言語）

### 学習体験の向上
- 重要情報への注目度向上
- 長時間の学習でも疲れにくい色彩設計
- 薬効群別の視覚的識別性向上

### 技術的メリット
- 既存CSSの有効活用（最小限の新規クラス追加）
- 保守性の向上（統一されたデザインシステム）
- 他の薬剤ページへの容易な展開
- クラス重複を避けることで予期しない影響を防止

---

**次のステップ**: このplan実行後、全22薬剤ページへの展開を予定

---

## 📊 付録：metformin-refined.html クラス使用状況（27番文書で詳細調査済み）

### ⚠️ 重要な訂正（2025-07-07）
**この未使用クラス一覧は誤りでした。**
27番文書で詳細に調査した結果、以下のことが判明しました：

### 実際の状況

#### ✅ 既に使用されているクラス（26番文書では「未使用」と誤記載）
- `.sidebar-layout` - line 15で使用済み
- `.sidebar` - line 16で使用済み
- `.sidebar-section` - line 18, 28, 46で使用済み
- `.sidebar-title` - line 19, 29, 48で使用済み
- `.sidebar-link` - line 31, 35, 39, 50, 54で使用済み
- `.mobile-fab` - line 902で使用済み
- `.bottom-sheet-overlay` - line 904で使用済み
- `.bottom-sheet` - line 906で使用済み
- `.bottom-sheet-handle` - line 907で使用済み
- `.bottom-sheet-content` - line 908で使用済み
- `.bottom-sheet-section` - line 910, 929, 947で使用済み
- `.bottom-sheet-title` - line 911, 930, 948で使用済み
- `.bottom-sheet-buttons` - line 912, 931, 949で使用済み
- `.bottom-sheet-btn` - line 913, 917, 921, 932, 936, 940, 950, 954で使用済み
- `.arrow` - line 915, 919, 923, 934, 938, 942, 952, 956で使用済み

#### ❌ 実際に未使用のクラス（CSSで定義されているがHTMLで未使用）
- `.statistics` - 統計表示セクション用（drug-page-v2.css line 743-752）

#### 🔴 HTMLで使用されているがCSSで未定義のクラス
- `.sidebar-links` - サイドバー内リンクグループコンテナ
- `.drug-category` - 薬剤カテゴリ表示（SGLT2阻害薬など）
- `.category-desc` - カテゴリ説明文（糖尿病・甲状腺等など）

### 結論
- metformin-refined.htmlは既にサイドバーとモバイルUIシステムを完全実装済み
- CSSの最適化は既に高いレベルで達成されている（未使用クラスは実質1つのみ）
- 3つの未定義クラスについては、sidebar.cssまたはdrug-page-v2.cssへの追加が推奨される

**詳細は27番文書「METFORMIN_HTML_CSS_CLASS_MAPPING.md」を参照してください。**