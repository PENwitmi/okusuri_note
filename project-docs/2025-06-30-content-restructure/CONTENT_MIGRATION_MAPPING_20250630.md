# PharmaDx コンテンツ移行マッピング表

**作成日**: 2025-06-30 17:00  
**作成者**: CEO  
**目的**: 現行ファイルから新構造への具体的な移行マッピング

## 1. 移行サマリー

### 1.1 移行規模
- **総ファイル数**: 約100ファイル
- **主要移行対象**: 37ファイル（drug_database/）
- **新規作成ディレクトリ**: 15ディレクトリ
- **移行期間見込み**: 2-3時間（段階的実施）

### 1.2 移行原則
1. **意味的分類優先**: ファイル名より内容で判断
2. **重複排除**: 類似ファイルは統合検討
3. **参照整合性維持**: 相互参照の自動更新

## 2. drug_database/ からの移行マッピング

### 2.1 個別薬剤ファイル → drugs/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| drug_database/cardiovascular/warfarin.md | drugs/cardiovascular/anticoagulants/warfarin.md | 抗凝固薬として分類 |
| drug_database/cardiovascular/enalapril.md | drugs/cardiovascular/ace_inhibitors/enalapril.md | |
| drug_database/cardiovascular/perindopril.md | drugs/cardiovascular/ace_inhibitors/perindopril.md | |
| drug_database/cardiovascular/carvedilol.md | drugs/cardiovascular/beta_blockers/carvedilol.md | |
| drug_database/cardiovascular/bisoprolol.md | drugs/cardiovascular/beta_blockers/bisoprolol.md | |
| drug_database/cardiovascular/furosemide.md | drugs/cardiovascular/diuretics/furosemide.md | |
| drug_database/cardiovascular/digoxin.md | drugs/cardiovascular/others/digoxin.md | 強心薬 |
| drug_database/cardiovascular/atorvastatin.md | drugs/cardiovascular/statins/atorvastatin.md | |
| drug_database/gastrointestinal/esomeprazole.md | drugs/gastrointestinal/ppis/esomeprazole.md | |
| drug_database/gastrointestinal/lansoprazole.md | drugs/gastrointestinal/ppis/lansoprazole.md | |
| drug_database/diabetes/dapagliflozin.md | drugs/endocrine/sglt2_inhibitors/dapagliflozin.md | |
| drug_database/diabetes/metformin_detailed_model.md | drugs/endocrine/biguanides/metformin.md | ファイル名簡潔化 |
| drug_database/antibiotics/vancomycin.md | drugs/antimicrobials/antibiotics/vancomycin.md | |

### 2.2 薬効群モデル → drug_evolution/evolution_models/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| drug_database/cardiovascular/ARB_evolution_model.md | drug_evolution/evolution_models/cardiovascular/ARB_evolution_model.md | |
| drug_database/cardiovascular/ACE_inhibitor_evolution_model.md | drug_evolution/evolution_models/cardiovascular/ACE_inhibitor_evolution_model.md | |
| drug_database/cardiovascular/beta_blocker_evolution_model.md | drug_evolution/evolution_models/cardiovascular/beta_blocker_evolution_model.md | |
| drug_database/cardiovascular/diuretics_evolution_model.md | drug_evolution/evolution_models/cardiovascular/diuretics_evolution_model.md | |
| drug_database/gastrointestinal/PPI_evolution_model.md | drug_evolution/evolution_models/gastrointestinal/PPI_evolution_model.md | |
| drug_database/psychotropic/SSRI_evolution_model.md | drug_evolution/evolution_models/psychotropic/SSRI_evolution_model.md | |
| drug_database/lipid/statin_evolution_model.md | drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md | 循環器系に統合 |
| drug_database/diabetes/SGLT2_evolution_model.md | drug_evolution/evolution_models/endocrine/SGLT2_evolution_model.md | |

### 2.3 処方実態・臨床ガイド → drug_evolution/

| 現在のパス | 移行先パス | カテゴリ |
|------------|------------|----------|
| drug_database/cardiovascular/ARB_prescription_reality_model.md | drug_evolution/prescription_patterns/ARB_prescription_reality.md | 処方実態 |
| drug_database/diabetes/SGLT2_prescription_reality.md | drug_evolution/prescription_patterns/SGLT2_prescription_reality.md | 処方実態 |
| drug_database/cardiovascular/hypertension_treatment_ecosystem.md | drug_evolution/clinical_ecosystems/hypertension_treatment_ecosystem.md | エコシステム |
| drug_database/cardiovascular/hypertension_clinical_data.md | drug_evolution/clinical_ecosystems/hypertension_clinical_data.md | エコシステム |
| drug_database/cardiovascular/INTEGRATED_CARDIOVASCULAR_GUIDE.md | drug_evolution/clinical_ecosystems/cardiovascular_integrated_guide.md | エコシステム |

### 2.4 学習ツール → study_guides/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| drug_database/cardiovascular/cardiovascular_orchestra_guide.md | study_guides/orchestra_theory/cardiovascular_orchestra_guide.md | |
| drug_database/antibiotics/ecosystem_map_antibiotics.md | drug_evolution/clinical_ecosystems/antibiotics_ecosystem_map.md | エコシステムとして再分類 |
| drug_database/antibiotics/antibiotic_resistance_timeline.md | drug_evolution/evolution_models/antimicrobials/antibiotic_resistance_evolution.md | 進化の観点で再分類 |

### 2.5 システム文書 → _system/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| drug_database/QUALITY_STANDARDS.md | _system/quality_standards/DRUG_CONTENT_QUALITY_STANDARDS.md | |
| drug_database/MODEL_QUALITY_SUMMARY.md | _system/quality_standards/MODEL_QUALITY_SUMMARY.md | |
| drug_database/category_overview.md | _system/metadata/category_overview_v1.md | バージョン管理 |
| drug_database/category_overview_v2.1.md | _system/metadata/category_overview_v2.1.md | |
| drug_database/antibiotics/README.md | _system/metadata/antibiotics_category_readme.md | |

## 3. その他ディレクトリの移行

### 3.1 stories/ → drug_stories/

| 現在のパス | 移行先パス | カテゴリ |
|------------|------------|----------|
| stories/01_penicillin/*.md | drug_stories/discovery_legends/01_penicillin_miracle.md | 統合検討 |
| stories/02_insulin/*.md | drug_stories/development_dramas/02_insulin_revolution.md | 統合検討 |
| stories/03_hypertension/*.md | drug_stories/development_dramas/03_hypertension_conquest.md | 統合検討 |
| stories/05_aspirin/*.md | drug_stories/discovery_legends/05_aspirin_journey.md | 統合検討 |
| stories/10_personalized/*.md | drug_stories/innovation_chronicles/personalized_medicine_future.md | |

### 3.2 study_tools/ → study_guides/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| study_tools/*.md | study_guides/exam_preparation/*.md | 用途別に再分類 |

### 3.3 resources/ → _resources/

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| resources/docs/*.md | _resources/research_notes/*.md | |
| resources/templates/*.md | _resources/templates/*.md | |
| resources/data/*.md | _resources/raw_data/*.md | |

### 3.4 新規作成（differentiation/から）

| 現在のパス | 移行先パス | 備考 |
|------------|------------|------|
| differentiation/*.md | drug_evolution/comparative_analyses/*.md | 比較分析として統合 |

## 4. drug_database_originated/ の扱い

### 4.1 現状維持の理由
- HTML→MD逆変換の成果物として歴史的価値
- 12薬剤分のMarkdownソース（2,450行）
- 将来的な参照・検証用

### 4.2 特別移行（高品質ファイル）
| ファイル | 理由 | 移行先 |
|----------|------|--------|
| esomeprazole.md | 大幅な内容補強済み | drugs/gastrointestinal/ppis/ |
| lansoprazole.md | 独自分析・深い洞察含む | drugs/gastrointestinal/ppis/ |

## 5. 移行実施手順

### 5.1 Phase 1: 基盤準備（30分）
```bash
# 1. バックアップ作成
cp -r content/ _old_files/backup_20250630_1700/

# 2. 新ディレクトリ構造作成
mkdir -p content/{drugs,drug_evolution,drug_stories,study_guides,_resources,_system}
mkdir -p content/drug_evolution/{evolution_models,comparative_analyses,prescription_patterns,clinical_ecosystems}
# ... (全サブディレクトリ作成)
```

### 5.2 Phase 2: システム文書移行（15分）
- _system/への移行を最初に実施
- ビルドプロセスへの影響を最小化

### 5.3 Phase 3: 薬効群モデル移行（45分）
- drug_evolution/への移行
- PharmaDxの核心価値を優先

### 5.4 Phase 4: 個別薬剤整理（60分）
- drugs/への移行と整理
- カテゴリ別サブディレクトリへの配置

### 5.5 Phase 5: 検証とリンク更新（30分）
- 相互参照の確認と更新
- ビルドテストの実施

## 6. 移行後の検証項目

### 6.1 ファイル数確認
```bash
# 移行前後のファイル数が一致することを確認
find content -name "*.md" | wc -l
```

### 6.2 リンク整合性
- 内部リンクの404チェック
- 相対パスの更新確認

### 6.3 ビルドプロセス
- tools/convert_pharmadx.jsの動作確認
- 生成されるHTMLの品質確認

## 7. 注意事項

### 7.1 ファイル名の変更
- `metformin_detailed_model.md` → `metformin.md`（簡潔化）
- 日本語ファイル名は英語に統一

### 7.2 重複コンテンツの統合
- 各ストーリーの複数ファイルは内容確認後に統合検討
- 類似する進化モデルは統合可能性を検討

### 7.3 移行時の一時的影響
- ビルドプロセスは一時的に停止
- 段階的移行により影響を最小化

## 8. 移行成功の判定基準

1. **全ファイルの移行完了**: チェックリストで確認
2. **ビルドエラーゼロ**: tools/build.shの正常動作
3. **リンク切れゼロ**: 内部参照の整合性維持
4. **構造の明確性**: 各ディレクトリの役割が一目瞭然

この移行により、PharmaDxのコンテンツは「ユーザーの知りたい」に直接応える、直感的で拡張性の高い構造へと進化します。