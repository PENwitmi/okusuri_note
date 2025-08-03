# レベルコンテンツモバイル最適化 実装ガイド

**作成日時**: 2025-08-03 14:53  
**実装者**: Claude Assistant  
**対象ファイル**: `/docs/assets/css/drug-page-v2.css`

## 1. 実装手順

### Step 1: バックアップ作成
```bash
# バックアップディレクトリ作成
mkdir -p /Users/nishimototakashi/claude\ code/okusuri_note/_old_files/backup_20250803_1453/

# CSSファイルのバックアップ
cp drug-page-v2.css _old_files/backup_20250803_1453/drug-page-v2.css.backup
```

### Step 2: CSS編集
drug-page-v2.cssの`@media (max-width: 768px)`セクションに以下を追加：

```css
/* ========================================
   レベルコンテンツのモバイル最適化
   2025-08-03: 装飾を削除しコンテンツに集中
======================================== */
.level-1-content,
.level-2-content,
.level-3-content {
    /* 装飾を完全に削除 */
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    
    /* パディングを下側のみ設定 */
    padding: 0 0 var(--spacing-lg) 0 !important;
    
    /* マージンは上下両方維持 */
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
}

/* 装飾アイコンも非表示 */
.level-2-content:before,
.level-3-content:before {
    display: none;
}
```

### Step 3: 動作確認

#### 3.1 ブラウザでの確認
1. Chrome DevToolsを開く
2. デバイスモードでiPhone 12 Proを選択
3. 以下を確認：
   - レベルコンテンツに枠線・影がない
   - 背景が透明
   - パディングがない
   - コンテンツが画面幅いっぱいに表示

#### 3.2 レベル切り替えテスト
1. レベル選択ボタンをクリック
2. 各レベルが正常に表示/非表示されることを確認

### Step 4: Git操作
```bash
git add docs/assets/css/drug-page-v2.css
git add project-docs/2025-08-03-mobile-level-content-optimization/
git commit -m "モバイル表示最適化: レベルコンテンツの装飾削除で表示領域拡大"
git push
```

## 2. 実装のポイント

### 2.1 !importantの使用理由
- 既存のスタイルを確実に上書きするため
- メディアクエリの優先順位を最優先にするため
- 将来の変更で意図しない上書きを防ぐため

### 2.2 transparent背景の利点
- 親要素の背景と一体化
- 視覚的な区切りを最小化
- ダークモード対応も考慮

### 2.3 下側パディングとマージンの効果
- 下側パディングでコンテンツ内の適切な余白を確保
- 上下マージンでセクション間の視覚的な区切りを維持
- コンテンツ内の個別要素（info-box等）が独自のパディングを持つ

## 3. トラブルシューティング

### 問題: スタイルが適用されない
**解決策**: 
- ブラウザキャッシュをクリア
- !importantが正しく記述されているか確認
- メディアクエリの記述位置を確認

### 問題: コンテンツが画面端に密着
**解決策**:
- 親要素のcontainerクラスのパディングを確認
- 必要に応じて最小限のpadding-leftを追加

### 問題: レベル切り替えが動作しない
**解決策**:
- displayプロパティを上書きしていないか確認
- JavaScriptコンソールでエラーを確認

## 4. 今後の拡張案

### 4.1 段階的な装飾削除
現在は完全削除だが、将来的には：
- 薄い左ボーダーのみ残す
- 背景色を薄くする
- パディングを最小限残す

### 4.2 アニメーション対応
- レベル切り替え時のスムーズな遷移
- 装飾の段階的なフェード

### 4.3 ダークモード対応
- 透明背景はダークモードでも自然に対応
- 追加の調整は不要

## 5. 検証済み事項

- ✅ PC表示への影響なし
- ✅ レベル切り替え機能の維持
- ✅ 既存のレスポンシブ設計との整合性
- ✅ アクセシビリティの維持

## 6. 参考情報

- 元の要望: "PCの表示では左側に帯のあるカード様になっていて見やすいが、モバイルでは蛇足"
- 制約: "表示レベル切替の都合上、クラスは残す必要がある"
- 解決策: モバイルのみで装飾を完全削除