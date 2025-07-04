# 文章比較分析作業の引き継ぎドキュメント

**作成日時**: 2025-07-04 08:08
**作成者**: Manager
**目的**: CEOへの作業引き継ぎ（100%再現可能な手順書）

## 🎯 作業概要

### ミッション
HTML clean版とrefined版の**文章内容**の差分を詳細に分析し、「削除」と「非表示」を区別して記録する。

### 背景
- refined版で89%の感動的要素が失われたと報告されているが、実際は「削除」ではなく「display:none」による非表示の可能性
- 各薬剤ごとに詳細な比較ドキュメントを作成し、真の損失を明確化

### 完成済みドキュメント（参考パターン）
1. `00-CONTENT_TEXT_DIFFERENCES_SUMMARY.md` - 全体サマリー
2. `01-CONTENT_COMPARISON_VANCOMYCIN.md` - バンコマイシン詳細
3. `02-CONTENT_COMPARISON_WARFARIN.md` - ワルファリン詳細
4. `03-TEXT_CONTENT_ANALYSIS_BY_DRUG.md` - 薬剤別分析
5. `04-ATORVASTATIN_TEXT_ANALYSIS.md` - アトルバスタチン
6. `05-BISOPROLOL_TEXT_ANALYSIS.md` - ビソプロロール（理想的実装例）

## 📋 作業手順（1薬剤あたり約5-7分）

### Step 1: ファイル行数確認（30秒）
```bash
# クリーン版の行数確認
wc -l /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/docs/_internal/css_cleanup/[drug-name]-clean.html

# refined版の行数確認  
wc -l /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/docs/drugs-v2/[drug-name]-refined.html
```

### Step 2: 両ファイルの読み込み（2分）
```bash
# クリーン版を読む（重要部分に注目）
Read /docs/_internal/css_cleanup/[drug-name]-clean.html

# refined版を読む（レベル構造に注目）
Read /docs/drugs-v2/[drug-name]-refined.html
```

### Step 3: 文章内容の比較（2-3分）
**注目ポイント**:
- 医師の証言・患者の声
- 歴史的ストーリー・開発秘話
- ヒーローセクション（感動的導入）
- 臨床的エピソード

**確認事項**:
- クリーン版にある文章がrefined版のどこに配置されているか
- レベル1、2、3のどこに振り分けられたか
- display:noneが設定されているか（非表示）
- 完全に削除されているか（削除）

### Step 4: ドキュメント作成（2分）
ファイル名規則: `NN-DRUGNAME_TEXT_ANALYSIS.md`
- NN: 連番（06から開始）
- DRUGNAME: 薬剤名（大文字）

## 📝 ドキュメントテンプレート

```markdown
# NN-DRUGNAME_TEXT_ANALYSIS.md
# [薬剤名]：文章内容の比較分析

**作成日時**: [date実行結果]
**分析者**: CEO/Manager
**対象ファイル**:
- クリーン版: `/docs/_internal/css_cleanup/[drug]-clean.html` ([行数]行)
- Refined版: `/docs/drugs-v2/[drug]-refined.html` ([行数]行)

## 📊 基本統計

| 項目 | クリーン版 | Refined版 | 差分 |
|------|-----------|-----------|------|
| 総行数 | [数値]行 | [数値]行 | [差分] |
| 医師の証言 | [有無・人数] | [配置場所] | [状態] |
| 歴史的ストーリー | [有無] | [配置場所] | [状態] |
| 患者の声 | [有無] | [配置場所] | [状態] |

## 🔍 文章配置の詳細

### レベル1（薬学生向け）- 初期表示
**含まれる文章**:
- [具体的な内容]

### レベル2（実習中向け）- display:[状態]
**配置された文章**:
- [具体的な内容]

### レベル3（研修中向け）- display:[状態]
**配置された文章**:
- [具体的な内容]

## 🔍 削除と非表示の区別

### 削除された文章：[数値]
[具体的な内容、なければ「なし」]

### 非表示の文章：[数値]
- レベル2：[内容]
- レベル3：[内容]

### 価値損失評価
- 初期表示での損失：[%]
- 完全削除による損失：[%]
- 総合評価：[高/中/低]

## 💡 特記事項
[その薬剤特有の発見や特徴]
```

## 🎯 優先順位（残り18薬剤）

### 高優先度（感動的要素が多い薬剤）
1. candesartan - T/P比の王者、CHARM試験
2. digoxin - 200年の歴史
3. furosemide - ループ利尿薬の革命
4. metformin - 60年の再評価物語
5. perindopril - 組織移行性の極致

### 中優先度
6. dapagliflozin - SGLT2阻害薬の先駆者
7. empagliflozin - 心血管アウトカム革命
8. enalapril - ACE阻害薬の標準
9. escitalopram - S体の純粋性
10. esomeprazole - S体PPIの完成形

### 標準優先度
11. lansoprazole - 日本発PPI
12. losartan - 世界初ARB
13. omeprazole - PPI革命の始祖
14. rosuvastatin - スーパースタチン
15. sertraline - バランス型SSRI
16. spironolactone - 古典的利尿薬の再評価
17. telmisartan - 24時間降圧
18. carvedilol - α/β遮断の融合

## 📊 期待される成果

### 定量的目標
- 1薬剤5-7分で分析完了
- 18薬剤を約2時間で完了（CEOと分担すれば1時間）
- 文書品質は05-BISOPROLOL_TEXT_ANALYSIS.mdレベルを維持

### 定性的目標
- 「削除」vs「非表示」の明確な区別
- 各薬剤の価値損失を正確に評価
- Phase 3コンテンツ復元の優先順位決定に貢献

## 🔧 効率化のコツ

1. **パターン認識**: 多くの薬剤で同じパターン（医師の証言→レベル2、歴史→レベル3）
2. **キーワード検索**: 「証言」「物語」「歴史」「開発」でまず検索
3. **レベル判定**: class="level-X-content"をまず確認
4. **display確認**: style="display: none"の有無を確認

## 📝 引き継ぎ事項

- 現在candesartanの分析を開始したところで中断
- candesartanは610行（clean）vs 676行（refined）で、T/P比の革命的な内容
- 05-BISOPROLOL_TEXT_ANALYSIS.mdが最も理想的な実装例（レベル1に感動要素）

## 🚀 作業開始方法

```bash
# 作業ディレクトリへ移動
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/project-docs/2025-07-04-level3-restoration-css-reform/comparison/

# 既存ドキュメントの確認
ls -la

# candesartanから開始、または高優先度リストから選択
```

**重要**: 必ずdateコマンドで正確な時刻を記録してください。