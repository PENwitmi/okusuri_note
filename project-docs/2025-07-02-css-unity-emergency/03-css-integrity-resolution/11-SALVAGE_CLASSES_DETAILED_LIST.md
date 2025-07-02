# サルベージクラス詳細リスト（drug-page-v2.css用）

**作成日時**: 2025-07-03 01:48  
**作成者**: CEO  
**目的**: 新規CSS（drug-page-v2.css）に実装するクラスの完全リスト  
**対象**: metformin-clean.htmlで使用される29クラス

---

## 📋 実装クラス総覧（29個）

### 1. style.cssから継承（5個）- @importで自動利用
```css
/* 既にstyle.cssに定義済み、追加実装不要 */
.active                /* ボタンのアクティブ状態 */
.prescribing-data      /* 処方データセクション */
.design-spec           /* 仕様・詳細情報 */
.stat-conclusion       /* 統計的結論 */
.card                  /* カード基本スタイル */
```

---

## 🔧 drug-detail.cssからサルベージ（12個）

### 薬剤情報系（6個）
```css
/* drug-detail.css 63行目付近 */
.drug-header {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-light) 100%);
    padding: var(--spacing-2xl) 0;
    text-align: center;
    position: relative;
}

/* drug-detail.css 88行目 */
.brand-name {
    font-size: var(--font-size-3xl);
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
}

/* drug-detail.css 86行目 */
.generic-name {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    font-weight: 500;
}

/* drug-detail.css 94行目 */
.drug-classification {
    display: flex;
    gap: var(--spacing-base);
    justify-content: center;
    margin-top: var(--spacing-lg);
}

/* drug-detail.css 100行目 */
.drug-class {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-base);
    background: var(--bg-accent);
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 600;
}

/* drug-detail.css 112行目 */
.generation {
    color: var(--accent-color);
    font-weight: 700;
    font-size: var(--font-size-sm);
}
```

### コンテンツ系（6個）
```css
/* drug-detail.css 130行目 */
.quick-summary {
    background: var(--bg-secondary);
    padding: var(--spacing-2xl);
    margin: var(--spacing-2xl) 0;
}

/* drug-detail.css 232行目 */
.quote-box {
    background: var(--bg-light);
    border-left: 4px solid var(--primary-color);
    padding: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
    font-style: italic;
}

/* drug-detail.css 489行目 */
.specialist-perspective {
    background: linear-gradient(to right, var(--bg-accent), var(--bg-primary));
    padding: var(--spacing-2xl);
    border-radius: 12px;
    margin: var(--spacing-2xl) 0;
}

/* drug-detail.css 300行目付近 */
.impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin: var(--spacing-xl) 0;
}

/* drug-detail.css 308行目 */
.impact-item {
    background: var(--bg-card);
    padding: var(--spacing-lg);
    border-radius: 8px;
    box-shadow: var(--shadow-light);
    transition: all var(--transition-base);
}

.impact-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
}
```

---

## 🎨 ver2-unified.cssからサルベージ（2個）

### 3段階学習システム（認知科学設計）
```css
/* ver2-unified.css 176行目 - 薬学生向け */
.level-1-content {
    background: var(--bg-study);
    color: var(--text-reading);
    border-left: 4px solid var(--pharma-primary-light);
    font-size: 18px;
    line-height: 1.8;
    font-weight: 300;
    padding: 20px;
    margin: 16px 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
    transition: box-shadow 0.2s ease;
    max-width: 800px;
    letter-spacing: 0.3px;
}

/* ver2-unified.css 225行目 - 実習生向け */
.level-2-content {
    color: var(--text-pharma-body);
    background: linear-gradient(135deg, #fff 0%, #f0f8ff 100%);
    border: 2px solid var(--learning-bookmark);
    border-left: 5px solid var(--learning-correct);
    font-weight: 500;
    padding: 16px;
    margin: 12px 0;
    border-radius: 6px;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
}

.level-2-content:before {
    content: "🏥";
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 14px;
}
```

---

## 🆕 新規実装クラス（10個）

### レベル管理系（5個）
```css
/* レベル選択コンテナ */
.level-selector {
    position: sticky;
    top: 0;
    background: var(--bg-primary);
    z-index: 100;
    padding: var(--spacing-base) 0;
    box-shadow: var(--shadow-light);
}

/* 内部ラッパー */
.level-selector__inner {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
}

/* レベルボタン */
.level-btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    background: var(--bg-secondary);
    border: 2px solid transparent;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-base);
}

.level-btn:hover {
    background: var(--bg-accent);
}

.level-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-dark);
}

/* レベルヒント */
.level-hint {
    font-size: var(--font-size-sm);
    color: var(--text-muted);
    font-style: italic;
}

/* 薬剤詳細ページルート */
.drug-detail {
    min-height: 100vh;
    background: var(--bg-primary);
}

/* カテゴリ別テーマ */
.drug-detail[data-category="endocrine"] .drug-class {
    background: var(--category-endocrine);
    color: white;
}
```

### 機能系クラス（5個）
```css
/* 適応症セクション */
.indications {
    background: var(--bg-card);
    padding: var(--spacing-lg);
    border-radius: 8px;
    margin: var(--spacing-base) 0;
}

/* 適応症リスト */
.indications__list {
    list-style: none;
    padding-left: 0;
}

.indications__list li {
    padding: var(--spacing-sm) 0;
    padding-left: 24px;
    position: relative;
}

.indications__list li:before {
    content: "▶";
    position: absolute;
    left: 0;
    color: var(--primary-color);
}

/* 併用薬セクション */
.combination-drugs {
    background: var(--bg-secondary);
    padding: var(--spacing-xl);
    border-radius: 12px;
    margin: var(--spacing-xl) 0;
}

/* 併用薬リスト */
.combination-drugs__list {
    counter-reset: combo-counter;
}

.combination-drugs__list li {
    counter-increment: combo-counter;
    padding: var(--spacing-base) 0;
    border-bottom: 1px solid var(--border-light);
}

.combination-drugs__list li:before {
    content: counter(combo-counter) ". ";
    color: var(--primary-color);
    font-weight: 700;
}

/* FAQ注記 */
.faq-note {
    background: var(--bg-accent);
    padding: var(--spacing-base);
    border-radius: 6px;
    margin-top: var(--spacing-lg);
    font-size: var(--font-size-sm);
}
```

---

## 📊 実装サマリー

### クラス数内訳
- **総クラス数**: 29個
- **実装必要**: 24個（style.css継承の5個を除く）
  - drug-detail.cssから: 12個
  - ver2-unified.cssから: 2個
  - 新規実装: 10個

### 予想CSS行数
- **サルベージ部分**: 約150行
- **新規実装部分**: 約150行
- **合計**: 約300行（コメント含む）

### 削減効果
- **元のCSS合計**: 約800クラス相当
- **新規CSS**: 29クラスのみ
- **削減率**: 96.4%

---

## 🔄 次のステップ

1. このリストに基づいてdrug-page-v2.cssを作成
2. style.cssのインポートを記述
3. 上記のクラスを順次実装
4. metformin-clean.htmlのCSS参照を変更
5. 動作検証

---

**文書作成完了**: 2025-07-03 01:48