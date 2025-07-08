#!/bin/bash

# CSS付与自動化スクリプト
# Group A（クラスなし）の薬剤に標準的なクラスを付与

apply_css_to_drug() {
    local drug_name=$1
    local category=$2
    local input_file="docs/_internal/drug_cssed/${drug_name}-clean-v2.html"
    local output_file="docs/drugs-v2/${drug_name}-clean.html"
    
    echo "Processing ${drug_name}..."
    
    # ファイルコピー
    cp "$input_file" "$output_file"
    
    # CSS link更新
    sed -i '' 's|<link rel="stylesheet" href="../assets/css/drug-detail.css">|<link rel="stylesheet" href="../assets/css/responsive-unified.css">\n    <link rel="stylesheet" href="../assets/css/drug-page-v2.css">|' "$output_file"
    
    # body class追加
    sed -i '' "s|<body>|<body class=\"drug-detail\" data-category=\"${category}\">|" "$output_file"
    
    # level-selector
    sed -i '' 's|<!-- レベルインジケーター -->\n    <div>|<!-- レベルインジケーター -->\n    <div class="level-selector">|' "$output_file"
    sed -i '' 's|        <div>\n            <button data-level="1">薬学生</button>|        <div class="level-selector__inner">\n            <button class="level-btn active" data-level="1">薬学生</button>|' "$output_file"
    sed -i '' 's|            <button data-level="2">実習中</button>|            <button class="level-btn" data-level="2">実習中</button>|' "$output_file"
    sed -i '' 's|            <button data-level="3">研修中</button>|            <button class="level-btn" data-level="3">研修中</button>|' "$output_file"
    
    # main container
    sed -i '' 's|    <main>\n        <div>|    <main>\n        <div class="container">|' "$output_file"
    
    # level content sections
    sed -i '' 's|            <!-- レベル1 -->\n            <section>|            <!-- レベル1 -->\n            <section class="level-1-content">|' "$output_file"
    sed -i '' 's|            <!-- レベル2 -->\n            <section>|            <!-- レベル2 -->\n            <section class="level-2-content">|' "$output_file"
    sed -i '' 's|            <!-- レベル3 -->\n            <section>|            <!-- レベル3 -->\n            <section class="level-3-content">|' "$output_file"
    
    echo "Completed ${drug_name} - checking class count..."
    class_count=$(grep -c "class=" "$output_file")
    echo "  Classes added: $class_count"
}

# Group Aの薬剤リスト（既に完了したものを除く）
# empagliflozin (endocrine), enalapril (cardiovascular), escitalopram (cns),
# losartan (cardiovascular), perindopril (cardiovascular), sertraline (cns), vancomycin (antibiotic)

apply_css_to_drug "empagliflozin" "endocrine"
apply_css_to_drug "enalapril" "cardiovascular"
apply_css_to_drug "escitalopram" "cns"
apply_css_to_drug "losartan" "cardiovascular"
apply_css_to_drug "perindopril" "cardiovascular"
apply_css_to_drug "sertraline" "cns"
apply_css_to_drug "vancomycin" "antibiotic"

echo "All Group A drugs processed!"