# docs/ディレクトリ構造改革計画 - 2025-06-30

## 現状分析（問題点）

### 1. ファイル配置の混乱
- docs/直下に34個のHTMLファイルが乱雑に配置
- 個別薬剤、進化モデル、統合ガイド、処方実態など異なる種類が混在
- ファイル名の命名規則が不統一（アンダースコア、ハイフン混在）

### 2. 重複ファイル
- docs/直下とdrugs/内で9個の薬剤ファイルが重複
- 同じコンテンツが複数箇所に存在し、管理が困難

### 3. 言語混在とファイル名の混乱
- drugs/内で英語版と日本語版（カタカナ名）が同じディレクトリに混在
- 同じ薬剤に対して2つのファイル（例：atorvastatin.html と アトルバスタチン.html）
- アクセス性と保守性の低下、管理の複雑化

### 4. 無効なバックアップ
- 5個のバックアップディレクトリがすべて空（0B）
- バックアップの意味をなしていない

### 5. 作業ファイルの散在
- 9個の作業用MDファイルがdocs/直下に配置
- 公開コンテンツと内部文書が混在

### 6. 未活用ディレクトリ
- generated/ディレクトリが空で未使用
- groups/ディレクトリも空

## 新ディレクトリ構造設計

```
docs/
├── index.html                       # メインページ
├── generated/                       # ビルドツール生成ファイル
│   ├── drugs/                       # 個別薬剤ページ（英語名で統一）
│   │   └── [drug_name].html        # 例：atorvastatin.html
│   ├── groups/                      # 薬効群ページ
│   │   ├── evolution/               # 進化モデル
│   │   │   ├── ARB_evolution.html
│   │   │   ├── PPI_evolution.html
│   │   │   └── ...
│   │   ├── comparison/              # 比較・使い分け
│   │   │   ├── ARB_comparison.html
│   │   │   └── ...
│   │   └── ecosystem/               # エコシステム・統合ガイド
│   │       ├── cardiovascular_ecosystem.html
│   │       └── ...
│   ├── stories/                     # 薬の物語
│   │   ├── discovery/               # 発見物語
│   │   │   └── penicillin.html
│   │   └── development/             # 開発物語
│   │       └── insulin.html
│   ├── tools/                       # 学習ツール
│   │   ├── memory_cards/            # 記憶カード
│   │   └── practice/                # 練習問題
│   └── data/                        # 構造化データ
│       └── drugs.json
├── assets/                          # 静的リソース
│   ├── css/                         # スタイルシート
│   ├── js/                          # JavaScript
│   └── images/                      # 画像（将来用）
├── archive/                         # アーカイブ（非公開）
│   ├── backups/                     # バックアップ
│   └── old_versions/                # 旧バージョン
└── _internal/                       # 内部文書（非公開）
    └── build_logs/                  # ビルドログ・作業記録
```

## アーカイブ・削除方針

### 1. 既存HTMLファイルの扱い
**すべてアーカイブへバックアップ後、docs/から削除**

#### アーカイブ対象（現在のHTMLファイル）
- docs/直下のすべてのHTMLファイル（index.html除く）
- docs/drugs/内のすべてのHTMLファイル
- docs/categories/内のすべてのHTMLファイル
- docs/stories/内のすべてのHTMLファイル

#### generated/ディレクトリ
- **空のまま維持**（ビルドツールの出力先として）
- 手動でファイルを配置しない
- ビルド実行時にMDファイルから自動生成される

### 2. 削除対象
- 空のバックアップディレクトリ（5個）
  - backup_20250629_172351/
  - backup_20250630_034455/
  - backup_20250630_040155/
  - backup_20250630_142706/
  - backup_20250630_174448/

### 3. 整理後の構造
```
docs/
├── index.html                       # メインページ（維持）
├── generated/                       # 空ディレクトリ（ビルド出力用）
│   └── .gitkeep
├── assets/                          # 静的リソース
│   ├── css/                         # 既存CSSを移動
│   ├── js/                          # 既存JSを移動
│   └── images/                      # 将来用
├── archive/                         # アーカイブ
│   └── backup_20250630_1825/        # 今回のバックアップ
│       ├── html_files/              # 既存HTMLファイル
│       └── old_structure/           # 旧構造の記録
└── _internal/                       # 内部文書
    └── build_logs/                  # 作業用MDファイル
```

### 7. 静的リソース
**現在：docs/css/, docs/js/**
- すべてassets/へ移動

### 8. 作業用ファイル
**現在：docs/直下のMDファイル**
- すべて_internal/build_logs/へ移動

### 9. バックアップ
**現在：空のbackup_*ディレクトリ**
- すべて削除（機能していないため）

## 実行手順

### Phase 1: 準備（バックアップ作成）
1. アーカイブディレクトリ構造を作成
2. プロジェクトドキュメントへの記録完了

### Phase 2: HTMLファイルのアーカイブ
1. docs/直下のHTMLファイル（index.html除く）をアーカイブ
2. docs/drugs/内のすべてのHTMLファイルをアーカイブ
3. docs/categories/、docs/stories/のHTMLファイルをアーカイブ

### Phase 3: 静的リソースの移動
1. docs/css/ → docs/assets/css/
2. docs/js/ → docs/assets/js/
3. 空ディレクトリの削除

### Phase 4: 作業ファイルの整理
1. 作業用MDファイルを_internal/build_logs/へ移動
2. 空のバックアップディレクトリを削除

### Phase 5: 最終調整
1. generated/に.gitkeepを配置（空ディレクトリ維持）
2. index.htmlのパス修正（CSS/JSパス）
3. CLAUDE.mdの更新

## 影響範囲と注意事項

### 1. パス変更の影響
- index.htmlのリンク修正が必要
- convert_pharmadx.jsの出力パス確認
- GitHub Pagesの動作確認

### 2. 既存リンクの互換性
- 旧URLから新URLへのリダイレクト検討
- 外部からのリンクへの影響評価

### 3. ビルドプロセスとの整合性
- generated/ディレクトリはビルドツールが管理
- 手動編集ファイルとの区別明確化

## 期待される効果

1. **構造の明確化**
   - コンテンツ種別ごとの整理
   - ナビゲーションの改善

2. **保守性の向上**
   - 重複ファイルの解消
   - バージョン管理の簡素化

3. **拡張性の確保**
   - 新規コンテンツ追加時の配置明確
   - 多言語対応の準備

4. **パフォーマンス向上**
   - 不要ファイルの削減
   - アクセスパスの最適化

## タイムライン
- 所要時間：約2-3時間
- リスク：中（パス変更によるリンク切れの可能性）
- 優先度：高（今後のコンテンツ追加の基盤）

作成日時：2025-06-30 18:15
作成者：PharmaDx CEO