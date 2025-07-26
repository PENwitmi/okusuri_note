# サクッとお薬ノート - 薬剤図鑑

## 🌟 概要

**サクッとお薬ノート** は、薬学生と実習生向けの薬学教育Webプラットフォームです。「脱・丸暗記」をモットーに、似た薬の違いを理解ベースで学習し、薬剤師国家試験対策と実習での実践活用を支援します。

### 📍 公開サイト
- **メインURL**: https://pharm.nishimoto-learning.jp/okusuri_note/
- **GitHub Pages**: https://penwitmi.github.io/okusuri_note/
  - ※ Vercelのrewrite機能により統一URLで提供

### 🎯 核心価値
- **脱・丸暗記**: 理解すれば忘れない学習方式
- **国試対策**: 薬剤師国家試験にラクラク合格
- **実習活用**: 即使える処方パターンと作用機序
- **レベル別学習**: 段階的にマスターできるシステム

## 📊 現在の公開状況（2025-07-26）

### 薬剤ページ（9種類公開中）
1. **メトホルミン** - 脱・乳酸アシドーシス
2. **ダパグリフロジン** - SGLT2阻害は全身に効く
3. **サクビトリルバルサルタン** - ネプリライシンだけを阻害できなかったわけ
4. **カルベジロール** - 心不全なのにβ遮断を使えるワケ
5. **テルミサルタン** - ARBの中でも唯一のPPARγ作用
6. **ドチヌラド** - 待望の尿酸排泄促進による治療
7. **セレコキシブ** - 選択的阻害にしたのに別の副作用で劇薬に
8. **レンボレキサント** - GABA系じゃなくてもスッと寝れる時代
9. **ドンペリドン** - BBBを通過しないD2遮断の開発

### 特集ページ（3種類公開中）
1. **なぜK保持性利尿薬は名前が変わったのか** - MR拮抗薬への60年の進化
2. **初心者のための心不全完全マスター** - HFrEFとHFpEFの実践的理解
3. **抗血栓薬 完全マスターガイド** - 血を固まらせない薬の使い分け

## 🛠 技術スタック

### フロントエンド構成
- **HTML5**: SEO最適化テンプレート（OGP、Twitter Card、構造化データ）
- **CSS3**: 10ファイル構成のモジュラーアーキテクチャ
- **Vanilla JavaScript**: レベル選択システム、レスポンシブ機能
- **Components CSS**: 汎用コンポーネント標準化（2025-07-18完了）

### SEO最適化（2025-07-26標準化）
- **基本メタタグ**: description、keywords、author
- **OGP（Open Graph Protocol）**: SNS共有最適化
- **Twitter Card**: summary_large_image対応
- **構造化データ（JSON-LD）**: WebSite、MedicalWebPage、Drug、BreadcrumbList
- **Canonical URL**: 重複コンテンツ対策
- **絶対パス使用**: base href不使用でVercel設定と整合

## 📁 プロジェクト構造

```
okusuri_note/
├── docs/                    # 公開サイト（GitHub Pages）
│   ├── index.html          # メインページ
│   ├── drugs/              # 薬剤ページ（9薬剤公開中）
│   ├── features/           # 特集ページ（3ページ公開中）
│   ├── assets/             # 静的リソース
│   │   ├── css/           # スタイルシート（10ファイル）
│   │   ├── js/            # JavaScript
│   │   └── images/        # 画像ファイル
│   ├── sitemap.xml        # サイトマップ
│   ├── robots.txt         # クローラー設定
│   └── llms.txt           # AI最適化設定
├── source_materials/        # コンテンツ原稿
├── project-docs/           # プロジェクト管理文書
├── templates/              # HTMLテンプレート
├── CLAUDE.md              # プロジェクト詳細仕様
└── README.md              # このファイル
```

## 🚀 開発ガイド

### 新規薬剤ページ作成手順

1. **テンプレートからスタート**
   ```bash
   cd /Users/nishimototakashi/claude\ code/okusuri_note
   cp templates/drug-template.html docs/drugs/NEW_DRUG.html
   ```

2. **SEO最適化要素の実装**
   - 基本メタタグ設定
   - OGP・Twitter Card設定
   - MedicalWebPage + Drug構造化データ
   - BreadcrumbList実装

3. **コンテンツ作成**
   - Level 1: 基本情報（作用機序、適応症）
   - Level 2: 詳細情報（薬物動態、相互作用）
   - Level 3: 発展情報（開発ストーリー、最新研究）

4. **Components CSS適用**
   - content-box、comparison-table等の標準クラス使用
   - 新規クラス作成は避け、既存クラスを活用

### コーディング規約
- **HTML**: セマンティックマークアップ、アクセシビリティ重視
- **CSS**: BEM命名規則、CSS変数活用
- **JavaScript**: ES6+、非同期処理、エラーハンドリング
- **画像**: 適切なalt属性、遅延読み込み対応

## 🔧 ローカル開発環境

```bash
# プロジェクトディレクトリ
cd /Users/nishimototakashi/claude\ code/okusuri_note

# ローカルサーバー起動
cd docs
python -m http.server 8000

# ブラウザでアクセス
open http://localhost:8000
```

## 📈 今後の展開

### 短期計画（2025 Q3）
- [ ] 薬剤ページ拡充（目標：15薬剤）
- [ ] 特集ページ追加（吸入薬、漢方薬、消化管運動改善薬）
- [ ] モバイルUX改善

### 中期計画（2025 Q4）
- [ ] 検索機能強化
- [ ] ユーザー学習進捗管理
- [ ] インタラクティブ学習ツール

## 🤝 貢献ガイドライン

### 品質基準
- **コンテンツ**: 医学的正確性、教育的価値、感動的要素
- **技術**: レスポンシブ対応、アクセシビリティ、SEO最適化
- **パフォーマンス**: Lighthouse Score 90以上

### 注意事項
- 架空の人物・証言の使用禁止
- すべての医学情報は信頼できる出典が必須
- 個人情報・機密情報の取り扱い注意

## 📝 ライセンス

本プロジェクトは教育目的で公開されています。医学的内容については必ず最新の添付文書・ガイドラインを参照してください。

## 📧 お問い合わせ

ご要望・ご指摘は以下までお願いします：
inquiry@nishimoto-learning.jp

---

最終更新: 2025年7月26日 | 現職薬局薬剤師監修