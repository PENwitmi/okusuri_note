# okusuri_note 移行計画書

作成日時: 2025-07-01 02:17  
作成者: CEO  
プロジェクト: pharma_dex → okusuri_note 名称変更

## 1. 概要

### 背景
- 製品名が「Drug Base」から「おくすりノート」に確定
- GitHubリポジトリ名をpharma_dexからokusuri_noteに変更済み
- プロジェクト全体の名称統一が必要

### GitHub変更情報
- 旧URL: https://github.com/PENwitmi/pharma_dex
- 新URL: https://github.com/PENwitmi/okusuri_note
- 変更日時: 2025-07-01

## 2. 移行スコープ

### 2.1 ディレクトリ・リポジトリ設定
- [x] ローカルディレクトリ名: pharma_dex → okusuri_note ✅ CEO実施済み（2025-07-01 02:20）
- [x] Git remote URL更新 ✅ CEO実施済み（2025-07-01 02:20）
- [ ] .gitignore等の設定ファイル確認

### 2.2 プロジェクト名参照の更新
- [ ] package.json内のname属性
- [ ] README.md内のプロジェクト名
- [ ] CLAUDE.md内の参照
- [ ] ドキュメント内のパス参照
- [ ] コード内コメント
- [ ] 設定ファイル内の参照

### 2.3 ブランド名の統一
- [ ] HTML title要素: "Drug Base" → "おくすりノート"
- [ ] ヘッダーのサイト名表示
- [ ] フッターの著作権表示
- [ ] メタタグ（OGP、description等）
- [ ] favicon、ロゴ等の更新（必要に応じて）

## 3. 実施手順

### Phase 1: 基盤更新（優先度：高）
**状態: CEO実施済み（2025-07-01 02:20）**
- [x] ディレクトリ名変更: pharma_dex → okusuri_note
- [x] Git remote URL更新

**担当: Dev1 - 残りのタスク**
```bash
# 動作確認
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note
git fetch
git status

# .gitignore等の設定ファイル確認
cat .gitignore
ls -la
```

### Phase 2: ファイル内参照更新（優先度：高）
**担当: Dev2**
- 全ファイルで"pharma_dex"を"okusuri_note"に置換
- 大文字小文字のバリエーションも考慮
- 更新対象ファイルリストの作成と実行

### Phase 3: ブランド表示更新（優先度：中）
**担当: Dev3**
- UI上の"Drug Base"を"おくすりノート"に変更
- 日本語表記の統一性確認
- ユーザー向け表示の全面確認

## 4. 注意事項

### 4.1 Git操作について
- **開発者（Dev1-3）はGit操作禁止**
- すべてのcommit/pushはCEOが実施
- 変更は一旦ローカルで確認後、CEOがレビュー

### 4.2 影響範囲の確認
- 外部サービス連携がある場合は要確認
- CI/CD設定がある場合は要更新
- デプロイ設定の確認

### 4.3 バックアップ
- 移行前の状態をバックアップ
- 重要ファイルは個別に保存

## 5. 完了基準

### 技術的完了基準
- [ ] すべてのpharma_dex参照がokusuri_noteに変更
- [ ] Git操作が正常に動作
- [ ] Webサイトが正常に表示
- [ ] エラーログなし

### ブランド完了基準
- [ ] すべての表示が「おくすりノート」に統一
- [ ] 旧名称の残存なし
- [ ] 一貫性のある日本語表記

## 6. タイムライン
- 開始予定: 2025-07-01 02:30
- 完了予定: 2025-07-01 03:15
- 所要時間: 約45分

## 7. リスクと対策
| リスク | 影響度 | 対策 |
|--------|--------|------|
| Git接続エラー | 高 | remote URL確認、認証情報確認 |
| 置換ミス | 中 | 事前にgrepで対象確認、段階的置換 |
| 表示崩れ | 低 | 各ページの目視確認 |

## 8. 連絡事項
- 問題発生時は即座にCEOへエスカレーション
- 各フェーズ完了時に進捗報告
- 不明点は実施前に必ず確認