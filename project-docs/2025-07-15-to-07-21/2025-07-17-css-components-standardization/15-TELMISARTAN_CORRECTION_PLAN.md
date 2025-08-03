# telmisartan.html components.css適用修正計画

**作成日時**: 2025-07-17 22:31  
**目的**: 過去の成功パターンを活かした体系的な改善実施

## 1. 現状分析と目標設定

### 1.1 現状
- **components.css使用**: 6箇所（comparison-table 1、info-box 4、quote-box 1）
- **課題**: FAQ構造化なし、番号付き項目の未活用、重要情報の強調不足

### 1.2 目標
- **定量目標**: 20箇所以上のcomponents.css活用
- **定性目標**: lemborexant.html/dapagliflozin.html同等の視覚的品質

## 2. 具体的な修正計画

### Phase 1: FAQ部分の構造化（298-314行）

#### 対象箇所
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>
            <dt>Q: 「PPAR-γ活性化作用って何？」</dt>
            <dd>A: ARB中テルミサルタンだけが持つ特殊作用...</dd>
            <!-- 以下省略 -->
        </dl>
    </div>
</section>
```

#### 修正内容
dl要素全体をcontent-sectionで包含：
```html
<section class="level-1-content">
    <div class="container">
        <div class="content-section">
            <h3>💡 薬学生のよくある疑問</h3>
            <dl>
                <!-- 内容はそのまま -->
            </dl>
        </div>
    </div>
</section>
```

### Phase 2: 番号付き項目への info-box 適用

#### 2.1 レベル2コンテンツ内（321-348行）
**対象**: 5項目
```html
<div>
    <h4>1. 第1世代（1995年〜）：パイオニア</h4>
    <p>...</p>
</div>
```

**修正後**:
```html
<div class="info-box">
    <h5>1. 第1世代（1995年〜）：パイオニア</h5>
    <p>...</p>
</div>
```

同様に以下も修正：
- 2. 第2世代（1998年〜）：改良型の群雄割拠
- 3. 第3世代（2012年〜）：最強降圧
- 4. テルミサルタンの革新性
- 5. なぜテルミサルタンが選ばれるのか

#### 2.2 テルミサルタンが優位な状況（395-409行）
**対象**: 3項目
```html
<div>
    <h4>1. 糖尿病合併高血圧</h4>
    <p>...</p>
</div>
```

**修正後**:
```html
<div class="info-box">
    <h5>1. 糖尿病合併高血圧</h5>
    <p>...</p>
</div>
```

同様に以下も修正：
- 2. メタボリックシンドローム
- 3. 服薬アドヒアランス不良

### Phase 3: 重要情報の強調

#### 3.1 副作用警告への alert-box 適用（270-272行）
**現状**:
```html
<p><strong>重要な副作用</strong>：高カリウム血症（0.5%）- 腎機能低下例で注意</p>
```

**修正案**:
```html
<div class="alert-box">
    <p><strong>重要な副作用</strong>：高カリウム血症（0.5%）- 腎機能低下例で注意</p>
</div>
```

#### 3.2 臨床試験結果への highlight-box 適用

**ONTARGET試験結果（558-567行）**:
主要結果部分を highlight-box で強調

**TRANSCEND試験結果（574-579行）**:
糖尿病新規発症13%減少部分を highlight-box で強調

## 3. 実装手順

### Step 1: バックアップ作成
```bash
mkdir -p _old_files/backup_20250717_2231
cp docs/drugs/telmisartan.html _old_files/backup_20250717_2231/
```

### Step 2: Phase 1実施
1. FAQ部分にcontent-section追加
2. ブラウザで表示確認

### Step 3: Phase 2実施
1. 8箇所の番号付き項目にinfo-box適用
2. h4→h5への見出しレベル調整
3. 表示確認

### Step 4: Phase 3実施
1. 高カリウム血症警告にalert-box適用
2. 臨床試験結果にhighlight-box適用
3. 最終表示確認

## 4. 期待される成果

### 定量的成果
| 指標 | 現状 | 目標 | 増加率 |
|------|------|------|--------|
| components.css使用箇所 | 6箇所 | 20箇所以上 | 233%+ |
| info-box使用 | 4箇所 | 12箇所 | 200% |
| 構造化セクション | 0個 | 1個 | - |
| 強調表示要素 | 1個 | 4個以上 | 300%+ |

### 定性的成果
- FAQ部分の可読性と構造の改善
- 重要情報の視覚的階層の明確化
- 副作用情報の安全性向上
- サイト全体のデザイン一貫性向上

## 5. リスク管理

### 注意事項
- 既存の良好な部分（comparison-table、既存info-box、quote-box）は変更しない
- 各フェーズ後に必ず表示確認を実施
- モバイル表示も確認

### ロールバック手順
```bash
cp _old_files/backup_20250717_2231/telmisartan.html docs/drugs/
```

## 6. 成功基準

1. **視覚的品質**: lemborexant.html/dapagliflozin.html同等レベル
2. **構造化**: FAQ部分が明確に区切られている
3. **情報階層**: 重要度に応じた視覚的強調
4. **一貫性**: 他の薬剤ページとの統一感

## 7. 実施タイムライン

- Phase 1: 5分（FAQ構造化）
- Phase 2: 15分（番号付き項目8箇所）
- Phase 3: 10分（強調表示適用）
- 確認・調整: 10分
- **合計**: 約40分