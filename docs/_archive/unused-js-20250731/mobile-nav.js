/**
 * Mobile Navigation JavaScript
 * Task 2.2: Touch-friendly UI Implementation
 * ハンバーガーメニューの動作とモバイルナビゲーション制御
 */

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
});

/**
 * モバイルナビゲーションの初期化
 * ハンバーガーメニューのクリックイベントとアクセシビリティを設定
 */
function initMobileNav() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    // 要素が存在しない場合は処理を終了
    if (!hamburger || !nav) {
        console.warn('Mobile navigation elements not found');
        return;
    }
    
    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', function() {
        toggleMobileMenu();
    });
    
    // 外側クリックでメニューを閉じる
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // ESCキーでメニューを閉じる（アクセシビリティ向上）
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMobileMenu();
            hamburger.focus(); // フォーカスをハンバーガーボタンに戻す
        }
    });
    
    // ナビゲーションリンククリック時にメニューを閉じる
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // リサイズ時の処理（デスクトップサイズでメニューが開いていたら閉じる）
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // アクセシビリティ属性の設定
    setupAccessibility();
}

/**
 * モバイルメニューの表示/非表示を切り替え
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    if (nav.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * モバイルメニューを開く
 */
function openMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    nav.classList.add('active');
    hamburger.classList.add('active');
    
    // アクセシビリティ属性の更新
    hamburger.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    
    // 最初のナビゲーションリンクにフォーカス
    const firstNavLink = nav.querySelector('.nav-link');
    if (firstNavLink) {
        setTimeout(() => firstNavLink.focus(), 300); // アニメーション完了後
    }
    
    // ボディのスクロールを防ぐ（長いメニューの場合）
    document.body.style.overflow = 'hidden';
}

/**
 * モバイルメニューを閉じる
 */
function closeMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    
    // アクセシビリティ属性の更新
    hamburger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    
    // ボディのスクロールを復元
    document.body.style.overflow = '';
}

/**
 * アクセシビリティ属性の初期設定
 */
function setupAccessibility() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    if (hamburger && nav) {
        // ハンバーガーボタンの属性設定
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'main-navigation');
        hamburger.setAttribute('aria-label', 'メニューを開く');
        
        // ナビゲーションの属性設定
        nav.setAttribute('id', 'main-navigation');
        nav.setAttribute('aria-hidden', 'true');
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'メインナビゲーション');
    }
}

/**
 * タッチイベントの最適化（タッチデバイス向け）
 * タップの反応性を向上させる
 */
function optimizeTouchEvents() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    
    if (hamburger) {
        // タッチ開始時の視覚的フィードバック
        hamburger.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        }, { passive: true });
        
        // タッチ終了時のリセット
        hamburger.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    }
}

/**
 * 検索機能の強化（モバイル向け）
 */
function enhanceSearchForMobile() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        // モバイルでのEnterキー対応
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        // 検索ボタンのタッチ最適化
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
}

/**
 * パフォーマンス最適化
 * スクロール時の処理軽減
 */
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateStyles);
        ticking = true;
    }
}

function updateStyles() {
    // ここでスクロール関連のスタイル更新があれば実装
    ticking = false;
}

// スクロールイベントの最適化
window.addEventListener('scroll', requestTick, { passive: true });

// タッチイベント最適化の初期化
document.addEventListener('DOMContentLoaded', function() {
    optimizeTouchEvents();
    enhanceSearchForMobile();
});

/**
 * デバッグ用：モバイルナビゲーションの状態確認
 */
function debugMobileNav() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    console.log('Mobile Navigation Debug Info:');
    console.log('Hamburger element:', hamburger);
    console.log('Navigation element:', nav);
    console.log('Navigation active:', nav?.classList.contains('active'));
    console.log('Window width:', window.innerWidth);
    console.log('Is mobile view:', window.innerWidth <= 768);
}

// デバッグ関数をグローバルに公開（開発時のみ）
if (typeof window !== 'undefined') {
    window.debugMobileNav = debugMobileNav;
}