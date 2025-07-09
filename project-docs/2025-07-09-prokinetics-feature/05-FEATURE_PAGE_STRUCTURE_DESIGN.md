# 消化管運動改善薬特集ページ構成設計

## ページ概要
- **ファイル名**: prokinetics-complete-guide.html
- **推定行数**: 850-950行
- **使用CSS**: feature-page.css（既存）
- **特徴**: 2025年ガイドライン改訂を軸とした包括的解説

## 全体構成

### ヘッダーセクション
```html
<!-- ページタイトルとサブタイトル -->
<h1>消化管運動改善薬 完全マスターガイド</h1>
<p class="subtitle">メトクロプラミド vs ドンペリドン - 2025年妊婦解禁の衝撃と使い分けの極意</p>

<!-- キービジュアル -->
<div class="hero-visual">
  - 両剤の分子構造比較図
  - 「50年ぶりの大転換」のインパクトあるテキスト
</div>
```

### 導入セクション（つかみ）
```html
<section class="introduction">
  <div class="impact-statement">
    「2025年1月、医療界に衝撃が走った。
    50年以上「妊婦禁忌」とされてきた消化管運動改善薬が、
    ついに使用可能となったのだ。」
  </div>
  
  <div class="key-points">
    ✓ なぜ今、歴史的転換が起きたのか
    ✓ メトクロプラミドとドンペリドン、どう使い分ける？
    ✓ 2025年ガイドラインが示す新たな治療戦略
  </div>
</section>
```

## メインコンテンツ構成

### 1. 基礎編：薬剤プロフィール比較

#### 1.1 ひと目でわかる比較表
```html
<div class="comparison-table-container">
  <table class="drug-comparison">
    - 一般名/商品名
    - 開発年/開発国
    - 作用機序
    - 中枢移行性
    - 主な適応
    - 特徴的な副作用
    - 2025年の位置づけ
  </table>
</div>
```

#### 1.2 作用機序の可視化
```html
<div class="mechanism-visual">
  <div class="metoclopramide-mechanism">
    - 脳と消化管の両方に作用（図解）
    - D2受容体 + 5-HT4受容体
  </div>
  <div class="domperidone-mechanism">
    - 末梢のみに作用（図解）
    - 血液脳関門を通過しない
  </div>
</div>
```

### 2. 臨床編：使い分けマスター

#### 2.1 疾患別選択ガイド
```html
<div class="disease-selection-guide">
  <div class="acute-conditions">
    <h3>急性期疾患</h3>
    - 化学療法時悪心 → メトクロプラミド
    - 術後悪心 → メトクロプラミド
    （理由と処方例付き）
  </div>
  
  <div class="chronic-conditions">
    <h3>慢性疾患</h3>
    - 機能性ディスペプシア → ドンペリドン
    - 糖尿病性胃不全麻痺 → 重症度で選択
  </div>
</div>
```

#### 2.2 患者背景別フローチャート
```html
<div class="selection-flowchart">
  <!-- インタラクティブなフローチャート -->
  - クリックで進む診断ツール
  - 最終的に推奨薬剤を表示
  - 選択理由も明示
</div>
```

### 3. 2025年改訂特集：妊婦使用の新時代

#### 3.1 歴史的転換の解説
```html
<div class="historical-change">
  <div class="timeline-visual">
    1964年 ━━━━━━━━━━ 2024年 ━┃━ 2025年
    50年以上の禁忌時代     革命的解禁
  </div>
  
  <div class="evidence-summary">
    - 40,000例の安全性データ
    - 国際的整合性の達成
    - エビデンスが恐怖に勝った瞬間
  </div>
</div>
```

#### 3.2 妊婦使用の実践ガイド
```html
<div class="pregnancy-guide">
  <div class="step-approach">
    Step 1: ビタミンB6
    Step 2: ドキシラミン追加
    Step 3: メトクロプラミド（NEW!）
    Step 4: ドンペリドン（代替）
  </div>
  
  <div class="safety-data">
    - 最新エビデンスの詳細
    - インフォームドコンセントのポイント
  </div>
</div>
```

### 4. 開発物語：偶然から生まれた必然

#### 4.1 メトクロプラミド物語
```html
<div class="metoclopramide-story">
  <div class="story-card">
    <h4>1964年 フランス</h4>
    「精神薬の副作用から着想を得て...」
    - Dr. Justin-Besançonの挑戦
    - 二重作用の発見
  </div>
</div>
```

#### 4.2 ドンペリドン物語
```html
<div class="domperidone-story">
  <div class="story-card">
    <h4>1974年 ベルギー</h4>
    「より安全な薬を求めて...」
    - Janssen博士チームの改良
    - 末梢選択性の実現
  </div>
</div>
```

### 5. 実践編：明日から使える知識

#### 5.1 処方例集
```html
<div class="prescription-examples">
  <div class="example-card">
    <h4>化学療法時の悪心</h4>
    Rp) メトクロプラミド注 10mg
        1日3回 点滴静注（化療30分前）
  </div>
  <!-- 複数の処方例 -->
</div>
```

#### 5.2 服薬指導のポイント
```html
<div class="counseling-points">
  <div class="metoclopramide-counseling">
    「食事の30分前に服用してください」
    「手足のふるえがあれば連絡を」
  </div>
  
  <div class="domperidone-counseling">
    「空腹時の服用が効果的です」
    「動悸を感じたら相談を」
  </div>
</div>
```

### 6. 薬物相互作用データベース

#### 6.1 注意すべき併用薬
```html
<div class="interaction-database">
  <div class="cyp3a4-inhibitors">
    <h4>ドンペリドン + CYP3A4阻害薬</h4>
    - 該当薬剤リスト
    - 対処法（メトクロプラミドへ変更）
  </div>
  
  <div class="qt-prolongation">
    <h4>QT延長薬との併用</h4>
    - リスク薬剤一覧
    - モニタリング方法
  </div>
</div>
```

## インタラクティブ要素

### 1. 薬剤選択診断ツール
```javascript
// 質問に答えていくと最適な薬剤を提案
- 患者年齢は？
- 使用期間は？
- 併存疾患は？
→ 推奨：ドンペリドン（理由付き）
```

### 2. 副作用チェッカー
```javascript
// 症状を選択すると対処法を表示
- 錐体外路症状 → 薬剤変更を検討
- QT延長 → 心電図確認
```

### 3. 処方シミュレーター
```javascript
// 患者情報を入力すると処方例を生成
- 年齢、体重、疾患
- 併用薬
→ 個別化した処方提案
```

## ビジュアルデザイン要素

### 1. カラースキーム
```css
/* メトクロプラミド系 */
--metoclopramide-primary: #2E86AB;
--metoclopramide-secondary: #A23B72;

/* ドンペリドン系 */
--domperidone-primary: #F18F01;
--domperidone-secondary: #C73E1D;

/* 2025年改訂 */
--revolution-accent: #FFD700;
```

### 2. アイコンとイラスト
- 脳のアイコン（中枢作用）
- 胃腸のアイコン（末梢作用）
- 妊婦のシルエット（2025年改訂）
- タイムラインの矢印

### 3. レスポンシブ対応
- モバイルでの表示最適化
- タブレットでの2カラム表示
- 印刷用スタイルシート

## まとめセクション

### クイックリファレンス
```html
<div class="quick-reference">
  <h3>30秒でわかる使い分け</h3>
  - 短期・強力 → メトクロプラミド
  - 長期・安全 → ドンペリドン
  - 妊婦 → 2025年から両剤可能！
</div>
```

### 関連リンク
```html
<div class="related-links">
  - 各薬剤の詳細ページへ
  - 2025年ガイドライン全文へ
  - 他の消化器系薬特集へ
</div>
```

この構成設計に基づいて、医療従事者にとって実用的で、かつ2025年の歴史的転換を印象的に伝える特集ページを作成する。