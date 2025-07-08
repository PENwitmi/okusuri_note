# ロスバスタチン・テルミサルタン特例ルート詳細作業手順書

**作成日時**: 2025-07-03 15:10  
**作成者**: CEO  
**対象者**: CEO/Manager（作業実施者）  
**重要度**: ⭐⭐⭐⭐⭐（最重要）  
**目的**: 特例ルート2薬剤のCSS付与作業を正確に実行する

---

## 🚨 最重要事項

### 絶対的原則
1. **metformin-refined.htmlを唯一のテンプレートとする**
2. **使用するクラスは29個のみ**（追加・削除厳禁）
3. **クラスの配置場所はmetforminと完全一致させる**

### なぜこれが重要か
- 薬剤によってCSSが異なると保守性が崩壊
- 統一性がなくなり、将来の更新が困難に
- ユーザー体験の一貫性が損なわれる

---

## 📋 必須準備作業

### 1. 参照ファイルを開く
```bash
# Terminal 1: metformin-refined.htmlを開く（テンプレート）
open /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/docs/drugs-v2/metformin-refined.html

# Terminal 2: 04_TEMPLATE_ANALYSIS.mdを開く（クラスリスト）
open /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/project-docs/2025-07-03-drug-page-v2-implementation/04_TEMPLATE_ANALYSIS.md

# Terminal 3: 作業用ターミナル
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note
```

### 2. 29個のクラス一覧を確認
**構造系（7個）**:
- drug-detail
- container
- level-selector
- level-selector__inner
- level-btn
- active
- card

**薬剤情報系（8個）**:
- drug-header
- brand-name
- generic-name
- drug-classification
- drug-class
- generation
- indications
- indications__list

**コンテンツ系（11個）**:
- quick-summary
- impact-grid
- impact-item
- summary-item
- quote-box
- specialist-perspective
- faq-note
- prescribing-data
- design-spec
- combination-drugs
- combination-drugs__list

**レベル系（3個）**:
- level-1-content
- level-2-content
- level-3-content

---

## 📁 Step 0: 準備作業（5分）

### 0.1 バックアップ作成
```bash
# バックアップディレクトリ作成
mkdir -p _old_files/backup_$(date +%Y%m%d_%H%M)/

# 現在のファイルをバックアップ
cp docs/drugs-v2/rosuvastatin-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

cp docs/drugs-v2/telmisartan-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/
```

### 0.2 作業ディレクトリ作成確認
```bash
# CSS再構築用ディレクトリ作成（既存の場合はスキップ）
mkdir -p docs/_internal/css_rebuild_work20250703/

# ディレクトリ確認
ls -la docs/_internal/ | grep css
```

### 0.3 初期ファイルコピー
```bash
# drugs-v2からcss_cleanupへコピー
cp docs/drugs-v2/rosuvastatin-v2-components.html \
   docs/_internal/css_cleanup/rosuvastatin-v2.html

cp docs/drugs-v2/telmisartan-v2-components.html \
   docs/_internal/css_cleanup/telmisartan-v2.html
```

---

## 🧹 Step 1: クリーン化作業（10分）

### 1.1 CSS除去実行
```bash
# rosuvastatinのクリーン化
cd docs/_internal/css_cleanup/

# class属性を削除
sed -i '' 's/ class="[^"]*"//g' rosuvastatin-v2.html

# style属性を削除
sed -i '' 's/ style="[^"]*"//g' rosuvastatin-v2.html

# telmisartanのクリーン化
sed -i '' 's/ class="[^"]*"//g' telmisartan-v2.html
sed -i '' 's/ style="[^"]*"//g' telmisartan-v2.html
```

### 1.2 クリーン化確認
```bash
# class属性が0個であることを確認（必ず0でなければNG）
echo "rosuvastatin class数: $(grep -c 'class=' rosuvastatin-v2.html)"
echo "telmisartan class数: $(grep -c 'class=' telmisartan-v2.html)"

# style属性も同様に確認
echo "rosuvastatin style数: $(grep -c 'style=' rosuvastatin-v2.html)"
echo "telmisartan style数: $(grep -c 'style=' telmisartan-v2.html)"
```

### 1.3 ファイル名変更
```bash
# -clean.htmlに変更
mv rosuvastatin-v2.html rosuvastatin-clean.html
mv telmisartan-v2.html telmisartan-clean.html
```

### 1.4 CSS再構築ディレクトリへコピー
```bash
# クリーン化済みファイルをCSS付与作業用ディレクトリへ
cp rosuvastatin-clean.html ../css_rebuild_work20250703/
cp telmisartan-clean.html ../css_rebuild_work20250703/

# 作業ディレクトリへ移動
cd ../css_rebuild_work20250703/
```

---

## 🎨 Step 2: CSS付与作業詳細（30分/薬剤）

### 2.1 基本構造の確立

#### CSS読み込み部分（head内）
```html
<!-- 必ずこの順序で3ファイルを読み込む -->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

#### body要素のクラス付与
```html
<!-- 両薬剤とも循環器系なのでcardiovascular -->
<body class="drug-detail" data-category="cardiovascular">
```

### 2.2 レベルインジケーターの実装

body直下、最初の要素として配置：
```html
<!-- レベルインジケーター -->
<div class="level-selector">
    <div class="level-selector__inner">
        <button class="level-btn active" data-level="1">薬学生</button>
        <button class="level-btn" data-level="2">実習中</button>
        <button class="level-btn" data-level="3">研修中</button>
    </div>
</div>
```

### 2.3 レベル1コンテンツのクラス付与

#### 薬剤ヘッダー部分
```html
<section class="level-1-content">
    <div class="drug-header">
        <h1 class="brand-name">クレストール®</h1>  <!-- ロスバスタチンの場合 -->
        <p class="generic-name">ロスバスタチンカルシウム</p>
    </div>
    
    <div class="drug-classification">
        <span class="drug-class" data-category="cardiovascular">
            <i>💊</i>
            HMG-CoA還元酵素阻害薬
        </span>
        <span class="generation">ストロングスタチン</span>  <!-- ロスバスタチンの特徴 -->
    </div>
</section>
```

#### 適応症部分
```html
<div class="indications">
    <h3>主な適応症</h3>
    <ul class="indications__list">
        <li>高コレステロール血症</li>
        <li>家族性高コレステロール血症</li>
        <!-- 既存の内容を維持 -->
    </ul>
</div>
```

#### 30秒サマリー
```html
<section class="quick-summary level-1-content">
    <div class="container">
        <h2>⚡ 30秒でわかるロスバスタチン</h2>  <!-- 薬剤名は変更 -->
        
        <div class="impact-grid">
            <div class="impact-item">
                <h4>開発の位置づけ</h4>
                <!-- 既存の内容を維持 -->
            </div>
            
            <div class="impact-item">  <!-- summary-itemではなくimpact-itemで統一 -->
                <h4>なぜ作られた？</h4>
                <!-- 既存の内容を維持 -->
            </div>
            
            <div class="impact-item">
                <h4>実際どう使われてる？</h4>
                <!-- 既存の内容を維持 -->
            </div>
            
            <div class="impact-item">
                <h4>他の薬との違い</h4>
                <!-- 既存の内容を維持 -->
            </div>
        </div>
    </div>
</section>
```

#### FAQ部分
```html
<section class="level-1-content">
    <div class="container">
        <h3>💡 薬学生のよくある疑問</h3>
        <dl>  <!-- dl構造を維持 -->
            <dt>Q: 「★★★ なぜストロングスタチンと呼ばれる？」</dt>
            <dd>A: LDL-C低下作用が...</dd>
        </dl>
        
        <div class="faq-note">
            <p>💡 <strong>ポイント</strong>：★は国試頻出度を表します。</p>
        </div>
    </div>
</section>
```

#### 処方パターン
```html
<div class="prescribing-data">
    <div class="design-spec">
Rp) クレストール錠 2.5mg  
    1回1錠 1日1回 夕食後  
    30日分</div>
    <p>※ 肝代謝型のため...</p>
</div>
```

#### 併用薬
```html
<div class="combination-drugs">
    <h4>一緒に処方される薬TOP3</h4>
    <ol class="combination-drugs__list">
        <li>アムロジピン（降圧薬）</li>
        <li>メトホルミン（糖尿病薬）</li>
        <li>アスピリン（抗血小板薬）</li>
    </ol>
</div>
```

### 2.4 レベル2コンテンツのクラス付与

```html
<section class="card level-2-content">  <!-- cardクラスを使用 -->
    <h2>なぜストロングスタチンが必要か（実習編）</h2>
    <!-- 既存の内容 -->
</section>

<section class="level-2-content">  <!-- cardなしのセクションもOK -->
    <h2>🧬 作用機序の詳細（実習編）</h2>
    <!-- 既存の内容 -->
</section>
```

### 2.5 レベル3コンテンツのクラス付与

```html
<section class="level-3-content">
    <div class="container">
        <h2>臨床での使い分け（研修編）</h2>
        <!-- 既存の内容 -->
    </div>
</section>

<!-- 専門家視点がある場合 -->
<div class="specialist-perspective">
    <div class="quote-box">
        <!-- 引用内容 -->
    </div>
</div>
```

### 2.6 JavaScript配置（最重要）

</body>タグの直前に、metformin-refined.htmlから**完全コピー**：
```html
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // レベル切り替え機能の初期化
            const levelButtons = document.querySelectorAll('.level-btn');
            const levelSections = {
                '1': document.querySelectorAll('.level-1-content'),
                '2': document.querySelectorAll('.level-2-content'),
                '3': document.querySelectorAll('.level-3-content')
            };

            // [metformin-refined.htmlから完全にコピーする]
            // ... 省略（実際は全体をコピー） ...
        });
    </script>
</body>
</html>
```

---

## 📊 薬剤別固有設定表

### ロスバスタチン（rosuvastatin）
| 項目 | 値 |
|------|-----|
| 商品名 | クレストール® |
| 一般名 | ロスバスタチンカルシウム |
| data-category | cardiovascular |
| 薬効分類表示 | HMG-CoA還元酵素阻害薬 |
| 特徴バッジ | ストロングスタチン |
| 主な特徴 | 最強のLDL-C低下作用 |

### テルミサルタン（telmisartan）
| 項目 | 値 |
|------|-----|
| 商品名 | ミカルディス® |
| 一般名 | テルミサルタン |
| data-category | cardiovascular |
| 薬効分類表示 | アンジオテンシンII受容体拮抗薬（ARB） |
| 特徴バッジ | 臓器保護作用 |
| 主な特徴 | PPARγ部分活性化作用 |

---

## 📁 Step 3: 最終配置と確認（10分）

### 3.1 最終ファイル配置
```bash
# css_rebuild_work20250703からdrugs-v2へコピー
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note

cp docs/_internal/css_rebuild_work20250703/rosuvastatin-clean.html \
   docs/drugs-v2/rosuvastatin-refined.html

cp docs/_internal/css_rebuild_work20250703/telmisartan-clean.html \
   docs/drugs-v2/telmisartan-refined.html
```

### 3.2 古いファイルのアーカイブ
```bash
# 古いv2-componentsファイルを移動
mv docs/drugs-v2/rosuvastatin-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/

mv docs/drugs-v2/telmisartan-v2-components.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/
```

### 3.3 動作確認
```bash
# ブラウザで開いて確認
open docs/drugs-v2/rosuvastatin-refined.html
open docs/drugs-v2/telmisartan-refined.html
```

---

## ✅ 品質確認チェックリスト

### 自動確認コマンド
```bash
# 作業完了後、以下のコマンドで確認
DRUG="rosuvastatin"  # またはtelmisartan

# クラス数確認（29個であるべき）
echo "クラス数: $(grep -o 'class="[^"]*"' docs/drugs-v2/${DRUG}-refined.html | wc -l)"

# data-category確認
grep 'data-category="cardiovascular"' docs/drugs-v2/${DRUG}-refined.html

# CSS読み込み順序確認
grep -n 'link rel="stylesheet"' docs/drugs-v2/${DRUG}-refined.html

# JavaScript存在確認
grep -c 'addEventListener' docs/drugs-v2/${DRUG}-refined.html
```

### 手動確認項目
- [ ] クラス数が29個ちょうど
- [ ] data-category="cardiovascular"が設定されている
- [ ] CSS3ファイルが正しい順序で読み込まれている
- [ ] レベル切り替えボタンが動作する
- [ ] 初期表示がレベル1
- [ ] レベル2、3への切り替えが正常
- [ ] モバイル表示で崩れがない
- [ ] 処方例が等幅フォントで表示される

---

## ⚠️ よくある間違いと防止策

### 1. クラスの追加・削除
**❌ 間違い**: 「このdivにもクラスがあった方が...」と独自判断  
**✅ 対策**: 29個のクラスのみ使用。追加も削除も厳禁

### 2. containerクラスの付け忘れ
**❌ 間違い**: sectionの中に直接コンテンツ  
**✅ 対策**: 多くのセクション内にcontainerクラスのdivが必要

### 3. summary-itemとimpact-itemの混在
**❌ 間違い**: 30秒サマリーでsummary-itemを使用  
**✅ 対策**: すべてimpact-itemで統一（metforminもそうなっている）

### 4. JavaScriptのコピー漏れ
**❌ 間違い**: 一部だけコピー  
**✅ 対策**: <script>タグ全体を完全コピー

### 5. CSS読み込み順序
**❌ 間違い**: drug-page-v2.cssを最初に読み込む  
**✅ 対策**: style → responsive-unified → drug-page-v2 の順序厳守

---

## 🏁 完了確認コマンド集

```bash
#!/bin/bash
# check-special-route.sh として保存可能

echo "=== 特例ルート完了確認 ==="
for DRUG in rosuvastatin telmisartan; do
    echo ""
    echo "【${DRUG}の確認】"
    FILE="docs/drugs-v2/${DRUG}-refined.html"
    
    if [ -f "$FILE" ]; then
        echo "✅ ファイル存在"
        echo "  - クラス数: $(grep -o 'class="[^"]*"' $FILE | wc -l)個（29個であるべき）"
        echo "  - cardiovascular設定: $(grep -c 'data-category="cardiovascular"' $FILE)箇所"
        echo "  - CSS読み込み: $(grep -c '<link rel="stylesheet"' $FILE)個"
        echo "  - JavaScript: $(grep -c 'addEventListener' $FILE)箇所"
        echo "  - ファイルサイズ: $(ls -lh $FILE | awk '{print $5}')"
    else
        echo "❌ ファイルが見つかりません"
    fi
done

echo ""
echo "=== metforminとの構造比較 ==="
echo "参考: metformin-refined.html"
echo "  - クラス数: $(grep -o 'class="[^"]*"' docs/drugs-v2/metformin-refined.html | wc -l)個"
```

---

## 📝 作業記録欄

作業完了時に以下を記入：

### ロスバスタチン
- [ ] Step 1 完了時刻: ____:____
- [ ] Step 2 完了時刻: ____:____
- [ ] Step 3 完了時刻: ____:____
- [ ] 最終確認: ____:____

### テルミサルタン
- [ ] Step 1 完了時刻: ____:____
- [ ] Step 2 完了時刻: ____:____
- [ ] Step 3 完了時刻: ____:____
- [ ] 最終確認: ____:____

---

## 🎯 成功の基準

1. **クラス数が正確に29個**
2. **metformin-refined.htmlと同じ構造**
3. **レベル切り替えが正常動作**
4. **モバイル表示が適切**
5. **薬剤固有の内容が正しく表示**

これらすべてを満たして初めて作業完了とします。

---

**ドキュメント作成完了**: 2025-07-03 15:10