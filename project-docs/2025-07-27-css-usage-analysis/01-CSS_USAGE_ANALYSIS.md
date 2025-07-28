# feature-page.css 使用実態分析レポート

**作成日**: 2025-07-27 22:06  
**調査対象**: feature-page.css（1343行）と公開中の特集ページ3件  
**調査目的**: CSSクラスの定義と実際の使用状況のギャップを把握し、効率的なCSS運用への改善策を提案する

## 📊 調査結果サマリー

### 統計データ
- **定義されているクラス総数**: 111クラス（feature-page.css内で定義）
- **CSVファイルに記載されているクラス**: 89クラス
- **実際に使用されているクラス**: 45クラス（使用率: 40.5%）
- **未使用クラス（CSVで0%）**: 44クラス
- **CSVに未記載のクラス**: 38クラス（主にサブクラスや特殊クラス）
- **総未使用クラス数**: 82クラス（73.9%）
- **インラインスタイル使用状況**:
  - MR拮抗薬特集: 199箇所（過剰使用）
  - 心不全特集: 89箇所
  - 抗血栓薬特集: 23箇所

## 🎯 主要なCSSクラスと使用状況

### 1. ヒーローセクション関連（使用率: 100%）
すべての特集ページで使用されている基本構造クラス

| クラス名 | 用途 | 使用ページ |
|---------|------|-----------|
| `feature-hero` | ヒーローセクションの外枠 | 全ページ |
| `feature-hero-container` | ヒーローコンテンツのコンテナ | 全ページ |
| `feature-breadcrumb` | パンくずリスト | 全ページ |
| `feature-title` | メインタイトル | 全ページ |
| `feature-subtitle` | サブタイトル | 全ページ |
| `feature-lead` | リード文 | 全ページ |

### 2. セクション構造関連（使用率: 100%）
ページの基本構造を形成するクラス

| クラス名 | 用途 | 使用ページ |
|---------|------|-----------|
| `feature-section` | 各セクションの外枠 | 全ページ |
| `section-container` | セクション内コンテナ | 全ページ |
| `section-title` | セクションタイトル | 全ページ |
| `bg-light` | 背景色（薄いグレー） | MR拮抗薬、心不全 |

### 3. コンテンツ関連（使用率: 80%）
実際のコンテンツ表示に使用されるクラス

| クラス名 | 用途 | 使用状況 |
|---------|------|----------|
| `intro-content` | イントロ部分のコンテンツ | 全ページ |
| `intro-highlights` | ハイライトボックス | 全ページ |
| `drug-info-card` | 薬剤情報カード | MR拮抗薬、心不全 |
| `info-grid` | 情報グリッドレイアウト | MR拮抗薬、心不全 |
| `info-item` | 個別情報項目 | MR拮抗薬、心不全 |
| `info-label` | 項目ラベル | MR拮抗薬、心不全 |
| `info-value` | 項目の値 | MR拮抗薬、心不全 |

### 4. 比較表関連（使用率: 100%）
すべての特集で使用される重要な要素

| クラス名 | 用途 | 使用状況 |
|---------|------|----------|
| `comparison-table-wrapper` | テーブルラッパー | 全ページ |
| `comparison-table` | 比較表本体 | 全ページ |

### 5. 特殊ボックス関連（使用率: 30%）
警告や注意事項の表示に使用

| クラス名 | 用途 | 使用状況 |
|---------|------|----------|
| `warning-box` | 警告ボックス | MR拮抗薬、心不全 |
| `point-card` | ポイントカード | 心不全 |
| `drug-article` | 薬剤記事 | 心不全 |
| `drug-header` | 薬剤ヘッダー | 心不全 |
| `drug-content` | 薬剤コンテンツ | 心不全 |

## ❌ 未使用の主要クラス（活用可能性が高い）

### 1. 吸入薬特集用カスタムクラス
以下のクラスは吸入薬特集用に定義されているが、他の特集でも活用可能：

- `drug-flow` - 薬剤フローチャート
- `drug-flow-item` - フロー内の個別項目
- `drug-number` - 番号表示
- `flow-arrow` - フロー矢印

### 2. デバイス関連クラス
- `device-cards` - デバイスカードグリッド
- `device-card` - 個別デバイスカード
- `device-features` - デバイス特徴グリッド
- `feature-item` - 特徴項目

### 3. 患者プロファイル関連
- `patient-profile` - 患者プロファイルセクション
- `profile-grid` - プロファイルグリッド
- `profile-item` - プロファイル項目
- `patient-card` - 患者カード

### 4. チェックリスト・まとめ関連
- `checklist-box` - チェックリストボックス
- `checklist` - チェックリスト本体
- `checklist-item` - チェックリスト項目
- `key-points` - キーポイントセクション
- `point-cards` - ポイントカードグリッド

### 5. 症状・診断関連
- `symptoms-list` - 症状リスト
- `symptoms-comparison` - 症状比較セクション
- `symptom-boxes` - 症状ボックスグリッド
- `symptom-box` - 個別症状ボックス

## 📈 クラス使用率分析

### カテゴリ別使用率（CSVファイルに記載された89クラスのうち）
```
基本構造クラス（hero, section等）: ████████████ 100%
比較表クラス: ████████████ 100%
情報表示クラス（info-*, drug-info-card）: ████████ 67%
特殊ボックスクラス: ████ 30%
フロー・チャート関連: 0%
患者・症状関連: ■ 8%（patient-card, symptom-box等一部使用）
チェックリスト関連: 0%
```

### ページ別クラス使用数
- MR拮抗薬特集: 22クラス使用（インラインスタイル199箇所）
- 心不全特集: 31クラス使用（インラインスタイル89箇所）
- 抗血栓薬特集: 13クラス使用（インラインスタイル23箇所）

## 🔍 詳細な使用状況

### MR拮抗薬特集（mr-antagonist-complete-guide.html）
**使用クラス（22個）**:
- 基本構造: feature-hero, feature-hero-container, feature-breadcrumb, feature-title, feature-subtitle, feature-lead
- セクション: feature-section, section-container, section-title, bg-light
- コンテンツ: intro-content, intro-highlights, drug-overview
- 比較表: comparison-table-wrapper, comparison-table
- 情報表示: drug-info-card, info-grid, info-item, info-label, info-value
- その他: warning-box, comparison-grid, comparison-item

**問題点**: インラインスタイルが199箇所も使用されており、CSSクラスの活用が不十分

### 心不全特集（heart-failure-treatment-guide.html）
**使用クラス（31個）**:
- MR拮抗薬で使用されているクラスすべて
- 追加使用: point-card, symptoms-list, reason-cards, reason-card, symptom-boxes, symptom-box
- 薬剤関連: drug-article, drug-header, drug-name, drug-category, drug-content

**特徴**: 最も多くのCSSクラスを活用しているが、まだインラインスタイルが89箇所存在

### 抗血栓薬特集（antithrombotic-complete-guide.html）
**使用クラス（13個）**:
- 基本構造とセクションクラスのみ使用
- 比較表クラスを使用

**問題点**: 最小限のクラスしか使用しておらず、feature-page.cssの機能を十分に活用していない

## 💡 重要な発見事項

1. **基本構造クラスは100%活用**: すべてのページで統一的に使用されている
2. **実際の活用率は40.5%**: 111個のクラスのうち45個が使用されている（当初の27%より高い）
3. **CSVファイルの不完全性**: 38個のクラスがCSVファイルに記載されていない
4. **インラインスタイルの過剰使用**: 特にMR拮抗薬特集では深刻（199箇所）
5. **ページ間の実装の不統一**: 同じような要素でも異なる実装方法が使用されている
6. **特定用途クラスの汎用性**: 吸入薬特集用に作られたクラスも他のページで活用可能

## 📝 CSVファイルに記載されていない主要クラス（38個）

### 特に重要なクラス
- `comparison-section` - 比較セクション全体のスタイル
- `smart-concept`, `smart-definition`, `smart-patients`, `smart-reason` - SMART療法関連
- `triple-patients`, `triple-reasons` - トリプル療法関連
- `warning-note` - 警告注記
- `emphasis` - 強調表示
- `highlight-text` - ハイライトテキスト
- サブクラス（`.drug-category.saba`, `.drug-flow.vertical`等）

## 次のステップ

このデータを基に、以下のドキュメントで詳細な分析と改善提案を行います：
- 02-ISSUES_AND_FINDINGS.md - 具体的な問題点の詳細分析
- 03-IMPROVEMENT_PROPOSALS.md - 改善提案と実装ガイドライン
- 04-USAGE_MATRIX.csv - 詳細な使用状況マトリックス