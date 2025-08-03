# 新デザイン提案：特集ページカード2列レイアウト

**作成日時**: 2025-07-10 03:45  
**提案種別**: UI/UXデザイン改善  
**対象**: 特集ページカードのレイアウトとデザイン

## デザインコンセプト

### 基本方針
1. **2列固定レイアウト**による視認性向上
2. **情報密度の最適化**による読みやすさ改善
3. **特集ページの特別感**を演出する差別化デザイン

### デザイン原則
- **Clarity（明瞭性）**: 情報の優先順位を明確に
- **Distinction（差別化）**: 薬剤カードとの視覚的区別
- **Accessibility（アクセシビリティ）**: すべてのユーザーに配慮

## 新レイアウト設計

### グリッドシステム
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}
```

**変更点**:
- `repeat(2, 1fr)`による2列固定
- より広いギャップ（spacing-xl: 32px）
- モバイルでは1列表示

### カードデザイン拡張

#### サイズと余白の調整
```css
.feature-card {
    background: var(--bg-card);
    border-radius: 20px;  /* 16px → 20px */
    padding: var(--spacing-xl);  /* lg → xl */
    min-height: 320px;  /* 最小高さ設定 */
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--border-light);  /* 1px → 2px */
}
```

#### 視覚的強調要素
```css
/* 新規：グラデーション背景 */
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
}

/* 優先度高カードの特別装飾 */
.feature-priority-high {
    border-color: var(--primary-light);
    background: linear-gradient(
        to bottom right,
        var(--bg-card),
        rgba(var(--primary-rgb), 0.02)
    );
}
```

## 情報階層の再設計

### タイポグラフィの強化
```css
.feature-title {
    font-size: 1.75rem;  /* 1.5rem → 1.75rem */
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.feature-subtitle {
    font-size: 1.125rem;  /* 1rem → 1.125rem */
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-base);
    line-height: 1.4;
}

.feature-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-body);
    flex-grow: 1;  /* 可変高さ対応 */
    margin-bottom: var(--spacing-lg);
}
```

### ハイライト表示の改善
```css
.feature-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.highlight-item {
    background: var(--bg-highlight);
    color: var(--text-highlight);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
```

## インタラクションデザイン

### ホバーエフェクトの強化
```css
.feature-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px var(--primary-light);
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

### フォーカス状態
```css
.feature-card:focus-within {
    outline: 3px solid var(--primary);
    outline-offset: 2px;
}

.feature-link:focus {
    outline: none;  /* カードレベルでハンドリング */
}
```

## カラーテーマ拡張

### 新規CSS変数
```css
:root {
    /* 既存変数に追加 */
    --spacing-xl: 32px;
    --primary-rgb: 59, 130, 246;  /* #3B82F6 */
    --bg-highlight: #EFF6FF;
    --text-highlight: #1E40AF;
    --text-primary: #111827;
    --text-secondary: #6B7280;
    --text-body: #374151;
}
```

## 特別な視覚要素

### バッジデザイン
```css
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
}
```

### アイコンの強調
```css
.feature-icon {
    font-size: 4rem;  /* 3rem → 4rem */
    margin-bottom: var(--spacing-lg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: all 0.4s ease;
}
```

## レスポンシブ戦略

### ブレークポイント（既存 + 新規）
- **デスクトップ（1024px以上）**: 薬剤3列、特集2列
- **タブレット（768px-1023px）**: 薬剤2列、特集2列
- **モバイル（481px-767px）**: 薬剤2列、特集1列
- **超小型モバイル（480px以下）**: 薬剤1列、特集1列

### レイアウト詳細
```css
/* デスクトップ・タブレット */
@media (min-width: 768px) {
    .drugs-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* モバイル */
@media (max-width: 767px) {
    .drugs-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* 超小型モバイル */
@media (max-width: 480px) {
    .drugs-grid {
        grid-template-columns: 1fr;
    }
}
```

### モバイル最適化
```css
@media (max-width: 767px) {
    /* 特集カードのサイズ調整 */
    .feature-card {
        min-height: auto;
        padding: var(--spacing-lg);
    }
    
    .feature-title {
        font-size: 1.25rem;
    }
    
    .feature-icon {
        font-size: 2.5rem;
    }
    
    /* 薬剤カードの調整 */
    .drug-card {
        padding: var(--spacing-base);
    }
    
    .drug-name {
        font-size: 1rem;
    }
}
```

## 実装上の考慮事項

1. **既存CSSとの整合性**
   - CSS変数を活用した統一的なデザイン
   - BEM命名規則の維持

2. **パフォーマンス**
   - 不要なアニメーションの削減
   - will-changeプロパティの適切な使用

3. **アクセシビリティ**
   - 適切なコントラスト比の確保
   - キーボードナビゲーション対応

## 期待される効果

1. **視認性の向上**: 50%大きなカードサイズ
2. **情報理解度の向上**: 明確な情報階層
3. **ユーザー満足度**: 特別感のある体験

## 次のステップ

この提案を基に、具体的な実装計画（04-IMPLEMENTATION_PLAN.md）を策定する。