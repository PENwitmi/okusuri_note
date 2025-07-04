# 薬剤割り当て表

**作成日時**: 2025-07-03 05:57  
**作成者**: CEO  
**更新者**: Manager（割り当て時に記入）  
**対象薬剤数**: 19薬剤

---

## 📋 作業対象薬剤リスト

**注意**: 以下の薬剤は作業対象外です
- ❌ metformin.html（完成済み）
- ❌ rosuvastatin.html（特例ルート対応中）
- ❌ telmisartan.html（特例ルート対応中）
- ❌ metformin_originated.html（旧バージョン）

---

## 📊 割り当て表

| No. | 薬剤名（日本語） | ファイル名 | 薬効分類 | 担当Developer | Step1状態 | Step2状態 | 備考 |
|-----|-----------------|-----------|----------|---------------|-----------|-----------|------|
| 1 | アトルバスタチン | atorvastatin.html | 脂質異常症治療薬 | dev1 | ✅ | ✅ | 高頻度処方薬・最優先 |
| 2 | ビソプロロール | bisoprolol.html | β遮断薬 | dev1 | ✅ | ✅ | |
| 3 | カンデサルタン | candesartan.html | ARB | dev2 | ✅ | ✅ | ARBグループ・優先 |
| 4 | カルベジロール | carvedilol.html | αβ遮断薬 | dev1 | ✅ | ✅ | |
| 5 | ダパグリフロジン | dapagliflozin.html | SGLT2阻害薬 | dev2 | ✅ | ✅ | SGLT2グループ |
| 6 | ジゴキシン | digoxin.html | 強心配糖体 | dev1 | ✅ | ✅ | |
| 7 | エンパグリフロジン | empagliflozin.html | SGLT2阻害薬 | dev2 | ✅ | ✅ | SGLT2グループ |
| 8 | エナラプリル | enalapril.html | ACE阻害薬 | dev3 | ✅ | ✅ | ACEグループ・優先 |
| 9 | エスシタロプラム | escitalopram.html | SSRI | dev3 | ✅ | ✅ | SSRIグループ |
| 10 | エソメプラゾール | esomeprazole.html | PPI | dev1 | ✅ | ✅ | PPIグループ・優先 |
| 11 | フロセミド | furosemide.html | ループ利尿薬 | dev1 | ✅ | ✅ | 利尿薬グループ |
| 12 | ランソプラゾール | lansoprazole.html | PPI | dev1 | ✅ | ✅ | PPIグループ・優先 |
| 13 | ロサルタン | losartan.html | ARB | dev2 | ✅ | ✅ | ARBグループ |
| 14 | オメプラゾール | omeprazole.html | PPI | dev1 | ✅ | ✅ | PPIグループ |
| 15 | ペリンドプリル | perindopril.html | ACE阻害薬 | dev3 | ✅ | ✅ | ACEグループ |
| 16 | セルトラリン | sertraline.html | SSRI | dev3 | ✅ | ✅ | SSRIグループ・14:14完了 |
| 17 | スピロノラクトン | spironolactone.html | K保持性利尿薬 | dev1 | ✅ | ✅ | 利尿薬グループ |
| 18 | バンコマイシン | vancomycin.html | グリコペプチド系抗菌薬 | dev2 | ✅ | ✅ | 14:10完了 |
| 19 | ワルファリン | warfarin.html | 抗凝固薬 | dev1 | ✅ | ✅ | 14:12完了 |

---

## 📝 記入ルール（Manager用）

### 担当Developer欄
- dev1、dev2、dev3 のいずれかを記入
- 均等に配分することを推奨（各6-7薬剤）

### 状態欄の記入方法
- 空欄: 未着手
- 🔄: 作業中
- ✅: 完了
- ❌: エラー（備考に詳細記載）

### 優先順位の考慮
1. **高頻度処方薬を優先**
   - atorvastatin（脂質異常症）
   - candesartan、losartan（高血圧）
   - esomeprazole、lansoprazole（消化器）

2. **薬効群でグループ化**
   - PPI 3剤（esomeprazole、lansoprazole、omeprazole）→ 同一Developer
   - ARB 2剤（candesartan、losartan）→ 同一Developer
   - SGLT2 2剤（dapagliflozin、empagliflozin）→ 同一Developer

---

## 🔄 更新履歴

| 日時 | 更新者 | 内容 |
|------|--------|------|
| 2025-07-03 05:57 | CEO | 初版作成 |
| 2025-07-03 09:15 | Manager | 19薬剤を3名の開発者に割り当て完了（薬効群考慮） |
| 2025-07-03 14:29 | CEO | 全19薬剤のStep1,2完了状態を反映（14:14時点で全作業完了） |

---

## 📌 使用方法

### Managerの作業
1. 各Developerの現在の負荷を確認
2. 薬効群と優先度を考慮して割り当て
3. 担当Developer欄に記入
4. Developerに通知

### Developerの作業
1. 自分の担当薬剤を確認
2. 上から順に作業開始
3. 各ステップ完了時にManagerに報告
4. Managerが状態欄を更新

---

## 🎯 目標

- **1薬剤あたり**: 約50分（Step1: 20分、Step2: 30分）
- **1Developer あたり**: 6-7薬剤
- **全体完了目標**: 1-2日

---

**参考ドキュメント**:
- 作業手順: `./DEVELOPER_TASK_GUIDE.md`
- Step 1詳細: `./STEP1_CLEAN_GUIDE.md`
- Step 2詳細: `./STEP2_VERSION2_GUIDE.md`

---

**ドキュメント作成完了**: 2025-07-03 05:57