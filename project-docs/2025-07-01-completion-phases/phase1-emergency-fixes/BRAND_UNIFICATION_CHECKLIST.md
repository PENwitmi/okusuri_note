# ブランド統一チェックリスト

**作成日**: 2025-07-01 09:57  
**担当**: Dev1  
**目的**: 「PharmaDex」から「おくすりノート」への完全統一  

## 🎯 なぜブランド統一が重要か

ブランドの不統一は、プロフェッショナリズムの欠如を示す。ユーザーは無意識のうちに、細部の一貫性から信頼性を判断する。

**現状**: 22薬剤ページすべてに「PharmaDex」が残存
**目標**: 100%「おくすりノート」への統一

## 📋 統一対象要素

### 1. HTML要素での出現箇所

#### A. ヘッダー部分
```html
<!-- 現在（誤） -->
<h1><a href="../index.html">PharmaDex</a></h1>
<p class="tagline">薬剤図鑑</p>

<!-- 修正後（正） -->
<h1><a href="../index.html">おくすりノート</a></h1>
<p class="tagline">薬剤図鑑</p>
```

#### B. タイトルタグ
```html
<!-- 現在（誤） -->
<title>テルミサルタン（ミカルディス） | PharmaDex 薬剤図鑑</title>

<!-- 修正後（正） -->
<title>テルミサルタン（ミカルディス） | おくすりノート</title>
```

#### C. メタ情報
```html
<!-- 現在（誤） -->
<meta property="og:site_name" content="PharmaDex">

<!-- 修正後（正） -->
<meta property="og:site_name" content="おくすりノート">
```

### 2. ファイル別チェックリスト

#### 薬剤ページ（22ファイル）
- [ ] docs/drugs/telmisartan.html
- [ ] docs/drugs/losartan.html
- [ ] docs/drugs/candesartan.html
- [ ] docs/drugs/spironolactone.html
- [ ] docs/drugs/empagliflozin.html
- [ ] docs/drugs/rosuvastatin.html
- [ ] docs/drugs/omeprazole.html
- [ ] docs/drugs/metformin.html
- [ ] docs/drugs/escitalopram.html
- [ ] docs/drugs/sertraline.html
- [ ] docs/drugs/dapagliflozin.html
- [ ] docs/drugs/vancomycin.html
- [ ] docs/drugs/warfarin.html
- [ ] docs/drugs/digoxin.html
- [ ] docs/drugs/furosemide.html
- [ ] docs/drugs/perindopril.html
- [ ] docs/drugs/enalapril.html
- [ ] docs/drugs/bisoprolol.html
- [ ] docs/drugs/atorvastatin.html
- [ ] docs/drugs/lansoprazole.html
- [ ] docs/drugs/esomeprazole.html
- [ ] docs/drugs/carvedilol.html

#### カテゴリページ（7ファイル）
- [ ] docs/categories/gastrointestinal.html
- [ ] docs/categories/lipid.html
- [ ] docs/categories/psychotropic.html
- [ ] docs/categories/diabetes.html
- [ ] docs/categories/diuretic.html
- [ ] docs/categories/others.html
- [ ] docs/cardiovascular-orchestra.html

#### その他のページ
- [ ] docs/index.html（確認済みだが再確認）
- [ ] docs/404.html（新規作成時に注意）

### 3. 修正箇所詳細マッピング

| 要素 | 現在の表記 | 正しい表記 | 出現数（推定） |
|------|-----------|-----------|---------------|
| ロゴテキスト | PharmaDex | おくすりノート | 29箇所 |
| タイトルタグ | PharmaDex 薬剤図鑑 | おくすりノート | 29箇所 |
| OGPサイト名 | PharmaDex | おくすりノート | 29箇所 |
| フッター部分 | PharmaDex | おくすりノート | index.html（593行目）|
| 本文中の言及 | PharmaDex | おくすりノート | 数箇所 |

## 🛠️ 実装手順

### Step 1: 現状確認（5分）
```bash
# PharmaDex出現箇所の確認
grep -r "PharmaDex" docs/ --include="*.html" | grep -v "_archive" > pharmadex_occurrences.txt

# ファイル別カウント
grep -r "PharmaDex" docs/ --include="*.html" -c | grep -v ":0$"
```

### Step 2: バックアップ作成（5分）
```bash
# 安全のためのバックアップ
mkdir -p _old_files/backup_20250701_1000
cp -r docs/drugs _old_files/backup_20250701_1000/
cp -r docs/categories _old_files/backup_20250701_1000/
```

### Step 3: 一括置換（10分）
```bash
# 薬剤ページの一括置換
for file in docs/drugs/*.html; do
    sed -i.pharmadex_bak 's/PharmaDex/おくすりノート/g' "$file"
done

# カテゴリページの一括置換
for file in docs/categories/*.html docs/cardiovascular-orchestra.html; do
    sed -i.pharmadex_bak 's/PharmaDex/おくすりノート/g' "$file"
done

# index.htmlも含める（特にフッター部分）
sed -i.pharmadex_bak 's/PharmaDex/おくすりノート/g' docs/index.html
```

### Step 4: 確認作業（10分）
```bash
# 置換結果の確認
grep -r "PharmaDex" docs/ --include="*.html" | grep -v "_archive"

# 正しく置換されたか確認
grep -r "おくすりノート" docs/drugs/telmisartan.html
```

### Step 5: 副作用チェック（5分）
```bash
# 意図しない置換がないか確認
diff docs/drugs/telmisartan.html docs/drugs/telmisartan.html.pharmadex_bak

# CSSクラス名やIDに影響がないか確認
grep -r "pharma" docs/ --include="*.html" -i
```

## ⚠️ 注意事項

### 置換時の注意点
1. **大文字小文字の扱い**
   - PharmaDex → おくすりノート
   - pharmadex → okusuri_note（URLやクラス名の場合）

2. **部分一致の回避**
   ```bash
   # 危険な置換
   sed 's/Pharma/おくすり/g'  # PharmacyもPharmacologyも変わってしまう
   
   # 安全な置換
   sed 's/PharmaDex/おくすりノート/g'  # 完全一致のみ
   ```

3. **文脈の確認**
   - 英語文脈では「OkusuriNote」も検討
   - 技術的な文脈では変更不要な場合も

## 📊 品質確認チェックリスト

### 機能確認
- [ ] すべてのリンクが正常に動作する
- [ ] CSSが正しく適用されている
- [ ] JavaScriptエラーが発生していない

### 表示確認
- [ ] ロゴが正しく表示されている
- [ ] タイトルバーの表示が正しい
- [ ] OGP画像のプレビューが正しい

### 一貫性確認
- [ ] すべてのページで統一されている
- [ ] 英語版表記も統一されている
- [ ] 関連ドキュメントも更新されている

## 🎯 完了基準

### 定量的基準
```bash
# これらのコマンドの結果が0であること
grep -r "PharmaDex" docs/ --include="*.html" | grep -v "_archive" | wc -l
# → 0

# おくすりノートの出現数が適切であること
grep -r "おくすりノート" docs/ --include="*.html" | wc -l
# → 29以上
```

### 定性的基準
- プロフェッショナルな印象
- ブランドの一貫性
- ユーザーの混乱がない

## 🚀 実行コマンドまとめ

```bash
# Dev1はこれをコピー&ペーストして実行

# 1. 作業ディレクトリへ移動
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note

# 2. 現状確認
echo "=== PharmaDex出現箇所 ==="
grep -r "PharmaDex" docs/ --include="*.html" -c | grep -v ":0$" | head -10

# 3. バックアップ
echo "=== バックアップ作成 ==="
mkdir -p _old_files/backup_20250701_brand_unification
cp -r docs/drugs _old_files/backup_20250701_brand_unification/
cp -r docs/categories _old_files/backup_20250701_brand_unification/

# 4. 一括置換
echo "=== 一括置換実行 ==="
# 薬剤ページとカテゴリページ
for file in docs/drugs/*.html docs/categories/*.html docs/cardiovascular-orchestra.html; do
    if [ -f "$file" ]; then
        sed -i.bak 's/PharmaDex/おくすりノート/g' "$file"
        echo "Updated: $file"
    fi
done

# index.htmlも忘れずに
if [ -f "docs/index.html" ]; then
    sed -i.bak 's/PharmaDex/おくすりノート/g' "docs/index.html"
    echo "Updated: docs/index.html"
fi

# 5. 結果確認
echo "=== 置換結果確認 ==="
echo "PharmaDex残存: $(grep -r "PharmaDex" docs/ --include="*.html" | grep -v -e "_archive" -e ".bak" | wc -l)件"
echo "おくすりノート: $(grep -r "おくすりノート" docs/ --include="*.html" | wc -l)件"

# 6. クリーンアップ（確認後）
# find docs -name "*.bak" -delete
```

## 📝 完了後の報告テンプレート

```
【ブランド統一完了報告】

実施時刻: 2025-07-01 XX:XX
実施者: Dev1

実施内容:
- PharmaDex → おくすりノート 置換
- 対象: 29ファイル
- 置換箇所: XXX箇所

結果:
- PharmaDex残存: 0件
- エラー: なし
- 副作用: なし

確認:
- [ ] 全ページ表示確認
- [ ] リンク動作確認
- [ ] バックアップ作成済み

次のアクション:
- 404ページの作成
- その他のリンク修正
```

---

**関連ドキュメント**:
- [PHASE1_DETAILED_PLAN.md](./PHASE1_DETAILED_PLAN.md) - Phase 1全体計画
- [LINK_RESOLUTION_STRATEGY.md](./LINK_RESOLUTION_STRATEGY.md) - リンク解決戦略