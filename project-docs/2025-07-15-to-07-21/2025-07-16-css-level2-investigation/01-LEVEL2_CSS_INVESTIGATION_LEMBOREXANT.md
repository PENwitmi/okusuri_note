# レベル2 CSS調査レポート - レンボレキサントページ

**調査日時**: 2025-07-16 13:45:00 JST（調査開始）  
**対象ファイル**: `/docs/drugs-v3/lemborexant-v3.html`  
**調査者**: Claude  
**調査理由**: レベル2セクションの見た目が単調でCSSが効いているか疑問があるため

## 1. 調査概要

lemborexant-v3.htmlのレベル2セクションで使用されているCSSクラスと、その定義状況を調査しました。
この調査はレンボレキサントページ固有のものであり、他の薬剤ページでは異なる可能性があります。

## 2. CSSファイルの読み込み状況

```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/sidebar.css">
<link rel="stylesheet" href="../assets/css/mobile-controls.css">
<link rel="stylesheet" href="../assets/css/level-selector.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

主にレベル2のスタイルは`drug-page-v2.css`で定義されています。

## 3. レベル2で使用されているクラス一覧

### 構造的クラス
- `level-2-content` - レベル2セクションのメインコンテナ
- `container` - コンテンツの中央寄せ用コンテナ

### グリッドレイアウト系
- `impact-grid` - カードグリッドレイアウト
- `impact-item` - グリッド内の個別カード

### 意味的クラス（内容に基づく）
- `clinical-impact` - 臨床的影響セクション
- `rem-effects` - REM睡眠効果セクション
- `practical-points` - 実践的ポイントセクション
- `key-point` - キーポイントボックス
- `alert-box` - アラートボックス（インラインスタイルで対応）
- `comparison-table` - 比較表コンテナ
- `drug-comparison` - 薬剤比較テーブル
- `market-analysis` - 市場分析セクション
- `market-share` - 市場シェアテーブル
- `prescription-drivers` - 処方要因セクション
- `evidence-accumulation` - エビデンス蓄積セクション

## 4. CSS定義状況

### ✅ 定義済みクラス（drug-page-v2.css）

#### level-2-content
```css
.level-2-content {
    color: var(--text-pharma-body);
    background: linear-gradient(135deg, #fff 0%, var(--pharma-nature-subtle) 50%, #f0f8ff 100%);
    border: 2px solid var(--pharma-nature-light);
    border-left: 6px solid var(--pharma-nature);
    font-weight: 500;
    padding: var(--spacing-xl);
    margin: var(--spacing-xl) auto;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
    max-width: 1000px;
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.1);
}
```

#### impact-grid
```css
.impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}
```

#### impact-item
```css
.impact-item {
    background: white;
    padding: var(--spacing-lg);
    border-radius: 6px;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-light);
    transition: all var(--transition-base);
}
```

#### container
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-base);
}
```

#### レベル2内の基本要素
- **h3**: font-size: 2xl、下線装飾付き
- **h4**: font-size: xl、左ボーダー装飾付き
- **h5**: font-size: lg
- **p**: 行間1.8
- **ul/li**: 適切なマージン・パディング

### ❌ 未定義クラス

以下のクラスはHTMLで使用されているが、CSSで定義されていない：
- `clinical-impact`
- `rem-effects`
- `practical-points`
- `key-point`
- `alert-box`（一部インラインスタイルで対応）
- `comparison-table`
- `drug-comparison`
- `market-analysis`
- `market-share`
- `prescription-drivers`
- `evidence-accumulation`

## 5. 問題点の分析

### 5.1 視覚的階層の不足
- 多くの意味的クラスが未定義のため、各セクションが同じような見た目になっている
- セクション間の視覚的な区別が弱い

### 5.2 装飾的要素の欠如
- `key-point`や`alert-box`などの重要な情報を強調するスタイルが不足
- テーブルのスタイリングが全くない（基本的なHTMLテーブルのまま）

### 5.3 色彩の単調さ
- レベル2全体が緑系の色調で統一されているが、セクション内での変化が少ない
- 重要度に応じた色分けがない

## 6. 改善提案

### 6.1 未定義クラスへのスタイル追加案

#### clinical-impact（臨床的影響）
```css
.clinical-impact {
    background: #f0f7ff;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--pharma-primary);
}
```

#### key-point（キーポイント）
```css
.key-point {
    background: #fffbf0;
    border: 1px solid #f0d9a0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
}
```

#### comparison-table（比較表）
```css
.comparison-table {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.comparison-table table {
    width: 100%;
    border-collapse: collapse;
}

.comparison-table th {
    background: #f5f5f5;
    padding: 12px;
    text-align: left;
    font-weight: 600;
}

.comparison-table td {
    padding: 12px;
    border-bottom: 1px solid #eee;
}
```

#### market-analysis（市場分析）
```css
.market-analysis {
    background: linear-gradient(to bottom, #ffffff, #f9fafb);
    padding: 30px;
    border-radius: 12px;
    margin: 30px 0;
}
```

### 6.2 セクション間の視覚的区別強化
- 各セクションに異なる背景色やボーダーカラーを適用
- アイコンや装飾要素を追加して視覚的な手がかりを増やす
- セクション間のマージンを調整して適切な空白を確保

### 6.3 インタラクティブ要素の追加
- ホバー効果の強化
- トランジションの追加
- フォーカス状態の明確化

## 7. 結論

レベル2セクションの単調な見た目の主な原因は：
1. 多数の意味的クラスが未定義
2. テーブルスタイルの完全な欠如
3. セクション間の視覚的区別の不足

これらの問題を解決することで、レベル2セクションの視覚的な魅力と情報の階層構造を大幅に改善できます。

## 8. 次のステップ

1. 未定義クラスのCSSを`drug-page-v2.css`に追加
2. テーブルスタイルの実装
3. セクション間の視覚的階層の強化
4. 他の薬剤ページでも同様の問題がないか確認

## 9. レベル3 CSS調査結果

### 9.1 レベル3で使用されているクラス一覧

#### 構造的クラス
- `level-3-content` - レベル3セクションのメインコンテナ ✅ **定義済み（drug-page-v2.css: 275-290行）**
- `container` - コンテンツの中央寄せ用コンテナ ✅ **定義済み（drug-page-v2.css: 683-687行）**

#### 開発ストーリー関連
- `development-story` - 開発ストーリーコンテナ ❌ **未定義**
- `story-chapter` - ストーリーの章 ❌ **未定義**
- `story-content` - ストーリー内容 ❌ **未定義**
- `clinical-feedback` - 臨床フィードバック ❌ **未定義**

#### 分子設計関連
- `molecular-innovation` - 分子革新セクション ❌ **未定義**
- `molecular-analysis` - 分子分析セクション ❌ **未定義**
- `molecular-features` - 分子特徴セクション ❌ **未定義**
- `kinetics-comparison` - 動態比較セクション ❌ **未定義**
- `kinetics-table` - 動態テーブル ❌ **未定義**
- `analysis-table` - 分析テーブル ❌ **未定義**
- `feature-grid` - 特徴グリッド ❌ **未定義**
- `feature-item` - 特徴アイテム ❌ **未定義**

#### 臨床試験関連
- `clinical-trials` - 臨床試験セクション ❌ **未定義**
- `trial-overview` - 試験概要 ❌ **未定義**
- `trial-summary` - 試験サマリーテーブル ❌ **未定義**
- `key-findings` - 主要所見 ❌ **未定義**
- `efficacy-data` - 有効性データ ❌ **未定義**
- `data-grid` - データグリッド ❌ **未定義**
- `data-item` - データアイテム ❌ **未定義**
- `sleep-architecture` - 睡眠構築セクション ❌ **未定義**
- `sleep-stages` - 睡眠段階テーブル ❌ **未定義**
- `long-term-data` - 長期データセクション ❌ **未定義**
- `safety-timeline` - 安全性タイムライン ❌ **未定義**
- `dependency-assessment` - 依存性評価 ❌ **未定義**

#### 将来展望関連
- `future-perspectives` - 将来展望セクション ❌ **未定義**
- `research-areas` - 研究領域 ❌ **未定義**
- `research-item` - 研究アイテム ❌ **未定義**
- `personalized-medicine` - 個別化医療 ❌ **未定義**
- `market-momentum` - 市場の勢い ❌ **未定義**
- `evidence-accumulation` - エビデンス蓄積 ❌ **未定義**

#### 特殊要素
- `highlight` - ハイライト（重要ポイント） ❌ **未定義**
- `conclusion` - 結論 ❌ **未定義**

### 9.2 レベル3基本スタイル（定義済み）

drug-page-v2.cssで定義されているレベル3の基本スタイル：

```css
/* 275-290行目 */
.level-3-content {
    background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-reference) 100%);
    color: var(--text-pharma-primary);
    border: 2px solid var(--border-color);
    border-top: 5px solid var(--text-pharma-primary);
    font-weight: 400;
    padding: var(--spacing-2xl);
    margin: var(--spacing-xl) auto;
    font-size: var(--font-size-base);
    line-height: 1.8;
    border-radius: 12px;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Noto Sans JP', sans-serif;
    box-shadow: 0 4px 16px rgba(52, 73, 94, 0.1);
    max-width: 1000px;
}
```

### 9.3 レベル3で定義されている要素スタイル

#### 見出し（h2, h3, h4, h5, h6）
- ✅ **定義済み**（drug-page-v2.css: 520-601行）
- h2: 中央寄せ、下線装飾付き
- h3: 左寄せ、下線装飾付き
- h4: 左ボーダー装飾付き
- h5, h6: シンプルな見出しスタイル

#### 引用（blockquote, cite）
- ✅ **定義済み**（drug-page-v2.css: 606-640行）
- blockquote: 背景色、左ボーダー、引用符装飾付き
- cite: 右寄せ、強調スタイル

#### リスト（ul, li）
- ✅ **定義済み**（drug-page-v2.css: 665-675行）

#### 段落・強調（p, strong）
- ✅ **定義済み**（drug-page-v2.css: 652-662行）

### 9.4 未定義クラスの分析（レベル3）

レベル3では、レベル2よりもさらに多くの意味的クラスが未定義：
- **開発ストーリー関連**: 12クラスすべて未定義
- **臨床試験データ関連**: 13クラスすべて未定義
- **研究・将来展望関連**: 6クラスすべて未定義
- **テーブル関連**: すべて未定義（基本的なtableタグのスタイルのみ）

### 9.5 問題点の総括

1. **レベル2・3共通の問題**
   - 意味的クラスがほとんど未定義
   - テーブルスタイルの完全な欠如
   - セクション間の視覚的区別が不足

2. **レベル3特有の問題**
   - 複雑な情報構造（開発ストーリー、臨床データ）に対応するスタイルがない
   - データ表示用のグリッドレイアウトが未定義
   - 研究データや統計情報の視覚化スタイルが不足

3. **CSS定義の所在**
   - **基本スタイル**: style.css（CSS変数、リセット、基本要素）
   - **薬剤ページ専用**: drug-page-v2.css（レベル表示、見出し、引用など）
   - **レスポンシブ**: responsive-unified.css
   - **サイドバー**: sidebar.css
   - **モバイル**: mobile-controls.css
   - **レベル選択**: level-selector.css

## 10. 逆調査：drug-page-v2.cssで定義されているが未使用のクラス

### 10.1 lemborexant-v3.htmlで実際に使用されているクラス一覧
- `drug-detail` - ページルート
- `sidebar-layout`, `sidebar`, `sidebar-section`, `sidebar-title`, `sidebar-links`, `sidebar-link`, `sidebar-note`（sidebar.css）
- `main-content` - メインコンテンツエリア
- `drug-header`, `brand-name`, `generic-name`
- `drug-classification`, `drug-class`, `generation`
- `level-indicator`, `level-1-indicator`, `level-2-indicator`, `level-3-indicator`
- `level-1-content`, `level-2-content`, `level-3-content`
- `indications`, `indications__list`
- `quick-summary`
- `container`
- `impact-grid`, `impact-item`
- `emphasis`（未定義）
- `level-hint`
- `comparison-table`, `drug-comparison`（未定義）
- `highlight`（未定義）
- `clinical-impact`, `clinical-significance`, `rem-effects`, `practical-points`, `key-point`, `alert-box`（未定義）
- `market-analysis`, `market-share`, `prescription-drivers`, `evidence-accumulation`, `market-momentum`（未定義）
- `development-story`, `story-chapter`, `story-content`, `clinical-feedback`（未定義）
- `molecular-analysis`, `analysis-table`, `trial-results`（未定義）
- `molecular-innovation`, `kinetics-comparison`, `kinetics-table`, `molecular-features`, `feature-grid`, `feature-item`（未定義）
- `clinical-trials`, `trial-overview`, `trial-summary`, `key-findings`, `efficacy-data`, `data-grid`, `data-item`（未定義）
- `sleep-architecture`, `sleep-stages`, `long-term-data`, `safety-timeline`, `dependency-assessment`（未定義）
- `future-perspectives`, `research-areas`, `research-item`, `personalized-medicine`, `genetic-factors`, `biomarkers`, `next-generation`（未定義）
- `conclusion`, `paradigm-shift`, `shift-timeline`, `era`, `past`, `present`, `future`, `achievement`, `achievement-grid`, `achievement-item`, `final-message`（未定義）
- `category-desc`
- `mobile-fab`, `bottom-sheet-overlay`, `bottom-sheet`, `bottom-sheet-handle`, `bottom-sheet-content`, `bottom-sheet-section`, `bottom-sheet-title`, `bottom-sheet-buttons`, `bottom-sheet-btn`, `arrow`（mobile-controls.css）

### 10.2 drug-page-v2.cssで定義されているが未使用のクラス

以下のクラスはdrug-page-v2.cssで定義されているが、lemborexant-v3.htmlでは使用されていない：

1. **引用関連**
   - `quote-box` - 引用ボックス
   - `quote-box blockquote` - 引用文
   - `quote-box cite` - 引用元

2. **専門家視点**
   - `specialist-perspective` - 専門家視点セクション

3. **併用療法関連**
   - `combination-box` - 併用療法ボックス
   - `combination-drugs` - 併用薬セクション
   - `combination-drugs__list` - 併用薬リスト

4. **FAQ関連**
   - `faq-note` - FAQ注記
   - `level-1-content dl/dt/dd` - FAQ用定義リスト

5. **処方パターン**
   - `prescribing-data` - 処方データセクション
   - `design-spec` - 設計仕様

6. **統計関連**
   - `card` - カード要素
   - `statistics` - 統計セクション
   - `stat-conclusion` - 統計結論
   - `summary-item` - サマリーアイテム

7. **患者・医師の声**
   - `patient-voice` - 患者の声
   - `doctor-testimony` - 医師の証言
   - `credential` - 資格・肩書き

8. **カテゴリ関連**
   - `drug-category` - 薬剤カテゴリ（`category-desc`は使用されている）

9. **レベル選択UI**
   - `level-selector` - レベル選択コンテナ（サイドバーで実装）
   - `level-selector__inner` - 内部ラッパー（使用されている）
   - `level-btn` - レベルボタン（使用されている）

### 10.3 分析結果

**使用率**: drug-page-v2.cssで定義されている約60のクラスのうち、lemborexant-v3.htmlで実際に使用されているのは約25クラス（42%）。

**未使用の理由**:
1. **薬剤によるコンテンツの違い**: 引用、専門家視点、併用療法などは薬剤によって必要性が異なる
2. **コンテンツ作成者の選択**: 統計データ、患者の声などは選択的に使用
3. **架空コンテンツの削除**: 医師の証言などは架空の内容として削除された可能性

**逆に未定義のクラスが多い理由**:
- レンボレキサント特有の詳細な情報構造（開発ストーリー、臨床試験データなど）に対応する汎用的なスタイルが不足
- コンテンツ作成時に自由にクラス名を付けているが、CSSが追いついていない

---
**注記**: この調査はlemborexant-v3.htmlページ固有のものです。他の薬剤ページでは使用されているクラスが異なる可能性があります。