/**
 * PharmaDx検索機能
 * 薬学生のモバイル学習を考慮した高速検索システム
 * 
 * 機能:
 * - 薬剤名による検索（部分一致）
 * - 薬効群による検索（ARB、SSRI等）
 * - 特徴による検索（心不全、TDM等）
 * - リアルタイムフィルタリング
 * - 検索結果件数表示
 */

class PharmaDxSearch {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.drugsGrid = document.querySelector('.drugs-grid');
        this.drugCards = [];
        this.searchResults = null;
        
        this.init();
    }
    
    /**
     * 検索システムの初期化
     */
    init() {
        // 薬剤カードの収集
        this.collectDrugCards();
        
        // 検索結果表示エリアの作成
        this.createSearchResultsArea();
        
        // イベントリスナーの設定
        this.setupEventListeners();
        
        console.log(`PharmaDx検索システム初期化完了 - ${this.drugCards.length}薬剤対応`);
    }
    
    /**
     * 薬剤カード情報の収集と構造化
     */
    collectDrugCards() {
        const cards = document.querySelectorAll('.drug-card');
        
        this.drugCards = Array.from(cards).map(card => {
            // 特徴の収集
            const features = Array.from(card.querySelectorAll('.feature'))
                .map(feature => feature.textContent.trim());
            
            return {
                element: card,
                drugName: card.querySelector('.drug-name')?.textContent.trim() || '',
                category: card.querySelector('.drug-category')?.textContent.trim() || '',
                description: card.querySelector('.drug-description')?.textContent.trim() || '',
                features: features,
                dataCategory: card.getAttribute('data-category') || '',
                // 検索用の統合テキスト
                searchText: this.createSearchText(card, features)
            };
        });
    }
    
    /**
     * 検索用統合テキストの作成
     */
    createSearchText(card, features) {
        const drugName = card.querySelector('.drug-name')?.textContent.trim() || '';
        const category = card.querySelector('.drug-category')?.textContent.trim() || '';
        const description = card.querySelector('.drug-description')?.textContent.trim() || '';
        
        return [drugName, category, description, ...features]
            .join(' ')
            .toLowerCase();
    }
    
    /**
     * 検索結果表示エリアの作成
     */
    createSearchResultsArea() {
        // 検索結果情報を表示するエリア
        const resultsInfo = document.createElement('div');
        resultsInfo.className = 'search-results-info';
        resultsInfo.id = 'searchResultsInfo';
        resultsInfo.innerHTML = `
            <div class="results-count"></div>
            <div class="search-actions">
                <button id="clearSearch" class="clear-search-btn" style="display: none;">
                    検索をクリア
                </button>
            </div>
        `;
        
        // 薬剤セクションの前に挿入
        const drugsSection = document.querySelector('.drugs-section .section-container');
        const sectionDescription = drugsSection.querySelector('.section-description');
        sectionDescription.insertAdjacentElement('afterend', resultsInfo);
        
        this.searchResults = resultsInfo;
    }
    
    /**
     * イベントリスナーの設定
     */
    setupEventListeners() {
        // リアルタイム検索（入力時）
        this.searchInput?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        // Enterキー検索
        this.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSearch(e.target.value);
            }
        });
        
        // 検索クリアボタン
        document.getElementById('clearSearch')?.addEventListener('click', () => {
            this.clearSearch();
        });
        
        // 薬効群フィルター（カテゴリボタンがある場合）
        this.setupCategoryFilters();
    }
    
    /**
     * 薬効群フィルター設定
     */
    setupCategoryFilters() {
        // 薬効群ボタンがある場合のフィルター機能
        const categoryButtons = document.querySelectorAll('[data-filter-category]');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-filter-category');
                this.filterByCategory(category);
            });
        });
    }
    
    /**
     * メイン検索処理
     * @param {string} query - 検索クエリ
     */
    handleSearch(query) {
        const trimmedQuery = query.trim();
        
        if (trimmedQuery === '') {
            this.showAllCards();
            return;
        }
        
        const results = this.performSearch(trimmedQuery);
        this.displayResults(results, trimmedQuery);
    }
    
    /**
     * 検索実行
     * @param {string} query - 検索クエリ
     * @returns {Array} 検索結果
     */
    performSearch(query) {
        const searchTerms = query.toLowerCase().split(/\s+/);
        
        return this.drugCards.filter(drug => {
            // すべての検索語がマッチするかチェック
            return searchTerms.every(term => {
                return this.matchesDrug(drug, term);
            });
        }).sort((a, b) => {
            // 関連度による並び替え
            return this.calculateRelevance(b, query) - this.calculateRelevance(a, query);
        });
    }
    
    /**
     * 薬剤とのマッチング判定
     * @param {Object} drug - 薬剤データ
     * @param {string} term - 検索語
     * @returns {boolean} マッチしたかどうか
     */
    matchesDrug(drug, term) {
        // 薬剤名での完全マッチ（高優先度）
        if (drug.drugName.toLowerCase().includes(term)) {
            return true;
        }
        
        // 薬効群でのマッチ
        if (drug.category.toLowerCase().includes(term)) {
            return true;
        }
        
        // 特徴でのマッチ
        if (drug.features.some(feature => feature.toLowerCase().includes(term))) {
            return true;
        }
        
        // 説明でのマッチ
        if (drug.description.toLowerCase().includes(term)) {
            return true;
        }
        
        // 英語薬効群でのマッチ（ARB、PPI等）
        if (drug.dataCategory.toLowerCase().includes(term)) {
            return true;
        }
        
        return false;
    }
    
    /**
     * 関連度計算
     * @param {Object} drug - 薬剤データ
     * @param {string} query - 検索クエリ
     * @returns {number} 関連度スコア
     */
    calculateRelevance(drug, query) {
        let score = 0;
        const lowerQuery = query.toLowerCase();
        
        // 薬剤名での完全マッチ（最高スコア）
        if (drug.drugName.toLowerCase() === lowerQuery) {
            score += 100;
        } else if (drug.drugName.toLowerCase().includes(lowerQuery)) {
            score += 50;
        }
        
        // 薬効群マッチ
        if (drug.category.toLowerCase().includes(lowerQuery)) {
            score += 30;
        }
        
        // 特徴マッチ
        drug.features.forEach(feature => {
            if (feature.toLowerCase().includes(lowerQuery)) {
                score += 20;
            }
        });
        
        // 説明マッチ
        if (drug.description.toLowerCase().includes(lowerQuery)) {
            score += 10;
        }
        
        return score;
    }
    
    /**
     * 検索結果の表示
     * @param {Array} results - 検索結果
     * @param {string} query - 検索クエリ
     */
    displayResults(results, query) {
        // すべてのカードを非表示
        this.drugCards.forEach(drug => {
            drug.element.style.display = 'none';
        });
        
        // 検索結果のカードを表示
        results.forEach(drug => {
            drug.element.style.display = 'block';
            this.highlightSearchTerms(drug.element, query);
        });
        
        // 結果情報の更新
        this.updateResultsInfo(results.length, query);
        
        // 検索結果へのスクロール
        this.scrollToResults();
    }
    
    /**
     * 検索語のハイライト
     * @param {HTMLElement} element - 対象要素
     * @param {string} query - 検索クエリ
     */
    highlightSearchTerms(element, query) {
        // 既存のハイライトをクリア
        this.clearHighlights(element);
        
        const searchTerms = query.toLowerCase().split(/\s+/);
        const textElements = [
            element.querySelector('.drug-name'),
            element.querySelector('.drug-description'),
            ...element.querySelectorAll('.feature')
        ].filter(el => el);
        
        textElements.forEach(el => {
            let html = el.innerHTML;
            searchTerms.forEach(term => {
                if (term.length < 2) return; // 短すぎる語は除外
                
                const regex = new RegExp(`(${this.escapeRegExp(term)})`, 'gi');
                html = html.replace(regex, '<mark class="search-highlight">$1</mark>');
            });
            el.innerHTML = html;
        });
    }
    
    /**
     * ハイライトのクリア
     * @param {HTMLElement} element - 対象要素
     */
    clearHighlights(element) {
        const highlights = element.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
    }
    
    /**
     * 正規表現用文字列エスケープ
     * @param {string} string - エスケープする文字列
     * @returns {string} エスケープ済み文字列
     */
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    /**
     * 検索結果情報の更新
     * @param {number} count - 結果件数
     * @param {string} query - 検索クエリ
     */
    updateResultsInfo(count, query) {
        const resultsCount = this.searchResults?.querySelector('.results-count');
        const clearButton = document.getElementById('clearSearch');
        
        if (resultsCount) {
            if (count === this.drugCards.length) {
                resultsCount.innerHTML = '';
            } else {
                resultsCount.innerHTML = `
                    <span class="search-query">"${query}"</span>の検索結果: 
                    <strong>${count}件</strong> / ${this.drugCards.length}薬剤
                `;
            }
        }
        
        if (clearButton) {
            clearButton.style.display = query ? 'inline-block' : 'none';
        }
        
        // 検索状態の保存（戻るボタン対応）
        if (query) {
            this.saveSearchState(query);
        }
    }
    
    /**
     * すべてのカードを表示
     */
    showAllCards() {
        this.drugCards.forEach(drug => {
            drug.element.style.display = 'block';
            this.clearHighlights(drug.element);
        });
        
        this.updateResultsInfo(this.drugCards.length, '');
    }
    
    /**
     * 検索のクリア
     */
    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        this.showAllCards();
        this.searchInput?.focus();
    }
    
    /**
     * 薬効群によるフィルタリング
     * @param {string} category - 薬効群
     */
    filterByCategory(category) {
        this.searchInput.value = category;
        this.handleSearch(category);
    }
    
    /**
     * 検索結果へのスクロール
     */
    scrollToResults() {
        const drugsSection = document.getElementById('drugs');
        if (drugsSection) {
            const offset = window.innerWidth <= 768 ? 80 : 100; // モバイル対応
            const elementPosition = drugsSection.offsetTop;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    /**
     * 検索状態の保存
     * @param {string} query - 検索クエリ
     */
    saveSearchState(query) {
        try {
            sessionStorage.setItem('pharmadx_search_query', query);
        } catch (e) {
            // セッションストレージが使用できない場合は無視
            console.log('セッションストレージが使用できません');
        }
    }
    
    /**
     * 検索状態の復元
     */
    restoreSearchState() {
        try {
            const savedQuery = sessionStorage.getItem('pharmadx_search_query');
            if (savedQuery && this.searchInput) {
                this.searchInput.value = savedQuery;
                this.handleSearch(savedQuery);
            }
        } catch (e) {
            // セッションストレージが使用できない場合は無視
            console.log('検索状態の復元に失敗しました');
        }
    }
    
    /**
     * 検索統計の取得（開発・分析用）
     */
    getSearchStats() {
        const categories = {};
        const features = {};
        
        this.drugCards.forEach(drug => {
            // 薬効群統計
            categories[drug.category] = (categories[drug.category] || 0) + 1;
            
            // 特徴統計
            drug.features.forEach(feature => {
                features[feature] = (features[feature] || 0) + 1;
            });
        });
        
        return {
            totalDrugs: this.drugCards.length,
            categories: Object.entries(categories).sort(([,a], [,b]) => b - a),
            features: Object.entries(features).sort(([,a], [,b]) => b - a)
        };
    }
}

/**
 * グローバル検索関数（HTMLから呼び出される）
 */
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && window.pharmaDxSearch) {
        window.pharmaDxSearch.handleSearch(searchInput.value);
    }
}

/**
 * 検索システムの初期化
 */
document.addEventListener('DOMContentLoaded', () => {
    // 検索システムのインスタンス化
    window.pharmaDxSearch = new PharmaDxSearch();
    
    // ページ読み込み時の検索状態復元
    window.pharmaDxSearch.restoreSearchState();
    
    console.log('PharmaDx検索システム起動完了');
    
    // 開発モード用統計表示
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('検索統計:', window.pharmaDxSearch.getSearchStats());
    }
});