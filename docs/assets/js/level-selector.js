// level-selector.js - 統一されたレベル切替機能
// 作成日時: 2025-07-04 15:35
// 作成者: CEO
// 目的: 22薬剤ページで重複している1,100行のJavaScriptコードを統一
// 更新日時: 2025-07-07 23:52
// 更新内容: レベルインジケーター制御機能追加（level-N-indicatorクラス対応）

// グローバル設定
const CONFIG = {
    transitionDuration: 300,  // ミリ秒
    defaultLevel: '1',
    enableAnimation: true,
    rememberLastLevel: false  // 将来の拡張用
};

// 初期化関数
document.addEventListener('DOMContentLoaded', function() {
    initializeLevelSelector();
});

// URLハッシュ変更時の処理
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    const match = hash.match(/#level-([1-3])/);
    if (match) {
        const level = match[1];
        // ハッシュ更新なしでレベルを表示
        showLevelInternal(level);
    }
});

function initializeLevelSelector() {
    // 要素の取得
    const levelButtons = document.querySelectorAll('.level-btn');
    const hasLevelSelector = document.querySelector('.level-selector');
    
    if (!hasLevelSelector || levelButtons.length === 0) {
        console.warn('Level selector not found on this page');
        return;
    }
    
    // イベントリスナーの設定
    levelButtons.forEach(button => {
        button.addEventListener('click', handleLevelChange);
    });
    
    // UIガイダンスの自動挿入（存在しない場合）
    injectUIGuidanceIfNeeded();
    
    // 初期表示の設定（URLハッシュをチェック）
    const hash = window.location.hash;
    const match = hash.match(/#level-([1-3])/);
    if (match) {
        // URLハッシュがある場合はそのレベルを表示
        showLevel(match[1]);
    } else {
        // ハッシュがない場合はデフォルトレベルを表示
        showLevel(CONFIG.defaultLevel);
    }
    
    // コンテンツカウントの自動計算と表示
    updateContentIndicators();
}

// レベル切替処理
function handleLevelChange(event) {
    const targetLevel = event.currentTarget.dataset.level;
    showLevel(targetLevel);
}

// レベル表示の内部実装（ハッシュ更新なし）
function showLevelInternal(level) {
    // ページトップへスムーズスクロール
    // 古いブラウザにも対応
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // 古いブラウザ用フォールバック
        window.scrollTo(0, 0);
    }
    
    // すべてのレベルコンテンツとインジケーターを取得
    const allLevelContents = document.querySelectorAll('[class*="level-"][class*="-content"]');
    const allLevelIndicators = document.querySelectorAll('[class*="level-"][class*="-indicator"]');
    const levelButtons = document.querySelectorAll('.level-btn');
    
    // アニメーション付き非表示（コンテンツ）
    allLevelContents.forEach(content => {
        if (CONFIG.enableAnimation) {
            content.style.transition = `opacity ${CONFIG.transitionDuration}ms`;
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.display = 'none';
            }, CONFIG.transitionDuration);
        } else {
            content.style.display = 'none';
        }
    });
    
    // インジケーターを即座に非表示
    allLevelIndicators.forEach(indicator => {
        indicator.style.display = 'none';
    });
    
    // 選択レベルのコンテンツを表示
    setTimeout(() => {
        const targetContents = document.querySelectorAll(`.level-${level}-content`);
        targetContents.forEach(content => {
            content.style.display = 'block';
            if (CONFIG.enableAnimation) {
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 10);
            }
        });
        
        // 選択レベルのインジケーターを表示
        const targetIndicator = document.querySelector(`.level-${level}-indicator`);
        if (targetIndicator) {
            targetIndicator.style.display = 'inline-block';
        }
    }, CONFIG.enableAnimation ? CONFIG.transitionDuration : 0);
    
    // ボタンのアクティブ状態更新
    levelButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
    
    // インジケーター更新
    updateIndicatorState(level);
}

// レベル表示関数（URLハッシュ更新あり）
function showLevel(level) {
    // レベル表示の共通処理を実行
    showLevelInternal(level);
    
    // URLハッシュを更新（無限ループ防止のため現在値と比較）
    if (window.location.hash !== `#level-${level}`) {
        window.location.hash = `level-${level}`;
    }
}

// UIガイダンスの自動挿入
function injectUIGuidanceIfNeeded() {
    const levelSelector = document.querySelector('.level-selector');
    const existingGuide = levelSelector.querySelector('.level-selector__guide');
    
    if (!existingGuide) {
        const guideHTML = `
            <div class="level-selector__guide">
                <span class="guide-text">👇 あなたの学習段階を選んでください</span>
                <span class="guide-sub">クリックで表示内容が切り替わります</span>
            </div>
        `;
        
        // level-selector__innerの前に挿入
        const innerSelector = levelSelector.querySelector('.level-selector__inner');
        if (innerSelector) {
            innerSelector.insertAdjacentHTML('beforebegin', guideHTML);
        }
    }
    
    // レベルボタンに説明を追加
    const levelButtons = document.querySelectorAll('.level-btn');
    const levelDescriptions = ['基本を学ぶ', '実践を学ぶ', '深く学ぶ'];
    
    levelButtons.forEach((btn, index) => {
        if (!btn.querySelector('.level-desc') && levelDescriptions[index]) {
            const descSpan = document.createElement('span');
            descSpan.className = 'level-desc';
            descSpan.textContent = levelDescriptions[index];
            btn.appendChild(descSpan);
        }
    });
}

// コンテンツインジケーターの更新
function updateContentIndicators() {
    const levels = ['1', '2', '3'];
    const levelNames = ['基本情報', '実践情報', '詳細情報'];
    
    // 各レベルのコンテンツ数を計算
    const contentCounts = levels.map(level => {
        const contents = document.querySelectorAll(`.level-${level}-content`);
        return contents.length;
    });
    
    // インジケーターが存在しない場合は作成
    let indicator = document.querySelector('.content-indicator');
    if (!indicator && contentCounts.some(count => count > 0)) {
        createContentIndicator();
        indicator = document.querySelector('.content-indicator');
    }
    
    // カウントを更新
    if (indicator) {
        levels.forEach((level, index) => {
            const item = indicator.querySelectorAll('.indicator-item')[index];
            if (item) {
                const countSpan = item.querySelector('.content-count');
                if (countSpan) {
                    countSpan.textContent = `${levelNames[index]} ${contentCounts[index]}項目`;
                }
            }
        });
    }
    
    // レベル間誘導を追加
    addLevelTransitionPrompts();
}

// コンテンツインジケーターの作成
function createContentIndicator() {
    const levelSelector = document.querySelector('.level-selector');
    const indicatorHTML = `
        <div class="content-indicator">
            <div class="indicator-item active">
                <span class="level">Level 1</span>
                <span class="content-count">基本情報 0項目</span>
            </div>
            <div class="indicator-item">
                <span class="level">Level 2</span>
                <span class="content-count">実践情報 0項目</span>
            </div>
            <div class="indicator-item">
                <span class="level">Level 3</span>
                <span class="content-count">詳細情報 0項目</span>
            </div>
        </div>
    `;
    levelSelector.insertAdjacentHTML('beforeend', indicatorHTML);
}

// インジケーター状態の更新
function updateIndicatorState(activeLevel) {
    const items = document.querySelectorAll('.indicator-item');
    items.forEach((item, index) => {
        const itemLevel = (index + 1).toString();
        item.classList.toggle('active', itemLevel <= activeLevel);
    });
}

// レベル間誘導プロンプトの追加
function addLevelTransitionPrompts() {
    // Level 1の最後に誘導を追加
    const level1Contents = document.querySelectorAll('.level-1-content');
    if (level1Contents.length > 0) {
        const lastLevel1 = level1Contents[level1Contents.length - 1];
        if (!lastLevel1.querySelector('.next-level-prompt')) {
            const prompt1HTML = `
                <div class="next-level-prompt">
                    <p>🎓 基本を理解できましたか？</p>
                    <button onclick="showLevel('2')" class="next-level-btn">
                        実践的な内容を見る（Level 2）→
                    </button>
                </div>
            `;
            lastLevel1.insertAdjacentHTML('beforeend', prompt1HTML);
        }
    }
    
    // Level 2の最後に誘導を追加
    const level2Contents = document.querySelectorAll('.level-2-content');
    if (level2Contents.length > 0) {
        const lastLevel2 = level2Contents[level2Contents.length - 1];
        if (!lastLevel2.querySelector('.next-level-prompt')) {
            const prompt2HTML = `
                <div class="next-level-prompt">
                    <p>🏥 実践的な知識を習得しましたか？</p>
                    <button onclick="showLevel('3')" class="next-level-btn">
                        専門的な内容を見る（Level 3）→
                    </button>
                </div>
            `;
            lastLevel2.insertAdjacentHTML('beforeend', prompt2HTML);
        }
    }
}

// 外部から呼び出し可能な関数をグローバルに公開
window.showLevel = showLevel;
// ハッシュ更新なし版（モバイルボトムシート等で使用可能）
window.showLevelWithoutHashUpdate = showLevelInternal;

// デバッグ用ユーティリティ（本番環境では削除可能）
window.debugLevelSelector = function() {
    const levels = ['1', '2', '3'];
    console.log('=== Level Selector Debug Info ===');
    
    levels.forEach(level => {
        const contents = document.querySelectorAll(`.level-${level}-content`);
        console.log(`Level ${level}: ${contents.length} content sections`);
    });
    
    const buttons = document.querySelectorAll('.level-btn');
    console.log(`Buttons found: ${buttons.length}`);
    
    const guide = document.querySelector('.level-selector__guide');
    console.log(`UI Guide: ${guide ? 'Present' : 'Missing'}`);
    
    const indicator = document.querySelector('.content-indicator');
    console.log(`Content Indicator: ${indicator ? 'Present' : 'Missing'}`);
};