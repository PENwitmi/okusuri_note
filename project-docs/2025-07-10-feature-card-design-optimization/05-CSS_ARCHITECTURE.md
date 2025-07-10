# CSS設計詳細：特集ページカード最適化

**作成日時**: 2025-07-10 03:47  
**設計方針**: モジュール化とスケーラビリティ  
**命名規則**: BEM (Block Element Modifier)

## CSS構造設計

### 1. 変数定義（Design Tokens）

#### 新規追加変数
```css
:root {
    /* Spacing System Extension */
    --spacing-xl: 32px;  /* 新規：特集カード用の広い余白 */
    
    /* Color System Extension */
    --primary-rgb: 59, 130, 246;  /* RGB値として定義（rgba使用のため） */
    --bg-highlight: #EFF6FF;      /* ハイライト背景色 */
    --text-highlight: #1E40AF;     /* ハイライトテキスト色 */
    --text-primary: #111827;       /* 主要テキスト色 */
    --text-secondary: #6B7280;     /* 副次テキスト色 */
    --text-body: #374151;          /* 本文テキスト色 */
    
    /* Shadow System Extension */
    --shadow-feature: 0 20px 40px rgba(0, 0, 0, 0.1);  /* 特集カード用の深い影 */
    --shadow-feature-hover: 0 24px 48px rgba(0, 0, 0, 0.15);  /* ホバー時の影 */
}
```

### 2. グリッドシステム（統合設計）

#### index.css内のグリッド変更
```css
/* 特集ページ専用グリッド（PC用2列固定） */
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}
```

#### responsive-unified.css内のレスポンシブ対応
```css
/* タブレット表示（768px-1023px） */
@media (min-width: 768px) and (max-width: 1023px) {
    .drugs-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* モバイル表示（767px以下） */
@media (max-width: 767px) {
    /* 薬剤カードは2列表示 */
    .drugs-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
    
    /* 特集カードは1列表示 */
    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* 超小型モバイル（480px以下） */
@media (max-width: 480px) {
    .drugs-grid {
        grid-template-columns: 1fr;
    }
}
```

### 3. カードコンポーネント

#### Base Card
```css
.feature-card {
    /* Layout */
    display: flex;
    flex-direction: column;
    min-height: 320px;
    
    /* Spacing */
    padding: var(--spacing-xl);
    
    /* Visual */
    background: var(--bg-card);
    border: 2px solid var(--border-light);
    border-radius: 20px;
    box-shadow: var(--shadow-light);
    
    /* Animation */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Positioning */
    position: relative;
    overflow: hidden;
}

/* 背景装飾 */
.feature-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at center,
        rgba(var(--primary-rgb), 0.05) 0%,
        transparent 50%
    );
    transform: rotate(45deg);
    pointer-events: none;
    z-index: 1;
}

/* コンテンツレイヤー */
.feature-card > * {
    position: relative;
    z-index: 2;
}
```

#### Card Variants
```css
/* 優先度高カード */
.feature-card.feature-priority-high {
    border-color: var(--primary-light);
    background: linear-gradient(
        135deg,
        var(--bg-card) 0%,
        rgba(var(--primary-rgb), 0.02) 100%
    );
}

/* 新着カード */
.feature-card.feature-new {
    border-color: var(--success-light);
}

/* Coming Soonカード */
.feature-card.feature-coming-soon {
    opacity: 0.7;
    cursor: not-allowed;
}
```

### 4. カード内要素

#### Typography Hierarchy
```css
.feature-title {
    font-size: clamp(1.5rem, 2vw, 1.75rem);  /* レスポンシブフォントサイズ */
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.feature-subtitle {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-base);
    line-height: 1.4;
}

.feature-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-body);
    flex-grow: 1;
    margin-bottom: var(--spacing-lg);
}
```

#### Visual Elements
```css
/* アイコン */
.feature-icon {
    font-size: clamp(3rem, 5vw, 4rem);
    margin-bottom: var(--spacing-lg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: transform 0.4s ease;
}

/* バッジ */
.feature-badge {
    position: absolute;
    top: var(--spacing-base);
    right: var(--spacing-base);
    background: var(--primary);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    z-index: 3;
}

/* ハイライト */
.feature-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.highlight-item {
    background: var(--bg-highlight);
    color: var(--text-highlight);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
}
```

#### Interactive Elements
```css
/* リンク */
.feature-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    padding: var(--spacing-sm) var(--spacing-base);
    border-radius: 8px;
    background: transparent;
    transition: all 0.3s ease;
    margin-top: auto;  /* 下部に配置 */
}

.link-arrow {
    transition: transform 0.3s ease;
}
```

### 5. インタラクション状態

#### Hover States
```css
.feature-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-feature-hover);
    border-color: var(--primary);
}

.feature-card:hover .feature-icon {
    transform: scale(1.1) rotate(5deg);
}

.feature-card:hover .feature-link {
    background: var(--primary);
    color: white;
    padding-right: var(--spacing-lg);
}

.feature-card:hover .link-arrow {
    transform: translateX(4px);
}
```

#### Focus States
```css
.feature-card:focus-within {
    outline: 3px solid var(--primary);
    outline-offset: 2px;
}

.feature-link:focus {
    outline: none;  /* カードレベルでハンドリング */
}

/* キーボードナビゲーション時のみ表示 */
.feature-card:focus-visible {
    outline: 3px solid var(--primary);
    outline-offset: 4px;
}
```

#### Active States
```css
.feature-card:active {
    transform: translateY(-4px) scale(1.01);
    transition-duration: 0.1s;
}
```

### 6. アニメーション定義

```css
/* スムーズな出現アニメーション */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature-card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: backwards;
}

/* 順次アニメーション */
.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }
.feature-card:nth-child(5) { animation-delay: 0.5s; }
.feature-card:nth-child(6) { animation-delay: 0.6s; }
.feature-card:nth-child(7) { animation-delay: 0.7s; }
```

### 7. ユーティリティクラス

```css
/* テキスト省略 */
.feature-text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 複数行省略 */
.feature-text-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

### 8. アクセシビリティ対応

```css
/* ハイコントラストモード対応 */
@media (prefers-contrast: high) {
    .feature-card {
        border-width: 3px;
    }
    
    .feature-badge {
        outline: 2px solid white;
    }
}

/* モーション削減対応 */
@media (prefers-reduced-motion: reduce) {
    .feature-card,
    .feature-icon,
    .feature-link,
    .link-arrow {
        transition: none;
        animation: none;
    }
}

/* ダークモード対応（将来実装用） */
@media (prefers-color-scheme: dark) {
    /* ダークモード用の変数オーバーライド */
}
```

## パフォーマンス最適化

### 1. CSS最適化技法
- 不要なセレクタの削減
- 複雑度の低いセレクタ使用
- will-changeの適切な使用

### 2. アニメーション最適化
```css
.feature-card {
    will-change: transform, box-shadow;
}

.feature-card:hover {
    will-change: auto;  /* ホバー後にリセット */
}
```

## 保守性の考慮

### 1. コメント規約
```css
/* ==========================================================================
   特集ページカードコンポーネント
   ========================================================================== */

/* Base
   ========================================================================== */

/* Variants
   ========================================================================== */

/* States
   ========================================================================== */
```

### 2. 変数命名規則
- `--feature-*`: 特集ページ専用変数
- `--spacing-*`: 余白システム
- `--text-*`: テキスト関連
- `--bg-*`: 背景関連

## まとめ

この CSS 設計により：
1. **モジュール性**: 独立したコンポーネントとして機能
2. **拡張性**: 新しいバリエーションの追加が容易
3. **保守性**: 明確な構造と命名規則
4. **パフォーマンス**: 最適化されたアニメーション
5. **アクセシビリティ**: 包括的な対応

実装時はこの設計書を参照し、段階的に適用することで、安定した実装が可能となる。