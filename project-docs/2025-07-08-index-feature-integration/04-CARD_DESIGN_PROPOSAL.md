# 04-CARD_DESIGN_PROPOSAL.md - カードデザイン提案

**作成日**: 2025-07-08  
**対象**: 特集ページ用カードデザイン  
**目的**: 既存デザインとの調和と新しい価値の創出

---

## 🎨 デザイン方針

### 基本原則
1. **一貫性**: 既存のデザインシステムとの調和
2. **差別化**: 特集コンテンツとしての特別感
3. **機能性**: 情報の階層と重要度の明確化
4. **拡張性**: 将来の特集追加への対応

---

## 📋 3つのデザイン案

### 🅰️ 案A: category-cardベース拡張案

**コンセプト**: 既存のcategory-cardを基盤に機能拡張

```css
.feature-card {
    /* category-cardの基本スタイルを継承 */
    background: var(--bg-card);
    border-radius: 20px;
    padding: var(--spacing-xl);
    text-align: center;
    box-shadow: var(--shadow-medium);
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    
    /* 新規追加要素 */
    min-height: 420px;
}

.feature-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    background: var(--warning-color);
    color: white;
    padding: 6px 16px;
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: 0 20px 0 20px;
}

.feature-highlights {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: center;
    margin: var(--spacing-lg) 0;
    flex-wrap: wrap;
}

.highlight-item {
    background: var(--bg-secondary);
    padding: 6px 12px;
    border-radius: 16px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}
```

**メリット**:
- 既存デザインとの高い一貫性
- 実装工数が最小
- ユーザーの学習コスト低

**デメリット**:
- 差別化が弱い
- 情報量増加への対応が困難

---

### 🅱️ 案B: 新規feature-card専用設計案

**コンセプト**: 特集ページ専用の新しいカードデザイン

```css
.feature-card {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 0;
    box-shadow: var(--shadow-light);
    transition: all var(--transition-base);
    border: 1px solid var(--border-light);
    position: relative;
    overflow: hidden;
}

/* カテゴリ別ヘッダー */
.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: var(--feature-accent, var(--primary-color));
}

.feature-card-header {
    padding: var(--spacing-lg) var(--spacing-lg) 0;
    text-align: left;
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-base);
    display: inline-block;
}

.feature-card-body {
    padding: 0 var(--spacing-lg) var(--spacing-lg);
}

.feature-subtitle {
    color: var(--feature-accent);
    font-size: var(--font-size-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--spacing-xs);
}

.feature-highlights {
    display: flex;
    gap: var(--spacing-xs);
    margin: var(--spacing-base) 0;
    flex-wrap: wrap;
}

.highlight-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(var(--feature-accent-rgb), 0.1);
    color: var(--feature-accent);
    padding: 4px 10px;
    border-radius: 12px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.feature-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-secondary);
    color: var(--text-primary);
    padding: var(--spacing-base) var(--spacing-lg);
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition-base);
    margin: 0 calc(var(--spacing-lg) * -1) calc(var(--spacing-lg) * -1);
    border-radius: 0 0 16px 16px;
}

.feature-link:hover {
    background: var(--feature-accent);
    color: white;
}
```

**メリット**:
- 高い視認性と情報階層
- 特集としての特別感
- 豊富な情報表示が可能

**デメリット**:
- 実装工数が大きい
- 既存デザインとの調和に配慮必要

---

### 🅲 案C: diff-cardハイブリッド案

**コンセプト**: diff-cardの機能性とcategory-cardの視覚性を融合

```css
.feature-card {
    background: var(--bg-card);
    border-radius: 16px;
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-light);
    transition: all var(--transition-base);
    border: 1px solid var(--border-light);
    position: relative;
    overflow: hidden;
    text-align: left;
}

/* 左側のアクセントライン（diff-cardから） */
.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--feature-accent, var(--primary-color));
}

/* 優先度バッジ（右上） */
.feature-badge {
    position: absolute;
    top: var(--spacing-base);
    right: var(--spacing-base);
    background: var(--warning-color);
    color: white;
    padding: 4px 12px;
    font-size: var(--font-size-xs);
    font-weight: 700;
    border-radius: 12px;
}

/* アイコンとタイトルの横並び */
.feature-header {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-base);
    margin-bottom: var(--spacing-base);
}

.feature-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.feature-titles {
    flex: 1;
}

.feature-highlights {
    display: flex;
    gap: var(--spacing-xs);
    margin: var(--spacing-base) 0 var(--spacing-lg);
    flex-wrap: wrap;
}

.highlight-item {
    background: var(--bg-secondary);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    white-space: nowrap;
}
```

**メリット**:
- 既存要素の良い部分を統合
- 実装が比較的容易
- 情報密度と視認性のバランス

**デメリット**:
- オリジナリティがやや弱い

---

### 🅳 案D: story-card再利用案（最適化版）

**コンセプト**: 既存のstory-cardを基盤として最小限の変更で実装

```css
/* 基本的にstory-card関連のクラス名を置換 */
.features-section { /* .stories-sectionから改名 */ }
.features-grid { /* .stories-gridから改名 */ }
.feature-card { /* .story-cardから改名 */ }
.feature-icon { /* .story-imageから改名 */ }
.feature-title { /* .story-titleから改名 */ }
.feature-description { /* .story-descriptionから改名 */ }
.feature-highlights { /* .story-metaから改名・用途変更 */ }
.highlight-item { /* .story-year/.story-impactを統合 */ }
.feature-link { /* .story-linkから改名 */ }

/* 最小限の追加スタイル（約20行） */
.feature-subtitle {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

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

/* カテゴリ別アクセントカラー */
[data-category="cardiovascular"] { --feature-accent: var(--category-cardiovascular); }
[data-category="safety"] { --feature-accent: var(--warning-color); }
[data-category="respiratory"] { --feature-accent: var(--primary-color); }

.feature-card:hover {
    border-color: var(--feature-accent, var(--primary-light));
}
```

**メリット**:
- **実装時間を70%削減**（1時間以内で完了可能）
- **既存のテスト済みスタイルを最大限活用**
- **デザインの一貫性を完全に維持**
- **将来的な変更・ロールバックが容易**
- **CSSファイルサイズの増加を最小限に抑制**

**デメリット**:
- 完全にオリジナルなデザインではない
- story-cardの制約に縛られる部分がある

---

## 🏆 推奨案: 案D（story-card再利用案）

### 選定理由
1. **実装効率**: 70%の時間短縮により、即座に実装可能
2. **リスク最小化**: テスト済みのCSSを再利用するため、バグリスクが低い
3. **保守性**: 既存のデザインシステムと完全に調和
4. **拡張性**: 必要に応じて段階的にカスタマイズ可能

### 実装戦略
1. **第1段階**: クラス名の一括置換（機械的作業）
2. **第2段階**: 最小限の追加スタイル（20行程度）
3. **第3段階**: 必要に応じて段階的改良

---

## 📱 レスポンシブ対応詳細

### モバイル（-767px）
```css
@media (max-width: 767px) {
    .feature-card {
        margin-bottom: var(--spacing-lg);
    }
    
    .feature-highlights {
        justify-content: flex-start;
    }
    
    .highlight-item {
        font-size: var(--font-size-xs);
    }
}
```

### タブレット（768px-1199px）
```css
@media (min-width: 768px) and (max-width: 1199px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

## 🎯 インタラクション設計

### ホバー効果
```css
.feature-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-heavy);
}

.feature-card:hover::before {
    width: 6px;
}

.feature-card:hover .feature-icon {
    transform: scale(1.1);
}
```

### フォーカス状態
```css
.feature-card:focus-within {
    outline: 3px solid var(--feature-accent);
    outline-offset: 2px;
}
```

### クリック領域
- カード全体をクリック可能にする案
- リンクボタンのみクリック可能にする案
→ アクセシビリティを考慮し、リンクボタン方式を推奨

---

## 🎨 カラーバリエーション

### カテゴリ別配色
```css
:root {
    /* RGB値も定義（透明度付き背景用） */
    --cardiovascular-rgb: 231, 76, 60;
    --safety-rgb: 243, 156, 18;
    --respiratory-rgb: 52, 152, 219;
    --endocrine-rgb: 230, 126, 34;
}

[data-category="cardiovascular"] {
    --feature-accent: rgb(var(--cardiovascular-rgb));
    --feature-accent-rgb: var(--cardiovascular-rgb);
}
```

---

## 📊 実装優先順位

### Phase 1: 基本実装
1. feature-cardの基本スタイル
2. 4つの初期特集カード
3. レスポンシブ対応

### Phase 2: 機能拡張
1. アニメーション強化
2. アクセシビリティ改善
3. ダークモード対応（将来）

### Phase 3: 最適化
1. CSSの最小化
2. 未使用スタイルの削除
3. パフォーマンス改善

---

**次のステップ**: 05-CSS_MODIFICATION_PLAN.mdでCSS変更計画を詳細化