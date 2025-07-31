# JavaScript共通化 - 最適化候補の詳細分析

**作成日時**: 2025-07-31 10:22  
**作成者**: Claude  
**プロジェクト**: OkusuriNote JavaScript最適化  

## 1. 最適化候補の優先順位

### 優先度評価基準
- **影響範囲**: 重複ファイル数
- **削減効果**: 削減可能な行数
- **実装難易度**: 低・中・高
- **リスク**: 既存機能への影響度
- **ROI**: 投資対効果

## 2. 最優先候補：drug-page-controls.js

### 2.1 対象機能
```javascript
// toggleBottomSheet関数
// showLevel関数（未移行分）
// モバイルFABボタン制御
// ボトムシートのスワイプジェスチャー（将来追加）
```

### 2.2 実装詳細案
```javascript
// drug-page-controls.js
class DrugPageControls {
    constructor() {
        this.bottomSheet = document.querySelector('.bottom-sheet');
        this.overlay = document.querySelector('.bottom-sheet-overlay');
        this.fab = document.querySelector('.mobile-fab');
        this.init();
    }

    init() {
        // FABボタンの動的生成
        this.createMobileFAB();
        
        // イベントリスナーの設定
        this.attachEventListeners();
        
        // 初期状態の設定
        this.setInitialState();
    }

    createMobileFAB() {
        if (!this.fab && window.innerWidth <= 767) {
            const fab = document.createElement('button');
            fab.className = 'mobile-fab';
            fab.innerHTML = '☰';
            fab.onclick = () => this.toggleBottomSheet();
            document.body.appendChild(fab);
        }
    }

    toggleBottomSheet() {
        const isActive = this.bottomSheet?.classList.contains('active');
        
        if (isActive) {
            this.closeBottomSheet();
        } else {
            this.openBottomSheet();
        }
    }

    openBottomSheet() {
        this.bottomSheet?.classList.add('active');
        this.overlay?.classList.add('active');
        if (this.fab) this.fab.style.display = 'none';
        document.body.style.overflow = 'hidden';
        
        // アナリティクスイベント
        this.trackEvent('bottom_sheet_open');
    }

    closeBottomSheet() {
        this.bottomSheet?.classList.remove('active');
        this.overlay?.classList.remove('active');
        if (this.fab) this.fab.style.display = 'flex';
        document.body.style.overflow = '';
        
        // アナリティクスイベント
        this.trackEvent('bottom_sheet_close');
    }

    trackEvent(eventName) {
        // Google Analytics統合
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                'event_category': 'mobile_ui',
                'event_label': window.location.pathname
            });
        }
    }
}

// 自動初期化
document.addEventListener('DOMContentLoaded', () => {
    window.drugPageControls = new DrugPageControls();
});
```

### 2.3 削減効果
- **削減行数**: 1,332行 → 約80行（94%削減）
- **ファイルサイズ**: 37KB → 2.5KB（93%削減）
- **影響ページ数**: 37ページ

### 2.4 実装難易度：低
- 既存のtoggleBottomSheet関数と完全互換
- 段階的移行が可能
- level-selector.jsの成功パターンを適用

## 3. 第2候補：common-interactions.js

### 3.1 対象機能
```javascript
// スムーズスクロール
// コピー機能（薬剤名、用法用量）
// ツールチップ表示
// アコーディオン開閉
// 印刷用スタイル切替
```

### 3.2 実装詳細案
```javascript
// common-interactions.js
class CommonInteractions {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupCopyButtons();
        this.setupTooltips();
        this.setupAccordions();
        this.setupPrintStyles();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupCopyButtons() {
        document.querySelectorAll('[data-copy]').forEach(button => {
            button.addEventListener('click', async () => {
                const textToCopy = button.dataset.copy;
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    this.showToast('コピーしました');
                } catch (err) {
                    console.error('Copy failed:', err);
                }
            });
        });
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
}
```

### 3.3 削減効果
- **推定削減行数**: 約800行
- **新機能追加の容易性**: 1箇所の更新で全ページに反映
- **一貫性向上**: 全ページで同じUX提供

### 3.4 実装難易度：中
- 各ページでの使用状況調査が必要
- 段階的な機能追加が可能

## 4. 第3候補：analytics-tracker.js

### 4.1 対象機能
```javascript
// ページビュー追跡
// クリックイベント追跡
// スクロール深度測定
// 滞在時間計測
// エラートラッキング
```

### 4.2 実装詳細案
```javascript
// analytics-tracker.js
class AnalyticsTracker {
    constructor() {
        this.startTime = Date.now();
        this.maxScrollDepth = 0;
        this.init();
    }

    init() {
        this.trackPageView();
        this.setupClickTracking();
        this.setupScrollTracking();
        this.setupErrorTracking();
        this.setupEngagementTracking();
    }

    trackPageView() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_path: window.location.pathname,
                page_title: document.title,
                drug_name: this.extractDrugName()
            });
        }
    }

    extractDrugName() {
        // URLまたはページタイトルから薬剤名を抽出
        const match = window.location.pathname.match(/\/drugs\/([\w-]+)\.html/);
        return match ? match[1] : 'unknown';
    }

    setupClickTracking() {
        // 重要な要素のクリックを追跡
        const trackableSelectors = [
            '.level-btn',
            '.bottom-sheet-btn',
            'a[href^="http"]',
            '[data-track-click]'
        ];

        trackableSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.addEventListener('click', () => {
                    this.trackClick(element);
                });
            });
        });
    }

    trackClick(element) {
        const eventData = {
            event_category: 'interaction',
            event_label: element.textContent || element.getAttribute('aria-label'),
            element_type: element.tagName.toLowerCase(),
            element_class: element.className
        };

        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', eventData);
        }
    }
}
```

### 4.3 削減効果
- **統一された計測**: 全ページで一貫したデータ収集
- **新規イベントの追加**: 1箇所の更新で完了
- **データ品質向上**: 統一された命名規則

### 4.4 実装難易度：低
- 既存のアナリティクスコードをラップするだけ
- 段階的な機能追加が容易

## 5. 第4候補：dom-initializer.js

### 5.1 対象機能
```javascript
// DOM要素の動的生成
// 共通ヘッダー/フッター要素
// SEO用構造化データの挿入
// パフォーマンス最適化（遅延読み込み）
```

### 5.2 利点
- HTML構造の簡素化
- 一貫性のあるDOM構造
- SEO要素の一元管理

### 5.3 実装難易度：高
- SEOへの影響を慎重に検討必要
- サーバーサイドレンダリングとの兼ね合い

## 6. 実装優先順位の推奨

### Phase 1（即時実装推奨）
1. **drug-page-controls.js**: 最大の削減効果、低リスク
2. **analytics-tracker.js**: データ収集の統一化

### Phase 2（1ヶ月以内）
3. **common-interactions.js**: UX向上に直結
4. **既存のlevel-selector.jsの完全適用**: 未適用ページへの展開

### Phase 3（3ヶ月以内）
5. **dom-initializer.js**: 慎重な計画が必要
6. **mobile-controls.cssとの統合**: CSS/JS連携の最適化

## 7. 成功指標（KPI）

### 技術的指標
- コード行数削減率：目標80%以上
- ページロード時間：20%改善
- JavaScriptファイルサイズ：50%削減

### ビジネス指標
- 開発速度：新規ページ作成時間50%短縮
- バグ発生率：70%削減
- 保守工数：月8時間→2時間

## 8. 結論

提案された共通化候補は、すべて実装価値が高く、特にdrug-page-controls.jsは即座に着手すべき最優先事項です。level-selector.jsの成功例が示すように、適切な共通化は劇的なコード削減と保守性向上を実現します。

段階的な実装アプローチにより、リスクを最小限に抑えながら、最大の効果を得ることが可能です。