#!/bin/bash

# ホームナビゲーションボタン追加スクリプト
# 作成日: 2025-07-12
# 用途: 薬剤HTMLページにトップページへ戻るボタンを追加

# 設定
BASE_DIR="/Users/nishimototakashi/claude code/ai-team/code/okusuri_note"
LOG_FILE="$BASE_DIR/project-docs/2025-07-12-home-navigation-button/update-log.txt"
BACKUP_DIR="$BASE_DIR/project-docs/2025-07-12-home-navigation-button/backups"

# バックアップディレクトリ作成
mkdir -p "$BACKUP_DIR"

# ログ開始
echo "=== ホームボタン追加スクリプト実行開始: $(date) ===" > "$LOG_FILE"

# 関数: ファイル更新
update_file() {
    local file_path=$1
    local file_name=$(basename "$file_path")
    
    echo "処理中: $file_name" | tee -a "$LOG_FILE"
    
    # バックアップ作成
    cp "$file_path" "$BACKUP_DIR/$file_name.backup"
    
    # PCサイドバーへの追加
    # 既にホームナビゲーションセクションがあるかチェック
    if grep -q "Home Navigation Section" "$file_path"; then
        echo "  スキップ: 既にホームナビゲーションが存在します" | tee -a "$LOG_FILE"
        return
    fi
    
    # サイドバーへの追加
    perl -i -pe '
    if (/^\s*<button class="level-btn" data-level="3">研修中<\/button>\s*$/) {
        $found_level = 1;
    }
    if ($found_level && /^\s*<\/div>\s*$/) {
        $found_div1 = 1;
    }
    if ($found_div1 && /^\s*<\/div>\s*$/) {
        $found_div2 = 1;
    }
    if ($found_div2 && /^\s*$/) {
        print;
        print "            <!-- Home Navigation Section -->\n";
        print "            <div class=\"sidebar-section\">\n";
        print "                <h3 class=\"sidebar-title\">🏠 ナビゲーション</h3>\n";
        print "                <div class=\"sidebar-links\">\n";
        print "                    <a href=\"../index.html\" class=\"sidebar-link\">\n";
        print "                        🏠 トップページへ戻る\n";
        print "                        <span class=\"category-desc\">薬剤一覧・特集ページ</span>\n";
        print "                    </a>\n";
        print "                </div>\n";
        print "            </div>\n";
        print "            \n";
        $found_level = 0;
        $found_div1 = 0;
        $found_div2 = 0;
        $_ = "";
    }
    ' "$file_path"
    
    # bottom-sheetへの追加
    perl -i -pe '
    if (/^\s*<button class="bottom-sheet-btn" data-level="3">.*研修中.*<\/button>\s*$/) {
        $found_mobile_level = 1;
    }
    if ($found_mobile_level && /<\/div>/) {
        $mobile_div_count++;
        if ($mobile_div_count == 2) {
            $found_mobile_section = 1;
        }
    }
    if ($found_mobile_section && /^\s*$/) {
        print;
        print "            <!-- Home Navigation Section -->\n";
        print "            <div class=\"bottom-sheet-section\">\n";
        print "                <h3 class=\"bottom-sheet-title\">🏠 ナビゲーション</h3>\n";
        print "                <div class=\"bottom-sheet-buttons\">\n";
        print "                    <a href=\"../index.html\" class=\"bottom-sheet-btn\">\n";
        print "                        <span>🏠 トップページへ戻る</span>\n";
        print "                        <span class=\"arrow\">→</span>\n";
        print "                    </a>\n";
        print "                </div>\n";
        print "            </div>\n";
        print "            \n";
        $found_mobile_level = 0;
        $mobile_div_count = 0;
        $found_mobile_section = 0;
        $_ = "";
    }
    ' "$file_path"
    
    echo "  完了: $file_name" | tee -a "$LOG_FILE"
}

# drugs/ディレクトリのファイルを更新（metformin.html以外）
echo "" | tee -a "$LOG_FILE"
echo "=== drugs/ディレクトリの処理 ===" | tee -a "$LOG_FILE"
for file in "$BASE_DIR"/docs/drugs/*.html; do
    if [[ $(basename "$file") != "metformin.html" ]]; then
        update_file "$file"
    fi
done

# drugs-v3/ディレクトリのファイルを更新（metformin-v3.htmlと_template-v3.html以外）
echo "" | tee -a "$LOG_FILE"
echo "=== drugs-v3/ディレクトリの処理 ===" | tee -a "$LOG_FILE"
for file in "$BASE_DIR"/docs/drugs-v3/*.html; do
    filename=$(basename "$file")
    if [[ "$filename" != "metformin-v3.html" && "$filename" != "_template-v3.html" ]]; then
        update_file "$file"
    fi
done

echo "" | tee -a "$LOG_FILE"
echo "=== 処理完了: $(date) ===" | tee -a "$LOG_FILE"
echo "ログファイル: $LOG_FILE"
echo "バックアップ: $BACKUP_DIR"