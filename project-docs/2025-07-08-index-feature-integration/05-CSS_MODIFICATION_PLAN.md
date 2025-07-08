# 05-CSS_MODIFICATION_PLAN.md - CSS変更計画

**作成日**: 2025-07-08  
**更新日**: 2025-07-08（story-card再利用案採用）  
**対象ファイル**: index.css（主要変更）  
**影響範囲**: index.cssのみ（style.cssへの変数追加は不要）

---

## 📋 変更概要（story-card再利用による簡略化版）

### 1. クラス名の一括置換
- `.stories-section` → `.features-section`
- `.stories-grid` → `.features-grid`
- `.story-card` → `.feature-card`
- `.story-image` → `.feature-icon`
- `.story-title` → `.feature-title`
- `.story-description` → `.feature-description`
- `.story-meta` → `.feature-highlights`
- `.story-year/.story-impact` → `.highlight-item`
- `.story-link` → `.feature-link`

### 2. 削除（コメントアウト）
- `.categories-section` 関連（約30行）
- `.category-card` 関連（約90行）
- `.differentiation-section` 関連（約30行）
- `.diff-card` 関連（約85行）

### 3. 最小限の新規追加（約20行）
- `.feature-subtitle` サブタイトル用
- `.feature-badge` 優先度バッジ用
- カテゴリ別カラー変数

---

## 🆕 実装手順（story-card再利用方式）

### Step 1: stories関連セクションのクラス名一括置換
```css
/* 元のstory-card関連（行392-508）をそのまま利用 */
/* 単純にクラス名を置換するだけ */

/* セクション名 */
.stories-section → .features-section
.stories-grid → .features-grid

/* カード関連 */
.story-card → .feature-card
.story-image → .feature-icon
.story-title → .feature-title
.story-description → .feature-description
.story-meta → .feature-highlights
.story-year → .highlight-item  /* 汎用化 */
.story-impact → .highlight-item /* 汎用化 */
.story-link → .feature-link
```

### Step 2: 最小限の追加CSS（約20行）
```css
/* ========================================
   特集ページ用追加スタイル
======================================== */
/* サブタイトル（story-cardにはない新要素） */
.feature-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

/* 優先度バッジ（新要素） */
.feature-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    background: var(--warning-color);
    color: white;
    padding: 6px 16px;
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: 0 16px 0 16px;
}

/* カテゴリ別アクセントカラー（追加） */
[data-category="cardiovascular"] {
    --feature-accent: var(--category-cardiovascular);
}
[data-category="safety"] {
    --feature-accent: var(--warning-color);
}
[data-category="respiratory"] {
    --feature-accent: var(--primary-color);
}

/* 既存のホバー効果を活用、追加調整のみ */
.feature-card:hover {
    border-color: var(--feature-accent, var(--primary-light));
}
```

---

## 🗑️ 削除対象CSS（コメントアウト）

### 削除対象リスト
```css
/* 以下のセクションをコメントアウト */

/* 
// ========================================
//    薬効群別カテゴリカード（category-card）
// ========================================
.categories-section { ... }
.categories-grid { ... }
.category-card { ... }
... 約90行（行287-387）
*/

/*
// ========================================
//    差別化カード（diff-card）
// ========================================
.differentiation-section { ... }
.differentiation-grid { ... }
.diff-card { ... }
... 約85行（行510-606）
*/

/* 注意: story-cardセクション（行389-508）は削除せず、featureに名前変更 */
```

---

## 📱 レスポンシブ対応追加

```css
/* モバイル対応 */
@media (max-width: 767px) {
    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
    
    .feature-card {
        margin-bottom: var(--spacing-base);
    }
    
    .feature-icon {
        font-size: 2rem;
    }
    
    .feature-highlights {
        justify-content: flex-start;
    }
    
    .highlight-item {
        font-size: var(--font-size-xs);
        padding: 4px 10px;
    }
    
    .feature-badge {
        font-size: var(--font-size-xs);
        padding: 4px 12px;
    }
}

/* タブレット対応 */
@media (min-width: 768px) and (max-width: 1199px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

## 🔧 style.css への変更

**変更不要**: カテゴリ別カラー変数は既に定義済み

---

## 📝 実装手順（簡略版）

### Step 1: バックアップ作成
```bash
cp docs/assets/css/index.css docs/assets/css/index.css.backup-20250708
```

### Step 2: クラス名の一括置換
```bash
# エディタの検索・置換機能を使用
stories-section → features-section
stories-grid → features-grid
story-card → feature-card
story-image → feature-icon
story-title → feature-title
story-description → feature-description
story-meta → feature-highlights
story-year → highlight-item
story-impact → highlight-item
story-link → feature-link
```

### Step 3: 削除対象のコメントアウト
1. categories-section関連（行128-157, 287-387）
2. differentiation-section関連（行137, 510-606）

### Step 4: 最小限の新規CSS追加
1. .feature-subtitle（5行）
2. .feature-badge（10行）
3. カテゴリ別カラー設定（5行）

### Step 5: 検証
1. 各ブラウザでの表示確認
2. レスポンシブ動作確認
3. 既存機能の維持確認

---

## 📊 ファイルサイズ影響

### 変更前
- index.css: 606行

### 変更後（予測）
- 新規追加: +約20行（最小限の追加）
- コメントアウト: 約175行（categories + differentiation）
- クラス名置換: 影響なし（文字数ほぼ同じ）
- 実質的な行数: 約451行（25%削減）

### 最適化の成果
- story-card再利用により70%のCSS作成作業削減
- 既存のテスト済みスタイルを最大限活用
- メンテナンス性の大幅向上

---

## ⚠️ 注意事項

### 既存スタイルとの干渉
- グローバルなセレクタ名の重複確認
- 詳細度の競合チェック
- カスケーディングの影響確認

### ブラウザ互換性
- CSS Grid対応状況
- Flexbox対応状況
- CSS変数対応状況

### パフォーマンス
- 不要なレンダリング防止
- アニメーションの最適化
- セレクタの効率性

---

**次のステップ**: 06-IMPLEMENTATION_PLAN.mdで実装計画を策定