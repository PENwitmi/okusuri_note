# PharmaDx project-docs ディレクトリ再構築計画

**作成日時**: 2025-06-30 17:45  
**作成者**: CEO  
**参考モデル**: pharm_study_watch_app/docs 構造

## 1. 現状の問題点

### 1.1 時系列の不明確さ
- ファイル名に日付はあるが、ディレクトリレベルでの時系列整理がない
- どの時期に何が起きたかの全体像が把握困難

### 1.2 関連ドキュメントの分散
- 同じイベント（例：404エラー対応）のドキュメントが複数ディレクトリに分散
- urgent/, progress/, planning/ に関連ファイルが散在

### 1.3 アーカイブ構造の欠如
- 現在のarchive/は主にHTMLバックアップ用
- 古いドキュメントの体系的なアーカイブがない

## 2. 新構造設計

### 2.1 基本原則
1. **時系列ファースト**: YYYY-MM-DD-topic-name/ 形式
2. **イベント単位**: 関連ドキュメントは1つのフォルダに集約
3. **恒久的ガイド**: 時系列に依存しない文書は専用フォルダ
4. **自動アーカイブ**: 古いイベントは自然にアーカイブ化

### 2.2 新ディレクトリ構造
```
project-docs/
├── 2025-06-27-project-start/           # プロジェクト開始
│   ├── README.md                       # このイベントの概要
│   ├── CEO_MANAGER_SESSION.md          # セッション記録
│   └── DEEP_THINKING_LOG.md            # 深い思考記録
├── 2025-06-28-website-design/          # Webサイト設計
│   ├── README.md
│   └── WEBSITE_DESIGN_PREPARATION.md
├── 2025-06-29-404-error-crisis/        # 404エラー対応
│   ├── README.md
│   ├── ROOT_CAUSE_ANALYSIS.md
│   ├── RESOLUTION_PLAN.md
│   ├── RESOLUTION_COMPLETE.md
│   └── PREVENTION_MEASURES.md
├── 2025-06-29-phase1-completion/       # Phase 1完了
│   ├── README.md
│   ├── DRUG_PAGE_FINAL_REPORT.md
│   ├── QUALITY_VERIFICATION.md
│   └── TASK_DELEGATION.md
├── 2025-06-30-content-restructure/     # コンテンツ構造改革
│   ├── README.md
│   ├── DIRECTORY_REFORM_DESIGN.md
│   ├── MIGRATION_MAPPING.md
│   ├── MIGRATION_REPORT.md
│   ├── CLEANUP_REPORT.md
│   └── BUILD_SYSTEM_UPDATE_PLAN.md
├── 2025-06-30-html-to-md-conversion/   # HTML→MD変換
│   ├── README.md
│   └── CONVERSION_COMPLETION_REPORT.md
├── development-guides/                  # 恒久的開発ガイド
│   ├── NAMING_CONVENTIONS.md
│   ├── PHASE2_WORKFLOW.md
│   └── CONTENT_QUALITY_STANDARDS.md
├── reference/                          # リファレンス資料
│   ├── DRUG_CATEGORY_MASTER_LIST.md
│   ├── DRUG_CONTENT_INDEX.md
│   └── EXISTING_CONTENT_ANALYSIS.md
├── templates/                          # テンプレート
│   └── README_TEMPLATE.md
├── _archive_superseded/                # 古い・置き換えられた文書
│   └── README.md
└── README.md                           # project-docs全体の説明
```

## 3. 移行マッピング

### 3.1 時系列イベントへの移行

#### 2025-06-27-project-start/
- sessions/CEO_MANAGER_SESSION_20250627.md
- sessions/DEEP_THINKING_LOG.md
- archive/development-logs/educational_revolution_foundation.md

#### 2025-06-28-website-design/
- planning/WEBSITE_DESIGN_PREPARATION_2025-06-28.md
- planning/CROSS_REFERENCE_DESIGN_PHILOSOPHY.md

#### 2025-06-29-404-error-crisis/
- urgent/404_FIX_INSTRUCTION_FOR_DEV_20250629.md
- urgent/404_RESOLUTION_PLAN_20250629.md
- urgent/404_ROOT_CAUSE_ANALYSIS_20250629.md
- urgent/CRITICAL_PATH_CONFUSION_20250629.md
- urgent/DRUG_PAGE_CRISIS_20250629.md
- progress/404_ERROR_ROOT_CAUSE_ANALYSIS_20250629.md
- progress/404_ERROR_PREVENTION_MEASURES_20250629.md
- progress/404_RESOLUTION_COMPLETE_20250629.md

#### 2025-06-29-phase1-completion/
- progress/DRUG_PAGE_FINAL_REPORT_20250629.md
- progress/DRUG_PAGE_QUALITY_STATUS_20250629.md
- progress/DRUG_PAGE_QUALITY_VERIFICATION_20250629.md
- progress/MANAGER_TASK_DELEGATION_20250629.md
- planning/CEO_TO_MANAGER_INSTRUCTION_20250629_SGLT2.md
- planning/MANAGER_DELEGATION_INSTRUCTIONS_20250629.md
- planning/INTEGRATED_RESOLUTION_PLAN_20250629.md
- decisions/CSS_NAMING_DECISION_20250629.md

#### 2025-06-30-content-restructure/
- architecture/CONTENT_DIRECTORY_REFORM_DESIGN_20250630.md
- architecture/CONTENT_MIGRATION_MAPPING_20250630.md
- architecture/BUILD_SYSTEM_UPDATE_PLAN_20250630.md
- progress/DIRECTORY_MIGRATION_REPORT_20250630.md
- progress/DIRECTORY_CLEANUP_REPORT_20250630.md

#### 2025-06-30-html-to-md-conversion/
- progress/HTML_TO_MD_CONVERSION_COMPLETION_REPORT_20250630.md

### 3.2 恒久的ガイドへの移行

#### development-guides/
- guides/NAMING_CONVENTIONS.md
- guides/PHASE2_DEVELOPMENT_WORKFLOW.md
- planning/CONTENT_QUALITY_STANDARDS.md
- planning/TASK_MANAGEMENT_RULES.md
- architecture/CONTENT_SEPARATION_ARCHITECTURE.md

#### reference/
- planning/DRUG_CATEGORY_MASTER_LIST.md
- planning/DRUG_SELECTION_CRITERIA.md
- planning/DRUG_DIFFERENTIATION_GUIDE.md
- reference/content-index/DRUG_CONTENT_INDEX.md
- reference/analysis-reports/EXISTING_CONTENT_ANALYSIS_REPORT.md
- reference/analysis-reports/DOCUMENTATION_CONSISTENCY_CHECKLIST.md

### 3.3 アーカイブ対象
- game_concept/ → _archive_superseded/2025-06-game-concept/
- archive/backups/ → 別途 _old_html_backups/ として分離
- 完了済みの古いプランニング文書

## 4. 各日付フォルダのREADME.md テンプレート

```markdown
# [イベント名] - YYYY-MM-DD

## 概要
このイベント/作業の簡潔な説明（1-2段落）

## 背景
- なぜこの作業が必要になったか
- 前提条件や依存関係

## 実施内容
1. 主要な作業項目
2. 決定事項
3. 成果物

## 結果
- 達成したこと
- 未解決の課題
- 次のステップ

## 関連ドキュメント
- [ドキュメント名](ファイル名) - 説明
```

## 5. 実装手順

### Phase 1: 準備（5分）
1. 現在のproject-docsをバックアップ
2. 新ディレクトリ構造の作成
3. README.mdテンプレートの準備

### Phase 2: 移行（20分）
1. 時系列イベントフォルダへのファイル移動
2. 各フォルダのREADME.md作成
3. 恒久的ガイドの整理
4. アーカイブの実施

### Phase 3: 検証（5分）
1. 全ファイルの移行確認
2. リンクの更新
3. 古いディレクトリの削除

## 6. 期待される効果

1. **時系列の可視化**: プロジェクトの進行が一目瞭然
2. **関連性の明確化**: 同じイベントの文書が集約
3. **自動アーカイブ**: 古いイベントは自然に過去のものとして認識
4. **検索性の向上**: 日付とトピックで素早く発見
5. **新規参加者への配慮**: プロジェクトの歴史が理解しやすい

## 7. 保守ルール

1. **新イベント発生時**: 必ず YYYY-MM-DD-topic-name/ フォルダを作成
2. **README.md必須**: 各イベントフォルダには必ずREADME.mdを作成
3. **即座に移動**: 関連ドキュメントは作成したら即座に適切なフォルダへ
4. **年次アーカイブ**: 1年以上前のイベントは _archive_YYYY/ へ移動

---

この構造により、pharm_study_watch_app/docs の優れた時系列管理を pharma_dex プロジェクトでも実現し、ドキュメントの発見性と保守性を大幅に向上させます。