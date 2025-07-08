# 03-NEW_FEATURE_SECTION_DESIGN.md - 新特集ページセクション設計

**作成日**: 2025-07-08  
**設計対象**: 特集ページセクション（#features）  
**デザイン方針**: 医学的価値・実用性重視

---

## 🎯 デザインコンセプト

### 基本方針
1. **医学的専門性**: 科学的根拠に基づくコンテンツ
2. **実務直結**: 医療従事者の日常業務に活用可能
3. **視覚的階層**: 重要度に応じた明確なビジュアル差別化
4. **アクセシビリティ**: WCAG AAA準拠の継続

### ターゲットユーザー
- 薬学生（上級生）
- 研修医・レジデント
- 薬剤師（病院・薬局）
- 看護師・医療従事者

---

## 📐 セクション構造設計

### HTML構造案
```html
<section id="features" class="features-section">
    <div class="section-container">
        <h2 class="section-title">特集ページ</h2>
        <p class="section-description">
            最新ガイドライン・臨床エビデンスに基づく、実践的な薬物治療の特集コンテンツ
        </p>
        
        <div class="features-grid">
            <!-- 優先度1: 心不全治療特集 -->
            <div class="feature-card feature-priority-high" data-category="cardiovascular">
                <div class="feature-badge">2025最新</div>
                <div class="feature-icon">🫀</div>
                <h3 class="feature-title">心不全治療の新展開</h3>
                <h4 class="feature-subtitle">HFpEF vs HFrEF - パラダイムシフト</h4>
                <p class="feature-description">
                    SGLT2阻害薬がもたらした治療革命。EMPEROR-Preserved・DELIVER試験の衝撃と実臨床への応用
                </p>
                <div class="feature-highlights">
                    <span class="highlight-item">📊 最新ガイドライン</span>
                    <span class="highlight-item">💊 新規適応薬</span>
                    <span class="highlight-item">🔬 臨床試験解説</span>
                </div>
                <a href="features/heart-failure-2025.html" class="feature-link">
                    特集を読む
                    <span class="link-arrow">→</span>
                </a>
            </div>

            <!-- 優先度2: 安全性情報特集 -->
            <div class="feature-card" data-category="safety">
                <div class="feature-icon">⚠️</div>
                <h3 class="feature-title">医薬品安全性情報</h3>
                <h4 class="feature-subtitle">イエローレター・ブルーレター完全ガイド</h4>
                <p class="feature-description">
                    重要な安全性情報の読み解き方と実臨床での対応。最新の注意喚起情報を網羅
                </p>
                <div class="feature-highlights">
                    <span class="highlight-item">🔴 イエローレター</span>
                    <span class="highlight-item">🔵 ブルーレター</span>
                    <span class="highlight-item">📋 対応チェックリスト</span>
                </div>
                <a href="features/drug-safety-guide.html" class="feature-link">
                    特集を読む
                    <span class="link-arrow">→</span>
                </a>
            </div>

            <!-- 優先度3: MR拮抗薬特集 -->
            <div class="feature-card" data-category="cardiovascular">
                <div class="feature-icon">💊</div>
                <h3 class="feature-title">MR拮抗薬の進化</h3>
                <h4 class="feature-subtitle">第4世代フィネレノンまでの軌跡</h4>
                <p class="feature-description">
                    「カリウム保持性利尿薬」から「MR拮抗薬」へ。4世代の薬剤の使い分けと最新知見
                </p>
                <div class="feature-highlights">
                    <span class="highlight-item">🧬 作用機序</span>
                    <span class="highlight-item">📈 世代別比較</span>
                    <span class="highlight-item">🎯 適応拡大</span>
                </div>
                <a href="features/mr-antagonists-evolution.html" class="feature-link">
                    特集を読む
                    <span class="link-arrow">→</span>
                </a>
            </div>

            <!-- 優先度4: 吸入薬特集 -->
            <div class="feature-card" data-category="respiratory">
                <div class="feature-icon">🫁</div>
                <h3 class="feature-title">吸入薬完全マスター</h3>
                <h4 class="feature-subtitle">デバイス特性と適応別選択</h4>
                <p class="feature-description">
                    シムビコート・テリルジー・レルベア徹底比較。吸入指導のポイントも詳解
                </p>
                <div class="feature-highlights">
                    <span class="highlight-item">🔧 デバイス比較</span>
                    <span class="highlight-item">💨 吸入手技</span>
                    <span class="highlight-item">📊 薬剤選択</span>
                </div>
                <a href="features/inhaler-complete-guide.html" class="feature-link">
                    特集を読む
                    <span class="link-arrow">→</span>
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 🎨 ビジュアルデザイン

### カードデザイン要素

#### 基本構造
1. **優先度表示**: 最重要特集にバッジ付与
2. **カテゴリアイコン**: 視覚的識別性向上
3. **2段階タイトル**: 主題と副題で情報階層明確化
4. **ハイライト表示**: 3つの主要ポイント
5. **CTAボタン**: 明確なアクション誘導

#### カラースキーム
```css
/* カテゴリ別配色 */
[data-category="cardiovascular"] { --feature-accent: #e74c3c; }
[data-category="safety"] { --feature-accent: #f39c12; }
[data-category="respiratory"] { --feature-accent: #3498db; }

/* 優先度表示 */
.feature-priority-high {
    border: 2px solid var(--warning-color);
    box-shadow: 0 0 20px rgba(243, 156, 18, 0.1);
}
```

#### インタラクション
- ホバー時: カード全体が浮き上がる（translateY(-6px)）
- フォーカス時: 明確なアウトライン表示
- クリック領域: カード全体をクリッカブルに

---

## 📏 レイアウト設計

### グリッドシステム
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}
```

### レスポンシブ対応
- **デスクトップ** (1200px+): 3列表示
- **タブレット** (768px-1199px): 2列表示  
- **モバイル** (-767px): 1列表示

### カードサイズ
- 最小幅: 340px（コンテンツ可読性確保）
- 最大幅: 制限なし（グリッドに従う）
- 高さ: コンテンツに応じて可変

---

## 🔤 タイポグラフィ

### 階層構造
```css
.feature-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
}

.feature-subtitle {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-base);
}

.feature-description {
    font-size: var(--font-size-base);
    line-height: 1.7;
    color: var(--text-secondary);
}
```

---

## 🎯 情報設計

### 各カードの情報要素
1. **アイコン**: 即座の視覚的識別
2. **主題**: 特集の核心テーマ
3. **副題**: 具体的な内容示唆
4. **説明文**: 60-80文字での価値提案
5. **ハイライト**: 3つの主要コンテンツ
6. **CTA**: 明確な次のアクション

### 優先順位の視覚化
- **最優先**: バッジ付き、ボーダー強調
- **通常**: 標準デザイン
- **将来追加**: グレーアウト表示（実装時）

---

## 🔧 実装上の考慮事項

### アクセシビリティ
- セマンティックHTML使用
- 適切なARIA属性付与
- キーボードナビゲーション対応
- スクリーンリーダー最適化

### パフォーマンス
- アイコンは絵文字使用（追加リソース不要）
- CSSアニメーションは軽量に
- 遅延読み込み不要（初期4カードのみ）

### 拡張性
- 新規特集追加時の一貫性確保
- カテゴリ追加への対応
- 多言語対応の将来性

---

## 📊 既存デザインとの比較

### 採用する要素
- **category-card**: 中央揃えレイアウト
- **story-card**: 説明文の配置
- **diff-card**: ハイライト表示の概念

### 新規要素
- 2段階タイトル構造
- 優先度バッジ
- 3点ハイライト表示
- カテゴリ別アクセントカラー

---

**次のステップ**: 04-CARD_DESIGN_PROPOSAL.mdでカードデザインの詳細提案