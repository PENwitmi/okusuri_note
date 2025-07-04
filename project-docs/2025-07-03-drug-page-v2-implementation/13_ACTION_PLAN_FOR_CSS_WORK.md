# CSS付与作業のためのアクションプラン

**作成日時**: 2025-07-03 22:58  
**作成者**: CEO  
**目的**: 19薬剤の異なる実装状態を統一し、CSS付与準備を完了する

---

## 📊 現状整理

### 19薬剤の実装状態
| グループ | 薬剤数 | 状態 | 対応必要度 |
|---------|--------|------|-----------|
| A | 9薬剤 | クラスなし（完璧） | そのまま使用可 |
| B | 9薬剤 | 基本クラス9個のみ | クラス追加必要 |
| C | 1薬剤 | 独自クラス41個 | 全面的な修正必要 |

---

## 🎯 推奨アプローチ

### Step 1: グループAの即時活用（9薬剤）
これらはすでに理想的な状態なので、すぐにCSS付与作業に進める。

**対象薬剤**:
- candesartan, dapagliflozin, empagliflozin, enalapril
- escitalopram, losartan, perindopril, sertraline, vancomycin

**作業**:
1. コンテンツ品質チェック（内容の充実度確認）
2. 合格したものをdrug_cssedへコピー
3. CSS付与作業開始

### Step 2: グループBの軽微な調整（9薬剤）
基本構造クラスのみ持っているので、残りのクラスを追加。

**対象薬剤**:
- bisoprolol, carvedilol, digoxin, esomeprazole
- furosemide, lansoprazole, omeprazole, spironolactone, warfarin

**現在のクラス（9個）**:
```
drug-detail, level-selector, level-selector__inner,
level-btn active, level-btn (×2),
level-1-content, level-2-content, level-3-content
```

**追加が必要なクラス（例）**:
```
container, drug-header, brand-name, generic-name,
drug-classification, drug-class, generation,
indications, indications__list, impact-grid, impact-item,
faq-note, prescribing-data, design-spec,
combination-drugs, combination-drugs__list, etc.
```

### Step 3: グループCの全面修正（1薬剤）
atorvastatinは独自のクラス体系を使用しているため、metformin-refined基準に合わせる。

**修正内容**:
- summary-grid → impact-grid
- summary-item → impact-item
- basic-info, info-grid等の独自クラス → 削除または標準クラスに置換

---

## 🗓️ 作業スケジュール案

### Phase 1: 即時開始可能（30分）
1. グループA（9薬剤）の品質チェック
2. 合格ファイルをdrug_cssedへコピー
3. CSS付与作業の並行開始

### Phase 2: 調整作業（1時間）
1. グループB（9薬剤）へのクラス追加
   - sedコマンドまたは手動でクラスを追加
   - metformin-refinedを参照しながら適切な位置に配置
2. 品質チェック後、drug_cssedへコピー

### Phase 3: 修正作業（30分）
1. atorvastatinのクラス体系修正
2. 品質チェック後、drug_cssedへコピー

---

## 🔧 具体的な作業コマンド例

### グループAの品質チェックとコピー
```bash
# 例: candesartanの処理
DRUG="candesartan"
# コンテンツ品質確認（目視）
# 合格後：
cp docs/_internal/drug_versionup/${DRUG}-clean-v2.html \
   docs/_internal/drug_cssed/${DRUG}-clean-v2.html
```

### グループBへのクラス追加例
```bash
# 例: drug-headerクラスの追加
# <h1>商品名</h1>の親divにclass="drug-header"を追加
# 手動またはスクリプトで実施
```

---

## ✅ 成功基準

1. **全19薬剤がmetformin-refined.htmlと同じクラス体系を使用**
2. **drug_cssedディレクトリに品質確認済みファイルが配置**
3. **CSS付与作業（Step 3）の準備完了**

---

## 📝 CEO-Manager協働ポイント

### 役割分担案
- **CEO**: 品質評価、戦略判断、グループCの修正指導
- **Manager**: グループA/Bの処理実行、進捗管理、品質確認

### 品質チェック基準
- 技術的品質（クラス統一性）
- コンテンツ品質（充実度）
- 両方合格で drug_cssed へ

---

## 🚀 次のアクション

1. **このプランの承認**
2. **グループAの即時処理開始**
3. **並行してCSS付与作業の準備**

**推定完了時間**: 全体で2-3時間