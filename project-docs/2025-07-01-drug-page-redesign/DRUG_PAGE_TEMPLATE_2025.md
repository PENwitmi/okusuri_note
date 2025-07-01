# 薬剤個別ページテンプレート 2025年版
**作成日**: 2025-07-01 22:45  
**作成者**: CEO  
**目的**: 薬学生から現場医療者まで段階的に学べる薬剤ページの標準テンプレート

---

## 🎯 テンプレートの設計思想

### 核心理念：段階的学習アプローチ
- **レベル1（薬学生）**: 基礎知識と実践的な疑問への回答
- **レベル2（実習中の薬学生）**: 処方現場での具体的な対応
- **レベル3（研修中の薬剤師）**: 臨床での使い分けと深い理解

### 重要原則
1. **再構築ではなく再配置**: 既存の豊富なコンテンツを削らない
2. **実践から理論へ**: 使える情報を前に、深い洞察を後に
3. **視覚的階層**: レベルが一目でわかるデザイン

---

## 📋 ページ構成テンプレート

### ヘッダー部分（全レベル共通）
```html
<!-- ページ最上部のメタ情報 -->
<div class="drug-header-meta">
    <!-- パンくずナビゲーション -->
    <nav class="breadcrumb">
        ホーム > 薬剤一覧 > [薬効群] > [薬剤名]
    </nav>
    
    <!-- 学習レベルインジケーター -->
    <div class="study-level-indicator">
        <div class="level-progress">
            <span class="level active">薬学生</span>
            <span class="level">実習中の薬学生</span>
            <span class="level">研修中の薬剤師</span>
        </div>
    </div>
</div>
```

---

## 🎓 レベル1：薬学生向け基礎内容（ファーストビュー）

### 1-1. 基本情報カード
```html
<section class="basic-info-card student-level">
    <div class="drug-name-display">
        <h1 class="brand-name">メトグルコ®</h1>
        <p class="generic-name">メトホルミン塩酸塩</p>
    </div>
    
    <div class="classification-badges">
        <span class="drug-class-badge endocrine">
            <i class="icon-endocrine"></i>
            ビグアナイド系糖尿病薬
        </span>
        <span class="first-choice-badge">第一選択薬</span>
    </div>
    
    <div class="main-indications">
        <h3>主な適応症</h3>
        <ul class="indication-list">
            <li class="primary">2型糖尿病</li>
            <li>インスリン抵抗性改善</li>
            <li>肥満を伴う糖尿病に特に有効</li>
        </ul>
        <div class="unique-indication" if-exists>
            <span class="attention-badge">注目</span>
            多嚢胞性卵巣症候群（適応外）
        </div>
    </div>
</section>
```

### 1-2. 薬学生向け30秒サマリー
```html
<section class="quick-summary-student">
    <h2>⚡ 30秒でわかる[薬剤名]</h2>
    
    <div class="summary-grid">
        <div class="summary-item fic-status">
            <h4>開発の位置づけ</h4>
            <p class="fic-badge">First In Class</p>
            <p>世界初のビグアナイド系経口糖尿病薬</p>
        </div>
        
        <div class="summary-item why-developed">
            <h4>なぜ作られた？</h4>
            <p>インスリン以外の選択肢として、インスリン感受性を改善する薬が必要だった</p>
        </div>
        
        <div class="summary-item clinical-use">
            <h4>実際どう使われてる？</h4>
            <p>2型糖尿病の第一選択薬として、世界中で1億人以上が服用</p>
        </div>
        
        <div class="summary-item vs-similar">
            <h4>他の薬との違い</h4>
            <p>体重を増やさない唯一の経口糖尿病薬（むしろ減少傾向）</p>
        </div>
    </div>
</section>
```

### 1-3. 実習前に押さえておくべき基礎知識
```html
<section class="practical-points-student">
    <h2>📝 実習前に必ず押さえる基礎ポイント</h2>
    
    <!-- 処方でよく見る形 -->
    <div class="prescription-examples">
        <h3>よく見る処方パターン</h3>
        
        <div class="rx-example">
            <div class="rx-format">
                Rp) メトグルコ錠 250mg  
                    1回1錠 1日2回 朝夕食後  
                    30日分
            </div>
            <p class="rx-note">※ 低用量から開始が基本</p>
        </div>
        
        <div class="common-combinations">
            <h4>一緒に処方される薬TOP3</h4>
            <ol class="combo-list">
                <li>DPP-4阻害薬（ジャヌビア等）- 併用で相乗効果</li>
                <li>SGLT2阻害薬（フォシーガ等）- 心腎保護目的</li>
                <li>スタチン系（クレストール等）- 脂質管理</li>
            </ol>
        </div>
    </div>
    
    <!-- 注意すべき相互作用 -->
    <div class="interaction-alerts">
        <h3>絶対覚える相互作用</h3>
        
        <div class="contraindication-box danger">
            <h4>🚫 併用禁忌</h4>
            <ul>
                <li>ヨード造影剤 - 乳酸アシドーシスリスク</li>
                <li class="note">造影検査前後48時間は休薬必須！</li>
            </ul>
        </div>
        
        <div class="caution-box warning">
            <h4>⚠️ 併用注意</h4>
            <ul>
                <li>アルコール - 乳酸アシドーシスリスク増大</li>
                <li>利尿薬 - 脱水で乳酸アシドーシスリスク</li>
                <li>シメチジン - メトホルミン血中濃度上昇</li>
            </ul>
        </div>
        
        <div class="lifestyle-box info">
            <h4>🍽️ 食事・生活指導</h4>
            <ul>
                <li>過度の飲酒は避ける</li>
                <li>食事を抜いた時は服用しない</li>
                <li>脱水に注意（特に夏場）</li>
            </ul>
        </div>
    </div>
    
    <!-- 薬学生FAQ（最重要） -->
    <div class="student-faq-section">
        <h3>💡 薬学生のよくある疑問（最重要）</h3>
        <dl class="student-questions">
            <dt>Q: 「国試によく出るポイントは？」</dt>
            <dd>A: ①乳酸アシドーシス ②ヨード造影剤で休薬 ③eGFR<30で禁忌 ④体重減少効果 ⑤腎機能チェック必須</dd>
            
            <dt>Q: 「なんで食後？食前じゃダメ？」</dt>
            <dd>A: [薬剤に応じて理由を説明。例：消化器副作用軽減、吸収良好のため食直前、食事に関係なく等]</dd>
            
            <dt>Q: 「ビグアナイド系って他に何がある？」</dt>
            <dd>A: 日本ではメトホルミンのみ。フェンホルミン、ブホルミンは副作用で販売中止</dd>
        </dl>
        
        <div class="faq-note">
            <p>💡 <strong>ポイント</strong>：薬学の授業で学ぶ内容に関する質問のみ。実習に関する質問はレベル2で扱います。</p>
        </div>
    </div>
</section>
```

---

## 💊 レベル2：実習中の薬学生向け（処方現場での対応）

### 2-1. 処方現場での実践的知識
```html
<section class="practical-knowledge intermediate-level">
    <h2>🏥 処方現場で必要な実践知識</h2>
    
    <div class="value-proposition">
        <h3>この薬の3つの核心価値</h3>
        
        <div class="core-values">
            <div class="value-item">
                <span class="number">1</span>
                <h4>エビデンスの蓄積</h4>
                <p>67年間、累計10億人以上の使用実績。UKPDS試験で心血管死亡36%減少を証明。</p>
            </div>
            
            <div class="value-item">
                <span class="number">2</span>
                <h4>理想的な薬理プロファイル</h4>
                <p>体重中性〜減少、低血糖リスク最小、心腎保護作用、抗がん作用の可能性。</p>
            </div>
            
            <div class="value-item">
                <span class="number">3</span>
                <h4>医療経済性</h4>
                <p>1日薬価10円以下。費用対効果は全糖尿病薬で最高レベル。</p>
            </div>
        </div>
    </div>
    
    <div class="first-choice-scenarios">
        <h3>第一選択となる患者像</h3>
        
        <div class="patient-profiles">
            <div class="profile-card ideal">
                <h4>理想的な適応</h4>
                <ul>
                    <li>新規診断の2型糖尿病</li>
                    <li>BMI 25以上の肥満合併</li>
                    <li>インスリン抵抗性が主体</li>
                    <li>腎機能正常〜軽度低下</li>
                </ul>
            </div>
            
            <div class="profile-card caution">
                <h4>慎重投与</h4>
                <ul>
                    <li>高齢者（75歳以上）</li>
                    <li>eGFR 30-45</li>
                    <li>心不全既往</li>
                    <li>アルコール多飲</li>
                </ul>
            </div>
            
            <div class="profile-card avoid">
                <h4>使用を避ける</h4>
                <ul>
                    <li>1型糖尿病</li>
                    <li>eGFR<30</li>
                    <li>重症感染症</li>
                    <li>脱水リスク高</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="irreplaceable-reasons">
        <h3>他剤で代替できない理由</h3>
        
        <div class="unique-benefits">
            <div class="benefit-comparison">
                <h4>vs DPP-4阻害薬</h4>
                <p>メトホルミンは体重減少、DPP-4は体重中性。心血管アウトカムの差。</p>
            </div>
            
            <div class="benefit-comparison">
                <h4>vs SGLT2阻害薬</h4>
                <p>メトホルミンは低血糖リスクなし、尿路感染症リスクなし。</p>
            </div>
            
            <div class="benefit-comparison">
                <h4>vs SU薬</h4>
                <p>メトホルミンは低血糖・体重増加なし。長期予後改善のエビデンス。</p>
            </div>
        </div>
    </div>
</section>
```

### 2-2. 実際の使用場面
```html
<section class="real-world-usage">
    <h2>🏥 実臨床での使い方</h2>
    
    <div class="initiation-scenarios">
        <h3>典型的な処方開始シーン</h3>
        
        <div class="case-studies">
            <div class="case-example">
                <h4>ケース1：新規診断</h4>
                <div class="patient-background">
                    55歳男性、BMI 28、HbA1c 7.8%、合併症なし
                </div>
                <div class="prescription-plan">
                    <p><strong>処方</strong>: メトグルコ250mg 1日2回から開始</p>
                    <p><strong>理由</strong>: 肥満あり、第一選択。低用量で消化器症状確認</p>
                    <p><strong>目標</strong>: 2週間後500mgへ増量、HbA1c<7.0%</p>
                </div>
            </div>
            
            <div class="case-example">
                <h4>ケース2：他剤効果不十分</h4>
                <div class="patient-background">
                    62歳女性、DPP-4阻害薬でHbA1c 8.2%、体重増加傾向
                </div>
                <div class="prescription-plan">
                    <p><strong>処方</strong>: 既存薬にメトグルコ500mg 1日2回追加</p>
                    <p><strong>理由</strong>: 異なる機序で相乗効果、体重減少効果</p>
                    <p><strong>目標</strong>: HbA1c 1.0%低下、体重2-3kg減少</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="dose-adjustment">
        <h3>用量調整の実践的アプローチ</h3>
        
        <div class="titration-protocol">
            <h4>標準的な増量プロトコル</h4>
            <table class="dose-table">
                <tr>
                    <th>週</th>
                    <th>用量</th>
                    <th>確認事項</th>
                </tr>
                <tr>
                    <td>1-2週</td>
                    <td>250mg×2回</td>
                    <td>消化器症状の有無</td>
                </tr>
                <tr>
                    <td>3-4週</td>
                    <td>500mg×2回</td>
                    <td>血糖値の改善度</td>
                </tr>
                <tr>
                    <td>5週以降</td>
                    <td>750mg×2回</td>
                    <td>目標未達なら検討</td>
                </tr>
                <tr>
                    <td>最大量</td>
                    <td>750mg×3回</td>
                    <td>2250mg/日まで</td>
                </tr>
            </table>
        </div>
        
        <div class="adjustment-tips">
            <h4>用量調整のコツ</h4>
            <ul class="tips-list">
                <li><strong>消化器症状対策</strong>: 食事中または食直後服用で軽減</li>
                <li><strong>少量開始</strong>: 250mg×2回から開始し、徐々に増量</li>
                <li><strong>分割投与</strong>: 1日2回が基本、3回は患者負担大</li>
                <li><strong>腎機能</strong>: eGFR 45-60で最大1500mg/日</li>
            </ul>
        </div>
    </div>
    
    <div class="effect-assessment">
        <h3>効果判定のタイミングと指標</h3>
        
        <div class="assessment-timeline">
            <div class="timepoint">
                <h4>2週間後</h4>
                <ul>
                    <li>消化器症状の確認</li>
                    <li>服薬アドヒアランス</li>
                    <li>空腹時血糖（参考）</li>
                </ul>
            </div>
            
            <div class="timepoint">
                <h4>1ヶ月後</h4>
                <ul>
                    <li>空腹時血糖20-30mg/dL低下</li>
                    <li>体重1-2kg減少傾向</li>
                    <li>副作用の安定</li>
                </ul>
            </div>
            
            <div class="timepoint">
                <h4>3ヶ月後</h4>
                <ul>
                    <li>HbA1c 0.5-1.5%低下</li>
                    <li>体重2-3kg減少</li>
                    <li>脂質改善傾向</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

---

## 🔬 レベル3：研修中の薬剤師向け（深い理解と臨床価値）

### 3-1. 開発ストーリーと歴史的意義
```html
<section class="deep-understanding advanced-level">
    <h2>📚 薬剤の深層理解</h2>
    
    <!-- ここに現在の感動的な歴史セクションを配置 -->
    <div class="historical-story">
        [現在のmetformin.htmlの歴史的瞬間セクションをそのまま配置]
    </div>
</section>
```

### 3-2. 作用機序の最新知見
```html
<section class="mechanism-details">
    <h2>🧬 作用機序の詳細と最新研究</h2>
    
    <!-- 現在の詳細な薬理作用を配置 -->
    <div class="pharmacology-deep">
        [現在の作用機序セクションを配置]
    </div>
    
    <div class="latest-research">
        <h3>2024-2025年の最新知見</h3>
        [最新の研究成果を追加]
    </div>
</section>
```

### 3-3. エビデンスと将来展望
```html
<section class="evidence-future">
    <h2>📊 臨床エビデンスと未来への展望</h2>
    
    <!-- 現在の臨床試験データを配置 -->
    <div class="clinical-trials">
        [現在のエビデンスセクションを配置]
    </div>
    
    <div class="future-perspectives">
        <h3>今後の可能性</h3>
        [将来の研究方向性]
    </div>
</section>
```

---

## 🎨 実装ガイドライン

### デザイン実装方針

#### 1. 視覚的階層の実現
```css
/* レベル別の背景色 */
.student-level {
    background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
    border-left: 5px solid #2196f3;
}

.intermediate-level {
    background: linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%);
    border-left: 5px solid #9c27b0;
}

.advanced-level {
    background: linear-gradient(135deg, #fce4ec 0%, #fff3e0 100%);
    border-left: 5px solid #f44336;
}

/* プログレスインジケーター */
.study-level-indicator {
    position: sticky;
    top: 60px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
}

.level-progress {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

.level {
    padding: 5px 20px;
    border-radius: 20px;
    transition: all 0.3s;
    cursor: pointer;
}

.level.active {
    background: var(--primary-color);
    color: white;
}
```

#### 2. スキップ機能の実装
```javascript
// スムーズスクロール付きジャンプ機能
document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', (e) => {
        const targetLevel = e.target.textContent;
        let targetSection;
        
        switch(targetLevel) {
            case '薬学生':
                targetSection = '.student-level';
                break;
            case '実習中の薬学生':
                targetSection = '.intermediate-level';
                break;
            case '研修中の薬剤師':
                targetSection = '.advanced-level';
                break;
        }
        
        document.querySelector(targetSection)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // アクティブ状態の更新
        document.querySelectorAll('.level').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// スクロール位置に応じてインジケーター更新
window.addEventListener('scroll', () => {
    const sections = [
        { el: '.student-level', level: '薬学生' },
        { el: '.intermediate-level', level: '実習中の薬学生' },
        { el: '.advanced-level', level: '研修中の薬剤師' }
    ];
    
    sections.forEach(section => {
        const el = document.querySelector(section.el);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                document.querySelectorAll('.level').forEach(l => {
                    if (l.textContent === section.level) {
                        l.classList.add('active');
                    } else {
                        l.classList.remove('active');
                    }
                });
            }
        }
    });
});
```

#### 3. モバイル対応
```css
@media (max-width: 768px) {
    .study-level-indicator {
        top: 50px;
    }
    
    .level-progress {
        font-size: 12px;
        padding: 5px 10px;
    }
    
    .level {
        padding: 3px 10px;
    }
    
    .summary-grid {
        grid-template-columns: 1fr;
    }
    
    .prescription-examples {
        font-size: 14px;
    }
}
```

### コンテンツ作成指針

#### 1. 文体の使い分け
- **レベル1（薬学生）**: 
  - 専門用語は必要最小限
  - 具体例を豊富に
  - 「〜です・ます」調
  - FAQを中心に構成
  
- **レベル2（実習中の薬学生）**:
  - 処方現場で使う専門用語
  - 実践的な対応方法
  - 「〜です・ます」調
  - 具体的な処方例多数

- **レベル3（研修中の薬剤師）**:
  - 専門用語を適切に使用
  - エビデンスベースの説明
  - 「〜である」調も可
  - 臨床判断の根拠

#### 2. 分量の目安
- **レベル1（薬学生）**: 全体の40%（FAQ中心）
- **レベル2（実習中）**: 全体の30%
- **レベル3（研修中）**: 全体の30%

#### 3. 必須要素チェックリスト
- [ ] 商品名と一般名の明確な表示
- [ ] 薬効分類と視覚的アイコン
- [ ] 30秒サマリー（FIC情報含む）
- [ ] 実践的な処方例
- [ ] 併用薬TOP3
- [ ] 併用禁忌・注意の強調表示
- [ ] 薬学生FAQ（3つの基礎的質問）
- [ ] 用量調整プロトコル
- [ ] 効果判定の時期と指標
- [ ] 用量依存的な適応症の適切な配置（ICS/LABA、β遮断薬等）

#### 4. 用量依存的な適応症への対応
- **ICS/LABA**：喘息（低用量）とCOPD（高用量）の違いを基本情報カードに明記
- **β遮断薬**：心不全（低用量開始）と高血圧（通常用量）の使い分けを表示
- **配置場所**：レベル1の基本情報カード内に独立セクションとして配置
- **表現例**：「用量により適応症が異なります」アイコンで視覚的に強調

---

## 📝 移行計画

### Phase 1: テンプレート検証（1週間）
1. このテンプレートをチーム内でレビュー
2. 薬学教育専門家からのフィードバック収集
3. 必要な修正を実施

### Phase 2: パイロット実装（2週間）
1. メトホルミンで試作ページ作成
2. 薬学生モニターでユーザビリティテスト
3. 現場薬剤師からの実用性評価

### Phase 3: 全面展開（4週間）
1. 22薬剤への段階的適用
2. 各薬剤の特性に応じた調整
3. 継続的な改善サイクル

---

## 🎯 期待される成果

### 定量的指標
- **学習時間短縮**: 実習準備時間を50%削減
- **理解度向上**: 薬学生の理解度テストで平均20%向上
- **満足度**: 利用者満足度90%以上

### 定性的効果
- **段階的学習**: 自分のレベルに合った情報から開始
- **実践力向上**: 実習での即戦力化
- **深い理解**: 興味に応じて深い知識まで到達可能
- **既存資産活用**: 現在の優れたコンテンツを最大活用

---

## 🔄 継続的改善

### フィードバック収集
- ページ内アンケート機能
- 利用状況のアナリティクス
- 定期的なユーザーインタビュー

### 更新サイクル
- 月次: 最新のガイドライン反映
- 四半期: 構成の見直し
- 年次: 大規模リニューアル検討

---

**このテンプレートは生きた文書として、継続的に改善されていきます。**