# Manager クロスチェック指示書

## 担当薬剤（CEOが先ほどチェックした12薬剤）
1. candesartan-refined.html
2. dapagliflozin-refined.html
3. empagliflozin-refined.html
4. enalapril-refined.html
5. escitalopram-refined.html
6. losartan-refined.html
7. perindopril-refined.html
8. sertraline-refined.html
9. vancomycin-refined.html
10. metformin-refined.html（基準ファイル）
11. rosuvastatin-refined.html
12. telmisartan-refined.html

## クロスチェック手順

### 1. CEOの報告内容を確認
`CEO_CHECK_RESULTS.md`を参照し、以下の報告を検証：
- 各薬剤のユニーククラス数
- 不足していると報告されたクラス
- data-categoryの設定

### 2. 実際のファイルを確認
```bash
cd '/Users/nishimototakashi/claude code/ai-team/code/okusuri_note'
grep -o 'class="[^"]*"' docs/drugs-v2/[薬剤名]-refined.html | sort | uniq
```

### 3. 特に確認すべき点
- **candesartan**: CEOが修正したstatisticsクラスが正しく適用されているか（20個になったはず）
- **enalapril**: 本当に17個で最少か、見落としはないか
- **rosuvastatin**: data-categoryの重複は本当に存在するか
- **不足クラス報告**: indications, faq-note等が本当に不足しているか

### 4. 前回のCEO評価の妥当性
CEOは自身の薬剤を「評価B（良好）」としたが、これは適切か？
- 平均19.3クラスは本当に少ないのか
- 必須クラスは本当に実装されているか
- 改善が必要な箇所は他にないか

## レポート作成
`MANAGER_CROSS_CHECK_RESULTS.md`として以下を記載：
1. CEOの報告との相違点
2. 見落とされていた問題
3. 誤って報告されていた内容
4. 修正された評価（必要な場合）
5. 追加の改善提案