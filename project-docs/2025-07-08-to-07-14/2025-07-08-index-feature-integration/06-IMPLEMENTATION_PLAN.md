# 06-IMPLEMENTATION_PLAN.md - 実装計画

**作成日**: 2025-07-08  
**更新日**: 2025-07-08（story-card再利用案採用）  
**実装対象**: index.html、index.css  
**推定作業時間**: 1-1.5時間（70%短縮）

---

## 📅 実装スケジュール

### Phase 1: 準備作業（15分）
1. **バックアップ作成**
   - index.html → index.html.backup-20250708
   - index.css → index.css.backup-20250708

2. **作業環境準備**
   - ローカルサーバー起動
   - ブラウザ開発者ツール準備
   - エディタ設定確認

3. **最終確認**
   - 現在の表示状態のスクリーンショット
   - リンクチェック
   - コンソールエラー確認

### Phase 2: HTML実装（30分）
1. **サイト名変更**
   - title要素の更新
   - ヘッダーロゴテキスト変更

2. **ナビゲーション更新**
   - 不要なメニュー項目削除
   - 新規「特集ページ」追加

3. **セクション削除**
   - #categories セクション削除
   - #stories セクション削除
   - #differentiation セクション削除

4. **新規セクション追加**
   - #features セクション作成
   - 4つの特集カード実装

### Phase 3: CSS実装（20分）
1. **クラス名の一括置換**
   - エディタの検索・置換機能使用
   - story-* → feature-* の機械的置換

2. **既存スタイルのコメントアウト**
   - categories-section関連
   - differentiation-section関連

3. **最小限の新規CSS追加**
   - .feature-subtitle（5行）
   - .feature-badge（10行）
   - カテゴリ別カラー（5行）

### Phase 4: 検証・調整（15分）
1. **ブラウザ検証**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **レスポンシブ検証**
   - デスクトップ（1920px）
   - ラップトップ（1366px）
   - タブレット（768px）
   - モバイル（375px）

3. **アクセシビリティ検証**
   - キーボードナビゲーション
   - スクリーンリーダー（可能なら）
   - 色コントラスト

---

## 🛠️ 実装詳細

### HTML変更箇所

#### 1. head要素内
```html
<!-- 変更前 -->
<title>おくすりノート - 薬剤図鑑 | 薬学生のための学習プラットフォーム</title>

<!-- 変更後 -->
<title>サクッとお薬ノート - 薬剤図鑑 | 薬学生のための学習プラットフォーム</title>
```

#### 2. ヘッダー部分
```html
<!-- 変更前 -->
<h1><a href="index.html">おくすりノート</a></h1>

<!-- 変更後 -->
<h1><a href="index.html">サクッとお薬ノート</a></h1>
```

#### 3. ナビゲーション
```html
<!-- 変更前 -->
<ul class="nav-list">
    <li><a href="#drugs" class="nav-link">薬剤一覧</a></li>
    <li><a href="#categories" class="nav-link">薬効群</a></li>
    <li><a href="#stories" class="nav-link">ストーリー</a></li>
    <li><a href="#differentiation" class="nav-link">使い分け</a></li>
</ul>

<!-- 変更後 -->
<ul class="nav-list">
    <li><a href="#drugs" class="nav-link">薬剤一覧</a></li>
    <li><a href="#features" class="nav-link">特集ページ</a></li>
</ul>
```

#### 4. ヒーロー統計更新
```html
<!-- 変更前 -->
<div class="stat-item">
    <span class="stat-number">10</span>
    <span class="stat-label">感動ストーリー</span>
</div>

<!-- 変更後 -->
<div class="stat-item">
    <span class="stat-number">4</span>
    <span class="stat-label">特集ページ</span>
</div>
```

#### 5. 特集セクション追加位置
薬剤一覧セクションの直後に追加：
```html
</section><!-- #drugs終了 -->

<!-- 新規特集ページセクション -->
<section id="features" class="features-section">
    <!-- 03-NEW_FEATURE_SECTION_DESIGN.mdの内容を実装 -->
</section>

<!-- 削除: #categories, #stories, #differentiation -->
```

---

## 📝 CSS実装順序（story-card再利用版）

### 1. クラス名一括置換
```bash
# エディタの検索・置換機能で以下を実行
stories-section → features-section
stories-grid → features-grid
story-card → feature-card
story-image → feature-icon
story-title → feature-title
story-description → feature-description
story-meta → feature-highlights
story-year → highlight-item
story-impact → highlight-item
story-link → feature-link
```

### 2. コメントアウト対象
```css
/* 削除対象（story関連は除く） */
// .categories-section: 行128-行157
// .category-card関連: 行287-行387
// .differentiation-section: 行137行
// .diff-card関連: 行510-行606
```

### 3. 最小限の新規CSS追加
```css
/* 追加位置: 置換したfeature-card関連の直後 */
.feature-subtitle { /* 5行 */ }
.feature-badge { /* 10行 */ }
[data-category] { /* 5行 */ }
```

### 4. インポート順序確認
```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/index.css">
<link rel="stylesheet" href="assets/css/responsive-unified.css">
<link rel="stylesheet" href="assets/css/interactive.css">
```
この順序を維持（カスケーディング影響あり）

---

## 🔍 検証チェックリスト

### 表示確認
- [ ] サイト名が正しく表示される
- [ ] ナビゲーションが正しく動作する
- [ ] 特集カードが正しく表示される
- [ ] ホバー効果が動作する
- [ ] リンクが正しい（404にならない）

### レスポンシブ確認
- [ ] モバイルで1列表示
- [ ] タブレットで2列表示
- [ ] デスクトップで3列以上表示
- [ ] 文字の可読性維持
- [ ] タッチ操作可能

### パフォーマンス確認
- [ ] ページ読み込み速度
- [ ] スムーズなアニメーション
- [ ] 不要なリフロー防止

### アクセシビリティ確認
- [ ] Tabキーでナビゲート可能
- [ ] フォーカス状態が見える
- [ ] 適切な見出し構造
- [ ] 色コントラスト適正

---

## 🚨 リスクと対策（story-card再利用により大幅にリスク低減）

### リスク1: リンク切れ
**対策**: 
- 一時的に404ページを充実化
- コンソールでエラー監視
- 段階的な移行を検討

### リスク2: CSS競合（story-card再利用により最小化）
**対策**:
- 既存のテスト済みスタイルを利用するため競合リスク低
- クラス名の機械的置換により人為的ミス防止
- 新規追加は20行のみで影響範囲限定

### リスク3: レイアウト崩れ
**対策**:
- 各ブレークポイントで確認
- flexboxのフォールバック
- 最小幅の設定

---

## 📋 作業後タスク

### 即時対応
1. Git commit（メッセージ: "feat: index.htmlを特集ページ構造に変更、story-cardスタイルを再利用"）
2. ローカルでの最終確認
3. スクリーンショット記録

### 後日対応
1. 削除したページの処理方針決定
2. 特集ページの実コンテンツ作成
3. 内部リンクの全体見直し
4. サイトマップ更新

### ドキュメント更新
1. CLAUDE.md更新
2. README.md更新（必要なら）
3. 作業ログ記録

---

## 🎯 成功基準

### 必須達成項目
- [x] サイト名変更完了
- [x] 3セクション削除完了
- [x] 特集セクション追加完了
- [x] 基本的な表示確認完了

### 推奨達成項目
- [ ] 全ブラウザで正常表示
- [ ] レスポンシブ完全対応
- [ ] パフォーマンス劣化なし
- [ ] アクセシビリティ維持

---

**次のステップ**: 07-MIGRATION_CHECKLIST.mdで移行チェックリストを作成