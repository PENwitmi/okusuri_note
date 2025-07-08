# 心不全治療特集ページ構成設計書

**作成日時**: 2025-07-09 00:23

## ページ基本情報

### タイトル
**メインタイトル**: 心不全治療の新時代  
**サブタイトル**: 2025年ガイドラインが示すHFrEFとHFpEFの最新治療戦略

### ファイル名
`heart-failure-treatment-guide.html`

### メタ情報
- **description**: 2025年心不全診療ガイドライン改訂に基づく最新治療戦略。HFrEFの4本柱治療とHFpEFの革新的治療法を体系的に解説。
- **keywords**: 心不全, HFrEF, HFpEF, SGLT2阻害薬, ARNI, MR拮抗薬, 2025年ガイドライン

## ページ構成

### 1. ヒーローセクション
```html
<section class="feature-hero">
  - パンくずリスト
  - メインタイトル「心不全治療の新時代」
  - サブタイトル「2025年ガイドラインが示すHFrEFとHFpEFの最新治療戦略」
  - リード文：ガイドライン改訂の意義と特集の概要
</section>
```

### 2. イントロダクション：心不全の2つの顔
```html
<section class="feature-section">
  - 心不全の分類（HFrEF、HFmrEF、HFpEF）の解説
  - 視覚的な比較表（LVEF、病態、患者像）
  - なぜ分類が重要なのか
  - 2025年ガイドラインの画期性
</section>
```

### 3. HFpEFを理解する
```html
<section class="feature-section understanding-hfpef">
  - 「収縮は正常なのに、なぜ心不全？」の解説
  - 拡張障害のメカニズム（図解）
  - 疫学データ（全心不全の50%）
  - 従来「治療法がない」とされた理由
</section>
```

### 4. 2025年ガイドライン改訂ポイント
```html
<section class="feature-section guideline-update">
  - 改訂の要点カード表示
  - 国際基準への統一
  - HFpEF治療の革命的拡充
  - 肥満合併心不全への新アプローチ
</section>
```

### 5. HFrEFの4本柱治療
```html
<section class="feature-section hfref-treatment">
  - "Fantastic Four"の概念説明
  - 4つの薬剤クラスのカード表示
    - ARNI（エンレスト）
    - β遮断薬（メインテート、アーチスト）
    - MRA（スピロノラクトン、エプレレノン）
    - SGLT2阻害薬（ジャディアンス、フォシーガ）
  - 導入戦略と相乗効果
</section>
```

### 6. HFpEF治療の新展開
```html
<section class="feature-section hfpef-treatment">
  - 治療選択肢の進化（タイムライン表示）
  - SGLT2阻害薬（第一選択）
  - MR拮抗薬（特にフィネレノン）
  - GLP-1受容体作動薬（肥満合併例）
  - 治療アルゴリズムのフローチャート
</section>
```

### 7. 薬剤別詳細解説
```html
<section class="feature-section drug-details">
  各薬剤をdrug-articleで構成：
  
  1. SGLT2阻害薬（共通セクション）
     - エンパグリフロジン
     - ダパグリフロジン
     - なぜ心不全に効くのか
  
  2. ARNI：エンレスト
     - 二重作用のメカニズム
     - PARADIGM-HF試験
     - 投与のポイント
  
  3. MR拮抗薬の進化
     - スピロノラクトン（第1世代）
     - エプレレノン（第2世代）
     - フィネレノン（第4世代）
     
  4. β遮断薬
     - ビソプロロール vs カルベジロール
     - 投与の実際
  
  5. GLP-1受容体作動薬
     - セマグルチド（STEP-HFpEF）
     - 肥満介入の意義
</section>
```

### 8. 臨床試験エビデンス
```html
<section class="feature-section evidence-summary">
  - 主要試験の一覧表
  - タイムラインでの試験の流れ
  - NNTの比較
  - 日本人データの重要性
</section>
```

### 9. 実践的治療アプローチ
```html
<section class="feature-section practical-approach">
  - HFrEF治療フローチャート
  - HFpEF治療フローチャート
  - モニタリングチェックリスト
  - 副作用管理のポイント
</section>
```

### 10. まとめとメッセージ
```html
<section class="feature-section summary">
  - キーメッセージボックス
  - 心不全治療の未来展望
  - 「治療可能な時代」の到来
  - 参考文献リンク
</section>
```

## デザイン要素

### 再利用するCSSクラス
- `feature-hero`, `feature-section`
- `drug-flow`, `drug-article`
- `comparison-table`, `info-grid`
- `warning-box`, `checklist-box`

### 新規追加が必要な要素
1. **心不全分類カード**: HFrEF/HFmrEF/HFpEFの視覚的比較
2. **治療タイムライン**: 歴史的変遷の表示
3. **アルゴリズムフロー**: 治療選択の流れ図
4. **エビデンスレベル表示**: 推奨度の視覚化

### カラースキーム案
```css
/* 心不全タイプ別 */
--hf-hfref: #e74c3c;      /* 赤系 - 重症感 */
--hf-hfmref: #f39c12;     /* オレンジ系 - 中間 */
--hf-hfpef: #3498db;      /* 青系 - 保たれた */

/* 薬剤クラス別 */
--drug-sglt2: #27ae60;    /* 緑 - 新しい希望 */
--drug-arni: #9b59b6;     /* 紫 - 革新的 */
--drug-mra: #3498db;      /* 青 - 伝統的 */
--drug-bb: #34495e;       /* 濃灰 - 基礎的 */
```

## 特徴的なコンテンツ

### インタラクティブ要素
1. **薬剤選択シミュレーター**: 患者背景を入力すると推奨薬剤を表示
2. **用量計算ツール**: 体重・腎機能から適正用量を計算
3. **チェックリスト**: 導入前確認事項の対話的チェック

### 視覚的工夫
1. **Before/After比較**: 治療前後の予後改善を視覚化
2. **円グラフ**: HFpEFの割合、肥満合併率など
3. **アイコン活用**: 各薬剤の特徴を直感的に表現

## 技術仕様

### 必要なファイル
- HTML: `heart-failure-treatment-guide.html`
- CSS: 既存の`feature-page.css`を使用、必要に応じて追加
- 画像: 薬剤写真、図解用SVG

### レスポンシブ対応
- モバイルでの薬剤フロー表示の工夫
- タブレットでの比較表の見やすさ
- 印刷時の最適化

## 制作上の注意点

1. **医学的正確性**: ガイドラインに完全準拠
2. **読みやすさ**: 専門用語の適切な解説
3. **実用性**: 即座に臨床応用できる内容
4. **更新性**: エビデンスの追加に対応しやすい構造

## 期待される成果

- 心不全治療の最新知見を包括的に理解
- HFrEFとHFpEFの治療戦略を明確に区別
- 2025年ガイドラインの要点を効率的に学習
- 実臨床での薬剤選択に直結する知識獲得