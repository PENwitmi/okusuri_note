/**
 * OkusuriNote インタラクティブ機能
 * - 理解度チェッククイズ
 * - 薬剤比較ツール
 * - 学習進捗トラッカー
 * 作成日: 2025-07-01
 */

// ===== 理解度チェッククイズ機能 =====

class UnderstandingQuiz {
    constructor(drugName) {
        this.drugName = drugName;
        this.questions = this.getQuestionsForDrug(drugName);
        this.currentScore = 0;
        this.totalQuestions = this.questions.length;
        this.init();
    }

    init() {
        this.createQuizContainer();
        this.renderQuiz();
        this.attachEventListeners();
    }

    createQuizContainer() {
        // クイズコンテナが既に存在する場合は削除
        const existingQuiz = document.getElementById('understanding-quiz');
        if (existingQuiz) {
            existingQuiz.remove();
        }

        // メインコンテンツの最後（フッター前）にクイズセクションを追加
        const main = document.querySelector('main.main-content');
        const quizContainer = document.createElement('section');
        quizContainer.id = 'understanding-quiz';
        quizContainer.className = 'understanding-quiz-section';
        
        quizContainer.innerHTML = `
            <div class="container">
                <h2>💡 理解度チェッククイズ</h2>
                <p class="quiz-description">${this.drugName}について学んだ内容を確認してみましょう</p>
                <div class="quiz-content" id="quiz-content">
                    <!-- クイズがここに挿入されます -->
                </div>
                <div class="quiz-results" id="quiz-results" style="display: none;">
                    <!-- 結果がここに表示されます -->
                </div>
            </div>
        `;

        main.appendChild(quizContainer);
    }

    renderQuiz() {
        const quizContent = document.getElementById('quiz-content');
        let quizHTML = '';

        this.questions.forEach((question, index) => {
            quizHTML += `
                <div class="quiz-question" data-question="${index}">
                    <h3 class="question-title">問題 ${index + 1}</h3>
                    <p class="question-text">${question.question}</p>
                    <div class="answer-options">
                        ${question.options.map((option, optIndex) => `
                            <label class="answer-option">
                                <input type="radio" name="question-${index}" value="${optIndex}" />
                                <span class="option-text">${option}</span>
                            </label>
                        `).join('')}
                    </div>
                    <div class="question-feedback" id="feedback-${index}" style="display: none;"></div>
                </div>
            `;
        });

        quizHTML += `
            <div class="quiz-actions">
                <button id="submit-quiz" class="quiz-submit-btn">回答を確認</button>
                <button id="reset-quiz" class="quiz-reset-btn" style="display: none;">もう一度チャレンジ</button>
            </div>
        `;

        quizContent.innerHTML = quizHTML;
    }

    attachEventListeners() {
        const submitBtn = document.getElementById('submit-quiz');
        const resetBtn = document.getElementById('reset-quiz');

        submitBtn.addEventListener('click', () => this.submitQuiz());
        resetBtn.addEventListener('click', () => this.resetQuiz());

        // 選択肢の変更をリアルタイムで検知
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => this.updateSubmitButton());
        });
    }

    updateSubmitButton() {
        const submitBtn = document.getElementById('submit-quiz');
        const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
        
        if (answeredQuestions === this.totalQuestions) {
            submitBtn.disabled = false;
            submitBtn.textContent = '回答を確認';
        } else {
            submitBtn.disabled = true;
            submitBtn.textContent = `回答を確認 (${answeredQuestions}/${this.totalQuestions})`;
        }
    }

    submitQuiz() {
        let correctAnswers = 0;

        this.questions.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
            const feedbackDiv = document.getElementById(`feedback-${index}`);
            
            if (selectedAnswer) {
                const answerIndex = parseInt(selectedAnswer.value);
                const isCorrect = answerIndex === question.correctAnswer;
                
                if (isCorrect) {
                    correctAnswers++;
                }

                // フィードバック表示
                feedbackDiv.innerHTML = `
                    <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                        <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
                        <div class="feedback-text">
                            <strong>${isCorrect ? '正解！' : '不正解'}</strong>
                            <p>${question.explanation}</p>
                        </div>
                    </div>
                `;
                feedbackDiv.style.display = 'block';

                // 正解の選択肢をハイライト
                const questionDiv = document.querySelector(`[data-question="${index}"]`);
                const options = questionDiv.querySelectorAll('.answer-option');
                options.forEach((option, optIndex) => {
                    if (optIndex === question.correctAnswer) {
                        option.classList.add('correct-answer');
                    }
                    if (optIndex === answerIndex && !isCorrect) {
                        option.classList.add('incorrect-answer');
                    }
                });
            }
        });

        this.showResults(correctAnswers);
        this.updateProgress(correctAnswers);
    }

    showResults(correctAnswers) {
        const resultsDiv = document.getElementById('quiz-results');
        const percentage = Math.round((correctAnswers / this.totalQuestions) * 100);
        let message = '';
        let messageClass = '';

        if (percentage >= 80) {
            message = '素晴らしい！よく理解できています 🎉';
            messageClass = 'excellent';
        } else if (percentage >= 60) {
            message = 'よくできました！さらに理解を深めましょう 👍';
            messageClass = 'good';
        } else {
            message = 'もう一度学習してチャレンジしてみましょう 📚';
            messageClass = 'needs-improvement';
        }

        resultsDiv.innerHTML = `
            <div class="quiz-score ${messageClass}">
                <h3>結果発表</h3>
                <div class="score-display">
                    <span class="score-number">${correctAnswers}/${this.totalQuestions}</span>
                    <span class="score-percentage">(${percentage}%)</span>
                </div>
                <p class="score-message">${message}</p>
            </div>
        `;

        resultsDiv.style.display = 'block';

        // ボタンの切り替え
        document.getElementById('submit-quiz').style.display = 'none';
        document.getElementById('reset-quiz').style.display = 'inline-block';

        // 結果までスクロール
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }

    resetQuiz() {
        // 選択をリセット
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });

        // フィードバックを非表示
        const feedbacks = document.querySelectorAll('.question-feedback');
        feedbacks.forEach(feedback => {
            feedback.style.display = 'none';
        });

        // クラスをリセット
        const options = document.querySelectorAll('.answer-option');
        options.forEach(option => {
            option.classList.remove('correct-answer', 'incorrect-answer');
        });

        // 結果を非表示
        document.getElementById('quiz-results').style.display = 'none';

        // ボタンの切り替え
        document.getElementById('submit-quiz').style.display = 'inline-block';
        document.getElementById('submit-quiz').disabled = true;
        document.getElementById('submit-quiz').textContent = `回答を確認 (0/${this.totalQuestions})`;
        document.getElementById('reset-quiz').style.display = 'none';

        // クイズの先頭までスクロール
        document.getElementById('understanding-quiz').scrollIntoView({ behavior: 'smooth' });
    }

    updateProgress(correctAnswers) {
        // 学習進捗トラッカーに結果を記録
        if (window.learningTracker) {
            window.learningTracker.recordQuizResult(this.drugName, correctAnswers, this.totalQuestions);
        }
    }

    getQuestionsForDrug(drugName) {
        // 薬剤名に基づいてクイズ問題を取得
        const drugQuestions = {
            'テルミサルタン': [
                {
                    question: 'テルミサルタンの最大の特徴は何ですか？',
                    options: [
                        '最も安価なARB',
                        '半減期が24時間と最も長い',
                        '最も新しく開発されたARB',
                        '副作用が最も少ない'
                    ],
                    correctAnswer: 1,
                    explanation: 'テルミサルタンは半減期が24時間と最も長く、1日1回の服薬で安定した降圧効果を維持できます。'
                },
                {
                    question: 'テルミサルタンがPPAR-γ活性化作用を持つことの臨床的意義は？',
                    options: [
                        '血圧を下げる効果が強くなる',
                        'インスリン抵抗性の改善効果がある',
                        '腎臓への負担が軽減される',
                        '心拍数を下げる効果がある'
                    ],
                    correctAnswer: 1,
                    explanation: 'PPAR-γ活性化作用により、インスリン抵抗性が改善され、糖尿病合併患者に特に有用です。'
                },
                {
                    question: 'テルミサルタンが「Beyond BP」と呼ばれる理由は？',
                    options: [
                        '血圧を下げるだけでなく、代謝改善効果もあるため',
                        '他のARBよりも血圧を大幅に下げるため',
                        '血圧以外の疾患にも使用できるため',
                        '副作用がほとんどないため'
                    ],
                    correctAnswer: 0,
                    explanation: '降圧効果に加えて、PPAR-γ活性化による代謝改善効果があり、単なる降圧薬を超えた価値を提供するからです。'
                }
            ],
            // 他の薬剤用のデフォルト問題
            'default': [
                {
                    question: 'この薬剤の主な適応症は何ですか？',
                    options: [
                        '高血圧症',
                        '糖尿病',
                        '高脂血症',
                        '不整脈'
                    ],
                    correctAnswer: 0,
                    explanation: 'この薬剤ページの内容を確認して、主な適応症を学習しましょう。'
                },
                {
                    question: 'この薬剤の重要な副作用として注意すべきものは？',
                    options: [
                        '胃腸障害',
                        '肝機能障害',
                        '腎機能障害',
                        '心機能障害'
                    ],
                    correctAnswer: 1,
                    explanation: '各薬剤の副作用プロファイルを理解することは安全な薬物療法の基本です。'
                },
                {
                    question: 'この薬剤の用法・用量の特徴は？',
                    options: [
                        '1日3回服用',
                        '1日2回服用',
                        '1日1回服用',
                        '週1回服用'
                    ],
                    correctAnswer: 2,
                    explanation: '服薬アドヒアランスの観点から、用法・用量の理解は重要です。'
                }
            ]
        };

        return drugQuestions[drugName] || drugQuestions['default'];
    }
}

// ===== 薬剤比較ツール機能 =====

class DrugComparisonTool {
    constructor() {
        this.selectedDrugs = [];
        this.maxComparisons = 3;
        this.init();
    }

    init() {
        this.createComparisonContainer();
        this.attachEventListeners();
    }

    createComparisonContainer() {
        // 比較ツールコンテナが既に存在する場合は削除
        const existingTool = document.getElementById('drug-comparison-tool');
        if (existingTool) {
            existingTool.remove();
        }

        // メインコンテンツに比較ツールセクションを追加
        const main = document.querySelector('main.main-content');
        const comparisonContainer = document.createElement('section');
        comparisonContainer.id = 'drug-comparison-tool';
        comparisonContainer.className = 'drug-comparison-section';
        
        comparisonContainer.innerHTML = `
            <div class="container">
                <h2>⚖️ 薬剤比較ツール</h2>
                <p class="comparison-description">最大3つの薬剤を選択して比較できます</p>
                
                <div class="drug-selection">
                    <h3>比較する薬剤を選択</h3>
                    <div class="drug-selector" id="drug-selector">
                        <!-- 薬剤選択チェックボックスがここに挿入されます -->
                    </div>
                </div>

                <div class="comparison-results" id="comparison-results" style="display: none;">
                    <h3>比較結果</h3>
                    <div class="comparison-table-container">
                        <table class="comparison-table" id="comparison-table">
                            <!-- 比較表がここに挿入されます -->
                        </table>
                    </div>
                </div>

                <div class="comparison-actions">
                    <button id="compare-drugs" class="compare-btn" disabled>薬剤を比較</button>
                    <button id="clear-comparison" class="clear-btn" style="display: none;">選択をクリア</button>
                </div>
            </div>
        `;

        main.appendChild(comparisonContainer);
    }

    attachEventListeners() {
        const compareBtn = document.getElementById('compare-drugs');
        const clearBtn = document.getElementById('clear-comparison');

        compareBtn.addEventListener('click', () => this.performComparison());
        clearBtn.addEventListener('click', () => this.clearSelection());

        this.populateDrugSelector();
    }

    populateDrugSelector() {
        const drugSelector = document.getElementById('drug-selector');
        
        // OkusuriNoteで利用可能な薬剤リスト
        const availableDrugs = [
            { name: 'テルミサルタン', category: 'ARB', halfLife: '24時間', features: ['PPAR-γ活性化', '最長半減期'] },
            { name: 'ロサルタン', category: 'ARB', halfLife: '6-9時間', features: ['活性代謝物', '尿酸降下'] },
            { name: 'カンデサルタン', category: 'ARB', halfLife: '9時間', features: ['プロドラッグ', '強力降圧'] },
            { name: 'エナラプリル', category: 'ACE阻害薬', halfLife: '11時間', features: ['プロドラッグ', '心保護効果'] },
            { name: 'ペリンドプリル', category: 'ACE阻害薬', halfLife: '17時間', features: ['血管内皮保護', '認知症予防'] },
            { name: 'ビソプロロール', category: 'β遮断薬', halfLife: '10-12時間', features: ['β1選択性', '心不全適応'] },
            { name: 'カルベジロール', category: 'β遮断薬', halfLife: '7-10時間', features: ['α・β遮断', '心不全治療'] },
            { name: 'フロセミド', category: 'ループ利尿薬', halfLife: '6時間', features: ['強力利尿', '急性期使用'] },
            { name: 'スピロノラクトン', category: 'K保持性利尿薬', halfLife: '1.4時間', features: ['アルドステロン拮抗', '心保護効果'] },
            { name: 'アトルバスタチン', category: 'スタチン', halfLife: '14時間', features: ['強力なLDL-C低下', '多面的効果'] },
            { name: 'ロスバスタチン', category: 'スタチン', halfLife: '19時間', features: ['最強のLDL-C低下', '腎排泄'] },
            { name: 'メトホルミン', category: 'ビグアナイド', halfLife: '6.2時間', features: ['第一選択薬', '体重増加なし'] },
            { name: 'エンパグリフロジン', category: 'SGLT2阻害薬', halfLife: '10.5時間', features: ['心血管保護', '体重減少'] },
            { name: 'ダパグリフロジン', category: 'SGLT2阻害薬', halfLife: '17時間', features: ['腎保護効果', '心不全適応'] }
        ];

        let selectorHTML = '<div class="drug-checkbox-grid">';
        
        availableDrugs.forEach((drug, index) => {
            selectorHTML += `
                <label class="drug-checkbox">
                    <input type="checkbox" value="${drug.name}" data-category="${drug.category}" 
                           data-halflife="${drug.halfLife}" data-features='${JSON.stringify(drug.features)}' />
                    <span class="drug-checkbox-content">
                        <strong>${drug.name}</strong>
                        <small>(${drug.category})</small>
                    </span>
                </label>
            `;
        });
        
        selectorHTML += '</div>';
        drugSelector.innerHTML = selectorHTML;

        // チェックボックスのイベントリスナーを追加
        const checkboxes = drugSelector.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleDrugSelection(e));
        });
    }

    handleDrugSelection(event) {
        const checkbox = event.target;
        const drugName = checkbox.value;

        if (checkbox.checked) {
            if (this.selectedDrugs.length < this.maxComparisons) {
                this.selectedDrugs.push({
                    name: drugName,
                    category: checkbox.dataset.category,
                    halfLife: checkbox.dataset.halflife,
                    features: JSON.parse(checkbox.dataset.features)
                });
            } else {
                // 最大数に達している場合はチェックを外す
                checkbox.checked = false;
                alert(`最大${this.maxComparisons}つまでの薬剤を選択できます`);
                return;
            }
        } else {
            this.selectedDrugs = this.selectedDrugs.filter(drug => drug.name !== drugName);
        }

        this.updateCompareButton();
    }

    updateCompareButton() {
        const compareBtn = document.getElementById('compare-drugs');
        const clearBtn = document.getElementById('clear-comparison');
        
        if (this.selectedDrugs.length >= 2) {
            compareBtn.disabled = false;
            compareBtn.textContent = `選択した${this.selectedDrugs.length}つの薬剤を比較`;
            clearBtn.style.display = 'inline-block';
        } else {
            compareBtn.disabled = true;
            compareBtn.textContent = '薬剤を比較（2つ以上選択してください）';
            clearBtn.style.display = this.selectedDrugs.length > 0 ? 'inline-block' : 'none';
        }
    }

    performComparison() {
        if (this.selectedDrugs.length < 2) {
            alert('比較するには2つ以上の薬剤を選択してください');
            return;
        }

        const comparisonResults = document.getElementById('comparison-results');
        const comparisonTable = document.getElementById('comparison-table');

        // 比較表のヘッダーを作成
        let tableHTML = '<thead><tr><th>項目</th>';
        this.selectedDrugs.forEach(drug => {
            tableHTML += `<th>${drug.name}</th>`;
        });
        tableHTML += '</tr></thead><tbody>';

        // 薬効群の比較
        tableHTML += '<tr><td><strong>薬効群</strong></td>';
        this.selectedDrugs.forEach(drug => {
            tableHTML += `<td>${drug.category}</td>`;
        });
        tableHTML += '</tr>';

        // 半減期の比較
        tableHTML += '<tr><td><strong>半減期</strong></td>';
        this.selectedDrugs.forEach(drug => {
            tableHTML += `<td>${drug.halfLife}</td>`;
        });
        tableHTML += '</tr>';

        // 特徴の比較
        tableHTML += '<tr><td><strong>主な特徴</strong></td>';
        this.selectedDrugs.forEach(drug => {
            const featuresHTML = drug.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('');
            tableHTML += `<td>${featuresHTML}</td>`;
        });
        tableHTML += '</tr>';

        // 服薬回数の推定（半減期から）
        tableHTML += '<tr><td><strong>推奨服薬回数</strong></td>';
        this.selectedDrugs.forEach(drug => {
            const halfLifeValue = parseFloat(drug.halfLife);
            let frequency = '';
            if (halfLifeValue >= 20) {
                frequency = '1日1回';
            } else if (halfLifeValue >= 10) {
                frequency = '1日1〜2回';
            } else {
                frequency = '1日2〜3回';
            }
            tableHTML += `<td>${frequency}</td>`;
        });
        tableHTML += '</tr>';

        tableHTML += '</tbody>';
        comparisonTable.innerHTML = tableHTML;

        // 結果を表示
        comparisonResults.style.display = 'block';
        comparisonResults.scrollIntoView({ behavior: 'smooth' });

        // 学習進捗に記録
        if (window.learningTracker) {
            window.learningTracker.recordComparison(this.selectedDrugs.map(drug => drug.name));
        }
    }

    clearSelection() {
        // すべてのチェックボックスをクリア
        const checkboxes = document.querySelectorAll('#drug-selector input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // 選択配列をクリア
        this.selectedDrugs = [];

        // 結果を非表示
        document.getElementById('comparison-results').style.display = 'none';

        // ボタンを更新
        this.updateCompareButton();
    }
}

// ===== 学習進捗トラッカー機能 =====

class LearningTracker {
    constructor() {
        this.storageKey = 'okusuriNote_learningProgress';
        this.progress = this.loadProgress();
        this.init();
    }

    init() {
        this.createTrackerContainer();
        this.updateDisplay();
        this.trackPageVisit();
    }

    createTrackerContainer() {
        // 進捗トラッカーコンテナが既に存在する場合は削除
        const existingTracker = document.getElementById('learning-tracker');
        if (existingTracker) {
            existingTracker.remove();
        }

        // フローティングバーとして追加
        const trackerContainer = document.createElement('div');
        trackerContainer.id = 'learning-tracker';
        trackerContainer.className = 'learning-tracker-floating';
        
        trackerContainer.innerHTML = `
            <div class="tracker-toggle" id="tracker-toggle">
                <span class="tracker-icon">📚</span>
                <span class="tracker-text">学習進捗</span>
                <span class="progress-badge" id="progress-badge">0%</span>
            </div>
            <div class="tracker-panel" id="tracker-panel" style="display: none;">
                <div class="tracker-header">
                    <h3>📊 学習進捗</h3>
                    <button class="close-tracker" id="close-tracker">×</button>
                </div>
                <div class="progress-overview">
                    <div class="progress-item">
                        <span class="progress-label">閲覧済み薬剤</span>
                        <div class="progress-bar">
                            <div class="progress-fill" id="visited-progress"></div>
                        </div>
                        <span class="progress-count" id="visited-count">0/22</span>
                    </div>
                    <div class="progress-item">
                        <span class="progress-label">クイズ完了</span>
                        <div class="progress-bar">
                            <div class="progress-fill" id="quiz-progress"></div>
                        </div>
                        <span class="progress-count" id="quiz-count">0/22</span>
                    </div>
                    <div class="progress-item">
                        <span class="progress-label">比較実行</span>
                        <div class="progress-bar">
                            <div class="progress-fill" id="comparison-progress"></div>
                        </div>
                        <span class="progress-count" id="comparison-count">0回</span>
                    </div>
                </div>
                <div class="achievement-section">
                    <h4>🏆 達成状況</h4>
                    <div class="achievements" id="achievements">
                        <!-- 達成状況がここに表示されます -->
                    </div>
                </div>
                <div class="recommendations">
                    <h4>💡 おすすめの学習</h4>
                    <div class="recommendation-list" id="recommendation-list">
                        <!-- 推奨学習がここに表示されます -->
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(trackerContainer);

        // イベントリスナーを追加
        document.getElementById('tracker-toggle').addEventListener('click', () => this.togglePanel());
        document.getElementById('close-tracker').addEventListener('click', () => this.togglePanel());
    }

    togglePanel() {
        const panel = document.getElementById('tracker-panel');
        const isVisible = panel.style.display !== 'none';
        
        panel.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            this.updateDisplay();
        }
    }

    loadProgress() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            return JSON.parse(stored);
        }
        
        return {
            visitedDrugs: [],
            quizResults: {},
            comparisons: [],
            lastVisit: null,
            studyStreak: 0
        };
    }

    saveProgress() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
    }

    trackPageVisit() {
        // 現在のページの薬剤名を取得
        const drugName = this.getCurrentDrugName();
        if (!drugName) return;

        // 初回訪問の場合は記録
        if (!this.progress.visitedDrugs.includes(drugName)) {
            this.progress.visitedDrugs.push(drugName);
            this.saveProgress();
        }

        // 最終訪問日を更新
        const today = new Date().toDateString();
        if (this.progress.lastVisit !== today) {
            this.updateStudyStreak(today);
        }
    }

    getCurrentDrugName() {
        // パンくずナビゲーションまたはページタイトルから薬剤名を取得
        const breadcrumbCurrent = document.querySelector('.breadcrumb .current');
        if (breadcrumbCurrent) {
            return breadcrumbCurrent.textContent.trim();
        }

        const drugNameElement = document.querySelector('.drug-name');
        if (drugNameElement) {
            return drugNameElement.textContent.trim();
        }

        return null;
    }

    updateStudyStreak(today) {
        const lastVisit = this.progress.lastVisit;
        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const currentDate = new Date(today);
            const daysDiff = Math.floor((currentDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (daysDiff === 1) {
                // 連続学習
                this.progress.studyStreak++;
            } else if (daysDiff > 1) {
                // 間が空いたのでリセット
                this.progress.studyStreak = 1;
            }
        } else {
            this.progress.studyStreak = 1;
        }
        
        this.progress.lastVisit = today;
        this.saveProgress();
    }

    recordQuizResult(drugName, correctAnswers, totalQuestions) {
        this.progress.quizResults[drugName] = {
            correct: correctAnswers,
            total: totalQuestions,
            percentage: Math.round((correctAnswers / totalQuestions) * 100),
            timestamp: new Date().toISOString()
        };
        this.saveProgress();
        this.updateDisplay();
    }

    recordComparison(drugNames) {
        this.progress.comparisons.push({
            drugs: drugNames,
            timestamp: new Date().toISOString()
        });
        this.saveProgress();
        this.updateDisplay();
    }

    updateDisplay() {
        const totalDrugs = 22; // OkusuriNoteの総薬剤数

        // 全体進捗の計算
        const visitedPercentage = Math.round((this.progress.visitedDrugs.length / totalDrugs) * 100);
        const quizPercentage = Math.round((Object.keys(this.progress.quizResults).length / totalDrugs) * 100);
        
        // プログレスバッジの更新
        document.getElementById('progress-badge').textContent = `${visitedPercentage}%`;

        // 個別進捗の更新
        this.updateProgressBar('visited-progress', visitedPercentage);
        document.getElementById('visited-count').textContent = `${this.progress.visitedDrugs.length}/${totalDrugs}`;
        
        this.updateProgressBar('quiz-progress', quizPercentage);
        document.getElementById('quiz-count').textContent = `${Object.keys(this.progress.quizResults).length}/${totalDrugs}`;
        
        document.getElementById('comparison-count').textContent = `${this.progress.comparisons.length}回`;
        this.updateProgressBar('comparison-progress', Math.min((this.progress.comparisons.length / 10) * 100, 100));

        // 達成状況の更新
        this.updateAchievements();
        
        // 推奨学習の更新
        this.updateRecommendations();
    }

    updateProgressBar(elementId, percentage) {
        const progressBar = document.getElementById(elementId);
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    updateAchievements() {
        const achievementsContainer = document.getElementById('achievements');
        const achievements = [];

        // 各種達成項目
        if (this.progress.visitedDrugs.length >= 5) {
            achievements.push({ icon: '🌟', text: '初心者卒業', description: '5つの薬剤を学習' });
        }
        if (this.progress.visitedDrugs.length >= 10) {
            achievements.push({ icon: '🎯', text: '学習継続者', description: '10の薬剤を学習' });
        }
        if (this.progress.visitedDrugs.length >= 22) {
            achievements.push({ icon: '👑', text: '薬学マスター', description: '全薬剤を学習' });
        }
        if (Object.keys(this.progress.quizResults).length >= 5) {
            achievements.push({ icon: '🧠', text: 'クイズチャレンジャー', description: '5つのクイズに挑戦' });
        }
        if (this.progress.comparisons.length >= 3) {
            achievements.push({ icon: '⚖️', text: '比較分析者', description: '3回の薬剤比較を実施' });
        }
        if (this.progress.studyStreak >= 3) {
            achievements.push({ icon: '🔥', text: '連続学習', description: `${this.progress.studyStreak}日連続で学習` });
        }

        let achievementsHTML = '';
        if (achievements.length > 0) {
            achievements.forEach(achievement => {
                achievementsHTML += `
                    <div class="achievement-item">
                        <span class="achievement-icon">${achievement.icon}</span>
                        <div class="achievement-text">
                            <strong>${achievement.text}</strong>
                            <small>${achievement.description}</small>
                        </div>
                    </div>
                `;
            });
        } else {
            achievementsHTML = '<p class="no-achievements">学習を続けて達成バッジを獲得しましょう！</p>';
        }

        achievementsContainer.innerHTML = achievementsHTML;
    }

    updateRecommendations() {
        const recommendationsContainer = document.getElementById('recommendation-list');
        const recommendations = [];

        // 薬剤カテゴリ別の学習推奨
        const categories = {
            'ARB': ['テルミサルタン', 'ロサルタン', 'カンデサルタン'],
            'ACE阻害薬': ['エナラプリル', 'ペリンドプリル'],
            'β遮断薬': ['ビソプロロール', 'カルベジロール'],
            '利尿薬': ['フロセミド', 'スピロノラクトン'],
            'スタチン': ['アトルバスタチン', 'ロスバスタチン'],
            'SGLT2阻害薬': ['エンパグリフロジン', 'ダパグリフロジン']
        };

        // 未学習のカテゴリを推奨
        for (const [category, drugs] of Object.entries(categories)) {
            const visitedInCategory = drugs.filter(drug => this.progress.visitedDrugs.includes(drug)).length;
            if (visitedInCategory < drugs.length) {
                const nextDrug = drugs.find(drug => !this.progress.visitedDrugs.includes(drug));
                if (nextDrug) {
                    recommendations.push({
                        type: 'category',
                        text: `${category}を学習`,
                        description: `次は「${nextDrug}」がおすすめ`,
                        link: `drugs/${nextDrug.toLowerCase()}.html`
                    });
                }
            }
        }

        // クイズ未実施の薬剤を推奨
        const unquizzedDrugs = this.progress.visitedDrugs.filter(drug => !this.progress.quizResults[drug]);
        if (unquizzedDrugs.length > 0) {
            recommendations.push({
                type: 'quiz',
                text: 'クイズで理解度チェック',
                description: `「${unquizzedDrugs[0]}」のクイズに挑戦`,
                link: `drugs/${unquizzedDrugs[0].toLowerCase()}.html`
            });
        }

        // 比較学習の推奨
        if (this.progress.visitedDrugs.length >= 2 && this.progress.comparisons.length < 3) {
            recommendations.push({
                type: 'comparison',
                text: '薬剤比較で深い理解',
                description: '学習済みの薬剤を比較してみましょう'
            });
        }

        let recommendationsHTML = '';
        if (recommendations.length > 0) {
            recommendations.slice(0, 3).forEach(rec => {
                recommendationsHTML += `
                    <div class="recommendation-item" ${rec.link ? `onclick="window.location.href='${rec.link}'"` : ''}>
                        <div class="recommendation-text">
                            <strong>${rec.text}</strong>
                            <small>${rec.description}</small>
                        </div>
                        ${rec.link ? '<span class="recommendation-arrow">→</span>' : ''}
                    </div>
                `;
            });
        } else {
            recommendationsHTML = '<p class="no-recommendations">素晴らしい！すべての学習項目を完了しています。</p>';
        }

        recommendationsContainer.innerHTML = recommendationsHTML;
    }
}

// ===== 初期化 =====

document.addEventListener('DOMContentLoaded', function() {
    // 薬剤詳細ページかどうかを判定
    const isDrugDetailPage = document.querySelector('.drug-detail') !== null;
    
    if (isDrugDetailPage) {
        // 薬剤詳細ページの場合のみクイズと比較ツールを初期化
        const drugNameElement = document.querySelector('.drug-name');
        if (drugNameElement) {
            const drugName = drugNameElement.textContent.trim();
            
            // 理解度チェッククイズを初期化
            window.understandingQuiz = new UnderstandingQuiz(drugName);
            
            // 薬剤比較ツールを初期化
            window.drugComparison = new DrugComparisonTool();
        }
    }
    
    // 学習進捗トラッカーは全ページで初期化
    window.learningTracker = new LearningTracker();
});

// ===== ユーティリティ関数 =====

// モバイルデバイス判定
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// スムーズスクロール
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ローカルストレージの容量チェック
function checkStorageQuota() {
    try {
        const testKey = 'storage_test';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        console.warn('LocalStorage is not available');
        return false;
    }
}