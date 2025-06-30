# 薬効群別ガイド開発計画書

**作成日時**: 2025-07-01 01:02  
**作成者**: CEO  
**目的**: index.htmlの「薬効群別ガイド」セクションの404エラー解消と高品質コンテンツ作成

## 📊 現状分析

### 問題点
- index.htmlの「薬効群別ガイド」セクション内の7つのリンクすべてが404エラー
- ユーザーが薬効群の理解を深められない状態
- PharmaDxの核心価値「なぜ似た薬が複数存在するのか」が十分に伝わらない

### 既存リソース
1. **高品質MDファイル** (`source_materials/drug_evolution/`)
   - evolution_models/: 薬効群ごとの進化モデル
   - clinical_ecosystems/: 臨床での統合的使用法
   - comparative_analyses/: 薬剤間の詳細比較
   - prescription_patterns/: 処方実態の分析

2. **低品質HTMLファイル** (`docs/groups/`)
   - 変換エラーで壊れたHTML（undefined、[object Object]等）
   - 再利用不可、新規作成が必要

## 🎯 開発目標

### ミッション
「なぜ似た薬が複数存在するのか」を薬効群レベルで深く理解できる、感動的で教育的なガイドページ群を作成する。

### 成果物
7つの薬効群別ガイドページ（各700行以上の高品質HTML）

## 📁 実装構造

```
docs/
├── cardiovascular-orchestra.html     # ルートレベル（特別扱い）
└── categories/                       # 新規作成
    ├── gastrointestinal.html        # 消化器系薬剤
    ├── lipid.html                   # 脂質異常症薬
    ├── psychotropic.html            # 精神神経系薬
    ├── diabetes.html                # 糖尿病薬
    ├── diuretic.html                # 利尿薬
    └── others.html                  # その他重要薬
```

## 📋 各カテゴリページの詳細仕様

### 1. 循環器オーケストラガイド (cardiovascular-orchestra.html)
**コンセプト**: 循環器薬をオーケストラに見立てた革新的統合ガイド
**参考MD**: 
- `cardiovascular_integrated_guide.md` (オーケストラメタファー)
- `ARB_evolution_model.md`, `ACE_inhibitor_evolution_model.md`
- `beta_blocker_evolution_model.md`, `diuretics_evolution_model.md`

**必須要素**:
- オーケストラメタファーの視覚的表現
- 各薬剤の「楽器」としての役割説明
- 組み合わせの「ハーモニー」と「不協和音」
- 9薬剤の詳細比較表
- インタラクティブな処方設計シミュレーター

### 2. 消化器系薬剤ガイド (gastrointestinal.html)
**フォーカス**: PPIのCYP2C19遺伝子多型による使い分け
**参考MD**: 
- `PPI_evolution_model.md`
- 個別薬剤: omeprazole, lansoprazole, esomeprazole

**必須要素**:
- CYP2C19遺伝子多型の解説
- PM/EM/UMごとの薬剤選択フローチャート
- 日本人に多いPM型への配慮
- 3種PPIの詳細比較表

### 3. 脂質異常症薬ガイド (lipid.html)
**フォーカス**: ストロング vs スタンダードスタチンの選択
**参考MD**: 
- `statin_evolution_model.md`
- 個別薬剤: rosuvastatin, atorvastatin

**必須要素**:
- LDL低下率による分類
- 一次予防 vs 二次予防での選択
- 日本人での用量設定の特殊性
- 相互作用プロファイル比較

### 4. 精神神経系薬ガイド (psychotropic.html)
**フォーカス**: SSRI選択の実践的アプローチ
**参考MD**: 
- `SSRI_evolution_model.md`
- 個別薬剤: sertraline, escitalopram

**必須要素**:
- 副作用プロファイルによる使い分け
- 初回治療 vs 切り替え時の選択
- 日本のうつ病治療の特徴
- 薬物相互作用の重要性

### 5. 糖尿病薬ガイド (diabetes.html)
**フォーカス**: SGLT2阻害薬の臓器保護作用による選択
**参考MD**: 
- `SGLT2_evolution_model.md`
- `01_SGLT2_inhibitor_differentiation.md`
- 個別薬剤: empagliflozin, dapagliflozin

**必須要素**:
- 心不全 vs CKD適応の違い
- エビデンスレベルの比較
- 日本人での使用経験
- メトホルミンとの併用戦略

### 6. 利尿薬ガイド (diuretic.html)
**フォーカス**: 病期別・病態別の利尿薬選択
**参考MD**: 
- `diuretics_evolution_model.md`
- 個別薬剤: furosemide, spironolactone

**必須要素**:
- 急性期 vs 慢性期の使い分け
- ループ vs K保持性の選択基準
- 日本の心不全治療での位置づけ
- 電解質管理の実践

### 7. その他重要薬ガイド (others.html)
**フォーカス**: TDM対象薬と相互作用管理
**参考薬剤**: digoxin, vancomycin, warfarin, metformin

**必須要素**:
- TDMの実践的アプローチ
- 相互作用チェックリスト
- 日本のTDMガイドライン
- 特殊病態での注意点

## 🏆 品質基準（PharmaDx基準準拠）

### 必須3要素
1. **感動的導入**: 各カテゴリの医学的重要性を表すキャッチフレーズ
2. **歴史的文脈**: 薬効群の発展の歴史と画期的な発見
3. **日本的配慮**: 日本の医療現場特有の使用法や配慮点

### 構成基準
- **最低行数**: 700行以上/ページ
- **視覚的要素**: 
  - 比較表（ソート機能付き）
  - フローチャート（インタラクティブ）
  - 関係性マップ（SVGまたはCanvas）
- **相互参照**: 個別薬剤ページへの適切なリンク
- **レスポンシブ**: モバイル対応必須

### コンテンツ構造
```html
1. ヒーローセクション（感動的導入）
2. 5分サマリー（多忙な医療者向け）
3. なぜこの薬効群が必要か（本質的理解）
4. 薬剤比較マトリックス（実践的）
5. 臨床での使い分けフロー（視覚的）
6. 歴史と進化（ストーリー性）
7. 日本での使用実態（文化的配慮）
8. よくある質問（FAQ）
9. 関連リンク（個別薬剤へ）
```

## 📊 タスク分解と優先順位

### Phase 1: 環境準備（10分）
- [ ] docs/categories/ディレクトリ作成
- [ ] 開発用テンプレート準備

### Phase 2: コンテンツ作成（各20-30分 × 7 = 140-210分）
優先順位順：
1. [ ] cardiovascular-orchestra.html（最重要・フラッグシップ）
2. [ ] diabetes.html（SGLT2阻害薬の革新性）
3. [ ] gastrointestinal.html（PPI遺伝子多型）
4. [ ] lipid.html（スタチン選択）
5. [ ] diuretic.html（利尿薬使い分け）
6. [ ] psychotropic.html（SSRI比較）
7. [ ] others.html（TDM・相互作用）

### Phase 3: 品質保証（30分）
- [ ] 全リンクの動作確認
- [ ] レスポンシブデザイン確認
- [ ] 相互参照の整合性確認

## 🚀 実装方針

### 開発アプローチ
1. **HTML First**: 直接HTML編集で品質を最大化
2. **並列開発**: 3名の開発者で同時進行
3. **品質重視**: 速度より品質を優先
4. **継続的検証**: 各ページ完成後に即座に品質確認

### 開発者割り当て案
- **Dev1**: cardiovascular-orchestra.html, lipid.html, others.html
- **Dev2**: diabetes.html, diuretic.html
- **Dev3**: gastrointestinal.html, psychotropic.html

## 📚 参考リソース

### 必須参照ファイル
1. `source_materials/drug_evolution/` - 全MDファイル
2. `templates/emotion-library.html` - 感動的要素のテンプレート
3. 成功事例: 個別薬剤ページ（700行以上のHTML）

### スタイルガイド
- `docs/assets/css/style.css` - 基本スタイル
- `docs/assets/css/interactive.css` - インタラクティブ要素
- `docs/assets/css/category-comparison.css` - カテゴリ比較用（新規作成予定）

## 🎯 成功指標

1. **技術的成功**: 全404エラーの解消
2. **品質的成功**: 各ページ700行以上、PharmaDx基準達成
3. **教育的成功**: 「なぜ似た薬があるのか」への明確な回答
4. **UX的成功**: 直感的なナビゲーションと美しいデザイン

## 📅 完了予定

- **開始時刻**: 2025-07-01 01:15（予定）
- **完了目標**: 2025-07-01 04:00
- **総所要時間**: 約3時間

---

**このプロジェクトにより、PharmaDxは薬効群レベルでの深い理解を提供する、真に包括的な薬学教育プラットフォームとなります。**