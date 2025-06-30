# PharmaDx プロジェクトドキュメント

**最終整理日**: 2025-06-30  
**構造**: 時系列ベース構造（pharm_study_watch_app/docs モデル参考）  
**目的**: プロジェクトの歴史と進化を追跡可能なドキュメント管理

## 📁 新ディレクトリ構造

### 📅 時系列イベント（YYYY-MM-DD-topic）
プロジェクトの重要イベントを時系列で整理。各フォルダにREADME.mdで概要説明。

- **2025-06-27-project-start/** - プロジェクト開始、CEO-Manager戦略セッション
- **2025-06-28-website-design/** - Webサイト設計、情報アーキテクチャ策定
- **2025-06-28-phase1-planning/** - Phase 1実装計画、開発者ブリーフィング
- **2025-06-29-404-error-crisis/** - 404エラー緊急対応、根本原因分析と解決
- **2025-06-29-phase1-completion/** - Phase 1完了、22薬剤実装100%達成
- **2025-06-30-content-restructure/** - コンテンツディレクトリ大規模再構築（67ファイル移行）
- **2025-06-30-html-to-md-conversion/** - HTMLからMarkdown変換完了
- **2025-06-30-phase2-planning/** - Phase 2計画策定、エンリッチメント戦略

### 📚 恒久的ガイド
時系列に依存しない永続的なガイドライン。

#### `development-guides/`
- **NAMING_CONVENTIONS.md** - 命名規則
- **PHASE2_DEVELOPMENT_WORKFLOW.md** - 開発ワークフロー
- **CONTENT_QUALITY_STANDARDS.md** - 品質基準
- **TASK_MANAGEMENT_RULES.md** - タスク管理ルール
- **CONTENT_SEPARATION_ARCHITECTURE.md** - アーキテクチャ設計
- **STORY_STRATEGY.md** - ストーリー戦略
- **PROGRESS.md** / **PROGRESS_TRACKER.md** - 進捗管理ツール
- **MASTER_STATUS_DASHBOARD.md** - 統合ステータスダッシュボード

#### `reference/`
- **DRUG_CATEGORY_MASTER_LIST.md** - 薬効群マスターリスト
- **DRUG_SELECTION_CRITERIA.md** - 薬剤選定基準
- **DRUG_DIFFERENTIATION_GUIDE.md** - 薬剤使い分けガイド
- **DRUG_CONTENT_INDEX.md** - コンテンツインデックス
- **EXISTING_CONTENT_ANALYSIS_REPORT.md** - 既存コンテンツ分析
- **DOCUMENTATION_CONSISTENCY_CHECKLIST.md** - 整合性チェックリスト
- **PRESCRIPTION_CULTURE_5_LAWS.md** - 処方文化の5つの法則

#### `templates/`
- 各種ドキュメントテンプレート

### 🗄️ アーカイブ
- **_archive_superseded/** - 置き換えられた古いドキュメント
- **_old_html_backups/** - HTMLバックアップ（別管理）

## 🎯 構造改革の効果

### ✅ 達成された改善
1. **時系列の可視化** - プロジェクトの進行が一目瞭然
2. **関連性の明確化** - 同じイベントの文書が1箇所に集約
3. **自動アーカイブ** - 古いイベントは自然に過去のものとして認識
4. **検索性の向上** - 日付とトピックで素早く発見
5. **新規参加者への配慮** - プロジェクトの歴史が理解しやすい

### 📋 使用方法
1. **新しいイベント発生時**
   - `YYYY-MM-DD-topic-name/` フォルダを作成
   - 必ずREADME.mdを作成して概要を記載
   - 関連ドキュメントはすべてこのフォルダに集約

2. **プロジェクトの歴史を追跡**
   - 日付順にフォルダを確認
   - 各フォルダのREADME.mdで概要を把握

3. **恒久的な情報を探す**
   - development-guides/ または reference/ を確認

## 🔗 クイックナビゲーション

### 最新の活動を知りたい
- `2025-06-30-content-restructure/` - 最新の構造改革
- `2025-06-30-phase2-planning/` - 今後の計画

### プロジェクトの歴史を理解したい
- `2025-06-27-project-start/` から時系列順に確認

### 開発ガイドを参照したい
- `development-guides/` - すべての開発ガイド
- `reference/` - リファレンス資料

---

**この時系列ベース構造により、PharmaDxプロジェクトの進化と成長が明確に追跡可能になりました。**