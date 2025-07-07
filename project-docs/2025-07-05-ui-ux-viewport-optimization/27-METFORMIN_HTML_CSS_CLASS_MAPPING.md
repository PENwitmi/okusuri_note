# metformin-refined.html クラス名・使用箇所・CSS定義場所マッピング

**作成日時**: 2025-07-07 16:00  
**更新日時**: 2025-07-07 16:40  
**作成者**: CEO  
**目的**: metformin-refined.htmlで使用されているすべてのHTMLクラスをCSS定義場所と対応付け

## 読み込まれているCSSファイル（link要素）
- style.css
- responsive-unified.css
- sidebar.css
- mobile-controls.css
- level-selector.css
- drug-page-v2.css

## クラス名マッピング（アルファベット順）

### A

- **active**
  - ①クラス名: active
  - ②使用箇所: 
    - line 21: `<button class="level-btn active" data-level="1">` - レベル1ボタンのアクティブ状態
    - line 82: `<button class="bottom-sheet-btn active" data-level="1">` - ボトムシート内レベル1ボタン
  - ③定義場所: 
    - drug-page-v2.css (line 285-289) - レベルボタン用
    - sidebar.css (line 82-85) - サイドバーリンク用
    - mobile-controls.css (line 161-165) - ボトムシートボタン用

- **arrow**
  - ①クラス名: arrow
  - ②使用箇所: 
    - line 915, 919, 923, 934, 938, 942, 952, 956: `<span class="arrow">→</span>` - ボトムシート内矢印アイコン
  - ③定義場所: mobile-controls.css (line 173-181) - ボトムシートボタン内の矢印スタイル

### B

- **bottom-sheet**
  - ①クラス名: bottom-sheet
  - ②使用箇所: line 906: `<div class="bottom-sheet">` - ボトムシート本体
  - ③定義場所: mobile-controls.css (line 69-87) - ボトムシート本体スタイル

- **bottom-sheet-btn**
  - ①クラス名: bottom-sheet-btn
  - ②使用箇所: 
    - line 913, 917, 921: レベル選択ボタン（data-level属性付き）
    - line 932, 936, 940, 950, 954: 関連薬剤・カテゴリへのリンクボタン
  - ③定義場所: mobile-controls.css (line 138-165) - ボトムシート内ボタンスタイル

- **bottom-sheet-buttons**
  - ①クラス名: bottom-sheet-buttons
  - ②使用箇所: line 912, 931, 949: ボトムシート内ボタングループコンテナ
  - ③定義場所: mobile-controls.css (line 132-136) - ボタンリストのフレックスレイアウト

- **bottom-sheet-content**
  - ①クラス名: bottom-sheet-content
  - ②使用箇所: line 908: `<div class="bottom-sheet-content">` - ボトムシート内コンテンツ領域
  - ③定義場所: mobile-controls.css (line 105-107) - コンテンツパディング設定

- **bottom-sheet-handle**
  - ①クラス名: bottom-sheet-handle
  - ②使用箇所: line 907: `<div class="bottom-sheet-handle" onclick="toggleBottomSheet()">` - ドラッグハンドル
  - ③定義場所: mobile-controls.css (line 90-102) - ハンドルのビジュアルデザイン

- **bottom-sheet-overlay**
  - ①クラス名: bottom-sheet-overlay
  - ②使用箇所: line 904: `<div class="bottom-sheet-overlay" onclick="toggleBottomSheet()">` - 背景オーバーレイ
  - ③定義場所: mobile-controls.css (line 49-66) - オーバーレイの半透明背景

- **bottom-sheet-section**
  - ①クラス名: bottom-sheet-section
  - ②使用箇所: line 910, 929, 947: ボトムシート内のセクション区切り
  - ③定義場所: mobile-controls.css (line 110-119) - セクション間のマージンとボーダー

- **bottom-sheet-title**
  - ①クラス名: bottom-sheet-title
  - ②使用箇所: line 911, 930, 948: ボトムシート内セクションタイトル
  - ③定義場所: mobile-controls.css (line 121-129) - セクションタイトルのスタイル

- **brand-name**
  - ①クラス名: brand-name
  - ②使用箇所: line 67: `<h1 class="brand-name">メトグルコ®</h1>` - 商品名
  - ③定義場所: drug-page-v2.css (line 46-51) - 商品名の大きなフォントスタイル

### C

- **card**
  - ①クラス名: card
  - ②使用箇所: line 244: `<section class="card level-2-content">` - レベル2コンテンツカード
  - ③定義場所: drug-page-v2.css (line 728-740) - カード要素の基本スタイル

- **category-desc**
  - ①クラス名: category-desc
  - ②使用箇所: 
    - line 52: `<span class="category-desc">糖尿病・甲状腺等</span>`
    - line 56: `<span class="category-desc">血糖管理薬一覧</span>`
  - ③定義場所: drug-page-v2.css (line 1002-1007) - テキスト表示スタイル（2025-07-07追加）

- **combination-drugs**
  - ①クラス名: combination-drugs
  - ②使用箇所: line 162: `<div class="combination-drugs">` - 併用薬セクション
  - ③定義場所: drug-page-v2.css (line 336-347) - 併用薬セクションの背景・パディング

- **combination-drugs__list**
  - ①クラス名: combination-drugs__list
  - ②使用箇所: line 164: `<ol class="combination-drugs__list">` - 併用薬リスト
  - ③定義場所: drug-page-v2.css (line 350-370) - 番号付きリストのカスタムスタイル

- **container**
  - ①クラス名: container
  - ②使用箇所: 
    - line 92: 30秒サマリー内
    - line 122: 薬学生FAQ内
    - line 143: 処方パターン内
  - ③定義場所: drug-page-v2.css (line 598-602) - 中央寄せとパディング設定

- **credential**
  - ①クラス名: credential
  - ②使用箇所: line 514: `<span class="credential">日本糖尿病学会専門医</span>` - 資格表示
  - ③定義場所: drug-page-v2.css (line 994-999) - 資格表示スタイル（2025-07-07追加）

### D

- **design-spec**
  - ①クラス名: design-spec
  - ②使用箇所: line 147, 155: 処方例の表示ボックス
  - ③定義場所: drug-page-v2.css (line 421-430) - モノスペースフォントの処方表示

- **doctor-testimony**
  - ①クラス名: doctor-testimony
  - ②使用箇所: line 512: `<div class="doctor-testimony">` - 医師の証言セクション
  - ③定義場所: drug-page-v2.css (line 975-983, 989-992) - 医師証言用スタイル（2025-07-07追加）

- **drug-category**
  - ①クラス名: drug-category
  - ②使用箇所: 
    - line 33: `<span class="drug-category">SGLT2阻害薬</span>`
    - line 37: `<span class="drug-category">DPP-4阻害薬</span>`
    - line 41: `<span class="drug-category">持効型インスリン</span>`
  - ③定義場所: drug-page-v2.css (line 1002-1007) - テキスト表示スタイル（2025-07-07追加）

- **drug-class**
  - ①クラス名: drug-class
  - ②使用箇所: line 72: `<span class="drug-class" data-category="endocrine">` - 薬効群表示
  - ③定義場所: drug-page-v2.css (line 69-77) - 薬効群のバッジスタイル

- **drug-classification**
  - ①クラス名: drug-classification
  - ②使用箇所: line 71: `<div class="drug-classification">` - 薬剤分類コンテナ
  - ③定義場所: drug-page-v2.css (line 61-66) - 分類表示のフレックスレイアウト

- **drug-detail**
  - ①クラス名: drug-detail
  - ②使用箇所: line 14: `<body class="drug-detail" data-category="endocrine">` - body要素
  - ③定義場所: drug-page-v2.css (line 243-246) - 薬剤詳細ページのルート設定

- **drug-header**
  - ①クラス名: drug-header
  - ②使用箇所: line 66: `<div class="drug-header">` - 薬剤ヘッダー領域
  - ③定義場所: drug-page-v2.css (line 35-43) - グラデーション背景とパディング

### F

- **faq-note**
  - ①クラス名: faq-note
  - ②使用箇所: line 135: `<div class="faq-note">` - FAQ注記ボックス
  - ③定義場所: drug-page-v2.css (line 373-382) - 注記ボックスのスタイル

### G

- **generation**
  - ①クラス名: generation
  - ②使用箇所: line 77: `<span class="generation">第一選択薬</span>` - 世代・特徴表示
  - ③定義場所: drug-page-v2.css (line 80-84) - 世代情報のテキストスタイル

- **generic-name**
  - ①クラス名: generic-name
  - ②使用箇所: line 68: `<p class="generic-name">メトホルミン塩酸塩</p>` - 一般名
  - ③定義場所: drug-page-v2.css (line 54-58) - 一般名のサブタイトルスタイル

### I

- **impact-grid**
  - ①クラス名: impact-grid
  - ②使用箇所: line 95, 181: インパクトアイテムのグリッドコンテナ
  - ③定義場所: drug-page-v2.css (line 128-133) - レスポンシブグリッドレイアウト

- **impact-item**
  - ①クラス名: impact-item
  - ②使用箇所: line 96, 107, 112, 182, 191, 211, 221, 231: 個別インパクトカード
  - ③定義場所: drug-page-v2.css (line 136-155) - カードのホバー効果とスタイル

- **indications**
  - ①クラス名: indications
  - ②使用箇所: line 80: `<div class="indications">` - 適応症セクション
  - ③定義場所: drug-page-v2.css (line 303-308) - 適応症セクションの背景

- **indications__list**
  - ①クラス名: indications__list
  - ②使用箇所: line 82: `<ul class="indications__list">` - 適応症リスト
  - ③定義場所: drug-page-v2.css (line 317-333) - リストアイテムのカスタムマーカー

### L

- **level-1-content**
  - ①クラス名: level-1-content
  - ②使用箇所: line 65, 91, 121, 140, 174, 209: レベル1（薬学生向け）コンテンツ
  - ③定義場所: drug-page-v2.css (line 162-181) - 薬学生向けの読みやすいスタイル

- **level-2-content**
  - ①クラス名: level-2-content
  - ②使用箇所: line 244, 271, 370, 416, 532: レベル2（実習中）コンテンツ
  - ③定義場所: drug-page-v2.css (line 183-209, 初期非表示 line 25-28) - 実習向けスタイル

- **level-3-content**
  - ①クラス名: level-3-content
  - ②使用箇所: line 433, 482, 561, 610, 659, 757, 805: レベル3（研修中）コンテンツ
  - ③定義場所: drug-page-v2.css (line 212-236, 初期非表示 line 25-28) - 研修向けスタイル

- **level-btn**
  - ①クラス名: level-btn
  - ②使用箇所: line 21-23: サイドバー内レベルセレクターボタン
  - ③定義場所: drug-page-v2.css (line 268-289) - レベル選択ボタンのスタイル

- **level-hint**
  - ①クラス名: level-hint
  - ②使用箇所: line 126: `<span class="level-hint">（詳しくは研修編で）</span>` - レベルヒント
  - ③定義場所: drug-page-v2.css (line 292-296) - ヒントテキストのスタイル

- **level-selector**
  - ①クラス名: level-selector
  - ②使用箇所: line 18: `<div class="sidebar-section level-selector">` - レベルセレクターセクション
  - ③定義場所: drug-page-v2.css (line 249-256) - レベルセレクターコンテナ

- **level-selector__inner**
  - ①クラス名: level-selector__inner
  - ②使用箇所: line 20: `<div class="level-selector__inner">` - セレクター内部ラッパー
  - ③定義場所: drug-page-v2.css (line 259-265) - ボタン配置用フレックスコンテナ

### M

- **main-content**
  - ①クラス名: main-content
  - ②使用箇所: line 62: `<main class="main-content">` - メインコンテンツエリア
  - ③定義場所: sidebar.css (line 88-92) - メインコンテンツのレイアウト調整

- **mobile-fab**
  - ①クラス名: mobile-fab
  - ②使用箇所: line 902: `<button class="mobile-fab" onclick="toggleBottomSheet()">` - フローティングボタン
  - ③定義場所: mobile-controls.css (line 10-39) - フローティングアクションボタン

### P

- **patient-voice**
  - ①クラス名: patient-voice
  - ②使用箇所: line 502: `<div class="patient-voice">` - 患者の声セクション
  - ③定義場所: drug-page-v2.css (line 975-983, 985-987) - 患者の声用スタイル（2025-07-07追加）

- **prescribing-data**
  - ①クラス名: prescribing-data
  - ②使用箇所: line 146, 154: 処方データセクション
  - ③定義場所: drug-page-v2.css (line 413-419) - 処方パターンの背景スタイル

### Q

- **quick-summary**
  - ①クラス名: quick-summary
  - ②使用箇所: line 91: `<section class="quick-summary level-1-content">` - 30秒サマリー
  - ③定義場所: drug-page-v2.css (line 91-104) - サマリーセクションのスタイル

- **quote-box**
  - ①クラス名: quote-box
  - ②使用箇所: line 176: `<div class="quote-box">` - 引用ボックス
  - ③定義場所: drug-page-v2.css (line 107-115) - 引用ボックスのデザイン

### S

- **sidebar**
  - ①クラス名: sidebar
  - ②使用箇所: line 16: `<aside class="sidebar">` - サイドバー本体
  - ③定義場所: sidebar.css (line 30-40) - サイドバーの固定配置とスタイル

- **sidebar-layout**
  - ①クラス名: sidebar-layout
  - ②使用箇所: line 15: `<div class="sidebar-layout">` - サイドバーレイアウトコンテナ
  - ③定義場所: sidebar.css (line 19-27) - グリッドレイアウト設定

- **sidebar-link**
  - ①クラス名: sidebar-link
  - ②使用箇所: line 31, 35, 39, 50, 54: サイドバー内のリンク
  - ③定義場所: sidebar.css (line 65-85) - リンクのホバー効果とスタイル

- **sidebar-links**
  - ①クラス名: sidebar-links
  - ②使用箇所: line 30, 49: サイドバーリンクグループコンテナ
  - ③定義場所: sidebar.css (line 110-114) - リンクグループコンテナスタイル（2025-07-07追加）

- **sidebar-section**
  - ①クラス名: sidebar-section
  - ②使用箇所: line 18, 28, 46: サイドバー内セクション
  - ③定義場所: sidebar.css (line 43-52) - セクション間のマージンとボーダー

- **sidebar-title**
  - ①クラス名: sidebar-title
  - ②使用箇所: line 19, 29, 48: サイドバーセクションタイトル
  - ③定義場所: sidebar.css (line 54-62) - セクションタイトルのスタイル

- **specialist-perspective**
  - ①クラス名: specialist-perspective
  - ②使用箇所: line 174: `<div class="specialist-perspective level-1-content">` - 専門家視点セクション
  - ③定義場所: drug-page-v2.css (line 118-125) - 専門家視点の背景デザイン

- **stat-conclusion**
  - ①クラス名: stat-conclusion
  - ②使用箇所: line 202: `<div class="stat-conclusion">` - 統計結論
  - ③定義場所: drug-page-v2.css (line 775-783) - 統計結論のスタイル

- **statistics**
  - ①クラス名: statistics
  - ②使用箇所: line 458: 統計表示セクション（HTMLには見当たらないが、CSSには定義あり）
  - ③定義場所: drug-page-v2.css (line 743-772) - 統計セクションのフレックスレイアウト

- **summary-item**
  - ①クラス名: summary-item
  - ②使用箇所: line 101: `<div class="summary-item">` - サマリーアイテム
  - ③定義場所: drug-page-v2.css (line 787-799) - サマリーアイテムのカードスタイル

## ~~未定義クラスのまとめ~~ → ✅ 2025-07-07に定義追加完了

~~以下の3つのクラスは、HTMLで使用されているが、読み込まれているCSSファイルのどこにも定義されていない：~~

1. **sidebar-links** - ✅ sidebar.css (line 110-114) に定義追加完了
2. **drug-category** - ✅ drug-page-v2.css (line 1002-1007) に定義追加完了
3. **category-desc** - ✅ drug-page-v2.css (line 1002-1007) に定義追加完了

## 新規追加クラス（2025-07-07）

薬剤ページデザイン洗練計画により、以下のクラスが新規追加されました：

### patient-voice
- ①クラス名: patient-voice
- ②使用箇所: line 502（患者の声セクション）
- ③定義場所: drug-page-v2.css (line 975-983, 985-987)
- ④用途: 患者の声セクション用スタイル（pharma-natureボーダー）

### doctor-testimony  
- ①クラス名: doctor-testimony
- ②使用箇所: line 512（医師の証言セクション）
- ③定義場所: drug-page-v2.css (line 975-983, 989-992)
- ④用途: 医師証言セクション用スタイル（pharma-primaryボーダー、グラデーション背景）

### credential
- ①クラス名: credential
- ②使用箇所: line 514（資格表示）
- ③定義場所: drug-page-v2.css (line 994-999)
- ④用途: 医師の資格表示用スタイル

## CSSで定義されているがHTMLで使用されていないクラス

drug-page-v2.cssで定義されているが、metformin-refined.htmlでは使用されていないクラス：

### 完全に未使用のクラス

- **statistics**
  - ①定義場所: drug-page-v2.css (line 743-752)
  - ②用途: 統計表示セクションのフレックスレイアウト
  - ③備考: 統計データを表示する際に使用される想定だが、metforminページには統計セクションなし

### カテゴリ別テーマ（他の薬剤カテゴリ用）

metformin-refined.htmlは`data-category="endocrine"`（内分泌系）なので、以下のカテゴリ用スタイルは定義されているが使用されていない：

- **drug-detail[data-category="cardiovascular"] .drug-class**
  - ①定義場所: drug-page-v2.css (line 634-637)
  - ②用途: 循環器系薬剤の薬効群表示（赤色背景）
  - ③備考: atorvastatin, bisoprolol等の循環器系薬剤で使用

- **drug-detail[data-category="cns"] .drug-class**
  - ①定義場所: drug-page-v2.css (line 640-643)
  - ②用途: 中枢神経系薬剤の薬効群表示（紫色背景）
  - ③備考: risperidone, quetiapine等の中枢神経系薬剤で使用

### 要素セレクタ・疑似クラス（HTMLでの使用状況）

以下は厳密にはクラスではないが、CSSで定義されている要素セレクタや疑似クラス：

#### HTMLで実際に使用されている要素セレクタ

- **h2要素** - line 93, 245, 434, 484, 562, 662, 760で使用
  - 定義: `.quick-summary h2`, `.level-2-content h2`, `.level-3-content h2`など
- **h3要素** - line 81, 123, 144, 275, 306, 333, 374, 395, 417, 489, 503, 519, 533, 613, 664, 761, 862で使用
  - 定義: `.indications h3`, `.level-1-content h3`など多数
- **h4要素** - line 97, 103, 108, 113, 163, 175, 248, 252, 256, 260, 264, 276, 283, 310, 318, 343, 376, 400, 404, 489, 491, 569, 667, 699, 839, 864, 875で使用
  - 定義: `.impact-item h4`, `.combination-drugs h4`, `.level-2-content h4`など
- **h5要素** - line 177, 280, 290, 315, 346, 354, 573, 583, 620, 630, 636, 709, 720, 731, 810, 821, 831, 841, 878, 883で使用
  - 定義: `.level-2-content h5`, `.level-3-content h5`
- **h6要素** - line 183, 192, 286, 346, 588, 593, 711, 716で使用
  - 定義: `.level-2-content h6`, `.level-3-content h6`
- **dl/dt/dd要素** - line 124-133（FAQセクション）で使用
  - 定義: `.level-1-content dl`, `.level-1-content dt`, `.level-1-content dd`
- **blockquote要素** - line 493-498, 506-511（医師・患者の証言）で使用
  - 定義: `.level-3-content blockquote`
- **cite要素** - line 499, 512（引用元）で使用
  - 定義: `.level-3-content cite`
- **strong要素** - 多数使用（line 136, 165, 166, 167, 203, 213, 224, 236など）
  - 定義: `.level-2-content strong`, `.level-3-content strong`
- **p要素** - 多数使用（全体的に段落として使用）
  - 定義: `.level-2-content p`, `.level-3-content p`
- **ul/li要素** - line 82-86, 184-189, 193-198, 214-218, 225-229, 235-239など多数
  - 定義: `.level-2-content ul`, `.level-3-content ul`など
- **ol/li要素** - line 164-168（併用薬リスト）で使用
  - 定義: `.combination-drugs__list li`
- **span要素** - line 33, 37, 41, 52, 56, 72, 77, 126, 439-440, 443-444, 460-479, 489, 518など多数
  - 定義: `.level-3-content span`

#### CSSで定義されているが対応する要素がHTMLにない

- なし（すべての要素セレクタは実際に使用されている）

#### 疑似クラス・疑似要素（自動適用）

- **:hover** - マウスオーバー時に自動適用（ボタン、リンク、カード等）
- **:focus** - フォーカス時に自動適用（ボタン、リンク等）
- **:before/:after** - CSS側で自動生成される装飾要素
- **:first-child/:last-child** - 該当する要素に自動適用
- **nth-child(even/odd)** - セクションの背景色交互表示に使用

## まとめ

### HTMLで使用されているが未定義：3クラス
- sidebar-links
- drug-category  
- category-desc

### CSSで定義されているが未使用：1クラス
- statistics

### 他カテゴリ用で未使用：2パターン
- cardiovascular（循環器系）用スタイル
- cns（中枢神経系）用スタイル

これらの未使用クラスは、他の薬剤ページで使用される可能性が高いため、削除せずに保持することを推奨します。