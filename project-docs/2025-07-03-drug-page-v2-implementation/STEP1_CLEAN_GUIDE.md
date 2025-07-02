# Step 1: HTMLクリーン化詳細ガイド

**作成日時**: 2025-07-03 05:57  
**作成者**: CEO  
**所要時間**: 約20分/薬剤  
**目的**: class属性とstyle属性を完全に削除したクリーンなHTMLを作成

---

## 🎯 このステップのゴール

元のHTMLから：
- ✅ すべての`class="..."`を削除
- ✅ すべての`style="..."`を削除
- ✅ HTML構造はそのまま維持
- ✅ id属性やdata属性は維持

---

## 📝 事前準備

### 1. 作業ディレクトリの確認
```bash
# 現在地を確認
pwd
# 結果が以下でない場合は移動
# /Users/nishimototakashi/claude code/ai-team/code/okusuri_note

# 正しいディレクトリに移動
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note
```

### 2. ワークディレクトリの作成（初回のみ）
```bash
# ディレクトリが存在しない場合のみ実行
mkdir -p docs/_internal/css_cleanup/
```

---

## 🔧 実行手順（薬剤名を atorvastatin とした例）

### Step 1-1: バックアップとコピー

```bash
# バックアップディレクトリ作成
mkdir -p _old_files/backup_$(date +%Y%m%d_%H%M)/

# 元ファイルをバックアップ
cp docs/drugs/atorvastatin.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

# ワークディレクトリにコピー
cp docs/drugs/atorvastatin.html \
   docs/_internal/css_cleanup/atorvastatin.html
```

### Step 1-2: class属性の削除

#### 方法A: sedコマンド（推奨・自動）
```bash
# Macの場合
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/atorvastatin.html

# Linuxの場合
sed -i 's/ class="[^"]*"//g' docs/_internal/css_cleanup/atorvastatin.html
```

#### 方法B: VSCodeで手動削除
1. ファイルを開く: `docs/_internal/css_cleanup/atorvastatin.html`
2. 検索・置換を開く（Cmd+H または Ctrl+H）
3. 正規表現モードをON（.*ボタンをクリック）
4. 検索: ` class="[^"]*"`
5. 置換: （空欄）
6. すべて置換

### Step 1-3: style属性の削除

#### 方法A: sedコマンド（推奨・自動）
```bash
# Macの場合
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/atorvastatin.html

# Linuxの場合
sed -i 's/ style="[^"]*"//g' docs/_internal/css_cleanup/atorvastatin.html
```

#### 方法B: VSCodeで手動削除
1. 検索: ` style="[^"]*"`
2. 置換: （空欄）
3. すべて置換

### Step 1-4: ファイル名変更

```bash
# -clean.html に名前変更
mv docs/_internal/css_cleanup/atorvastatin.html \
   docs/_internal/css_cleanup/atorvastatin-clean.html
```

---

## ✅ 確認チェックリスト

### 自動確認コマンド

```bash
# class属性の残存確認（0が表示されればOK）
grep -c 'class=' docs/_internal/css_cleanup/atorvastatin-clean.html

# style属性の残存確認（0が表示されればOK）
grep -c 'style=' docs/_internal/css_cleanup/atorvastatin-clean.html

# ファイルサイズ確認（元より小さくなっているはず）
ls -lh docs/_internal/css_cleanup/atorvastatin-clean.html
```

### 手動確認項目

- [ ] ファイル名が `-clean.html` で終わっている
- [ ] HTMLの基本構造（head、body）が維持されている
- [ ] id属性は残っている（削除していない）
- [ ] data-属性は残っている（削除していない）
- [ ] テキスト内容に変更がない

---

## 🔍 ビフォー・アフター例

### Before（クリーン化前）
```html
<section class="drug-info primary-section" style="margin-top: 20px;">
    <div class="container wide-container">
        <h2 class="section-title" id="basic-info">基本情報</h2>
        <p class="drug-description">アトルバスタチンは...</p>
    </div>
</section>
```

### After（クリーン化後）
```html
<section>
    <div>
        <h2 id="basic-info">基本情報</h2>
        <p>アトルバスタチンは...</p>
    </div>
</section>
```

**ポイント**: 
- class属性がすべて削除されている
- style属性が削除されている
- id属性は維持されている
- HTML構造は変わっていない

---

## ⚠️ よくあるミスと対処法

### ミス1: id属性も削除してしまった
**症状**: `id="..."` が消えている  
**対処**: バックアップから復元してやり直し

### ミス2: classという文字列まで削除
**症状**: テキスト内の「class」という単語が消える  
**対処**: ` class=`（前にスペース）で検索すれば防げる

### ミス3: 一部のclass属性が残っている
**症状**: grepで1以上の数値が出る  
**対処**: 手動で残りを検索・削除

### ミス4: HTMLタグが壊れた
**症状**: `<div>` が `<div` になっているなど  
**対処**: バックアップから復元

---

## 💡 効率化のコツ

### 複数ファイルの一括処理（上級者向け）
```bash
# 複数の薬剤を一度に処理する例
for drug in atorvastatin bisoprolol candesartan; do
    echo "Processing $drug..."
    cp docs/drugs/$drug.html docs/_internal/css_cleanup/
    sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/$drug.html
    sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/$drug.html
    mv docs/_internal/css_cleanup/$drug.html \
       docs/_internal/css_cleanup/$drug-clean.html
    echo "$drug completed!"
done
```

---

## 📊 完了確認

### 最終チェック
```bash
# 作成したファイルの一覧
ls -la docs/_internal/css_cleanup/*-clean.html

# サイズが減っていることを確認
# 元ファイルとの比較
ls -lh docs/drugs/atorvastatin.html
ls -lh docs/_internal/css_cleanup/atorvastatin-clean.html
```

### 次のステップへ
クリーン化が完了したら、`./STEP2_VERSION2_GUIDE.md` を参照してVer2化を開始してください。

---

## 🆘 困ったときは

- sedコマンドがエラーになる → 方法Bの手動削除を使用
- ファイルが見つからない → pwdで現在地を確認
- 間違えて削除した → バックアップから復元
- その他の問題 → 【質問】でManagerに報告

---

**参考ドキュメント**: 
- 全体の流れ: `./IMPLEMENTATION_GUIDE.md#step-1-htmlクリーン化`
- なぜ必要か: `./PROJECT_UNDERSTANDING.md#作業1-クリーン化`

---

**ガイド作成完了**: 2025-07-03 05:57