# CLAUDE.md - OkusuriNote プロジェクト

**最終更新**: 2025-08-14 17:20

## 🌟 プロジェクト概要

**サクッとお薬ノート** は、薬学生と実習生向けの薬学教育Webプラットフォームです。「脱・丸暗記」をモットーに、似た薬の違いを理解ベースで学習し、薬剤師国家試験対策と実習での実践活用を支援します。

### 公開サイト
- **GitHub Pages**: https://penwitmi.github.io/okusuri_note
- **Vercel**: https://pharm.nishimoto-learning.jp/okusuri_note/index.html
  - ※ Vercelのrewrite機能により、nishimoto-learning.jpのサブディレクトリとして公開

### 核心価値・教育理念

**「薬学知識の網目が真の理解を生む」**

1. **脱・丸暗記**: 理解すれば忘れない学習方式
2. **国試対策**: 薬剤師国家試験にラクラク合格
3. **実習活用**: 即使える処方パターンと作用機序
4. **レベル別学習**: 段階的にマスターできるシステム

### コンテンツ戦略
1. **薬効群進化モデル**: なぜ似た薬が複数存在するのかへの回答
2. **個別薬剤詳細**: 臨床使い分けの具体的基準
3. **学習ツール**: 国試対策・暗記支援
4. **実践ガイド**: 薬局実習・臨床応用

### 教育的アプローチ
- **理解中心**: なぜそうなるかの本質的理解を重視
- **体系学習**: 薬学知識の相互関連性を活用
- **実践統合**: 臨床現場での実用価値を意識
- **クロスリファレンス**: リンクによる多角的学習
- **情報の信頼性**: 架空の情報禁止、すべての引用・証言は実在の出典が必須

## 📊 プロジェクト状態

### 現在のサマリー
- **公開中薬剤**: 10薬剤（全てCSS適用済み、8/10薬剤HTML構造標準化完了）
- **公開中特集**: 3ページ（抗血栓薬、心不全治療、MR拮抗薬）
- **現在フェーズ**: HTML構造の継続的改善・読みやすさ向上

### 📍 進捗管理システム
**詳細な進捗はダッシュボードで管理しています**
- `MASTER_STATUS_DASHBOARD.md` - 詳細な進捗管理・プロジェクト履歴
- `CLAUDE.md`（このファイル） - プロジェクト概要・設計思想・ルール
- `project-docs/` - 各プロジェクトの詳細ドキュメント

### 🚀 アクティブな取り組み
- **HTML構造改善**: 8/10薬剤完了（詳細 → `MASTER_STATUS_DASHBOARD.md`）
- **次の検討事項**: 特集ページへの構造標準化適用、_archive/drugs-v3/の活用検討

## 📚 プロジェクト資産

### 重要な参考ドキュメント

#### CSS設計ドキュメント
- **CSS README.md**: `/docs/assets/css/README.md`
  - CSSアーキテクチャの全体像
  - 各CSSファイルの責務と使用方法
  - components.cssの詳細仕様（550行、汎用コンポーネント集）
  - 実装ガイドライン

#### HTML構造標準化プロジェクト  
- **完了**: `project-docs/2025-08-12-html-structure-standardization/`
  - プロジェクト概要、対象ファイル分析、実装計画、完了報告書
  - カルベジロールモデルによる8薬剤の構造統一

#### Components CSS標準化プロジェクト
- **完了**: `project-docs/2025-07-17-css-components-standardization/`
  - 標準化計画書、進捗レポート、固有クラス分析、段階的適用提案

#### プロジェクト固有開発ガイドライン
- **改行ガイドライン**: モバイル読みやすさを重視した改行ルール
  - **詳細**: `project-docs/development-guides/LINE_BREAK_GUIDELINES.md`
- **HTMLインデントルール**: TAB文字による一貫した階層構造管理
  - **詳細**: `project-docs/2025-08-12-html-indentation-rules/01-HTML_INDENTATION_RULES.md`
  - **作成日**: 2025-08-12 00:23
  - **重要**: 兄弟要素は同一インデント維持、エディタ連携必須
- **HTMLインデント正規化**: 3つのサブエージェントによる4段階フロー
  - **サブエージェント** (`.claude/agents/`に定義):
    - `indent-analyzer`: インデント問題を検出
    - `indent-converter`: スペース→タブ変換
    - `indent-refiner`: 親子関係の階層修正（3パス方式）
  - **4段階フロー** (段階的に実行、レポート確認してから次へ):
    1. indent-analyzerで分析
    2. 問題があればindent-converterで変換
    3. indent-analyzerで再分析
    4. 階層エラーがあればindent-refinerで修正
  - **詳細**: `project-docs/development-guides/indent-normalization/`

### 確定済み戦略・仕様

#### ディレクトリ構造

```
okusuri_note/
├── MASTER_STATUS_DASHBOARD.md      # 進捗管理ダッシュボード（2025-06-30移動）
├── CLAUDE.md                       # プロジェクト概要（このファイル）
├── .claude/                        # Claude Code カスタム設定
│   └── agents/                     # カスタムエージェント定義
│       ├── indent-analyzer.md      # インデント分析エージェント
│       ├── indent-converter.md     # スペース→タブ変換エージェント
│       └── indent-refiner.md       # 階層構造修正エージェント
├── source_materials/               # コンテンツ原稿（論理構造）
│   ├── drugs/                      # 個別薬剤事典（23ファイル）
│   ├── drug_evolution/             # なぜ似た薬があるのか（19ファイル）
│   ├── drug_stories/               # 薬の物語（14ファイル）
│   ├── study_guides/               # 薬学学習ガイド（12ファイル）
│   ├── drug_database_originated/   # HTML→MD変換済み（10ファイル）
│   ├── _resources/                 # 内部リソース（8ファイル・非公開）
│   └── _system/                    # システム文書（7ファイル・非公開）
├── docs/                           # 公開サイト（GitHub Pages）
│   ├── index.html                  # メインページ
│   ├── drugs/                      # 個別薬剤ページ（10ファイル）
│   ├── features/                   # 特集ページ（3ファイル）
│   ├── assets/                     # アセット管理
│   │   ├── css/                    # スタイルシート
│   │   ├── js/                     # JavaScript
│   │   └── images/                 # 画像ファイル
│   ├── _archive/                   # アーカイブされたバックアップ（drugs-v3等含む）
│   └── _feature-unreleased/        # 未公開特集ページ（5ファイル）
├── project-docs/                   # プロジェクト管理文書（時系列構造）
│   ├── 2025-06-XX-event-name/      # 時系列イベントフォルダ
│   ├── 2025-07-01-okusuri-note-migration/ # 名称変更関連文書
│   ├── 2025-07-01-ui-ux-optimization/ # UI/UX色彩設計最適化戦略（NEW）
│   ├── development-guides/         # 恒久的開発ガイド
│   ├── reference/                  # リファレンス資料
│   └── _archive_superseded/        # アーカイブ
├── templates/                      # HTMLテンプレート
├── reports/                        # 自動生成レポート保存先
│   ├── indent_*.md                 # インデント分析レポート
│   ├── fixed_*.md                  # スペース→タブ変換レポート
│   └── refined_*.md                # 階層構造修正レポート
├── _old_files/                     # 古いファイルのバックアップ
│   └── tools_backup_20250701/      # MD→HTML変換ツール（使用停止）
└── README.md                       # プロジェクト概要（公開用）
```

#### docs/ディレクトリの性質（重要）
**🚨 docs/は公開コンテンツ専用ディレクトリ**
- **GitHub Pages自動公開**: docs/内のすべてのファイルがhttps://penwitmi.github.io/okusuri_noteで公開される
- **公開対象のみ配置**: HTML、CSS、JavaScript、画像、データファイルのみ
- **内部文書は厳禁**: 開発ログ、バックアップファイル、TODO、設計書、会議メモなどは絶対に配置禁止
- **機密情報の漏洩リスク**: うっかり内部文書を配置すると全世界に公開される

**✅ docs/に配置すべきもの**
- index.html（メインページ）
- drugs/（個別薬剤ページ）
- features/（特集ページ）
- assets/css/（スタイルシート）
- assets/js/（JavaScript）
- assets/images/（画像ファイル）
- robots.txt、sitemap.xml（SEO関連ファイル）

**❌ docs/に配置してはいけないもの**
- dev_logs/（開発ログ）→ project-docs/archive/development-logs/
- *.backup（バックアップファイル）→ project-docs/archive/
- server.log（ログファイル）→ project-docs/archive/development-logs/
- TODO.md、MEMO.md等の内部文書 → project-docs/
- 個人情報、APIキー、設定ファイル等の機密情報

## 🛠️ 技術仕様

### 技術スタック
- **HTML5/CSS3**: レスポンシブデザイン
- **Vanilla JavaScript**: インタラクティブ機能
- **GitHub Pages**: 静的サイトホスティング

### CSSアーキテクチャ（10ファイル構成）
1. **基盤CSS**
   - `style.css` - 全サイト共通基盤（CSS変数・ヘッダー・フッター）
   - `responsive-unified.css` - レスポンシブ調整

2. **ページ別CSS**
   - `index.css` - メインページ専用
   - `interactive.css` - インタラクティブ機能
   - `drug-page-v2.css` - 薬剤詳細ページ専用
   - `feature-page.css` - 特集ページ専用

3. **機能別CSS**
   - `level-selector.css` - レベル選択システム
   - `sidebar.css` - 汎用サイドバーシステム
   - `mobile-controls.css` - モバイル用UI
   - `components.css` - 汎用コンポーネントスタイル（ボックス・テーブル・セクション・グリッド）

### 品質管理
- **コンテンツ品質**: A/B/C級分類システム
- **技術品質**: レスポンシブ、アクセシビリティ、SEO
- **統合品質**: HTML直接編集による品質管理


