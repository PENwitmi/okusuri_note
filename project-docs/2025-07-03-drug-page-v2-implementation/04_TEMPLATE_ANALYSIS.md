# metformin-refined.htmlテンプレート分析

**作成日時**: 2025-07-03 05:20  
**作成者**: CEO  
**目的**: 新実装の基準となるmetformin-refined.htmlの構造を詳細に分析

---

## 📄 ファイル概要

### 基本情報
- **ファイルパス**: `/docs/drugs-v2/metformin-refined.html`
- **ファイルサイズ**: 約35KB
- **総行数**: 約1000行
- **使用クラス数**: 29個
- **状態**: 本番環境デプロイ済み（完全動作確認済み）

### 達成した成果
- **クラス削減**: 168個 → 29個（82.7%削減）
- **CSS削減**: 6,442行 → 370行（94%削減）
- **実装時間**: 2日 → 3時間（93%短縮）
- **品質**: エラー0、モバイル対応完了

---

## 🏗️ HTML構造の階層

```
<!DOCTYPE html>
├── <head>
│   ├── メタ情報
│   └── CSS読み込み（3ファイル）
├── <body class="drug-detail" data-category="endocrine">
│   ├── レベルインジケーター
│   ├── レベル1コンテンツ（6セクション）
│   ├── レベル2コンテンツ（5セクション）
│   ├── レベル3コンテンツ（6セクション）
│   └── JavaScript（レベル切り替え機能）
```

---

## 📊 使用クラス一覧（29個）

### 1. 構造系クラス（7個）
| クラス名 | 用途 | 使用箇所 |
|---------|------|----------|
| `drug-detail` | body要素のルートクラス | `<body>` |
| `container` | コンテンツの中央寄せ | 各セクション内 |
| `level-selector` | レベル選択UI | ページ上部固定 |
| `level-selector__inner` | レベル選択の内部ラッパー | `.level-selector`内 |
| `level-btn` | レベル切り替えボタン | 3個（薬学生/実習中/研修中） |
| `active` | アクティブ状態 | 選択中のレベルボタン |
| `card` | カード型コンテナ（レベル2で使用） | 詳細解説セクション |

### 2. 薬剤情報系クラス（8個）
| クラス名 | 用途 | 内容例 |
|---------|------|--------|
| `drug-header` | 薬剤名表示エリア | メトグルコ®表示部 |
| `brand-name` | 商品名 | メトグルコ® |
| `generic-name` | 一般名 | メトホルミン塩酸塩 |
| `drug-classification` | 薬効分類コンテナ | 分類バッジの親要素 |
| `drug-class` | 薬効分類バッジ | ビグアナイド系糖尿病薬 |
| `generation` | 世代・特徴バッジ | 第一選択薬 |
| `indications` | 適応症セクション | 主な適応症の親要素 |
| `indications__list` | 適応症リスト | 2型糖尿病等 |

### 3. コンテンツ系クラス（11個）
| クラス名 | 用途 | 特徴 |
|---------|------|------|
| `quick-summary` | 30秒サマリー | レベル1の主要セクション |
| `impact-grid` | グリッドレイアウト | 4つの視点を配置 |
| `impact-item` | グリッドアイテム | 各視点の内容 |
| `summary-item` | サマリーアイテム（未使用？） | impact-itemと重複の可能性 |
| `quote-box` | 引用ボックス | 重要警告等で使用 |
| `specialist-perspective` | 専門家視点 | 特別なハイライト |
| `faq-note` | FAQ注記 | 薬学生向け補足説明 |
| `prescribing-data` | 処方データ | Rp形式の処方例 |
| `design-spec` | 処方内容表示 | 等幅フォントで表示 |
| `combination-drugs` | 併用薬セクション | TOP3リスト |
| `combination-drugs__list` | 併用薬リスト | 番号付きリスト |

### 4. レベル系クラス（3個）
| クラス名 | 用途 | 初期状態 |
|---------|------|----------|
| `level-1-content` | 薬学生向け | 表示 |
| `level-2-content` | 実習中向け | 非表示 |
| `level-3-content` | 研修中向け | 非表示 |

---

## 🔍 特徴的な実装パターン

### 1. セクション構造の標準パターン
```html
<section class="level-1-content">
    <div class="container">
        <h2>セクションタイトル</h2>
        <!-- コンテンツ -->
    </div>
</section>
```
**ポイント**: 
- セクションにレベルクラス
- 内部にcontainerで中央寄せ
- h2でセクションタイトル

### 2. 薬剤ヘッダーの構成
```html
<section class="level-1-content">
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
</section>
```
**ポイント**: 
- data-category属性で薬効群指定
- 絵文字アイコンで視覚的アクセント
- 世代/特徴をバッジ表示

### 3. 30秒サマリーの4視点構成
```html
<section class="quick-summary level-1-content">
    <div class="container">
        <h2>⚡ 30秒でわかるメトホルミン</h2>
        <div class="impact-grid">
            <div class="impact-item">
                <h4>開発の位置づけ</h4>
                <p>簡潔な説明</p>
                <p>詳細な説明</p>
            </div>
            <!-- 他の3視点も同様 -->
        </div>
    </div>
</section>
```
**視点**:
1. 開発の位置づけ
2. なぜ作られた？
3. 実際どう使われてる？
4. 他の薬との違い

### 4. FAQ構造（dl要素使用）
```html
<dl>
    <dt>Q: 「★★★ なぜビグアナイド系で唯一生き残った？」</dt>
    <dd>A: フェンホルミンと比べて...</dd>
</dl>
```
**ポイント**: 
- ★で国試頻出度表示
- Q/A形式で明確
- level-hintで上級編への誘導

### 5. 処方パターンの表示
```html
<div class="prescribing-data">
    <div class="design-spec">
Rp) メトグルコ錠 250mg  
    1回2錠（500mg） 1日1回 夕食後  
    30日分</div>
    <p>※ 消化器症状を避けるため...</p>
</div>
```
**ポイント**: 
- 等幅フォントでRp形式維持
- 補足説明を併記

---

## 🎨 レベル別のデザイン特徴

### レベル1（薬学生向け）
- **背景**: `var(--bg-study)` - 薄い青系
- **文字色**: `var(--text-reading)` - 読みやすい濃いグレー
- **左ボーダー**: 5px solid 薄い青
- **フォントサイズ**: 18px（大きめ）
- **行間**: 1.9（ゆったり）

### レベル2（実習中向け）
- **背景**: グラデーション（白→薄緑→薄青）
- **ボーダー**: 2px solid 薄緑 + 左6px
- **フォント**: 500（やや太め）
- **アイコン**: 🏥（右上に配置）

### レベル3（研修中向け）
- **背景**: グラデーション（第三次背景色）
- **上ボーダー**: 5px solid 濃い色
- **blockquote**: 特別なスタイル（引用符装飾）
- **cite**: 右寄せ、強調色

---

## 📱 レスポンシブ対応

### モバイル時の変更点
```css
@media (max-width: 768px) {
    /* border-radiusを0に（全幅表示） */
    .level-1-content,
    .level-2-content,
    .level-3-content {
        border-radius: 0;
        margin-left: 0;
        margin-right: 0;
    }
    
    /* グリッドを1カラムに */
    .impact-grid {
        grid-template-columns: 1fr;
    }
    
    /* フォントサイズ調整 */
    .brand-name {
        font-size: var(--font-size-2xl);
    }
}
```

---

## 💡 JavaScript機能

### レベル切り替え機能
```javascript
// 主要な処理フロー
1. ボタンクリックイベントをリッスン
2. data-level属性から対象レベルを取得
3. 全レベルコンテンツを非表示
4. 選択レベルのコンテンツのみ表示
5. アクティブボタンの状態更新
6. 最初の表示セクションにスクロール
```

### クラス名の重要性
```javascript
const levelSections = {
    '1': document.querySelectorAll('.level-1-content'),
    '2': document.querySelectorAll('.level-2-content'),
    '3': document.querySelectorAll('.level-3-content')
};
```
**注意**: クラス名を変更するとJavaScriptが動作しなくなる

---

## ⚠️ 他薬剤への適用時の注意

### 1. data-category属性の設定
```html
<!-- 内分泌系 -->
<body class="drug-detail" data-category="endocrine">

<!-- 循環器系 -->
<body class="drug-detail" data-category="cardiovascular">

<!-- 中枢神経系 -->
<body class="drug-detail" data-category="cns">
```

### 2. 薬剤固有の警告ボックス
メトホルミンには乳酸アシドーシスの特別警告があるが、他薬剤では不要または内容変更が必要

### 3. 30秒サマリーの4視点
基本的に同じ構造だが、内容は薬剤特性に合わせて調整：
- スタチン → 「ストロングスタチン」の強調
- ARB → 「臓器保護作用」の強調
- PPI → 「CYP阻害」の注意

### 4. レベル3の証言セクション
医師・患者の声は薬剤ごとに大きく異なるため、構造は維持しつつ内容は完全に差し替え

---

## 📋 実装チェックリスト

他薬剤実装時の確認項目：

- [ ] body要素にdata-category設定
- [ ] CSS読み込み順序（style → responsive → drug-page-v2）
- [ ] レベルインジケーターの3ボタン
- [ ] 各レベルに最低1つのセクション
- [ ] containerクラスでの中央寄せ
- [ ] 30秒サマリーの4視点
- [ ] FAQのdl構造
- [ ] 処方パターンのRp形式
- [ ] JavaScriptのコピー（クラス名確認）
- [ ] モバイル表示の確認

---

## 🎯 成功の指標

metformin-refined.htmlが優れたテンプレートである理由：

1. **最小限の複雑性**: 29個のクラスで完全な機能を実現
2. **明確な構造**: レベル1→2→3の論理的配置
3. **再利用性**: 他薬剤にそのまま適用可能
4. **保守性**: 誰でも理解・修正可能
5. **拡張性**: 新機能追加が容易

このテンプレートを基準とすることで、全22薬剤の統一的な実装が可能になります。

---

**分析完了**: 2025-07-03 05:20