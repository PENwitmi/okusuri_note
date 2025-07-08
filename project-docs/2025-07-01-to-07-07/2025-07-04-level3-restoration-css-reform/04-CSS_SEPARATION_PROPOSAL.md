# 04-CSS_SEPARATION_PROPOSAL.md
# CSS分離提案書 - 旧style.cssから新style.css + index.cssへ

**作成日時**: 2025-07-04 04:50  
**作成者**: CEO  
**提案バージョン**: 2.0  
**最終更新**: 2025-07-04 04:55

## 📋 エグゼクティブサマリー

現在のstyle.css（1,190行）を**old-style.css**にリネーム後、新たに**style.css**（全ページ共通基盤）と**index.css**（インデックス専用）を作成することを提案する。これにより、薬剤個別ページでの不要なCSS読み込みを約50%削減し、保守性と開発効率を大幅に向上させる。

### 提案の核心
```
【現状】
style.css (1,190行) → すべてのページで読み込み

【移行段階】
old-style.css (1,190行) → 一時的に全ページで参照

【最終形】
style.css (約400行) → すべてのページで読み込み（新規作成）
index.css (約600行) → index.htmlのみで読み込み
```

### 期待される効果
- **パフォーマンス**: 薬剤ページのCSS読み込み50%削減
- **保守性**: 責務の明確化により変更影響が予測可能
- **開発効率**: 開発者の迷いを排除
- **拡張性**: 将来的な機能追加が容易

## 🔍 現状の問題点

### 1. 責務の混在
```css
/* style.css内の混在例 */
/* 全ページ共通（CSS変数） */
:root {
    --pharma-primary: #1e5c8a;
    /* ... */
}

/* インデックス専用（ヒーロー） */
.hero {
    background: linear-gradient(...);
    /* トップページ専用 */
}

/* 全ページ共通（ヘッダー） */
.header {
    /* ... */
}

/* インデックス専用（カード） */
.drug-card {
    /* 24枚並列表示用 */
}
```

### 2. 不要な読み込み
```html
<!-- drugs-v2/metformin-refined.html -->
<link rel="stylesheet" href="../assets/css/style.css">
<!-- 586行のインデックス専用コードが無駄に含まれる -->
```

### 3. 開発者の混乱
- どのクラスが汎用的か不明
- 薬剤ページで`.drug-card`を誤用する可能性
- カスタマイズ時の影響範囲が不明確

## 📐 提案する新構成

### ファイル構成
```
assets/css/
├── base.css          # 全ページ共通基盤（約400行）
├── index.css         # インデックス専用（約600行）
├── drug-page-v2.css  # 薬剤ページ専用（既存370行）
└── responsive-unified.css # レスポンシブ（既存450行）
```

### base.css（全ページ共通基盤）
```css
/*
 * base.css - おくすりノート 基本スタイルシート
 * 
 * 【用途】
 * すべてのページで使用される基本的なスタイル定義
 * - CSS変数（色、フォント、スペーシング）
 * - リセットCSS
 * - 基本要素スタイル
 * - ヘッダー・フッター
 * - ユーティリティクラス
 */

/* CSS変数定義 (行1-131) */
:root {
    --pharma-primary: #1e5c8a;
    --pharma-primary-light: #5dade2;
    /* ... すべてのCSS変数 */
}

/* リセット・ベースCSS (行133-203) */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ヘッダー・ナビゲーション (行235-396) */
.header {
    /* ... */
}

/* フッター (行984-1087) */
.footer {
    /* ... */
}

/* 汎用ユーティリティ (行204-234 + 追加分) */
.container {
    max-width: var(--breakpoint-xl);
    margin: 0 auto;
    padding: 0 var(--spacing-base);
}
```

### index.css（インデックス専用）
```css
/*
 * index.css - インデックスページ専用スタイルシート
 * 
 * 【用途】
 * トップページ（index.html）でのみ使用されるスタイル
 * - ヒーローセクション
 * - 各種カード（drug, category, story, diff）
 * - グリッドレイアウト
 * 
 * 【注意】
 * このファイルは複数要素の並列表示を前提に設計されています
 * 薬剤個別ページでは使用しないでください
 */

/* ヒーローセクション (行397-489) */
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    /* ... */
}

/* セクション共通 (行490-531) */
.drugs-section,
.categories-section {
    /* ... */
}

/* 薬剤カード (行532-636) */
.drugs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.drug-card {
    /* 24枚並列表示用設計 */
}

/* 薬効群カード (行662-764) */
.category-card {
    /* 7枚並列表示用設計 */
}

/* ストーリーカード (行765-883) */
.story-card {
    /* 10枚並列表示用設計 */
}

/* 使い分けカード (行884-983) */
.diff-card {
    /* 10枚並列表示用設計 */
}
```

## 📊 分離の詳細マッピング

### 行番号別の振り分け
| 元の行番号 | セクション | 移動先 | 理由 |
|-----------|-----------|--------|------|
| 1-131 | CSS変数定義 | base.css | 全ページで必要 |
| 133-203 | リセット・ベース | base.css | 全ページで必要 |
| 204-234 | ユーティリティ | base.css | 汎用的 |
| 235-396 | ヘッダー・ナビ | base.css | 全ページ共通 |
| 397-489 | ヒーロー | index.css | インデックス専用 |
| 490-531 | セクション共通 | index.css | インデックス専用 |
| 532-636 | 薬剤カード | index.css | 並列表示用 |
| 662-764 | 薬効群カード | index.css | 並列表示用 |
| 765-883 | ストーリーカード | index.css | 並列表示用 |
| 884-983 | 使い分けカード | index.css | 並列表示用 |
| 984-1087 | フッター | base.css | 全ページ共通 |
| 1088-1190 | その他 | 個別判断 | 内容による |

### サイズ予測
- **base.css**: 約400-450行（38%）
- **index.css**: 約600-650行（52%）
- **削除・統合**: 約100行（10%）

## 🎯 実装計画

### Step 1: ファイル作成と内容分離
```bash
# 1. 新規ファイル作成
touch docs/assets/css/base.css
touch docs/assets/css/index.css

# 2. style.cssの内容を適切に分離
# - base.css: 行1-131, 133-203, 204-234, 235-396, 984-1087
# - index.css: 行397-983

# 3. 各ファイルにヘッダーコメント追加
```

### Step 2: HTML更新（段階的）

#### Phase 1: index.htmlの更新
```html
<!-- 変更前 -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- 変更後 -->
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/index.css">
```

#### Phase 2: drugs-v2/の22ファイル更新
```html
<!-- 変更前 -->
<link rel="stylesheet" href="../assets/css/style.css">

<!-- 変更後 -->
<link rel="stylesheet" href="../assets/css/base.css">
<!-- index.cssは不要 -->
```

#### Phase 3: その他のファイル（段階的）
- groups/: 内容確認後に判断
- その他: 影響度を評価して優先順位決定

### Step 3: 検証とクリーンアップ
1. 各ページの表示確認
2. 不要なクラスの削除
3. style.cssの段階的廃止

## 💡 追加の最適化提案

### 1. 流用可能クラスの明確化
```css
/* base.cssに移動する汎用クラス */
.quote-box {
    /* 引用は個別ページでも使用 */
}

.stat-item {
    /* 統計表示は汎用的 */
}
```

### 2. 新規共通クラスの追加
```css
/* base.cssに追加 */
.content-wrapper {
    max-width: 800px;
    margin: 0 auto;
}

.text-emphasis {
    color: var(--pharma-primary);
    font-weight: 700;
}
```

### 3. インポート順序の標準化
```html
<!-- 推奨される読み込み順序 -->
<link rel="stylesheet" href="base.css">      <!-- 1. 基盤 -->
<link rel="stylesheet" href="[page].css">    <!-- 2. ページ固有 -->
<link rel="stylesheet" href="responsive.css"> <!-- 3. レスポンシブ -->
```

## 📈 期待される効果の定量化

### パフォーマンス改善
```
【薬剤個別ページ】
現状: 1,190行 + 370行 + 450行 = 2,010行
改善後: 400行 + 370行 + 450行 = 1,220行
削減率: 39.3%
```

### 保守性向上
- 変更影響範囲: 不明確 → 明確
- デバッグ時間: 推定50%削減
- 新規開発効率: 推定30%向上

### 開発者体験
- CSS選択の迷い: 解消
- ドキュメント不要: ファイル名で用途明確
- チーム内共有: 容易

## ⚠️ 考慮事項とリスク

### 1. 後方互換性
- style.cssは段階的に廃止
- 移行期間中は両方を維持

### 2. キャッシュの影響
- ファイル名変更によりキャッシュ無効化
- バージョン管理の検討

### 3. 外部ページへの影響
- 164ファイルへの影響を慎重に評価
- 段階的移行計画の策定

## 🔄 代替案の検討

### 代替案1: style.cssの維持
- **メリット**: 変更不要
- **デメリット**: 問題の継続

### 代替案2: 完全な再設計
- **メリット**: 最適化の極致
- **デメリット**: 工数膨大、リスク高

### 結論: 段階的分離が最適
- リスクを最小化
- 効果を最大化
- 実装可能性が高い

## 📎 参考資料

### 分離前後の比較例
```html
<!-- インデックスページ（index.html） -->
<!-- Before -->
<link rel="stylesheet" href="style.css"> <!-- 1,190行すべて -->

<!-- After -->
<link rel="stylesheet" href="base.css">  <!-- 400行 -->
<link rel="stylesheet" href="index.css"> <!-- 600行 -->
<!-- 合計1,000行（変更なし、整理のみ） -->

<!-- 薬剤個別ページ（metformin-refined.html） -->
<!-- Before -->
<link rel="stylesheet" href="style.css"> <!-- 1,190行（586行が無駄） -->

<!-- After -->
<link rel="stylesheet" href="base.css">  <!-- 400行のみ -->
<!-- 790行削減（66%減） -->
```

この提案により、CSS構造の明確化と最適化を同時に達成できる。技術的な実装は比較的簡単でありながら、効果は大きい。早期の実施を推奨する。