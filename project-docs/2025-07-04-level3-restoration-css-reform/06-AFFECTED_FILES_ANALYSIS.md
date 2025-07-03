# 06-AFFECTED_FILES_ANALYSIS.md
# 影響ファイル分析報告書

**作成日時**: 2025-07-04 04:52  
**作成者**: CEO  
**分析対象**: style.css使用ファイル  
**最終更新**: 2025-07-04 04:52

## 📋 エグゼクティブサマリー

style.cssを使用している164ファイルの詳細分析により、影響範囲と優先順位が明確化。薬剤個別ページ（22ファイル）が最優先対象であり、これらのファイルでは約50%のCSS削減が可能。段階的移行により、リスクを最小化しながら改革を実現できる。

### 影響ファイルの内訳
- **最優先対象**: drugs-v2/ (22ファイル) - 即座の対応必要
- **高優先度**: groups/ (約50ファイル) - 内容確認後対応
- **中優先度**: _internal/ (約70ファイル) - 開発用、段階的対応
- **低優先度**: その他 (約20ファイル) - 個別評価

## 📊 全体統計

### ファイル使用状況
```bash
# style.css使用ファイル総数
grep -l "style\.css" docs/**/*.html | wc -l
# 結果: 164ファイル
```

### ディレクトリ別分布
```
docs/
├── index.html (1)              # 適切使用
├── drugs-v2/ (22)              # 最優先改善対象
├── groups/ (13)                # 要内容確認
├── categories/ (7)             # 要評価
├── stories/ (10)               # 要評価
├── drugs/ (24)                 # 旧バージョン
└── _internal/ (87)             # 開発用
```

## 🎯 最優先対象: drugs-v2/ (22ファイル)

### 対象ファイルリスト
```
1. atorvastatin-refined.html
2. bisoprolol-refined.html
3. candesartan-refined.html
4. carvedilol-refined.html    ⚠️ display:none
5. dapagliflozin-refined.html
6. digoxin-refined.html       ⚠️ display:none
7. empagliflozin-refined.html
8. enalapril-refined.html
9. escitalopram-refined.html
10. esomeprazole-refined.html
11. furosemide-refined.html
12. lansoprazole-refined.html
13. losartan-refined.html
14. metformin-refined.html
15. omeprazole-refined.html
16. perindopril-refined.html
17. rosuvastatin-refined.html
18. sertraline-refined.html
19. spironolactone-refined.html
20. telmisartan-refined.html
21. vancomycin-refined.html   ⚠️ class欠落
22. warfarin-refined.html     ⚠️ display:none
```

### 現状の問題点
```html
<!-- 現在の読み込み -->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

- style.css: 1,190行（586行が不要）
- responsive-unified.css: 450行（必要）
- drug-page-v2.css: 370行（必要）

### 改善後の構成
```html
<!-- 改善後 -->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
```

- style.css: 400行（必要な基盤のみ）
- drug-page-v2.css: 370行（変更なし）
- responsive-unified.css: 450行（変更なし）

**削減効果**: 790行削減（39%減）

## 📁 高優先度: groups/ ディレクトリ

### ファイル一覧と用途
```
groups/
├── ARB_evolution_model.html         # ARB進化モデル
├── ACE_inhibitor_evolution_model.html
├── PPI_evolution_model.html
├── SGLT2_evolution_model.html
├── SSRI_evolution_model.html
├── antibiotics_ecosystem_map.html
├── beta_blocker_evolution_model.html
├── cardiovascular_integrated_guide.html
├── diuretics_evolution_model.html
├── drug_ecosystem_concept.html
├── hypertension_treatment_ecosystem.html
├── statin_evolution_model.html
└── [その他]
```

### 分析結果
- **用途**: 薬効群別の詳細解説ページ
- **特徴**: 複数薬剤の比較・関係性を表示
- **判断**: カード要素を使用している可能性があり、内容確認が必要

### 対応方針
1. 各ファイルの実際の使用クラスを調査
2. インデックス系クラスの使用有無を確認
3. 必要に応じてページ専用CSSを検討

## 📂 中優先度: _internal/ ディレクトリ

### サブディレクトリ構成
```
_internal/
├── css_cleanup/ (22)           # CSS削除前の元ファイル
├── css_rebuild_work20250703/ (2)
├── css_rebuild_work_20250703/ (1)
├── drug_cssed/ (22)            # CSS適用済みファイル
├── drug_versionup/ (19)        # バージョンアップ作業
└── [その他バックアップ]
```

### 特徴と対応
- **性質**: 開発・バックアップ用
- **公開**: されていない（内部用）
- **対応**: 新規開発時に新style.css使用を徹底

## 📄 その他のファイル

### categories/ ディレクトリ (7ファイル)
```
categories/
├── cardiovascular.html
├── diabetes.html
├── diuretic.html
├── gastrointestinal.html
├── lipid.html
├── others.html
└── psychotropic.html
```
- **用途**: 薬効群カテゴリページ
- **推測**: カード要素使用の可能性大
- **対応**: グループ単位での評価が必要

### stories/ ディレクトリ (10ファイル)
```
stories/
├── anticancer.html
├── aspirin.html
├── hypertension.html
├── insulin.html
├── penicillin.html
├── personalized.html
├── psychotropic.html
├── resistance.html
├── vaccine.html
└── vancomycin.html
```
- **用途**: 薬学史ストーリーページ
- **推測**: 独自レイアウトの可能性
- **対応**: 個別確認後に判断

### 単独ファイル
- cardiovascular-orchestra.html
- test-responsive.html
- test-import.html
- **対応**: 個別評価

## 🔄 段階的移行計画

### Phase 1: 即時対応（Day 1-3）
```bash
# 準備作業: style.cssをold-style.cssにリネーム
mv docs/assets/css/style.css docs/assets/css/old-style.css

# drugs-v2/の22ファイル更新（一時的にold-style.css参照）
for file in docs/drugs-v2/*.html; do
    sed -i 's|style.css|old-style.css|' "$file"
done

# 新style.css作成後に再更新
# for file in docs/drugs-v2/*.html; do
#     sed -i 's|old-style.css|style.css|' "$file"
# done
```
- **対象**: 22ファイル
- **効果**: 最大の改善効果

### Phase 2: 高優先度対応（Day 4-7）
```bash
# groups/の調査と更新
for file in docs/groups/*.html; do
    # 使用クラスの確認
    grep -o 'class="[^"]*"' "$file" | sort | uniq
done
```
- **対象**: 約50ファイル
- **作業**: 内容確認後に適切な対応

### Phase 3: 中優先度対応（Week 2）
- **対象**: _internal/の新規ファイル
- **作業**: 新規作成時のガイドライン適用

### Phase 4: 低優先度対応（Month 2）
- **対象**: その他のファイル
- **作業**: 個別評価と必要に応じた更新

## 📈 移行進捗管理

### 追跡メトリクス
```bash
# 進捗確認スクリプト
echo "=== CSS移行進捗 ==="
echo "新style.css使用: $(grep -l "style\.css" docs/**/*.html | wc -l)"
echo "old-style.css使用: $(grep -l "old-style\.css" docs/**/*.html | wc -l)"
echo "移行率: $(($(grep -l "style\.css" docs/**/*.html | wc -l) * 100 / 164))%"
```

### マイルストーン
- Week 1: drugs-v2完了（22/164 = 13.4%）
- Week 2: groups完了（72/164 = 43.9%）
- Month 1: 主要ファイル完了（100/164 = 61.0%）
- Month 2: 全ファイル完了（164/164 = 100%）

## ⚠️ 注意事項

### 1. バージョン管理
```html
<!-- キャッシュ対策 -->
<link rel="stylesheet" href="style.css?v=20250704">
```

### 2. 後方互換性
- old-style.cssは移行期間中維持
- 全ファイル更新完了後に削除検討

### 3. テスト重点項目
- レイアウト崩れ
- レスポンシブ動作
- JavaScript連携

## 💡 効率化のヒント

### 一括更新スクリプト
```bash
#!/bin/bash
# update_css_links.sh

# 対象ディレクトリを引数で指定
TARGET_DIR=$1

# Step 1: style.cssをold-style.cssに置換（初期移行）
find "$TARGET_DIR" -name "*.html" -type f -exec \
    sed -i 's|href="\(.*\)style\.css"|href="\1old-style.css"|g' {} \;

# Step 2: old-style.cssを新style.cssに置換（新CSS準備後）
# find "$TARGET_DIR" -name "*.html" -type f -exec \
#     sed -i 's|href="\(.*\)old-style\.css"|href="\1style.css"|g' {} \;

# 更新ファイル数を表示
echo "Updated: $(find "$TARGET_DIR" -name "*.html" | wc -l) files"
```

### 使用例
```bash
./update_css_links.sh docs/drugs-v2
./update_css_links.sh docs/groups
```

## 📎 付録: クラス使用頻度分析

### よく使用されるクラス（全164ファイル）
```
1. container: 156回
2. header: 164回
3. footer: 164回
4. nav-link: 492回
5. drug-card: 24回（index.htmlのみ想定）
6. hero: 1回（index.htmlのみ想定）
```

この分析により、CSS分離の影響範囲が明確になった。drugs-v2/の22ファイルから始める段階的移行により、リスクを最小化しながら、最大の効果を早期に実現できる。