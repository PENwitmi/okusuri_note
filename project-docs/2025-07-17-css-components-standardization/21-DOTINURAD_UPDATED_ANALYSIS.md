# dotinurad.html 更新状況分析ドキュメント

**作成日時**: 2025-07-17 23:21  
**対象ファイル**: `/docs/drugs/dotinurad.html`  
**目的**: components.css適用のための最新状況分析

## 1. 重要な発見

### 1.1 components.cssリンク状況
- **現状**: components.cssがリンクされていない（14行目に追加必要）
- **影響**: 3つの既存クラスがスタイル未適用状態

### 1.2 既にcomponents.cssクラスを使用している箇所
| 行番号 | クラス名 | 使用場所 | 備考 |
|--------|----------|----------|------|
| 290 | `safety-comparison` | div | ✅components.cssに定義済み |
| 377 | `development-story` | div | ✅components.cssに定義済み |
| 459 | `clinical-evidence` | div | ✅components.cssに定義済み |

**重要**: components.cssをリンクするだけで、これら3つのセクションが即座に適切なスタイルを獲得する。

### 1.3 他の薬剤ページとの比較
| ファイル | components.css使用箇所数 | 状態 |
|----------|-------------------------|------|
| dapagliflozin.html | 28箇所 | 最高水準 |
| lemborexant.html | 22箇所 | 高水準 |
| metformin.html（修正後） | 20箇所 | 高水準 |
| telmisartan.html（修正後） | 19箇所 | 良好 |
| sacubitril-valsartan.html（修正後） | 11箇所 | 良好 |
| dotinurad.html（現在） | 3箇所（未リンク） | 要改善 |

## 2. 固有クラスの詳細確認（約30個）

### 2.1 メカニズム関連（3箇所）
- `mechanism-detail`（230行）
- `mechanism-box`（233行、243行）

### 2.2 相互作用関連（10箇所）
- `interaction-detail`（267行）
- `interaction-cards`（270行）
- `interaction-item important`（271行）
- `interaction-item`（277行、283行）
- `drug-safety-scale`（292行）
- `safety-item best/good/poor`（293-303行）
- `drug-name`, `caution-count`, `safety-bar`（294-306行）

### 2.3 薬剤比較関連（7箇所）
- `drug-comparison-cards`（320行）
- `drug-card highlight`（321行）
- `drug-card`（332行、343行、354行）
- `drug-type`（323行、334行、345行、356行）
- `drug-features`（324行、335行、346行、357行）

### 2.4 開発ストーリー関連（5箇所）
- `story-section`（380行、400行、415行）
- `warning-box`（388行）- インラインスタイル付き
- `discovery-detail`（404行）
- `development-milestone`（419行）

### 2.5 臨床エビデンス関連（6箇所）
- `trial-summary`（462行）
- `trial-highlights`（464行）
- `clinical-conclusion`（471行）
- `clinical-insight`（480行）
- `trial-comparison`（499行）
- `highlight-success`（508行）

### 2.6 グローバル展開関連（4箇所）
- `global-expansion`（491行）
- `milestone-box`（494行、529行、537行）
- `clinical-impact`（526行）
- `approval-timeline`（531行）

### 2.7 将来展望関連（5箇所）
- `future-perspectives`（555行）
- `perspective-grid`（557行、579行）
- `perspective-item`（558行、567行、580行、589行）
- `research-direction`（600行）

### 2.8 その他（1箇所）
- `drug-footer`（615行）

## 3. 改善の優先順位

### 即効性のある改善
1. **components.cssリンク追加**で3セクションが即座に改善
2. **番号付き項目**へのinfo-box適用（他の薬剤で成功実績）
3. **警告・重要情報**へのalert-box適用

### 構造的な改善が必要な箇所
1. メカニズム関連の複雑な構造
2. 相互作用の安全性スケール表示
3. 薬剤比較カード構造

## 4. 成功パターンの適用可能性

### 他の薬剤での成功パターン
1. **FAQ部分**をcontent-sectionで包含
2. **番号付き項目**にinfo-box適用（h4→h5変更）
3. **重要な副作用・警告**にalert-box
4. **臨床試験結果**にhighlight-box
5. **cardクラス削除**→content-sectionへの置換

### dotinurad.html特有の課題
1. **独自の安全性スケール表示**
2. **薬剤比較カード**の特殊構造
3. **グローバル展開セクション**の複雑性