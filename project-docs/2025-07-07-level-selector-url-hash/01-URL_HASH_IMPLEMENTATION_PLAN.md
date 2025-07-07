# level-selector.js URLハッシュ機能実装計画

**作成日時**: 2025-07-07 22:30  
**作成者**: Developer  
**目的**: レベル切り替え時のブラウザ戻るボタン機能を有効化

## 現状の問題点

現在、学習レベル（薬学生/実習中/研修中）を切り替えても、すべて同一ページ内で処理されるため、URLが変化しません。これにより、ブラウザの戻るボタンが期待通りに動作せず、ユーザー体験を損なっています。

## 解決策の提案

URLハッシュベースのナビゲーションを実装し、レベル変更をブラウザ履歴に記録します。

### 技術的アプローチ

1. **URL構造の設計**
   - 現在: `/docs/drugs-v2/metformin-refined.html`
   - レベル1表示時: `/docs/drugs-v2/metformin-refined.html#level-1`
   - レベル2表示時: `/docs/drugs-v2/metformin-refined.html#level-2`
   - レベル3表示時: `/docs/drugs-v2/metformin-refined.html#level-3`

2. **実装詳細**

   ```javascript
   // level-selector.js内での実装
   
   // 1. レベル変更時にURLを更新
   function showLevel(level) {
       // 既存のレベル表示ロジック...
       
       // URLにハッシュを追加（履歴に記録される）
       window.location.hash = `level-${level}`;
   }
   
   // 2. ハッシュ変更を検知（戻る/進むボタン対応）
   window.addEventListener('hashchange', function() {
       const hash = window.location.hash;
       const match = hash.match(/#level-(\d)/);
       if (match) {
           const level = match[1];
           // ハッシュを再更新せずにレベルを表示
           showLevelWithoutHashUpdate(level);
       }
   });
   
   // 3. ページ読み込み時のハッシュチェック
   document.addEventListener('DOMContentLoaded', function() {
       const hash = window.location.hash;
       const match = hash.match(/#level-(\d)/);
       if (match) {
           const level = match[1];
           showLevel(level);
       } else {
           // デフォルトはレベル1
           showLevel('1');
       }
   });
   ```

3. **無限ループの防止**
   - hashchangeイベント用に`showLevelWithoutHashUpdate()`関数を別途作成
   - これによりハッシュ更新の無限ループを防ぐ

4. **モバイル対応**
   - ボトムシートのレベルボタンもハッシュを更新するよう実装
   - モバイルブラウザ（iOS Safari、Android Chrome）でのテスト必須

## 導入のメリット

1. **ブラウザナビゲーション**: 戻る/進むボタンが期待通りに動作
2. **共有可能なURL**: 特定レベルへの直接リンクが可能
3. **ブックマーク対応**: 学習レベルごとにブックマーク可能
4. **UX向上**: より直感的なナビゲーション体験

## 想定される課題と対策

1. **ページジャンプ**: ハッシュ変更時に画面がジャンプする可能性
   - 対策: `e.preventDefault()`とスムーススクロールの実装

2. **SEO影響**: コンテンツは同一ページ内のため影響は最小限
   - 対策: 教育コンテンツのため特段の対策は不要

3. **アナリティクス**: ハッシュ変更が追跡されない可能性
   - 対策: 必要に応じてアナリティクスイベントを追加

## テスト計画

1. レベル切り替え時のURLハッシュ更新確認
2. ブラウザ戻るボタンで前のレベルに戻ることを確認
3. ハッシュ付きURLでの直接アクセス時の表示確認
4. モバイルデバイスでの動作確認（iOS Safari、Android Chrome）
5. ボトムシートコントロールとの連携確認
6. 無限ループや予期しない動作がないことを確認

## 実装スケジュール

- 計画・レビュー: 30分
- 実装作業: 1-2時間
- テスト: 30分
- ドキュメント作成: 30分

合計: 2-3時間

## 変更対象ファイル

- `/docs/assets/js/level-selector.js` - メイン実装
- HTMLファイルの変更は不要
- CSSファイルの変更は不要

## 後方互換性

- 既存機能との完全な互換性を維持
- ハッシュなしURLは引き続き動作（デフォルトでレベル1表示）
- APIや外部依存関係への破壊的変更なし

## 実装上の注意点

### 1. 既存のshowLevel関数との統合
現在のshowLevel関数はグローバルに公開されているため、既存の呼び出し元に影響を与えないよう慎重に実装する必要があります。

### 2. モバイルでの考慮事項
- ボトムシートのレベルボタンクリック時もハッシュを更新
- window.switchLevel関数が存在する場合はそれも考慮

### 3. パフォーマンスへの配慮
- ハッシュ変更時の再レンダリングを最小限に
- 不要なDOM操作を避ける

### 4. エラーハンドリング
- 無効なハッシュ値（#level-4など）への対処
- 正規表現のマッチング失敗時の処理