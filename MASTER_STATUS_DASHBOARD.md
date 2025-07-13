# OkusuriNote マスター進捗ダッシュボード
**最新更新**: 2025-07-14 08:49 - index.html薬剤カード表示修正（公開許可5薬剤のみ表示）  
**更新頻度**: リアルタイム（変更発生時即座）  
**目的**: すべてのタスクと文書の状態を一元管理  
**ガバナンス**: CEOが最終編集責任、Managerに実務更新委任（2025-06-30 23:45策定）

## 🎯 現在の状況（08:49時点）

### 📊 プロジェクト統計サマリー
- **公開中薬剤**: 5薬剤（drugs/ディレクトリ）
- **公開中特集**: 1ページ（抗血栓薬完全マスター）
- **v3薬剤ページ完成**: 22薬剤（監査待ち）
- **特集ページ完成**: 7ページ（1公開、6監査待ち）
- **source_materials拡充**: 漢方薬21処方、消化管運動改善薬7ファイル、抗血小板薬3ファイル追加

## 🚀 現在進行中のプロジェクト

### 薬剤ページv2→v3移行プロジェクト（2025-07-08 02:20開始）
**ステータス**: 🚀 **Phase 2進行中**（循環器系薬剤移行中）  
**目的**: source_materialsの豊富な情報を活用した高品質v3薬剤ページの作成  
**方針**: metformin-refined.htmlをテンプレートとし、手作業で各薬剤の情報を統合  

#### 移行進捗（20薬剤完了）
- ✅ rosuvastatin、telmisartan、dapagliflozin、dotinurad、lansoprazole
- ✅ atorvastatin、amlodipine、empagliflozin、domperidone、metoclopramide
- ✅ bisoprolol、celecoxib、metformin、sitagliptin、perindopril
- ✅ furosemide、carvedilol、teneligliptin、esomeprazole、lemborexant（2025-07-10追加）
- 🚀 **次の対象**: pravastatin、ezetimibe（循環器系薬剤）

#### 移行フェーズ計画
- Phase 1: 基盤整備（✅ 完了）
- Phase 2: 第1バッチ・循環器系（🚀 進行中）
- Phase 3: 第2バッチ・内分泌系/消化器系
- Phase 4: 第3バッチ・精神神経系/その他

**詳細**: `project-docs/2025-07-08-drug-v3-migration/`

### 📋 HTML作成待機中の特集ページ（3件）

1. **抗生物質処方ガイド**（情報収集：7/9 07:00-07:20完了）  
   - 外来感染症の第一選択薬、de-escalation戦略、耐性菌対策
   - 詳細：`project-docs/2025-07-09-antibiotics-prescription-guide/`

2. **H1ブロッカー使い分けガイド**（情報収集：7/9 07:20-07:56完了）  
   - 第2世代抗ヒスタミン薬11種比較、患者タイプ別選択
   - 詳細：`project-docs/2025-07-09-h1-blocker-allergy-guide/`

3. **向精神薬の代替適応**（情報収集：7/9 07:00-07:45完了）  
   - 慢性疼痛等での使用実態、科学的根拠
   - 詳細：`project-docs/2025-07-09-psychotropic-alternative-uses-feature/`

## ✅ 完了済みプロジェクト

### 特集ページ（HTML実装完了：7種類）
1. **抗血栓薬完全マスター**（7/10）：`antithrombotic-complete-guide.html`
2. **吸入薬完全マスター**（7/8）：`inhaler-complete-guide.html`
3. **MR拮抗薬**（7/8-9）：`mr-antagonist-complete-guide.html`  
4. **心不全治療**（7/9）：`heart-failure-treatment-guide.html`
5. **消化管運動改善薬**（7/9）：`prokinetics-complete-guide.html`
6. **風邪に効く漢方薬**（7/9）：`kampo-cold-medicine-guide.html`
7. **消化器系の漢方薬**（7/9）：`kampo-digestive-guide.html`

### 技術基盤プロジェクト
- **v3薬剤ページ完全表示更新**（7/10、25分）：5薬剤追加（エソメプラゾール、ペリンドプリル、カルベジロール、レンボレキサント、テネリグリプチン）、20薬剤表示実現
- **シタグリプチン表示追加**（7/10、2分）：DPP-4阻害薬カード追加、14薬剤表示実現
- **v3薬剤ページ表示更新**（7/10、8分）：ビソプロロール表示有効化、3薬剤追加、13薬剤表示実現
- **特集ページカードデザイン最適化**（7/10、15分）：特集カード2列固定、薬剤カードモバイル2列表示実装
- **index.html誤情報修正**（7/10、10分）：薬剤数9個に修正、薬効群・ストーリー削除、特集ページ7個に統一
- **index.html特集ページ構造変更**（7/8、45分）：サイト名変更、特集ページ4カード実装
- **UI/UXビューポート最適化**（7/5-6）：sidebar.css + mobile-controls.css実装
- **Level配置最適化・CSS改革**（7/4）：level-selector.js統一（98%削減）
- **コンテンツ品質評価**（7/5）：全22薬剤3軸評価完了

---

## 📁 プロジェクトドキュメント状況

### 進行中プロジェクトドキュメント

#### 薬剤ページv2→v3移行プロジェクト（2025-07-08〜）
**場所**: project-docs/2025-07-08-drug-v3-migration/
- PROJECT_OVERVIEW、V3_QUALITY_STANDARDS、MIGRATION_WORKFLOW
- migration-logs/：各薬剤の移行記録（10薬剤完了）

### 完了プロジェクトドキュメント
- **特集ページ関連**：各project-docs/2025-07-XX-feature/参照
- **技術基盤関連**：各project-docs/参照（CSS改革、UI/UX最適化等）

### プロジェクト管理（恒久的）
**場所**: プロジェクトルート
- MASTER_STATUS_DASHBOARD.md - このファイル
- CLAUDE.md - プロジェクトメモリ

---

## 🚨 重要：文書管理ルール

1. **新規文書作成時は必ずこのダッシュボードに追加**
2. **タスク状態が変わったら即座に更新**（完了、開始、ブロック等）
3. **15分ごとに変更をチェックし、必要に応じて更新**
4. **他のドキュメントを更新したら、このダッシュボードも連動更新**

---
**このダッシュボードが唯一の真実の情報源（Single Source of Truth）です**