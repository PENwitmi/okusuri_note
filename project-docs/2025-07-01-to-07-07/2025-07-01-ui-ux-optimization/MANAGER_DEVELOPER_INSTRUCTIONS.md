# Manager・Developer実行指示書

**作成日時**: 2025-07-01 15:18  
**作成者**: CEO  
**対象**: AI-Team Manager・Developer  
**目的**: Phase 3-4即座実行のための具体的指示とパス明記

## 📋 Manager向け即座実行指示

### 🚨 最重要：参照ドキュメントの完全把握

**Managerは以下のドキュメントを必ず送信前に確認してください**:

#### 1. 実行計画書（必須）
```
パス: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/PHASE3_4_EXECUTION_PLAN.md
内容: Phase 3-4の全体戦略・推奨実行パターン・成功指標
用途: 実行戦略の選択とタスク配分判断
```

#### 2. 詳細タスク仕様（技術詳細）
```
パス: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/DETAILED_TASK_BREAKDOWN.md
対象行: 255-553行（Phase 3-4詳細）
内容: 各タスクの具体的作業内容・完了基準・所要時間
用途: Developerへの技術指示作成
```

#### 3. 色彩設計仕様（適用色の詳細）
```
パス: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/PHARMACEUTICAL_COLOR_PALETTE_DESIGN.md
対象行: 40-51行（薬学教育特化色パレット）
内容: 適用すべき具体的な色とCSS変数名
用途: 正確な色指定をDeveloperに指示
```

#### 4. 実行済み状況確認（前提理解）
```
パス: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/CEO_PROJECT_EXECUTION_REPORT.md
内容: Phase 1-2の完了状況・開発者パフォーマンス・品質実績
用途: 継続性確保と適切な人員配置判断
```

### 🎯 Manager推奨実行戦略

#### オプション1: 安全重視（順次実行）
- **想定時間**: 5時間
- **リスク**: 低
- **適用場面**: 慎重な品質確保優先時

#### オプション2: 効率重視（並列実行）
- **想定時間**: 2.5時間
- **リスク**: 中
- **適用場面**: Phase 1-2での並列実行成功実績踏まえ

### 🛠️ Developerへの指示テンプレート

#### Phase 3タスク配分時の必須要素

**Task 3.1担当者への指示例**:
```
dev[X]→manager【タスク受領】

Task 3.1: groups/ディレクトリファイル色統合を担当してください（60分）

■対象ファイル:
/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/groups/*.html（14ファイル）

■必須参照:
1. 色パレット: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/assets/css/style.css
   - 新CSS変数（35個）を確認してください
2. 実装例: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/assets/css/mobile-optimization.css
   - Phase 2での変数化パターンを参考にしてください

■適用すべき主要変数:
--pharma-primary: #3498db;
--pharma-nature: #27ae60;
--text-reading: #374151;
--category-cardiovascular: #e74c3c;

■作業手順:
1. 各HTMLファイルのインラインCSSを特定
2. ハードコード色を上記変数に置換
3. 薬効群別の適切な色分け適用
4. モバイル表示での動作確認

■完了基準:
- 全14ファイルで統一色適用
- index.htmlからのリンク正常動作
- 薬効群別の適切な色分け

質問を歓迎します。開始前に不明点があれば遠慮なく確認してください。
```

#### Task 3.2担当者への指示例:
```
dev[X]→manager【タスク受領】

Task 3.2: 薬剤詳細ページ色最適化を担当してください（45分）

■対象ファイル:
/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/drugs/*.html（22ファイル）

■最重要参照:
/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/PHARMACEUTICAL_COLOR_PALETTE_DESIGN.md
- 行40-51: 薬学教育特化色パレットの教育的意義を理解してください

■具体的変更内容:
1. 薬剤名: color: var(--text-primary);
2. 重要情報: color: var(--pharma-primary);
3. 本文: color: var(--text-reading);
4. 薬効群分類: 該当するカテゴリ色を適用

■完了基準:
- 全薬剤ページで統一感確保
- 情報階層の明確な色表現
- 長時間学習での目疲労軽減効果

質問を歓迎します。薬学的コンテンツの理解で不明点があれば確認してください。
```

## 👥 Developer向け実行前チェックリスト

### 作業開始前の必須確認事項

#### 1. 色パレット理解
```
確認ファイル: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/assets/css/style.css
確認内容: 新CSS変数35個の定義と意味
重要変数:
- --pharma-primary: #3498db (学習最適化ブルー)
- --pharma-nature: #27ae60 (薬学象徴グリーン)
- --text-reading: #374151 (長時間読書専用)
```

#### 2. 既存実装パターン確認
```
確認ファイル: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/docs/assets/css/mobile-optimization.css
確認内容: Phase 2で完了した変数化パターン
学習ポイント: ハードコード→変数の置換手法
```

#### 3. 薬学教育的意義の理解
```
確認ファイル: /Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-01-ui-ux-optimization/PHARMACEUTICAL_COLOR_PALETTE_DESIGN.md
重要箇所: 行40-51（薬学教育特化色パレット）
理解事項: なぜその色が薬学教育に最適なのか
```

### 各Task別専用指示

#### Task 3.1担当者（groups/統合）
**特別注意事項**:
- 14ファイル全体の一貫性重視
- 薬効群別の色分けが最重要
- index.htmlからのリンク動作確認必須

**変更パターン例**:
```css
/* 修正前 */
color: #1976d2;

/* 修正後 */
color: var(--pharma-primary);
```

#### Task 3.2担当者（薬剤詳細最適化）
**特別注意事項**:
- 22ファイルでの長時間読書最適化
- 薬剤名の視認性向上
- 重要情報のハイライト効果

**薬効群色分け例**:
```css
.category-cardiovascular { color: var(--category-cardiovascular); }
.category-cns { color: var(--category-cns); }
.category-endocrine { color: var(--category-endocrine); }
```

#### Task 3.3担当者（カテゴリページ）
**特別注意事項**:
- 7ファイルでの直感的色使い分け
- カテゴリアイコンとの調和
- ブランド色との統一感

#### Task 3.4担当者（メインページ）
**特別注意事項**:
- サイトの顔としての重要性
- ヒーローセクション最適化
- CTA要素の色強化

#### Task 3.5担当者（統合テスト）
**特別注意事項**:
- 全ページ表示確認必須
- 不整合箇所の詳細記録
- 次Phase準備のための課題整理

### Phase 4専用指示

#### Task 4.1担当者（アクセシビリティ検証）
**必須ツール**:
- WebAIM Contrast Checker
- Colour Contrast Analyser

**検証基準**:
- WCAG AAA（7:1以上）
- 色覚異常3型で95%以上識別

#### Task 4.2担当者（ブラウザ互換性）
**テスト対象**: Chrome, Firefox, Safari, Edge
**確認項目**: CSS変数サポート・フォールバック動作

#### Task 4.3担当者（パフォーマンス測定）
**測定項目**: 読み込み時間・CSS変数オーバーヘッド
**比較基準**: Phase 2完了時点との比較

#### Task 4.4担当者（最終品質承認）
**承認観点**: 薬学教育価値・ユーザー体験・ブランド統一
**成果物**: CEO承認用レポート

## 🚨 緊急時対応プロトコル

### レベル別対応基準

#### レベル1: 軽微な表示問題
- **対象**: 色の微調整・小さな表示崩れ
- **対応**: Developer自己判断で修正
- **報告**: 完了報告時に修正内容明記

#### レベル2: 機能影響問題
- **対象**: リンク動作不良・重大な表示崩れ
- **対応**: Manager判断必須
- **手順**: 即座にManagerに報告→判断待ち

#### レベル3: サイト全体影響
- **対象**: 全ページ表示不能・重大なエラー
- **対応**: CEO即座エスカレーション
- **手順**: Manager→CEO緊急報告

### Git復旧手順
```bash
# 問題発生時の即座復旧
git checkout HEAD~1

# 特定Phaseへの復帰
git checkout [phase-completion-commit]
```

## ✅ 完了報告フォーマット

### Developer→Manager完了報告テンプレート
```
dev[X]→manager【完了報告】

Task [番号]: [タスク名]が完了しました。

■実行内容:
- 修正ファイル数: [数]ファイル
- 主要変更: [変更内容の要約]
- 適用変数: [使用したCSS変数名]

■成果物の場所:
[修正ファイルの絶対パス]

■品質確認済み事項:
- 表示崩れ: なし
- リンク動作: 正常
- モバイル表示: 確認済み

■発見した課題:
[あれば記載、なければ「なし」]

■次のタスク準備:
[準備完了 or 要確認事項]
```

### Manager→CEO統合報告テンプレート
```
manager→ceo【Phase進捗報告】

Phase [番号]の進捗状況を報告します。

■完了タスク: [数]/[総数]
■進行中タスク: [リスト]
■発見課題: [課題と対応策]
■品質状況: [品質基準達成状況]
■次の予定: [次Phase移行タイミング]

詳細は CEO_PROJECT_EXECUTION_REPORT.md に記録済みです。
```

## 🎯 最終成功確認項目

### Phase 3完了確認
- [ ] groups/14ファイル統一完了
- [ ] 薬剤詳細22ページ最適化完了
- [ ] カテゴリ7ページ色体系適用完了
- [ ] メインページ統合完了
- [ ] 色体系統合テスト完了

### Phase 4完了確認
- [ ] WCAG AAA準拠100%確認
- [ ] ブラウザ互換性問題ゼロ
- [ ] パフォーマンス悪化なし
- [ ] CEO最終品質承認取得

---

この指示書により、Manager・Developerは迷いなくPhase 3-4を実行できます。