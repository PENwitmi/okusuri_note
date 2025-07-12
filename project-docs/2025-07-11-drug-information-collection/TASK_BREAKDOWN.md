# タスク分解と実行計画

**作成日時**: 2025-07-11 23:59  
**プロジェクト**: 新規薬剤情報収集プロジェクト

## 📋 タスク全体像

### Phase 1: 準備と理解（30分）
1. **ドキュメント精読**
   - DRUGS_TO_ADD_LIST.md の確認
   - 既存v3ページの品質基準理解
   - source_materials構造の把握

2. **参考資料の確認**
   - metformin-v3.html の構成分析
   - 既存source_materials/drugs/ の優良例確認

### Phase 2: 情報収集実行（3-4時間）
3名の開発者による並列作業

### Phase 3: 品質確認と統合（30分）
品質チェックと進捗管理更新

## 🎯 開発者別タスク割当

### Dev1: ステロイド・免疫抑制薬担当（4薬剤）

#### タスク1-1: プレドニゾロン情報収集
```
場所: source_materials/drugs/corticosteroids/prednisolone.md
内容:
- ステロイドの代表薬としての位置づけ
- 用量依存的な作用と副作用
- パルス療法などの特殊な使用法
- 離脱症候群の防止
推定時間: 45分
```

#### タスク1-2: メトトレキサート情報収集
```
場所: source_materials/drugs/immunosuppressants/methotrexate.md
内容:
- 抗リウマチ薬と抗がん薬の二面性
- 葉酸拮抗作用のメカニズム
- 低用量と高用量での使い分け
- 葉酸併用の重要性
推定時間: 45分
```

#### タスク1-3: シクロスポリン情報収集
```
場所: source_materials/drugs/immunosuppressants/cyclosporine.md
内容:
- カルシニューリン阻害薬の先駆け
- 臓器移植医療への貢献
- 血中濃度モニタリングの必要性
- タクロリムスとの比較
推定時間: 40分
```

#### タスク1-4: タクロリムス情報収集
```
場所: source_materials/drugs/immunosuppressants/tacrolimus.md
内容:
- 日本発の免疫抑制薬
- FK506の開発ストーリー
- シクロスポリンとの使い分け
- アトピー性皮膚炎への応用
推定時間: 40分
```

### Dev2: 抗がん薬・感染症薬担当（5薬剤）

#### タスク2-1: シクロホスファミド情報収集
```
場所: source_materials/drugs/antineoplastics/cyclophosphamide.md
内容:
- アルキル化薬の代表
- 活性代謝物への変換
- 出血性膀胱炎の予防（メスナ併用）
- 自己免疫疾患への応用
推定時間: 40分
```

#### タスク2-2: フルオロウラシル情報収集
```
場所: source_materials/drugs/antineoplastics/fluorouracil.md
内容:
- 代謝拮抗薬の基本
- DPD欠損症のリスク
- 5-FU系薬剤の進化（カペシタビン等）
- 軟膏剤としての皮膚科使用
推定時間: 40分
```

#### タスク2-3: イリノテカン情報収集
```
場所: source_materials/drugs/antineoplastics/irinotecan.md
内容:
- トポイソメラーゼ阻害薬
- UGT1A1遺伝子多型と副作用
- 下痢の管理（早発性・遅発性）
- FOLFIRI療法での位置づけ
推定時間: 40分
```

#### タスク2-4: イトラコナゾール情報収集
```
場所: source_materials/drugs/antifungals/itraconazole.md
内容:
- トリアゾール系抗真菌薬
- 爪白癬へのパルス療法
- 薬物相互作用の多さ
- 内用液の特殊な服用法
推定時間: 35分
```

#### タスク2-5: バラシクロビル情報収集
```
場所: source_materials/drugs/antivirals/valaciclovir.md
内容:
- アシクロビルのプロドラッグ
- 帯状疱疹の早期治療
- 性器ヘルペスの抑制療法
- 腎機能による用量調整
推定時間: 35分
```

### Dev3: 循環器薬・その他担当（4薬剤）

#### タスク3-1: プラスグレル情報収集
```
場所: source_materials/drugs/cardiovascular/antiplatelet_drugs/prasugrel.md
内容:
- 第3世代チエノピリジン系
- クロピドグレル抵抗性への対応
- 出血リスクと効果のバランス
- 日本人での用量設定
推定時間: 40分
```

#### タスク3-2: アミオダロン情報収集
```
場所: source_materials/drugs/cardiovascular/antiarrhythmics/amiodarone.md
内容:
- 最強の抗不整脈薬
- 多彩な副作用（肺・甲状腺・肝）
- 半減期の長さと蓄積性
- 薬物相互作用の管理
推定時間: 45分
```

#### タスク3-3: コルヒチン情報収集
```
場所: source_materials/drugs/metabolic/gout/colchicine.md
内容:
- 古代からの痛風治療薬
- 微小管阻害作用
- 狭い治療域と中毒症状
- 心膜炎への新たな適応
推定時間: 40分
```

#### タスク3-4: クロルフェニラミン情報収集
```
場所: source_materials/drugs/antihistamines/chlorpheniramine.md
内容:
- 第一世代抗ヒスタミン薬
- 中枢移行性と眠気
- OTC薬での広範な使用
- 新世代薬との使い分け
推定時間: 35分
```

## 📝 各開発者への具体的指示

### 共通指示事項
1. **参照すべきテンプレート**
   - 構成: `/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/source_materials/drugs/cardiovascular/arbs/telmisartan.md`
   - 品質: `/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/drugs-v3/metformin-v3.html`

2. **必須確認事項**
   - 医学的正確性の確保
   - 教育的価値の付加
   - 実践的な使い分け情報

3. **ファイル作成時の注意**
   - UTF-8エンコーディング
   - Markdown形式での記述
   - 適切な見出しレベルの使用

### 進捗報告方法
```bash
# 各薬剤完了時
"dev[番号]→manager【完了報告】
[薬剤名]の情報収集が完了しました。
ファイル: [絶対パス]
行数: [行数]
特記事項: [あれば]"
```

## ⏱️ タイムライン

### 想定スケジュール
- 09:00-09:30: ドキュメント精読・準備
- 09:30-12:30: 並列情報収集作業
- 12:30-13:00: 品質確認・統合作業

### マイルストーン
1. **10:30**: 各開発者最初の薬剤完了
2. **11:30**: 各開発者2薬剤目完了
3. **12:30**: 全薬剤情報収集完了

## ✅ 品質チェックリスト

各薬剤ファイル作成後の確認項目：
- [ ] 必須4セクションすべて記載
- [ ] 300行以上の情報量
- [ ] 医学的正確性の確認
- [ ] 教育的要素の包含
- [ ] 適切なMarkdown形式
- [ ] ファイルパスの正確性