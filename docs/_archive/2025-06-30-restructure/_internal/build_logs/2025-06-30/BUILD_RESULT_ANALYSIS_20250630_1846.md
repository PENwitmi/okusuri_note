# ビルド結果分析 - 2025-06-30 18:46

## 現状分析

### ビルド実行結果
- **実行時刻**: 2025-06-30 18:45
- **ビルドステータス**: 成功（エラーなし）
- **処理時間**: 約9秒

### 生成ファイル状況
1. **docs/直下**: 14個のHTMLファイル（薬効群モデル）
   - ACE_inhibitor_evolution_model.html
   - ARB_evolution_model.html
   - PPI_evolution_model.html
   - など

2. **docs/drugs/**: 23個のHTMLファイル（個別薬剤）
   - すべての薬剤ページが生成済み
   - ファイルサイズ: 約2-3KB/ファイル

3. **docs/generated/**: 0個のHTMLファイル
   - 期待された出力先だが、空のまま

## 問題点

### 1. 出力パスの不整合
- **期待**: docs/generated/に出力
- **実際**: docs/直下とdocs/drugs/に出力
- **原因**: convert_pharmadx.jsの出力パス設定が古い構造のまま

### 2. CSSパスの不整合
- **生成されたHTML内のパス**: ../css/style.css
- **実際のCSSの場所**: ../assets/css/style.css
- **影響**: スタイルが適用されない

### 3. 構造改革との矛盾
- 18:38に実施したdocs/構造改革で87ファイルをアーカイブ
- 18:45のビルドで同じ場所に37ファイルが再生成
- generated/ディレクトリが活用されていない

## 対処方針

### 短期対応（即時実施）
1. 生成されたHTMLファイルをdocs/generated/に移動
2. CSSパスの修正

### 中期対応（要検討）
1. convert_pharmadx.jsの出力パス修正
2. config.jsonの出力設定確認
3. ビルドツールの再実行

## コマンド案
```bash
# 1. 生成ファイルの移動
mv docs/*.html docs/generated/  # index.html除く
mv docs/drugs/ docs/generated/

# 2. CSSパス修正（sedコマンドで一括置換）
find docs/generated -name "*.html" -exec sed -i '' 's|href="../css/|href="../assets/css/|g' {} \;
```

作成時刻: 2025-06-30 18:46
作成者: PharmaDx CEO