# PharmaDex 薬剤情報参照マップ

**作成日**: 2025-06-28  
**目的**: プロジェクト内の薬剤関連ドキュメントの完全なインデックス  
**総ファイル数**: 約53ファイル（MD: 39, HTML: 14）

このインデックスは、PharmaDexプロジェクト内のすべての薬剤関連情報への迅速なアクセスを提供します。

---

## 📊 1. 薬効群別詳細モデル（02_drug_database/）

### 1.1 循環器系薬（cardiovascular/）- 9ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `cardiovascular/ARB_evolution_model.md` | ARB進化系統図と臨床使い分け、5分サマリー付き | ロサルタン、カンデサルタン、テルミサルタン等 | 薬効群詳細 |
| `cardiovascular/ARB_prescription_reality_model.md` | ARB処方実態の深層分析（なぜカンデサルタンがシェア2位か） | カンデサルタン中心、全ARB | 処方文化 |
| `cardiovascular/ACE_inhibitor_evolution_model.md` | ACE阻害薬の進化と使い分け | エナラプリル、ペリンドプリル等 | 薬効群詳細 |
| `cardiovascular/beta_blocker_evolution_model.md` | β遮断薬の世代別分類と選択基準 | プロプラノロール、ビソプロロール等 | 薬効群詳細 |
| `cardiovascular/diuretics_evolution_model.md` | 利尿薬の分類と臨床応用 | フロセミド、スピロノラクトン等 | 薬効群詳細 |
| `cardiovascular/INTEGRATED_CARDIOVASCULAR_GUIDE.md` | 循環器薬総合ガイド | 全循環器薬 | 統合ガイド |
| `cardiovascular/cardiovascular_orchestra_guide.md` | 循環器薬の協奏的使用法 | 併用療法中心 | 臨床実践 |
| `cardiovascular/hypertension_treatment_ecosystem.md` | 高血圧治療エコシステム | 降圧薬全般 | 治療体系 |
| `cardiovascular/hypertension_clinical_data.md` | 高血圧臨床データ集 | 各種降圧薬 | 臨床データ |

### 1.2 抗生物質（antibiotics/）- 3ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `antibiotics/antibiotic_resistance_timeline.md` | 抗菌薬耐性の完全年表（1928-現在） | ペニシリン〜最新抗菌薬 | 歴史データ |
| `antibiotics/ecosystem_map_antibiotics.md` | 抗生物質エコシステムマップ | 全抗菌薬系統 | 薬効群詳細 |
| `antibiotics/README.md` | 抗生物質カテゴリー概要 | - | カテゴリー説明 |

### 1.3 消化器系薬（gastrointestinal/）- 1ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `gastrointestinal/PPI_evolution_model.md` | PPI進化モデルとCYP2C19遺伝子多型 | オメプラゾール、エソメプラゾール等 | 薬効群詳細 |

### 1.4 脂質異常症薬（lipid/）- 1ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `lipid/statin_evolution_model.md` | スタチン系薬剤の進化と使い分け | シンバスタチン、ロスバスタチン等 | 薬効群詳細 |

### 1.5 糖尿病薬（diabetes/）- 1ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `diabetes/SGLT2_prescription_reality.md` | SGLT2阻害薬の処方実態 | エンパグリフロジン、ダパグリフロジン等 | 処方実態 |

### 1.6 精神薬（psychotropic/）- 1ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `psychotropic/SSRI_evolution_model.md` | SSRI進化モデルと離脱症候群対策 | セルトラリン、エスシタロプラム等 | 薬効群詳細 |

### 1.7 抗がん薬（oncology/）- 1ファイル

| ファイルパス | 内容説明 | 主要薬剤 | タイプ |
|------------|---------|---------|--------|
| `oncology/anticancer_evolution_data.md` | 抗がん薬進化データ | 分子標的薬中心 | 薬効群詳細 |

### 1.8 総括・概要ファイル - 6ファイル

| ファイルパス | 内容説明 | タイプ |
|------------|---------|--------|
| `category_overview.md` | 薬効群カテゴリー全体像 | 総括 |
| `category_overview_v2.md` | カテゴリー概要改訂版 | 総括 |
| `category_overview_v2.1.md` | カテゴリー概要最新版 | 総括 |
| `drug_ecosystem_concept.md` | 薬剤エコシステム概念 | 概念設計 |
| `MODEL_QUALITY_SUMMARY.md` | モデル品質サマリー | 品質管理 |
| `QUALITY_STANDARDS.md` | 品質基準書 | 品質管理 |

---

## 📚 2. 個別薬剤学習カード（04_study_tools/）

### 2.1 国試頻出薬カード（HTML形式）- 5ファイル

| ファイルパス | 薬剤名 | 出題頻度 | 特徴 |
|------------|--------|----------|------|
| `vancomycin_exam_memory_card.html` | バンコマイシン | 30回（最多） | TDM必須、MRSA治療 |
| `gentamicin_exam_memory_card.html` | ゲンタマイシン | 24回 | アミノグリコシド系、腎毒性 |
| `digoxin_kokushi_card.html` | ジゴキシン | 20回 | 強心配糖体、TDM必須 |
| `phenobarbital_kokushi_card.html` | フェノバルビタール | 18回 | バルビツール酸系、CYP誘導 |
| `ARB_vs_ACE_inhibitor_memory_card.html` | ARB vs ACE比較 | - | 空咳の有無が決定的違い |

### 2.2 重要概念・個別薬剤（MD形式）- 6ファイル

| ファイルパス | 内容 | 薬剤/概念 | タイプ |
|------------|------|-----------|--------|
| `important_drugs_top100.md` | 国試重要薬TOP100リスト | 全100薬剤 | 優先順位リスト |
| `CYP2C19_memory_tool.md` | CYP2C19遺伝子多型と薬物代謝 | PPI、クロピドグレル等 | 薬物相互作用 |
| `morphine_memory_card.md` | モルヒネ記憶カード | モルヒネ | 個別薬剤 |
| `cyclosporine_memory_card.md` | シクロスポリン記憶カード | シクロスポリン | 個別薬剤 |
| `pharmacy_practice_FAQ_top10.md` | 実務でよくある質問TOP10 | 各種 | 実務知識 |
| `kokushi_priority_legacy.md` | 国試優先度（旧ゲーム版） | - | アーカイブ |

---

## 📖 3. 薬剤開発ストーリー（01_stories/）

### 3.1 10大ストーリー概要

| ディレクトリ | ストーリータイトル | 主要薬剤 | ファイル数 |
|------------|----------------|----------|-----------|
| `01_penicillin/` | ペニシリン伝説 | ペニシリン | 3 |
| `02_insulin/` | インスリン物語 | インスリン | 5 |
| `03_hypertension/` | 降圧薬革命 | β遮断薬、ACE阻害薬、ARB | 2 |
| `04_vancomycin/` | バンコマイシン覚醒 | バンコマイシン | 3 |
| `05_aspirin/` | アスピリン年代記 | アスピリン | 1 |
| `06_anticancer/` | 抗がん薬の夜明け | イマチニブ等 | 1 |
| `07_psychotropic/` | 精神薬の光と影 | クロルプロマジン等 | 1 |
| `08_vaccine/` | ワクチンの奇跡 | 各種ワクチン | 1 |
| `09_resistance/` | 耐性菌との終わりなき戦い | 各種抗菌薬 | 1 |
| `10_personalized/` | 個別化医療への道 | 分子標的薬 | 1 |
| `README.md` | 10大ストーリー一覧 | - | 1 |

### 3.2 主要ストーリーファイル（抜粋）

| ファイルパス | 内容 | フォーマット |
|------------|------|------------|
| `01_penicillin/01_penicillin_story_pure.md` | ペニシリン純粋物語 | ナラティブ |
| `02_insulin/02_insulin_story_script.md` | インスリン物語脚本版 | 対話形式 |
| `04_vancomycin/vancomycin_complete_history.md` | バンコマイシン完全史（277行） | 詳細年表 |

---

## 🗂️ 4. 歴史的・総合的データ（06_resources/data/）

| ファイルパス | 内容 | 扱う範囲 |
|------------|------|----------|
| `vaccine_milestone_history.md` | ワクチン開発マイルストーン史（421行） | 天然痘〜mRNAワクチン |
| `drug_safety_evolution.md` | 薬害・安全性制度の進化史（572行） | サリドマイド〜現代 |
| `personalized_medicine_data.md` | 個別化医療データ | ゲノム医療、分子標的薬 |

---

## 🔍 5. クイックアクセスガイド

### 特定の薬剤を探す場合

1. **国試頻出薬**: `04_study_tools/important_drugs_top100.md` でランキング確認
2. **薬効群から探す**: `02_drug_database/[薬効群名]/` 内のモデルファイル
3. **ストーリーから探す**: `01_stories/README.md` で関連ストーリー確認

### 用途別推奨参照順序

#### 🎯 国試対策
1. `04_study_tools/important_drugs_top100.md`（優先順位）
2. 個別の学習カード（HTMLファイル）
3. 該当する薬効群モデル

#### 💊 臨床実践
1. 薬効群別の進化モデル（使い分け重視）
2. 処方実態ファイル（`_prescription_reality`）
3. 統合ガイド（INTEGRATED_GUIDE）

#### 📚 薬学教育
1. 10大ストーリー（興味喚起）
2. 薬効群モデル（体系的理解）
3. 歴史的データ（文脈理解）

---

## 📝 メンテナンス情報

- **最終更新**: 2025-06-28
- **次回更新予定**: 新規ファイル追加時
- **管理責任**: CEO/Manager共同

このインデックスは、PharmaDexの実装において参照漏れを防ぎ、効率的な開発を支援するために作成されました。定期的な更新により、常に最新の状態を保ちます。