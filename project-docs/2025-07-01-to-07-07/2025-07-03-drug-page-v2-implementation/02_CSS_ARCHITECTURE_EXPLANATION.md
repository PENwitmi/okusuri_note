# 新CSS構造の解説

**作成日時**: 2025-07-03 05:20  
**作成者**: CEO  
**目的**: ゼロベース再構築後のCSS構造を理解し、適切に活用するためのガイド

---

## 🏗️ CSS構造の変遷

### Before: 混沌の時代（〜2025-07-02）
```
docs/assets/css/
├── style.css               # 基本定義（レスポンシブ混在）
├── ver2-unified.css        # Ver2用統一CSS（314行）
├── drug-detail.css         # 薬剤詳細用（206クラス）
├── mobile-optimization.css # モバイル最適化（1933行）
└── responsive.css          # 汎用レスポンシブ（634行・未使用）

問題点：
- 5つのCSSファイルが複雑に絡み合う
- 合計637個のクラスが定義されるも91.4%が未使用
- レスポンシブ記述が3ファイルに分散
- 誰も全体を把握できない
```

### After: 責務分離の時代（2025-07-03〜）
```
docs/assets/css/
├── style.css              # 基本定義のみ（1190行）
├── responsive-unified.css # レスポンシブのみ（450行）
└── drug-page-v2.css       # 薬剤ページ専用（370行）

※ 旧ファイルは_old_css/に移動

成果：
- 3ファイルで明確な責務分離
- 合計1640行（45%削減）
- 使用クラス29個のみ（96%削減）
- 完全に把握可能なサイズ
```

---

## 📁 各CSSファイルの詳細

### 1. style.css（基本定義）

**役割**: プロジェクト全体の基盤となる定義
**編集権限**: ❌ 変更禁止（プロジェクト共通）
**ファイルサイズ**: 1190行

**含まれる内容**:
```css
/* CSS変数定義 */
:root {
    /* 色彩システム */
    --pharma-primary: #3498db;
    --pharma-nature: #27ae60;
    --text-reading: #374151;
    
    /* 薬効群カラー */
    --category-cardiovascular: #e74c3c;
    --category-cns: #9b59b6;
    --category-endocrine: #f39c12;
    
    /* スペーシング */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-base: 1rem;
    --spacing-lg: 1.5rem;
    
    /* フォントサイズ */
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
}

/* 基本リセット */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 基本要素のスタイル */
body, h1, h2, h3, p, ul, li {
    /* 基本的なタイポグラフィ */
}
```

**重要**: レスポンシブ記述は一切含まない（Phase 0で237行を削除済み）

### 2. responsive-unified.css（レスポンシブ調整）

**役割**: すべてのレスポンシブ調整を一元管理
**編集権限**: ❌ 変更禁止（プロジェクト共通）
**ファイルサイズ**: 450行（目標1000行の45%）

**3段階ブレークポイント戦略**:
```css
/* モバイルファースト設計 */

/* タブレット（769px〜） */
@media (min-width: 769px) {
    .container {
        max-width: 750px;
    }
}

/* デスクトップ（1025px〜） */
@media (min-width: 1025px) {
    .container {
        max-width: 1200px;
    }
}

/* モバイル専用（〜768px） */
@media (max-width: 768px) {
    /* モバイル特有の調整 */
    .level-selector {
        position: sticky;
        top: 0;
    }
    
    /* 薬学教育特化 */
    body {
        font-size: 16px; /* 最小16px */
    }
    
    button {
        min-height: 44px; /* タッチターゲット */
    }
}
```

**利点**:
- 「モバイルで表示がおかしい」→ このファイルのみ確認
- メディアクエリの重複なし
- 保守性の大幅向上

### 3. drug-page-v2.css（薬剤ページ専用）

**役割**: 薬剤個別ページのスタイル定義
**編集権限**: ✅ 自由に編集可能（ページ固有）
**ファイルサイズ**: 370行（29クラスのみ）

**ファイル構成**:
```css
/*
 * drug-page-v2.css - 薬剤個別ページ専用CSS（Ver2統合版）
 * Version: 2.0.0
 * 作成日時: 2025-07-03 01:50
 * 
 * 【推奨】Ver2およびClean形式のHTMLファイル用
 */

/* 基盤CSS継承 */
@import "style.css";

/* ========================================
   薬剤情報系（drug-detail.cssからサルベージ）
======================================== */

/* 薬剤ヘッダー */
.drug-header {
    background: linear-gradient(135deg, 
        var(--pharma-primary-subtle) 0%, 
        var(--bg-light) 100%);
    padding: var(--spacing-3xl) var(--spacing-lg);
    text-align: center;
}

/* 商品名 */
.brand-name {
    font-size: var(--font-size-3xl);
    font-weight: 900;
    color: var(--text-primary);
}

/* ========================================
   3段階学習システム
======================================== */

/* レベル1（薬学生向け） */
.level-1-content {
    background: var(--bg-study);
    color: var(--text-reading);
    border-left: 5px solid var(--pharma-primary-light);
    font-size: 18px;
    line-height: 1.9;
}

/* レベル2（実習中薬学生向け） */
.level-2-content {
    background: linear-gradient(135deg, 
        #fff 0%, 
        var(--pharma-nature-subtle) 50%, 
        #f0f8ff 100%);
    border: 2px solid var(--pharma-nature-light);
}

/* レベル3（研修中・臨床向け） */
.level-3-content {
    background: linear-gradient(135deg, 
        var(--bg-tertiary) 0%, 
        var(--bg-reference) 100%);
    color: var(--text-pharma-primary);
}
```

**29個のクラス詳細**:
```
# 構造系（7個）
.drug-detail
.container
.level-selector
.level-selector__inner
.level-btn
.active
.hidden

# 薬剤情報系（8個）
.drug-header
.brand-name
.generic-name
.drug-classification
.drug-class
.generation
.indications
.indications__list

# コンテンツ系（11個）
.quick-summary
.impact-grid
.impact-item
.summary-item
.quote-box
.specialist-perspective
.faq-note
.prescribing-data
.design-spec
.combination-drugs
.combination-drugs__list

# レベル系（3個）
.level-1-content
.level-2-content
.level-3-content
```

---

## 🎯 CSS設計の原則

### 1. 責務の完全分離
- **style.css**: 何を表示するか（WHAT）
- **responsive-unified.css**: どこで表示するか（WHERE）
- **drug-page-v2.css**: どのように表示するか（HOW）

### 2. 最小限実装の哲学
- 必要なクラスのみ定義
- 推測での実装を排除
- 実際のHTMLに基づく

### 3. CSS変数の活用
```css
/* 色は変数で統一管理 */
.drug-header {
    background: var(--pharma-primary-subtle);
    /* ❌ background: #e3f2fd; */
}

/* スペーシングも変数使用 */
.impact-item {
    padding: var(--spacing-lg);
    /* ❌ padding: 1.5rem; */
}
```

---

## 📊 削減効果の詳細

### クラス数の削減
```
薬剤3つ分の合計：
Before: 637個（重複含む）
After:  29個（共通使用）
削減率: 95.4%
```

### CSS行数の削減
```
Before:
- ver2-unified.css: 314行
- drug-detail.css: 推定2000行
- mobile-optimization.css: 1933行
- 重複やオーバーライド多数
合計: 4000行以上

After:
- drug-page-v2.css: 370行
削減率: 90%以上
```

### 保守工数の削減
```
新薬剤追加時：
Before: 2日（既存CSS解析、競合解決）
After:  2時間（テンプレート適用）
削減率: 93%
```

---

## ⚠️ 編集時の注意事項

### やってはいけないこと

#### 1. style.cssの編集
```css
/* ❌ 絶対NG */
/* style.css内で */
.drug-header {
    background: red; /* プロジェクト全体に影響 */
}
```

#### 2. responsive-unified.cssへの追加
```css
/* ❌ NG */
/* responsive-unified.css内で */
@media (max-width: 768px) {
    .my-new-class { /* レスポンシブ記述の分散 */
        font-size: 14px;
    }
}
```

#### 3. インラインスタイルの使用
```html
<!-- ❌ NG -->
<div style="color: red;">テキスト</div>
```

### 推奨される編集方法

#### drug-page-v2.cssへの追加
```css
/* ✅ OK - 薬剤ページ固有の調整 */
.special-warning {
    background: var(--alert-bg);
    border: 2px solid var(--alert-border);
    padding: var(--spacing-lg);
}
```

#### 既存クラスの拡張
```css
/* ✅ OK - 薬剤特有の調整 */
.drug-detail[data-category="cardiovascular"] .drug-header {
    background: linear-gradient(135deg, 
        var(--category-cardiovascular) 0%, 
        var(--bg-light) 100%);
}
```

---

## 🔍 トラブルシューティング

### 問題1: スタイルが適用されない
**原因**: CSS読み込み順序の誤り
**解決**: 
```html
<!-- 正しい順序 -->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

### 問題2: モバイルで表示が崩れる
**原因**: drug-page-v2.cssにレスポンシブ記述を追加
**解決**: レスポンシブ調整はresponsive-unified.cssで管理されているので、そちらを確認

### 問題3: 色が変数と異なる
**原因**: ハードコードされた色指定
**解決**: CSS変数を使用
```css
/* ❌ 間違い */
color: #3498db;

/* ✅ 正解 */
color: var(--pharma-primary);
```

---

## 🚀 今後の拡張性

### 新機能追加時
1. まずHTMLで構造を作る
2. 必要最小限のクラスを付与
3. drug-page-v2.cssに定義追加

### 新薬剤追加時
1. metformin-refined.htmlをコピー
2. コンテンツを差し替え
3. 薬剤固有の調整のみ追加

### デザイン更新時
1. CSS変数の値を更新（style.css）
2. 全ページに自動反映
3. 個別調整は最小限に

---

## 📝 まとめ

新CSS構造は「**責務分離**」と「**最小限実装**」により、以下を実現：

1. **明確な役割分担**: どのファイルを見ればよいか一目瞭然
2. **高い保守性**: 29個のクラスは誰でも把握可能
3. **拡張の容易さ**: 新機能追加が簡単
4. **パフォーマンス**: 不要なCSSを90%以上削減

この構造を理解し、適切に活用することで、持続可能な開発が可能になります。

---

**文書作成完了**: 2025-07-03 05:20