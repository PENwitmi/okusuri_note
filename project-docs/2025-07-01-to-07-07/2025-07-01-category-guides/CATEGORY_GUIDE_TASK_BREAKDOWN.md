# 薬効群別ガイド タスク分解書

**作成日時**: 2025-07-01 01:05  
**作成者**: CEO  
**目的**: Manager向けの詳細なタスク指示書

## 🎯 プロジェクト概要

7つの薬効群別ガイドページを作成し、index.htmlの404エラーを解消する。各ページは700行以上の高品質HTMLで、PharmaDxの核心価値「なぜ似た薬が複数存在するのか」を薬効群レベルで解説する。

## 📋 開発者への具体的タスク割り当て

### Dev1担当（3ページ）

#### 1. cardiovascular-orchestra.html（最優先）
**配置場所**: `/docs/cardiovascular-orchestra.html`（ルート直下）
**目標行数**: 1000行以上（フラッグシップページ）
**参考ファイル**:
- `/source_materials/drug_evolution/clinical_ecosystems/cardiovascular_integrated_guide.md`
- `/source_materials/drug_evolution/evolution_models/cardiovascular/` 全ファイル

**特別要件**:
- オーケストラメタファーを全面的に採用
- 視覚的な楽器配置図（SVGまたはHTML/CSS）
- 各薬剤を楽器に見立てた詳細説明
- インタラクティブな「指揮者モード」（薬剤組み合わせシミュレーター）

#### 2. lipid.html
**配置場所**: `/docs/categories/lipid.html`
**目標行数**: 700行以上
**参考ファイル**:
- `/source_materials/drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md`
- 個別薬剤: rosuvastatin.html, atorvastatin.html

**必須コンテンツ**:
- ストロング vs スタンダードの明確な基準
- 日本人特有の低用量使用の理由
- 横紋筋融解症リスクの比較表

#### 3. others.html
**配置場所**: `/docs/categories/others.html`
**目標行数**: 800行以上
**対象薬剤**: digoxin, vancomycin, warfarin, metformin

**必須コンテンツ**:
- TDM実践ガイド（表形式）
- 相互作用マトリックス
- 特殊病態での用量調整表

### Dev2担当（2ページ）

#### 1. diabetes.html（最優先）
**配置場所**: `/docs/categories/diabetes.html`
**目標行数**: 800行以上
**参考ファイル**:
- `/source_materials/drug_evolution/evolution_models/endocrine/SGLT2_evolution_model.md`
- `/source_materials/drug_evolution/comparative_analyses/01_SGLT2_inhibitor_differentiation.md`

**特別要件**:
- 心不全適応 vs CKD適応の詳細比較
- 「尿に糖を捨てる」革新性の視覚的説明
- EMPA-REG、DAPA-CKD試験の解説

#### 2. diuretic.html
**配置場所**: `/docs/categories/diuretic.html`
**目標行数**: 700行以上
**参考ファイル**:
- `/source_materials/drug_evolution/evolution_models/cardiovascular/diuretics_evolution_model.md`

**必須コンテンツ**:
- 急性期 vs 慢性期のフローチャート
- 電解質への影響比較表
- 日本の心不全ガイドライン準拠

### Dev3担当（2ページ）

#### 1. gastrointestinal.html
**配置場所**: `/docs/categories/gastrointestinal.html`
**目標行数**: 700行以上
**参考ファイル**:
- `/source_materials/drug_evolution/evolution_models/gastrointestinal/PPI_evolution_model.md`

**特別要件**:
- CYP2C19遺伝子多型の図解
- 日本人PM頻度（20%）の強調
- エソメプラゾールの優位性説明

#### 2. psychotropic.html
**配置場所**: `/docs/categories/psychotropic.html`
**目標行数**: 700行以上
**参考ファイル**:
- `/source_materials/drug_evolution/evolution_models/psychotropic/SSRI_evolution_model.md`

**必須コンテンツ**:
- 副作用プロファイル比較
- 初回 vs 切り替え時の選択
- 日本のうつ病治療実態

## 🛠️ 技術的実装要件

### 共通HTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[薬効群名] - PharmaDex薬効群別ガイド</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/interactive.css">
    <link rel="stylesheet" href="../assets/css/category-comparison.css">
</head>
<body>
    <!-- ナビゲーション -->
    <!-- ヒーローセクション（感動的導入） -->
    <!-- 5分サマリー -->
    <!-- メインコンテンツ -->
    <!-- フッター -->
</body>
</html>
```

### 必須インタラクティブ要素
1. **ソート可能な比較表**
2. **折りたたみ可能なセクション**
3. **ツールチップ付き専門用語**
4. **印刷用CSS対応**

### スタイル要件
- レスポンシブデザイン（モバイルファースト）
- ダークモード対応（オプション）
- アクセシビリティ準拠（WCAG 2.1 AA）

## 📊 品質チェックリスト

各ページ完成時に以下を確認：

- [ ] 700行以上のHTML
- [ ] 感動的導入（キャッチフレーズ）
- [ ] 歴史的文脈の記述
- [ ] 日本的配慮の明記
- [ ] 比較表の実装
- [ ] フローチャートの実装
- [ ] 個別薬剤へのリンク
- [ ] レスポンシブ対応
- [ ] 誤字脱字チェック
- [ ] 医学的正確性

## ⏰ タイムライン

### 開始前準備（01:15-01:20）
- categoriesディレクトリ作成
- 各開発者へのタスク通知

### 第1バッチ（01:20-02:00）
- Dev1: cardiovascular-orchestra.html
- Dev2: diabetes.html
- Dev3: gastrointestinal.html

### 第2バッチ（02:00-02:40）
- Dev1: lipid.html
- Dev2: diuretic.html
- Dev3: psychotropic.html

### 第3バッチ（02:40-03:10）
- Dev1: others.html
- 品質確認・調整

### 最終確認（03:10-03:30）
- 全リンク確認
- index.htmlとの整合性確認
- 最終品質評価

## 💡 開発のコツ

1. **感動ライブラリの活用**: `/templates/emotion-library.html`から要素を借用
2. **既存薬剤ページ参照**: 成功している個別薬剤ページのスタイルを参考に
3. **ultrathink使用**: 深い医学的洞察のために必ず使用
4. **早期テスト**: ローカルサーバーで随時確認

## 🚨 注意事項

1. **パスの正確性**: index.htmlのリンクと完全一致させること
2. **文字コード**: UTF-8で統一
3. **画像パス**: 相対パスで記述
4. **Git操作禁止**: CEOのみが最終的にコミット

---

**このタスク分解に従って、高品質な薬効群別ガイドを作成し、PharmaDxをより完成度の高い薬学教育プラットフォームに進化させましょう。**