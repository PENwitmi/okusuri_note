# OkusuriNote 並列実行タスク細分化

**作成日**: 2025-07-01 10:45  
**更新日**: 2025-07-01 11:20  
**作成者**: CEO  
**目的**: 3人の開発者による並列実行を最大化するためのタスク細分化  

## 🚨 重要方針：基本機能完成優先（2025-07-01追記）

**基本機能が完成するまで、学習機能拡張（インタラクティブ要素、学習パス等）には一切着手しません。**
- リンク切れ、モバイル対応、ブランド統一などの基本的な問題を完全に解決することが最優先
- 建物の基礎が不安定な状態で、装飾を追加することは無意味です

## 🎯 概要

基本機能に集中することで、作業時間を2-2.5時間に短縮します。本ドキュメントは、Managerが最適な人員配置を行うための詳細なタスク分解を提供します。

## 📊 タスク依存関係マトリクス

```
タスクID    タスク名                     前提タスク    推定時間
--------    ------------------------    ----------    --------
4.1.1       リンク切れ調査              なし          15分
4.1.2       ストーリーコンテンツ対応    4.1.1         60分
4.1.3       使い分けガイド対応          4.1.1         30分
4.2         ブランド統一                なし          30分
4.3         404エラーページ作成         なし          30分
5.1         レスポンシブデザイン強化    なし          60分
5.2         タッチインターフェース      なし          60分
5.3         可読性改善                  なし          60分
```

**注意**: 学習機能拡張タスク（6.x、7.x）は基本機能完成後に実施するため、現時点では対象外とします。

## 🔄 並列実行グループ

### グループ1: 即時開始可能（依存関係なし）
以下のタスクは、プロジェクト開始と同時に並列実行可能です：

- **4.1.1 リンク切れ調査**（15分）
- **4.2 ブランド統一**（30分）
- **4.3 404エラーページ作成**（30分）
- **5.1 レスポンシブデザイン強化**（60分）
- **5.2 タッチインターフェース最適化**（60分）
- **5.3 可読性改善**（60分）

### グループ2: リンク調査完了後（4.1.1依存）
リンク切れ調査（15分）完了後、以下が並列実行可能：

- **4.1.2 ストーリーコンテンツ対応**（60分）
- **4.1.3 使い分けガイド対応**（30分）

## 📋 詳細タスク仕様

### Phase 4: 緊急修正タスク群

#### タスク4.1.1: リンク切れ調査（15分）
**目的**: 全サイトのリンク切れを完全に把握
**成果物**: 
- all_links.txt（全リンクリスト）
- broken_links.txt（404エラーリスト）
- リンク切れ分類レポート

**実施内容**:
```bash
# リンク抽出と検証スクリプト
find docs -name "*.html" -exec grep -Ho 'href="[^"]*"' {} \; > all_links.txt
# 404チェックロジック
# カテゴリ別分類
```

**品質基準**: 
- 漏れなく全リンクを抽出
- false positiveゼロ
- 他タスクが即座に使える形式

#### タスク4.1.2: ストーリーコンテンツ対応（60分）
**目的**: 10個のストーリーリンクを正常動作させる
**前提**: 4.1.1のbroken_stories.txt
**成果物**: 
- docs/stories/ディレクトリ
- 10個の高品質ストーリーHTML

**実施内容**:
1. source_materials/drug_stories/から該当MDを特定
2. HTML変換（感動的要素を保持）
3. 適切なテンプレート適用
4. docs/stories/に配置

**品質基準**:
- 各ストーリー500行以上
- 感動的導入必須
- モバイル対応

#### タスク4.1.3: 使い分けガイド対応（30分）
**目的**: 使い分けガイドリンクの修正
**前提**: 4.1.1のbroken_differentiation.txt
**成果物**: 修正されたリンク

**実施内容**:
```bash
# リンクマッピング例
data/differentiation/arb.html → groups/ARB_evolution_model.html
data/differentiation/ppi.html → groups/PPI_evolution_model.html
```

**品質基準**: 全リンク正常動作

#### タスク4.2: ブランド統一（30分）
**目的**: PharmaDex残存箇所の完全除去
**成果物**: 統一されたブランド表記

**実施内容**:
1. grep検索で残存箇所特定
2. 一括置換スクリプト実行
3. 目視確認

**注意事項**:
- index.htmlフッター確認必須
- バックアップ作成

#### タスク4.3: 404エラーページ作成（30分）
**目的**: ユーザーフレンドリーな404ページ
**成果物**: docs/404.html

**要件**:
- モバイル最適化
- 主要ページへのナビゲーション
- ブランドに合致したデザイン

### Phase 5: モバイル最適化タスク群

#### タスク5.1: レスポンシブデザイン強化（60分）
**目的**: 完全なレスポンシブ対応
**成果物**: 更新されたCSS

**実施内容**:
```css
/* 必要なブレークポイント */
@media (max-width: 1024px) { /* タブレット */ }
@media (max-width: 768px) { /* 小型タブレット */ }
@media (max-width: 480px) { /* スマートフォン */ }
@media (max-width: 320px) { /* 小型スマートフォン */ }
```

#### タスク5.2: タッチインターフェース最適化（60分）
**目的**: タッチ操作の快適性向上
**成果物**: タッチ最適化されたUI

**要件**:
- 最小タップ領域: 44px × 44px
- 適切な余白
- スワイプ対応

#### タスク5.3: 可読性改善（60分）
**目的**: モバイルでの読みやすさ
**成果物**: 最適化されたタイポグラフィ

**要件**:
- フォントサイズ: 16px以上
- 行間: 1.6-1.8
- 適切なコントラスト比

### 基本機能完成後の拡張（現時点では対象外）

以下の機能は、基本的な問題（リンク切れ、モバイル対応、ブランド統一など）が完全に解決された後に検討します：

- 学習パス構築
- インタラクティブ要素
- 高度なナビゲーション機能
- 追加コンテンツ作成
- 相互リンク強化

## 🚀 推奨実行シナリオ

### 基本機能完成に集中したシナリオ
```
時間帯1（0-15分）:
- 開発者A: 4.1.1（リンク調査）
- 開発者B: 4.2（ブランド統一）
- 開発者C: 4.3（404ページ）

時間帯2（15-75分）:
- 開発者A: 4.1.2（ストーリー）
- 開発者B: 5.1（レスポンシブ）
- 開発者C: 5.2（タッチUI）

時間帯3（75-135分）:
- 開発者A: 4.1.3（使い分けガイド）
- 開発者B: 5.3（可読性）
- 開発者C: 品質チェック・修正対応

総所要時間: 約2-2.5時間（基本機能に集中することで時間短縮）
```

## 📌 Manager向け動的割り当てガイドライン

### 🎯 割り当ての基本原則

1. **依存関係の厳守**
   - グループ1（7タスク）から開始し、3人に分配
   - 4.1.1完了後、速やかにグループ2を割り当て
   - 完了したタスクの開発者に次のタスクを動的に割り当て

2. **開発者特性の考慮**
   - **フロントエンド系**: 5.1, 5.2, 5.3（モバイル最適化）、4.3（404ページ）
   - **コンテンツ系**: 4.1.2（ストーリー対応）、4.1.3（使い分けガイド対応）
   - **システム系**: 4.1.1（リンク調査）、4.2（ブランド統一）

3. **負荷分散の実践**
   - 60分タスクは単独でも組み合わせでも可
   - 30分タスクは組み合わせて効率化
   - 例: Dev1に5.1（60分）、Dev2に4.2+4.3（計60分）など

### 🔄 割り当ての考え方（あくまで例）

**重要**: 以下は一例に過ぎません。実際の割り当ては、開発者の状況・得意分野・現在の負荷を考慮して、Managerが自由に判断してください。

#### 考慮すべきポイント
- **4.1.1（リンク切れ調査）は他タスクの前提となるため、早期実行が望ましい**
- **グループ1の7タスクは並列実行可能**
- **120分タスクと短時間タスクの組み合わせで負荷分散も可能**

#### 動的な再割り当ての原則
- 早く完了した開発者から順に、次の優先タスクを割り当て
- 依存関係のあるタスクは、前提タスク完了を待って即座に割り当て
- 開発者の疲労度や得意分野も考慮する

### 📊 品質チェックポイント

1. **リンク調査（4.1.1）完了時**
   - broken_links.txtの内容を全開発者に共有
   - 修正対象の明確化

2. **各グループ完了時**
   - グループ1: 基盤機能の動作確認
   - グループ2: コンテンツ整合性確認
   - グループ3: 学習体験の一貫性確認

3. **最終確認**
   - 全タスク完了後、エンドツーエンドテスト
   - モバイル実機での動作確認

### ⚠️ 重要な注意事項

1. **リンク調査（4.1.1）は必ず最初に単独実行**
   - 他の多くのタスクがこの結果に依存

2. **モバイル最適化タスク（5.1-5.3）は独立性が高い**
   - 即座に並列実行可能
   - 専門スキルを持つ開発者に優先配置

3. **コンテンツ作成タスク（4.1.2, 7.1）は創造性が必要**
   - 十分な時間配分を推奨
   - source_materials/の活用を忘れずに

4. **品質チェックポイント**
   - Phase 4完了時: 全リンクの動作確認
   - Phase 5完了時: 実機でのモバイル確認
   - 最終: エンドツーエンドのユーザーテスト

## 🎯 期待される成果

- **基本機能の完成**: リンク切れ解消、モバイル対応、ブランド統一
- **時間短縮**: 基本機能に集中することで2-2.5時間での完了
- **品質向上**: 並列作業による相互レビュー機会
- **リスク低減**: 早期の問題発見と対応

**重要**: 基本的な問題が完全に解決されるまで、学習機能拡張には着手しません。

---

このタスク分解により、Managerは開発者の特性とスキルに応じた最適な配置を行い、効率的なプロジェクト完遂を実現できます。