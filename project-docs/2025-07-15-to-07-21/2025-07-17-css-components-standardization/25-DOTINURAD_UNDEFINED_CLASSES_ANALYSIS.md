# dotinurad.html 未定義クラス分析レポート

**作成日時**: 2025-07-17 23:50  
**対象ファイル**: `/docs/drugs/dotinurad.html`  
**目的**: 真のKPI「未定義クラス使用率0%」の達成状況確認

## 1. 重要な指摘

**KPIの定義**:
- ❌ 間違った指標: components.css使用箇所数
- ✅ 正しいKPI: **未定義クラスの使用率を0%にする**

## 2. dotinurad.htmlで使用されているクラス一覧（78個）

### 2.1 確実に定義されているクラス
#### components.css（10個）
- alert-box
- content-grid
- content-item
- content-section
- development-story
- clinical-evidence
- safety-comparison
- highlight-box
- info-box
- key-point-box

#### drug-page-v2.css（確認済み）
- drug-detail
- drug-header
- drug-classification
- drug-class
- brand-name
- generic-name
- combination-drugs
- combination-drugs__list
- impact-grid
- impact-item
- prescribing-data
- design-spec
- indications
- indications__list
- quick-summary

#### level-selector.css（確認済み）
- level-selector
- level-selector__inner
- level-btn
- level-indicator
- level-1-indicator
- level-2-indicator
- level-3-indicator
- level-1-content
- level-2-content
- level-3-content
- level-hint

#### sidebar.css（確認済み）
- sidebar
- sidebar-layout
- sidebar-section
- sidebar-title
- sidebar-links
- sidebar-link

#### mobile-controls.css（確認済み）
- mobile-fab
- bottom-sheet
- bottom-sheet-overlay
- bottom-sheet-handle
- bottom-sheet-content
- bottom-sheet-section
- bottom-sheet-title
- bottom-sheet-buttons
- bottom-sheet-btn

#### 基本クラス（style.css等）
- container
- main-content
- active
- arrow
- drug-category
- category-desc
- generation

### 2.2 未定義の可能性が高いクラス（20個）

1. **approval-timeline** - 承認タイムライン
2. **best** - 安全性評価（最良）
3. **caution-count** - 注意薬剤数
4. **clinical-insight** - 臨床的洞察
5. **drug-card** - 薬剤カード（index.cssにはあるが、dotinurad.htmlからは参照されていない）
6. **drug-features** - 薬剤特徴
7. **drug-name** - 薬剤名
8. **drug-safety-scale** - 安全性スケール
9. **drug-type** - 薬剤タイプ
10. **global-expansion** - グローバル展開
11. **good** - 安全性評価（良）
12. **highlight** - ハイライト（drug-card highlightで使用）
13. **highlight-success** - 成功ハイライト
14. **poor** - 安全性評価（悪）
15. **reason** - 理由（feature-page.cssには.reasonがあるが、薬剤ページからは参照されていない）
16. **safety-bar** - 安全性バー
17. **safety-item** - 安全性アイテム
18. **story-section** - ストーリーセクション
19. **trial-comparison** - 試験比較
20. **trial-highlights** - 試験ハイライト

## 3. 問題の本質

### 3.1 index.cssとの依存関係
- `drug-card`、`drug-name`、`drug-features`、`drug-type`はindex.cssに定義されている
- しかし、dotinurad.htmlはindex.cssをリンクしていない
- これらのクラスは薬剤カード表示用で、本来は薬剤個別ページには不要なはず

### 3.2 特殊な表示要素
以下の要素は、dotinurad.html独自の複雑な表示のために作られた可能性が高い：
- 安全性スケール関連（drug-safety-scale, safety-item, safety-bar, best/good/poor）
- 試験比較関連（trial-comparison, trial-highlights）
- ストーリー関連（story-section）
- グローバル展開関連（global-expansion, approval-timeline）

## 4. 解決方針

### Option A: 未定義クラスを削除・置換
1. HTML構造を変更して、既存の定義済みクラスで表現
2. 特殊な表示は、定義済みクラスの組み合わせで実現

### Option B: 必要なクラスを定義
1. drug-page-v2.cssにdotinurad固有のクラスを追加
2. ただし、これは保守性の観点から推奨されない

### Option C: 他のCSSファイルからインポート
1. 必要に応じてindex.cssなどをリンク
2. ただし、不要なスタイルも読み込まれるため効率的ではない

## 5. 現在のKPI達成状況

**未定義クラス使用率**: 20/78 = **25.6%**
**目標**: 0%
**ギャップ**: 20個の未定義クラスを解消する必要あり

## 6. 推奨アクション

1. **最優先**: 安全性スケール関連のHTML構造を`comparison-table`に変更
2. **優先**: 薬剤カード関連を`content-grid`と`content-item`の組み合わせに変更
3. **中優先**: story-sectionを削除（単なるdivで十分）
4. **低優先**: その他の装飾的なクラスを削除

これにより、真のKPI「未定義クラス使用率0%」を達成できます。