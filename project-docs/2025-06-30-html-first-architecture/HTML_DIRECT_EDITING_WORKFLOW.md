# HTML直接編集ワークフロー

**作成日時**: 2025-06-30 19:50  
**対象**: PharmaDx開発者全員

## 概要

本文書は、PharmaDxにおけるHTML直接編集の標準ワークフローを定義します。高品質な薬剤ページを効率的に作成するための実践的ガイドです。

## 🎯 品質目標

### 必達基準
- **最低行数**: 500行（推奨: 700-900行）
- **ロード時間**: 3秒以内
- **アクセシビリティ**: WCAG 2.1 AA準拠
- **レスポンシブ**: モバイル完全対応

### コンテンツ必須要素
1. **ヒーローセクション**: 薬剤の第一印象
2. **30秒サマリー**: 本質を凝縮
3. **医師/患者の証言**: 最低2つ
4. **歴史的ストーリー**: 開発秘話
5. **視覚的データ**: 表、グラフ、比較
6. **実践ガイド**: 具体的な処方例

## 📝 開発フロー

### Step 1: 準備とリサーチ（2時間）

#### 1.1 医学的情報収集
```
□ 添付文書の詳細確認
□ 最新のガイドライン確認
□ 主要な臨床試験データ収集
□ 処方実態データ（可能なら）
□ 副作用・相互作用情報
```

#### 1.2 ストーリー要素収集
```
□ 開発の歴史的背景
□ 開発者のエピソード
□ First-in-Classなら革命的要素
□ 医師の使用経験談（文献・インタビュー）
□ 患者の体験談（匿名化）
```

#### 1.3 競合薬剤との差別化ポイント
```
□ 同じ薬効群の他剤リスト
□ 各薬剤の特徴比較表作成
□ 使い分けの明確な基準
□ 「なぜこの薬が必要か」の答え
```

### Step 2: HTMLテンプレートから開始（30分）

#### 2.1 基本テンプレート選択
```html
<!-- /templates/drug-detail-premium.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[薬剤名] - [キャッチフレーズ]">
    <title>[薬剤名]（[ブランド名]） | PharmaDx 薬剤図鑑</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/drug-detail.css">
</head>
<body>
    <!-- ヘッダー -->
    <header class="header">
        <!-- 標準ヘッダーコンポーネント -->
    </header>

    <!-- メインコンテンツ -->
    <main class="drug-detail">
        <!-- セクション1: ヒーローエリア -->
        <section class="drug-hero">
            <!-- インパクトのある導入部 -->
        </section>

        <!-- セクション2: 30秒サマリー -->
        <section class="quick-summary">
            <!-- 本質を凝縮した要約 -->
        </section>

        <!-- セクション3: 歴史と革新 -->
        <section class="history-innovation">
            <!-- 開発ストーリー -->
        </section>

        <!-- 以下、必要なセクションを追加 -->
    </main>

    <!-- フッター -->
    <footer class="footer">
        <!-- 標準フッター -->
    </footer>
</body>
</html>
```

#### 2.2 セクション構成の標準パターン
1. **ヒーローセクション**（50-100行）
2. **30秒サマリー**（30-50行）
3. **歴史的背景/革新性**（100-150行）
4. **臨床的価値**（100-150行）
5. **使い分けガイド**（80-120行）
6. **副作用と安全性**（60-100行）
7. **処方実践**（80-120行）
8. **将来展望**（40-60行）
9. **関連リンク**（20-30行）

### Step 3: コンテンツ作成（3-4時間）

#### 3.1 ヒーローセクションの作成
```html
<section class="drug-hero">
    <div class="drug-title-section">
        <h1 class="drug-name">ロサルタン</h1>
        <div class="drug-subtitle">
            <span class="generic-name">ロサルタンカリウム</span>
            <span class="brand-name">（ニューロタン®）</span>
        </div>
        <div class="drug-classification">
            <span class="drug-class">ARB</span>
            <span class="tagline">AT1受容体拮抗の開拓者</span>
        </div>
    </div>
    
    <div class="drug-overview-stats">
        <div class="stat-item">
            <span class="stat-label">市場シェア</span>
            <span class="stat-value highlight">20%</span>
        </div>
        <!-- 他の重要指標 -->
    </div>
</section>
```

#### 3.2 感動的要素の追加
```html
<!-- 医師の証言 -->
<div class="doctor-testimonial">
    <blockquote>
        <p>「ACE阻害薬で空咳に悩まされていた患者に、
        初めてロサルタンを処方した時の感動は忘れられない。
        空咳なしで血圧が下がる奇跡を目の当たりにした」</p>
        <cite>- 循環器内科医（1995年当時、30代）</cite>
    </blockquote>
</div>

<!-- 歴史的瞬間 -->
<div class="historical-moment">
    <h3>1995年：医学史を変えた瞬間</h3>
    <p>世界初のARBとして、「受容体拮抗」という
    全く新しい治療概念が誕生した歴史的瞬間...</p>
</div>
```

#### 3.3 視覚的要素の充実
```html
<!-- 比較表 -->
<div class="comparison-table elegant-table">
    <table>
        <thead>
            <tr>
                <th>特徴</th>
                <th>ロサルタン</th>
                <th>他のARB</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>尿酸排泄</td>
                <td class="positive">促進効果あり</td>
                <td class="neutral">効果なし</td>
            </tr>
            <!-- 他の比較項目 -->
        </tbody>
    </table>
</div>

<!-- インフォグラフィック -->
<div class="infographic">
    <div class="stat-circle">
        <span class="number">25%</span>
        <span class="label">脳卒中リスク減少</span>
    </div>
</div>
```

### Step 4: スタイリングと装飾（1時間）

#### 4.1 カスタムCSS追加
```css
/* 薬剤固有のテーマカラー */
.drug-detail.losartan {
    --primary-color: #2E86AB;
    --accent-color: #F24236;
}

/* 感動的要素の強調 */
.doctor-testimonial {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 2rem;
    border-left: 4px solid var(--primary-color);
    font-style: italic;
}

/* アニメーション効果 */
.stat-value {
    animation: countUp 2s ease-out;
}
```

#### 4.2 レスポンシブ対応
```css
@media (max-width: 768px) {
    .drug-hero {
        flex-direction: column;
    }
    
    .comparison-table {
        overflow-x: auto;
    }
}
```

### Step 5: 品質チェック（30分）

#### 5.1 必須要素チェックリスト
```
□ 500行以上のコンテンツ
□ ヒーローセクション
□ 30秒サマリー
□ 医師/患者の証言（2つ以上）
□ 歴史的ストーリー
□ 臨床データの視覚化
□ 副作用・安全性情報
□ 処方実践ガイド
□ 関連リンク
```

#### 5.2 技術的チェック
```
□ HTMLバリデーション通過
□ リンク切れなし
□ 画像の適切なalt属性
□ メタデータ完備
□ モバイル表示確認
□ ページロード3秒以内
```

#### 5.3 感動度チェック
```
□ 読んで感動する要素があるか
□ 記憶に残るストーリーがあるか
□ 「なぜこの薬が必要か」が明確か
□ 視覚的に美しいか
□ PharmaDxブランドを体現しているか
```

### Step 6: 配置とテスト（15分）

#### 6.1 ファイル配置
```bash
# 正しい場所に配置
cp drug-name.html /docs/generated/drugs/

# アセットの確認
ls /docs/assets/css/
ls /docs/assets/js/
```

#### 6.2 ローカルテスト
```bash
# ローカルサーバー起動
cd /docs
python -m http.server 8000

# ブラウザで確認
open http://localhost:8000/generated/drugs/drug-name.html
```

## 🎨 デザインガイドライン

### カラーパレット
- **プライマリ**: 薬効群ごとに設定
- **アクセント**: 重要情報の強調
- **背景**: 清潔感のある白基調
- **テキスト**: 読みやすさ重視の濃グレー

### タイポグラフィ
- **見出し**: Noto Sans JP Bold
- **本文**: Noto Sans JP Regular
- **引用**: Noto Serif JP
- **コード**: Source Code Pro

### レイアウト原則
- **余白**: 情報の呼吸を大切に
- **階層**: 視覚的な重要度を明確に
- **一貫性**: 全ページで統一感
- **アクセント**: 感動ポイントを際立たせる

## 📚 参考リソース

### 高品質HTMLの例
- `/docs/archive/backup_20250630_1832/html_files/drugs/losartan.html`（764行）
- `/docs/archive/backup_20250630_1832/html_files/drugs/telmisartan.html`（916行）

### テンプレート集
- `/templates/drug-detail-premium.html`
- `/templates/components/testimonial.html`
- `/templates/components/comparison-table.html`

### スタイルガイド
- `/docs/style-guide.html`
- `/docs/component-library.html`

## ⚠️ よくある間違い

### ❌ 避けるべきこと
1. **情報の羅列**: 感動なき事実の列挙
2. **医学用語の乱用**: 専門的すぎる表現
3. **短すぎるコンテンツ**: 200-300行では不十分
4. **ビジュアル不足**: テキストのみのページ
5. **ストーリー欠如**: 人間味のない説明

### ✅ 推奨すること
1. **感動的な導入**: 最初の30秒で心を掴む
2. **平易な説明**: 誰でも理解できる表現
3. **充実したコンテンツ**: 700行以上を目標
4. **視覚的魅力**: 表、グラフ、引用の活用
5. **人間的要素**: 開発者・医師・患者の声

## 🚀 次のステップ

1. **既存の高品質HTML**を参考に学習
2. **テンプレート**を活用して効率化
3. **最初の1ページ**を丁寧に作成
4. **フィードバック**を受けて改善
5. **ベストプラクティス**を共有

---

**このワークフローに従うことで、PharmaDxの価値を最大限に表現する高品質なHTMLページを作成できます。**