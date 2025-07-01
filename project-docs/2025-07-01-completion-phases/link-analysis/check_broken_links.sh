#\!/bin/bash

# リンク切れチェックスクリプト
echo "=== リンク切れ分析開始 ==="

# 全リンクの抽出（相対パスのみ）
grep -h 'href="[^"]*"' project-docs/2025-07-01-completion-phases/link-analysis/all_links.txt | \
sed 's/.*href="\([^"]*\)".*/\1/' | \
grep -v '^http' | \
grep -v '^#' | \
sort | uniq > project-docs/2025-07-01-completion-phases/link-analysis/all_links_raw.txt

# リンク切れの検出
echo "404 errors found:" > project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt
while read -r link; do
    # CSSやJSファイルのチェック
    if [[ "$link" == assets/* ]]; then
        if [[ \! -f "docs/$link" ]]; then
            echo "404: $link" >> project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt
        fi
    # HTMLファイルのチェック
    elif [[ "$link" == *.html ]]; then
        if [[ \! -f "docs/$link" ]]; then
            echo "404: $link" >> project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt
        fi
    fi
done < project-docs/2025-07-01-completion-phases/link-analysis/all_links_raw.txt

# カテゴリ別集計
echo "=== Stories links ==="
grep "data/stories" project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt > project-docs/2025-07-01-completion-phases/link-analysis/broken_stories.txt

echo "=== Differentiation links ==="
grep "data/differentiation" project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt > project-docs/2025-07-01-completion-phases/link-analysis/broken_differentiation.txt

echo "=== Assets links ==="
grep "assets/" project-docs/2025-07-01-completion-phases/link-analysis/broken_links.txt > project-docs/2025-07-01-completion-phases/link-analysis/broken_assets.txt

echo "分析完了"
