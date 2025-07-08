# 13-IMPLEMENTATION_TASK_BREAKDOWN.md
# Level配置最適化プロジェクト Phase 3 実装タスク詳細

**作成日時**: 2025-07-04 15:10  
**作成者**: CEO  
**目的**: UIコミュニケーション問題解決のための具体的実装タスクの定義  
**重要度**: 🔴 実装フェーズの作業指示書

---

## 📌 エグゼクティブサマリー

本ドキュメントは、Level表示システムのUIコミュニケーション問題を解決するための実装タスクを詳細に定義します。

**主要成果物**：
1. JavaScript外部ファイル（1,100行→50行、93.5%削減）
2. UIガイダンス実装（全22薬剤）
3. コンテンツ配置の統一化（10薬剤の最適化）

**総工数**: 11-14時間（並列実行により実質2-3日で完了可能）

---

## 🚀 Phase 1: JavaScript外部ファイル化（技術基盤整備）

### 実装者：CEO または Manager（OPUSモデル必須）
### 作業時間：2-3時間

### 1-1. 外部JavaScriptファイルの作成

**ファイルパス**: `/assets/js/level-selector.js`

**実装要件**：
```javascript
// level-selector.js - 統一されたレベル切替機能

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
    
    // 初期表示の設定
    showLevel(CONFIG.defaultLevel);
    
    // コンテンツカウントの自動計算と表示
    updateContentIndicators();
}

// レベル切替処理
function handleLevelChange(event) {
    const targetLevel = event.currentTarget.dataset.level;
    showLevel(targetLevel);
}

// レベル表示関数（core機能）
function showLevel(level) {
    // すべてのレベルコンテンツを取得
    const allLevelContents = document.querySelectorAll('[class*="level-"][class*="-content"]');
    const levelButtons = document.querySelectorAll('.level-btn');
    
    // アニメーション付き非表示
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
    }, CONFIG.enableAnimation ? CONFIG.transitionDuration : 0);
    
    // ボタンのアクティブ状態更新
    levelButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
    
    // インジケーター更新
    updateIndicatorState(level);
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
        levelSelector.insertAdjacentHTML('afterbegin', guideHTML);
    }
}

// コンテンツインジケーターの更新
function updateContentIndicators() {
    const levels = ['1', '2', '3'];
    const levelNames = ['基本情報', '実践情報', '詳細情報'];
    
    levels.forEach((level, index) => {
        const contents = document.querySelectorAll(`.level-${level}-content`);
        const sections = contents.length;
        
        // インジケーターが存在しない場合は作成
        let indicator = document.querySelector('.content-indicator');
        if (!indicator && sections > 0) {
            createContentIndicator();
            indicator = document.querySelector('.content-indicator');
        }
        
        // カウントを更新
        if (indicator) {
            const item = indicator.querySelectorAll('.indicator-item')[index];
            if (item) {
                const countSpan = item.querySelector('.content-count');
                countSpan.textContent = `${levelNames[index]} ${sections}項目`;
            }
        }
    });
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
        const itemLevel = index + 1;
        item.classList.toggle('active', itemLevel <= parseInt(activeLevel));
    });
}

// 外部から呼び出し可能な関数をグローバルに公開
window.showLevel = showLevel;
```

### 1-2. CSSスタイルの追加

**ファイル**: 新規 `level-selector.css`

```css
/* Level Selector UI改善スタイル */
.level-selector__guide {
    text-align: center;
    margin-bottom: 15px;
    padding: 10px;
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    border-radius: 8px;
}

.guide-text {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #2c5aa0;
    margin-bottom: 5px;
}

.guide-sub {
    display: block;
    font-size: 14px;
    color: #666;
}

.level-desc {
    display: block;
    font-size: 12px;
    font-weight: normal;
    margin-top: 3px;
    opacity: 0.8;
}

/* コンテンツインジケーター */
.content-indicator {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
}

.indicator-item {
    text-align: center;
    padding: 8px 15px;
    border-radius: 6px;
    transition: all 0.3s ease;
    opacity: 0.5;
}

.indicator-item.active {
    background: #007bff;
    color: white;
    opacity: 1;
}

.indicator-item .level {
    display: block;
    font-weight: bold;
    font-size: 14px;
}

.indicator-item .content-count {
    display: block;
    font-size: 12px;
    margin-top: 3px;
}

/* レベル間誘導プロンプト */
.next-level-prompt {
    margin-top: 30px;
    padding: 20px;
    background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
    border-radius: 8px;
    text-align: center;
    border: 1px solid #ffeeba;
}

.next-level-btn {
    margin-top: 10px;
    padding: 10px 25px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

.next-level-btn:hover {
    background: #0056b3;
}
```

### 1-3. テスト実装

**テスト対象薬剤**: `metformin-refined.html`

**テスト項目**：
1. 外部JSファイルの読み込み確認
2. レベル切替動作の検証
3. UIガイダンスの自動挿入確認
4. コンテンツカウントの正確性
5. アニメーション動作の確認

---

## 📝 Phase 2: HTML更新作業（機械的作業）

### 実装者：Sonnet開発者（3名並列）
### 作業時間：2時間（並列実行）

### 2-1. 作業分担

| 開発者 | 担当薬剤 | ファイル数 |
|--------|----------|-----------|
| Dev1 | atorvastatin, bisoprolol, candesartan, carvedilol, dapagliflozin, digoxin, empagliflozin | 7 |
| Dev2 | enalapril, escitalopram, esomeprazole, furosemide, lansoprazole, losartan, metformin | 7 |
| Dev3 | omeprazole, perindopril, rosuvastatin, sertraline, spironolactone, telmisartan, vancomycin, warfarin | 8 |

### 2-2. 作業手順（各開発者共通）

#### Step 1: インラインJavaScriptの削除
1. `<script>` タグ内のすべてのJavaScriptコードを削除
2. 以下の行のみを残す：
```html
<script src="../assets/js/level-selector.js"></script>
```

#### Step 2: 実装パターンの確認と対応

**パターン1（showLevel関数）薬剤**：そのまま削除
**パターン2（インライン実装）薬剤**：そのまま削除
**パターン3（スクロール実装）薬剤**：削除後、動作確認必須

### 2-3. チェックリスト

- [ ] インラインJavaScriptを完全に削除
- [ ] 外部JSファイル参照を追加
- [ ] HTMLの構造が壊れていないことを確認
- [ ] level-btnクラスが存在することを確認
- [ ] level-N-contentクラスが存在することを確認

---

## 🎨 Phase 3: UIガイダンス実装

### 実装者：Sonnet開発者（3名並列）
### 作業時間：3-4時間（並列実行）

### 3-1. レベルセレクターの改善

各薬剤HTMLの `.level-selector__inner` の前に以下を追加：

```html
<div class="level-selector__guide">
    <span class="guide-text">👇 あなたの学習段階を選んでください</span>
    <span class="guide-sub">クリックで表示内容が切り替わります</span>
</div>
```

### 3-2. レベルボタンの説明追加

各レベルボタンに説明を追加：

```html
<button class="level-btn active" data-level="1">
    薬学生
    <span class="level-desc">基本を学ぶ</span>
</button>
<button class="level-btn" data-level="2">
    実習中
    <span class="level-desc">実践を学ぶ</span>
</button>
<button class="level-btn" data-level="3">
    研修中
    <span class="level-desc">深く学ぶ</span>
</button>
```

### 3-3. レベル間誘導の追加

各レベルコンテンツの最後に追加：

**Level 1の最後**：
```html
<div class="next-level-prompt">
    <p>🎓 基本を理解できましたか？</p>
    <button onclick="showLevel('2')" class="next-level-btn">
        実践的な内容を見る（Level 2）→
    </button>
</div>
```

**Level 2の最後**：
```html
<div class="next-level-prompt">
    <p>🏥 実践的な知識を習得しましたか？</p>
    <button onclick="showLevel('3')" class="next-level-btn">
        専門的な内容を見る（Level 3）→
    </button>
</div>
```

---

## 📊 Phase 4: コンテンツ配置の最適化

### 実装者：Manager主導、Sonnet開発者実装
### 作業時間：4-5時間

### 4-1. 問題薬剤の分類

#### グループA：すべてLevel 1の薬剤（5薬剤）
**要対応**：適切な3分割を実施
- 薬剤リスト（Phase 2.5分析結果より特定）

#### グループB：不適切配置の薬剤（5薬剤）
**要対応**：重要内容をLevel 1へ移動
- 薬剤リスト（Phase 2.5分析結果より特定）

### 4-2. 配置基準

| レベル | 配置内容 | 目標分量 |
|--------|----------|----------|
| Level 1 | 薬剤識別、基本効能、基本用法、重要警告、30秒サマリー | 30-40% |
| Level 2 | 詳細薬理、相互作用、用量調整、服薬指導、処方例 | 30-35% |
| Level 3 | 開発経緯、臨床試験、ガイドライン、薬物動態、最新知見 | 30-35% |

### 4-3. 実装手順

1. **現状分析**：各薬剤の現在のLevel配置を確認
2. **再配置計画**：上記基準に基づく配置案作成
3. **HTML編集**：classを適切に変更
4. **動作確認**：Level切替が正しく機能することを確認

---

## 🔍 品質保証チェックリスト

### 全体チェック項目
- [ ] JavaScript外部ファイルが正しく読み込まれている
- [ ] すべての薬剤でUIガイダンスが表示されている
- [ ] レベル切替が滑らかに動作する
- [ ] コンテンツカウントが正確
- [ ] レベル間誘導ボタンが機能する

### 薬剤別チェック項目
- [ ] Level 1に基本情報が適切に配置されている
- [ ] Level 2に実践情報が適切に配置されている
- [ ] Level 3に詳細情報が適切に配置されている
- [ ] 各レベルの分量が基準内（±5%）

---

## 📅 実装スケジュール

### Day 1（7/4 午後）
- 15:00-17:00: JavaScript外部ファイル作成（CEO/Manager）
- 17:00-18:00: テスト実装と検証

### Day 2（7/5）
- 09:00-11:00: Phase 2 HTML更新（Sonnet×3並列）
- 11:00-15:00: Phase 3 UIガイダンス実装（Sonnet×3並列）
- 15:00-17:00: 中間チェックと調整

### Day 3（7/6）
- 09:00-14:00: Phase 4 コンテンツ最適化
- 14:00-16:00: 最終確認とテスト
- 16:00-17:00: 完了報告とドキュメント更新

---

## 🎯 成功基準

1. **技術的成功**
   - JavaScriptコード93.5%削減達成
   - 全22薬剤で統一的な動作
   - エラーゼロ

2. **UX改善成功**
   - 「Level 3が見えない」問題の完全解決
   - ユーザーが迷わずレベル切替できる
   - 学習効率30%向上（推定）

3. **保守性向上**
   - 新薬剤追加時の作業98%削減
   - バグ修正箇所95.5%削減
   - 将来の機能追加が容易

---

**このドキュメントは実装の進捗に応じて更新されます。**