# メトホルミンHTMLに付与したクラス詳細リスト

**作成日時**: 2025-07-03 01:30  
**作成者**: CEO  
**対象ファイル**: docs/_internal/css_rebuild_work_20250703/metformin-clean.html  
**元のクラス数**: 168個（全削除）  
**付与したクラス数**: 29個

---

## 📋 既存CSSから流用したクラス（17個）

### drug-detail.cssから流用（12個）
1. **drug-detail** - body要素のルートクラス
2. **drug-header** - 薬剤名セクションのコンテナ
3. **brand-name** - 商品名（メトグルコ®）
4. **generic-name** - 一般名（メトホルミン塩酸塩）
5. **drug-classification** - 薬剤分類のコンテナ
6. **drug-class** - 薬効群表示（ビグアナイド系糖尿病薬）
7. **generation** - 世代/特徴表示（第一選択薬）
8. **quick-summary** - 30秒サマリーセクション
9. **impact-grid** - グリッドレイアウトコンテナ
10. **impact-item** - グリッド内の個別アイテム
11. **quote-box** - 引用・重要情報ボックス
12. **specialist-perspective** - 専門家視点セクション

### style.cssから流用（5個）
1. **active** - アクティブ状態（レベルボタン）
2. **prescribing-data** - 処方データセクション
3. **design-spec** - 仕様・詳細情報
4. **stat-conclusion** - 統計的結論・重要ポイント
5. **card** - カードスタイルコンテナ（※一部で使用）

---

## 🆕 新規作成クラス（12個）

### レベル管理系（4個）
1. **level-selector** - レベル選択コンテナ
2. **level-selector__inner** - レベル選択内部ラッパー
3. **level-btn** - レベル選択ボタン
4. **level-hint** - レベルヒント表示（研修編へのガイド）

### コンテンツ表示系（4個）  
1. **level-1-content** - レベル1（薬学生）向けコンテンツ
2. **level-2-content** - レベル2（実習中）向けコンテンツ
3. **indications** - 適応症セクション
4. **indications__list** - 適応症リスト

### その他機能系（4個）
1. **combination-drugs** - 併用薬セクション
2. **combination-drugs__list** - 併用薬リスト
3. **faq-note** - FAQ注記・説明
4. **summary-item** - サマリー内の個別項目（※impact-itemへの移行途中）

---

## 📊 クラス付与の内訳

### 削減効果
- **元のクラス数**: 168個（Ver2個別CSS）
- **付与したクラス数**: 29個
- **削減率**: 82.7%（139個削減）

### 流用率
- **既存CSS流用**: 17個（58.6%）
- **新規作成**: 12個（41.4%）

### 主な流用元
- **drug-detail.css**: 12個（70.6%）- 薬剤詳細ページ専用CSS
- **style.css**: 5個（29.4%）- 共通スタイル

---

## 💡 設計判断の記録

### 既存クラスを最大限活用した理由
1. **一貫性の確保**: 既存のデザインシステムとの整合性
2. **保守性の向上**: 新規クラスの乱立を防ぐ
3. **実装効率**: すでに定義済みのスタイルを活用

### 新規クラスを作成した理由
1. **レベル管理機能**: Ver2の新機能で既存CSSに存在しない
2. **BEM記法の部分採用**: `level-selector__inner`のような構造化
3. **意味的な明確化**: `indications`, `combination-drugs`など機能を明示

### 命名規則
- **既存に準拠**: ハイフン区切り、小文字のみ
- **機能ベース**: 見た目ではなく役割を表現
- **簡潔性**: 必要最小限の長さ

---

## 🔄 次のステップへの申し送り

### Manager（CSS実装）への重要情報
1. **drug-detail.cssとの整合性**: 既存の17個のクラスはそのまま活用可能
2. **新規12個の実装必要**: 特にレベル管理系は新規実装
3. **@import活用**: style.css、drug-detail.cssは既にインポート済み

### 削減できた重複クラス例
- `basic-info-card` → 不要（sectionで十分）
- `drug-name-display` → `drug-header`で代替
- `classification-badges` → `drug-classification`で代替
- `main-indications` → `indications`で代替

---

---

## 🔍 既存CSS流用可能性の検討（追記）

### 調査結果サマリー
既存CSSファイルを詳細調査した結果、新規12個のクラスのうち、実は**7個が既存CSSで代替可能**または**すでに定義済み**であることが判明しました。

### 1. すでに定義済みだったクラス（2個）

#### level-1-content, level-2-content
- **発見場所**: ver2-unified.css（176行目、225行目）
- **状況**: Phase 5のA級品質統一CSSですでに実装済み
- **内容**: 3段階学習システム用に認知科学に基づいて設計された高品質CSS
- **判断**: そのまま使用可能（新規作成不要）

### 2. 既存クラスで代替可能（5個）

#### level-selector → .nav-list または新規必要
- **代替候補**: `.nav-list`（style.css）
- **課題**: nav-listはナビゲーション用で、レベル切替には不適切
- **判断**: 新規作成が適切

#### level-btn → .cta-button または .nav-link
- **代替候補1**: `.cta-button`（style.css 468行目）- CTAボタン用
- **代替候補2**: `.nav-link`（style.css）- ナビリンクボタン
- **判断**: 機能が異なるため新規作成が適切

#### indications → .drug-overview-stats
- **代替候補**: `.drug-overview-stats`（drug-detail.css）
- **用途**: 薬剤の統計情報表示
- **判断**: 適応症リストには特化していないが、構造的に流用可能

#### faq-note → .half-life-note
- **代替候補**: `.half-life-note`（drug-detail.css 398行目）
- **用途**: 注記・補足情報表示
- **判断**: 汎用的な注記として流用可能

#### summary-item → .stat-item
- **代替候補**: `.stat-item`（style.css 449行目、drug-detail.css）
- **用途**: 統計アイテム・情報単位
- **判断**: 完全に代替可能（impact-itemへの移行も考慮）

### 3. 新規作成が必要なクラス（5個）

#### レベル管理系
1. **level-selector** - レベル切替専用コンテナ（代替なし）
2. **level-selector__inner** - BEM記法の内部ラッパー（代替なし）
3. **level-hint** - レベル間の誘導ヒント（代替なし）

#### リスト系
1. **indications__list** - 適応症専用リスト（ul要素への装飾）
2. **combination-drugs** - 併用薬セクション（代替なし）
3. **combination-drugs__list** - 併用薬専用リスト

---

## 📊 再集計結果

### 最終的な分類
- **既存CSS流用確定**: 19個（65.5%）← 17個から増加
  - drug-detail.cssから: 12個
  - style.cssから: 5個
  - ver2-unified.cssから: 2個（level-1-content, level-2-content）
  
- **新規作成必要**: 10個（34.5%）← 12個から減少
  - 完全新規: 5個（level-selector系、hint、list系）
  - 代替検討したが新規推奨: 5個

### 推奨アクション
1. **level-1-content, level-2-content**: ver2-unified.cssの定義をそのまま使用
2. **summary-item**: stat-itemに統一（またはimpact-item）
3. **faq-note**: 必要に応じてhalf-life-noteを拡張
4. **その他5個**: 新規実装が必要

### Manager向け重要情報（更新）
- **ver2-unified.css確認必須**: level-1-content、level-2-contentがすでに高品質実装済み
- **統一の機会**: summary-item → stat-item、faq-note → half-life-noteへの統一検討
- **真の新規は5個のみ**: レベル管理系とリスト系に集中

---

**追記完了**: 2025-07-03 01:40