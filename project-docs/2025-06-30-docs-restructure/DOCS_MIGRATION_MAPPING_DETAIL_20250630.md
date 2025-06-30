# docs/ディレクトリ移行詳細マッピング表 - 2025-06-30

## 個別薬剤ファイル移行表

### docs/直下の薬剤ファイル（削除対象 - drugs/内と重複）
| 現在のファイル | 状態 | アクション |
|--------------|------|-----------|
| atorvastatin.html | drugs/と重複 | 削除 |
| bisoprolol.html | drugs/と重複 | 削除 |
| carvedilol.html | drugs/と重複 | 削除 |
| dapagliflozin.html | drugs/と重複 | 削除 |
| digoxin.html | drugs/と重複 | 削除 |
| enalapril.html | drugs/と重複 | 削除 |
| furosemide.html | drugs/と重複 | 削除 |
| perindopril.html | drugs/と重複 | 削除 |
| vancomycin.html | drugs/と重複 | 削除 |
| warfarin.html | drugs/と重複 | 削除 |

### docs/drugs/内のファイル移行（英語名ファイルのみ）
| 現在のファイル | 移行先 |
|--------------|--------|
| drugs/atorvastatin.html | generated/drugs/atorvastatin.html |
| drugs/bisoprolol.html | generated/drugs/bisoprolol.html |
| drugs/candesartan.html | generated/drugs/candesartan.html |
| drugs/carvedilol.html | generated/drugs/carvedilol.html |
| drugs/dapagliflozin.html | generated/drugs/dapagliflozin.html |
| drugs/digoxin.html | generated/drugs/digoxin.html |
| drugs/empagliflozin.html | generated/drugs/empagliflozin.html |
| drugs/enalapril.html | generated/drugs/enalapril.html |
| drugs/escitalopram.html | generated/drugs/escitalopram.html |
| drugs/esomeprazole.html | generated/drugs/esomeprazole.html |
| drugs/furosemide.html | generated/drugs/furosemide.html |
| drugs/lansoprazole.html | generated/drugs/lansoprazole.html |
| drugs/losartan.html | generated/drugs/losartan.html |
| drugs/metformin.html | generated/drugs/metformin.html |
| drugs/metformin_originated.html | generated/drugs/metformin_detailed.html |
| drugs/omeprazole.html | generated/drugs/omeprazole.html |
| drugs/perindopril.html | generated/drugs/perindopril.html |
| drugs/rosuvastatin.html | generated/drugs/rosuvastatin.html |
| drugs/sertraline.html | generated/drugs/sertraline.html |
| drugs/spironolactone.html | generated/drugs/spironolactone.html |
| drugs/telmisartan.html | generated/drugs/telmisartan.html |
| drugs/vancomycin.html | generated/drugs/vancomycin.html |
| drugs/warfarin.html | generated/drugs/warfarin.html |

### 日本語版ファイル（削除対象）
| 現在のファイル | アクション | 理由 |
|--------------|-----------|------|
| drugs/アトルバスタチン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/エスシタロプラム.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/エソメプラゾール.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/エナラプリル.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/エンパグリフロジン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/カルベジロール.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/カンデサルタン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ジゴキシン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/スピロノラクトン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/セルトラリン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ダパグリフロジン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/テルミサルタン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/バンコマイシン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ビソプロロール.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/フロセミド.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ペリンドプリル.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/メトホルミン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ランソプラゾール.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ロスバスタチン.html | 削除 | 英語版と重複、管理混乱の原因 |
| drugs/ワルファリン.html | 削除 | 英語版と重複、管理混乱の原因 |

## 薬効群・モデルファイル移行表

### 進化モデル
| 現在のファイル | 移行先 |
|--------------|--------|
| ACE_inhibitor_evolution_model.html | generated/groups/evolution/ACE_inhibitor_evolution.html |
| ARB_evolution_model.html | generated/groups/evolution/ARB_evolution.html |
| beta_blocker_evolution_model.html | generated/groups/evolution/beta_blocker_evolution.html |
| diuretics_evolution_model.html | generated/groups/evolution/diuretics_evolution.html |
| PPI_evolution_model.html | generated/groups/evolution/PPI_evolution.html |
| SGLT2_evolution_model.html | generated/groups/evolution/SGLT2_evolution.html |
| SSRI_evolution_model.html | generated/groups/evolution/SSRI_evolution.html |
| statin_evolution_model.html | generated/groups/evolution/statin_evolution.html |

### エコシステム・統合ガイド
| 現在のファイル | 移行先 |
|--------------|--------|
| cardiovascular-orchestra.html | generated/groups/ecosystem/cardiovascular_orchestra.html |
| cardiovascular_integrated_guide.html | generated/groups/ecosystem/cardiovascular_integrated.html |
| cardiovascular_orchestra_guide.html | archive/（重複のため） |
| INTEGRATED_CARDIOVASCULAR_GUIDE.html | archive/（重複のため） |
| hypertension_clinical_data.html | generated/groups/ecosystem/hypertension_clinical.html |
| hypertension_treatment_ecosystem.html | generated/groups/ecosystem/hypertension_treatment.html |
| drug_ecosystem_concept.html | generated/groups/ecosystem/drug_ecosystem_concept.html |

### 処方実態・比較
| 現在のファイル | 移行先 |
|--------------|--------|
| ARB_prescription_reality.html | generated/groups/comparison/ARB_prescription.html |
| ARB_prescription_reality_model.html | archive/（重複のため） |
| SGLT2_prescription_reality.html | generated/groups/comparison/SGLT2_prescription.html |

### 専門データ
| 現在のファイル | 移行先 |
|--------------|--------|
| antibiotic_resistance_timeline.html | generated/groups/evolution/antibiotic_resistance.html |
| antibiotics_ecosystem_map.html | generated/groups/ecosystem/antibiotics_ecosystem.html |
| ecosystem_map_antibiotics.html | archive/（重複のため） |
| anticancer_evolution_data.html | generated/groups/evolution/anticancer_evolution.html |
| metformin_detailed_model.html | generated/drugs/metformin_model.html |

## システム・カテゴリーファイル移行表

### カテゴリー概要
| 現在のファイル | 移行先 |
|--------------|--------|
| category_overview_v2.1.html | generated/groups/overview.html |
| category_overview_v2.html | archive/old_versions/ |
| category_overview.html | archive/old_versions/ |

### カテゴリーページ
| 現在のファイル | 移行先 |
|--------------|--------|
| categories/cardiovascular.html | generated/groups/category/cardiovascular.html |
| categories/cardiovascular_arb.html | generated/groups/category/cardiovascular_arb.html |
| categories/gastrointestinal.html | generated/groups/category/gastrointestinal.html |

### システムファイル
| 現在のファイル | 移行先 |
|--------------|--------|
| README.html | archive/（ビルドで再生成） |
| QUALITY_STANDARDS.html | _internal/build_logs/ |
| MODEL_QUALITY_SUMMARY.html | _internal/build_logs/ |

## ストーリー・静的リソース移行表

### ストーリー
| 現在のファイル | 移行先 |
|--------------|--------|
| stories/insulin.html | generated/stories/development/insulin.html |
| stories/penicillin.html | generated/stories/discovery/penicillin.html |

### CSS
| 現在のファイル | 移行先 |
|--------------|--------|
| css/category-comparison.css | assets/css/category-comparison.css |
| css/differentiation-table.css | assets/css/differentiation-table.css |
| css/drug-detail.css | assets/css/drug-detail.css |
| css/interactive.css | assets/css/interactive.css |
| css/story-layout.css | assets/css/story-layout.css |
| css/style.css | assets/css/style.css |

### JavaScript
| 現在のファイル | 移行先 |
|--------------|--------|
| js/navigation.js | assets/js/navigation.js |
| js/search.js | assets/js/search.js |

## 作業ファイル・バックアップ移行表

### 作業用MDファイル
| 現在のファイル | 移行先 |
|--------------|--------|
| BUILD_FLOW_IMPROVEMENT_PLAN_20250630.md | _internal/build_logs/2025-06-30/ |
| BUILD_SYSTEM_ANALYSIS_20250630.md | _internal/build_logs/2025-06-30/ |
| BUILD_TOOL_IMPROVEMENT_SUMMARY_20250630.md | _internal/build_logs/2025-06-30/ |
| CONTENT_STRUCTURE_GUIDE_20250630.md | _internal/build_logs/2025-06-30/ |
| HTML_TO_MD_CONVERSION_PLAN_20250630.md | _internal/build_logs/2025-06-30/ |
| MD_FILE_QUALITY_SAMPLES_20250630.md | _internal/build_logs/2025-06-30/ |
| MD_HTML_DISCREPANCY_REPORT_20250630.md | _internal/build_logs/2025-06-30/ |
| RECOVERY_PLAN_20250630.md | _internal/build_logs/2025-06-30/ |
| STATUS_REPORT_20250630.md | _internal/build_logs/2025-06-30/ |

### バックアップディレクトリ（削除対象）
- backup_20250629_172351/ → 削除（空）
- backup_20250630_034455/ → 削除（空）
- backup_20250630_040155/ → 削除（空）
- backup_20250630_142706/ → 削除（空）
- backup_20250630_174448/ → 削除（空）

### その他
| 現在のファイル | 移行先 |
|--------------|--------|
| index.html | そのまま維持（リンク修正必要） |
| index.html.backup_20250629_161337 | archive/backups/ |

## 特記事項

1. **generated/ディレクトリ**はビルドツールが管理するため、手動編集は避ける
2. **日本語ファイル名**は既存のものを維持（アトルバスタチン.html等）
3. **重複ファイル**は最新版のみを残し、旧版はarchiveへ
4. **空ディレクトリ**には.gitkeepを配置してGit管理下に置く
5. **パス変更**に伴い、index.htmlとconvert_pharmadx.jsの修正が必要

## 実行優先順位

1. **最優先**: 重複ファイルの削除（docs/直下の個別薬剤）
2. **高**: 薬効群モデルファイルの整理
3. **中**: 静的リソースの移動
4. **低**: バックアップディレクトリの削除

作成日時：2025-06-30 18:20
作成者：PharmaDx CEO