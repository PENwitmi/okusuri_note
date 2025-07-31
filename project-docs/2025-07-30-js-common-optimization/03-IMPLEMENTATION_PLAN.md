# JavaScript共通化 - 実装計画書

**作成日時**: 2025-07-31 10:23  
**作成者**: Claude  
**プロジェクト**: OkusuriNote JavaScript最適化  

## 1. 実装スケジュール概要

### 全体タイムライン
```
2025年8月 Week 1: Phase 1開始（drug-page-controls.js）
2025年8月 Week 2: Phase 1完了、テスト
2025年8月 Week 3: Phase 2開始（analytics-tracker.js）
2025年8月 Week 4: Phase 2完了、中間評価
2025年9月 Week 1-2: Phase 3（common-interactions.js）
2025年9月 Week 3-4: 最終調整、ドキュメント化
```

## 2. Phase 1: drug-page-controls.js実装

### 2.1 準備作業（Day 1-2）

#### タスク1: 現状調査
```bash
# 影響ファイルのリストアップ
find docs/drugs* -name "*.html" -exec grep -l "toggleBottomSheet" {} \;

# 関数の差異確認
for file in docs/drugs/*.html; do
    echo "=== $file ==="
    grep -A 20 "function toggleBottomSheet" "$file"
done > toggle_variations.txt
```

#### タスク2: テスト環境準備
- ローカルテストサーバーの設定
- ブラウザテストツールの準備
- モバイルデバイスエミュレータ設定

### 2.2 実装作業（Day 3-5）

#### Step 1: 共通JSファイル作成
```javascript
// docs/assets/js/drug-page-controls.js
(function() {
    'use strict';
    
    // 設定オブジェクト
    const CONFIG = {
        selectors: {
            bottomSheet: '.bottom-sheet',
            overlay: '.bottom-sheet-overlay',
            fab: '.mobile-fab',
            handle: '.bottom-sheet-handle'
        },
        animations: {
            duration: 300,
            easing: 'ease-out'
        }
    };

    // メインクラス
    class DrugPageControls {
        constructor(config = {}) {
            this.config = { ...CONFIG, ...config };
            this.init();
        }

        init() {
            this.cacheElements();
            this.bindEvents();
            this.createMobileElements();
        }

        cacheElements() {
            this.elements = {};
            for (const [key, selector] of Object.entries(this.config.selectors)) {
                this.elements[key] = document.querySelector(selector);
            }
        }

        bindEvents() {
            // FABボタン
            if (this.elements.fab) {
                this.elements.fab.addEventListener('click', () => this.toggle());
            }

            // オーバーレイ
            if (this.elements.overlay) {
                this.elements.overlay.addEventListener('click', () => this.close());
            }

            // ハンドル
            if (this.elements.handle) {
                this.elements.handle.addEventListener('click', () => this.toggle());
                this.setupSwipeGestures();
            }

            // ESCキー
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen()) {
                    this.close();
                }
            });
        }

        toggle() {
            if (this.isOpen()) {
                this.close();
            } else {
                this.open();
            }
        }

        open() {
            if (!this.elements.bottomSheet) return;
            
            this.elements.bottomSheet.classList.add('active');
            if (this.elements.overlay) {
                this.elements.overlay.classList.add('active');
            }
            if (this.elements.fab) {
                this.elements.fab.style.display = 'none';
            }
            
            document.body.style.overflow = 'hidden';
            this.trackEvent('open');
        }

        close() {
            if (!this.elements.bottomSheet) return;
            
            this.elements.bottomSheet.classList.remove('active');
            if (this.elements.overlay) {
                this.elements.overlay.classList.remove('active');
            }
            if (this.elements.fab) {
                this.elements.fab.style.display = 'flex';
            }
            
            document.body.style.overflow = '';
            this.trackEvent('close');
        }

        isOpen() {
            return this.elements.bottomSheet?.classList.contains('active');
        }

        trackEvent(action) {
            if (typeof gtag !== 'undefined') {
                gtag('event', `bottom_sheet_${action}`, {
                    event_category: 'mobile_ui',
                    page_path: window.location.pathname
                });
            }
        }

        // 将来の拡張用
        setupSwipeGestures() {
            // タッチイベントによるスワイプダウンで閉じる機能
        }

        createMobileElements() {
            // FABボタンが存在しない場合は動的生成
            if (!this.elements.fab && this.isMobile()) {
                this.createFAB();
            }
        }

        createFAB() {
            const fab = document.createElement('button');
            fab.className = 'mobile-fab';
            fab.innerHTML = '☰';
            fab.setAttribute('aria-label', 'メニューを開く');
            document.body.appendChild(fab);
            this.elements.fab = fab;
            fab.addEventListener('click', () => this.toggle());
        }

        isMobile() {
            return window.innerWidth <= 767;
        }
    }

    // グローバル公開
    window.DrugPageControls = DrugPageControls;

    // 自動初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.drugPageControls = new DrugPageControls();
        });
    } else {
        window.drugPageControls = new DrugPageControls();
    }
})();
```

#### Step 2: 既存HTMLの更新スクリプト作成
```python
#!/usr/bin/env python3
# update_drug_pages.py

import os
import re
from pathlib import Path

def update_html_file(filepath):
    """HTMLファイルを更新して共通JSを使用するように変更"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. toggleBottomSheet関数を削除
    content = re.sub(
        r'<script>\s*function\s+toggleBottomSheet\s*\(\s*\)\s*{[\s\S]*?}\s*</script>',
        '',
        content,
        flags=re.MULTILINE
    )
    
    # 2. 共通JSファイルへの参照を追加（</body>の前）
    if 'drug-page-controls.js' not in content:
        content = content.replace(
            '</body>',
            '    <script src="../assets/js/drug-page-controls.js"></script>\n</body>'
        )
    
    # 3. onclick属性を削除（イベントリスナーで処理）
    content = re.sub(
        r'onclick="toggleBottomSheet\(\)"',
        '',
        content
    )
    
    # バックアップ作成
    backup_path = filepath.with_suffix('.html.backup')
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # 更新内容を保存
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {filepath}")

def main():
    # 対象ディレクトリ
    directories = ['docs/drugs', 'docs/drugs-v3']
    
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        for filepath in Path(directory).glob('*.html'):
            update_html_file(filepath)

if __name__ == '__main__':
    main()
```

### 2.3 テスト作業（Day 6-7）

#### テストケース
1. **機能テスト**
   - FABボタンクリックでボトムシート開閉
   - オーバーレイクリックで閉じる
   - ESCキーで閉じる
   - スクロールロックの動作

2. **互換性テスト**
   - Chrome/Safari/Firefox
   - iOS Safari/Android Chrome
   - 画面サイズ: 320px〜1920px

3. **パフォーマンステスト**
   - 初回ロード時間測定
   - メモリ使用量確認
   - アニメーション性能

#### テストチェックリスト
```markdown
## drug-page-controls.js テストチェックリスト

### 基本機能
- [ ] FABボタンが表示される（モバイルのみ）
- [ ] FABクリックでボトムシート開く
- [ ] オーバーレイクリックで閉じる
- [ ] ハンドルクリックで開閉
- [ ] ESCキーで閉じる
- [ ] 開いた時にbodyスクロール無効化
- [ ] 閉じた時にbodyスクロール復活

### ブラウザ互換性
- [ ] Chrome (最新)
- [ ] Safari (最新)
- [ ] Firefox (最新)
- [ ] Edge (最新)
- [ ] iOS Safari
- [ ] Android Chrome

### レスポンシブ
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone)
- [ ] 768px (iPad)
- [ ] 1024px (Desktop)

### パフォーマンス
- [ ] 初回ロード < 50ms
- [ ] アニメーション 60fps維持
- [ ] メモリリーク無し
```

### 2.4 段階的展開（Day 8-10）

#### Step 1: パイロット展開
```bash
# 最初は3ファイルでテスト
- carvedilol.html
- metformin.html
- telmisartan.html
```

#### Step 2: 問題がなければ全展開
```bash
# 残りの34ファイルに適用
python update_drug_pages.py
```

## 3. Phase 2: analytics-tracker.js実装

### 3.1 実装概要
```javascript
// docs/assets/js/analytics-tracker.js
class AnalyticsTracker {
    constructor() {
        this.pageLoadTime = performance.now();
        this.drugName = this.extractDrugName();
        this.init();
    }

    init() {
        this.trackPageView();
        this.setupEngagementTracking();
        this.setupErrorTracking();
        this.setupPerformanceTracking();
    }

    extractDrugName() {
        const path = window.location.pathname;
        const match = path.match(/\/([\w-]+)\.html$/);
        return match ? match[1] : 'unknown';
    }

    trackPageView() {
        this.sendEvent('page_view', {
            drug_name: this.drugName,
            referrer: document.referrer,
            screen_size: `${window.innerWidth}x${window.innerHeight}`
        });
    }

    setupEngagementTracking() {
        // スクロール深度
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll >= 25 && maxScroll < 50) {
                    this.sendEvent('scroll_depth', { depth: '25%' });
                } else if (maxScroll >= 50 && maxScroll < 75) {
                    this.sendEvent('scroll_depth', { depth: '50%' });
                } else if (maxScroll >= 75) {
                    this.sendEvent('scroll_depth', { depth: '75%' });
                }
            }
        });

        // 滞在時間
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((performance.now() - this.pageLoadTime) / 1000);
            this.sendEvent('time_on_page', { 
                seconds: timeOnPage,
                drug_name: this.drugName
            });
        });
    }

    sendEvent(eventName, parameters = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'drug_page',
                ...parameters
            });
        }
    }
}
```

### 3.2 統合方法
- 各薬剤ページの個別アナリティクスコードを削除
- analytics-tracker.jsへの参照を追加
- データレイヤーの統一化

## 4. Phase 3: common-interactions.js実装

### 4.1 機能一覧
- スムーズスクロール
- クリップボードコピー
- ツールチップ
- アコーディオン
- 印刷最適化

### 4.2 段階的実装
1. 最も使用頻度の高い機能から実装
2. 各機能をモジュール化
3. プログレッシブエンハンスメント対応

## 5. リスク管理計画

### 5.1 想定リスクと対策

#### リスク1: 既存機能の破壊
**対策**: 
- 全ファイルのバックアップ作成
- 段階的展開
- ロールバック手順の準備

#### リスク2: SEOへの悪影響
**対策**:
- クライアントサイドレンダリングの最小化
- 重要コンテンツはHTMLに保持
- Google Search Consoleでの監視

#### リスク3: パフォーマンス低下
**対策**:
- バンドルサイズの監視
- 遅延読み込みの実装
- CDNキャッシュの活用

### 5.2 ロールバック計画
```bash
#!/bin/bash
# rollback.sh

# バックアップから復元
for file in docs/drugs/*.html.backup; do
    original="${file%.backup}"
    cp "$file" "$original"
    echo "Restored: $original"
done

# 共通JSファイルを削除
rm -f docs/assets/js/drug-page-controls.js
rm -f docs/assets/js/analytics-tracker.js
rm -f docs/assets/js/common-interactions.js

echo "Rollback completed"
```

## 6. 成功基準

### 6.1 技術的成功基準
- [ ] コード重複を80%以上削減
- [ ] ページロード時間を維持または改善
- [ ] 全ブラウザでの動作確認
- [ ] エラー率1%未満

### 6.2 ビジネス成功基準
- [ ] 新規ページ作成時間50%短縮
- [ ] バグ報告数の減少
- [ ] 開発者満足度の向上

## 7. ドキュメント化計画

### 7.1 開発者向けドキュメント
- APIリファレンス
- 統合ガイド
- トラブルシューティング

### 7.2 保守ドキュメント
- アーキテクチャ図
- データフロー図
- 更新手順書

## 8. 結論

この実装計画に従うことで、リスクを最小限に抑えながら、JavaScript共通化の恩恵を最大限に享受できます。特にPhase 1のdrug-page-controls.jsは、即座に大きな効果が期待でき、今後の共通化の基盤となります。

段階的アプローチと十分なテストにより、ユーザー体験を損なうことなく、技術的負債を解消できます。