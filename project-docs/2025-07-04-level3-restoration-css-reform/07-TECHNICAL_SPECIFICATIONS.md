# 07-TECHNICAL_SPECIFICATIONS.md
# 技術仕様書 - Level 3復元・CSS改革プロジェクト

**作成日時**: 2025-07-04 04:53  
**作成者**: CEO  
**仕様バージョン**: 1.0.0  
**最終更新**: 2025-07-04 04:53

## 📋 概要

本仕様書は、Level 3コンテンツ復元とCSS構造改革の技術的実装詳細を定義する。すべての開発者が従うべき標準と具体的な実装方法を明文化し、一貫性のある高品質な実装を保証する。

## 🏗️ CSS アーキテクチャ仕様

### ファイル構成と責務

#### style.css（新規）
```css
/* ファイルヘッダー仕様 */
/*
 * style.css - おくすりノート 基本スタイルシート
 * Version: 1.0.0
 * Created: 2025-07-05
 * Modified: YYYY-MM-DD
 * 
 * 責務: すべてのページで使用される基本スタイル
 * 依存: なし
 * 
 * 内容:
 * - CSS変数定義
 * - リセット・正規化
 * - 基本要素スタイル
 * - 共通レイアウト（ヘッダー・フッター）
 * - 汎用ユーティリティクラス
 * 
 * 注: 旧style.cssはold-style.cssにリネーム済み
 */
```

**必須セクション構成**:
```css
/* 1. CSS変数定義 */
:root { /* ... */ }

/* 2. リセット・正規化 */
*, *::before, *::after { /* ... */ }

/* 3. 基本要素 */
html, body, h1-h6, p, a { /* ... */ }

/* 4. 共通レイアウト */
.header, .footer { /* ... */ }

/* 5. ユーティリティ */
.container, .text-center { /* ... */ }
```

#### index.css
```css
/* ファイルヘッダー仕様 */
/*
 * index.css - インデックスページ専用スタイルシート
 * Version: 1.0.0
 * Created: 2025-07-05
 * Modified: YYYY-MM-DD
 * 
 * 責務: index.htmlでのみ使用されるスタイル
 * 依存: style.css（必須）
 * 
 * 警告: 複数要素の並列表示を前提とした設計
 * 薬剤個別ページでは使用禁止
 */
```

### CSS読み込み順序仕様

#### インデックスページ (index.html)
```html
<!-- 必須: この順序を厳守 -->
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/index.css">
<link rel="stylesheet" href="assets/css/responsive-unified.css">
<link rel="stylesheet" href="assets/css/interactive.css">
```

#### 薬剤個別ページ (drugs-v2/*.html)
```html
<!-- 必須: この順序を厳守 -->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
```

## 📐 クラス命名規則

### BEM変形記法
```css
/* ブロック */
.drug-header { }

/* エレメント（アンダースコア2つ） */
.drug-header__title { }
.drug-header__subtitle { }

/* モディファイア（ハイフン2つ） */
.drug-header--compact { }
.drug-header__title--emphasized { }
```

### プレフィックス規則
```css
/* ページ固有 */
.index-* { }  /* インデックスページ専用 */
.drug-* { }   /* 薬剤ページ専用 */

/* 状態 */
.is-* { }     /* 状態を表す */
.has-* { }    /* 所有を表す */

/* JavaScript連携 */
.js-* { }     /* JavaScriptフック専用 */
```

## 🔧 Level 3 コンテンツ実装仕様

### HTML構造要件
```html
<!-- 必須: Level 3セクション構造 -->
<section class="level-3-content">
    <div class="container">
        <h2>レベル3：研修中向け高度情報</h2>
        
        <!-- コンテンツブロック -->
        <div class="content-block">
            <!-- 内容 -->
        </div>
    </div>
</section>
```

### 表示制御仕様
```javascript
// JavaScriptによる表示制御
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        
        // すべてのレベルを非表示
        document.querySelectorAll('[class^="level-"]').forEach(content => {
            content.style.display = 'none';
        });
        
        // 選択レベル以下を表示
        for(let i = 1; i <= level; i++) {
            const elements = document.querySelectorAll(`.level-${i}-content`);
            elements.forEach(el => el.style.display = 'block');
        }
    });
});
```

### 禁止事項
```html
<!-- ❌ 禁止: インラインスタイルでの非表示 -->
<section class="level-3-content" style="display: none;">

<!-- ❌ 禁止: クラスの欠落 -->
<section> <!-- class="level-3-content"が必須 -->
```

## 📊 コンテンツ復元仕様

### 既存CSSクラスへのマッピング規則

#### 医師・患者証言
```html
<!-- 元の構造 -->
<div class="doctor-voice emotion-moved">
    <blockquote>証言内容</blockquote>
    <cite>- 医師名</cite>
</div>

<!-- 復元後の構造（既存クラス使用） -->
<div class="specialist-perspective">
    <div class="testimonial">
        <blockquote class="quote-box">
            証言内容
        </blockquote>
        <cite>- 医師名</cite>
    </div>
</div>
```

#### タイムライン構造
```html
<!-- 復元構造（既存クラスの創造的使用） -->
<div class="impact-grid">
    <div class="story-card">
        <div class="story-year">年代</div>
        <div class="story-title">タイトル</div>
        <div class="story-description">
            詳細説明
        </div>
    </div>
</div>
```

#### 統計データ
```html
<!-- 復元構造 -->
<div class="statistics">
    <div class="hero-stats">
        <div class="stat-item">
            <span class="stat-number">数値</span>
            <span class="stat-label">ラベル</span>
        </div>
    </div>
</div>
```

### 最小限の新規クラス追加仕様

#### 追加可能クラス（10個以内）
```css
/* 1. タイムラインコンテナ */
.timeline-container {
    position: relative;
    padding-left: 2rem;
}

/* 2. タイムラインアイテム */
.timeline-item {
    position: relative;
    padding-bottom: 2rem;
    border-left: 3px solid var(--pharma-primary);
}

/* 3. 歴史セクション */
.historical-section {
    background: var(--bg-accent);
    padding: var(--spacing-2xl);
    border-radius: 12px;
}

/* 4. 薬剤比較 */
.drug-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
}

/* 5. 強調ボックス */
.emphasis-box {
    background: linear-gradient(135deg, var(--pharma-primary-subtle), var(--bg-light));
    padding: var(--spacing-lg);
    border-radius: 8px;
    border-left: 4px solid var(--pharma-primary);
}
```

## 🔍 品質保証仕様

### コードレビューチェックリスト
```yaml
CSS分離:
  - [ ] style.cssには共通要素のみ
  - [ ] index.cssにはインデックス専用要素のみ
  - [ ] 適切なファイルヘッダーコメント
  - [ ] BEM記法の遵守

Level 3表示:
  - [ ] style="display: none"が存在しない
  - [ ] class="level-3-content"が正しく設定
  - [ ] JavaScriptでの表示切り替えが機能

コンテンツ復元:
  - [ ] 既存CSSクラスを最大限活用
  - [ ] 新規クラスは必要最小限
  - [ ] 元の価値が保持されている
```

### 自動検証スクリプト
```bash
#!/bin/bash
# validate_implementation.sh

# CSS分離検証
echo "=== CSS分離検証 ==="
if grep -q "\.hero\|\.drug-card" style.css; then
    echo "❌ エラー: style.cssにインデックス専用クラスが含まれています"
    exit 1
fi

# Level 3表示検証
echo "=== Level 3表示検証 ==="
for file in docs/drugs-v2/*.html; do
    if grep -q 'level-3-content.*style.*display.*none' "$file"; then
        echo "❌ エラー: $file にdisplay:noneが含まれています"
        exit 1
    fi
    if ! grep -q 'class="level-3-content"' "$file"; then
        echo "❌ エラー: $file にlevel-3-contentクラスがありません"
        exit 1
    fi
done

echo "✅ すべての検証に合格"
```

## 🔄 バージョン管理仕様

### ファイルバージョニング
```html
<!-- 開発環境 -->
<link rel="stylesheet" href="style.css?v=dev">

<!-- 本番環境（日付ベース） -->
<link rel="stylesheet" href="style.css?v=20250705">

<!-- 本番環境（ハッシュベース） -->
<link rel="stylesheet" href="style.css?v=a3f5b2c">
```

### 変更履歴記録
```css
/*
 * 変更履歴:
 * - 2025-07-05: 初版作成 (v1.0.0)
 * - 2025-07-06: ユーティリティクラス追加 (v1.1.0)
 * - 2025-07-07: バグ修正 (v1.1.1)
 */
```

## 📝 ドキュメント要件

### インラインドキュメント
```css
/* 
 * .timeline-container
 * 
 * 用途: タイムライン全体のコンテナ
 * 使用場所: Level 3コンテンツ内の歴史的経緯表示
 * 
 * 構造:
 * <div class="timeline-container">
 *     <div class="timeline-item">...</div>
 * </div>
 */
.timeline-container {
    /* 実装 */
}
```

### 使用例の提供
```css
/* 
 * 使用例:
 * <div class="emphasis-box">
 *     <h4>重要ポイント</h4>
 *     <p>強調したい内容</p>
 * </div>
 */
```

## 🚫 アンチパターン

### 避けるべき実装
```css
/* ❌ 過度に具体的なクラス名 */
.metformin-special-timeline { }

/* ❌ インラインスタイルの多用 */
style="margin: 20px; padding: 10px;"

/* ❌ !importantの乱用 */
.class { property: value !important; }

/* ❌ IDセレクタの使用 */
#specific-element { }
```

### 推奨される代替案
```css
/* ✅ 汎用的なクラス名 */
.drug-timeline { }

/* ✅ クラスによるスタイル定義 */
class="spacing-lg"

/* ✅ 詳細度の適切な管理 */
.parent .child { }

/* ✅ クラスセレクタの使用 */
.specific-element { }
```

## 🔐 セキュリティ仕様

### コンテンツサニタイゼーション
```javascript
// ユーザー入力を含む場合
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
```

### CSP対応
```html
<!-- Content Security Policy対応 -->
<meta http-equiv="Content-Security-Policy" 
      content="style-src 'self' 'unsafe-inline';">
```

## 📎 付録: テンプレート

### 新規薬剤ページテンプレート
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[薬剤名] - 薬剤詳細</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/drug-page-v2.css">
    <link rel="stylesheet" href="../assets/css/responsive-unified.css">
</head>
<body class="drug-detail" data-category="[カテゴリ]">
    <!-- レベルセレクター -->
    <div class="level-selector">
        <div class="level-selector__inner">
            <button class="level-btn active" data-level="1">薬学生</button>
            <button class="level-btn" data-level="2">実習中</button>
            <button class="level-btn" data-level="3">研修中</button>
        </div>
    </div>
    
    <!-- コンテンツ -->
    <section class="level-1-content">
        <div class="container">
            <!-- Level 1内容 -->
        </div>
    </section>
    
    <section class="level-2-content" style="display: none;">
        <div class="container">
            <!-- Level 2内容 -->
        </div>
    </section>
    
    <section class="level-3-content" style="display: none;">
        <div class="container">
            <!-- Level 3内容 -->
        </div>
    </section>
    
    <script src="../assets/js/level-switcher.js"></script>
</body>
</html>
```

この技術仕様書に従うことで、一貫性のある高品質な実装が保証される。すべての開発者は、この仕様を遵守し、不明な点があれば確認することが求められる。