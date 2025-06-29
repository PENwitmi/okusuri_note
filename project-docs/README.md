# PharmaDx プロジェクトドキュメント

**整理日**: 2025-06-29  
**構造**: 論理的・フラット化構造  
**目的**: プロジェクト関連文書の効率的管理

## 📁 ディレクトリ構造

### `/reference/` - 参照資料
#### `content-index/`
- **DRUG_CONTENT_INDEX.md** - 53ファイルの完全インデックス

#### `analysis-reports/`
- **EXISTING_CONTENT_ANALYSIS_REPORT.md** - 既存コンテンツ分析レポート
- **DOCUMENTATION_CONSISTENCY_CHECKLIST.md** - ドキュメント整合性確保記録

### `/architecture/` - システム設計
- **CONTENT_SEPARATION_ARCHITECTURE.md** - コンテンツ分離アーキテクチャ設計書

### `/guides/` - 開発ガイド
- **PHASE2_DEVELOPMENT_WORKFLOW.md** - Phase 2後の開発ワークフロー

### `/planning/` - 企画・計画
- **PHASE2_MAJOR_RESTRUCTURE_PLAN.md** - Phase 2大規模再構築計画
- **CONTENT_LIST_DESIGN_PLAN.md** - コンテンツリスト設計計画
- **DRUG_SELECTION_CRITERIA.md** - 個別薬剤選定基準
- **DRUG_CATEGORY_MASTER_LIST.md** - 薬効群マスターリスト
- **CONTENT_QUALITY_STANDARDS.md** - 品質基準
- **CROSS_REFERENCE_DESIGN_PHILOSOPHY.md** - クロスリファレンス設計思想
- その他企画関連文書

### `/progress/` - 進捗管理
- **PROGRESS.md** - プロジェクト進捗
- **PROGRESS_TRACKER.md** - 進捗トラッカー

### `/archive/` - アーカイブ
- **evaluations/** - 過去の品質評価
- **game_concept/** - 旧ゲームコンセプト（参考資料）
- **sessions/** - CEO-Manager協働セッション記録
- **research/** - リサーチ資料
- **development-logs/** - 開発ログ（旧docs/dev_logs/から移動）

## 🎯 改善点

### ✅ 解決された問題
1. **深いネスト構造の解消** - project_management/planning/ → planning/
2. **ルートディレクトリの整理** - 散乱ファイルを適切な場所に移動
3. **論理的分類** - 目的別の明確な分類
4. **フラット化** - 必要以上の階層を削減

### 📋 ディレクトリ選択指針
- **reference**: 調べ物・参照用
- **architecture**: システム設計・構造
- **guides**: 開発・運用手順
- **planning**: 企画・戦略・計画
- **progress**: 進捗・状況報告
- **archive**: 過去資料・参考文書

## 🔗 主要ドキュメントへのクイックアクセス

### 現在の状況を知りたい場合
- `reference/analysis-reports/EXISTING_CONTENT_ANALYSIS_REPORT.md`
- `progress/PROGRESS.md`

### 開発を始めたい場合
- `guides/PHASE2_DEVELOPMENT_WORKFLOW.md`
- `architecture/CONTENT_SEPARATION_ARCHITECTURE.md`

### 企画・計画を確認したい場合
- `planning/PHASE2_MAJOR_RESTRUCTURE_PLAN.md`
- `planning/CONTENT_LIST_DESIGN_PLAN.md`

### コンテンツを探したい場合
- `reference/content-index/DRUG_CONTENT_INDEX.md`

---

**この整理により、プロジェクトドキュメントがより使いやすく、メンテナンスしやすくなりました。**