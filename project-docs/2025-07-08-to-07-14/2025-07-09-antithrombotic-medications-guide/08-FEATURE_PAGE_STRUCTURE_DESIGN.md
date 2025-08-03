# 抗血栓薬特集ページ構造設計

## ページコンセプト

### タイトル案
「抗血栓薬完全マスター：血を固まらせない薬の使い分け」

### キャッチコピー
「動脈には抗血小板薬、静脈には抗凝固薬ーなぜ？がわかれば選び方がわかる」

### ターゲット
- 薬学部4-6年生
- 実習中の薬学生
- 抗血栓薬の全体像を理解したい医療従事者

## ページ構造

### 1. ヒーローセクション

```html
<section class="hero-section">
  <h1>抗血栓薬完全マスター</h1>
  <p class="subtitle">血を固まらせない薬の使い分け</p>
  
  <div class="key-visual">
    <!-- 動脈血栓と静脈血栓のビジュアル比較 -->
    <div class="thrombus-comparison">
      <div class="arterial">
        <img src="white-thrombus.svg" />
        <p>白色血栓（動脈）</p>
      </div>
      <div class="venous">
        <img src="red-thrombus.svg" />
        <p>赤色血栓（静脈）</p>
      </div>
    </div>
  </div>
  
  <div class="quick-stats">
    <div class="stat">
      <span class="number">2</span>
      <span class="label">大カテゴリー</span>
    </div>
    <div class="stat">
      <span class="number">15+</span>
      <span class="label">主要薬剤</span>
    </div>
    <div class="stat">
      <span class="number">5</span>
      <span class="label">重要疾患</span>
    </div>
  </div>
</section>
```

### 2. なぜ2種類必要？セクション

```html
<section class="why-two-types">
  <h2>🤔 なぜ抗血小板薬と抗凝固薬の2種類が必要？</h2>
  
  <div class="interactive-comparison">
    <div class="blood-flow-simulator">
      <!-- 動脈と静脈の血流速度の違いをアニメーション -->
    </div>
    
    <div class="mechanism-cards">
      <div class="card arterial-mechanism">
        <h3>動脈血栓の形成</h3>
        <ul>
          <li>高速血流（ずり応力高い）</li>
          <li>血小板が主役</li>
          <li>内皮障害がトリガー</li>
        </ul>
        <p class="solution">→ 抗血小板薬で対応</p>
      </div>
      
      <div class="card venous-mechanism">
        <h3>静脈血栓の形成</h3>
        <ul>
          <li>低速血流（うっ滞）</li>
          <li>凝固因子が主役</li>
          <li>フィブリン網形成</li>
        </ul>
        <p class="solution">→ 抗凝固薬で対応</p>
      </div>
    </div>
  </div>
</section>
```

### 3. 薬剤一覧インタラクティブセクション

```html
<section class="drug-explorer">
  <h2>💊 抗血栓薬エクスプローラー</h2>
  
  <div class="filter-buttons">
    <button class="active" data-filter="all">すべて</button>
    <button data-filter="antiplatelet">抗血小板薬</button>
    <button data-filter="anticoagulant">抗凝固薬</button>
  </div>
  
  <div class="drug-grid">
    <!-- 抗血小板薬 -->
    <div class="drug-card antiplatelet" data-drug="aspirin">
      <div class="drug-header">
        <h3>アスピリン</h3>
        <span class="category-badge">抗血小板薬</span>
      </div>
      <div class="drug-info">
        <p class="mechanism">COX阻害</p>
        <p class="key-point">最も歴史ある抗血小板薬</p>
      </div>
      <div class="drug-details" style="display:none;">
        <!-- 詳細情報 -->
      </div>
    </div>
    
    <!-- 抗凝固薬 -->
    <div class="drug-card anticoagulant doac" data-drug="apixaban">
      <div class="drug-header">
        <h3>アピキサバン</h3>
        <span class="category-badge">DOAC</span>
      </div>
      <div class="drug-info">
        <p class="mechanism">第Xa因子阻害</p>
        <p class="key-point">腎機能低下例でも使いやすい</p>
      </div>
    </div>
    
    <!-- 他の薬剤カード -->
  </div>
</section>
```

### 4. 疾患別薬剤選択フローチャート

```html
<section class="clinical-selection">
  <h2>🏥 疾患別の薬剤選択</h2>
  
  <div class="disease-tabs">
    <button class="tab-button active" data-disease="af">心房細動</button>
    <button class="tab-button" data-disease="acs">急性冠症候群</button>
    <button class="tab-button" data-disease="vte">静脈血栓塞栓症</button>
    <button class="tab-button" data-disease="pad">末梢動脈疾患</button>
  </div>
  
  <div class="selection-flowchart" id="af-flowchart">
    <div class="flowchart-container">
      <!-- SVGまたはHTML/CSSでフローチャート実装 -->
      <div class="decision-node">
        <p>CHA2DS2-VAScスコア評価</p>
        <div class="branches">
          <div class="branch">
            <p>男性≥2点、女性≥3点</p>
            <div class="recommendation">DOAC推奨</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. インタラクティブ症例クイズ

```html
<section class="case-quiz">
  <h2>🎯 症例で学ぶ薬剤選択</h2>
  
  <div class="case-container">
    <div class="case-presentation">
      <h3>症例1</h3>
      <p>75歳女性、非弁膜症性心房細動、CrCl 35mL/min、体重48kg</p>
      <p>どの抗凝固薬を選択しますか？</p>
    </div>
    
    <div class="quiz-options">
      <button class="option" data-answer="wrong">
        ダビガトラン 150mg×2
      </button>
      <button class="option" data-answer="correct">
        アピキサバン 2.5mg×2
      </button>
      <button class="option" data-answer="acceptable">
        ワルファリン（PT-INR 2.0-3.0）
      </button>
    </div>
    
    <div class="explanation" style="display:none;">
      <p class="correct-answer">正解：アピキサバン 2.5mg×2</p>
      <p>理由：腎機能低下＋高齢＋低体重の3条件を満たすため</p>
    </div>
  </div>
</section>
```

### 6. DOACの時代 - 比較表

```html
<section class="doac-era">
  <h2>🆕 DOAC時代の抗凝固療法</h2>
  
  <div class="doac-timeline">
    <div class="timeline-item">
      <span class="year">1954</span>
      <p>ワルファリン承認</p>
    </div>
    <div class="timeline-item">
      <span class="year">2011</span>
      <p>ダビガトラン（日本初のDOAC）</p>
    </div>
    <div class="timeline-item current">
      <span class="year">2025</span>
      <p>DOACが第一選択の時代</p>
    </div>
  </div>
  
  <div class="doac-comparison-table">
    <table class="responsive-table">
      <thead>
        <tr>
          <th>項目</th>
          <th>ワルファリン</th>
          <th>ダビガトラン</th>
          <th>リバーロキサバン</th>
          <th>アピキサバン</th>
          <th>エドキサバン</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>標的</td>
          <td>ビタミンK</td>
          <td>トロンビン</td>
          <td>第Xa因子</td>
          <td>第Xa因子</td>
          <td>第Xa因子</td>
        </tr>
        <!-- 他の比較項目 -->
      </tbody>
    </table>
  </div>
</section>
```

### 7. 出血リスク評価ツール

```html
<section class="bleeding-risk-calculator">
  <h2>⚠️ 出血リスクを評価しよう</h2>
  
  <div class="has-bled-calculator">
    <h3>HAS-BLEDスコア計算</h3>
    <form id="hasbled-form">
      <label>
        <input type="checkbox" value="1" name="hypertension">
        高血圧（収縮期血圧>160mmHg）
      </label>
      <label>
        <input type="checkbox" value="1" name="renal">
        腎機能異常（Cr≥2.3mg/dL）
      </label>
      <!-- 他の項目 -->
    </form>
    
    <div class="score-result">
      <p>合計スコア: <span id="total-score">0</span>点</p>
      <p class="risk-level">出血リスク: <span id="risk-level">低</span></p>
    </div>
  </div>
</section>
```

### 8. まとめセクション

```html
<section class="summary">
  <h2>📝 押さえておきたいポイント</h2>
  
  <div class="key-points">
    <div class="point-card">
      <div class="point-number">1</div>
      <h3>血栓の種類で薬を選ぶ</h3>
      <p>動脈血栓（白色）→抗血小板薬<br>静脈血栓（赤色）→抗凝固薬</p>
    </div>
    
    <div class="point-card">
      <div class="point-number">2</div>
      <h3>DOACファースト時代</h3>
      <p>非弁膜症性AFではDOACが第一選択<br>機械弁はワルファリンのみ</p>
    </div>
    
    <div class="point-card">
      <div class="point-number">3</div>
      <h3>個別化が重要</h3>
      <p>腎機能・併用薬・出血リスクを<br>総合的に評価して選択</p>
    </div>
  </div>
</section>
```

### 9. 関連リンクセクション

```html
<section class="related-links">
  <h2>🔗 さらに学ぶ</h2>
  
  <div class="link-cards">
    <a href="../drugs-v3/aspirin-v3.html" class="link-card">
      <h3>アスピリン</h3>
      <p>4000年の歴史を持つ薬</p>
    </a>
    
    <a href="../drugs-v3/warfarin-v3.html" class="link-card">
      <h3>ワルファリン</h3>
      <p>殺鼠剤から救命薬へ</p>
    </a>
    
    <a href="../features/cardiovascular-orchestra.html" class="link-card">
      <h3>循環器薬物治療のオーケストラ</h3>
      <p>心血管薬の総合的理解</p>
    </a>
  </div>
</section>
```

## インタラクティブ要素

### 1. 薬剤選択シミュレーター
- 患者条件を入力
- 推奨薬剤と用量を表示
- 選択理由の解説

### 2. 血流アニメーション
- 動脈と静脈の血流速度の違い
- 血栓形成過程の可視化

### 3. クイズ機能
- 症例ベースの問題
- 即座のフィードバック
- 学習進捗の記録

## ビジュアルデザイン

### カラーパレット
- 抗血小板薬：オレンジ系（#FF6B35）
- 抗凝固薬：ブルー系（#4ECDC4）
- DOAC：パープル系（#6C5CE7）
- 警告・出血：レッド系（#FF6B6B）

### アイコン
- 血小板：円形の細胞アイコン
- 凝固因子：カスケードアイコン
- 出血リスク：警告アイコン
- モニタリング：グラフアイコン

## レスポンシブ対応

### モバイル最適化
- 薬剤カードの縦並び
- タブ式ナビゲーション
- タッチ対応のインタラクション

### デスクトップ活用
- 横並び比較表示
- ホバーエフェクト
- 詳細情報の展開

## 実装上の注意点

1. **パフォーマンス**
   - 画像の遅延読み込み
   - CSSアニメーションの最適化

2. **アクセシビリティ**
   - キーボードナビゲーション
   - スクリーンリーダー対応
   - 色覚多様性への配慮

3. **学習効果**
   - プログレッシブディスクロージャー
   - 理解度に応じた情報提示

---

**設計コンセプト**: 「見て、触って、理解する」- インタラクティブな要素を通じて、抗血栓薬の複雑な使い分けを直感的に理解できる特集ページを目指す。