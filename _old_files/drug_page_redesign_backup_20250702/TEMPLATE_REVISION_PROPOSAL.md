# テンプレート改訂提案 - 「なぜ？」に答える設計へ
**作成日**: 2025-07-01 23:15  
**作成者**: CEO  
**目的**: 薬学生の実際のニーズに基づくテンプレートの根本的見直し

---

## 🔄 現行テンプレートの問題点

### 形式的すぎる構成
- ✗ 基本情報の羅列
- ✗ 「粉砕可否」のような表面的情報
- ✗ 暗記を前提とした設計

### 薬学生の疑問に答えていない
- ✗ 「なぜこの薬が必要？」への回答なし
- ✗ 実際の使い分けが不明確
- ✗ 患者対応の具体例が不足

---

## 🎯 新しいテンプレート構成案

### レベル1：薬学生の「なぜ？」に答える（ファーストビュー）

#### 1-1. この薬を5秒で理解する
```html
<section class="drug-essence">
    <h1 class="drug-name">メトグルコ（メトホルミン）</h1>
    <p class="one-liner">
        「世界で最も使われる糖尿病薬 - 体重を増やさず、心臓も守る」
    </p>
    <div class="key-facts">
        <span class="usage-rank">#1 処方数</span>
        <span class="safety">67年の実績</span>
        <span class="price">1日10円</span>
    </div>
</section>
```

#### 1-2. 薬学生の5大疑問
```html
<section class="student-questions">
    <h2>実習で必ず聞かれる5つの質問</h2>
    
    <div class="qa-card">
        <h3>Q1: なぜメトホルミンが第一選択？</h3>
        <div class="answer">
            <p class="simple">体重↓ 低血糖✗ 心臓◎ 安い</p>
            <details class="detailed">
                <summary>詳しく知る</summary>
                <p>唯一体重を増やさない古典的薬剤で、単独使用では低血糖を起こさず、
                心血管イベントを減らす確実なエビデンスがある</p>
            </details>
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Q2: メトホルミン製剤の違いは？【要確認】</h3>
        <div class="important-notice">
            ⚠️ 以下の情報は必ず添付文書で確認してください
        </div>
        <div class="product-list">
            <h4>日本で使用可能な製剤</h4>
            <ul>
                <li>メトグルコ錠（250mg、500mg）</li>
                <li>グリコラン錠（250mg）</li>
                <li>各種ジェネリック医薬品</li>
            </ul>
            <p class="note">
                ※ 各製剤で最大用量が異なる可能性があります<br>
                ※ すべて即放性製剤です（日本には徐放製剤はありません）
            </p>
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Q3: 患者「下痢がひどい」→どう答える？</h3>
        <div class="response-guide">
            <p class="model-answer">
                「最初の2週間は下痢が起きやすいですが、多くの方は自然に改善します。
                食事中に飲むと楽になりますよ。どうしても辛い場合は、
                ゆっくり効くMT錠に変更することもできます」
            </p>
        </div>
    </div>
    
    <div class="qa-card">
        <h3>Q4: 造影剤との相互作用、なぜ？いつまで？</h3>
        <div class="mechanism-flow">
            <span>造影剤</span> → 
            <span>腎障害リスク</span> → 
            <span>メトホルミン蓄積</span> → 
            <span>乳酸アシドーシス</span>
        </div>
        <p class="practical-guide">
            検査48時間前から中止 → 検査 → 48時間後に腎機能確認 → 再開
        </p>
    </div>
    
    <div class="qa-card">
        <h3>Q5: 乳酸アシドーシス、本当に起こる？</h3>
        <div class="risk-perspective">
            <p>発生率: 10万人に3-10人（超レア）</p>
            <p>でも起きたら: 致死率30-50%（超危険）</p>
            <div class="risk-factors">
                <h4>こんな時は要注意</h4>
                <ul>
                    <li>腎機能↓（eGFR<30は禁忌）</li>
                    <li>脱水（下痢、発熱）</li>
                    <li>食事摂取不良</li>
                    <li>大量飲酒</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

#### 1-3. 実習サバイバルキット
```html
<section class="practical-survival">
    <h2>実習で絶対に覚える実践知識</h2>
    
    <div class="must-check">
        <h3>🔍 処方監査でチェック</h3>
        <ul>
            <li>腎機能（eGFR）確認 → <30なら疑義照会</li>
            <li>造影検査の予定確認</li>
            <li>アルコール多飲歴</li>
        </ul>
    </div>
    
    <div class="common-scenarios">
        <h3>🎭 よくあるシナリオ</h3>
        
        <div class="scenario">
            <h4>ケース1: 初回処方</h4>
            <p>必ず伝える: 「最初は下痢が起きやすいですが、続けることが大切です」</p>
        </div>
        
        <div class="scenario">
            <h4>ケース2: 「薬が効いてない」</h4>
            <p>確認する: 服薬タイミング、食事療法、他剤追加の可能性</p>
        </div>
        
        <div class="scenario">
            <h4>ケース3: 高齢者</h4>
            <p>注意: 腎機能低下、脱水リスク、用量調整の必要性</p>
        </div>
    </div>
    
    <div class="mistake-prevention">
        <h3>⚠️ 間違えやすいポイント</h3>
        <table>
            <tr>
                <td>❌</td>
                <td>「食前に飲む」</td>
                <td>→</td>
                <td>✅ 食事中または食直後</td>
            </tr>
            <tr>
                <td>❌</td>
                <td>「低血糖に注意」</td>
                <td>→</td>
                <td>✅ 単独では低血糖を起こさない</td>
            </tr>
            <tr>
                <td>❌</td>
                <td>「新しい薬」</td>
                <td>→</td>
                <td>✅ 1957年から使用</td>
            </tr>
        </table>
    </div>
</section>
```

### レベル2：臨床での使いこなし（中級）

#### 2-1. 他剤との使い分けマスター
```html
<section class="clinical-mastery">
    <h2>糖尿病薬の使い分けフローチャート</h2>
    
    <div class="decision-tree">
        <!-- インタラクティブなフローチャート -->
        <div class="start">2型糖尿病診断</div>
        ↓
        <div class="decision">腎機能正常？</div>
        → Yes: メトホルミン第一選択
        → No: DPP-4阻害薬考慮
        
        <div class="decision">肥満あり？</div>
        → Yes: メトホルミン強く推奨
        → No: 他剤も選択肢
    </div>
    
    <div class="combination-guide">
        <h3>併用療法の実際</h3>
        <div class="combo-pattern">
            <h4>最も多いパターン</h4>
            <p>メトホルミン + DPP-4阻害薬</p>
            <p class="reason">相乗効果、低血糖リスク最小</p>
        </div>
    </div>
</section>
```

### レベル3：深い理解と最新知見（上級）
（既存の詳細なコンテンツを配置）

---

## 🔧 実装のポイント

### インタラクティブ要素
- Q&Aは折りたたみ式で詳細表示
- フローチャートはクリッカブル
- シナリオは実際の会話形式

### ビジュアル重視
- 表での比較を多用
- 矢印での流れ表現
- アイコンでの視覚的区別

### モバイルファースト
- 縦スクロールで完結
- タップで詳細展開
- 横スクロール不要

---

## 📈 期待される効果

### 学習効率の向上
- 「なぜ？」から始まるので記憶に残る
- 実践的なので即使える
- 段階的なので無理なく深められる

### 実習での自信
- よくある質問に答えられる
- 間違いを防げる
- 患者対応がスムーズ

---

**このテンプレートにより、薬学生が本当に必要とする「生きた知識」を提供します。**