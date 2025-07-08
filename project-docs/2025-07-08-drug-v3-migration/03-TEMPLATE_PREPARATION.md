# 03-TEMPLATE_PREPARATION.md

**ドキュメント**: v3テンプレート準備手順書  
**作成日**: 2025-07-08 02:24  
**作成者**: AI開発チーム  
**目的**: metformin-refined.htmlを汎用v3テンプレートに変換する手順  
**成果物**: 他薬剤に適用可能な標準テンプレート

---

## 🎯 テンプレート準備の目的

### なぜテンプレートが必要か
1. **構造の統一性**: すべてのv3薬剤ページで同じ構造を保証
2. **作業効率化**: 薬剤固有情報の差し替えに集中
3. **品質保証**: 検証済みの構造を再利用
4. **保守性向上**: 将来の一括更新が容易

### テンプレートの要件
- metformin固有の情報をすべて除去
- プレースホルダーで置換箇所を明示
- コメントで編集ガイドを提供
- 構造は完全に維持

---

## 📋 準備作業フロー

### Step 1: metformin-refined.htmlの複製

```bash
# 1. v3ディレクトリへコピー
cp docs/drugs-v2/metformin-refined.html docs/drugs-v3/metformin-v3.html

# 2. テンプレート用ファイル作成
cp docs/drugs-v3/metformin-v3.html docs/drugs-v3/_template-v3.html
```

### Step 2: メタデータの汎用化

#### 現在のメタデータ（metformin固有）
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>メトホルミン - 薬剤詳細</title>
    <!-- CSS読み込み -->
</head>
```

#### テンプレート化後
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{薬剤名_日本語}} - 薬剤詳細 | おくすりノート</title>
    <meta name="description" content="{{薬剤名_日本語}}（{{ブランド名}}）の詳細情報。{{薬効群}}として{{主な適応症}}に使用。作用機序、使い分け、開発ストーリーまで。">
    <meta name="keywords" content="{{薬剤名_日本語}}, {{薬剤名_英語}}, {{ブランド名}}, {{薬効群}}, {{主な適応症}}">
    
    <!-- CSS読み込み（変更なし） -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/responsive-unified.css">
    <link rel="stylesheet" href="../assets/css/sidebar.css">
    <link rel="stylesheet" href="../assets/css/mobile-controls.css">
    <link rel="stylesheet" href="../assets/css/level-selector.css">
    <link rel="stylesheet" href="../assets/css/drug-page-v2.css">
</head>
```

### Step 3: bodyクラスとデータ属性

#### 現在
```html
<body class="drug-detail" data-category="endocrine">
```

#### テンプレート化後
```html
<body class="drug-detail" data-category="{{カテゴリーID}}">
<!-- カテゴリーID: cardiovascular, endocrine, gastrointestinal, psychotropic, others -->
```

---

## 🔧 薬剤固有情報の置換

### 薬剤ヘッダー部分

#### 現在（metformin固有）
```html
<div class="drug-header">
    <h1 class="brand-name">メトグルコ®</h1>
    <p class="generic-name">メトホルミン塩酸塩</p>
</div>

<div class="drug-classification">
    <span class="drug-class" data-category="endocrine">
        <i>💊</i>
        ビグアナイド系糖尿病薬
    </span>
    <span class="generation">第一選択薬</span>
</div>
```

#### テンプレート化後
```html
<!-- 薬剤ヘッダー -->
<div class="drug-header">
    <h1 class="brand-name">{{ブランド名}}®</h1>
    <p class="generic-name">{{一般名}}</p>
</div>

<div class="drug-classification">
    <span class="drug-class" data-category="{{カテゴリーID}}">
        <i>{{薬効群アイコン}}</i>
        {{薬効群名}}
    </span>
    <!-- 第○選択薬の場合のみ表示 -->
    {{#if 選択薬順位}}
    <span class="generation">{{選択薬順位}}</span>
    {{/if}}
</div>
```

### サイドバー関連薬剤

#### テンプレート化後
```html
<!-- Related Drugs Section -->
<div class="sidebar-section">
    <h3 class="sidebar-title">🔗 関連薬剤</h3>
    <div class="sidebar-links">
        <!-- 関連薬剤1 -->
        <a href="{{関連薬剤1_ファイル名}}" class="sidebar-link">
            📋 {{関連薬剤1_名前}}
            <span class="drug-category">{{関連薬剤1_分類}}</span>
        </a>
        <!-- 関連薬剤2 -->
        <a href="{{関連薬剤2_ファイル名}}" class="sidebar-link">
            📋 {{関連薬剤2_名前}}
            <span class="drug-category">{{関連薬剤2_分類}}</span>
        </a>
        <!-- 関連薬剤3-4を追加 -->
    </div>
</div>
```

---

## 📝 レベル別コンテンツのテンプレート化

### レベル1：基本情報

#### 30秒サマリーテンプレート
```html
<section class="quick-summary level-1-content">
    <div class="container">
        <h2>⚡ 30秒でわかる{{薬剤名}}</h2>
        
        <div class="impact-grid">
            <div class="impact-item">
                <h4>開発の経緯</h4>
                <p>{{開発年}}年、{{開発背景_簡潔}}</p>
            </div>
            <div class="impact-item">
                <h4>なぜ重要か</h4>
                <p>{{重要性_簡潔}}</p>
            </div>
            <div class="impact-item">
                <h4>どんな患者に使うか</h4>
                <p>{{主な適応_簡潔}}</p>
            </div>
            <div class="impact-item">
                <h4>最大の特徴</h4>
                <p>{{特徴_簡潔}}</p>
            </div>
        </div>
    </div>
</section>
```

### レベル2：臨床情報

#### 作用機序テンプレート
```html
<div class="mechanism">
    <h3>🔬 作用機序</h3>
    <div class="mechanism-content">
        <h4>{{作用機序_タイトル}}</h4>
        <ol>
            <li>{{作用機序_ステップ1}}</li>
            <li>{{作用機序_ステップ2}}</li>
            <li>{{作用機序_ステップ3}}</li>
            <!-- 必要に応じて追加 -->
        </ol>
        
        <div class="clinical-point">
            <h5>💡 臨床的意義</h5>
            <p>{{臨床的意義_説明}}</p>
        </div>
    </div>
</div>
```

### レベル3：専門知識

#### 開発経緯テンプレート
```html
<div class="development-history">
    <h3>📖 開発の歴史と経緯</h3>
    
    <div class="history-section">
        <h4>{{開発経緯_時期1}}</h4>
        <p>{{開発経緯_内容1}}</p>
    </div>
    
    <div class="history-section">
        <h4>{{開発経緯_時期2}}</h4>
        <p>{{開発経緯_内容2}}</p>
    </div>
</div>
```

---

## 🎨 プレースホルダー一覧

### 基本情報プレースホルダー
| プレースホルダー | 説明 | 例 |
|-----------------|------|-----|
| {{薬剤名_日本語}} | 日本語の薬剤名 | アトルバスタチン |
| {{薬剤名_英語}} | 英語の薬剤名 | atorvastatin |
| {{ブランド名}} | 先発品の商品名 | リピトール |
| {{一般名}} | 化学名・一般名 | アトルバスタチンカルシウム水和物 |
| {{薬効群名}} | 薬効分類 | HMG-CoA還元酵素阻害薬 |
| {{カテゴリーID}} | システムカテゴリ | cardiovascular |

### コンテンツプレースホルダー
| プレースホルダー | 説明 | 情報源 |
|-----------------|------|--------|
| {{開発年}} | 開発・承認年 | drugs/[薬剤].md |
| {{開発背景_簡潔}} | 1-2文での背景説明 | drug_evolution/[モデル].md |
| {{主な適応症}} | 主要な適応疾患 | drugs/[薬剤].md |
| {{作用機序_ステップN}} | 作用機序の各段階 | drugs/[薬剤].md |
| {{開発経緯_内容N}} | 開発の歴史的経緯 | drug_stories/[ストーリー].md |

---

## 📋 テンプレート使用手順

### 1. 新薬剤ページ作成時
```bash
# テンプレートをコピー
cp docs/drugs-v3/_template-v3.html docs/drugs-v3/[薬剤名]-v3.html

# エディタで開く
# プレースホルダーを検索・置換
```

### 2. 情報収集
```bash
# source_materials内の関連ファイルを確認
find source_materials -name "*[薬剤名]*" -type f

# 必要な情報を抽出
# - drugs/[薬効群]/[薬剤名].md
# - drug_evolution/[関連モデル].md
# - drug_stories/[関連ストーリー].md
```

### 3. 置換作業
1. 基本情報プレースホルダーを置換
2. レベル1コンテンツを作成
3. レベル2コンテンツを作成
4. レベル3コンテンツを作成
5. 関連薬剤リンクを設定

### 4. 品質確認
- プレースホルダーの置換漏れチェック
- リンクの動作確認
- レベル切替の動作確認
- モバイル表示の確認

---

## ⚠️ 注意事項

### やってはいけないこと
- ❌ 構造の変更（HTMLタグの追加・削除）
- ❌ CSSクラスの変更
- ❌ JavaScriptの追加
- ❌ 機械的な置換（内容を理解せずに）

### 推奨される作業方法
- ✅ source_materialsを読み込んで理解
- ✅ 薬剤の特徴を活かした内容作成
- ✅ レベルに応じた情報の配置
- ✅ 視覚的要素（アイコン・色）の活用

---

## 🚀 次のステップ

### テンプレート完成後
1. 最初の薬剤でテスト適用
2. 問題点の洗い出し
3. テンプレートの改善
4. 本格的な移行作業開始

### 効率化のヒント
- よく使うプレースホルダーのスニペット作成
- 薬効群ごとの共通要素をまとめる
- 関連薬剤マトリックスの事前作成

---

**テンプレート準備ステータス**: 📝 手順策定完了、実作業準備中