# HTML→MD逆変換計画書
作成日時: 2025-06-30 16:45

## 目的

MDファイルなしで直接HTML化された12薬剤について、統一的な管理体制確立のためMDファイルを生成する。

## 対象薬剤（12薬剤）

| 薬剤名 | HTML行数 | MDファイル作成先 |
|--------|----------|------------------|
| テルミサルタン | 916行 | content/tmp/cardiovascular/telmisartan.md |
| ロサルタン | 764行 | content/tmp/cardiovascular/losartan.md |
| カンデサルタン | 610行 | content/tmp/cardiovascular/candesartan.md |  
| スピロノラクトン | 607行 | content/tmp/cardiovascular/spironolactone.md |
| エンパグリフロジン | 492行 | content/tmp/diabetes/empagliflozin.md |
| ロスバスタチン | 476行 | content/tmp/lipid/rosuvastatin.md |
| オメプラゾール | 475行 | content/tmp/gastrointestinal/omeprazole.md |
| メトホルミン | 308行 | content/tmp/diabetes/metformin.md |
| エスシタロプラム | 292行 | content/tmp/psychotropic/escitalopram.md |
| セルトラリン | 263行 | content/tmp/psychotropic/sertraline.md |
| エソメプラゾール | 241行 | content/tmp/gastrointestinal/esomeprazole.md |
| ランソプラゾール | 117行 | content/tmp/gastrointestinal/lansoprazole.md |

## 変換プロセス

### Step 1: ディレクトリ構造作成
```bash
mkdir -p content/tmp/cardiovascular
mkdir -p content/tmp/diabetes  
mkdir -p content/tmp/lipid
mkdir -p content/tmp/gastrointestinal
mkdir -p content/tmp/psychotropic
```

### Step 2: HTML→MD変換ルール

#### 基本構造テンプレート
```markdown
# [薬剤名日本語]（[商品名]）詳細解説モデル

## 📍 5分サマリー

### 薬剤の本質（1-2文で）
[30秒サマリーの内容を基に作成]

### 主要ポジション
- **薬効群**: [薬効群名]
- **発売年**: [年]
- **処方シェア**: [%]
- **適応症**: [主要適応]

### なぜ[薬剤名]が特別なのか（本質的な答え）
[臨床的意義セクションから抽出]

---

## 🧬 [薬剤名]の歴史的背景
[歴史セクションから変換]

## 💊 臨床使い分けと実践
[使い分けセクションから変換]

## ⚠️ 副作用と注意点
[副作用管理セクションから変換]

## 🔮 将来展望
[将来の可能性セクションから変換]
```

### Step 3: 変換方法

#### 自動変換可能な要素
1. **見出し構造**: `<h2>`, `<h3>` → `##`, `###`
2. **リスト**: `<ul>`, `<li>` → `-`
3. **表**: `<table>` → Markdown表記法
4. **強調**: `<strong>` → `**`

#### 手動調整が必要な要素
1. **30秒サマリー** → 5分サマリーの薬剤の本質へ
2. **視覚的要素** → テキストベースの説明へ
3. **CSSスタイル** → Markdown装飾（絵文字等）へ

### Step 4: 品質確認チェックリスト

- [ ] 基本構造（5分サマリー、歴史、臨床、副作用）の完備
- [ ] 既存MDファイルとの構造的整合性
- [ ] 臨床情報の正確性
- [ ] 教育的価値の維持
- [ ] 500行以上の詳細度（可能な限り）

## 実装優先順位

### 第1優先（ARB系）
1. ロサルタン（764行）
2. テルミサルタン（916行）
3. カンデサルタン（610行）

**理由**: ARBモデルファイルとの整合性確保が重要

### 第2優先（心不全関連）
1. スピロノラクトン（607行）
2. エンパグリフロジン（492行）

**理由**: 循環器系薬剤の統一性

### 第3優先（その他）
- 残り7薬剤

## 期待される効果

1. **統一管理**: 全薬剤でMD→HTMLの一方向フロー確立
2. **バージョン管理**: MDファイルでの変更履歴追跡
3. **保守性向上**: 内容更新の容易化
4. **品質保証**: 統一的な品質基準の適用

## リスクと対策

### リスク
- 変換時の情報欠落
- HTMLの視覚的要素の損失
- 作業時間の増大

### 対策
- 段階的実装（優先順位に従う）
- 元HTMLファイルの完全保持
- 自動化ツールの検討（将来的に）

## 所要時間見積もり

- **1薬剤あたり**: 10-15分
- **12薬剤合計**: 2-3時間
- **品質確認**: 30分
- **総計**: 3-4時間

## 結論

HTML→MD逆変換により、全薬剤での統一的な管理体制を確立できます。
特に優先度の高いARB系から着手し、段階的に全薬剤へ展開することで、
リスクを最小化しながら品質の統一性を達成できます。