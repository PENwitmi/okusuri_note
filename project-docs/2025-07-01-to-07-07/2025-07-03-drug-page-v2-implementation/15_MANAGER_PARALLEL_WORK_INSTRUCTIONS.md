# Manager並行作業指示書

**作成日時**: 2025-07-03 23:15  
**作成者**: CEO  
**宛先**: Manager  
**緊急度**: ⭐⭐⭐⭐⭐（即時実行）

---

## 🎯 Manager担当作業

### 作業1: グループB（9薬剤）の技術確認とクラス追加

**対象薬剤**:
- bisoprolol, carvedilol, digoxin, esomeprazole
- furosemide, lansoprazole, omeprazole, spironolactone, warfarin

**作業内容**:
1. 各薬剤の技術的品質確認
2. 必要なクラスの追加（現在9個→29個に）
3. drug_cssedへのコピー

---

## 📋 詳細手順

### Step 1: 技術確認コマンド（各薬剤で実行）
```bash
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note

# 薬剤名を設定（bisoprolol, carvedilol等に変更）
DRUG_NAME="bisoprolol"
V2_FILE="docs/_internal/drug_versionup/${DRUG_NAME}-clean-v2.html"

# 技術チェック
echo "【技術チェック】${DRUG_NAME}"
echo "class属性: $(grep -c 'class=' $V2_FILE)個（現在9個のはず）"
echo "レベル構造: $(grep -c 'レベル[123]' $V2_FILE)箇所"
echo "行数: $(wc -l $V2_FILE | awk '{print $1}')行"
```

### Step 2: クラス追加作業

**参照ファイル（必須）**:
```bash
# metformin-refinedを開いて参照
open /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/docs/drugs-v2/metformin-refined.html

# クラスリストを確認
open /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note/project-docs/2025-07-03-drug-page-v2-implementation/04_TEMPLATE_ANALYSIS.md
```

**追加が必要なクラス（20個）**:

#### 薬剤情報系
- container（各セクション内に追加）
- drug-header（薬剤名の親div）
- brand-name（商品名のh1）
- generic-name（一般名のp）
- drug-classification（薬効分類の親div）
- drug-class（薬効分類のspan）
- generation（世代/特徴のspan）
- indications（適応症の親div）
- indications__list（適応症のul）

#### コンテンツ系
- quick-summary（30秒サマリーのdiv）※既存セクション内
- impact-grid（サマリー内のグリッド）
- impact-item（各項目のdiv）
- faq-note（FAQ注釈）※FAQがある場合
- prescribing-data（処方データ）※ある場合
- design-spec（処方例のpre）※ある場合
- combination-drugs（併用薬）※ある場合
- combination-drugs__list（併用薬リスト）※ある場合
- quote-box（引用ボックス）※レベル3
- specialist-perspective（専門家視点）※レベル3

### Step 3: 具体的な追加方法

**例1: drug-headerクラスの追加**
```html
<!-- 変更前 -->
<div>
    <h1>ビソプロロール</h1>
    <div>
        <span>ビソプロロールフマル酸塩</span>

<!-- 変更後 -->
<div class="drug-header">
    <h1 class="brand-name">ビソプロロール</h1>
    <div>
        <span class="generic-name">ビソプロロールフマル酸塩</span>
```

**例2: containerクラスの追加**
```html
<!-- 変更前 -->
<section>
    <h2>レベル1：薬学生向け基本情報</h2>
    <div>

<!-- 変更後 -->
<section class="level-1-content">
    <div class="container">
        <h2>レベル1：薬学生向け基本情報</h2>
```

### Step 4: 完了後の処理
```bash
# drug_cssedへコピー
cp docs/_internal/drug_versionup/${DRUG_NAME}-clean-v2.html \
   docs/_internal/drug_cssed/${DRUG_NAME}-clean-v2.html

# コピー確認
ls -la docs/_internal/drug_cssed/ | grep ${DRUG_NAME}
```

---

## 📊 進捗管理表

Manager用チェックリスト：

| 薬剤名 | 技術確認 | クラス追加 | drug_cssedコピー | 完了時刻 |
|--------|----------|-----------|-----------------|----------|
| bisoprolol | □ | □ | □ | __:__ |
| carvedilol | □ | □ | □ | __:__ |
| digoxin | □ | □ | □ | __:__ |
| esomeprazole | □ | □ | □ | __:__ |
| furosemide | □ | □ | □ | __:__ |
| lansoprazole | □ | □ | □ | __:__ |
| omeprazole | □ | □ | □ | __:__ |
| spironolactone | □ | □ | □ | __:__ |
| warfarin | □ | □ | □ | __:__ |

---

## ⚠️ 重要な注意事項

1. **クラス名は正確に**: metformin-refined.htmlと完全一致させる
2. **構造を壊さない**: HTMLの入れ子関係を維持
3. **JavaScript部分は触らない**: 最後の<script>タグはそのまま
4. **疑問があれば即質問**: CEO宛にsend-message.shで

---

## 🎯 期待される成果

- 9薬剤すべてが29個の統一クラスを持つ
- drug_cssedディレクトリに配置完了
- CSS付与作業（Step 3）の準備完了

**作業開始**: 即時  
**完了目標**: 1時間以内

頑張ってください！質問があれば遠慮なく聞いてください。