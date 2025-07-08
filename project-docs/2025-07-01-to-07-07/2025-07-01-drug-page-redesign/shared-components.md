# 薬剤ページ再設計 共有コンポーネント

**作成日**: 2025-07-02 01:38
**作成者**: Manager
**目的**: 開発者間で共有するコンポーネントとコードスニペット

## 🎨 レベル別カラースキーム

```css
/* レベル別の背景色 */
.student-level {
    background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
    border-left: 5px solid var(--pharma-primary, #3498db);
}

.intermediate-level {
    background: linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%);
    border-left: 5px solid #9c27b0;
}

.advanced-level {
    background: linear-gradient(135deg, #fce4ec 0%, #fff3e0 100%);
    border-left: 5px solid #f44336;
}

/* セクション共通スタイル */
section {
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## 📍 レベルインジケーター

### HTML構造
```html
<!-- ページ最上部のメタ情報 -->
<div class="drug-header-meta">
    <!-- パンくずナビゲーション -->
    <nav class="breadcrumb">
        <a href="../../">ホーム</a> &gt; 
        <a href="../../#drugs">薬剤一覧</a> &gt; 
        <a href="../">[薬効群]</a> &gt; 
        <span>[薬剤名]</span>
    </nav>
    
    <!-- 学習レベルインジケーター -->
    <div class="study-level-indicator">
        <div class="level-progress">
            <span class="level active" data-target=".student-level">薬学生</span>
            <span class="level" data-target=".intermediate-level">実習中の薬学生</span>
            <span class="level" data-target=".advanced-level">研修中の薬剤師</span>
        </div>
    </div>
</div>
```

### CSS
```css
/* プログレスインジケーター */
.study-level-indicator {
    position: sticky;
    top: 60px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
    padding: 1rem 0;
}

.level-progress {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.level {
    padding: 8px 24px;
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #666;
    background: #f5f5f5;
}

.level:hover {
    background: #e0e0e0;
}

.level.active {
    background: var(--pharma-primary, #3498db);
    color: white;
}

/* モバイル対応 */
@media (max-width: 768px) {
    .study-level-indicator {
        top: 50px;
    }
    
    .level-progress {
        font-size: 12px;
        padding: 0 10px;
    }
    
    .level {
        padding: 6px 16px;
        font-size: 12px;
    }
}
```

### JavaScript
```javascript
// レベルインジケーター機能
document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロール付きジャンプ機能
    document.querySelectorAll('.level').forEach(level => {
        level.addEventListener('click', (e) => {
            const targetSelector = e.target.dataset.target;
            const targetSection = document.querySelector(targetSelector);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // アクティブ状態の更新
                document.querySelectorAll('.level').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });

    // スクロール位置に応じてインジケーター更新
    let ticking = false;
    function updateIndicator() {
        const sections = [
            { el: '.student-level', level: '薬学生' },
            { el: '.intermediate-level', level: '実習中の薬学生' },
            { el: '.advanced-level', level: '研修中の薬剤師' }
        ];
        
        sections.forEach(section => {
            const el = document.querySelector(section.el);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 100) {
                    document.querySelectorAll('.level').forEach(l => {
                        if (l.textContent === section.level) {
                            l.classList.add('active');
                        } else {
                            l.classList.remove('active');
                        }
                    });
                }
            }
        });
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateIndicator);
            ticking = true;
        }
    });
});
```

## 🎓 レベル1：基本情報カードテンプレート

```html
<section class="basic-info-card student-level">
    <div class="drug-name-display">
        <h1 class="brand-name">[先発品名]®</h1>
        <p class="generic-name">[一般名]</p>
    </div>
    
    <div class="classification-badges">
        <span class="drug-class-badge [薬効群クラス]">
            <i class="icon-[薬効群]"></i>
            [薬効分類]
        </span>
        <!-- 第一選択薬の場合のみ表示 -->
        <span class="first-choice-badge">第一選択薬</span>
    </div>
    
    <div class="main-indications">
        <h3>主な適応症</h3>
        <ul class="indication-list">
            <li class="primary">[主適応]</li>
            <li>[副適応1]</li>
            <li>[副適応2]</li>
        </ul>
        <!-- 特殊な適応がある場合 -->
        <div class="unique-indication">
            <span class="attention-badge">注目</span>
            [特殊適応]（適応外）
        </div>
    </div>
</section>
```

## ⚡ 30秒サマリーテンプレート

```html
<section class="quick-summary-student">
    <h2>⚡ 30秒でわかる[薬剤名]</h2>
    
    <div class="summary-grid">
        <div class="summary-item fic-status">
            <h4>開発の位置づけ</h4>
            <p class="fic-badge">[First In Class/Best In Class/Me Too]</p>
            <p>[位置づけの説明]</p>
        </div>
        
        <div class="summary-item why-developed">
            <h4>なぜ作られた？</h4>
            <p>[開発背景を1-2文で]</p>
        </div>
        
        <div class="summary-item clinical-use">
            <h4>実際どう使われてる？</h4>
            <p>[現在の臨床使用状況を1-2文で]</p>
        </div>
        
        <div class="summary-item vs-similar">
            <h4>他の薬との違い</h4>
            <p>[最も重要な差別化ポイントを1-2文で]</p>
        </div>
    </div>
</section>
```

## 💡 薬学生FAQテンプレート

```html
<div class="student-faq-section">
    <h3>💡 薬学生のよくある疑問（最重要）</h3>
    <dl class="student-questions">
        <dt>Q: 「国試によく出るポイントは？」</dt>
        <dd>A: [薬剤特有の国試頻出ポイントを箇条書きで]</dd>
        
        <dt>Q: 「[薬剤特有の基礎的疑問]」</dt>
        <dd>A: [薬学的に正確な回答]</dd>
        
        <dt>Q: 「[薬効群に関する基礎的疑問]」</dt>
        <dd>A: [他の同系薬との関係を含めた回答]</dd>
    </dl>
    
    <div class="faq-note">
        <p>💡 <strong>ポイント</strong>：薬学の授業で学ぶ内容に関する質問のみ。実習に関する質問はレベル2で扱います。</p>
    </div>
</div>
```

## 📝 処方パターンテンプレート

```html
<div class="prescription-examples">
    <h3>よく見る処方パターン</h3>
    
    <div class="rx-example">
        <div class="rx-format">
            Rp) [薬剤名] [規格]  
                1回[用量] 1日[回数] [用法]  
                [日数]分
        </div>
        <p class="rx-note">※ [重要な注意点]</p>
    </div>
    
    <div class="common-combinations">
        <h4>一緒に処方される薬TOP3</h4>
        <ol class="combo-list">
            <li>[併用薬1]（[商品名]） - [併用理由]</li>
            <li>[併用薬2]（[商品名]） - [併用理由]</li>
            <li>[併用薬3]（[商品名]） - [併用理由]</li>
        </ol>
    </div>
</div>
```

## 🚨 注意事項ボックス

```html
<!-- 併用禁忌 -->
<div class="contraindication-box danger">
    <h4>🚫 併用禁忌</h4>
    <ul>
        <li>[禁忌薬剤] - [理由]</li>
    </ul>
</div>

<!-- 併用注意 -->
<div class="caution-box warning">
    <h4>⚠️ 併用注意</h4>
    <ul>
        <li>[注意薬剤] - [注意点]</li>
    </ul>
</div>

<!-- 生活指導 -->
<div class="lifestyle-box info">
    <h4>🍽️ 食事・生活指導</h4>
    <ul>
        <li>[指導内容]</li>
    </ul>
</div>
```

## 📊 共通スタイル

```css
/* ボックススタイル */
.danger {
    background-color: #ffebee;
    border-left: 4px solid #f44336;
}

.warning {
    background-color: #fff3e0;
    border-left: 4px solid #ff9800;
}

.info {
    background-color: #e3f2fd;
    border-left: 4px solid #2196f3;
}

/* 処方例スタイル */
.rx-format {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    font-family: monospace;
    white-space: pre-line;
}

/* サマリーグリッド */
.summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.summary-item {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* バッジスタイル */
.first-choice-badge {
    background: #4caf50;
    color: white;
    padding: 4px 16px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
}

.attention-badge {
    background: #ff5722;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}
```

## 📱 モバイル対応

```css
@media (max-width: 768px) {
    .summary-grid {
        grid-template-columns: 1fr;
    }
    
    section {
        padding: 1rem;
        margin-bottom: 1rem;
    }
    
    .drug-name-display h1 {
        font-size: 1.5rem;
    }
    
    .prescription-examples {
        font-size: 14px;
    }
    
    .rx-format {
        font-size: 12px;
    }
}
```

## 🔧 使用方法

1. 各開発者は、このファイルから必要なコンポーネントをコピー
2. 薬剤固有の情報を[プレースホルダー]部分に置換
3. 必要に応じてカスタマイズ
4. 統一感のあるページを効率的に作成

## 📌 注意事項

- CSSクラス名は変更しない（統一性のため）
- 構造は基本的に維持する
- 薬剤特有の要素は追加可能
- アクセシビリティ（WCAG AAA）を常に意識