# 現実的なCSS設計 - 50-60個のクラスで実現する薬学教育プラットフォーム

**作成日時**: 2025-07-03 00:17  
**作成者**: CEO  
**目的**: 637個から50-60個への92%削減を実現する現実的なCSS設計の確立  
**重要度**: 最高（最終設計確定）

---

## 📌 設計理念

### 過度な装飾より学習効果を優先
- **薬効群の視覚的区別は最小限**（バッジレベルのみ）
- **内容理解が最重要**（色分けは学習の補助に留める）
- **シンプルな構造で保守性を確保**

---

## 🎯 50-60個のクラスで実現する構成

### 1. 構造系（10個）
```css
.drug-container         /* メインコンテナ */
.content-section        /* セクション分割 */
.section-header         /* セクションヘッダー */
.card                   /* カードコンポーネント */
.card-header            /* カードヘッダー */
.card-body              /* カード本文 */
.sidebar                /* サイドバー */
.main-content           /* メインコンテンツ */
.footer                 /* フッター */
.navigation             /* ナビゲーション */
```

### 2. レイアウト系（10個）
```css
.grid                   /* グリッドレイアウト */
.grid--2cols            /* 2カラムグリッド */
.grid--3cols            /* 3カラムグリッド */
.flex                   /* フレックスレイアウト */
.flex--center           /* 中央揃え */
.flex--between          /* 両端揃え */
.spacing-small          /* 小スペーシング */
.spacing-medium         /* 中スペーシング */
.spacing-large          /* 大スペーシング */
.container-width        /* コンテナ幅制御 */
```

### 3. タイポグラフィ（8個）
```css
.heading-primary        /* 主見出し */
.heading-secondary      /* 副見出し */
.heading-tertiary       /* 第3見出し */
.text-body              /* 本文 */
.text-caption           /* キャプション */
.text-emphasis          /* 強調テキスト */
.text-muted             /* 控えめテキスト */
.text-link              /* リンクテキスト */
```

### 4. コンポーネント（15個）
```css
.btn                    /* ボタン基本 */
.btn--primary           /* プライマリボタン */
.btn--secondary         /* セカンダリボタン */
.badge                  /* バッジ基本 */
.drug-class-badge       /* 薬効群バッジ */
.alert                  /* アラート基本 */
.alert--info            /* 情報アラート */
.alert--warning         /* 警告アラート */
.alert--danger          /* 危険アラート */
.list                   /* リスト基本 */
.list-item              /* リストアイテム */
.table                  /* テーブル基本 */
.table-row              /* テーブル行 */
.table-cell             /* テーブルセル */
.timeline               /* タイムライン */
```

### 5. ユーティリティ（10個）
```css
.show                   /* 表示 */
.hide                   /* 非表示 */
.active                 /* アクティブ状態 */
.disabled               /* 無効状態 */
.shadow-light           /* 軽い影 */
.shadow-medium          /* 中程度の影 */
.rounded                /* 角丸 */
.border-light           /* 薄いボーダー */
.bg-secondary           /* セカンダリ背景 */
.text-center            /* テキスト中央揃え */
```

**合計: 53個**

---

## 🚫 廃止する概念

### 1. bodyテーマクラス
```html
<!-- 廃止 -->
<body class="endo-theme">
<body class="cardio-theme">

<!-- 新方式 -->
<body>
```

### 2. 薬剤固有クラス
```css
/* 廃止 */
.ampk-effects
.microbiome-changes
.at1-blockade

/* 新方式: 汎用クラスで対応 */
.mechanism-display
.clinical-effect
```

### 3. 薬効群固有スタイル
```css
/* 廃止 */
[data-category="diabetes"] {
    --theme-color: var(--category-endocrine);
}

/* 新方式: バッジのインラインスタイルのみ */
<span class="drug-class-badge" style="--badge-bg: var(--category-endocrine);">
```

---

## 🎨 薬効群の表現方法

### バッジレベルのみで色分け
```html
<!-- CSS変数をインラインで指定 -->
<span class="drug-class-badge" style="--badge-bg: var(--category-endocrine);">
    <i class="icon-drug">💊</i>
    ビグアナイド系糖尿病薬
</span>
```

### CSS側はシンプルに
```css
.drug-class-badge {
    background-color: var(--badge-bg, #f0f0f0);
    color: #fff;
    /* その他の共通スタイル */
}
```

---

## 📊 削減効果の実証

### 現状との比較
| 項目 | 現状 | 新設計 | 削減率 |
|------|------|--------|--------|
| 総クラス数 | 637個 | 53個 | 92% |
| 薬剤固有 | 200個+ | 0個 | 100% |
| 薬効群固有 | 20個+ | 0個 | 100% |
| 共通クラス | 400個+ | 53個 | 87% |

### 300薬剤展開時
- **現状方式**: 10,000個以上のクラスが必要
- **新設計**: 53個のまま変わらず
- **保守コスト**: 99.5%削減

---

## 🚀 実装手順

### Step 1: HTML整理（2時間）
1. bodyテーマクラスを削除
2. 薬剤固有クラスを汎用クラスに置換
3. data属性は最小限に

### Step 2: CSS作成（3時間）
1. 53個の共通クラスを定義
2. @importで既存CSS活用
3. CSS変数は既存のものを再利用

### Step 3: 検証（1時間）
1. 3薬剤での表示確認
2. レスポンシブ対応確認
3. アクセシビリティチェック

---

## 🎯 成功の定義

### 技術的成功
- ✅ 53個のクラスで全機能実現
- ✅ 新薬剤追加時の追加CSS不要
- ✅ 保守時間90%削減

### 教育的成功
- ✅ 内容に集中できるシンプルなUI
- ✅ 必要最小限の視覚的区別
- ✅ 学習効果の最大化

---

## 📝 重要な決定事項

1. **薬効群テーマは完全廃止**
   - 学習の妨げになる過度な装飾を排除
   - バッジレベルでの最小限の区別のみ

2. **50-60個は現実的な目標**
   - メトホルミン分析で34個まで削減可能と判明
   - 3薬剤全体でも50-60個で十分

3. **保守性が最優先**
   - 新薬剤追加のたびにCSSを追加は非現実的
   - 共通クラスのみで永続的に対応

---

**文書作成完了**: 2025-07-03 00:18  
**次のアクション**: HTML整理作業の開始（bodyテーマクラス削除から）