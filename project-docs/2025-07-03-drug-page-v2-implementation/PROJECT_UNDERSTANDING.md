# 薬剤ページVer2実装プロジェクト - 理解確認ドキュメント

**作成日時**: 2025-07-03 05:20  
**作成者**: CEO  
**目的**: 新しいVer2実装方法論の理解確認と整理

---

## 📋 プロジェクトの背景と経緯

### 1. 元々の計画（2025-07-01）
**薬剤個別ページ再設計プロジェクト**として開始されました：
- **目的**: 薬学生から現場医療者まで段階的に学べるページへの再設計
- **方針**: 既存コンテンツの「再配置」により価値を最大化
- **手法**: 3段階学習アプローチ（レベル1〜3）の採用

### 2. CSS問題の発生（2025-07-02）
実装過程で深刻なCSS問題が判明：
- **問題1**: @import削除により713個のCSSクラスが未定義に
- **問題2**: 緊急対応で実装した637個のクラスのうち91.4%が未使用
- **問題3**: HTMLで必要な584個のクラスが未定義という矛盾

### 3. 根本的解決（2025-07-03）
**CSS整合性修復プロジェクト Phase 5**でゼロベース再構築を決定：
- **発見**: 推測に基づくCSS実装が問題の根本原因
- **解決**: すべてのクラスを削除し、必要最小限のみ付与
- **成果**: 168個→29個のクラス削減（82.7%減）

---

## 🔄 方法論の根本的変更

### 旧方式（7月1日時点の想定）
```
1. 既存HTMLファイルのコンテンツを分析
2. 既存のクラスを維持しながら並べ替え
3. 必要に応じて新しいCSSクラスを追加
4. Ver2として保存
```

### 新方式（7月3日以降の確定版）
```
1. クリーン化：すべてのclass・style属性を完全削除
2. Ver2化：コンテンツを論理的に再配置
3. CSS適用：必要最小限のクラスのみ新規付与
```

### なぜ変更が必要だったか
- **技術的債務の蓄積**: 過去のCSSが複雑に絡み合い、整合性が取れない
- **推測実装の限界**: HTMLの実需と乖離したCSS実装
- **保守性の崩壊**: 誰も全体を把握できない状態

---

## 🎯 3つの主要作業の詳細

### 作業1：クリーン化（HTML浄化）
**目的**: 過去の複雑性から完全に解放される

**実施内容**:
- すべての`class`属性を削除
- すべての`style`属性を削除（インラインスタイル）
- HTMLの構造のみを残す

**例**:
```html
<!-- Before -->
<section class="basic-info-card level-1-content">
    <div class="drug-name-display">
        <h1 class="brand-name">メトグルコ®</h1>
    </div>
</section>

<!-- After -->
<section>
    <div>
        <h1>メトグルコ®</h1>
    </div>
</section>
```

### 作業2：Ver2化（コンテンツ再配置）
**目的**: 学習効果を最大化する論理的な順序

**重要原則**: 情報の欠損は一切なし。すべての内容を残して並べ替えるだけ。

**metformin-clean.htmlを参考にした標準構成**:
1. **レベルインジケーター**: 学習段階の可視化
2. **レベル1コンテンツ**: 
   - 基本情報カード（薬剤名、分類、適応症）
   - 30秒サマリー（4つの視点）
   - 薬学生FAQ（よくある疑問3つ）
   - 処方パターン・併用薬
3. **レベル2コンテンツ**:
   - なぜ第一選択薬なのか（詳細版）
   - 作用機序の段階的解明
   - 実習での注意点
4. **レベル3コンテンツ**:
   - **上記以外のすべての内容を配置**
   - 臨床での深い理解
   - 医師・患者の証言
   - 最新研究動向
   - その他元のHTMLに含まれるすべての情報

### 作業3：CSS適用（最小限クラス付与）
**目的**: 保守可能な最小構成の実現

**付与する29個のクラス（概要）**:
```
# 構造系
- drug-detail (body)
- container
- level-selector
- level-selector__inner

# コンポーネント系
- drug-header
- brand-name
- generic-name
- drug-classification
- drug-class
- indications
- quick-summary
- impact-grid
- impact-item

# レベル系
- level-1-content
- level-2-content
- level-3-content
- level-btn
```

---

## 🔧 ワークディレクトリと実装フロー

### ワークディレクトリの構成
```
docs/
├── drugs/                             # 既存の薬剤ページ（元ファイル）
├── _internal/
│   ├── css_cleanup/                   # Step1: CSS除去作業用
│   └── drug_versionup/                # Step2: Ver2化作業用
└── drugs-v2/                          # 最終成果物の配置場所
```

### 正しい実装フロー
```
1. drugs/rosuvastatin.html（元ファイル）
     ↓ コピー
2. _internal/css_cleanup/rosuvastatin-clean.html（CSS除去）
     ↓ コピー＆再配置
3. _internal/drug_versionup/rosuvastatin-clean-v2.html（Ver2化）
     ↓ 最終配置
4. drugs-v2/rosuvastatin-clean.html（公開用）
```

### 3つの異なる実装ルート

現在、薬剤ページの実装には3つの異なるルートが存在します：

#### 1. 標準ルート（今後の新規薬剤）
```
drugs/drug.html
  ↓ クリーン化
_internal/css_cleanup/drug-clean.html
  ↓ Ver2化（再配置）
_internal/drug_versionup/drug-clean-v2.html
  ↓ 最終配置
drugs-v2/drug-clean.html
```

#### 2. metforminルート（完成済み・特例）
```
drugs/metformin.html
  ↓ Ver2化（先に実施）
drugs-v2/metformin-v2-components.html
  ↓ クリーン化（CSS問題対応）
drugs-v2/metformin-clean.html ✅完成
```

#### 3. rosuvastatin/telmisartanルート（現在の対象）
```
drugs/drug.html
  ↓ Ver2化（実施済み）
drugs-v2/drug-v2-components.html ← 現在ここ（古いCSS）
  ↓ クリーン化（これから）
_internal/css_cleanup/drug-clean.html
  ↓ 新CSS付与
drugs-v2/drug-clean.html
```

### 各薬剤の現在の状態

| 薬剤名 | 現在の状態 | 必要な作業 | ファイル名 |
|--------|------------|------------|------------|
| metformin | ✅ 完成 | なし | metformin-clean.html |
| rosuvastatin | V2化済み（古いCSS） | クリーン化→新CSS付与 | rosuvastatin-v2-components.html |
| telmisartan | V2化済み（古いCSS） | クリーン化→新CSS付与 | telmisartan-v2-components.html |
| その他19薬剤 | 未着手 | 標準ルートで実装 | - |

---

## 📁 CSS構造の革新

### 旧構造（混沌状態）
```
- ver2-unified.css (314行)
- drug-detail.css (206クラス)
- mobile-optimization.css (1933行)
- responsive.css (634行)
→ 合計637個のクラスが混在、91.4%が未使用
```

### 新構造（責務分離）
```
1. style.css
   - 役割: 基本定義（色、フォント、変数）
   - 編集: 不可（プロジェクト共通）

2. responsive-unified.css
   - 役割: レスポンシブ調整のみ
   - 編集: 不可（プロジェクト共通）

3. drug-page-v2.css
   - 役割: 薬剤ページ専用スタイル
   - 編集: 自由（ページ固有）
   - 規模: 370行、29クラスのみ
```

---

## ✅ metformin-clean.htmlの位置づけ

### 完成したテンプレート
- **ファイル**: `/docs/drugs-v2/metformin-clean.html`
- **状態**: 本番環境デプロイ済み
- **品質**: エラー0、モバイル対応完了
- **役割**: 他薬剤実装時の参照テンプレート

### 特徴
1. **最小限のクラス**: 29個のみ（従来の82.7%削減）
2. **明確な構造**: レベル1→2→3の論理的配置
3. **レスポンシブ対応**: モバイルファースト設計
4. **JavaScript統合**: レベル切り替え機能実装済み

---

## 🚀 今後の実装対象

### 優先実装薬剤
1. **rosuvastatin-v2-components.html**
   - 現状: 旧構造（多数のクラス使用）
   - 目標: rosuvastatin-clean.html

2. **telmisartan-v2-components.html**
   - 現状: 旧構造（多数のクラス使用）
   - 目標: telmisartan-clean.html

### 期待される効果
- 実装時間: 2日→2時間（93%削減）
- 保守性: 誰でも理解可能な構造
- 拡張性: 新機能追加が容易

---

## 📝 重要な注意点

### CSS変更の制約
- **style.css**: 変更禁止（共通基盤）
- **responsive-unified.css**: 変更禁止（レスポンシブ基盤）
- **drug-page-v2.css**: 自由に変更可能（ページ専用）

### コンテンツの扱い
- 7月1日のプロジェクトドキュメントは**配置の参考**として活用
- ただし、CSS指定は一切参考にしない
- metformin-clean.htmlの**構造**を基準とする

### 品質基準
- HTMLクラス数: 30個以下
- CSS行数: 400行以下
- モバイル対応: 必須
- JavaScript統合: レベル切り替え機能

---

## 🎓 この理解は正しいでしょうか？

上記の理解に基づいて、rosuvastatin と telmisartan の実装を進めてよろしいでしょうか。
特に以下の点について確認をお願いします：

1. ✅ クリーン化の徹底（すべてのclass/style削除）
2. ✅ metformin-clean.htmlをテンプレートとする
3. ✅ 29個程度の最小限クラスのみ使用
4. ✅ drug-page-v2.cssは自由に編集可能
5. ✅ 7月1日の内容配置は参考にするが、CSS指定は無視

---

**文書作成完了**: 2025-07-03 05:20