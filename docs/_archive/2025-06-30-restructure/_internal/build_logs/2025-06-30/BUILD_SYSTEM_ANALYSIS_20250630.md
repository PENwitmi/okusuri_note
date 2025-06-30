# PharmaDX ビルドシステム分析レポート
作成日時: 2025-06-30 17:00

## 概要

PharmaDXプロジェクトのビルドシステムを詳細に分析した結果、設計意図と実装の乖離により、価値あるコンテンツが失われる重大な問題を発見しました。
本レポートでは、問題の根本原因と影響範囲を明確にします。

## 1. アーキテクチャ設計意図

### 関心分離の原則
```
content/          ←→          docs/
(コンテンツ原稿)    ｜変換｜    (公開サイト)
専門知識の蓄積      tools/     ユーザー体験
```

**設計理念**：
- content/: 薬学専門知識の編集・蓄積（Markdown形式）
- tools/: 自動変換処理
- docs/: GitHub Pages公開用HTML

## 2. ビルドシステムの現状

### 2.1 処理フロー
1. `tools/build.sh` → `tools/run_conversion.sh` → `tools/convert_pharmadx.js`
2. convert_pharmadx.jsが`content/drug_database`内のすべてのMDファイルを処理
3. すべてを「薬効群モデル」として扱い、薬効群ページを生成
4. 各薬効群から個別薬剤ページを抽出・生成

### 2.2 ファイルタイプの誤認識

**実際のcontent/drug_database構造**：
```
drug_database/
├── cardiovascular/
│   ├── ARB_evolution_model.md      # 薬効群モデル（正しい処理対象）
│   ├── bisoprolol.md              # 個別薬剤ファイル（誤処理）
│   ├── furosemide.md              # 個別薬剤ファイル（誤処理）
│   └── digoxin.md                 # 個別薬剤ファイル（誤処理）
├── diabetes/
│   └── dapagliflozin.md           # 個別薬剤ファイル（誤処理）
└── ...
```

**問題**：convert_pharmadx.jsはファイル名の接尾辞（_evolution_model等）を考慮せず、
すべてのMDファイルを薬効群モデルとして処理している。

## 3. 問題の影響

### 3.1 コンテンツの上書き問題

**Phase 2で作成された高品質HTML**：
- candesartan.html: 610行（詳細な臨床情報、30秒サマリー等）
- telmisartan.html: 916行（包括的な薬剤解説）

**ビルドツール実行後**：
- すべて65行のテンプレートHTMLに置換
- 詳細情報の完全喪失

### 3.2 未活用MDファイル（10薬剤、5,328行）

| ファイル | 行数 | 内容品質 |
|---------|------|---------|
| dapagliflozin.md | 742行 | SGLT2阻害薬の革命的歴史、適応拡大の詳細 |
| digoxin.md | 563行 | 1785年からの歴史的背景、TDM解説 |
| furosemide.md | 560行 | 急性期医療での絶対的地位、病態別使い分け |
| bisoprolol.md | 322行 | β1選択性の究極進化、CIBIS-II試験 |
| 他6ファイル | 3,141行 | 各薬剤の詳細解説 |

**問題**：これらのMDファイルは薬効群モデルとして誤処理され、
本来の個別薬剤ページとしてHTML化されていない。

## 4. 根本原因分析

### 4.1 convert_pharmadx.jsの処理ロジック

```javascript
// 現在の処理（問題あり）
const drugGroupFiles = this.getFiles('../content/drug_database', '.md');
for (const file of drugGroupFiles) {
    // すべてのMDファイルを薬効群として処理
    const analysis = this.analyzeDrugGroupContent(content, file);
    this.drugGroups.set(analysis.name, analysis);
}
```

**問題点**：
- ファイル名による種別判定なし
- 個別薬剤MDの直接HTML化ルートなし
- 既存HTMLファイルの保護機能なし

### 4.2 generateSingleDrugPage()の限界

```javascript
// 現在の個別薬剤ページ生成
generateSingleDrugPage(drugName) {
    const drugInfo = config.drugInfo[drugName];  // 簡易情報のみ
    // 65行のテンプレートHTML生成
}
```

**問題**：config.jsonの簡易情報（3-4行）からページを生成するため、
詳細な内容を含むことができない。

## 5. 設計と実装の乖離

### 期待される処理フロー
1. 薬効群モデル（_evolution_model.md等）→ 薬効群ページ
2. 個別薬剤MD（薬剤名.md）→ 個別薬剤詳細ページ
3. 既存の高品質HTMLは保護

### 実際の処理フロー
1. すべてのMDを薬効群として処理
2. 薬効群から個別薬剤を抽出（情報欠落）
3. 既存HTMLを無条件で上書き

## 6. 影響範囲

### 定量的影響
- **失われたコンテンツ**: 12薬剤 × 平均400行 = 約5,000行
- **未活用コンテンツ**: 10薬剤 × 平均530行 = 5,328行
- **合計損失**: 約10,000行の高品質教育コンテンツ

### 定性的影響
- 薬学生・医療従事者への教育価値の損失
- 詳細な臨床情報へのアクセス不能
- プロジェクトの核心価値「なぜ似た薬が複数存在するのか」への回答不十分

## 7. 緊急度評価

**🔴 最高優先度の理由**：
1. 毎回のビルド実行で価値あるコンテンツが失われる
2. 5,328行の詳細MDファイルが活用されていない
3. ユーザーは簡易情報しか見ることができない

## 8. 次のステップ

1. **CONTENT_STRUCTURE_GUIDE_20250630.md**の作成
   - 正しいファイル構造と命名規則の定義
   
2. **BUILD_FLOW_IMPROVEMENT_PLAN_20250630.md**の作成
   - 改善後の処理フロー設計
   
3. ビルドツールの改善実装
   - ファイルタイプ判別機能
   - 既存ファイル保護機能
   - 個別薬剤MD直接処理

---

*このレポートは、PharmaDXプロジェクトの価値を守り、最大化するための重要な記録です。*