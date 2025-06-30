# コンテンツディレクトリ構造改革 - 2025-06-30

## 概要
PharmaDxコンテンツディレクトリの全面的再構築。混在していたコンテンツをユーザー意図に基づく4つの主要ディレクトリに整理。

## 背景
- drug_database/に37ファイルが混在（個別薬剤、クラスモデル、臨床ガイド）
- resources/とstories/の役割が不明確
- 「なぜ似た薬があるのか」という核心価値の可視化が必要

## 実施内容
1. **新構造設計**
   - drugs/: 個別薬剤事典
   - drug_evolution/: なぜ似た薬があるのか
   - drug_stories/: 薬の物語
   - study_guides/: 薬学学習ガイド

2. **大規模移行（67ファイル）**
   - 5段階の計画的移行
   - カテゴリー別の整理
   - 内部リソースの分離（_prefixed）

3. **クリーンアップ**
   - 旧ディレクトリ6個の削除
   - 残存ファイル26個の整理
   - 最終的に7ディレクトリ構造確立

4. **ビルドシステム更新**
   - config.jsonのパス定義更新
   - convert_pharmadx.jsのディレクトリ走査ロジック修正
   - build.shの統計生成部分更新
   - アンダースコア除外ロジックの実装

## 結果
- ユーザー意図に直接応える構造実現
- 93ファイルの適切な配置完了
- ビルドシステム更新完了（17:47 Manager実施）

## 関連ドキュメント
- [CONTENT_DIRECTORY_REFORM_DESIGN_20250630.md](CONTENT_DIRECTORY_REFORM_DESIGN_20250630.md) - 改革設計書
- [CONTENT_MIGRATION_MAPPING_20250630.md](CONTENT_MIGRATION_MAPPING_20250630.md) - 移行マッピング
- [BUILD_SYSTEM_UPDATE_PLAN_20250630.md](BUILD_SYSTEM_UPDATE_PLAN_20250630.md) - ビルド更新計画
- [BUILD_SYSTEM_UPDATE_EXECUTION_PLAN_20250630.md](BUILD_SYSTEM_UPDATE_EXECUTION_PLAN_20250630.md) - ビルド更新実行計画
- [BUILD_SYSTEM_UPDATE_COMPLETION_REPORT_20250630.md](BUILD_SYSTEM_UPDATE_COMPLETION_REPORT_20250630.md) - ビルド更新完了報告
- [DIRECTORY_MIGRATION_REPORT_20250630.md](DIRECTORY_MIGRATION_REPORT_20250630.md) - 移行報告書
- [DIRECTORY_CLEANUP_REPORT_20250630.md](DIRECTORY_CLEANUP_REPORT_20250630.md) - クリーンアップ報告