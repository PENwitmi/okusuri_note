/**
 * Responsive Elements JavaScript
 * Task 2.3 & 2.4: 読みやすさ改善 + レスポンシブ要素実装
 * タイポグラフィ最適化・薬学教育特化・テーブル・画像・レイアウトの動的最適化
 */

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', function() {
    initResponsiveElements();
    initReadabilityEnhancements();
});

/**
 * Task 2.3: 読みやすさ改善機能の初期化
 * 薬学教育特化の可読性向上機能
 */
function initReadabilityEnhancements() {
    // 読了時間計算
    calculateReadingTime();
    
    // スクロール進度表示
    initScrollProgress();
    
    // 薬学教育特化機能
    initPharmacyEducationFeatures();
    
    // フォント読み込み最適化
    optimizeFontLoading();
    
    // アクセシビリティ強化
    enhanceAccessibility();
}

/**
 * 読了時間計算機能
 * 薬学記事の平均読書速度（日本語：400-500文字/分）を考慮
 */
function calculateReadingTime() {
    const articles = document.querySelectorAll('article, .drug-detail, .story-content, main');
    
    articles.forEach(function(article) {
        const text = article.innerText || article.textContent || '';
        const wordCount = text.length;
        const readingSpeed = 450; // 日本語の平均読書速度（文字/分）
        const readingTime = Math.ceil(wordCount / readingSpeed);
        
        // 既存の読了時間表示があるかチェック
        const existingReadingTime = article.querySelector('.reading-time');
        if (!existingReadingTime && wordCount > 500) {
            const readingTimeElement = document.createElement('div');
            readingTimeElement.className = 'reading-time';
            readingTimeElement.textContent = `読了時間: 約${readingTime}分`;
            
            // 記事の先頭に挿入
            const firstHeading = article.querySelector('h1, h2');
            if (firstHeading && firstHeading.parentNode === article) {
                article.insertBefore(readingTimeElement, firstHeading.nextSibling);
            } else {
                const firstChild = article.firstElementChild;
                if (firstChild) {
                    article.insertBefore(readingTimeElement, firstChild);
                } else {
                    article.appendChild(readingTimeElement);
                }
            }
        }
    });
}

/**
 * スクロール進度表示機能
 * 長い薬学記事での学習進捗可視化
 */
function initScrollProgress() {
    // プログレスバーの作成
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 9999;
        pointer-events: none;
        transition: opacity 0.3s ease;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #007bff 0%, #28a745 100%);
        width: 0%;
        transition: width 0.1s ease;
    `;
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    // スクロールイベントの処理
    let ticking = false;
    
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.min((winScroll / height) * 100, 100);
        
        progressBar.style.width = scrolled + '%';
        
        // スクロール開始で表示、停止で薄く
        progressContainer.style.opacity = scrolled > 1 ? '1' : '0.3';
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }, { passive: true });
}

/**
 * 薬学教育特化機能
 * 薬剤名のハイライト、専門用語の説明、暗記支援
 */
function initPharmacyEducationFeatures() {
    // 薬剤名の自動ハイライト
    highlightDrugNames();
    
    // 専門用語のツールチップ
    initTermTooltips();
    
    // 暗記カードの対話機能
    initMemoryCards();
    
    // 国試ポイントの表示制御
    initExamTips();
    
    // 臨床応用ノートの拡張
    enhanceClinicalNotes();
}

/**
 * 薬剤名の自動ハイライト
 */
function highlightDrugNames() {
    const commonDrugs = [
        'テルミサルタン', 'カンデサルタン', 'ロサルタン',
        'エンパグリフロジン', 'ダパグリフロジン',
        'ロスバスタチン', 'アトルバスタチン',
        'オメプラゾール', 'エスシタロプラム', 'セルトラリン',
        'メトホルミン', 'スピロノラクトン', 'バンコマイシン',
        'ワルファリン', 'ジゴキシン', 'フロセミド'
    ];
    
    const content = document.querySelectorAll('p, li, .drug-description, .story-description');
    
    content.forEach(function(element) {
        let html = element.innerHTML;
        
        commonDrugs.forEach(function(drug) {
            const regex = new RegExp(`\\b${drug}\\b`, 'gi');
            if (!html.includes(`<span class="drug-name">${drug}</span>`)) {
                html = html.replace(regex, `<span class="drug-name">${drug}</span>`);
            }
        });
        
        element.innerHTML = html;
    });
}

/**
 * 専門用語のツールチップ機能
 */
function initTermTooltips() {
    const terms = {
        'ARB': 'アンジオテンシン受容体拮抗薬（Angiotensin Receptor Blocker）',
        'SGLT2': 'ナトリウム・グルコース共輸送体2（Sodium Glucose co-Transporter 2）',
        'PPI': 'プロトンポンプ阻害薬（Proton Pump Inhibitor）',
        'SSRI': '選択的セロトニン再取り込み阻害薬（Selective Serotonin Reuptake Inhibitor）',
        'ACE阻害薬': 'アンジオテンシン変換酵素阻害薬',
        'β遮断薬': 'ベータ遮断薬（Beta-blocker）',
        'Ca拮抗薬': 'カルシウム拮抗薬',
        'T/P比': 'Trough/Peak比（薬効持続性の指標）',
        'TDM': 'Therapeutic Drug Monitoring（薬物血中濃度モニタリング）',
        'CYP': 'シトクロムP450（薬物代謝酵素）',
        'QOL': 'Quality of Life（生活の質）'
    };
    
    // ツールチップのスタイルが未追加の場合のみ追加
    if (!document.querySelector('#term-tooltip-styles')) {
        const style = document.createElement('style');
        style.id = 'term-tooltip-styles';
        style.textContent = `
            .term-tooltip {
                border-bottom: 1px dotted #007bff;
                cursor: help;
                position: relative;
                color: #0056b3;
                font-weight: 500;
            }
            
            .term-tooltip:hover::after {
                content: attr(data-tooltip);
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                white-space: nowrap;
                z-index: 1000;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                font-weight: normal;
                pointer-events: none;
            }
            
            @media (max-width: 768px) {
                .term-tooltip:active::after {
                    content: attr(data-tooltip);
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #333;
                    color: white;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-size: 16px;
                    white-space: normal;
                    max-width: 80vw;
                    z-index: 1000;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
                    text-align: center;
                    line-height: 1.4;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    Object.keys(terms).forEach(function(term) {
        const regex = new RegExp(`\\b${term}\\b`, 'g');
        const content = document.querySelectorAll('p:not(.hero-description), li, .drug-description');
        
        content.forEach(function(element) {
            if (element.innerHTML.match(regex) && !element.innerHTML.includes(`data-tooltip="${terms[term]}"`)) {
                element.innerHTML = element.innerHTML.replace(regex, 
                    `<span class="term-tooltip" data-tooltip="${terms[term]}">${term}</span>`
                );
            }
        });
    });
}

/**
 * 暗記カードの対話機能
 */
function initMemoryCards() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(function(card) {
        const question = card.querySelector('.question');
        const answer = card.querySelector('.answer');
        
        if (question && answer) {
            // 初期状態では回答を隠す
            answer.style.display = 'none';
            
            // カードをクリックで回答表示
            card.addEventListener('click', function() {
                const isAnswerVisible = answer.style.display !== 'none';
                
                if (!isAnswerVisible) {
                    answer.style.display = 'block';
                    card.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                    card.setAttribute('aria-expanded', 'true');
                } else {
                    answer.style.display = 'none';
                    card.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    card.setAttribute('aria-expanded', 'false');
                }
            });
            
            // アクセシビリティ対応
            card.style.cursor = 'pointer';
            card.setAttribute('role', 'button');
            card.setAttribute('aria-expanded', 'false');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', '暗記カード - クリックで回答を表示');
            
            // キーボード対応
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        }
    });
}

/**
 * 国試ポイントの表示制御
 */
function initExamTips() {
    const examTips = document.querySelectorAll('.exam-tip');
    
    examTips.forEach(function(tip, index) {
        const originalContent = tip.innerHTML;
        
        // 既にボタンが追加されている場合はスキップ
        if (tip.querySelector('.exam-tip-toggle')) {
            return;
        }
        
        // 内容が短い場合は展開機能を追加しない
        if (originalContent.length < 150) {
            return;
        }
        
        // 表示制御ボタンの追加
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '詳細を表示';
        toggleButton.className = 'exam-tip-toggle';
        toggleButton.style.cssText = `
            background: #f39c12;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            margin-top: 12px;
            transition: all 0.3s ease;
            min-height: 44px;
            font-weight: 600;
        `;
        
        // 要約の作成
        const summary = originalContent.substring(0, 120) + '...';
        tip.innerHTML = summary;
        tip.appendChild(toggleButton);
        
        // 展開/折りたたみ機能
        let isExpanded = false;
        toggleButton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (isExpanded) {
                tip.innerHTML = summary;
                tip.appendChild(toggleButton);
                toggleButton.textContent = '詳細を表示';
                toggleButton.style.background = '#f39c12';
                isExpanded = false;
            } else {
                tip.innerHTML = originalContent;
                tip.appendChild(toggleButton);
                toggleButton.textContent = '折りたたむ';
                toggleButton.style.background = '#e67e22';
                isExpanded = true;
            }
        });
    });
}

/**
 * 臨床応用ノートの拡張
 */
function enhanceClinicalNotes() {
    const clinicalNotes = document.querySelectorAll('.clinical-note');
    
    clinicalNotes.forEach(function(note) {
        // 臨床ノートにアイコンと構造化を追加
        if (!note.querySelector('.clinical-icon')) {
            const icon = document.createElement('span');
            icon.className = 'clinical-icon';
            icon.textContent = '🏥';
            icon.style.cssText = `
                font-size: 1.2em;
                margin-right: 8px;
                vertical-align: middle;
            `;
            note.insertBefore(icon, note.firstChild);
        }
    });
}

/**
 * フォント読み込み最適化
 */
function optimizeFontLoading() {
    // System fontsを使用しているため、WebFontの読み込み最適化は不要
    // ただし、フォントレンダリングの最適化を実施
    
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-display: swap;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    `;
    
    if (!document.querySelector('#font-optimization-styles')) {
        style.id = 'font-optimization-styles';
        document.head.appendChild(style);
    }
}

/**
 * アクセシビリティ強化
 */
function enhanceAccessibility() {
    // フォーカス可視化の強化
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), .memory-card'
    );
    
    focusableElements.forEach(function(element) {
        element.addEventListener('focus', function() {
            element.classList.add('accessibility-focus');
        });
        
        element.addEventListener('blur', function() {
            element.classList.remove('accessibility-focus');
        });
    });
    
    // スキップリンクの追加（メインコンテンツへのジャンプ）
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'メインコンテンツにスキップ';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            left: -9999px;
            z-index: 10000;
            padding: 8px 16px;
            background: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
        `;
        
        skipLink.addEventListener('focus', function() {
            skipLink.style.left = '10px';
            skipLink.style.top = '10px';
        });
        
        skipLink.addEventListener('blur', function() {
            skipLink.style.left = '-9999px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // メインコンテンツの識別
    const main = document.querySelector('main') || document.querySelector('.main-content');
    if (main && !main.id) {
        main.id = 'main-content';
    }
    
    // ランドマークの追加
    const sections = document.querySelectorAll('.drugs-section, .stories-section, .differentiation-section');
    sections.forEach(function(section) {
        if (!section.getAttribute('role')) {
            section.setAttribute('role', 'region');
        }
        
        const heading = section.querySelector('h2, h3');
        if (heading && !section.getAttribute('aria-labelledby')) {
            if (!heading.id) {
                heading.id = 'section-' + Math.random().toString(36).substr(2, 9);
            }
            section.setAttribute('aria-labelledby', heading.id);
        }
    });
}

/**
 * レスポンシブ要素の初期化
 * テーブル、画像、その他の要素の動的最適化を設定
 */
function initResponsiveElements() {
    optimizeTables();
    optimizeImages();
    setupResponsiveGrid();
    optimizeTouch();
    
    // リサイズ時の再最適化
    window.addEventListener('resize', debounce(function() {
        optimizeTables();
        optimizeImages();
        setupResponsiveGrid();
    }, 250));
}

/**
 * テーブルのレスポンシブ最適化
 * 横スクロール対応とスクロールヒントの追加
 */
function optimizeTables() {
    const tables = document.querySelectorAll('table');
    
    tables.forEach(function(table) {
        // 既存のコンテナをチェック
        let container = table.closest('.table-container');
        
        if (!container) {
            // テーブルコンテナの作成
            container = document.createElement('div');
            container.className = 'table-container';
            
            // テーブルをコンテナで包む
            table.parentNode.insertBefore(container, table);
            container.appendChild(table);
        }
        
        // モバイルビューポートでスクロールヒントを追加
        if (window.innerWidth <= 768) {
            addScrollHint(container, table);
            
            // テーブルヘッダーの固定（sticky）
            makeHeaderSticky(table);
            
            // セル内容の最適化
            optimizeTableCells(table);
        }
    });
}

/**
 * スクロールヒントの追加
 */
function addScrollHint(container, table) {
    // 既存のヒントを削除
    const existingHint = container.querySelector('.table-scroll-hint');
    if (existingHint) {
        existingHint.remove();
    }
    
    // テーブルがコンテナより広い場合のみヒント表示
    if (table.scrollWidth > container.clientWidth) {
        const hint = document.createElement('div');
        hint.className = 'table-scroll-hint';
        hint.textContent = '横スクロールで全体表示';
        container.appendChild(hint);
        
        // スクロール時にヒントを非表示
        container.addEventListener('scroll', function() {
            if (container.scrollLeft > 10) {
                hint.style.opacity = '0.3';
            } else {
                hint.style.opacity = '1';
            }
        });
    }
}

/**
 * テーブルヘッダーの固定
 */
function makeHeaderSticky(table) {
    const headers = table.querySelectorAll('th');
    headers.forEach(function(header) {
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.zIndex = '10';
    });
}

/**
 * テーブルセルの最適化
 */
function optimizeTableCells(table) {
    const cells = table.querySelectorAll('td');
    cells.forEach(function(cell) {
        // 長いテキストの省略対応
        if (cell.textContent.length > 50) {
            cell.setAttribute('title', cell.textContent);
        }
        
        // 数値セルの右寄せ
        if (/^\d+(\.\d+)?$/.test(cell.textContent.trim())) {
            cell.style.textAlign = 'right';
        }
    });
}

/**
 * 画像のレスポンシブ最適化
 * 遅延読み込み、適切なサイズ調整、キャプション追加
 */
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        // 遅延読み込みの設定
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // モバイル用クラスの追加
        if (window.innerWidth <= 768) {
            optimizeImageForMobile(img);
        }
        
        // 画像エラー時の代替処理
        img.addEventListener('error', function() {
            handleImageError(this);
        });
        
        // 画像読み込み完了時の処理
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
}

/**
 * モバイル用画像最適化
 */
function optimizeImageForMobile(img) {
    // 薬剤構造式の特別処理
    if (img.alt && img.alt.includes('構造式')) {
        img.classList.add('drug-structure');
    }
    
    // 比較図・チャートの特別処理
    if (img.alt && (img.alt.includes('比較') || img.alt.includes('チャート'))) {
        img.classList.add('comparison-chart');
    }
    
    // キャプションの追加（alt属性から）
    if (img.alt && !img.nextElementSibling?.classList.contains('image-caption')) {
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        caption.textContent = img.alt;
        img.parentNode.insertBefore(caption, img.nextSibling);
    }
}

/**
 * 画像エラー時の代替処理
 */
function handleImageError(img) {
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = `
        <div class="placeholder-content">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">画像を読み込めませんでした</span>
        </div>
    `;
    
    // スタイル設定
    placeholder.style.cssText = `
        background: #f8f9fa;
        border: 2px dashed #dee2e6;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        color: #6c757d;
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    img.parentNode.replaceChild(placeholder, img);
}

/**
 * レスポンシブグリッドの設定
 * カードレイアウトの動的調整
 */
function setupResponsiveGrid() {
    const grids = document.querySelectorAll('.drugs-grid, .categories-grid, .stories-grid, .differentiation-grid');
    
    grids.forEach(function(grid) {
        adjustGridColumns(grid);
    });
}

/**
 * グリッドカラム数の動的調整
 */
function adjustGridColumns(grid) {
    const width = window.innerWidth;
    let columns;
    
    // 薬剤カードは特別扱い
    if (grid.classList.contains('drugs-grid')) {
        if (width <= 768) {
            columns = 'repeat(2, 1fr)';  // モバイルでも2列維持
        } else {
            columns = 'repeat(3, 1fr)';  // デスクトップは3列
        }
    } else {
        // その他のグリッド（features-grid、categories-gridなど）
        if (width <= 480) {
            columns = '1fr';
        } else if (width <= 768) {
            columns = 'repeat(2, 1fr)';
        } else if (width <= 1024) {
            columns = 'repeat(3, 1fr)';
        } else {
            columns = 'repeat(auto-fit, minmax(300px, 1fr))';
        }
    }
    
    grid.style.gridTemplateColumns = columns;
}

/**
 * タッチ操作の最適化
 * タップ領域の拡大、フィードバックの改善
 */
function optimizeTouch() {
    if (window.innerWidth <= 768) {
        optimizeTouchTargets();
        addTouchFeedback();
    }
}

/**
 * タッチターゲットの最適化
 */
function optimizeTouchTargets() {
    const links = document.querySelectorAll('a, button');
    
    links.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        
        // 44px未満のタッチターゲットに追加パディング
        if (rect.height < 44) {
            const additionalPadding = (44 - rect.height) / 2;
            element.style.paddingTop = `${Math.max(12, additionalPadding)}px`;
            element.style.paddingBottom = `${Math.max(12, additionalPadding)}px`;
        }
        
        if (rect.width < 44) {
            const additionalPadding = (44 - rect.width) / 2;
            element.style.paddingLeft = `${Math.max(16, additionalPadding)}px`;
            element.style.paddingRight = `${Math.max(16, additionalPadding)}px`;
        }
    });
}

/**
 * タッチフィードバックの追加
 */
function addTouchFeedback() {
    const touchElements = document.querySelectorAll('.drug-card, .category-card, .story-card, .diff-card, button, .nav-link');
    
    touchElements.forEach(function(element) {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s ease';
        }, { passive: true });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        }, { passive: true });
    });
}

/**
 * フォーム要素の最適化
 * モバイルでの入力体験向上
 */
function optimizeForms() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="search"], input[type="email"], textarea');
    
    inputs.forEach(function(input) {
        // iOS Safariでのズーム防止（16px以上のフォントサイズ）
        if (window.innerWidth <= 768) {
            input.style.fontSize = '16px';
        }
        
        // 入力時のバリデーション表示
        input.addEventListener('invalid', function() {
            this.style.borderColor = '#dc3545';
        });
        
        input.addEventListener('input', function() {
            if (this.validity.valid) {
                this.style.borderColor = '#28a745';
            }
        });
    });
}

/**
 * パフォーマンス最適化用デバウンス関数
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * レスポンシブブレークポイントの検出
 */
function getBreakpoint() {
    const width = window.innerWidth;
    
    if (width <= 480) return 'xs';
    if (width <= 768) return 'sm';
    if (width <= 1024) return 'md';
    if (width <= 1200) return 'lg';
    return 'xl';
}

/**
 * 現在のブレークポイントに基づく条件実行
 */
function onBreakpoint(breakpoints, callback) {
    const current = getBreakpoint();
    if (breakpoints.includes(current)) {
        callback(current);
    }
}

/**
 * Lighthouse Mobile対応の最適化
 * モバイルパフォーマンススコア向上のための追加機能
 */
function optimizeForLighthouse() {
    // Critical Resource Hints
    addResourceHints();
    
    // Cumulative Layout Shift (CLS) 対策
    preventLayoutShift();
    
    // First Input Delay (FID) 対策
    optimizeInteractivity();
}

/**
 * リソースヒントの追加
 */
function addResourceHints() {
    // 現在はリソースヒントは不要（mobile-optimization.cssは廃止済み）
    // 将来的に必要になった場合にここに追加
}

/**
 * レイアウトシフト防止
 */
function preventLayoutShift() {
    // 画像のアスペクト比保持
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        if (!img.style.aspectRatio && img.width && img.height) {
            img.style.aspectRatio = `${img.width} / ${img.height}`;
        }
    });
}

/**
 * インタラクティビティの最適化
 */
function optimizeInteractivity() {
    // 重要でないスクリプトの遅延実行
    setTimeout(() => {
        // 非重要な機能の初期化
        optimizeForms();
        optimizeForLighthouse();
    }, 100);
}

// フォーム最適化の初期化
document.addEventListener('DOMContentLoaded', function() {
    optimizeForms();
});

// Lighthouse最適化の初期化
document.addEventListener('DOMContentLoaded', function() {
    requestIdleCallback(() => {
        optimizeForLighthouse();
    });
});

/**
 * デバッグ用：レスポンシブ状態の確認
 */
function debugResponsive() {
    console.log('Responsive Elements Debug Info:');
    console.log('Current breakpoint:', getBreakpoint());
    console.log('Window size:', window.innerWidth + 'x' + window.innerHeight);
    console.log('Tables optimized:', document.querySelectorAll('.table-container').length);
    console.log('Images optimized:', document.querySelectorAll('img[loading="lazy"]').length);
    console.log('Touch targets count:', document.querySelectorAll('[style*="padding"]').length);
}

// デバッグ関数をグローバルに公開（開発時のみ）
if (typeof window !== 'undefined') {
    window.debugResponsive = debugResponsive;
}