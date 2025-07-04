# Developer品質確認チェックリスト

**作成日時**: 2025-07-03 06:10  
**作成者**: CEO  
**用途**: 各薬剤の作業完了時の品質確認  
**重要度**: ⭐⭐⭐⭐⭐（必須実施）

---

## 📋 使用方法

1. 各薬剤のStep 1、Step 2完了時に必ず実施
2. すべての項目が ✅ になったら完了報告
3. ❌ が1つでもある場合は修正してから再確認
4. 不明な点は【質問】でManagerに確認

---

## ✅ Step 1: クリーン化チェックリスト

### 1-1. ファイル確認
- [ ] 元ファイルのバックアップが `_old_files/backup_YYYYMMDD_HHMM/` に存在する
- [ ] 作業ファイルが `docs/_internal/css_cleanup/` に存在する
- [ ] ファイル名が `-clean.html` で終わっている

### 1-2. 自動確認コマンド実行
```bash
# 薬剤名を置き換えて実行（例: atorvastatin）
DRUG_NAME="atorvastatin"

# class属性の確認（結果が 0 でなければNG）
echo "class属性の数: $(grep -c 'class=' docs/_internal/css_cleanup/${DRUG_NAME}-clean.html)"

# style属性の確認（結果が 0 でなければNG）
echo "style属性の数: $(grep -c 'style=' docs/_internal/css_cleanup/${DRUG_NAME}-clean.html)"

# ファイルサイズ確認（元より小さくなっているはず）
echo "元ファイル: $(ls -lh docs/drugs/${DRUG_NAME}.html | awk '{print $5}')"
echo "クリーンファイル: $(ls -lh docs/_internal/css_cleanup/${DRUG_NAME}-clean.html | awk '{print $5}')"
```

### 1-3. 手動確認項目
- [ ] **class属性が0個**（上記コマンドで確認）
- [ ] **style属性が0個**（上記コマンドで確認）
- [ ] id属性は残っている（`id="..."` が維持されている）
- [ ] data-属性は残っている（`data-..."` が維持されている）
- [ ] HTMLの基本構造（`<html>`, `<head>`, `<body>`）が維持されている
- [ ] テキスト内容に変更がない（情報欠損なし）

### 1-4. エラー対処
❌ **class/style属性が残っている場合**:
```bash
# 再度実行（Mac）
sed -i '' 's/ class="[^"]*"//g' docs/_internal/css_cleanup/${DRUG_NAME}-clean.html
sed -i '' 's/ style="[^"]*"//g' docs/_internal/css_cleanup/${DRUG_NAME}-clean.html
```

---

## ✅ Step 2: Ver2化チェックリスト

### 2-1. ファイル確認
- [ ] Step 1のクリーンファイルが `drug_versionup/` にコピーされている
- [ ] ファイル名が `-clean-v2.html` で終わっている
- [ ] ファイルが `docs/_internal/drug_versionup/` に存在する

### 2-2. 構造確認コマンド
```bash
# 薬剤名を置き換えて実行
DRUG_NAME="atorvastatin"
FILE_PATH="docs/_internal/drug_versionup/${DRUG_NAME}-clean-v2.html"

# レベル構造の確認（すべて1以上の値が出るはず）
echo "レベル1セクション: $(grep -c 'レベル1' $FILE_PATH)"
echo "レベル2セクション: $(grep -c 'レベル2' $FILE_PATH)"
echo "レベル3セクション: $(grep -c 'レベル3' $FILE_PATH)"

# レベルボタンの確認（3つあるはず）
echo "レベルボタン数: $(grep -c 'data-level=' $FILE_PATH)"

# JavaScriptの確認（1以上の値が出るはず）
echo "JavaScript存在確認: $(grep -c 'addEventListener' $FILE_PATH)"
```

### 2-3. 必須要素チェック
- [ ] **レベルインジケーター**（3つのボタン）が存在する
- [ ] **レベル1セクション** `<section>` が存在する
- [ ] **レベル2セクション** `<section>` が存在する
- [ ] **レベル3セクション** `<section>` が存在する
- [ ] **JavaScript**が `</body>` の直前に追加されている

### 2-4. コンテンツ配置確認
#### レベル1に含まれているか
- [ ] 商品名・一般名
- [ ] 薬効分類
- [ ] 主な適応症
- [ ] 基本的な用法用量
- [ ] 主な副作用
- [ ] 禁忌事項

#### レベル2に含まれているか
- [ ] 詳細な作用機序
- [ ] 相互作用情報
- [ ] 特殊な患者への投与
- [ ] モニタリング項目
- [ ] 服薬指導のポイント

#### レベル3に含まれているか
- [ ] レベル1、2以外のすべての内容
- [ ] 臨床研究データ
- [ ] ガイドラインでの位置づけ
- [ ] その他の詳細情報

### 2-5. 情報保持確認
- [ ] **元のHTMLのすべての内容が含まれている**（最重要）
- [ ] 情報の削除・省略がない
- [ ] 重複があってもそのまま残している
- [ ] 古い表現もそのまま維持している

### 2-6. ブラウザ動作確認
```bash
# ブラウザで開いて確認
open docs/_internal/drug_versionup/${DRUG_NAME}-clean-v2.html
```

- [ ] レベル1ボタンクリック → レベル1の内容のみ表示
- [ ] レベル2ボタンクリック → レベル2の内容のみ表示
- [ ] レベル3ボタンクリック → レベル3の内容のみ表示
- [ ] 初期表示はレベル1

---

## 📊 最終確認コマンド（まとめて実行）

```bash
#!/bin/bash
# check-drug.sh として保存して使用可能

DRUG_NAME=$1
if [ -z "$DRUG_NAME" ]; then
    echo "使用法: ./check-drug.sh [薬剤名]"
    exit 1
fi

echo "=== ${DRUG_NAME} の品質確認 ==="
echo ""

# Step 1 確認
echo "【Step 1: クリーン化の確認】"
CLEAN_FILE="docs/_internal/css_cleanup/${DRUG_NAME}-clean.html"
if [ -f "$CLEAN_FILE" ]; then
    echo "✅ クリーンファイル存在"
    echo "  - class属性: $(grep -c 'class=' $CLEAN_FILE)個（0個であるべき）"
    echo "  - style属性: $(grep -c 'style=' $CLEAN_FILE)個（0個であるべき）"
else
    echo "❌ クリーンファイルが見つかりません"
fi
echo ""

# Step 2 確認
echo "【Step 2: Ver2化の確認】"
V2_FILE="docs/_internal/drug_versionup/${DRUG_NAME}-clean-v2.html"
if [ -f "$V2_FILE" ]; then
    echo "✅ Ver2ファイル存在"
    echo "  - レベル1: $(grep -c 'レベル1' $V2_FILE)箇所"
    echo "  - レベル2: $(grep -c 'レベル2' $V2_FILE)箇所"
    echo "  - レベル3: $(grep -c 'レベル3' $V2_FILE)箇所"
    echo "  - レベルボタン: $(grep -c 'data-level=' $V2_FILE)個（3個であるべき）"
    echo "  - JavaScript: $(grep -c 'addEventListener' $V2_FILE)箇所"
else
    echo "❌ Ver2ファイルが見つかりません"
fi
```

---

## 🎯 完了報告テンプレート

すべてのチェックが ✅ になったら、以下のフォーマットで報告：

```
【完了報告】
薬剤名: [薬剤名]

Step 1 クリーン化: ✅ 完了
- class属性: 0個
- style属性: 0個
- ファイル: docs/_internal/css_cleanup/[薬剤名]-clean.html

Step 2 Ver2化: ✅ 完了
- レベル1/2/3構造: 確認済み
- 情報欠損: なし
- JavaScript: 動作確認済み
- ファイル: docs/_internal/drug_versionup/[薬剤名]-clean-v2.html

チェックリスト: 全項目 ✅
```

---

## 🚨 NG判定基準

以下の場合は**必ず修正**してから再確認：

### 即時修正が必要
1. **class/style属性が1つでも残っている**
2. **情報が削除されている**（どんな小さな情報でも）
3. **レベル1/2/3の構造がない**
4. **JavaScriptが追加されていない**
5. **ファイル名が正しくない**

### Managerに相談が必要
1. HTMLタグが壊れている
2. 文字化けが発生している
3. どのレベルに配置すべきか判断できない内容がある
4. 元ファイルに明らかな問題がある

---

## 💡 トラブルシューティング

### よくある問題と解決法

**Q: class属性が消えない**
```bash
# 手動で確認
grep 'class=' ファイル名 | head -5
# 特殊な記述があれば手動削除
```

**Q: レベル分けで迷う**
- 基本ルール：迷ったらレベル3へ
- 削除は絶対NG

**Q: JavaScriptが動かない**
- metformin-refined.htmlから完全コピー
- `</body>`の直前に配置

**Q: ファイルサイズが異常に小さい**
- 情報欠損の可能性大
- 元ファイルと見比べて確認

---

## 📚 参考情報

- **完成例**: `/docs/drugs-v2/metformin-refined.html`
- **作業ガイド**: `./STEP1_CLEAN_GUIDE.md`, `./STEP2_VERSION2_GUIDE.md`
- **全体概要**: `./PROJECT_UNDERSTANDING.md`

---

**チェックリスト作成完了**: 2025-07-03 06:10