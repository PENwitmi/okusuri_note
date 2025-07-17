# dotinurad.html components.css適用修正計画

**作成日時**: 2025-07-17 23:25  
**目的**: 固有クラスが最も多い薬剤ページの段階的改善

## 1. 現状分析と目標設定

### 1.1 現状
- **components.css使用**: 3箇所（development-story, clinical-evidence, safety-comparison）
- **問題**: components.cssがリンクされていないため、これら3つも未適用状態
- **固有クラス数**: 約30個（全薬剤中最多）
- **特徴**: 独自の安全性スケール、薬剤比較カード、グローバル展開セクション

### 1.2 目標
- **第一目標**: components.cssリンク追加により3箇所を即座に有効化
- **第二目標**: 低リスク置換により10箇所以上の改善
- **最終目標**: 25箇所以上のcomponents.css活用（他の薬剤と同等レベル）

## 2. 段階的実装計画

### 🟢 Phase 1: 即時実行（リスク：極小）

#### 実施内容
components.cssリンクを追加（14行目）
```html
<link rel="stylesheet" href="../assets/css/components.css">
```

#### 期待効果
- 3つの重要セクションが即座に統一デザインに
- 実装時間：1分
- リスク：なし

### 🟡 Phase 2: 低リスク置換（リスク：小）

#### 2.1 FAQ部分の構造化（203-219行）
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

#### 2.2 警告ボックスの標準化（388行）
**現状**:
```html
<div class="warning-box" style="background-color: #fff3cd; border: 2px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 5px;">
```

**修正後**:
```html
<div class="alert-box">
```

#### 2.3 マイルストーンボックスの置換（494, 529, 537行）
**現状**: `milestone-box`
**修正後**: `info-box`

#### 2.4 臨床的インパクトの強調（526行）
**現状**: `clinical-impact`
**修正後**: `key-point-box`

#### 2.5 セクション構造の標準化
- `future-perspectives` → `content-section`（555行）
- `research-direction` → `content-section`（600行）
- `drug-footer` → 削除（615行）

### 🟠 Phase 3: 中リスク置換（リスク：中）

#### 3.1 グリッド構造の統一化
- `perspective-grid` → `content-grid`（557, 579行）
- `perspective-item` → `content-item`（558, 567, 580, 589行）
- `drug-comparison-cards` → `content-grid`（320行）

#### 3.2 開発ストーリー内部構造
- `story-section` → `content-section`内のdiv（380, 400, 415行）
- `discovery-detail` → `info-box`（404行）
- `development-milestone` → `info-box`（419行）

#### 3.3 臨床エビデンス内部構造
- `trial-summary` → `content-section`（462行）
- `clinical-conclusion` → `highlight-box`（471行）
- `clinical-insight` → p要素のまま維持（480行）

### 🔴 Phase 4: 高リスク要素（リスク：高）

#### 4.1 メカニズム関連（要HTML構造変更）
```html
<!-- 現状 -->
<div class="mechanism-detail">
    <div class="mechanism-box">...</div>
    <div class="mechanism-box">...</div>
</div>

<!-- 修正後 -->
<div class="content-section">
    <div class="info-box">
        <h5>URAT1阻害による尿酸再吸収抑制</h5>
        ...
    </div>
    <div class="info-box">
        <h5>GLUT9非阻害</h5>
        ...
    </div>
</div>
```

#### 4.2 相互作用カード（要HTML構造変更）
```html
<!-- 現状 -->
<div class="interaction-cards">
    <div class="interaction-item important">...</div>
    <div class="interaction-item">...</div>
</div>

<!-- 修正後 -->
<div class="content-grid">
    <div class="alert-box">...</div>
    <div class="info-box">...</div>
</div>
```

#### 4.3 安全性スケール（要構造変更）
```html
<!-- 現状の複雑な構造 -->
<div class="drug-safety-scale">
    <div class="safety-item best">...</div>
    ...
</div>

<!-- 修正後：comparison-tableへ -->
<table class="comparison-table">
    <thead>
        <tr>
            <th>薬剤名</th>
            <th>相互作用数</th>
            <th>安全性評価</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>フェブキソスタット</td>
            <td>2-3剤</td>
            <td>★★★★★</td>
        </tr>
        ...
    </tbody>
</table>
```

## 3. 実装手順

### Step 1: バックアップ作成（必須）
```bash
mkdir -p _old_files/backup_20250717_2330
cp docs/drugs/dotinurad.html _old_files/backup_20250717_2330/
```

### Step 2: Phase 1実施（1分）
1. components.cssリンク追加
2. 表示確認（3セクションのスタイル適用）

### Step 3: Phase 2実施（20分）
1. FAQ構造化
2. 警告ボックス標準化
3. マイルストーンボックス置換（3箇所）
4. 臨床的インパクト強調
5. セクション構造標準化（2箇所）

### Step 4: Phase 3実施（30分）
1. グリッド構造統一化
2. 開発ストーリー内部構造調整
3. 臨床エビデンス内部構造調整

### Step 5: Phase 4実施（40分）
1. メカニズム関連の構造変更
2. 相互作用カードの再構築
3. 安全性スケールのテーブル化

## 4. 期待される成果

### 段階別成果予測
| Phase | 実施前 | 実施後 | 増加数 | 累計使用箇所 |
|-------|--------|--------|--------|--------------|
| Phase 1 | 0箇所 | 3箇所 | +3 | 3箇所 |
| Phase 2 | 3箇所 | 10箇所 | +7 | 10箇所 |
| Phase 3 | 10箇所 | 18箇所 | +8 | 18箇所 |
| Phase 4 | 18箇所 | 25箇所+ | +7以上 | 25箇所以上 |

### 定性的改善
- **即効性**: Phase 1だけで3つの重要セクションが改善
- **段階的改善**: 各フェーズで視覚的向上を確認可能
- **最終形**: 他の薬剤ページと同等の品質達成

## 5. リスク管理

### Phase別リスク評価
- **Phase 1**: リスクなし（追加のみ）
- **Phase 2**: 低リスク（単純置換）
- **Phase 3**: 中リスク（構造調整必要）
- **Phase 4**: 高リスク（大幅な構造変更）

### ロールバック手順
```bash
cp _old_files/backup_20250717_2330/dotinurad.html docs/drugs/
```

## 6. 実施判断基準

### 本日の推奨実施範囲
- **必須**: Phase 1（即効性あり、リスクなし）
- **推奨**: Phase 2（低リスクで効果大）
- **任意**: Phase 3-4（時間と状況に応じて）

### 成功基準
1. **Phase 1成功**: 3セクションのスタイル適用確認
2. **Phase 2成功**: エラーなし、視覚的改善確認
3. **全体成功**: 25箇所以上のcomponents.css活用達成

## 7. 特記事項

dotinurad.htmlは固有クラスが最も多いが、すでに3つの重要なcomponents.cssクラスを使用している。これは設計時点でcomponents.cssを意識していた証拠であり、追加作業により大きな改善が期待できる。

特に、安全性スケールや薬剤比較カードなど、視覚的に重要な要素が多いため、標準化による品質向上効果は他の薬剤ページ以上に大きいと予想される。