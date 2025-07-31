/**
 * drug-page-controls.js - 薬剤ページ共通UI制御
 * 作成日時: 2025-07-31 13:06
 * 更新日時: 2025-07-31 13:20
 * 作成者: Claude
 * 目的: 10薬剤ページで重複している820行（インラインスクリプト370行 + モバイルHTML450行）を統一
 */

(function() {
    'use strict';
    
    /**
     * 薬剤ページのUI制御クラス
     * ボトムシートとレベル選択の統合管理
     */
    class DrugPageControls {
        constructor() {
            this.init();
        }
        
        /**
         * 初期化処理
         */
        init() {
            // DOM読み込み完了を待つ
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }
        
        /**
         * UI要素のセットアップ
         */
        setup() {
            this.createMobileControls();
            this.setupBottomSheet();
            this.setupLevelButtons();
        }
        
        /**
         * モバイルコントロール要素の動的生成
         */
        createMobileControls() {
            // 既存の要素がある場合はスキップ
            if (document.querySelector('.mobile-fab')) {
                return;
            }
            
            // モバイルFABボタン
            const fab = document.createElement('button');
            fab.className = 'mobile-fab';
            fab.innerHTML = '📋';
            
            // オーバーレイ
            const overlay = document.createElement('div');
            overlay.className = 'bottom-sheet-overlay';
            
            // ボトムシート
            const bottomSheet = document.createElement('div');
            bottomSheet.className = 'bottom-sheet';
            bottomSheet.innerHTML = `
                <div class="bottom-sheet-handle"></div>
                <div class="bottom-sheet-content">
                    <!-- Level Selection Section -->
                    <div class="bottom-sheet-section">
                        <h3 class="bottom-sheet-title">📚 学習レベル</h3>
                        <div class="bottom-sheet-buttons">
                            <button class="bottom-sheet-btn active" data-level="1">
                                <span>🎓 薬学生</span>
                                <span class="arrow">→</span>
                            </button>
                            <button class="bottom-sheet-btn" data-level="2">
                                <span>🏥 実習中</span>
                                <span class="arrow">→</span>
                            </button>
                            <button class="bottom-sheet-btn" data-level="3">
                                <span>👨‍⚕️ 研修中</span>
                                <span class="arrow">→</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Home Navigation Section -->
                    <div class="bottom-sheet-section">
                        <h3 class="bottom-sheet-title">🏠 ナビゲーション</h3>
                        <div class="bottom-sheet-buttons">
                            <a href="../" class="bottom-sheet-btn">
                                <span>🏠 トップページへ戻る</span>
                                <span class="arrow">→</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Related Pages Section -->
                    <div class="bottom-sheet-section">
                        <h3 class="bottom-sheet-title">📄 関連ページ一覧</h3>
                        <div class="bottom-sheet-buttons">
                            <!-- 関連ページは各薬剤ページで個別に追加 -->
                        </div>
                    </div>
                </div>
            `;
            
            // body要素に追加
            document.body.appendChild(fab);
            document.body.appendChild(overlay);
            document.body.appendChild(bottomSheet);
        }
        
        /**
         * ボトムシートの制御設定
         */
        setupBottomSheet() {
            // FABボタン、オーバーレイ、ハンドルのクリックイベント
            const triggers = [
                '.mobile-fab',
                '.bottom-sheet-overlay',
                '.bottom-sheet-handle'
            ];
            
            triggers.forEach(selector => {
                const element = document.querySelector(selector);
                if (element) {
                    element.addEventListener('click', () => this.toggleBottomSheet());
                }
            });
        }
        
        /**
         * ボトムシートの開閉切替
         */
        toggleBottomSheet() {
            const overlay = document.querySelector('.bottom-sheet-overlay');
            const sheet = document.querySelector('.bottom-sheet');
            
            if (overlay && sheet) {
                overlay.classList.toggle('active');
                sheet.classList.toggle('active');
            }
        }
        
        /**
         * レベル選択ボタンの設定
         */
        setupLevelButtons() {
            // ボトムシート内のレベルボタン
            document.querySelectorAll('.bottom-sheet-btn[data-level]').forEach(btn => {
                btn.addEventListener('click', (e) => this.handleLevelClick(e));
            });
        }
        
        /**
         * レベルボタンクリックハンドラ
         * @param {Event} e - クリックイベント
         */
        handleLevelClick(e) {
            const clickedButton = e.currentTarget;
            const level = clickedButton.dataset.level;
            
            // すべてのレベルボタンからactiveクラスを削除
            this.clearActiveButtons();
            
            // クリックされたボタンにactiveクラスを追加
            clickedButton.classList.add('active');
            
            // サイドバーの対応するボタンもactive状態に
            const sidebarButton = document.querySelector(`.level-btn[data-level="${level}"]`);
            if (sidebarButton) {
                sidebarButton.classList.add('active');
            }
            
            // level-selector.jsのshowLevel関数を呼び出し
            if (window.showLevel && typeof window.showLevel === 'function') {
                window.showLevel(level);
            }
            
            // ボトムシートを閉じる
            this.toggleBottomSheet();
        }
        
        /**
         * すべてのレベルボタンのactive状態をクリア
         */
        clearActiveButtons() {
            // ボトムシート内のボタン
            document.querySelectorAll('.bottom-sheet-btn[data-level]').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // サイドバーのボタン
            document.querySelectorAll('.level-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    }
    
    // グローバルに公開（必要に応じて）
    window.DrugPageControls = DrugPageControls;
    
    // 自動初期化
    new DrugPageControls();
    
})();