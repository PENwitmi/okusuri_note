# レスポンシブデザイン要件仕様書

**作成日**: 2025-07-01 09:59  
**担当**: Dev2  
**目的**: あらゆるデバイスで最適な学習体験を提供  

## 🎯 設計理念

> "The best interface is no interface" - Golden Krishna

薬学生が意識することなく、どんなデバイスでも自然に学習できる。それが我々の目指すレスポンシブデザインです。

## 📐 ブレークポイント戦略

### 主要ブレークポイント
```scss
// デバイスサイズ定義
$mobile-small: 320px;    // iPhone SE
$mobile: 375px;          // iPhone 12/13/14
$mobile-large: 414px;    // iPhone Plus
$tablet: 768px;          // iPad
$desktop: 1024px;        // Desktop
$desktop-large: 1440px;  // Large Desktop

// ブレークポイント
@mixin mobile {
    @media (max-width: #{$tablet - 1px}) { @content; }
}

@mixin tablet {
    @media (min-width: #{$tablet}) and (max-width: #{$desktop - 1px}) { @content; }
}

@mixin desktop {
    @media (min-width: #{$desktop}) { @content; }
}
```

### デバイス別最適化方針

#### モバイル（320-767px）
- **単一カラム**: すべてのコンテンツを縦に配置
- **タッチ最適化**: 44px以上のタップ領域
- **簡潔な表示**: 重要情報を優先

#### タブレット（768-1023px）
- **2カラム可能**: サイドバーとメイン
- **ハイブリッド操作**: タッチ＋マウス対応
- **中間的密度**: モバイルとデスクトップの中間

#### デスクトップ（1024px以上）
- **3カラム可能**: 複雑なレイアウト
- **ホバー効果**: マウス操作に最適化
- **高密度表示**: 多くの情報を一覧

## 🏗️ グリッドシステム

### フレキシブルグリッド
```css
/* 12カラムグリッドシステム */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

@media (min-width: 768px) {
    .container { padding: 0 24px; }
}

@media (min-width: 1024px) {
    .container { padding: 0 32px; }
}

/* グリッド定義 */
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
}

.col {
    flex: 1 0 0%;
    padding: 0 8px;
}

/* レスポンシブカラム */
@media (max-width: 767px) {
    .col-mobile-12 { flex: 0 0 100%; }
    .col-mobile-6 { flex: 0 0 50%; }
}

@media (min-width: 768px) {
    .col-tablet-6 { flex: 0 0 50%; }
    .col-tablet-4 { flex: 0 0 33.333%; }
    .col-tablet-3 { flex: 0 0 25%; }
}
```

## 📱 コンポーネント別要件

### ヘッダー
```css
/* モバイルヘッダー */
@media (max-width: 767px) {
    .header {
        position: sticky;
        top: 0;
        z-index: 1000;
        height: 56px;
    }
    
    .logo {
        font-size: 18px;
    }
    
    .main-nav {
        position: fixed;
        top: 56px;
        left: -100%;
        width: 80%;
        height: calc(100vh - 56px);
        background: white;
        transition: left 0.3s ease;
    }
    
    .main-nav.active {
        left: 0;
    }
}
```

### 薬剤カード
```css
/* レスポンシブ薬剤カード */
.drug-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

@media (max-width: 640px) {
    .drug-grid {
        grid-template-columns: 1fr;
    }
}

.drug-card {
    background: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

@media (hover: hover) {
    .drug-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
}
```

### テーブル
```css
/* レスポンシブテーブル戦略 */

/* 戦略1: 横スクロール */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

/* 戦略2: カード型変換 */
@media (max-width: 640px) {
    .responsive-table thead {
        display: none;
    }
    
    .responsive-table tr {
        display: block;
        margin-bottom: 16px;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 12px;
    }
    
    .responsive-table td {
        display: block;
        text-align: right;
        padding: 8px 0;
        border: none;
    }
    
    .responsive-table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
    }
}
```

### フォーム要素
```css
/* モバイル最適化フォーム */
input, select, textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px; /* ズーム防止 */
    border: 1px solid #ced4da;
    border-radius: 6px;
}

@media (max-width: 767px) {
    input[type="submit"],
    button {
        width: 100%;
        padding: 14px 20px;
        font-size: 16px;
        font-weight: bold;
    }
}
```

## 🖼️ 画像の取り扱い

### レスポンシブ画像
```html
<!-- Picture要素による最適化 -->
<picture>
    <source media="(max-width: 767px)" srcset="drug-mobile.jpg">
    <source media="(max-width: 1023px)" srcset="drug-tablet.jpg">
    <img src="drug-desktop.jpg" alt="薬剤画像" loading="lazy">
</picture>

<!-- srcset属性による解像度対応 -->
<img srcset="drug-1x.jpg 1x,
             drug-2x.jpg 2x,
             drug-3x.jpg 3x"
     src="drug-1x.jpg"
     alt="薬剤画像">
```

### CSS背景画像
```css
/* 解像度別背景画像 */
.hero {
    background-image: url('hero-mobile.jpg');
}

@media (min-width: 768px) {
    .hero {
        background-image: url('hero-tablet.jpg');
    }
}

@media (min-width: 1024px) {
    .hero {
        background-image: url('hero-desktop.jpg');
    }
}

/* Retina対応 */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    .hero {
        background-image: url('hero-mobile@2x.jpg');
    }
}
```

## 📏 タイポグラフィスケール

### フルードタイポグラフィ
```css
/* ベースフォントサイズ */
:root {
    --font-size-base: 16px;
    --font-size-small: 14px;
    --font-size-large: 18px;
    --line-height-base: 1.6;
}

/* レスポンシブフォントサイズ */
body {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
}

/* クランプ関数による自動調整 */
h1 {
    font-size: clamp(24px, 5vw, 48px);
    line-height: 1.2;
}

h2 {
    font-size: clamp(20px, 4vw, 36px);
    line-height: 1.3;
}

h3 {
    font-size: clamp(18px, 3vw, 28px);
    line-height: 1.4;
}

/* モバイル特別調整 */
@media (max-width: 767px) {
    body {
        font-size: var(--font-size-base);
        -webkit-text-size-adjust: 100%;
    }
    
    .small-text {
        font-size: var(--font-size-small);
    }
}
```

## 🎨 インタラクション要件

### タッチジェスチャー
```javascript
// スワイプによるナビゲーション
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        // 左スワイプ: 次のページ
        navigateNext();
    }
    if (touchEndX > touchStartX + 50) {
        // 右スワイプ: 前のページ
        navigatePrev();
    }
}

element.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

element.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});
```

### ホバー状態の処理
```css
/* タッチデバイスではホバー効果を無効化 */
@media (hover: hover) {
    .button:hover {
        background-color: #0056b3;
    }
}

/* タッチデバイスではアクティブ状態を使用 */
@media (hover: none) {
    .button:active {
        background-color: #0056b3;
    }
}
```

## 📊 パフォーマンス要件

### Critical CSS
```html
<!-- インラインクリティカルCSS -->
<style>
    /* ファーストビューのみのCSS */
    body { margin: 0; }
    .header { height: 56px; }
    .container { padding: 16px; }
    @media (min-width: 768px) {
        .header { height: 64px; }
        .container { padding: 24px; }
    }
</style>
```

### 遅延読み込み
```javascript
// Intersection Observerによる遅延読み込み
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

## ✅ チェックリスト

### 基本要件
- [ ] すべてのブレークポイントで正常表示
- [ ] 横スクロールが発生しない
- [ ] タッチターゲットが44px以上
- [ ] フォントサイズが16px以上

### アクセシビリティ
- [ ] キーボードナビゲーション対応
- [ ] スクリーンリーダー対応
- [ ] 高コントラストモード対応
- [ ] 拡大表示対応（200%まで）

### パフォーマンス
- [ ] Lighthouse Mobile Score > 90
- [ ] First Contentful Paint < 2s
- [ ] Cumulative Layout Shift < 0.1
- [ ] 3G接続でも使用可能

---

**関連ドキュメント**:
- [PHASE2_DETAILED_PLAN.md](./PHASE2_DETAILED_PLAN.md) - Phase 2全体計画
- [UI_UX_IMPROVEMENT_GUIDE.md](./UI_UX_IMPROVEMENT_GUIDE.md) - UI/UX改善ガイド