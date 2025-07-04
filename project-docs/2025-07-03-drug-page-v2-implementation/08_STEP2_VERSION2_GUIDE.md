# Step 2: Ver2化（コンテンツ再配置）詳細ガイド

**作成日時**: 2025-07-03 05:57  
**作成者**: CEO  
**所要時間**: 約30分/薬剤  
**目的**: クリーンHTMLをレベル1→2→3の学習順序に再配置

---

## 🎯 このステップのゴール

- ✅ 薬学生（レベル1）→実習中（レベル2）→研修中（レベル3）の順序に再配置
- ✅ **すべての情報を保持**（情報欠損は絶対NG）
- ✅ metformin-refined.htmlと同じ構造を実現

---

## 📋 事前準備

### 1. 参照ファイルを開く
```bash
# metformin-refined.htmlを別ウィンドウで開いておく
# これが理想的な構造のお手本です
open docs/drugs-v2/metformin-refined.html
```

### 2. 作業ファイルのコピー
```bash
# Step 1で作成したクリーンファイルをコピー
cp docs/_internal/css_cleanup/atorvastatin-clean.html \
   docs/_internal/drug_versionup/atorvastatin-clean.html
```

---

## 🏗️ Ver2の標準構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <!-- 既存のheadタグ内容を維持 -->
    <title>[薬剤名] - 薬剤詳細</title>
    <!-- CSS読み込みは後でManagerが修正 -->
</head>
<body>
    <!-- レベルインジケーター（新規追加） -->
    <div>
        <div>
            <button data-level="1">薬学生</button>
            <button data-level="2">実習中</button>
            <button data-level="3">研修中</button>
        </div>
    </div>

    <!-- レベル1：薬学生向けコンテンツ -->
    <section>
        <!-- 基本情報を配置 -->
    </section>

    <!-- レベル2：実習中向けコンテンツ -->
    <section>
        <!-- 実践的な内容を配置 -->
    </section>

    <!-- レベル3：研修中向けコンテンツ -->
    <section>
        <!-- 上記以外のすべてを配置 -->
    </section>

    <!-- JavaScript（最後に追加） -->
    <script>
        // metformin-refined.htmlからコピー
    </script>
</body>
</html>
```

---

## 📊 コンテンツ振り分け基準

### レベル1（薬学生向け）に配置するもの

| コンテンツ種別 | 具体例 | 見分け方 |
|--------------|--------|----------|
| 基本情報 | 商品名、一般名、薬効分類 | 最初に出てくる薬剤名情報 |
| 適応症 | 主な適応症、効能効果 | 「適応」「効能」という言葉 |
| 基本的な作用 | 簡単な薬理作用 | 「作用機序」の簡潔な説明 |
| 用法用量 | 基本的な飲み方 | 「1日○回」などの記載 |
| 主な副作用 | よくある副作用 | 「副作用」「有害事象」 |
| 禁忌 | 絶対に使ってはいけない場合 | 「禁忌」「使用できない」 |

### レベル2（実習中向け）に配置するもの

| コンテンツ種別 | 具体例 | 見分け方 |
|--------------|--------|----------|
| 詳細な作用機序 | 分子レベルの説明 | 専門用語が多い説明 |
| 相互作用 | 他の薬との飲み合わせ | 「相互作用」「併用注意」 |
| 特殊な患者への投与 | 腎機能低下時など | 「腎機能」「肝機能」への言及 |
| モニタリング | 検査値の確認 | 「検査」「モニタリング」 |
| 服薬指導のポイント | 患者説明の要点 | 「指導」「説明」 |

### レベル3（研修中向け）に配置するもの

**重要**: レベル1、2に含まれない**すべての内容**をここに配置

| コンテンツ種別 | 具体例 |
|--------------|--------|
| 臨床研究データ | 具体的な試験結果、統計データ |
| ガイドラインでの位置づけ | 各種ガイドラインでの推奨 |
| エビデンスレベル | 文献引用、メタアナリシス |
| 薬物動態の詳細 | Cmax、T1/2、AUCなど |
| 開発の経緯 | 歴史的背景 |
| **その他すべて** | 上記以外のすべての情報 |

---

## 🔄 実際の作業手順

### Step 2-1: 基本構造の作成

1. ファイルを開く: `docs/_internal/drug_versionup/atorvastatin-clean.html`

2. body直下に以下を追加：
```html
<!-- レベルインジケーター -->
<div>
    <div>
        <button data-level="1">薬学生</button>
        <button data-level="2">実習中</button>
        <button data-level="3">研修中</button>
    </div>
</div>

<!-- レベル1 -->
<section>
    <h2>レベル1：薬学生向け基本情報</h2>
    <!-- ここに移動 -->
</section>

<!-- レベル2 -->
<section>
    <h2>レベル2：実習中向け実践情報</h2>
    <!-- ここに移動 -->
</section>

<!-- レベル3 -->
<section>
    <h2>レベル3：研修中向け詳細情報</h2>
    <!-- ここに移動 -->
</section>
```

### Step 2-2: コンテンツの移動

**重要な原則**:
1. カット＆ペースト（コピーではない）
2. 元の場所から完全に移動
3. 順序は元の並びを尊重

#### 実例：基本情報の移動
```html
<!-- 移動前：body直下にある -->
<div>
    <h1>クレストール錠</h1>
    <p>ロスバスタチンカルシウム</p>
</div>

<!-- 移動後：レベル1セクション内へ -->
<section>
    <h2>レベル1：薬学生向け基本情報</h2>
    <div>
        <h1>クレストール錠</h1>
        <p>ロスバスタチンカルシウム</p>
    </div>
</section>
```

### Step 2-3: JavaScript の追加

ファイルの最後（`</body>`の直前）に以下を追加：

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
    // レベル切り替え機能
    const levelBtns = document.querySelectorAll('[data-level]');
    const level1Contents = document.querySelectorAll('section:nth-of-type(2)');
    const level2Contents = document.querySelectorAll('section:nth-of-type(3)');
    const level3Contents = document.querySelectorAll('section:nth-of-type(4)');
    
    function showLevel(level) {
        // すべて非表示
        level1Contents.forEach(el => el.style.display = 'none');
        level2Contents.forEach(el => el.style.display = 'none');
        level3Contents.forEach(el => el.style.display = 'none');
        
        // 選択レベルのみ表示
        if (level === '1') level1Contents.forEach(el => el.style.display = 'block');
        if (level === '2') level2Contents.forEach(el => el.style.display = 'block');
        if (level === '3') level3Contents.forEach(el => el.style.display = 'block');
        
        // ボタンのアクティブ状態
        levelBtns.forEach(btn => {
            if (btn.dataset.level === level) {
                btn.style.background = '#007bff';
                btn.style.color = 'white';
            } else {
                btn.style.background = '#f0f0f0';
                btn.style.color = '#333';
            }
        });
    }
    
    // ボタンクリックイベント
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => showLevel(btn.dataset.level));
    });
    
    // 初期表示（レベル1）
    showLevel('1');
});
</script>
```

### Step 2-4: ファイル名変更

```bash
# -clean-v2.html に変更
mv docs/_internal/drug_versionup/atorvastatin-clean.html \
   docs/_internal/drug_versionup/atorvastatin-clean-v2.html
```

---

## ✅ 確認チェックリスト

### 構造確認
- [ ] レベルインジケーター（3つのボタン）がある
- [ ] レベル1のセクションがある
- [ ] レベル2のセクションがある
- [ ] レベル3のセクションがある
- [ ] JavaScriptが追加されている

### コンテンツ確認
- [ ] 元のHTMLのすべての内容が含まれている（削除なし）
- [ ] 基本情報がレベル1にある
- [ ] 実践的な内容がレベル2にある
- [ ] 残りすべてがレベル3にある

### 動作確認（ブラウザで開いて）
- [ ] レベル1ボタンをクリック → レベル1の内容のみ表示
- [ ] レベル2ボタンをクリック → レベル2の内容のみ表示
- [ ] レベル3ボタンをクリック → レベル3の内容のみ表示

---

## ⚠️ 絶対にやってはいけないこと

### ❌ 情報の削除
```html
<!-- ダメな例：古いからといって削除 -->
<!-- 削除された：この薬剤は1990年に開発され... -->
```

### ❌ 内容の要約・編集
```html
<!-- ダメな例：まとめて短くする -->
<!-- 元：副作用として悪心、嘔吐、下痢、便秘、腹痛... -->
<!-- 変更後：副作用として消化器症状 -->
```

### ❌ 重複の削除
```html
<!-- ダメな例：同じ内容だから片方削除 -->
<!-- 2箇所に「1日1回投与」があっても両方残す -->
```

---

## 💡 作業のコツ

### 1. 段階的に移動
1. まずレベル1に該当するものをすべて移動
2. 次にレベル2に該当するものを移動
3. 最後に残ったものをすべてレベル3へ

### 2. 元の順序を維持
- 適応症A → 適応症B → 適応症C の順序なら
- レベル1でも同じ順序で配置

### 3. 迷ったらレベル3
- どのレベルか判断できない → レベル3へ
- 専門的すぎる → レベル3へ
- よくわからない → レベル3へ

---

## 📝 完了確認コマンド

```bash
# ファイルサイズ（元のクリーンファイルより少し大きい）
ls -lh docs/_internal/drug_versionup/atorvastatin-clean-v2.html

# 構造確認（レベル1、2、3が含まれているか）
grep -E "(レベル1|レベル2|レベル3|data-level)" \
     docs/_internal/drug_versionup/atorvastatin-clean-v2.html

# JavaScript確認
grep -c "addEventListener" \
     docs/_internal/drug_versionup/atorvastatin-clean-v2.html
```

---

## 🏁 次のステップ

Ver2化が完了したら：
1. `./DEVELOPER_CHECKLIST.md` で最終確認
2. Managerに完了報告
3. ManagerがCSS付与と最終配置を実施

---

## 🆘 よくある質問

**Q: このコンテンツがどのレベルかわからない**  
A: レベル3に配置してください。削除は厳禁です。

**Q: 同じ情報が複数箇所にある**  
A: すべて残してください。重複でも削除禁止。

**Q: HTMLの構造が複雑で移動が難しい**  
A: 大きなブロックごと移動してOK。細かく分解不要。

**Q: 元のファイルが巨大で作業が大変**  
A: 1時間以上かかる場合は、一旦保存して休憩を。

---

**参考ドキュメント**:
- テンプレート構造: `./TEMPLATE_ANALYSIS.md`
- 全体の流れ: `./IMPLEMENTATION_GUIDE.md#step-2-コンテンツ再配置`
- metformin-refined.htmlの実例: `/docs/drugs-v2/metformin-refined.html`

---

**ガイド作成完了**: 2025-07-03 05:57