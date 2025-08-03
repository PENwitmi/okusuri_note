# dapagliflozin.html components.css適用修正計画

**作成日時**: 2025-07-17 20:18  
**目的**: 装飾不足箇所へのcomponents.css適用による視覚的品質向上

## 1. 現状分析サマリー

### 1.1 components.css使用状況
- **現在**: 13箇所（既にsacubitril修正後より良好）
- **目標**: 20箇所以上（lemborexant.html水準に近づける）

### 1.2 良好な部分（維持すべき）
- content-grid/content-item（7箇所）- ✅適切に使用中
- comparison-table（1箇所）- ✅components.css活用
- faq-note、prescribing-data等 - ✅drug-page-v2.cssの良好なデザイン

### 1.3 改善が必要な箇所
1. FAQ部分（240-255行目）- 構造化されていない
2. cardクラス使用箇所（333行目）- content-sectionへの変更
3. レベル2内の各項目 - info-box未適用
4. 重要な注意事項 - alert-box未適用

## 2. 具体的な修正計画

### Phase 1: FAQ部分の構造化（優先度：高）

#### 1.1 対象箇所（238-255行目）
**現状**:
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>
            <dt>Q: なぜダパグリフロジンは...</dt>
            <dd>A: 従来の糖尿病薬は...</dd>
        </dl>
        <div class="faq-note">
            <p>💡 <strong>ポイント</strong>：...</p>
        </div>
    </div>
</section>
```

**修正後**:
```html
<section class="level-1-content">
    <div class="container">
        <div class="content-section">
            <h3>💡 薬学生のよくある疑問</h3>
            <dl>
                <dt>Q: なぜダパグリフロジンは...</dt>
                <dd>A: 従来の糖尿病薬は...</dd>
            </dl>
            <div class="faq-note">
                <p>💡 <strong>ポイント</strong>：...</p>
            </div>
        </div>
    </div>
</section>
```

### Phase 2: メインセクションの構造改善（優先度：高）

#### 2.1 cardクラスの置換（333行目）
**現状**:
```html
<section class="card level-2-content">
    <h2>「糖を捨てる」という革命的発想が医療を変えた</h2>
    <div>...</div>
</section>
```

**修正後**:
```html
<section class="level-2-content">
    <div class="content-section">
        <h2>「糖を捨てる」という革命的発想が医療を変えた</h2>
        <div>...</div>
    </div>
</section>
```

#### 2.2 レベル2内の各項目へのinfo-box適用
**対象**: 
- 「1. パラダイムシフト」
- 「2. 心腎保護効果の発見」
- 「3. HFpEFへの適応拡大」
- 他の番号付き項目

**修正方針**:
```html
<div class="info-box">
    <h5>1. パラダイムシフト：「貯める」から「捨てる」へ</h5>
    <p>内容...</p>
</div>
```

### Phase 3: 重要情報の強調（優先度：中）

#### 3.1 副作用マネジメントセクション（317-323行目）
**現状**: content-sectionは適用済みだが、重要な副作用にalert-boxが未適用

**修正案**:
- 正常血糖ケトアシドーシスの警告にalert-box追加
- 性器感染症の注意事項にinfo-box追加

#### 3.2 最新エビデンスの強調
**対象**: レベル3コンテンツの重要な臨床試験結果

**修正案**:
- DAPA-HF、DAPA-CKDの結果にhighlight-box適用
- 重要な数値データの視覚的強調

## 3. 実装手順

### Step 1: バックアップ作成
```bash
mkdir -p _old_files/backup_YYYYMMDD_HHMM
cp docs/drugs/dapagliflozin.html _old_files/backup_YYYYMMDD_HHMM/
```

### Step 2: Phase 1実施
1. FAQ部分にcontent-section追加
2. 表示確認

### Step 3: Phase 2実施
1. cardクラスをcontent-sectionに置換
2. 各項目にinfo-box適用（h4→h5変更含む）
3. 表示確認

### Step 4: Phase 3実施
1. 重要な副作用情報にalert-box適用
2. 臨床試験結果にhighlight-box適用
3. 最終確認

## 4. 期待される成果

### 定量的指標
- components.css使用：13箇所 → 20箇所以上
- 構造化セクション：2個 → 5個
- 強調表示：0個 → 3個以上

### 定性的改善
- FAQ部分の可読性向上
- 重要情報の視認性向上
- 全体的な視覚的統一感の向上

## 5. リスク管理

### 注意事項
- 既存の良好な部分（content-grid等）は変更しない
- faq-noteクラスは維持（良好なデザイン）
- 各フェーズ後に必ず表示確認

### ロールバック手順
```bash
cp _old_files/backup_YYYYMMDD_HHMM/dapagliflozin.html docs/drugs/
```

## 6. 結論

dapagliflozin.htmlは既に比較的良好な状態ですが、FAQ部分の構造化とレベル2コンテンツの各項目へのinfo-box適用により、lemborexant.htmlと同等の視覚的品質を実現できます。特に重要な副作用情報へのalert-box適用は、ユーザーの安全性向上にも寄与します。