# docs/クリーンアップ・アーカイブ計画 - 2025-06-30

## 基本方針

### generated/ディレクトリの正しい使い方
- **目的**: ビルドツールがMDファイルから自動生成したHTMLの出力先
- **現状**: 空（正しい状態）
- **方針**: 空のまま維持し、ビルド時に自動生成されるのを待つ

### 既存HTMLファイルの扱い
- すべてアーカイブへバックアップ
- docs/から削除してクリーンな状態にする
- index.htmlのみ維持（エントリーポイント）

## アーカイブ対象ファイルリスト

### docs/直下のHTMLファイル（34ファイル）
```
# 進化モデル系（→ アーカイブ）
ACE_inhibitor_evolution_model.html
ARB_evolution_model.html
beta_blocker_evolution_model.html
diuretics_evolution_model.html
PPI_evolution_model.html
SGLT2_evolution_model.html
SSRI_evolution_model.html
statin_evolution_model.html

# 個別薬剤（→ アーカイブ、drugs/と重複）
atorvastatin.html
bisoprolol.html
carvedilol.html
dapagliflozin.html
digoxin.html
enalapril.html
furosemide.html
perindopril.html
vancomycin.html
warfarin.html

# 統合ガイド・エコシステム（→ アーカイブ）
cardiovascular-orchestra.html
cardiovascular_integrated_guide.html
cardiovascular_orchestra_guide.html
INTEGRATED_CARDIOVASCULAR_GUIDE.html
hypertension_clinical_data.html
hypertension_treatment_ecosystem.html
drug_ecosystem_concept.html

# 処方実態（→ アーカイブ）
ARB_prescription_reality.html
ARB_prescription_reality_model.html
SGLT2_prescription_reality.html

# その他専門系（→ アーカイブ）
antibiotic_resistance_timeline.html
antibiotics_ecosystem_map.html
ecosystem_map_antibiotics.html
anticancer_evolution_data.html
metformin_detailed_model.html

# システムファイル（→ アーカイブ）
README.html
QUALITY_STANDARDS.html
MODEL_QUALITY_SUMMARY.html

# カテゴリー概要（→ アーカイブ）
category_overview.html
category_overview_v2.html
category_overview_v2.1.html
```

### docs/drugs/内のHTMLファイル（43ファイル）
```
# 英語名ファイル（23ファイル → アーカイブ）
atorvastatin.html
bisoprolol.html
candesartan.html
carvedilol.html
dapagliflozin.html
digoxin.html
empagliflozin.html
enalapril.html
escitalopram.html
esomeprazole.html
furosemide.html
lansoprazole.html
losartan.html
metformin.html
metformin_originated.html
omeprazole.html
perindopril.html
rosuvastatin.html
sertraline.html
spironolactone.html
telmisartan.html
vancomycin.html
warfarin.html

# カタカナ名ファイル（20ファイル → アーカイブ）
アトルバスタチン.html
エスシタロプラム.html
エソメプラゾール.html
エナラプリル.html
エンパグリフロジン.html
カルベジロール.html
カンデサルタン.html
ジゴキシン.html
スピロノラクトン.html
セルトラリン.html
ダパグリフロジン.html
テルミサルタン.html
バンコマイシン.html
ビソプロロール.html
フロセミド.html
ペリンドプリル.html
メトホルミン.html
ランソプラゾール.html
ロスバスタチン.html
ワルファリン.html
```

### その他のHTMLファイル
```
# categories/（3ファイル → アーカイブ）
cardiovascular.html
cardiovascular_arb.html
gastrointestinal.html

# stories/（2ファイル → アーカイブ）
insulin.html
penicillin.html
```

## 削除対象（アーカイブ不要）

### 空のバックアップディレクトリ
```
backup_20250629_172351/
backup_20250630_034455/
backup_20250630_040155/
backup_20250630_142706/
backup_20250630_174448/
```

## 移動対象

### 静的リソース
```
# CSS（docs/css/ → docs/assets/css/）
category-comparison.css
differentiation-table.css
drug-detail.css
interactive.css
story-layout.css
style.css

# JavaScript（docs/js/ → docs/assets/js/）
navigation.js
search.js
```

### 作業用MDファイル
```
# docs/直下 → docs/_internal/build_logs/2025-06-30/
BUILD_FLOW_IMPROVEMENT_PLAN_20250630.md
BUILD_SYSTEM_ANALYSIS_20250630.md
BUILD_TOOL_IMPROVEMENT_SUMMARY_20250630.md
CONTENT_STRUCTURE_GUIDE_20250630.md
HTML_TO_MD_CONVERSION_PLAN_20250630.md
MD_FILE_QUALITY_SAMPLES_20250630.md
MD_HTML_DISCREPANCY_REPORT_20250630.md
RECOVERY_PLAN_20250630.md
STATUS_REPORT_20250630.md
```

## 実行手順

### 1. アーカイブディレクトリ作成
```bash
mkdir -p docs/archive/backup_20250630_1825/html_files/{drugs,categories,stories,models,guides}
mkdir -p docs/archive/backup_20250630_1825/old_structure
```

### 2. HTMLファイルのアーカイブ
```bash
# 個別薬剤
mv docs/drugs/*.html docs/archive/backup_20250630_1825/html_files/drugs/
mv docs/*.html docs/archive/backup_20250630_1825/html_files/
# (index.htmlは除く)
```

### 3. 静的リソースの移動
```bash
mkdir -p docs/assets/{css,js,images}
mv docs/css/* docs/assets/css/
mv docs/js/* docs/assets/js/
```

### 4. 作業ファイルの移動
```bash
mkdir -p docs/_internal/build_logs/2025-06-30
mv docs/*.md docs/_internal/build_logs/2025-06-30/
```

### 5. 空ディレクトリの削除
```bash
rmdir docs/backup_*
rmdir docs/css docs/js docs/drugs docs/categories docs/stories docs/groups
```

### 6. generated/の準備
```bash
touch docs/generated/.gitkeep
```

## 最終的な構造

```
docs/
├── index.html          # エントリーポイント（維持）
├── generated/          # 空（ビルド待機）
│   └── .gitkeep
├── assets/             # 静的リソース
│   ├── css/            # スタイルシート
│   └── js/             # JavaScript
├── archive/            # バックアップ
│   └── backup_20250630_1825/
└── _internal/          # 内部文書
    └── build_logs/
```

## index.htmlの修正必要箇所

### CSSパス
```html
<!-- 変更前 -->
<link rel="stylesheet" href="css/style.css">
<!-- 変更後 -->
<link rel="stylesheet" href="assets/css/style.css">
```

### JSパス
```html
<!-- 変更前 -->
<script src="js/navigation.js"></script>
<!-- 変更後 -->
<script src="assets/js/navigation.js"></script>
```

### コンテンツリンク
- ビルド実行後に`generated/`内のパスに更新

## 次のステップ

1. **このクリーンアップ実行**
2. **ビルドツール実行**
   - `cd tools && ./build.sh`
   - content/のMDファイルからHTMLを生成
   - generated/に出力
3. **index.html更新**
   - generated/内の新しいパスにリンク更新

作成日時：2025-06-30 18:30
作成者：PharmaDx CEO