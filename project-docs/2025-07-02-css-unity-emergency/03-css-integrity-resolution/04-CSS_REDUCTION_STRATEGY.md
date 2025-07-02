# CSS削減・共通化戦略ドキュメント

**作成日時**: 2025-07-02 23:33  
**作成者**: CEO  
**目的**: 637個のCSSクラスを合理的な数に削減し、保守可能な設計を実現  
**重要度**: 最高（根本的な設計見直し）

---

## 📌 エグゼクティブサマリー

### 現状の問題
- **3つのHTMLページに637個のユニーククラス**は明らかに過剰
- 実質同じ機能に薬剤ごとの個別クラス
- 91%が未使用または未定義という異常事態

### 提案する解決策
1. **共通クラスの最大活用**（推定80%削減可能）
2. **@importの再評価と適切な使用**
3. **薬剤固有スタイルの完全排除**
4. **1薬剤完成→他薬剤展開**の効率的アプローチ

### 期待される成果
- **637個 → 約50-60個**（92%削減）
- 保守性の劇的向上
- 300薬剤展開時も50-60個で維持

### より現実的なクラス構成
```
構造系: 10個（container、section、card等）
レイアウト: 10個（grid、flex、spacing等）  
タイポグラフィ: 8個（見出し、本文、注釈等）
コンポーネント: 15個（ボタン、バッジ、アラート等）
ユーティリティ: 10個（表示/非表示、色、影等）
合計: 約53個
```

---

## 🔍 現状分析：なぜ637個も必要なのか？

### 1. 薬剤固有クラスの乱立
```
メトホルミン専用：
- ampk-effects
- microbiome-changes
- glucose-lowering

テルミサルタン専用：
- at1-pathway
- cardiovascular-protection
- blood-pressure-control

ロスバスタチン専用：
- ldl-reduction
- pleiotropic-effects
- statin-comparison
```

**問題**: これらは本質的に「薬理作用」「臨床効果」「比較」という共通概念

### 2. 過度な細分化
```
同じ警告表示なのに：
- warning-note
- caution
- caution-box
- danger
- contraindication-box
- drug-interaction-alert
- side-effect-warning
```

**解決**: `warning`クラス + 修飾子（`warning--severe`）で統一可能

### 3. 構造の重複
```
各薬剤で別々に定義：
- metformin-header vs telmisartan-header vs rosuvastatin-header
- basic-info-metformin vs basic-info-telmisartan
```

**解決**: 共通の`drug-header`、`basic-info`で十分

---

## 🎯 削減戦略：80%削減への道

### Phase 1: 共通化可能なクラスの特定

#### 1. 構造系（約50個 → 10個）
```css
/* 現状 */
.metformin-container, .telmisartan-container, .rosuvastatin-container
.drug-header-metformin, .drug-header-telmisartan
.section-cardiovascular, .section-endocrine, .section-lipid

/* 共通化後 */
.drug-container
.drug-header
.content-section
```

#### 2. 機能系（約150個 → 30個）
```css
/* 現状：薬剤ごとの機能 */
.ace-arb-comparison
.statin-comparison
.dpp4-comparison

/* 共通化後 */
.drug-comparison
.drug-comparison--primary /* 主要な比較 */
.drug-comparison--secondary /* 副次的な比較 */
```

#### 3. 表示系（約200個 → 40個）
```css
/* 現状：細かすぎる分類 */
.timeline-item-discovery
.timeline-item-clinical
.timeline-item-approval
.timeline-item-adoption

/* 共通化後 */
.timeline-item
.timeline-item--highlighted /* 重要なイベント */
```

#### 4. 学習系（約100個 → 20個）
```css
/* 現状：レベルごと×機能ごと */
.beginner-quiz-metformin
.intermediate-case-telmisartan
.advanced-evidence-rosuvastatin

/* 共通化後 */
.learning-content[data-level="1"]
.learning-content[data-level="2"]
.learning-content[data-level="3"]
```

### Phase 2: 薬効群表示の最小化

#### 薬効群識別の方針
- **bodyテーマクラス廃止**: endo-theme、cardio-themeなどは削除
- **バッジレベルでのみ色分け**: drug-class-badgeでのみ薬効群を視覚化
- **過度な色分けを避ける**: 学習の妨げにならない最小限の実装

```css
/* バッジの色分けのみ（CSS変数で制御） */
.drug-class-badge {
    background-color: var(--badge-bg, #f0f0f0);
    color: var(--badge-color, #333);
}

/* HTMLでdata属性として指定 */
/* <span class="drug-class-badge" style="--badge-bg: var(--category-endocrine);"> */
```

---

## 🔧 @importの再評価

### 現在の状況
```css
/* ver2-unified.css */
/* 緊急修正: 2025-07-02 16:20 @import問題解決のための完全自己完結化 */
```

### @importが削除された理由（推測）
1. **パフォーマンス懸念**？
   - 実際は3-4ファイル程度なら問題なし
   
2. **GitHub Pages対応**？
   - 相対パスで問題なく動作するはず

3. **ビルドプロセスの問題**？
   - 静的サイトなので関係なし

### @import復活の提案
```css
/* ver2-unified.css */
@import url("../style.css");          /* 基本スタイル（既存） */
@import url("../drug-detail.css");    /* 薬剤詳細（既存） */

/* Ver2共通スタイル */
.drug-container { ... }
.clinical-study { ... }
.warning { ... }

/* 薬効群レベルの差別化のみ */
[data-category="diabetes"] { ... }
```

**メリット**:
- 既存資産の活用
- ファイルサイズの最適化
- 保守性の向上

---

## 📊 実装計画：1薬剤完成戦略

### Step 1: メトホルミンページでプロトタイプ作成

#### 1.1 HTML内のクラス整理（2時間）
```html
<!-- Before -->
<div class="metformin-header ampk-effects glucose-lowering">

<!-- After -->
<div class="drug-header" data-drug="metformin" data-category="diabetes">
```

#### 1.2 共通CSSの作成（3時間）
```css
/* ver2-unified.css内に統合 */
.drug-header { ... }
.drug-info { ... }
.clinical-data { ... }
.warning { ... }
.timeline { ... }
/* 約50-60個の共通クラス */
```

### Step 2: 他の2薬剤への展開（各1時間）

#### テルミサルタン
- HTML内のクラスを共通クラスに置換
- 薬効群は`data-category="cardiovascular"`で対応
- 追加CSS：0個（既存の薬効群スタイルを使用）

#### ロスバスタチン  
- 同様の置換作業
- 薬効群は`data-category="lipid"`で対応
- 追加CSS：0個（既存の薬効群スタイルを使用）

### Step 3: 検証と最適化（2時間）
- 3薬剤での表示確認
- 不要なCSSの削除
- ドキュメント作成

---

## 📈 期待される成果

### 数値目標
```
現状：
- HTMLで使用: 637個
- 実際に必要: 約50-60個（全て共通クラス）
- 削減率: 92%
```

### 品質向上
1. **保守性**: 1箇所の修正で全薬剤に反映
2. **拡張性**: 新薬剤追加時のCSS追加は不要（既存の薬効群を使用）
3. **可読性**: 意味的に明確なクラス名

### 300薬剤展開時の予測
```
共通CSS: 50-60個（変わらず）
薬効群CSS: 0個（バッジ色のみCSS変数で対応）
薬剤固有: 0個（完全排除）
合計: 50-60個（現在の637個の92%削減！）
```

---

## 🚀 実装順序（推奨）

### 即座に実施（Day 1）
1. **@import使用可否の最終確認**
   - 技術的制約の有無
   - 使用可能なら既存CSS活用

2. **メトホルミンHTMLのクラス整理**
   - 共通化可能なクラスのリストアップ
   - 薬剤固有の必要最小限の特定

### 短期実施（Day 2-3）
3. **共通CSS（ver2-common.css）作成**
   - 約50-60個の共通クラス定義
   - 既存CSSからの流用最大化

4. **メトホルミン完全対応**
   - HTML修正
   - bodyテーマクラス削除
   - 薬剤固有クラスの汎用化

### 中期実施（Day 4-5）
5. **他2薬剤への展開**
   - テルミサルタン対応
   - ロスバスタチン対応

6. **最終検証と文書化**
   - 3薬剤での動作確認
   - 実装ガイドライン作成

---

## 📝 重要な設計原則

### 1. セマンティックな命名
```css
/* Bad */
.blue-box, .style-1, .mt-20

/* Good */
.drug-info, .warning--severe, .section--clinical
```

### 2. BEM + データ属性の活用
```html
<div class="drug-comparison" data-drugs="ace,arb">
    <div class="drug-comparison__item">...</div>
</div>
```

### 3. CSS変数による薬効群カスタマイズ
```css
.drug-container {
    background: var(--theme-color, var(--bg-default));
}

/* 薬剤別ではなく薬効群別 */
[data-category="diabetes"] {
    --theme-color: var(--category-endocrine);
}
```

---

## 🎯 成功基準

1. **短期（1週間）**
   - メトホルミンページ：共通CSS 50-60個のみ
   - 表示品質：現状維持以上

2. **中期（2週間）**
   - 3薬剤すべて：共通CSSのみ（薬効群・薬剤固有なし）
   - 総CSS数：50-60個以内（92%削減）

3. **長期（1ヶ月）**
   - 新薬剤追加プロセス：1時間以内
   - ドキュメント完備

---

## 🏁 結論

637個のCSSクラスは明らかに過剰設計です。共通化により92%削減（約50-60個）が現実的に達成可能です。

**推奨アプローチ**:
1. @importの活用を再検討
2. 共通クラスを最大限活用
3. 薬剤固有スタイルの完全排除
4. 1薬剤で完成させて展開

これにより、保守可能で拡張性の高い薬学教育プラットフォームの基盤が確立されます。

---

**文書作成完了**: 2025-07-02 23:33  
**次のアクション**: @import使用可否の確認と実装開始