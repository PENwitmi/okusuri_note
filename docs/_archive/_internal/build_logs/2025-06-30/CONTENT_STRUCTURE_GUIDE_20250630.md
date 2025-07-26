# PharmaDX コンテンツ構造ガイド
作成日時: 2025-06-30 17:10

## 目的

このガイドは、PharmaDXプロジェクトのコンテンツ構造を明確に定義し、
ビルドシステムが正しくファイルを処理できるようにするための基準書です。

## 1. コンテンツの種類

### 1.1 薬効群モデル（Drug Group Models）

**定義**: 薬効群全体の進化、使い分け、処方実態を解説する包括的ドキュメント

**ファイル命名規則**:
- `{薬効群名}_evolution_model.md` - 進化系統図と詳細解説
- `{薬効群名}_prescription_reality.md` - 処方実態分析
- `{薬効群名}_guide.md` - 総合ガイド

**配置場所**: `content/drug_database/{カテゴリ}/`

**例**:
```
content/drug_database/cardiovascular/ARB_evolution_model.md
content/drug_database/cardiovascular/beta_blocker_evolution_model.md
content/drug_database/gastrointestinal/PPI_evolution_model.md
```

**内容構造**:
```markdown
# {薬効群}進化系統図と臨床使い分けモデル

## 📍 5分サマリー
### 薬効群の本質
### 主要薬剤一覧（表形式）
### 処方選択フローチャート

## 📊 臨床使い分けマトリックス
## 💊 実際の処方例
## 📊 処方実態解明
```

### 1.2 個別薬剤詳細（Individual Drug Details）

**定義**: 特定の薬剤に関する詳細な解説ドキュメント

**ファイル命名規則**:
- `{薬剤名（英語小文字）}.md`
- アンダースコアやハイフンなし
- 薬効群を示す接尾辞なし

**配置場所**: `content/drug_database/{カテゴリ}/`

**例**:
```
content/drug_database/cardiovascular/bisoprolol.md
content/drug_database/diabetes/dapagliflozin.md
content/drug_database/cardiovascular/furosemide.md
```

**内容構造**:
```markdown
# {薬剤名日本語}（{商品名}）詳細解説モデル

## 📍 5分サマリー
### 薬剤の本質（1-2文で）
### 主要ポジション
### なぜ{薬剤名}が特別なのか

## 🧬 {薬剤名}の歴史的背景
## 💊 臨床使い分けと実践
## ⚠️ 副作用と注意点
## 🔮 将来展望
```

### 1.3 ストーリー（Stories）

**配置場所**: `content/stories/`
**形式**: Markdown
**命名**: `{番号}_{タイトル}.md`

### 1.4 学習ツール（Study Tools）

**配置場所**: `content/study_tools/`
**形式**: HTML（インタラクティブカード）

## 2. ファイル判別ロジック

### 薬効群モデルの判定条件
```javascript
function isDrugGroupModel(filename) {
    return filename.includes('_evolution_model') ||
           filename.includes('_prescription_reality') ||
           filename.includes('_guide') ||
           filename.includes('_ecosystem');
}
```

### 個別薬剤ファイルの判定条件
```javascript
function isIndividualDrugFile(filename, content) {
    // ファイル名に特定の接尾辞がない
    const hasNoModelSuffix = !isDrugGroupModel(filename);
    
    // 内容に個別薬剤の特徴的な構造がある
    const hasDetailedDrugContent = content.includes('5分サマリー') &&
                                  content.includes('薬剤の本質');
    
    return hasNoModelSuffix && hasDetailedDrugContent;
}
```

## 3. ディレクトリ構造（現状）

```
pharma_dex/
├── content/
│   ├── drug_database/
│   │   ├── cardiovascular/        # 循環器系
│   │   │   ├── ARB_evolution_model.md      # 薬効群モデル
│   │   │   ├── bisoprolol.md              # 個別薬剤
│   │   │   ├── furosemide.md              # 個別薬剤
│   │   │   └── digoxin.md                 # 個別薬剤
│   │   ├── diabetes/              # 糖尿病
│   │   │   ├── SGLT2_evolution_model.md    # 薬効群モデル
│   │   │   └── dapagliflozin.md           # 個別薬剤
│   │   └── ...
│   ├── stories/                   # ストーリー
│   └── study_tools/               # 学習ツール
├── tools/                         # ビルドツール
└── docs/                          # 公開サイト
    ├── drugs/                     # 個別薬剤ページ
    ├── groups/                    # 薬効群ページ
    └── stories/                   # ストーリーページ
```

## 4. 出力構造マッピング

### 入力 → 出力の対応関係

| 入力ファイル | 処理方法 | 出力ファイル |
|------------|---------|------------|
| `ARB_evolution_model.md` | 薬効群として処理 | `docs/groups/ARB.html` |
| `bisoprolol.md` | 個別薬剤として処理 | `docs/drugs/bisoprolol.html` |
| `01_penicillin.md` | ストーリーとして処理 | `docs/stories/01_penicillin.html` |

## 5. コンテンツ品質基準

### 薬効群モデル
- **A級**: 5分サマリー、使い分けマトリックス、処方実態すべて含む
- **B級**: 基本構造はあるが、一部セクション不足
- **C級**: 基本情報のみ

### 個別薬剤詳細
- **必須要素**: 5分サマリー、薬剤の本質、臨床使い分け
- **推奨要素**: 歴史的背景、副作用詳細、将来展望
- **最小行数**: 200行（理想: 500行以上）

## 6. 現在確認されているファイル

### 薬効群モデル（23ファイル）
```
ARB_evolution_model.md
ACE_inhibitor_evolution_model.md
beta_blocker_evolution_model.md
diuretics_evolution_model.md
SGLT2_evolution_model.md
PPI_evolution_model.md
statin_evolution_model.md
SSRI_evolution_model.md
...（他15ファイル）
```

### 個別薬剤詳細（10ファイル、5,328行）
```
bisoprolol.md (322行)
dapagliflozin.md (742行)
digoxin.md (563行)
furosemide.md (560行)
atorvastatin.md (476行)
carvedilol.md (372行)
enalapril.md (330行)
perindopril.md (320行)
vancomycin.md (404行)
warfarin.md (239行)
```

## 7. 推奨事項

### 将来的なディレクトリ構造改善案
```
drug_database/
├── groups/              # 薬効群モデル専用
│   ├── ARB_evolution_model.md
│   └── ...
├── drugs/               # 個別薬剤専用
│   ├── bisoprolol.md
│   └── ...
└── data/                # 共通データ
```

### ファイル命名の統一
- 薬効群: 必ず`_model`または`_guide`を含める
- 個別薬剤: 薬剤名のみ（英語小文字）
- 明確な区別により、自動処理の精度向上

## 8. このガイドの活用方法

1. **ビルドツール開発時**: ファイル判別ロジックの実装基準として使用
2. **コンテンツ作成時**: 正しいファイル名と構造の参考として使用
3. **品質管理時**: コンテンツが基準を満たしているかの確認に使用

---

*このガイドは、PharmaDXプロジェクトの持続可能な発展のための重要な基準書です。*
*定期的な更新により、常に最新の状態を保つことが推奨されます。*