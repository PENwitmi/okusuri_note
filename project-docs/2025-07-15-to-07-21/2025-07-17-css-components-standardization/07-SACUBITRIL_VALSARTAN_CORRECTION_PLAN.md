# sacubitril-valsartan.html components.css適用修正計画

**作成日時**: 2025-07-17 17:00  
**目的**: 装飾不足の真の原因に基づく適切な修正計画

## 1. 問題の根本原因

### 調査結果の比較
| 項目 | lemborexant.html | sacubitril-valsartan.html |
|------|-----------------|--------------------------|
| components.css使用箇所 | 22箇所 | 0箇所 |
| 主要なクラス | info-box, content-section, highlight-box, alert-box | なし |
| 視覚的品質 | 高い（構造化されたボックス） | 低い（平坦な表示） |

### 真の原因
sacubitril-valsartan.htmlは古いdrug-page-v2.cssのスタイルのみに依存し、components.cssの洗練されたボックススタイルを全く活用していない。

## 2. 修正方針

### 基本方針
1. **既存のdrug-page-v2.cssクラスは維持する**（正常に機能している部分）
2. **components.cssのクラスを追加適用する**（装飾不足の部分）
3. **lemborexant.htmlの構造を参考にする**（成功例として）

### 重要な注意点
- `combination-box`は削除せず維持（drug-page-v2.cssで洗練されたデザインが定義済み）
- `faq-note`も維持（適切なスタイルが定義済み）
- 不足しているのはセクション全体の構造化とボックス化

## 3. 具体的な修正計画

### Phase 1: セクション構造の改善（優先度：高）

#### 1.1 レベル2の7項目（280-312行目）
**現状**:
```html
<div>
    <h4>1. PARADIGM-HF試験の衝撃</h4>
    <p>...</p>
</div>
```

**修正後**:
```html
<div class="info-box">
    <h5>1. PARADIGM-HF試験の衝撃</h5>
    <p>...</p>
</div>
```

対象：7箇所すべて

#### 1.2 薬学生FAQ部分（258-273行目）
**現状**:
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>...</dl>
    </div>
</section>
```

**修正後**:
```html
<section class="level-1-content">
    <div class="container">
        <div class="content-section">
            <h3>💡 薬学生のよくある疑問</h3>
            <dl>...</dl>
        </div>
    </div>
</section>
```

### Phase 2: 主要セクションの構造化（優先度：高）

#### 2.1 メインセクション（278行目）
**現状**:
```html
<section class="card level-2-content">
    <h2>なぜHFrEFでACE阻害薬を超えた初めての心不全薬なのか</h2>
    <div>...</div>
</section>
```

**修正後**:
```html
<section class="level-2-content">
    <div class="content-section">
        <h2>なぜHFrEFでACE阻害薬を超えた初めての心不全薬なのか</h2>
        <div>...</div>
    </div>
</section>
```

#### 2.2 Fantastic Four相乗効果セクション（364行目）
**現状**:
```html
<section class="level-2-content">
    <h2>💊 Fantastic Fourの相乗効果メカニズム</h2>
    <div>...</div>
</section>
```

**修正後**:
```html
<section class="level-2-content">
    <div class="content-section">
        <h2>💊 Fantastic Fourの相乗効果メカニズム</h2>
        <div>...</div>
    </div>
</section>
```

### Phase 3: 重要情報のハイライト（優先度：中）

#### 3.1 重要な注意事項セクション（227行目）
**現状**:
```html
<section class="level-1-content">
    <div class="container">
        <h3>⚠️ エンレストの重要な注意事項</h3>
        <div class="quote-box">...</div>
    </div>
</section>
```

**修正後**:
```html
<section class="level-1-content">
    <div class="container">
        <div class="alert-box">
            <h3>⚠️ エンレストの重要な注意事項</h3>
            <div class="quote-box">...</div>
        </div>
    </div>
</section>
```

### Phase 4: その他の改善（優先度：低）

#### 4.1 開始用量の違いセクション
適切な場所にinfo-boxやhighlight-boxを適用

## 4. 実装時の確認事項

### 必須確認項目
1. **既存の良好なスタイルを破壊しない**
   - combination-box（5箇所）は維持
   - faq-note（1箇所）は維持
   - quote-box（1箇所）は維持

2. **components.cssのクラスを適切に適用**
   - info-box：情報提示用（青系）
   - content-section：セクション構造化用
   - alert-box：警告・注意用（黄系）
   - highlight-box：強調用（緑系）

3. **HTML構造の調整**
   - h4 → h5への変更（info-box内）
   - 適切なネスト構造の確保

## 5. 期待される成果

### 定量的指標
- components.css使用箇所：0箇所 → 約15-20箇所
- 構造化されたセクション：0個 → 5個以上
- ボックス化された項目：3個 → 15個以上

### 定性的改善
- lemborexant.htmlと同等の視覚的品質
- 情報の階層構造が明確化
- 読みやすさの大幅向上
- 他の薬剤ページとの統一感

## 6. 実装順序

1. バックアップ作成（必須）
2. Phase 1実施（レベル2の7項目）
3. Phase 2実施（主要セクション）
4. 表示確認
5. Phase 3-4実施（必要に応じて）

## 7. リスク管理

### 注意事項
- 各フェーズ後に必ず表示確認
- 既存の良好な部分は触らない
- 問題発生時は即座にバックアップから復元

### 成功基準
- エラーなし
- 視覚的改善が明確
- レスポンシブ動作正常