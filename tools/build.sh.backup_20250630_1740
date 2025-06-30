#!/bin/bash

# PharmaDx Build Script - Phase 2 統合ビルドプロセス
# コンテンツ変換とWebサイト生成の統一スクリプト

set -e  # エラー時即座に終了

echo "🚀 PharmaDx統合ビルド開始"
echo "=================================================="
echo "新構造: content/ → docs/ フロー"
echo ""

# 作業ディレクトリの確認
if [ ! -f "convert_pharmadx.js" ]; then
    echo "❌ エラー: tools/ディレクトリで実行してください"
    echo "💡 正しいコマンド: cd tools && ./build.sh"
    exit 1
fi

# 現在の構造確認
echo "📁 現在のディレクトリ構造確認..."
if [ ! -d "../content" ]; then
    echo "❌ エラー: content/ディレクトリが見つかりません"
    echo "💡 Phase 2移行が完了していることを確認してください"
    exit 1
fi

if [ ! -d "../docs" ]; then
    echo "❌ エラー: docs/ディレクトリが見つかりません"
    echo "💡 GitHub Pages用docs/ディレクトリが必要です"
    exit 1
fi

echo "✅ 新ディレクトリ構造確認完了"
echo ""

# Phase 1: コンテンツ統計
echo "📊 Phase 1: コンテンツ統計生成..."
stories_count=$(find ../content/stories -name "*.md" 2>/dev/null | wc -l || echo "0")
drug_db_count=$(find ../content/drug_database -name "*.md" 2>/dev/null | wc -l || echo "0")
study_tools_count=$(find ../content/study_tools -name "*.html" 2>/dev/null | wc -l || echo "0")

echo "   ストーリー: ${stories_count}ファイル"
echo "   薬効群モデル: ${drug_db_count}ファイル"
echo "   学習ツール: ${study_tools_count}ファイル"
echo ""

# Phase 2: 前処理とバックアップ
echo "🔄 Phase 2: 前処理とバックアップ..."

# 既存生成ファイルのバックアップ
if [ -d "../docs/generated" ] && [ "$(ls -A ../docs/generated 2>/dev/null)" ]; then
    backup_dir="../docs/backup_$(date +%Y%m%d_%H%M%S)"
    echo "💾 既存ファイルを ${backup_dir} にバックアップ..."
    cp -r ../docs/generated "$backup_dir"
fi

# 出力ディレクトリの準備
echo "📁 出力ディレクトリ準備..."
mkdir -p ../docs/generated/{drugs,groups,stories,css,js,data}
echo ""

# Phase 3: メインコンテンツ変換
echo "🔄 Phase 3: コンテンツ変換実行..."
echo "   実行スクリプト: convert_pharmadx.js"
echo "   入力: ../content/"
echo "   出力: ../docs/generated/"
echo ""

# 変換実行（既存スクリプト活用）
chmod +x run_conversion.sh
./run_conversion.sh

# 変換結果確認
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Phase 3完了: コンテンツ変換成功"
else
    echo ""
    echo "❌ Phase 3失敗: コンテンツ変換でエラーが発生"
    exit 1
fi

# Phase 4: 統合検証
echo ""
echo "🔍 Phase 4: 統合検証..."

# 生成ファイル数確認
total_html=$(find ../docs/generated -name "*.html" 2>/dev/null | wc -l || echo "0")
total_css=$(find ../docs/generated -name "*.css" 2>/dev/null | wc -l || echo "0")
total_js=$(find ../docs/generated -name "*.js" 2>/dev/null | wc -l || echo "0")

echo "   生成HTML: ${total_html}ファイル"
echo "   CSS: ${total_css}ファイル"
echo "   JavaScript: ${total_js}ファイル"

# 重要ファイルの存在確認
critical_files=("../docs/index.html" "../docs/generated/index.html")
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ ${file}"
    else
        echo "   ⚠️  ${file} - 未生成"
    fi
done
echo ""

# Phase 5: ビルド完了レポート
echo "🎉 PharmaDx統合ビルド完了！"
echo "=================================================="

# 最終統計
total_size=$(du -sh ../docs 2>/dev/null | cut -f1 || echo "計算不可")
echo "📊 最終統計:"
echo "   公開サイトサイズ: ${total_size}"
echo "   変換コンテンツ: content/ → docs/generated/"
echo "   メインサイト: docs/index.html"
echo ""

echo "🌐 確認方法:"
echo "   ローカル確認: cd ../docs && python -m http.server 8000"
echo "   ブラウザ: http://localhost:8000"
echo "   GitHub Pages: https://penwitmi.github.io/pharm_dex"
echo ""

echo "🔧 開発フロー:"
echo "   1. コンテンツ編集: content/内のMarkdown/HTMLファイル"
echo "   2. ビルド実行: cd tools && ./build.sh"
echo "   3. 確認・デプロイ: docs/内の生成ファイル"
echo ""

echo "📋 Phase 2大規模再構築 - 完了"
echo "   ✅ 論理的ディレクトリ構造"
echo "   ✅ 統一ビルドプロセス"
echo "   ✅ 明確な開発フロー"
echo ""

echo "🚀 PharmaDx - Next generation ready!"