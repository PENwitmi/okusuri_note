# Ver2 HTML包括的コンテンツ復元計画書（CSS準拠版）

**作成日時**: 2025-07-04 04:25  
**作成者**: CEO  
**目的**: 既存CSS資産を最大活用した価値あるコンテンツの復元計画  
**バージョン**: 4.0（CSS完全準拠版）

## 📋 エグゼクティブサマリー

過去のCSS統合プロジェクトで作成された3つのCSSファイル（合計2,011行）には、既に豊富なクラスが定義されています。本計画では、これらの既存クラスを最大限活用し、必要最小限の計画的な追加のみで、失われたコンテンツを復元します。

## 🎨 利用可能なCSS資産の完全把握

### 1. style.css（1,191行）- 基本定義
**主要クラス群**：
- **構造系**: `.container`, `.section-container`
- **ヘッダー系**: `.header`, `.logo`, `.tagline`, `.nav-link`
- **ヒーロー系**: `.hero`, `.hero-stats`, `.stat-item`, `.cta-button`
- **カード系**: 
  - `.drug-card`, `.drug-name`, `.drug-description`, `.drug-features`
  - `.story-card`, `.story-title`, `.story-description`, `.story-meta`
  - `.diff-card`, `.diff-title`, `.diff-description`
- **グリッド系**: `.drugs-grid`, `.categories-grid`, `.stories-grid`
- **フッター系**: `.footer`, `.footer-links`, `.footer-stats`

### 2. drug-page-v2.css（370行）- 薬剤ページ専用
**29の専用クラス**：
- **薬剤情報系**: `.drug-header`, `.brand-name`, `.generic-name`, `.drug-classification`
- **コンテンツ系**: `.quick-summary`, `.quote-box`, `.specialist-perspective`
- **インパクト系**: `.impact-grid`, `.impact-item`
- **レベル系**: `.level-1-content`, `.level-2-content`, `.level-3-content`
- **機能系**: `.indications`, `.adverse-effects`, `.statistics`, `.testimonial`

### 3. responsive-unified.css（450行）- レスポンシブ調整
- モバイルファースト設計
- タッチフレンドリー最適化
- ブレークポイント別調整

## 🔄 元HTML要素と既存CSSクラスのマッピング

### 1. 複雑な要素の処理方法

#### A. 医師・患者の証言
**元HTML**:
```html
<div class="doctor-voice emotion-moved">
    <blockquote>証言内容</blockquote>
    <cite>- 医師名</cite>
</div>
```

**既存クラスでの実装**:
```html
<!-- Level 1: 短縮版 -->
<div class="quote-box">
    <p>「最も印象的な一文」</p>
    <cite>- 医師名</cite>
</div>

<!-- Level 3: 完全版 -->
<div class="specialist-perspective">
    <div class="testimonial">
        <blockquote class="quote-box">
            完全な証言内容
        </blockquote>
        <cite>- 大学病院 糖尿病内分泌科医</cite>
    </div>
</div>
```

#### B. タイムライン構造
**元HTML**:
```html
<div class="timeline-detailed">
    <div class="timeline-detailed-item">
        <!-- 複雑な構造 -->
    </div>
</div>
```

**既存クラスでの実装**:
```html
<!-- Level 1: story-cardの流用 -->
<div class="story-meta">
    <span class="story-year">1957年</span>
    <span class="story-impact">フランスで承認</span>
</div>

<!-- Level 3: impact-gridとstory-cardの組み合わせ -->
<div class="impact-grid">
    <div class="story-card">
        <div class="story-year">1957-2001年</div>
        <div class="story-title">日本の44年遅延</div>
        <div class="story-description">
            詳細な歴史的背景...
        </div>
    </div>
</div>
```

#### C. 統計データ表示
**元HTML**:
```html
<div class="drug-overview-stats">
    <div class="stat-item">
        <span class="stat-label">承認遅延</span>
        <span class="stat-value highlight">44年</span>
    </div>
</div>
```

**既存クラスでの実装**:
```html
<!-- hero-statsクラスをそのまま活用 -->
<div class="statistics"> <!-- drug-page-v2.cssから -->
    <div class="hero-stats"> <!-- style.cssから -->
        <div class="stat-item">
            <span class="stat-number">44年</span>
            <span class="stat-label">承認遅延</span>
        </div>
    </div>
</div>
```

#### D. 比較表・テーブル
**元HTML**:
```html
<table class="clinical-table">
    <!-- 複雑なテーブル -->
</table>
```

**既存クラスでの実装**:
```html
<div class="responsive-table"> <!-- responsive-unified.cssから -->
    <table class="drug-table-border"> <!-- style.cssから -->
        <tr>
            <td class="drug-table-cell drug-emphasis">適応疾患</td>
            <td class="drug-table-cell">目標INR</td>
        </tr>
    </table>
</div>
```

### 2. 計画的なクラス追加戦略

#### 追加が必要な最小限のクラス（10個以内）

1. **`.timeline-container`** - タイムライン全体のラッパー
   ```css
   .timeline-container {
       position: relative;
       padding-left: 2rem;
   }
   ```

2. **`.timeline-item`** - 個別のタイムライン要素
   ```css
   .timeline-item {
       position: relative;
       padding-bottom: 2rem;
       border-left: 3px solid var(--pharma-primary);
   }
   ```

3. **`.historical-section`** - 歴史的物語セクション
   ```css
   .historical-section {
       background: var(--bg-accent);
       padding: var(--spacing-2xl);
       border-radius: 12px;
   }
   ```

4. **`.drug-comparison`** - 薬剤比較用
   ```css
   .drug-comparison {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
       gap: var(--spacing-lg);
   }
   ```

5. **`.emphasis-box`** - 重要ポイント強調
   ```css
   .emphasis-box {
       background: linear-gradient(135deg, var(--pharma-primary-subtle), var(--bg-light));
       padding: var(--spacing-lg);
       border-radius: 8px;
       border-left: 4px solid var(--pharma-primary);
   }
   ```

## 📐 実装ガイドライン

### 1. 既存クラスの優先順位

**第1優先**: 完全一致するクラスを使用
- `.quote-box` → 引用・証言
- `.impact-grid` → グリッド表示
- `.story-card` → 歴史的要素

**第2優先**: 組み合わせで表現
- `.story-card` + `.specialist-perspective` → 詳細な歴史物語
- `.hero-stats` + `.statistics` → 統計表示

**第3優先**: 既存クラスの拡張
- `.card` クラスに修飾子を追加（`.card.historical`等）

**最終手段**: 新規クラスの計画的追加
- 汎用性の高いものに限定
- 他の薬剤でも使い回せる設計

### 2. レベル別コンテンツ配置（既存クラス活用版）

| コンテンツ種別 | Level 1 | Level 2 | Level 3 |
|--------------|---------|---------|---------|
| 医師証言 | `.quote-box`（1個） | `.testimonial`（2-3個） | `.specialist-perspective` + `.testimonial` |
| 歴史物語 | `.story-meta`（簡潔） | `.story-card`（中程度） | `.story-card` + 新`.historical-section` |
| 統計データ | `.stat-item`（3個） | `.statistics`（5個） | `.impact-grid` + `.statistics` |
| タイムライン | `.story-year`のみ | `.story-meta`組み合わせ | 新`.timeline-container` |
| 比較表 | テキストで表現 | `.drug-table-border`（簡易） | `.responsive-table`（完全） |
| 処方パターン | `.indications__list` | `.prescribing-patterns` | `.combination-drugs` |

### 3. 具体的な実装例（metformin）

```html
<!-- Level 1: 既存クラスのみで実装 -->
<section class="level-1-content">
    <div class="container">
        <h2>レベル1：薬学生向け基本情報</h2>
        
        <!-- 感動的導入: hero系クラスの流用 -->
        <div class="hero-container" style="background: var(--bg-accent); color: var(--text-primary);">
            <h3 class="hero-title" style="font-size: var(--font-size-2xl);">
                なぜメトホルミンが「最も偉大な薬」なのか
            </h3>
            <div class="quote-box">
                <p>「この地味な白い錠剤が、実は20世紀最大の薬学的発見の一つ」</p>
            </div>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">67年</span>
                    <span class="stat-label">第一選択薬</span>
                </div>
            </div>
        </div>
        
        <!-- 既存のdrug-header -->
        <div class="drug-header">
            <!-- 内容 -->
        </div>
    </div>
</section>

<!-- Level 3: 既存クラス＋最小限の新規クラス -->
<section class="level-3-content">
    <div class="container">
        <h2>レベル3：研修中向け高度情報</h2>
        
        <!-- 歴史物語: story-card + 新historical-section -->
        <div class="historical-section">
            <h3>📚 メトホルミン67年の壮大な物語</h3>
            
            <!-- タイムライン: 新timeline-container + 既存クラス -->
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="story-year">1970年代</div>
                    <div class="story-card">
                        <h4 class="story-title">フェンホルミン事件のトラウマ</h4>
                        <div class="story-description">
                            詳細な説明...
                        </div>
                        
                        <!-- 薬剤比較: 新drug-comparison + 既存card -->
                        <div class="drug-comparison">
                            <div class="card">
                                <h5>フェンホルミン</h5>
                                <p class="drug-emphasis">最も危険</p>
                            </div>
                            <div class="card">
                                <h5>メトホルミン</h5>
                                <p class="drug-emphasis">1000倍安全</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 医師証言: 既存クラスの組み合わせ -->
        <div class="specialist-perspective">
            <h3>現場からの声</h3>
            <div class="testimonial">
                <blockquote class="quote-box">
                    「70代の患者さんは...」
                </blockquote>
                <cite>- 大学病院 糖尿病内分泌科医</cite>
            </div>
        </div>
    </div>
</section>
```

## 🔍 品質保証チェックリスト

### CSS活用の確認
- [ ] 既存クラスを最大限活用しているか
- [ ] 新規クラスは10個以内か
- [ ] 新規クラスは汎用的で再利用可能か
- [ ] style.cssの豊富なクラスを見落としていないか

### レスポンシブ対応
- [ ] responsive-unified.cssの設定が適用されているか
- [ ] モバイルでの表示が適切か
- [ ] タッチ操作が快適か

### パフォーマンス
- [ ] 不要なインラインスタイルを避けているか
- [ ] CSSの重複を最小化しているか

## 📊 期待される成果

### 1. CSS効率性
- 既存2,011行のCSSの80%以上を活用
- 新規追加は200行以内（10%未満）
- 保守性の維持

### 2. コンテンツ価値
- 89%の感動的要素の復元
- 95%の医師証言の復活
- PharmaDx独自価値の再確立

### 3. 技術的品質
- 過去のCSS統合プロジェクトの成果を無駄にしない
- 計画的で持続可能な実装
- 将来の拡張性確保

## 🎯 結論

style.cssには既に豊富なクラスが定義されており、`.story-card`、`.quote-box`、`.hero-stats`、`.impact-grid`など、元HTMLの特殊要素を表現できるクラスが多数存在します。これらを創造的に組み合わせることで、新規クラスの追加を最小限に抑えながら、失われたコンテンツを効果的に復元できます。

過去のCSS統合プロジェクトの成果を最大限活用し、計画的な実装により、PharmaDxの価値を再び輝かせます。