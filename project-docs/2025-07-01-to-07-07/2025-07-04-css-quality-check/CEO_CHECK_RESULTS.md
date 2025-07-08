# CEO CSS品質チェック結果

## 実施日時
2025-07-04 00:50〜

## 担当薬剤（12薬剤）

### Group A（9薬剤）品質チェック結果

#### 1. candesartan-refined.html
- **ユニーククラス数**: 19個（基準31個より少ない）
- **不足クラス**:
  - statistics（統計セクションはあるがクラス未適用）
  - indications（適応症セクション）
  - faq-note（FAQ注記）
- **data-category**: ✓ cardiovascular（適切）
- **問題点**: 統計セクション（86-102行）にstatisticsクラスが未適用

#### 2. dapagliflozin-refined.html
- **ユニーククラス数**: 19個
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ endocrine（適切）

#### 3. empagliflozin-refined.html
- **ユニーククラス数**: 20個
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ endocrine（適切）

#### 4. enalapril-refined.html
- **ユニーククラス数**: 17個（最も少ない）
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
  - specialist-perspective
- **data-category**: ✓ cardiovascular（適切）

#### 5. escitalopram-refined.html
- **ユニーククラス数**: 18個
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ cns（適切）

#### 6. losartan-refined.html
- **ユニーククラス数**: 21個（比較的多い）
- **不足クラス**:
  - indications
  - combination-drugs
- **data-category**: ✓ cardiovascular（適切）
- **特記**: statisticsクラスが適用されている（良好）

#### 7. perindopril-refined.html
- **ユニーククラス数**: 18個
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ cardiovascular（適切）

#### 8. sertraline-refined.html
- **ユニーククラス数**: 18個
- **不足クラス**:
  - statistics
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ cns（適切）

#### 9. vancomycin-refined.html
- **ユニーククラス数**: 19個
- **不足クラス**:
  - indications
  - faq-note
  - combination-drugs
- **data-category**: ✓ antibiotic（適切）
- **特記**: statisticsクラスが適用されている（良好）

### 特例ルート（3薬剤）

#### 10. metformin-refined.html（基準ファイル）
- **ユニーククラス数**: 31個
- **すべてのクラスが揃っている**
- **data-category**: ✓ endocrine（適切）

#### 11. rosuvastatin-refined.html
- **ユニーククラス数**: 28個（基準に近い）
- **data-category**: ✓ cardiovascular（適切）
- **特記**: data-categoryが2回出現（要確認）

#### 12. telmisartan-refined.html
- **ユニーククラス数**: 26個
- **data-category**: ✓ cardiovascular（適切）

## 発見された共通の問題

### 1. 不足しているクラス（頻度順）
1. **indications/indications__list**: 8/9薬剤で不足
2. **faq-note**: 7/9薬剤で不足
3. **combination-drugs/combination-drugs__list**: 7/9薬剤で不足
4. **statistics**: 5/9薬剤で不足

### 2. data-categoryの問題
- すべて適切に設定されている
- rosuvastatin-refined.htmlのみdata-categoryが2回出現（修正必要）

### 3. クラス数のばらつき
- 最少: enalapril（17個）
- 最多: losartan（21個）
- 基準: metformin（31個）

## 推奨対処

### 優先度高
1. CSSに未定義クラス（card, statistics等）を追加
2. data-categoryの修正（4薬剤）

### 優先度中
1. 不足クラスの追加（特にindications, faq-note）
2. statisticsクラスの適用（統計セクションがあるのに未適用の薬剤）