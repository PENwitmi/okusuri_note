# 薬剤ページVer2実装ガイド

**作成日時**: 2025-07-03 05:20  
**作成者**: CEO  
**目的**: rosuvastatin、telmisartanをclean形式で実装するための詳細手順

---

## ⚠️ 重要：rosuvastatin/telmisartanは特例ルート

**現在の状態**：
- rosuvastatin-v2-components.html → すでにVer2化済み（古いCSS付き）
- telmisartan-v2-components.html → すでにVer2化済み（古いCSS付き）

これらはすでにコンテンツの再配置（Ver2化）が完了しているため、**Step 2をスキップ**して：
1. クリーン化（古いCSS除去）
2. 新CSS付与

の手順で進めます。詳細は「**特例: rosuvastatin/telmisartanの実装手順**」セクションを参照してください。

---

## 🚀 実装の全体フロー（標準ルート）

```
1. 準備作業（5分）
   ├── バックアップ作成
   ├── ワークディレクトリ作成
   └── 元ファイルのコピー

2. Step 1: HTMLクリーン化（20分）@css_cleanup
   ├── drugsから_internal/css_cleanupへコピー
   ├── class属性の完全削除
   ├── style属性の削除
   └── 構造確認

3. Step 2: コンテンツ再配置（30分）@drug_versionup
   ├── css_cleanupから_internal/drug_versionupへコピー
   ├── metformin-refined.htmlを参考に構造整理
   ├── レベル1→2→3の順序で配置
   └── すべての内容を保持（情報欠損なし）

4. Step 3: クラス付与（20分）
   ├── 必要最小限のクラスを付与
   ├── metformin-refined.htmlのクラスを参考
   └── 薬剤固有の調整

5. 最終配置と検証（15分）
   ├── drugs-v2/へ最終ファイル配置
   ├── 表示確認・モバイル確認
   └── Git push
```

---

## 📝 Step 0: 準備作業

### ワークディレクトリ作成
```bash
# ワークディレクトリが存在しない場合は作成
mkdir -p docs/_internal/css_cleanup/
mkdir -p docs/_internal/drug_versionup/

# バックアップディレクトリ作成
mkdir -p _old_files/backup_$(date +%Y%m%d_%H%M)/
```

### 元ファイルのバックアップとコピー
```bash
# 元のHTMLファイルをバックアップ
cp docs/drugs/rosuvastatin.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

cp docs/drugs/telmisartan.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

# css_cleanupディレクトリへコピー（Step 1の準備）
cp docs/drugs/rosuvastatin.html \
   docs/_internal/css_cleanup/rosuvastatin.html

cp docs/drugs/telmisartan.html \
   docs/_internal/css_cleanup/telmisartan.html
```

### 作業環境の準備
```bash
# metformin-refined.htmlを参照用に開く
# エディタで並べて表示すると作業しやすい
```

---

## 🧹 Step 1: HTMLクリーン化（最重要）

### 1.1 class属性の完全削除

#### 自動削除（sedコマンド）
```bash
# rosuvastatinのクリーン化
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/rosuvastatin.html

# telmisartanのクリーン化
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/telmisartan.html
```

#### 手動削除の場合
VSCodeなどで以下の正規表現で検索・置換：
- 検索: ` class="[^"]*"`
- 置換: （空文字）

### 1.2 style属性の削除
```bash
# インラインスタイルも同様に削除
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/rosuvastatin.html
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/telmisartan.html
```

### 1.3 クリーンファイルの命名
```bash
# クリーン化完了後、ファイル名を変更
mv docs/_internal/css_cleanup/rosuvastatin.html \
   docs/_internal/css_cleanup/rosuvastatin-clean.html

mv docs/_internal/css_cleanup/telmisartan.html \
   docs/_internal/css_cleanup/telmisartan-clean.html
```

### 1.3 クリーン化の確認

**確認ポイント**:
```html
<!-- クリーン化前 -->
<section class="basic-info-card level-1-content">
    <div class="drug-name-display">
        <h1 class="brand-name">クレストール®</h1>
        <p class="generic-name">ロスバスタチンカルシウム</p>
    </div>
</section>

<!-- クリーン化後 -->
<section>
    <div>
        <h1>クレストール®</h1>
        <p>ロスバスタチンカルシウム</p>
    </div>
</section>
```

⚠️ **重要**: この時点でclass属性が1つでも残っていると失敗です

---

## 📋 Step 2: コンテンツ再配置（Ver2化）

### 2.0 ワークディレクトリへのコピー
```bash
# クリーン化したファイルをdrug_versionupへコピー
cp docs/_internal/css_cleanup/rosuvastatin-clean.html \
   docs/_internal/drug_versionup/rosuvastatin-clean.html

cp docs/_internal/css_cleanup/telmisartan-clean.html \
   docs/_internal/drug_versionup/telmisartan-clean.html
```

### 2.1 標準構造テンプレート

**重要原則**: 情報の欠損は一切なし。すべての内容を残して並べ替えるだけ。

metformin-refined.htmlを基準とした構造：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[薬剤名] - 薬剤詳細</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/responsive-unified.css">
    <link rel="stylesheet" href="../assets/css/drug-page-v2.css">
</head>
<body>
    <!-- レベルインジケーター -->
    <div>
        <div>
            <button data-level="1">薬学生</button>
            <button data-level="2">実習中</button>
            <button data-level="3">研修中</button>
        </div>
    </div>

    <!-- レベル1：薬学生向け -->
    <section>
        <!-- 基本情報カード -->
        <div>
            <h1>[商品名]®</h1>
            <p>[一般名]</p>
        </div>
        <!-- 以下、必要な要素を配置 -->
    </section>

    <!-- レベル2：実習中 -->
    <section>
        <h2>[セクションタイトル]</h2>
        <!-- コンテンツ -->
    </section>

    <!-- レベル3：研修中 -->
    <section>
        <h2>[セクションタイトル]</h2>
        <!-- コンテンツ -->
    </section>

    <!-- JavaScript（レベル切り替え） -->
    <script>
        // metformin-refined.htmlからコピー
    </script>
</body>
</html>
```

### 2.2 コンテンツ移動のポイント

#### レベル1に配置すべきもの
- 基本情報（商品名、一般名、薬効分類）
- 主な適応症
- 30秒サマリー（4つの視点）
- 薬学生FAQ（3つ程度）
- よく見る処方パターン
- 併用薬TOP3

#### レベル2に配置すべきもの
- 詳細な作用機序
- なぜこの薬が選ばれるのか
- 実習での注意点
- 副作用と対処法

#### レベル3に配置すべきもの
- **レベル1、2に含まれない元HTMLのすべての内容**
- 臨床での使い分け
- エビデンスの詳細
- 医師・患者の声
- 最新の研究動向
- その他すべての情報（削除禁止）

### 2.3 Ver2化完了後のファイル名
```bash
# Ver2化が完了したら、ファイル名を変更
mv docs/_internal/drug_versionup/rosuvastatin-clean.html \
   docs/_internal/drug_versionup/rosuvastatin-clean-v2.html

mv docs/_internal/drug_versionup/telmisartan-clean.html \
   docs/_internal/drug_versionup/telmisartan-clean-v2.html
```

### 2.4 情報の扱いに関する注意
- ✅ すべての情報を保持（情報欠損なし）
- ✅ 重複があっても削除しない
- ✅ 古い表現があっても残す
- ❌ 勝手に情報を削除しない
- ❌ 「不要」と判断して省略しない

---

## 🏷️ Step 3: クラス付与（最小限実装）

### 3.1 必須クラス一覧（29個）

#### body要素
```html
<body class="drug-detail" data-category="[薬効群]">
```
- cardiovascular（循環器系）
- endocrine（内分泌系）
- cns（中枢神経系）など

#### 構造系クラス
```html
<!-- レベルセレクター -->
<div class="level-selector">
    <div class="level-selector__inner">
        <button class="level-btn active" data-level="1">薬学生</button>
        <button class="level-btn" data-level="2">実習中</button>
        <button class="level-btn" data-level="3">研修中</button>
    </div>
</div>

<!-- コンテナ（中央寄せ用） -->
<div class="container">
    <!-- コンテンツ -->
</div>
```

#### レベル別クラス
```html
<!-- レベル1 -->
<section class="level-1-content">

<!-- レベル2 -->
<section class="level-2-content">

<!-- レベル3 -->
<section class="level-3-content">
```

#### コンポーネント系クラス
```html
<!-- 薬剤ヘッダー -->
<div class="drug-header">
    <h1 class="brand-name">商品名®</h1>
    <p class="generic-name">一般名</p>
</div>

<!-- 薬効分類 -->
<div class="drug-classification">
    <span class="drug-class" data-category="[薬効群]">
        <i>💊</i>
        薬効分類名
    </span>
    <span class="generation">第○世代</span>
</div>

<!-- 適応症 -->
<div class="indications">
    <h3>主な適応症</h3>
    <ul class="indications__list">
        <li>適応症1</li>
        <li>適応症2</li>
    </ul>
</div>

<!-- 30秒サマリー -->
<section class="quick-summary level-1-content">
    <div class="container">
        <h2>⚡ 30秒でわかる[薬剤名]</h2>
        <div class="impact-grid">
            <div class="impact-item">
                <h4>タイトル</h4>
                <p>内容</p>
            </div>
        </div>
    </div>
</section>

<!-- FAQ -->
<div class="faq-note">
    <p>💡 <strong>ポイント</strong>：説明文</p>
</div>

<!-- 処方データ -->
<div class="prescribing-data">
    <div class="design-spec">
Rp) 処方内容
    </div>
</div>

<!-- 併用薬 -->
<div class="combination-drugs">
    <h4>一緒に処方される薬TOP3</h4>
    <ol class="combination-drugs__list">
        <li>薬剤1</li>
    </ol>
</div>

<!-- 専門家視点（必要に応じて） -->
<div class="specialist-perspective">
    <div class="quote-box">
        <!-- 内容 -->
    </div>
</div>
```

### 3.2 クラス付与の実例

#### rosuvastatin（脂質異常症薬）の場合
```html
<body class="drug-detail" data-category="cardiovascular">
    <!-- 循環器系なのでcardiovascular -->
```

#### telmisartan（降圧薬）の場合
```html
<body class="drug-detail" data-category="cardiovascular">
    <!-- 同じく循環器系 -->
```

---

## ✅ Step 4: 検証チェックリスト

### 表示確認
- [ ] レベル1のコンテンツが正しく表示される
- [ ] レベル2、3が初期状態で非表示
- [ ] レベルボタンクリックで切り替わる
- [ ] レイアウトが崩れていない

### モバイル確認
- [ ] スマートフォンサイズで表示確認
- [ ] 横スクロールが発生していない
- [ ] タッチターゲットが44px以上
- [ ] フォントサイズが読みやすい

### クラス数確認
```bash
# クラス数をカウント
grep -o 'class="[^"]*"' docs/drugs-v2/rosuvastatin-refined.html | wc -l
# 目標: 30個以下
```

---

## 🚨 よくある間違いと対策

### 間違い1: クラスの削除漏れ
**症状**: 古いクラスが残っている
**対策**: grepで確認 `grep 'class=' filename.html`

### 間違い2: JavaScriptの移植忘れ
**症状**: レベル切り替えが動作しない
**対策**: metformin-refined.htmlからscriptタグ全体をコピー

### 間違い3: CSS読み込み順序
**症状**: スタイルが適用されない
**対策**: 必ず以下の順序で読み込む
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

### 間違い4: containerクラスの付け忘れ
**症状**: コンテンツが画面幅いっぱいに広がる
**対策**: 各セクション内にcontainerクラスを追加

---

## 📁 完成後の処理

### 最終ファイルの配置
```bash
# drug_versionupからdrugs-v2へ最終配置
# 注意：最終的なファイル名は-refinedで終わる（metforminに合わせる）
cp docs/_internal/drug_versionup/rosuvastatin-clean-v2.html \
   docs/drugs-v2/rosuvastatin-refined.html

cp docs/_internal/drug_versionup/telmisartan-clean-v2.html \
   docs/drugs-v2/telmisartan-refined.html
```

### Git commit & push
```bash
git add docs/drugs-v2/
git add docs/_internal/  # ワークディレクトリも含める

git commit -m "feat: ロスバスタチンとテルミサルタンをclean形式で実装

- drugs/からクリーン化、Ver2化を経て最終配置
- 全クラスを削除後、必要最小限（29個）のみ付与
- 情報欠損なしで全内容を保持したまま再配置
- metformin-refined.htmlをテンプレートとして使用
- レベル1→2→3の論理的配置を実現
- モバイル対応とレベル切り替え機能を実装"

git push
```

---

## 💡 実装のコツ

1. **metformin-refined.htmlを常に参照**
   - 画面を分割して並べて作業
   - クラス名はコピー＆ペーストで確実に

2. **段階的に進める**
   - まずクリーン化を完全に終わらせる
   - 次にコンテンツ配置
   - 最後にクラス付与

3. **完璧を求めない**
   - まず動くものを作る
   - 細かい調整は後から

4. **薬剤の特性を活かす**
   - 基本構造は同じでも、薬剤固有の重要情報は維持
   - 例：ロスバスタチンの「ストロングスタチン」など

---

## 🔴 特例: rosuvastatin/telmisartanの実装手順

すでにVer2化されているこれらの薬剤は、以下の特別な手順で進めます：

### Step 0: 準備作業
```bash
# バックアップ作成
mkdir -p _old_files/backup_$(date +%Y%m%d_%H%M)/

# CSS再構築用ワークディレクトリ作成
mkdir -p docs/_internal/css_rebuild_work20250703/

# 現在のv2-componentsファイルをバックアップ
cp docs/drugs-v2/rosuvastatin-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

cp docs/drugs-v2/telmisartan-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

# ワークディレクトリへコピー
cp docs/drugs-v2/rosuvastatin-v2-components.html \
   docs/_internal/css_cleanup/rosuvastatin-v2.html

cp docs/drugs-v2/telmisartan-v2-components.html \
   docs/_internal/css_cleanup/telmisartan-v2.html
```

### Step 1: クリーン化（古いCSS除去）
```bash
# class属性の削除
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/rosuvastatin-v2.html
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/telmisartan-v2.html

# style属性の削除
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/rosuvastatin-v2.html
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/telmisartan-v2.html

# クリーン化完了後のファイル名変更
mv docs/_internal/css_cleanup/rosuvastatin-v2.html \
   docs/_internal/css_cleanup/rosuvastatin-clean.html

mv docs/_internal/css_cleanup/telmisartan-v2.html \
   docs/_internal/css_cleanup/telmisartan-clean.html
```

### Step 2: CSS再構築ディレクトリへの移動と新CSS付与
```bash
# クリーン化済みファイルをCSS再構築ディレクトリへコピー
cp docs/_internal/css_cleanup/rosuvastatin-clean.html \
   docs/_internal/css_rebuild_work20250703/rosuvastatin-clean.html

cp docs/_internal/css_cleanup/telmisartan-clean.html \
   docs/_internal/css_rebuild_work20250703/telmisartan-clean.html
```

**注意**: すでにコンテンツはVer2配置済みなので、クラス付与のみ実施

#### CSS付与作業（css_rebuild_work20250703内で実施）
1. metformin-refined.htmlを参考に必要な29個のクラスを付与
2. 薬効群に応じたdata-category設定
   - rosuvastatin → `data-category="cardiovascular"`
   - telmisartan → `data-category="cardiovascular"`
3. JavaScriptのコピー（metformin-refined.htmlから）

### Step 3: 最終配置
```bash
# css_rebuild_work20250703からdrugs-v2へ最終配置
cp docs/_internal/css_rebuild_work20250703/rosuvastatin-clean.html \
   docs/drugs-v2/rosuvastatin-refined.html

cp docs/_internal/css_rebuild_work20250703/telmisartan-clean.html \
   docs/drugs-v2/telmisartan-refined.html

# 古いv2-componentsファイルは削除またはアーカイブ
mv docs/drugs-v2/rosuvastatin-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

mv docs/drugs-v2/telmisartan-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/
```

### 特例ルートの要点
- ✅ Ver2化（コンテンツ再配置）はスキップ
- ✅ クリーン化と新CSS付与のみ実施
- ✅ CSS付与作業は専用ディレクトリ`css_rebuild_work20250703`で実施
- ✅ 最終的なファイル名は`-refined.html`
- ✅ 古い`-v2-components.html`は削除/アーカイブ

---

**ガイド作成完了**: 2025-07-03 05:20  
**更新**: 2025-07-03 05:45 (特例ルート追加)
**更新**: 2025-07-03 15:30 (CSS付与作業ディレクトリ変更)