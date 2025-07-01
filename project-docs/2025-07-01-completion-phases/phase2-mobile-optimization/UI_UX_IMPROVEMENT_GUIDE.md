# UI/UX改善ガイド

**作成日**: 2025-07-01 10:00  
**担当**: Dev2  
**目的**: 薬学生に愛される学習体験の創造  

## 🎨 デザイン哲学

> "Good design is invisible" - Dieter Rams

薬学生が学習に集中できる。それは、UIが邪魔をしないということ。
我々の目標は、透明なインターフェースを通じて、純粋な学習体験を提供することです。

## 🧠 ユーザーペルソナ

### 田中さくら（22歳、薬学部4年生）
- **状況**: 国試まで残り6ヶ月、電車通学（片道1時間）
- **デバイス**: iPhone 13、たまにiPad
- **学習スタイル**: スキマ時間活用型、ビジュアル重視
- **ペインポイント**: 
  - 教科書は重くて持ち歩けない
  - 暗記だけでは忘れてしまう
  - 似た薬の違いが覚えられない

### 山田太郎（24歳、薬学部6年生）
- **状況**: 実習中、現場での即座の確認が必要
- **デバイス**: Android、病院のPC
- **学習スタイル**: 実践重視、エビデンス重視
- **ペインポイント**:
  - 実習中にさっと確認したい
  - 使い分けの根拠が知りたい
  - 最新のガイドラインを反映してほしい

## 📐 UI改善の具体策

### 1. 視覚的階層の確立

#### Before（現状の問題）
```css
/* すべてが同じ重みで表示される */
h1, h2, h3 { 
    color: #333;
    font-weight: normal;
}
```

#### After（改善案）
```css
/* 明確な視覚的階層 */
h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 3px solid #007bff;
}

h2 {
    font-size: 22px;
    font-weight: 600;
    color: #2c2c2c;
    margin-top: 32px;
    margin-bottom: 16px;
}

h3 {
    font-size: 18px;
    font-weight: 500;
    color: #4a4a4a;
    margin-top: 24px;
    margin-bottom: 12px;
}

/* 重要ポイントの強調 */
.key-point {
    background: linear-gradient(120deg, #fff3cd 0%, #fff3cd 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 60%;
    padding: 2px 0;
    font-weight: 600;
}
```

### 2. カラースキームの最適化

#### 意味のある色使い
```css
:root {
    /* プライマリカラー */
    --primary-blue: #007bff;      /* 信頼・医療 */
    --primary-green: #28a745;     /* 成功・安全 */
    
    /* セカンダリカラー */
    --warning-yellow: #ffc107;    /* 注意・副作用 */
    --danger-red: #dc3545;        /* 危険・禁忌 */
    
    /* ニュートラルカラー */
    --text-primary: #212529;      /* 主要テキスト */
    --text-secondary: #6c757d;    /* 補助テキスト */
    --background: #f8f9fa;        /* 背景色 */
    --white: #ffffff;             /* カード背景 */
}

/* 薬効群別カラーコード */
.drug-category-arb { border-left: 4px solid #6f42c1; }
.drug-category-ace { border-left: 4px solid #e83e8c; }
.drug-category-ccb { border-left: 4px solid #fd7e14; }
.drug-category-diuretic { border-left: 4px solid #20c997; }
```

### 3. マイクロインタラクション

#### ボタンのフィードバック
```css
.button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

/* リップルエフェクト */
.button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.button:active::after {
    width: 300px;
    height: 300px;
}

/* モバイルでのタップフィードバック */
@media (max-width: 767px) {
    .button:active {
        transform: scale(0.98);
    }
}
```

#### プログレスインジケーター
```css
/* 読了プログレス */
.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(to right, #007bff, #00c851);
    transition: width 0.1s ease;
    z-index: 9999;
}

/* スクロールインジケーター */
.scroll-indicator {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.scroll-indicator.show {
    opacity: 1;
}
```

### 4. フォームUXの改善

#### インラインバリデーション
```css
/* 入力フィールドの状態表示 */
.form-field {
    position: relative;
    margin-bottom: 24px;
}

.form-field input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #ced4da;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

.form-field input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

/* 成功状態 */
.form-field.success input {
    border-color: #28a745;
}

.form-field.success::after {
    content: '✓';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #28a745;
    font-weight: bold;
}

/* エラー状態 */
.form-field.error input {
    border-color: #dc3545;
}

.form-field .error-message {
    color: #dc3545;
    font-size: 14px;
    margin-top: 4px;
    display: none;
}

.form-field.error .error-message {
    display: block;
}
```

### 5. ナビゲーションの改善

#### スティッキーナビゲーション
```css
/* 薬剤詳細ページのサブナビ */
.drug-nav {
    position: sticky;
    top: 60px;
    background: white;
    border-bottom: 1px solid #e9ecef;
    z-index: 100;
    padding: 0;
    margin: 0 -16px;
}

.drug-nav-list {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}

.drug-nav-item {
    flex: 0 0 auto;
    padding: 12px 20px;
    color: #6c757d;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
}

.drug-nav-item.active {
    color: #007bff;
}

.drug-nav-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #007bff;
}
```

## 🎯 インタラクションパターン

### 1. フィードバックの原則

#### 即座のフィードバック
```javascript
// クリック時の即座フィードバック
document.querySelectorAll('.interactive-element').forEach(element => {
    element.addEventListener('click', function(e) {
        // ビジュアルフィードバック
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
        
        // 触覚フィードバック（対応デバイスのみ）
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    });
});
```

### 2. プログレッシブディスクロージャー

#### 詳細情報の段階的表示
```html
<div class="drug-info">
    <div class="drug-summary">
        <h3>テルミサルタン</h3>
        <p>ARB（アンジオテンシンII受容体拮抗薬）</p>
        <button class="expand-btn" aria-expanded="false">
            詳細を見る
        </button>
    </div>
    
    <div class="drug-details" hidden>
        <!-- 詳細情報 -->
    </div>
</div>
```

```javascript
// スムーズな展開
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const details = this.closest('.drug-info').querySelector('.drug-details');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            details.style.height = details.scrollHeight + 'px';
            requestAnimationFrame(() => {
                details.style.height = '0';
            });
            setTimeout(() => details.hidden = true, 300);
        } else {
            details.hidden = false;
            details.style.height = '0';
            requestAnimationFrame(() => {
                details.style.height = details.scrollHeight + 'px';
            });
        }
        
        this.setAttribute('aria-expanded', !isExpanded);
        this.textContent = isExpanded ? '詳細を見る' : '閉じる';
    });
});
```

### 3. スケルトンスクリーン

#### ローディング時のUX
```css
/* スケルトンスクリーン */
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.skeleton-text {
    height: 16px;
    margin-bottom: 8px;
    border-radius: 4px;
}

.skeleton-title {
    height: 24px;
    width: 60%;
    margin-bottom: 16px;
    border-radius: 4px;
}
```

## 📱 モバイル特有のUX改善

### 1. ジェスチャーヒント
```css
/* スワイプ可能要素のヒント */
.swipeable::after {
    content: '← スワイプ →';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #6c757d;
    opacity: 0;
    animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}
```

### 2. タップ領域の最適化
```css
/* 密集したリンクの間隔調整 */
.link-list a {
    display: block;
    padding: 12px 16px;
    margin: 4px 0;
    background: #f8f9fa;
    border-radius: 8px;
    text-decoration: none;
    color: #007bff;
}

/* 誤タップ防止の余白 */
.action-buttons {
    display: flex;
    gap: 16px; /* ボタン間の適切な間隔 */
}
```

## 🎨 ダークモード対応

```css
/* システム設定に従う */
@media (prefers-color-scheme: dark) {
    :root {
        --text-primary: #f8f9fa;
        --text-secondary: #adb5bd;
        --background: #121212;
        --white: #1e1e1e;
    }
    
    body {
        background-color: var(--background);
        color: var(--text-primary);
    }
    
    .drug-card {
        background-color: var(--white);
        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    }
}

/* ユーザー設定の保存 */
[data-theme="dark"] {
    /* ダークモード強制適用 */
}
```

## ✅ UXチェックリスト

### 基本原則
- [ ] 一貫性があるか
- [ ] 予測可能か
- [ ] 効率的か
- [ ] エラーを防げるか
- [ ] 回復可能か

### モバイルUX
- [ ] 親指で届く範囲に重要な要素があるか
- [ ] 誤タップしにくいか
- [ ] ローディングが体感的に速いか
- [ ] オフラインでも基本機能が使えるか

### アクセシビリティ
- [ ] 色だけに依存していないか
- [ ] 十分なコントラスト比があるか
- [ ] フォーカス順序が論理的か
- [ ] スクリーンリーダーで理解できるか

---

**最終的な目標**: 薬学生が「使いやすい」と感じるのではなく、UIの存在を忘れて学習に没頭できること。

**関連ドキュメント**:
- [PHASE2_DETAILED_PLAN.md](./PHASE2_DETAILED_PLAN.md) - Phase 2全体計画
- [RESPONSIVE_DESIGN_REQUIREMENTS.md](./RESPONSIVE_DESIGN_REQUIREMENTS.md) - レスポンシブ設計要件