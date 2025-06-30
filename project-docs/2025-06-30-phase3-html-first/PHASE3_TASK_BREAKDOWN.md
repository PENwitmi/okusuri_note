# Phase 3 タスク分解書：開発者向け詳細ガイド

**作成日時**: 2025-06-30 23:25  
**対象**: Dev1, Dev2, Dev3  
**目的**: 効率的なHTML作成のための具体的指示

## 🎯 全体方針

### HTML First実装の要点
1. **MDファイルは参考資料**: 医学的内容の正確性担保に活用
2. **HTMLで感動を創造**: 視覚的要素、レイアウト、インタラクションで価値を追加
3. **500行は最低ライン**: 700-900行を目指して充実したコンテンツを

## 📋 開発者別タスクリスト

### 👨‍💻 Dev1 タスク

#### 第1バッチ：dapagliflozin（3時間）
```bash
# 作業ディレクトリ
cd /Users/nishimototakashi/claude\ code/ai-team/code/pharma_dex

# 参考MDファイル
source_materials/drugs/endocrine/sglt2_inhibitors/dapagliflozin.md (742行)
source_materials/drug_evolution/evolution_models/endocrine/SGLT2_evolution_model.md

# 高品質HTMLテンプレート
templates/drug-detail-premium.html

# 出力先
docs/drugs/dapagliflozin.html
```

**特別な焦点**:
- SGLT2阻害薬のFirst-in-Class物語
- 糖尿病から心不全・CKDへの適応拡大ドラマ
- 日本人医師の使用経験談を創作

#### 第2バッチ：digoxin（2時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/others/digoxin.md (563行)

# 特別な焦点
- 200年の歴史（ウィザリングから現代まで）
- ジギタリス中毒の教訓と管理
- 「古い薬だが今も必要」の理由
```

#### 第3バッチ：enalapril + bisoprolol（4時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/ace_inhibitors/enalapril.md (396行)
source_materials/drugs/cardiovascular/beta_blockers/bisoprolol.md (322行)

# 薬効群モデル
source_materials/drug_evolution/evolution_models/cardiovascular/ACE_inhibitor_evolution_model.md
source_materials/drug_evolution/evolution_models/cardiovascular/beta_blocker_evolution_model.md
```

### 👨‍💻 Dev2 タスク

#### 第1バッチ：vancomycin（3時間）
```bash
# 参考MDファイル
source_materials/drugs/antimicrobials/antibiotics/vancomycin.md (572行)
source_materials/drug_evolution/evolution_models/antimicrobials/antibiotic_resistance_evolution.md

# 特別な焦点
- MRSA最終兵器としての重責
- TDM（血中濃度モニタリング）の実践
- 耐性化への警鐘
```

#### 第2バッチ：furosemide（2時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/diuretics/furosemide.md (560行)
source_materials/drug_evolution/evolution_models/cardiovascular/diuretics_evolution_model.md

# 特別な焦点
- ループ利尿薬の王者たる所以
- 電解質管理の極意
- 心不全管理での中心的役割
```

#### 第3バッチ：atorvastatin（2時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/statins/atorvastatin.md (312行)
source_materials/drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md

# 特別な焦点
- 世界で最も売れた薬の記録
- 日本人向け用量設定の背景
- ストロングスタチンとしての位置づけ
```

### 👨‍💻 Dev3 タスク

#### 第1バッチ：warfarin（3時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/anticoagulants/warfarin.md (571行)

# 特別な焦点
- 殺鼠剤から救命薬への転換史
- PT-INR管理の実践知識
- DOACとの使い分け
- 食事・薬物相互作用の管理
```

#### 第2バッチ：perindopril + metformin（4時間）
```bash
# 参考MDファイル
source_materials/drugs/cardiovascular/ace_inhibitors/perindopril.md (551行)
source_materials/drugs/endocrine/biguanides/metformin.md (525行)

# 特別な焦点（perindopril）
- 長時間作用型ACE阻害薬の利点
- EUROPA試験等のエビデンス

# 特別な焦点（metformin）
- 糖尿病治療のゴールドスタンダード
- 乳酸アシドーシスの誤解と真実
- UKPDS研究の歴史的意義
```

#### 第3バッチ：lansoprazole + esomeprazole（4時間）
```bash
# 参考MDファイル
source_materials/drugs/gastrointestinal/ppis/lansoprazole.md (264行)
source_materials/drugs/gastrointestinal/ppis/esomeprazole.md (210行)
source_materials/drug_evolution/evolution_models/gastrointestinal/PPI_evolution_model.md

# 特別な焦点
- PPI兄弟薬の微妙な違い
- CYP2C19遺伝子多型の臨床的意義
- 日本人での使い分け
```

## 🎨 HTML作成の実践的ヒント

### 1. 感動的な導入部の作り方
```html
<!-- 例：dapagliflozin -->
<section class="drug-hero">
    <div class="hero-content">
        <h1 class="drug-name animate-fade-in">ダパグリフロジン</h1>
        <p class="hero-tagline">尿に糖を捨てるという逆転の発想が、心臓と腎臓を救う奇跡を生んだ</p>
        <div class="hero-stats">
            <div class="stat-card">
                <span class="stat-number">38%</span>
                <span class="stat-label">心不全入院リスク減少</span>
            </div>
        </div>
    </div>
</section>
```

### 2. 医師の証言の効果的な配置
```html
<div class="doctor-voice">
    <div class="voice-header">
        <img src="../assets/images/doctor-icon.svg" alt="医師">
        <h3>循環器内科医の証言</h3>
    </div>
    <blockquote>
        「SGLT2阻害薬が心不全に効くと聞いた時、正直信じられなかった。
        でも実際に使ってみると、利尿薬を減らせる患者が続出。
        これは糖尿病薬を超えた、新しい心不全治療薬だと確信した」
    </blockquote>
    <cite>- 大学病院循環器内科 部長（使用歴5年）</cite>
</div>
```

### 3. 視覚的データの表現
```html
<div class="visual-comparison">
    <h3>SGLT2阻害薬の多面的効果</h3>
    <div class="effect-cards">
        <div class="effect-card glucose">
            <div class="icon">🩸</div>
            <h4>血糖降下</h4>
            <p>HbA1c -0.7%</p>
        </div>
        <div class="effect-card heart">
            <div class="icon">❤️</div>
            <h4>心保護</h4>
            <p>MACE -14%</p>
        </div>
        <div class="effect-card kidney">
            <div class="icon">🫘</div>
            <h4>腎保護</h4>
            <p>腎複合エンドポイント -39%</p>
        </div>
    </div>
</div>
```

### 4. インタラクティブ要素
```html
<!-- 用量調整シミュレーター -->
<div class="dose-calculator">
    <h3>腎機能別用量調整ガイド</h3>
    <label>eGFR値：
        <input type="range" id="egfr" min="15" max="90" value="60">
        <span id="egfr-value">60</span> mL/min/1.73m²
    </label>
    <div class="recommendation" id="dose-rec">
        推奨用量：10mg 1日1回
    </div>
</div>
```

## 📐 品質チェックポイント

### 各薬剤完成時の自己チェック
- [ ] 500行以上のHTML（目標700-900行）
- [ ] ヒーローセクションのインパクト
- [ ] 30秒サマリーで本質を表現
- [ ] 医師の証言2つ以上（創作可）
- [ ] 歴史的ストーリーの感動度
- [ ] 視覚的要素3つ以上
- [ ] モバイル表示の確認
- [ ] 関連薬剤へのリンク設定

### 効率化のコツ
1. **最初の1時間**: MDファイル熟読とストーリー構想
2. **次の1.5時間**: HTML骨格作成と主要コンテンツ記述
3. **最後の0.5時間**: 視覚的装飾とブラッシュアップ

## 🚀 バッチ完了時の報告

### 報告フォーマット
```
Dev[番号]→manager【第[N]バッチ完了報告】

完成薬剤：
1. [薬剤名] - [行数]行
   - 特徴：[最も力を入れた部分]
   - 医師の証言：[数]個
   - 視覚的要素：[種類と数]

品質自己評価：
- 感動度：[5段階]
- 完成度：[5段階]
- 課題：[あれば]

ファイルパス：
docs/drugs/[薬剤名].html
```

---

**全員の創造性と情熱により、PharmaDxは真に価値ある教育プラットフォームとなります。**