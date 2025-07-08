# PharmaDx コンテンツディレクトリ構造改革 詳細設計書

**作成日**: 2025-06-30 16:57  
**作成者**: CEO  
**目的**: コンテンツディレクトリの体系的再構築による教育価値の最大化

## 1. 背景と問題認識

### 1.1 現状の問題点

#### 構造的混乱
- **drug_database/内の無秩序**: 37ファイルが分類なく混在
  - 個別薬剤: 8ファイル（warfarin.md, enalapril.md等）
  - 薬効群モデル: 12ファイル（ARB_evolution_model.md等）
  - 臨床ガイド: 5ファイル（hypertension_treatment_ecosystem.md等）
  - システム文書: 4ファイル（QUALITY_STANDARDS.md等）
  - その他: 8ファイル

#### 特定ディレクトリへの集中
- **cardiovascular/**: 17ファイルが集中（全体の46%）
- **他カテゴリ**: 多くが0-4ファイルと偏在

#### 役割不明確なディレクトリ
- **resources/**: 5ファイルのみ、活用されていない
- **stories/**: 薬剤開発物語が散在、体系化されていない

### 1.2 根本的課題
1. **ユーザー視点の欠如**: 「何を知りたいか」に対応していない構造
2. **PharmaDx価値の不明確さ**: 「なぜ似た薬が複数あるのか」への回答が埋没
3. **拡張性の限界**: 300薬剤への拡張時に破綻する構造

## 2. 新構造の設計理念

### 2.1 核心原則
**「ユーザーの知りたいに直接応える構造」**

### 2.2 4つの基本質問への対応
1. **「この薬について詳しく知りたい」** → drugs/
2. **「なぜ似た薬が複数あるのか知りたい」** → drug_evolution/
3. **「薬の開発物語を読みたい」** → drug_stories/
4. **「薬学を効率的に学びたい」** → study_guides/

## 3. 新ディレクトリ構造詳細

### 3.1 全体構造
```
content/
├── drugs/                          # 個別薬剤事典
├── drug_evolution/                 # なぜ似た薬があるのか
├── drug_stories/                   # 薬の物語
├── study_guides/                   # 薬学学習ガイド
├── _resources/                     # 内部参照用（非公開）
├── _system/                        # システム設定（非公開）
└── drug_database_originated/       # オリジナル保持
```

### 3.2 drugs/ - 個別薬剤事典

#### 目的
個別薬剤の包括的情報を提供する「薬剤百科事典」

#### 構造
```
drugs/
├── cardiovascular/                 # 循環器系
│   ├── ace_inhibitors/
│   │   ├── enalapril.md
│   │   └── perindopril.md
│   ├── arbs/
│   │   ├── candesartan.md
│   │   ├── telmisartan.md
│   │   └── losartan.md
│   ├── beta_blockers/
│   │   ├── carvedilol.md
│   │   └── bisoprolol.md
│   ├── diuretics/
│   │   ├── furosemide.md
│   │   └── spironolactone.md
│   └── others/
│       ├── digoxin.md
│       └── warfarin.md
├── gastrointestinal/
│   └── ppis/
│       ├── esomeprazole.md
│       ├── lansoprazole.md
│       └── omeprazole.md
└── ...
```

#### コンテンツ標準構造
1. 5分でわかる要約
2. 基本情報（一般名、商品名、薬効分類）
3. 作用機序
4. 適応症
5. 用法・用量
6. 副作用・注意事項
7. 臨床での位置づけ
8. 将来展望

### 3.3 drug_evolution/ - なぜ似た薬があるのか

#### 目的
PharmaDxの核心価値「なぜ似た薬が複数存在するのか」への包括的回答

#### 構造
```
drug_evolution/
├── evolution_models/               # 進化モデル
│   ├── cardiovascular/
│   │   ├── ARB_evolution_model.md
│   │   ├── ACE_inhibitor_evolution_model.md
│   │   └── beta_blocker_evolution_model.md
│   ├── gastrointestinal/
│   │   └── PPI_evolution_model.md
│   └── ...
├── comparative_analyses/           # 薬効群内比較
│   ├── ARB_comprehensive_comparison.md
│   ├── PPI_detailed_comparison.md
│   └── ...
├── prescription_patterns/          # 処方実態
│   ├── ARB_prescription_reality.md
│   ├── SGLT2_prescription_trends.md
│   └── ...
└── clinical_ecosystems/           # 臨床エコシステム
    ├── hypertension_treatment_ecosystem.md
    ├── diabetes_management_ecosystem.md
    └── ...
```

#### コンテンツ要素
- 開発の歴史的経緯
- 各世代の特徴と差別化点
- 臨床での使い分けマトリックス
- 将来の発展予測

### 3.4 drug_stories/ - 薬の物語

#### 目的
感動的な開発秘話と歴史的文脈の提供

#### 構造
```
drug_stories/
├── discovery_legends/              # 発見伝説
│   ├── 01_penicillin_miracle.md
│   ├── 05_aspirin_journey.md
│   └── ...
├── development_dramas/             # 開発ドラマ
│   ├── 02_insulin_revolution.md
│   ├── 03_hypertension_conquest.md
│   └── ...
└── innovation_chronicles/          # 革新年代記
    ├── personalized_medicine_future.md
    ├── vaccine_innovation_timeline.md
    └── ...
```

### 3.5 study_guides/ - 薬学学習ガイド

#### 目的
効率的な学習と理解を支援する教育ツール

#### 構造
```
study_guides/
├── exam_preparation/               # 国試対策
│   ├── gyakubiki_tool.md
│   └── quick_review_sheets/
├── memory_tools/                   # 暗記ツール
│   ├── goro_collection.md
│   └── visual_mnemonics/
├── orchestra_theory/               # オーケストラ理論
│   └── cardiovascular_orchestra_guide.md
└── clinical_cases/                 # 症例学習
    └── case_based_learning/
```

### 3.6 内部ディレクトリ（アンダースコア接頭辞）

#### _resources/ - 内部参照用
```
_resources/
├── raw_data/                       # 生データ
├── research_notes/                 # 調査メモ
├── templates/                      # テンプレート
└── quality_standards/              # 品質基準
```

#### _system/ - システム設定
```
_system/
├── indexes/                        # インデックス
├── metadata/                       # メタデータ
└── build_configs/                  # ビルド設定
```

**重要**: アンダースコア(_)で始まるディレクトリはビルドプロセスで自動除外

## 4. 移行戦略

### 4.1 優先順位
1. **最優先**: drug_evolution/（PharmaDxの核心価値）
2. **高優先**: drugs/の整理（ユーザー利用頻度高）
3. **中優先**: drug_stories/の体系化
4. **低優先**: 内部ディレクトリの整理

### 4.2 段階的アプローチ
- **Phase 1**: ディレクトリ構造作成、内部文書移動
- **Phase 2**: 薬効群モデルの移行
- **Phase 3**: 個別薬剤の整理
- **Phase 4**: ビルドシステム更新

## 5. 期待効果

### 5.1 ユーザー体験向上
- **検索性**: 3クリック以内で目的情報到達
- **理解性**: 構造が学習パスを示唆
- **発見性**: 関連コンテンツへの自然な誘導

### 5.2 開発効率向上
- **配置ルール明確化**: 新規コンテンツの配置で迷わない
- **保守性**: 300薬剤拡張でも破綻しない構造
- **自動化**: ビルドプロセスの簡潔化

### 5.3 教育価値最大化
- **体系的学習**: 構造自体が学習ガイド
- **深い理解**: 「なぜ」への明確な回答
- **感動体験**: ストーリーとファクトの最適バランス

## 6. 成功指標

### 6.1 定量的指標
- ファイル配置の迷い時間: 90%削減
- コンテンツ発見時間: 70%短縮
- ビルドエラー: 50%削減

### 6.2 定性的指標
- 開発者の「どこに置けばいいか分からない」がゼロ
- ユーザーの「探しているものが見つからない」がゼロ
- 「PharmaDxらしさ」の明確な体現

## 7. リスクと対策

### 7.1 移行リスク
- **リスク**: 大規模移動によるリンク切れ
- **対策**: 段階的移行、自動リンク更新スクリプト

### 7.2 互換性リスク
- **リスク**: ビルドツールの大幅改修必要
- **対策**: 最小限の変更、後方互換性維持

## 8. 結論

この新構造により、PharmaDxは「なぜ似た薬が複数存在するのか」という核心的問いに明確に答え、薬学教育に革新をもたらすプラットフォームとして進化します。

ユーザーの「知りたい」に直接応える構造は、単なるディレクトリ整理を超えて、PharmaDxの教育理念を体現する基盤となります。