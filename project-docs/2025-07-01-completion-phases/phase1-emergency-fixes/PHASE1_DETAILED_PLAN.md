# Phase 1: 緊急修正 - 詳細実行計画

**作成日**: 2025-07-01 09:55  
**実行方法**: Managerが依存関係に基づき開発者を動的に割り当て  
**予定期間**: 1-2時間（並列実行により短縮可能）  
**優先度**: 最高（ブロッカー）  
**参照**: PARALLEL_TASK_BREAKDOWN.md（タスク4.1.1, 4.1.2, 4.1.3, 4.2, 4.3）  

## 🚨 なぜこれが最優先なのか

リンク切れは、建物の崩れた階段のようなものだ。どんなに美しい建物でも、階段が壊れていれば上の階には行けない。ユーザーの信頼は、一度のクリックミスで失われる。

**影響度**: 
- 404エラー遭遇率: 20%（5クリックに1回）
- 離脱率への影響: +30%
- 信頼性スコア: 0/100

## 📋 タスク一覧と優先順位

### Task 1.1: リンク切れの完全把握（15分）

#### 実施内容
```bash
# 1. 全HTMLファイルのリンク抽出
find docs -name "*.html" -exec grep -Ho 'href="[^"]*"' {} \; > all_links.txt

# 2. 存在確認スクリプト
for link in $(cat all_links.txt | sed 's/.*href="\([^"]*\)".*/\1/'); do
    if [[ ! -f "docs/$link" ]]; then
        echo "404: $link"
    fi
done > broken_links.txt

# 3. カテゴリ別集計
grep "stories" broken_links.txt > broken_stories.txt
grep "differentiation" broken_links.txt > broken_differentiation.txt
```

#### 期待される結果
- 完全なリンク切れリスト
- カテゴリ別の問題箇所
- 修正優先順位の明確化

### Task 1.2: ストーリーコンテンツの処理（30分）

#### Option A: 暫定コンテンツ作成
```html
<!-- stories/penicillin.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ペニシリンの発見物語 | おくすりノート</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header><!-- 共通ヘッダー --></header>
    
    <main class="story-content">
        <h1>ペニシリンの発見物語</h1>
        <div class="coming-soon">
            <p>このコンテンツは現在準備中です。</p>
            <p>ペニシリンの感動的な発見ストーリーを近日公開予定です。</p>
            <a href="../index.html" class="back-link">トップページに戻る</a>
        </div>
    </main>
    
    <footer><!-- 共通フッター --></footer>
</body>
</html>
```

#### Option B: リンクの修正
```bash
# index.htmlのリンクを正しいパスに修正
sed -i.bak 's|data/stories/|stories/|g' docs/index.html
```

#### Option C: source_materials/を活用したHTML作成
```bash
# 高品質なMDファイルが存在
# source_materials/drug_stories/discovery_legends/01_penicillin/01_penicillin_story_pure.md
# これをHTML化してdocs/stories/penicillin.htmlを作成
```

**推奨**: Option B + Option C（即座の修正＋高品質コンテンツ作成）

### Task 1.3: 使い分けガイドの処理（30分）

#### 実装方針
1. index.htmlのリンクを既存のgroups/内コンテンツへ修正
2. source_materials/drug_evolution/のリソースを活用

```bash
# リンク修正マッピング
sed -i.bak 's|data/differentiation/arb.html|groups/ARB_evolution_model.html|g' docs/index.html
sed -i.bak 's|data/differentiation/ppi.html|groups/PPI_evolution_model.html|g' docs/index.html
sed -i.bak 's|data/differentiation/sglt2.html|groups/SGLT2_evolution_model.html|g' docs/index.html
# ... 他も同様
```

### Task 1.4: ブランド統一（PharmaDex → おくすりノート）（30分）

#### 対象ファイル
```bash
# PharmaDex残存箇所の特定
grep -r "PharmaDex" docs/ --include="*.html" | grep -v "archive"
```

#### 一括置換スクリプト
```bash
# 安全な置換（バックアップ付き）
for file in docs/drugs/*.html; do
    cp "$file" "$file.backup"
    sed -i 's/PharmaDex/おくすりノート/g' "$file"
    sed -i 's/薬剤図鑑/薬剤図鑑/g' "$file"  # 既に正しい場合はスキップ
done
```

#### 確認項目
- [ ] ヘッダーロゴ
- [ ] ページタイトル
- [ ] メタ情報
- [ ] 本文中の言及

### Task 1.5: 404エラーページ作成（15分）

#### 実装内容
```html
<!-- docs/404.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ページが見つかりません | おくすりノート</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <style>
        .error-404 {
            text-align: center;
            padding: 100px 20px;
        }
        .error-404 h1 {
            font-size: 120px;
            color: #e74c3c;
            margin: 0;
        }
        .suggestions {
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <main class="error-404">
        <h1>404</h1>
        <h2>お探しのページが見つかりません</h2>
        <p>申し訳ございません。ページが移動または削除された可能性があります。</p>
        
        <div class="suggestions">
            <h3>こちらをお探しですか？</h3>
            <ul>
                <li><a href="/index.html">トップページ</a></li>
                <li><a href="/drugs/">薬剤一覧</a></li>
                <li><a href="/categories/">カテゴリ一覧</a></li>
            </ul>
        </div>
    </main>
</body>
</html>
```

## 🔍 品質チェックリスト

### 実装後の確認項目
- [ ] すべてのリンクが正しく動作する
- [ ] 404エラーが0件
- [ ] ブランド名が統一されている
- [ ] 404ページが適切に表示される

### テスト手順
1. **自動リンクチェック**: 上記スクリプトの再実行
2. **手動確認**: 主要ページでの目視確認
3. **ブランド確認**: grep検索での残存チェック

## 📊 成功基準

### 定量的基準
- リンク切れ: 0件（現状: 約20件）
- PharmaDex表記: 0件（現状: 30件以上、index.htmlフッター含む）
- 404ページ: 実装完了
- source_materials/の活用: ストーリー・使い分けコンテンツの基盤確立

### 定性的基準
- ユーザーが迷わない
- プロフェッショナルな印象
- 信頼性の回復

## ⚡ リスクと対策

### リスク1: 一括置換による意図しない変更
**対策**: 
- バックアップの作成
- 差分確認の実施
- 段階的な適用

### リスク2: 新たなリンク切れの発生
**対策**:
- 相対パスの使用
- リンクチェックの自動化
- 変更箇所の記録

## 🚀 実行スケジュール

```
10:00-10:15  Task 1.1: リンク切れ把握
10:15-10:45  Task 1.2: ストーリー処理
10:45-11:15  Task 1.3: 使い分けガイド処理
11:15-11:45  Task 1.4: ブランド統一
11:45-12:00  Task 1.5: 404ページ作成
12:00-12:15  最終確認・テスト
```

## 📝 引き継ぎ事項

### 次フェーズ（Phase 5）への申し送り
- 暫定コンテンツの本格実装が必要
- モバイルでの404ページ最適化
- リンク管理プロセスの確立

### ドキュメント更新
- MASTER_STATUS_DASHBOARD.mdの更新
- 修正内容の記録
- 教訓の追加

## 🎯 Dev1への指示

以下のコマンドで作業を開始してください：

```bash
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note

# 1. 現状確認
find docs -name "*.html" -exec grep -Ho 'href="[^"]*"' {} \; | wc -l

# 2. Task 1.1から順次実行
# 3. 各タスク完了時に進捗報告
```

**重要**: 不明な点があれば即座に質問すること。推測での実装は禁止。

---

**関連ドキュメント**:
- [LINK_RESOLUTION_STRATEGY.md](./LINK_RESOLUTION_STRATEGY.md) - リンク解決戦略
- [BRAND_UNIFICATION_CHECKLIST.md](./BRAND_UNIFICATION_CHECKLIST.md) - ブランド統一チェックリスト