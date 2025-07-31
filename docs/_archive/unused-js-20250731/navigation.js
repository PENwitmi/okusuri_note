/**
 * おくすりノート ナビゲーション機能
 * 薬学生のモバイル学習に最適化されたナビゲーションシステム
 * 
 * 機能:
 * - ハンバーガーメニューの開閉
 * - スムーズなページ内アンカーリンク
 * - アクティブメニューの視覚的表示
 * - モバイル対応の最適化
 * - アクセシビリティ対応
 */

class OkusuriNavigation {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.mainNav = document.querySelector('.main-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.header = document.querySelector('.header');
        
        this.isMobileMenuOpen = false;
        this.currentActiveSection = null;
        this.scrollTimeout = null;
        
        this.init();
    }
    
    /**
     * ナビゲーションシステムの初期化
     */
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupScrollBehavior();
        this.setupKeyboardNavigation();
        this.setupClickOutside();
        
        console.log('おくすりノート ナビゲーションシステム初期化完了');
    }
    
    /**
     * モバイルメニューの設定
     */
    setupMobileMenu() {
        if (this.mobileMenuBtn) {
            // ハンバーガーボタンのアクセシビリティ属性設定
            this.mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
            this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            this.mobileMenuBtn.setAttribute('aria-controls', 'main-navigation');
            
            // メインナビゲーションのID設定
            if (this.mainNav) {
                this.mainNav.id = 'main-navigation';
            }
            
            // クリックイベントリスナー
            this.mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }
        
        // ウィンドウサイズ変更時の処理
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    /**
     * スムーズスクロールの設定
     */
    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // ページ内アンカーリンクの場合
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    this.smoothScrollToSection(href);
                    
                    // モバイルメニューが開いている場合は閉じる
                    if (this.isMobileMenuOpen) {
                        this.closeMobileMenu();
                    }
                }
            });
        });
        
        // ロゴクリック時のトップスクロール
        const logo = document.querySelector('.logo a');
        if (logo) {
            logo.addEventListener('click', (e) => {
                if (logo.getAttribute('href') === 'index.html' || logo.getAttribute('href') === '#') {
                    e.preventDefault();
                    this.smoothScrollToTop();
                }
            });
        }
    }
    
    /**
     * アクティブナビゲーションの設定
     */
    setupActiveNavigation() {
        // Intersection Observer でアクティブセクションを監視
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // ビューポートの中央付近でトリガー
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setActiveNavItem(entry.target.id);
                }
            });
        }, observerOptions);
        
        // 監視対象セクションを設定
        const sections = ['drugs', 'categories', 'stories', 'differentiation'];
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });
    }
    
    /**
     * スクロール動作の設定
     */
    setupScrollBehavior() {
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const updateScrollBehavior = () => {
            const currentScrollY = window.scrollY;
            
            // ヘッダーの固定/非固定切り替え
            if (this.header) {
                if (currentScrollY > 100) {
                    this.header.classList.add('scrolled');
                } else {
                    this.header.classList.remove('scrolled');
                }
                
                // モバイルでのヘッダー自動非表示（下スクロール時）
                if (window.innerWidth <= 768) {
                    if (currentScrollY > lastScrollY && currentScrollY > 200) {
                        this.header.classList.add('hidden');
                    } else {
                        this.header.classList.remove('hidden');
                    }
                }
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollBehavior);
                ticking = true;
            }
        });
    }
    
    /**
     * キーボードナビゲーションの設定
     */
    setupKeyboardNavigation() {
        // Escキーでモバイルメニューを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
        
        // Tabキーでのフォーカス管理
        this.navLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                }
            });
        });
    }
    
    /**
     * 外側クリックでメニューを閉じる設定
     */
    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (this.isMobileMenuOpen && 
                !this.mainNav?.contains(e.target) && 
                !this.mobileMenuBtn?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }
    
    /**
     * モバイルメニューの開閉切り替え
     */
    toggleMobileMenu() {
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    /**
     * モバイルメニューを開く
     */
    openMobileMenu() {
        if (!this.mainNav || !this.mobileMenuBtn) return;
        
        this.isMobileMenuOpen = true;
        
        // クラス追加
        this.mainNav.classList.add('mobile-open');
        this.mobileMenuBtn.classList.add('active');
        document.body.classList.add('menu-open');
        
        // アクセシビリティ属性更新
        this.mobileMenuBtn.setAttribute('aria-expanded', 'true');
        this.mobileMenuBtn.setAttribute('aria-label', 'メニューを閉じる');
        
        // フォーカス管理
        const firstNavLink = this.mainNav.querySelector('.nav-link');
        if (firstNavLink) {
            setTimeout(() => firstNavLink.focus(), 100);
        }
        
        // アニメーション用の遅延クラス追加
        setTimeout(() => {
            this.mainNav.classList.add('animate-in');
        }, 10);
    }
    
    /**
     * モバイルメニューを閉じる
     */
    closeMobileMenu() {
        if (!this.mainNav || !this.mobileMenuBtn) return;
        
        this.isMobileMenuOpen = false;
        
        // アニメーション開始
        this.mainNav.classList.remove('animate-in');
        this.mainNav.classList.add('animate-out');
        
        // アニメーション完了後にクラス削除
        setTimeout(() => {
            this.mainNav.classList.remove('mobile-open', 'animate-out');
            this.mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('menu-open');
        }, 300);
        
        // アクセシビリティ属性更新
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        this.mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
        
        // フォーカスをボタンに戻す
        this.mobileMenuBtn.focus();
    }
    
    /**
     * セクションへのスムーズスクロール
     * @param {string} targetId - 対象セクションのID
     */
    smoothScrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // オフセット計算（ヘッダーの高さを考慮）
        const headerHeight = this.header ? this.header.offsetHeight : 80;
        const mobileOffset = window.innerWidth <= 768 ? 20 : 40;
        const offset = headerHeight + mobileOffset;
        
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;
        
        // スムーズスクロール実行
        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
        
        // URLの更新（履歴に追加せず）
        if (history.replaceState) {
            history.replaceState(null, null, targetId);
        }
        
        // アクティブナビゲーション即座に更新
        this.setActiveNavItem(targetId.substring(1));
    }
    
    /**
     * トップへのスムーズスクロール
     */
    smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // URL更新
        if (history.replaceState) {
            history.replaceState(null, null, ' ');
        }
        
        // アクティブナビゲーションクリア
        this.clearActiveNavItem();
    }
    
    /**
     * アクティブナビゲーション項目の設定
     * @param {string} sectionId - アクティブになるセクションID
     */
    setActiveNavItem(sectionId) {
        if (this.currentActiveSection === sectionId) return;
        
        this.currentActiveSection = sectionId;
        
        // 全てのアクティブクラスを削除
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        
        // 対応するナビゲーション項目をアクティブに
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.setAttribute('aria-current', 'page');
        }
    }
    
    /**
     * アクティブナビゲーション項目のクリア
     */
    clearActiveNavItem() {
        this.currentActiveSection = null;
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
    }
    
    /**
     * ウィンドウサイズ変更時の処理
     */
    handleResize() {
        // デスクトップサイズになった場合はモバイルメニューを閉じる
        if (window.innerWidth > 768 && this.isMobileMenuOpen) {
            this.closeMobileMenu();
        }
        
        // ヘッダー隠し状態をリセット
        if (window.innerWidth > 768 && this.header) {
            this.header.classList.remove('hidden');
        }
    }
    
    /**
     * 現在のナビゲーション状態を取得
     */
    getCurrentState() {
        return {
            isMobileMenuOpen: this.isMobileMenuOpen,
            currentActiveSection: this.currentActiveSection,
            scrollPosition: window.scrollY,
            windowWidth: window.innerWidth
        };
    }
    
    /**
     * プログラマティックナビゲーション
     * @param {string} sectionId - 移動先セクションID
     */
    navigateToSection(sectionId) {
        this.smoothScrollToSection(`#${sectionId}`);
    }
    
    /**
     * ナビゲーション統計（開発・分析用）
     */
    getNavigationStats() {
        return {
            totalNavLinks: this.navLinks.length,
            mobileMenuSupported: !!this.mobileMenuBtn,
            currentDevice: window.innerWidth <= 768 ? 'mobile' : 'desktop',
            activeSection: this.currentActiveSection,
            scrollPosition: window.scrollY
        };
    }
}

/**
 * グローバルナビゲーション関数（HTMLから呼び出される）
 */
function toggleMobileMenu() {
    if (window.okusuriNavigation) {
        window.okusuriNavigation.toggleMobileMenu();
    }
}

/**
 * セクション間ナビゲーション関数
 * @param {string} sectionId - 移動先セクションID
 */
function navigateToSection(sectionId) {
    if (window.okusuriNavigation) {
        window.okusuriNavigation.navigateToSection(sectionId);
    }
}

/**
 * ナビゲーションシステムの初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションシステムのインスタンス化
    window.okusuriNavigation = new OkusuriNavigation();
    
    // ページ読み込み時のハッシュ処理
    if (window.location.hash) {
        setTimeout(() => {
            window.okusuriNavigation.smoothScrollToSection(window.location.hash);
        }, 100);
    }
    
    // 戻る/進むボタン対応
    window.addEventListener('popstate', (e) => {
        if (window.location.hash) {
            window.okusuriNavigation.smoothScrollToSection(window.location.hash);
        } else {
            window.okusuriNavigation.smoothScrollToTop();
        }
    });
    
    console.log('おくすりノート ナビゲーションシステム起動完了');
    
    // 開発モード用統計表示
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('ナビゲーション統計:', window.okusuriNavigation.getNavigationStats());
    }
});