# PharmaDex 詳細薬剤ページ復旧計画
作成日時: 2025-06-30 16:00

## 状況概要
- **問題**: 2025-06-30 14:50のビルドツール修正時に、Phase 2で作成された詳細な薬剤ページがテンプレートで上書きされた
- **影響範囲**: 22個の薬剤ページ（losartan.html等）が773行から65行に減少
- **原因**: convert_pharmadx.jsが英語名統一化の際に、既存の詳細ページを単純なテンプレートで上書き

## 復旧計画

### Phase 1: 事前調査（5分）
1. Git履歴から午前4時頃のコミットハッシュを特定
   - `git log --since="2025-06-30 00:00" --until="2025-06-30 06:00" --oneline`
   - Phase 2完了時のコミットを探す

2. 影響を受けたファイルリストの確認
   - `git diff --name-only <午前4時のハッシュ> HEAD -- docs/drugs/`
   - 変更されたHTMLファイルをリスト化

### Phase 2: バックアップ作成（5分）
1. 現在のファイルをバックアップ
   ```bash
   mkdir -p _old_files/backup_20250630_1600_before_recovery
   cp -r docs/drugs/* _old_files/backup_20250630_1600_before_recovery/
   ```

2. Git履歴から復元予定のファイルを一時ディレクトリに取得
   ```bash
   mkdir -p /tmp/pharma_recovery
   git show <ハッシュ>:docs/drugs/losartan.html > /tmp/pharma_recovery/losartan.html
   ```

### Phase 3: 復元実行（10分）
1. 各薬剤ページを午前4時時点の状態に復元
   ```bash
   # 例：ロサルタン
   git checkout <午前4時のハッシュ> -- docs/drugs/losartan.html
   ```

2. 復元対象ファイル（22個）
   - ARB系: candesartan.html, telmisartan.html, losartan.html, irbesartan.html, valsartan.html, azilsartan.html, olmesartan.html
   - 利尿薬: spironolactone.html, eplerenone.html, furosemide.html
   - 糖尿病薬: metformin.html, empagliflozin.html, dapagliflozin.html
   - PPI: omeprazole.html, esomeprazole.html, lansoprazole.html, rabeprazole.html, vonoprazan.html
   - β遮断薬: bisoprolol.html, carvedilol.html
   - Ca拮抗薬: amlodipine.html, nifedipine.html

### Phase 4: 検証（10分）
1. 復元されたページの内容確認
   - 各ファイルの行数確認: `wc -l docs/drugs/*.html`
   - 重要な薬剤（losartan, telmisartan等）の詳細内容確認
   - 30秒サマリー、臨床的意義、使い分けセクションの存在確認

2. Webページ表示確認
   - index.htmlからのリンク動作確認
   - 各薬剤ページのレイアウト・内容確認

### Phase 5: ビルドツール保護機能追加（15分）
1. convert_pharmadx.jsに保護機能を追加
   ```javascript
   // ファイル存在チェックと上書き保護
   if (fs.existsSync(drugFilePath)) {
       const existingContent = fs.readFileSync(drugFilePath, 'utf8');
       const existingLines = existingContent.split('\n').length;
       
       // 既存ファイルが100行以上ある場合は詳細ページとみなして保護
       if (existingLines > 100) {
           console.log(`[保護] ${drugFile} は詳細ページのため更新をスキップ`);
           continue;
       }
   }
   ```

2. 新規作成専用モードの追加
   - `--new-only`オプション: 存在しないファイルのみ作成
   - `--force`オプション: 既存ファイルも強制上書き（デフォルトはオフ）

### Phase 6: 最終確認とコミット（10分）
1. すべての変更を確認
   - `git status`で変更ファイル確認
   - `git diff`で変更内容確認

2. コミットとプッシュ
   ```bash
   git add .
   git commit -m "詳細薬剤ページを午前4時時点に復元、ビルドツールに保護機能追加"
   git push origin main
   ```

## リスクと対策
- **リスク1**: 復元により新しい修正が失われる可能性
  - **対策**: 14:50以降の変更は主にindex.htmlとconfig.jsonのみ。薬剤詳細ページに手動変更はなし

- **リスク2**: ビルドツール再実行時の再上書き
  - **対策**: ビルドツールに保護機能を実装し、詳細ページの誤った上書きを防止

## 成功基準
1. ロサルタン等の薬剤ページが700行以上の詳細コンテンツを持つ
2. 各薬剤ページに以下のセクションが含まれる：
   - 30秒サマリー
   - 臨床的意義の詳細説明
   - 使い分けのポイント
   - 関連コンテンツリンク
3. ビルドツールが既存の詳細ページを保護する

## 所要時間
- 総計: 約45分
- 事前調査: 5分
- バックアップ: 5分
- 復元実行: 10分
- 検証: 10分
- ビルドツール改修: 15分

## 実行承認
この計画に基づいて復旧作業を実行してよろしいでしょうか？