# components.css標準化プロジェクト計画書

**作成日時**: 2025-07-17 03:15  
**プロジェクト名**: CSS Components Standardization  
**目的**: components.cssの全薬剤ページへの適用と固有クラスの標準化

## 実装原則（重要）

### components.css使用の絶対原則
1. **新規クラスの作成は一切行わない**
2. **既存のcomponents.cssクラスのみを使用する**
3. **対応するクラスがない場合は、HTML構造を既存クラスに合わせて変更する**
4. **クラス名は用途を限定するものではなく、あくまで用例として捉える**

例：
- `info-box`は「情報ボックス」だけでなく、マイルストーンや注意事項にも使用可能
- `content-section`は汎用的なセクション構造として、様々な内容に適用可能
- `comparison-table`は比較以外の目的のテーブルにも使用可能

## 1. 現状分析

### 1.1 components.css概要
- **作成日**: 2025-07-16 14:35
- **場所**: `/docs/assets/css/components.css`
- **規模**: 550行
- **内容**: 汎用コンポーネントスタイル集

#### 定義済みコンポーネント
1. **ボックス系（5種類）**
   - info-box（情報ボックス・青系）
   - alert-box（アラートボックス・黄色系）
   - highlight-box（ハイライトボックス・緑系）
   - key-point-box（キーポイントボックス・オレンジ系）
   - quote-box（引用ボックス・グレー系）

2. **テーブル系（4種類）**
   - comparison-table（比較テーブル・ダークネイビーヘッダー）
   - data-table（データテーブル・基本）
   - clinical-table（臨床テーブル・医療データ用）
   - summary-table（サマリーテーブル・要約用）

3. **セクション系（4種類）**
   - content-section（基本コンテンツセクション）
   - development-story（開発ストーリーセクション）
   - clinical-evidence（臨床エビデンスセクション）
   - safety-comparison（安全性比較セクション）

4. **グリッド系（3種類）**
   - content-grid（汎用コンテンツグリッド）
   - feature-grid（特徴グリッド・アイコン付き）
   - data-grid（データグリッド・数値表示用）

### 1.2 現在の使用状況

#### 使用中（4/6ファイル）
- ✅ lemborexant.html
- ✅ dapagliflozin.html
- ✅ sacubitril-valsartan.html
- ✅ telmisartan.html

#### 未使用（2/6ファイル）
- ❌ dotinurad.html
- ❌ metformin.html

### 1.3 問題点

#### ドキュメント不備
1. CSS README.mdにcomponents.cssの記載がない
2. CLAUDE.mdの更新履歴以外に詳細記載がない
3. 実稼働CSSファイルリストに含まれていない

#### dotinurad.htmlの固有クラス（調査結果）
- `clinical-impact` - 臨床的意義
- `milestone-box` - マイルストーンボックス
- `approval-timeline` - 承認タイムライン
- `future-perspectives` - 将来展望
- `perspective-grid` - 展望グリッド
- `perspective-item` - 展望アイテム
- `research-direction` - 研究方向
- `drug-footer` - 薬剤フッター
- `safety-comparison` - 安全性比較（components.cssに同名あり）
- `drug-safety-scale` - 安全性スケール
- `highlight-success` - 成功ハイライト
- その他多数（約15-20個の固有クラス）

## 2. タスク一覧

### Phase 1: ドキュメント整備（優先度：高）
- [x] CSS README.md更新
  - components.cssを実稼働CSSファイルリストに追加
  - 10番目のCSSファイルとして記載
  - 責務説明を追加

- [x] CLAUDE.md更新
  - CSS設計セクションにcomponents.cssを追加
  - 使用方針を明記

### Phase 2: HTML標準化（優先度：高）
- [x] metformin.htmlへの適用
  - components.cssリンク追加
  - 既存クラスの確認

- [ ] dotinurad.htmlへの適用
  - components.cssリンク追加
  - 固有クラスの置換

### Phase 3: 固有クラス置換マッピング（dotinurad.html）

| 現在のクラス | 置換後のクラス | 対応方針 |
|------------|--------------|----------|
| milestone-box | info-box | 情報提示の標準化 |
| clinical-impact | key-point-box | 重要ポイントの強調 |
| perspective-grid | content-grid | グリッドレイアウトの統一 |
| perspective-item | content-item | グリッドアイテムの統一 |
| research-direction | content-section | セクション構造の標準化 |
| future-perspectives | content-section | セクション構造の標準化 |
| approval-timeline | （削除） | ul要素にクラス不要 |
| drug-footer | （削除） | 既存のfooterで対応 |
| highlight-success | （削除） | HTML構造変更で対応 |
| mechanism-detail/box | content-section/info-box | HTML構造を既存クラスに合わせて変更 |
| interaction-cards/item | content-grid/content-item | HTML構造を既存クラスに合わせて変更 |
| drug-safety-scale | comparison-table | テーブル構造に変更 |
| drug-comparison-cards | content-grid | グリッド構造の標準化 |

### Phase 4: 他ファイルの確認（優先度：中）
- [ ] 既にcomponents.css使用中の4ファイルの未定義クラス確認
- [ ] 必要に応じて調整

## 3. 期待される効果

### 定量的効果
- 固有クラス削減：約15-20個 → 0個（dotinurad.html）
- CSS管理対象：drug-page-v2.css単独 → components.css併用
- 開発効率：新規薬剤ページ作成時間30%削減見込み

### 定性的効果
- 視覚的一貫性の向上
- 保守性の向上
- 新規開発者の学習コスト削減
- CSSファイルサイズの最適化

## 4. 実装スケジュール

### 即時実行（本日中）
1. CSS README.md更新（5分）
2. CLAUDE.md更新（5分）
3. metformin.html適用（5分）
4. dotinurad.html適用（20分）

### 後続タスク（必要に応じて）
5. 他ファイルの確認・調整（15分）

**総所要時間**: 約50分

## 5. 注意事項

### 実装時の注意
- components.cssは他のCSSファイルの後に読み込む
- 既存のスタイルを壊さないよう慎重に確認
- 固有クラス削除前に表示確認を実施

### 将来的な展望
- すべての薬剤ページでcomponents.css使用を標準化
- 新規薬剤ページテンプレートにcomponents.css組み込み
- drug-page-v2.cssとの責務分離を明確化