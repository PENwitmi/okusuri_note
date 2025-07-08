# 04-INFORMATION_MAPPING.md

**ドキュメント**: source_materials情報マッピング表  
**作成日**: 2025-07-08 02:26  
**作成者**: AI開発チーム  
**目的**: 各薬剤とsource_materials内ファイルの対応関係を明確化  
**用途**: v3ページ作成時の情報収集ガイド

---

## 🗺️ マッピング概要

### source_materialsの構造
```
source_materials/
├── drugs/                    # 個別薬剤の基本情報
├── drug_evolution/          # 薬効群の進化モデル
├── drug_stories/            # 開発ストーリー
├── study_guides/            # 学習ツール・記憶法
└── drug_database_originated/ # データベース由来情報
```

### 情報の優先順位
1. **必須**: drugs/[薬剤名].md（基本情報）
2. **必須**: drug_evolution/[薬効群モデル].md（進化・使い分け）
3. **推奨**: drug_stories/[関連ストーリー].md（感動的要素）
4. **推奨**: study_guides/[記憶ツール].md（学習支援）
5. **補助**: drug_database_originated/[薬剤名].md（追加情報）

---

## 💊 循環器系薬剤マッピング（7薬剤）

### 1. アトルバスタチン（atorvastatin）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/statins/atorvastatin.md | 史上最高売上医薬品の詳細 |
| **進化モデル** | drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md | スタチン進化系統図、強度分類 |
| **処方実態** | なし | - |
| **記憶ツール** | なし | - |

### 2. ビソプロロール（bisoprolol）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/beta_blockers/bisoprolol.md | β1選択性最高のβ遮断薬 |
| **進化モデル** | drug_evolution/evolution_models/cardiovascular/beta_blocker_evolution_model.md | β遮断薬の世代別特徴 |
| **使い分け** | drug_evolution/comparative_analyses/02_beta_blocker_differentiation.md | β遮断薬の臨床使い分け |
| **記憶ツール** | なし | - |

### 3. カンデサルタン（candesartan）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/arbs/candesartan.md | 最強のARB |
| **進化モデル** | drug_evolution/evolution_models/cardiovascular/ARB_evolution_model.md | ARB進化と特徴比較 |
| **処方実態** | drug_evolution/prescription_patterns/ARB_prescription_reality.md | ARB処方の実態分析 |
| **DB由来** | drug_database_originated/cardiovascular/candesartan.md | 追加情報 |

### 4. エナラプリル（enalapril）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/ace_inhibitors/enalapril.md | ACE阻害薬の標準 |
| **進化モデル** | drug_evolution/evolution_models/cardiovascular/ACE_inhibitor_evolution_model.md | ACE阻害薬の進化 |
| **記憶ツール** | study_guides/memory_tools/ARB_vs_ACE_inhibitor_memory_card.html | ACE/ARB比較記憶法 |

### 5. フロセミド（furosemide）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/diuretics/furosemide.md | ループ利尿薬の代表 |
| **進化モデル** | drug_evolution/evolution_models/cardiovascular/diuretics_evolution_model.md | 利尿薬の分類と進化 |

### 6. ジゴキシン（digoxin）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/others/digoxin.md | 最古の心不全薬 |
| **記憶ツール** | study_guides/memory_tools/digoxin_kokushi_card.html | 国試対策カード |

### 7. ワルファリン（warfarin）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/cardiovascular/anticoagulants/warfarin.md | 経口抗凝固薬の基準 |
| **記憶ツール** | なし | - |

---

## 🍬 内分泌系薬剤マッピング（5薬剤）

### 1. ダパグリフロジン（dapagliflozin）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/endocrine/sglt2_inhibitors/dapagliflozin.md | 世界初のSGLT2阻害薬 |
| **進化モデル** | drug_evolution/evolution_models/endocrine/SGLT2_evolution_model.md | SGLT2阻害薬の革新 |
| **処方実態** | drug_evolution/prescription_patterns/SGLT2_prescription_reality.md | 適応拡大の軌跡 |
| **使い分け** | drug_evolution/comparative_analyses/01_SGLT2_inhibitor_differentiation.md | SGLT2阻害薬比較 |

### 2. エンパグリフロジン（empagliflozin）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/endocrine/sglt2_inhibitors/empagliflozin.md | 心血管予後改善SGLT2 |
| **進化モデル** | drug_evolution/evolution_models/endocrine/SGLT2_evolution_model.md | （共通） |
| **DB由来** | drug_database_originated/diabetes/empagliflozin.md | 追加情報 |

### 3. メトホルミン（metformin）- 完成済み
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **v3完成** | docs/drugs-v3/metformin-v3.html | v3テンプレート |

### 4. その他の内分泌系
（省略 - 同様の形式で記載）

---

## 🧠 精神神経系薬剤マッピング（2薬剤）

### 1. エスシタロプラム（escitalopram）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/psychotropic/ssris/escitalopram.md | 最純粋なSSRI |
| **進化モデル** | drug_evolution/evolution_models/psychotropic/SSRI_evolution_model.md | SSRI進化系統 |
| **DB由来** | drug_database_originated/psychotropic/escitalopram.md | 追加情報 |

### 2. セルトラリン（sertraline）
| 情報種別 | ファイルパス | 内容概要 |
|---------|------------|---------|
| **基本情報** | drugs/psychotropic/ssris/sertraline.md | バランス型SSRI |
| **進化モデル** | drug_evolution/evolution_models/psychotropic/SSRI_evolution_model.md | （共通） |
| **DB由来** | drug_database_originated/psychotropic/sertraline.md | 追加情報 |

---

## 🔗 関連薬剤リンクマトリックス

### 循環器系内の相互参照
| 薬剤 | 関連薬剤1 | 関連薬剤2 | 関連薬剤3 | 関連薬剤4 |
|------|-----------|-----------|-----------|-----------|
| アトルバスタチン | ロスバスタチン | エゼチミブ | フェノフィブラート | EPA製剤 |
| ビソプロロール | カルベジロール | アテノロール | プロプラノロール | エナラプリル |
| カンデサルタン | テルミサルタン | ロサルタン | バルサルタン | エナラプリル |
| エナラプリル | ペリンドプリル | リシノプリル | カンデサルタン | アムロジピン |

### 薬効群を超えた関連
| 薬剤 | 併用頻度高 | 相互作用注意 | 適応症関連 |
|------|-----------|-------------|-----------|
| アトルバスタチン | アスピリン | ワルファリン | メトホルミン |
| ワルファリン | アスピリン | アトルバスタチン | ジゴキシン |

---

## 📚 開発ストーリーマッピング

### 感動的ストーリーが存在する薬剤
| 薬剤 | ストーリーファイル | ストーリータイプ |
|------|------------------|----------------|
| インスリン | drug_stories/development_dramas/02_insulin/ | 命を救った発見 |
| ペニシリン | drug_stories/discovery_legends/01_penicillin/ | 偶然の発見 |
| アスピリン | drug_stories/discovery_legends/05_aspirin/ | 万能薬の進化 |

### ストーリー要素の抽出方法
1. drug_stories内の関連ファイルを確認
2. 「感動的瞬間」「困難の克服」を抽出
3. レベル3コンテンツに組み込み

---

## 🎓 学習ツールマッピング

### 記憶ツールが存在する薬剤
| 薬剤 | ツールファイル | ツールタイプ |
|------|--------------|-------------|
| ジゴキシン | digoxin_kokushi_card.html | 国試対策カード |
| バンコマイシン | vancomycin_exam_memory_card.html | 試験対策 |
| ワルファリン | （作成推奨） | INR覚え方 |

---

## 💡 情報収集のベストプラクティス

### 収集の順序
1. **基本情報確認**: drugs/[薬剤名].mdを最初に読む
2. **薬効群理解**: evolution_model.mdで位置づけを把握
3. **差別化要因**: comparative_analyses/で使い分けを確認
4. **付加価値探索**: stories/やstudy_guides/で独自要素を発見

### 情報の編成方法
```
レベル1 ← drugs/基本情報の要約
レベル2 ← evolution_model/の使い分け部分
レベル3 ← stories/の感動的要素 + evolution_model/の歴史
```

### 不足情報への対処
- 基本情報がない → PubMed、添付文書から補完
- 進化モデルがない → 類似薬効群から推測
- ストーリーがない → 開発企業の歴史から探索

---

## 📋 チェックリスト

### 情報収集完了確認
- [ ] drugs/内の基本情報ファイル確認
- [ ] drug_evolution/内の関連モデル確認
- [ ] drug_stories/内のストーリー有無確認
- [ ] study_guides/内の学習ツール確認
- [ ] 関連薬剤の選定完了
- [ ] 不足情報の特定と対策検討

---

**情報マッピングステータス**: ✅ 初版完成、移行作業での更新予定