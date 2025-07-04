# atorvastatin特別対応ガイド

**作成日時**: 2025-07-03 23:20  
**作成者**: CEO  
**対象**: atorvastatin-clean-v2.html（グループC）  
**問題**: 独自の41クラス使用

---

## 🚨 現状の問題

atorvastatinは他の薬剤と異なり、開発者が独自のクラス体系で完全実装してしまった：
- 使用クラス数: 41個（標準は29個）
- 独自クラス: summary-grid, info-grid, mechanism-section等
- 不足クラス: container, prescribing-data, combination-drugs等

---

## 🔧 修正方針

### Option A: クラス名の置換（推奨）
既存の構造を活かしつつ、クラス名のみ標準化

**主な置換リスト**:
```
summary-grid → impact-grid
summary-item → impact-item
basic-info → （削除、不要）
info-grid → （削除、不要）
info-item → card（または適切なクラス）
mechanism-section → （削除、sectionタグで十分）
mechanism-grid → （削除または別クラス）
mechanism-item → card
interaction-section → （削除）
interaction-grid → （削除）
interaction-item → card
monitoring-section → （削除）
monitoring-grid → （削除）
monitoring-item → card
```

### Option B: クリーンからやり直し
1. 現在のatorvastatin-clean-v2.htmlをバックアップ
2. atorvastatin-clean.htmlから再度Ver2化
3. クラスなしで構造のみ作成
4. 後でCEO/Managerがクラス付与

---

## 📝 Option A実行手順

### Step 1: バックアップ作成
```bash
cd /Users/nishimototakashi/claude\ code/ai-team/code/okusuri_note
mkdir -p _old_files/backup_$(date +%Y%m%d_%H%M)/
cp docs/_internal/drug_versionup/atorvastatin-clean-v2.html \
   _old_files/backup_$(date +%Y%m%d_%H%M)/atorvastatin-clean-v2-original.html
```

### Step 2: 一括置換
```bash
# sedコマンドで置換（Mac用）
sed -i '' 's/summary-grid/impact-grid/g' docs/_internal/drug_versionup/atorvastatin-clean-v2.html
sed -i '' 's/summary-item/impact-item/g' docs/_internal/drug_versionup/atorvastatin-clean-v2.html
```

### Step 3: 不要クラスの削除
手動で以下のクラスを削除：
- basic-info
- info-grid, info-item
- mechanism-section, mechanism-grid, mechanism-item
- interaction-section, interaction-grid, interaction-item
- monitoring-section, monitoring-grid, monitoring-item

### Step 4: 必要クラスの追加
- container（各セクション内）
- prescribing-data, design-spec（処方例があれば）
- combination-drugs, combination-drugs__list（併用薬があれば）
- faq-note（FAQがあれば）

---

## ✅ 修正後の確認

```bash
# クラス数の確認（29個前後になるはず）
grep -o 'class="[^"]*"' docs/_internal/drug_versionup/atorvastatin-clean-v2.html | sort | uniq | wc -l

# 標準クラスとの比較
grep -o 'class="[^"]*"' docs/_internal/drug_versionup/atorvastatin-clean-v2.html | sort | uniq > atorvastatin-classes.txt
grep -o 'class="[^"]*"' docs/drugs-v2/metformin-refined.html | sort | uniq > metformin-classes.txt
diff atorvastatin-classes.txt metformin-classes.txt
```

---

## 🎯 期待される結果

- クラス数: 29個程度（metforminと同等）
- 標準クラスのみ使用
- コンテンツは現状維持（578行の充実した内容）
- drug-page-v2.cssとの完全互換性

---

## 📊 作業時間見積もり

- Option A（クラス置換）: 30分
- Option B（やり直し）: 1時間以上

**推奨**: Option A（既存の良い構造を活かせる）