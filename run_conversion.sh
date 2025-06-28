#!/bin/bash

# PharmaDx Content Conversion Runner
# 既存の高品質コンテンツを統一されたWeb体験に変換

echo "🚀 PharmaDx変換開始 - 「埋もれた宝」の最大化"
echo "=================================================="

# 作業ディレクトリの確認
if [ ! -f "convert_pharmadx.js" ]; then
    echo "❌ エラー: convert_pharmadx.js が見つかりません"
    echo "💡 正しいディレクトリにいることを確認してください"
    exit 1
fi

if [ ! -f "config.json" ]; then
    echo "❌ エラー: config.json が見つかりません"
    exit 1
fi

# Node.js の確認
if ! command -v node &> /dev/null; then
    echo "❌ エラー: Node.js がインストールされていません"
    echo "💡 Node.js をインストールしてから再実行してください"
    exit 1
fi

# 必要なパッケージの確認とインストール
echo "📦 依存関係の確認..."
if [ ! -d "node_modules" ]; then
    echo "📥 npm パッケージをインストール中..."
    npm init -y > /dev/null 2>&1
    npm install marked > /dev/null 2>&1
    echo "✅ パッケージインストール完了"
fi

# 出力ディレクトリの準備
echo "📁 出力ディレクトリ準備中..."
mkdir -p website/generated
mkdir -p website/generated/drugs
mkdir -p website/generated/groups  
mkdir -p website/generated/stories
mkdir -p website/generated/css
mkdir -p website/generated/js
mkdir -p website/generated/data

# 既存ファイルのバックアップ
if [ -d "website/generated" ] && [ "$(ls -A website/generated)" ]; then
    backup_dir="website/backup_$(date +%Y%m%d_%H%M%S)"
    echo "💾 既存ファイルを ${backup_dir} にバックアップ..."
    cp -r website/generated "$backup_dir"
fi

# 変換実行
echo "🔄 コンテンツ変換実行中..."
echo "   Phase A: 即活用15薬剤（品質保持+視覚化強化）"
echo "   Phase B: 要拡充3薬剤（ARBモデル準拠）"  
echo "   Phase C: 新規2薬剤（最高品質基準）"
echo ""

# メイン変換スクリプト実行
node convert_pharmadx.js

# 変換結果の確認
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 変換完了！"
    echo "=================================================="
    
    # 生成ファイル数のカウント
    drug_files=$(find website/generated/drugs -name "*.html" 2>/dev/null | wc -l)
    group_files=$(find website/generated/groups -name "*.html" 2>/dev/null | wc -l)
    total_files=$(find website/generated -name "*.html" 2>/dev/null | wc -l)
    
    echo "📊 生成統計:"
    echo "   個別薬剤ページ: ${drug_files}ファイル"
    echo "   薬効群ページ: ${group_files}ファイル"  
    echo "   総HTMLファイル: ${total_files}ファイル"
    echo ""
    
    # ファイルサイズ確認
    total_size=$(du -sh website/generated 2>/dev/null | cut -f1)
    echo "   生成サイズ: ${total_size}"
    echo ""
    
    echo "🌐 プレビュー方法:"
    echo "   cd website/generated"
    echo "   python -m http.server 8000"
    echo "   ブラウザで http://localhost:8000 を開く"
    echo ""
    
    echo "📋 生成ファイル一覧:"
    echo "   メインページ: website/generated/index.html"
    if [ -d "website/generated/drugs" ]; then
        echo "   薬剤ページ: website/generated/drugs/"
        ls website/generated/drugs/*.html 2>/dev/null | head -5 | sed 's/^/     /'
        remaining=$(( $(ls website/generated/drugs/*.html 2>/dev/null | wc -l) - 5 ))
        if [ $remaining -gt 0 ]; then
            echo "     ... 他${remaining}ファイル"
        fi
    fi
    echo ""
    
    echo "✅ PharmaDx Web版が完成しました！"
    echo "   世界最高品質の薬学Webプラットフォームをお楽しみください。"
    
else
    echo ""
    echo "❌ 変換中にエラーが発生しました"
    echo "=================================================="
    echo "🔍 トラブルシューティング:"
    echo "   1. ファイルパスが正しいか確認"
    echo "   2. 必要なMarkdownファイルが存在するか確認"  
    echo "   3. Node.js とパッケージが正しくインストールされているか確認"
    echo ""
    echo "💡 詳細なログは上記を確認してください"
    exit 1
fi