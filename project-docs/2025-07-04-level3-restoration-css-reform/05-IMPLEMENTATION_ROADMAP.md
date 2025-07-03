# 05-IMPLEMENTATION_ROADMAP.md
# Level 3復元・CSS改革 実装ロードマップ

**作成日時**: 2025-07-04 04:51  
**作成者**: CEO  
**対象期間**: 2025-07-04 - 2025-07-11（1週間）  
**最終更新**: 2025-07-04 04:51

## 📋 エグゼクティブサマリー

Level 3コンテンツ復元とCSS構造改革を並行して進める包括的な実装計画。緊急対応から始まり、段階的にCSS分離とコンテンツ復元を実施。1週間で主要課題を解決し、PharmaDxの価値を完全復活させる。

### 実装の4つのフェーズ
1. **Phase 1**: 緊急修正（即日）- Level 3表示問題の解決
2. **Phase 2**: CSS分離（2-3日）- style.css + index.css
3. **Phase 3**: コンテンツ復元（3-4日）- 失われた価値の回復
4. **Phase 4**: 検証と最適化（1日）- 品質保証

## 📅 タイムライン概要

```
Day 1 (7/4): Phase 1 - 緊急修正
Day 2-3 (7/5-6): Phase 2 - CSS分離
Day 4-6 (7/7-9): Phase 3 - コンテンツ復元
Day 7 (7/10): Phase 4 - 検証と最適化
予備日 (7/11): バッファ・追加対応
```

## 🚀 Phase 1: 緊急修正（Day 1: 7/4）

**ステータス**: ✅ 完了（Manager実行）- 2025-07-04 05:50確認完了

### 目標
Level 3コンテンツの表示問題を即座に解決し、基本的な機能を回復

### 完了済み修正
- ✅ digoxin-refined.html - style="display: none"削除済み
- ✅ carvedilol-refined.html - style="display: none"削除済み
- ✅ warfarin-refined.html - style="display: none"削除済み
- ✅ vancomycin-refined.html - class="level-3-content"追加済み

### タスク詳細

#### 1.1 技術的修正（2時間）
```bash
# display: none の削除
- docs/drugs-v2/digoxin-refined.html
- docs/drugs-v2/carvedilol-refined.html  
- docs/drugs-v2/warfarin-refined.html

# class追加
- docs/drugs-v2/vancomycin-refined.html
```

**実装内容**:
```html
<!-- 修正前 -->
<section class="level-3-content" style="display: none;">

<!-- 修正後 -->
<section class="level-3-content">
```

#### 1.2 動作確認（1時間）
- [ ] 各ファイルでLevel切り替え確認
- [ ] JavaScriptエラーチェック
- [ ] モバイル表示確認

#### 1.3 緊急デプロイ（30分）
```bash
git add docs/drugs-v2/{digoxin,carvedilol,warfarin,vancomycin}-refined.html
git commit -m "fix: Level 3コンテンツ表示問題を修正

- display: none インラインスタイルを削除
- vancomycinにlevel-3-contentクラスを追加"
git push
```

### 成果物
- 修正済み4ファイル
- 動作確認レポート

## 📦 Phase 2: CSS分離実装（Day 2-3: 7/5-6）

**ステータス**: ✅ 基本作業完了（2025-07-04 05:45）- CEO実行

### 目標
style.cssをold-style.cssにリネーム後、新style.css（基盤） + index.css（インデックス専用）に分離し、責務を明確化

### 完了済み作業（2025-07-04）
- ✅ style.css → old-style.css リネーム
- ✅ 新style.css作成（514行）
- ✅ index.css作成（606行）
- ✅ index.html更新（old-style.css参照）
- ✅ drugs-v2/*.html 22ファイル更新（old-style.css参照）

### Day 2: 分離作業（7/5）

#### 2.1 準備作業（1時間）
```bash
# バックアップ作成
cd docs/assets/css
cp style.css _backups/style_20250705.css

# リネーム
mv style.css old-style.css

# 新規ファイル作成
touch style.css index.css
```

#### 2.2 内容分離（3時間）
**style.css作成（新規）**:
```css
/*
 * style.css - おくすりノート 基本スタイルシート
 * Version: 1.0.0
 * 作成日: 2025-07-05
 * 
 * すべてのページで使用される基本スタイル
 */

/* old-style.cssから以下を移動:
   - 行1-131: CSS変数
   - 行133-203: リセットCSS
   - 行204-234: ユーティリティ
   - 行235-396: ヘッダー
   - 行984-1087: フッター
*/
```

**index.css作成**:
```css
/*
 * index.css - インデックスページ専用スタイル
 * Version: 1.0.0
 * 作成日: 2025-07-05
 * 
 * 警告: このファイルはindex.htmlでのみ使用
 */

/* old-style.cssから以下を移動:
   - 行397-489: ヒーロー
   - 行490-983: 各種カード・グリッド
*/
```

#### 2.3 HTML更新 - Phase 2a（2時間）
```bash
# ✅ 完了済み（2025-07-04 05:40）
# index.html更新（old-style.cssを一時的に参照）
sed -i 's|style.css|old-style.css|' docs/index.html

# drugs-v2/の22ファイル更新（old-style.cssを一時的に参照）
for file in docs/drugs-v2/*-refined.html; do
    sed -i 's|style.css|old-style.css|' "$file"
done
```

#### 2.3b 新CSS構成への移行（Phase 1完了後）
```bash
# index.htmlを新構成に更新
sed -i 's|old-style.css|style.css">\n    <link rel="stylesheet" href="assets/css/index.css|' docs/index.html

# drugs-v2/*.htmlを新構成に更新
for file in docs/drugs-v2/*-refined.html; do
    sed -i 's|old-style.css|style.css|' "$file"
done
```

### Day 3: 検証と調整（7/6）

#### 2.4 表示確認（3時間）
- [ ] index.html - 全要素の表示確認
- [ ] drugs-v2/* - 基本レイアウト確認
- [ ] レスポンシブ動作確認

#### 2.5 微調整（2時間）
- 不足クラスの追加
- 重複の削除
- 最適化

### 成果物
- old-style.css（既存ファイルのリネーム）
- style.css（新規作成、約400行）
- index.css（新規作成、約600行）
- 更新済みHTMLファイル（23個）

## 🔄 Phase 3: コンテンツ復元（Day 4-6: 7/7-9）

### 目標
失われたLevel 3コンテンツを既存CSSクラスを活用して復元

### Day 4: 優先薬剤の復元（7/7）

#### 3.1 最重要4薬剤の復元（4時間）
**対象**: metformin, digoxin, warfarin, losartan

**作業手順**:
1. css_cleanupから元コンテンツ取得
2. 既存クラスへのマッピング
3. Level 3セクションへの統合

**実装例（metformin）**:
```html
<!-- 医師証言の復元 -->
<div class="specialist-perspective">
    <h3>現場からの声</h3>
    <div class="testimonial">
        <blockquote class="quote-box">
            「70代の患者さんは、複数の新薬で副作用に悩まされていました...」
        </blockquote>
        <cite>- 大学病院 糖尿病内分泌科医</cite>
    </div>
</div>

<!-- タイムラインの復元 -->
<div class="impact-grid">
    <div class="story-card">
        <div class="story-year">1957-2001年</div>
        <div class="story-title">日本の44年遅延</div>
        <div class="story-description">
            詳細な歴史的背景...
        </div>
    </div>
</div>
```

### Day 5: 中優先度薬剤の復元（7/8）

#### 3.2 循環器系薬剤（6薬剤、4時間）
- candesartan, telmisartan
- carvedilol, bisoprolol
- enalapril, perindopril

### Day 6: 残り薬剤の復元（7/9）

#### 3.3 その他薬剤（12薬剤、6時間）
- PPI群: 3薬剤
- SGLT2阻害薬: 2薬剤
- SSRI: 2薬剤
- その他: 5薬剤

### 成果物
- 復元済み22ファイル
- コンテンツ復元レポート

## ✅ Phase 4: 検証と最適化（Day 7: 7/10）

### 目標
全体的な品質保証と最終調整

### タスク詳細

#### 4.1 包括的テスト（3時間）
```bash
# 自動チェックスクリプト
for file in docs/drugs-v2/*.html; do
    echo "Checking $file..."
    # Level 3コンテンツの存在確認
    grep -q "level-3-content" "$file" || echo "Missing level-3-content"
    # display: noneの検出
    grep -q "display.*none.*level-3" "$file" && echo "Found display:none"
done
```

#### 4.2 パフォーマンス測定（1時間）
- CSS読み込み時間
- ページレンダリング速度
- モバイル性能

#### 4.3 最終調整（2時間）
- 発見された問題の修正
- コードの最適化
- ドキュメント更新

### 成果物
- テストレポート
- パフォーマンスレポート
- 最終版リリース

## 📊 リソース配分

### 人員配置
- **CEO**: 戦略決定、品質管理、Phase 3主導
- **Manager**: 技術調整、Phase 2主導、検証統括
- **Developers**: Phase 1実装、HTML更新支援

### 工数見積もり
```
Phase 1: 3.5時間
Phase 2: 10時間（2日間）
Phase 3: 14時間（3日間）
Phase 4: 6時間
合計: 33.5時間
```

## ⚠️ リスクと対策

### 技術的リスク
| リスク | 影響度 | 対策 |
|--------|-------|------|
| CSS分離での表示崩れ | 高 | 段階的移行、即時ロールバック可能 |
| コンテンツ復元の工数超過 | 中 | 優先順位付け、段階的実施 |
| キャッシュ問題 | 低 | バージョンパラメータ追加 |

### 対策の詳細
1. **ロールバック計画**
   ```bash
   # 問題発生時
   git revert HEAD
   cp _backups/style_20250705.css style.css
   ```

2. **段階的確認**
   - 各Phaseで中間レビュー
   - 問題の早期発見

## 📈 成功指標

### 定量的指標
- **Level 3表示率**: 0% → 100%
- **CSS読み込み削減**: 薬剤ページで50%
- **コンテンツ復元率**: 80%以上

### 定性的指標
- 開発者の理解度向上
- 保守性の改善実感
- ユーザー満足度

## 🔄 継続的改善

### Phase 4後の活動
1. **週次レビュー**
   - 新規問題の発見
   - 改善機会の特定

2. **月次最適化**
   - CSS further分離
   - パフォーマンスチューニング

3. **四半期評価**
   - 大規模リファクタリング検討
   - 新機能への対応

## 📎 チェックリスト

### Day 1完了確認
- [ ] 4ファイルの表示問題修正
- [ ] Git commit & push
- [ ] 動作確認完了

### Day 2-3完了確認
- [ ] style.cssをold-style.cssにリネーム
- [ ] 新style.css作成
- [ ] index.css作成  
- [ ] 23ファイルHTML更新
- [ ] 表示確認完了

### Day 4-6完了確認
- [ ] 22薬剤のコンテンツ復元
- [ ] 既存CSS活用確認
- [ ] 品質チェック完了

### Day 7完了確認
- [ ] 全体テスト実施
- [ ] パフォーマンス測定
- [ ] 最終リリース準備

この実装ロードマップに従うことで、Level 3表示問題の即座の解決から、長期的なCSS構造改革まで、体系的に実施できる。各フェーズは独立して価値を提供するため、段階的な成功が保証される。