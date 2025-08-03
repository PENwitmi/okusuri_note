# 漢方薬特集ページ構成案 - 風邪薬編・消化器薬編

**作成日時**: 2025-07-09 13:40

## 全体コンセプト

### ターゲット読者
1. **薬学生**: 国試対策・実務実習準備
2. **若手薬剤師**: 服薬指導スキル向上
3. **研修医**: 漢方処方の基礎学習
4. **一般の方**: セルフメディケーション

### デザイン方針
- モバイルファースト
- 視覚的に理解しやすい
- インタラクティブな学習体験
- 段階的な情報提示（Level 1-3）

---

## 特集1: 風邪に効く漢方薬完全ガイド

### ページタイトル・キャッチコピー
```
風邪に効く漢方薬 完全マスター
〜 葛根湯だけじゃない！症状と体質で選ぶ8つの処方 〜
```

### ヒーローセクション
```html
<section class="hero-section cold-kampo">
  <div class="hero-content">
    <h1>風邪の漢方薬、正しく選べていますか？</h1>
    <p class="lead">
      「風邪には葛根湯」だけでは不十分。<br>
      体質・症状・病期に応じた8つの処方を完全解説
    </p>
    <div class="hero-stats">
      <div class="stat">
        <span class="number">89%</span>
        <span class="label">の医師が漢方薬を処方</span>
      </div>
      <div class="stat">
        <span class="number">70%</span>
        <span class="label">の人が葛根湯しか知らない</span>
      </div>
    </div>
  </div>
</section>
```

### インタラクティブ診断ツール
```html
<section class="diagnostic-tool">
  <h2>あなたに合う風邪薬を診断</h2>
  <div class="question-flow">
    <!-- 質問1: 悪寒 vs 熱感 -->
    <!-- 質問2: 体力（虚実） -->
    <!-- 質問3: 特徴的症状 -->
    <!-- 結果: おすすめ処方表示 -->
  </div>
</section>
```

### 風邪の時期別フローチャート
```
初期（1-2日）
├─ 強い悪寒・無汗 → 麻黄湯
├─ 肩こり・頭痛 → 葛根湯
└─ 鼻水・くしゃみ → 小青竜湯

中期（3-7日）
├─ のどの痛み → 桔梗湯
├─ 胃腸症状 → 柴胡桂枝湯
└─ 乾いた咳 → 麦門冬湯

回復期（1週間以降）
├─ 虚弱者 → 参蘇飲
└─ 気分不良 → 香蘇散
```

### 8つの処方詳細カード
```html
<div class="kampo-cards-grid">
  <!-- 葛根湯カード -->
  <div class="kampo-card" data-level="popular">
    <div class="card-header">
      <h3>葛根湯（かっこんとう）</h3>
      <span class="popularity">処方数No.1</span>
    </div>
    <div class="card-body">
      <div class="indication">
        <h4>こんな時に</h4>
        <ul>
          <li>風邪の初期</li>
          <li>肩こり・頭痛</li>
          <li>悪寒がある</li>
        </ul>
      </div>
      <div class="key-point">
        <p>💡 汗をかいていない時期に使用</p>
      </div>
    </div>
    <button class="detail-btn">詳しく見る</button>
  </div>
  
  <!-- 他の7処方も同様に -->
</div>
```

### 症状別早見表
```html
<table class="symptom-matrix">
  <thead>
    <tr>
      <th>症状</th>
      <th>葛根湯</th>
      <th>麻黄湯</th>
      <th>小青竜湯</th>
      <th>桔梗湯</th>
      <th>他4処方...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>悪寒</td>
      <td>◎</td>
      <td>◎</td>
      <td>○</td>
      <td>-</td>
    </tr>
    <!-- 各症状について評価 -->
  </tbody>
</table>
```

### よくある間違い・注意点
```html
<section class="common-mistakes">
  <h2>⚠️ よくある間違い</h2>
  <div class="mistake-cards">
    <div class="mistake-card">
      <h3>❌ インフルエンザにも葛根湯</h3>
      <p>高熱時は麻黄湯の方が適切。葛根湯は軽症向け</p>
    </div>
    <div class="mistake-card">
      <h3>❌ 長期間飲み続ける</h3>
      <p>急性期の薬。1週間で改善なければ他剤検討</p>
    </div>
  </div>
</section>
```

### 服薬指導のポイント
```html
<section class="counseling-points">
  <h2>薬剤師のための服薬指導</h2>
  <div class="tabs">
    <button class="tab-btn active" data-tab="dosing">服用方法</button>
    <button class="tab-btn" data-tab="timing">タイミング</button>
    <button class="tab-btn" data-tab="caution">注意事項</button>
  </div>
  <div class="tab-content">
    <!-- 各タブの内容 -->
  </div>
</section>
```

---

## 特集2: お腹の不調に効く漢方薬ガイド

### ページタイトル・キャッチコピー
```
消化器症状の漢方治療 完全ガイド
〜 下痢・便秘・膨満感...症状別に選ぶ8つの名方 〜
```

### ヒーローセクション
```html
<section class="hero-section gi-kampo">
  <div class="hero-content">
    <h1>そのお腹の不調、漢方薬で改善できます</h1>
    <p class="lead">
      機能性ディスペプシア、IBS、慢性下痢...<br>
      西洋薬で改善しない症状にも効果的な8処方
    </p>
    <div class="hero-features">
      <div class="feature">
        <i class="icon-gentle"></i>
        <span>副作用が少ない</span>
      </div>
      <div class="feature">
        <i class="icon-holistic"></i>
        <span>体質から改善</span>
      </div>
      <div class="feature">
        <i class="icon-evidence"></i>
        <span>エビデンスあり</span>
      </div>
    </div>
  </div>
</section>
```

### 症状別セレクター
```html
<section class="symptom-selector">
  <h2>あなたの症状をクリック</h2>
  <div class="symptom-buttons">
    <button class="symptom-btn" data-symptom="diarrhea">
      <i class="icon-diarrhea"></i>
      <span>下痢</span>
    </button>
    <button class="symptom-btn" data-symptom="constipation">
      <i class="icon-constipation"></i>
      <span>便秘</span>
    </button>
    <button class="symptom-btn" data-symptom="bloating">
      <i class="icon-bloating"></i>
      <span>膨満感</span>
    </button>
    <button class="symptom-btn" data-symptom="nausea">
      <i class="icon-nausea"></i>
      <span>吐き気</span>
    </button>
    <button class="symptom-btn" data-symptom="appetite">
      <i class="icon-appetite"></i>
      <span>食欲不振</span>
    </button>
  </div>
  <div class="recommendation-area">
    <!-- 選択した症状に応じて処方を表示 -->
  </div>
</section>
```

### 8大処方の詳細解説
```html
<section class="major-prescriptions">
  <h2>消化器系漢方の8大処方</h2>
  
  <!-- 半夏瀉心湯 -->
  <div class="prescription-detail">
    <div class="prescription-header">
      <h3>半夏瀉心湯（はんげしゃしんとう）</h3>
      <div class="tags">
        <span class="tag">ストレス</span>
        <span class="tag">みぞおちのつかえ</span>
        <span class="tag">下痢</span>
      </div>
    </div>
    <div class="prescription-content">
      <div class="mechanism">
        <h4>なぜ効くの？</h4>
        <p>胃と腸の動きを整える「寒温並用」の処方...</p>
      </div>
      <div class="evidence">
        <h4>エビデンス</h4>
        <p>機能性ディスペプシアでRCT実施、有効率73%...</p>
      </div>
    </div>
  </div>
  
  <!-- 他の7処方も同様に -->
</section>
```

### 使い分けフローチャート
```html
<section class="selection-flowchart">
  <h2>処方選択フローチャート</h2>
  <div class="flowchart-container">
    <!-- SVGまたはCanvas要素でインタラクティブなフローチャート -->
  </div>
</section>
```

### 体質診断ツール
```html
<section class="constitution-check">
  <h2>あなたの体質をチェック</h2>
  <div class="check-form">
    <div class="question">
      <p>Q1. 普段の体調は？</p>
      <label><input type="radio" name="q1" value="weak"> 疲れやすい（虚証）</label>
      <label><input type="radio" name="q1" value="strong"> 体力充実（実証）</label>
    </div>
    <!-- 他の質問 -->
  </div>
  <button class="check-btn">診断する</button>
</section>
```

### 実例・ケーススタディ
```html
<section class="case-studies">
  <h2>実際の処方例</h2>
  <div class="case-cards">
    <div class="case-card">
      <div class="patient-info">
        <span class="age-gender">35歳男性</span>
        <span class="occupation">営業職</span>
      </div>
      <div class="symptoms">
        <h4>症状</h4>
        <p>ストレスで下痢と便秘を繰り返す</p>
      </div>
      <div class="prescription">
        <h4>処方</h4>
        <p>半夏瀉心湯 7.5g 分3 毎食前</p>
      </div>
      <div class="outcome">
        <h4>経過</h4>
        <p>2週間で症状安定、仕事のパフォーマンス向上</p>
      </div>
    </div>
    <!-- 他のケースも -->
  </div>
</section>
```

### FAQ セクション
```html
<section class="faq-section">
  <h2>よくある質問</h2>
  <div class="faq-accordion">
    <div class="faq-item">
      <button class="faq-question">
        Q: 西洋薬と併用できますか？
        <i class="icon-chevron"></i>
      </button>
      <div class="faq-answer">
        <p>多くの場合併用可能です。PPIと六君子湯の併用は...</p>
      </div>
    </div>
    <!-- 他の質問も -->
  </div>
</section>
```

### 副作用・注意事項
```html
<section class="safety-info">
  <h2>安全に使用するために</h2>
  <div class="warning-cards">
    <div class="warning-card">
      <i class="icon-alert"></i>
      <h3>甘草の重複に注意</h3>
      <p>複数の漢方薬を併用する場合...</p>
    </div>
  </div>
</section>
```

## 共通コンポーネント

### レベル別学習システム
```html
<div class="level-selector">
  <button class="level-btn active" data-level="1">
    <span class="level-icon">🎓</span>
    <span class="level-name">基礎編</span>
    <span class="level-desc">初学者向け</span>
  </button>
  <button class="level-btn" data-level="2">
    <span class="level-icon">💊</span>
    <span class="level-name">実践編</span>
    <span class="level-desc">医療者向け</span>
  </button>
  <button class="level-btn" data-level="3">
    <span class="level-icon">🔬</span>
    <span class="level-name">専門編</span>
    <span class="level-desc">詳細な知識</span>
  </button>
</div>
```

### 関連リンクセクション
```html
<section class="related-links">
  <h2>さらに学ぶ</h2>
  <div class="link-grid">
    <a href="/kampo-basics" class="link-card">
      <i class="icon-book"></i>
      <h3>漢方の基礎知識</h3>
      <p>証・気血水の考え方</p>
    </a>
    <a href="/herb-guide" class="link-card">
      <i class="icon-herb"></i>
      <h3>生薬図鑑</h3>
      <p>主要生薬の解説</p>
    </a>
  </div>
</section>
```

### モバイル最適化
- スワイプで処方カードを切り替え
- タップで詳細展開
- 症状別クイックアクセスメニュー
- オフライン対応（PWA）

## SEO・マーケティング戦略

### ターゲットキーワード
**風邪薬編**:
- 風邪 漢方
- 葛根湯 効果
- インフルエンザ 麻黄湯
- 風邪薬 選び方

**消化器薬編**:
- お腹 漢方
- 下痢 漢方薬
- 便秘 大建中湯
- IBS 半夏瀉心湯

### ソーシャルシェア最適化
- OGP画像の設定
- Twitterカード対応
- 診断結果のシェア機能
- LINEでの共有ボタン

## まとめ

これらの特集ページは、単なる情報提供にとどまらず、インタラクティブな診断ツールや症状別セレクターを通じて、ユーザーが自分に合った漢方薬を見つけられる実用的なコンテンツとなっている。

医療者向けの専門情報と一般向けの分かりやすい解説を両立させ、エビデンスに基づいた信頼できる情報源として、漢方薬の適正使用推進に貢献することを目指している。