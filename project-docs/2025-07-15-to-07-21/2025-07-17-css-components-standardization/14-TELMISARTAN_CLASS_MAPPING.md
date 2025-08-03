# telmisartan.html クラスマッピングと適用計画

**作成日時**: 2025-07-17 22:30  
**対象ファイル**: `/docs/drugs/telmisartan.html`  
**目的**: 過去の修正パターンを参考にした具体的な改善計画

## 1. 現在のcomponents.css使用状況（修正版）

### 1.1 使用状況サマリー
| クラス名 | 使用箇所数 | 行番号 | 備考 |
|---------|-----------|--------|------|
| comparison-table | 1箇所 | 361 | ✅components.css活用済み |
| info-box | 4箇所 | 552, 569, 584, 602 | ✅components.css活用済み |
| quote-box | 1箇所 | 268 | ✅components.css活用済み |
| content-section | 0箇所 | - | 未使用 |
| alert-box | 0箇所 | - | 未使用 |
| highlight-box | 0箇所 | - | 未使用 |
| content-grid | 0箇所 | - | 未使用 |
| content-item | 0箇所 | - | 未使用 |
| **合計** | **6箇所** | - | sacubitril修正前（0箇所）より良好 |

### 1.2 過去の修正実績との比較
| ファイル | 修正前 | 修正後 | 増加率 |
|---------|--------|--------|--------|
| sacubitril-valsartan.html | 0箇所 | 11箇所 | ∞ |
| dapagliflozin.html | 13箇所 | 28箇所 | 115% |
| telmisartan.html（現在） | 6箇所 | 目標：20箇所以上 | 233%目標 |

## 2. 過去の修正パターン分析

### 2.1 sacubitril-valsartan.htmlでの修正
1. **FAQ部分**: content-sectionで全体を包含
2. **番号付き項目**: info-boxを適用（h4→h5変更）
3. **副作用情報**: 重要なものにalert-box適用

### 2.2 dapagliflozin.htmlでの修正
1. **FAQ部分**: content-sectionで構造化
2. **cardクラス**: content-sectionに置換
3. **番号付き項目**: 8箇所にinfo-box適用
4. **臨床試験結果**: highlight-boxで強調
5. **重要副作用**: alert-boxで警告

## 3. telmisartan.html具体的改善箇所

### 3.1 FAQ部分（298-314行）
**現状**:
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>...</dl>
    </div>
</section>
```

**改善案**: dl要素全体をcontent-sectionで包含

### 3.2 番号付き項目への info-box 適用

#### レベル2コンテンツ内（321-348行）
- 1. 第1世代（1995年〜）：パイオニア
- 2. 第2世代（1998年〜）：改良型の群雄割拠
- 3. 第3世代（2012年〜）：最強降圧
- 4. テルミサルタンの革新性
- 5. なぜテルミサルタンが選ばれるのか

#### テルミサルタンが優位な状況（395-409行）
- 1. 糖尿病合併高血圧
- 2. メタボリックシンドローム
- 3. 服薬アドヒアランス不良

**合計**: 8箇所の番号付き項目

### 3.3 副作用セクションの強調（263-293行）

**現状**: quote-boxクラス使用（既にcomponents.css活用）

**改善案**:
- 「高カリウム血症（0.5%）- 腎機能低下例で注意」にalert-box適用
- 薬物相互作用の「高K血症リスク」にも検討

### 3.4 臨床試験結果の強調

#### ONTARGET試験結果（552-568行）
**現状**: info-box使用済み

**改善案**: 
- 主要結果部分（心血管イベント16.5% vs 16.7%等）にhighlight-box追加

#### TRANSCEND試験結果（569-582行）
**現状**: info-box使用済み

**改善案**:
- 糖尿病新規発症13%減少部分にhighlight-box追加

## 4. 実装優先順位

### Phase 1: 構造化（優先度：高）
1. FAQ部分をcontent-sectionで包含
2. 効果測定と表示確認

### Phase 2: 番号付き項目改善（優先度：高）
1. レベル2コンテンツの5項目にinfo-box適用
2. テルミサルタン優位状況の3項目にinfo-box適用
3. h4→h5への見出しレベル調整

### Phase 3: 重要情報の強調（優先度：中）
1. 高カリウム血症警告にalert-box適用
2. 臨床試験の主要結果にhighlight-box適用

## 5. 期待される成果

### 定量的指標
- components.css使用：6箇所 → 20箇所以上（233%増加）
- 構造化セクション：0個 → 1個
- 強調表示：1個（quote-box）→ 4個以上

### 定性的改善
- FAQ部分の視認性向上
- 重要情報の階層構造明確化
- 臨床データの視覚的強調
- 全体的な統一感の向上

## 6. 注意事項

### 既に良好な部分は維持
- comparison-table（361行）
- 既存のinfo-box 4箇所
- quote-box（副作用セクション）

### 重点改善エリア
- FAQ部分の構造化
- 番号付き項目8箇所へのinfo-box適用
- 重要な副作用・臨床データの視覚的強調