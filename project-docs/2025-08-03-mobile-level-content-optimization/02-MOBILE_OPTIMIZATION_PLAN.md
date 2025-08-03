# モバイルレベルコンテンツ最適化計画書

**作成日時**: 2025-08-03 14:52  
**計画立案者**: Claude Assistant  
**承認ステータス**: ✅ ユーザー承認済み

## 1. 最適化の目的

薬剤個別ページのレベルコンテンツ表示において、モバイル環境での表示領域を最大化し、ユーザー体験を向上させる。

### 1.1 期待される効果
- 📱 モバイル表示領域の15-20%拡大
- 🎯 コンテンツへの集中度向上
- ⚡ ページ読み込み速度の微改善
- 🔄 レベル切り替え機能の完全維持

## 2. 設計方針

### 2.1 PC表示（769px以上）
**変更なし** - 現在の美しいカード様デザインを維持

### 2.2 モバイル表示（768px以下）
**ミニマリスト方針** - 装飾を排除し、コンテンツに集中

## 3. 具体的な変更内容

### 3.1 削除する要素

| 要素 | 現在 | 変更後 | 理由 |
|------|------|--------|------|
| 左ボーダー | 4px solid | none | 横幅の節約 |
| 右ボーダー | 1px（Level3のみ） | none | 統一性 |
| 上下ボーダー | 1px（Level3のみ） | none | 統一性 |
| box-shadow | あり | none | 不要な装飾 |
| 背景色 | white | transparent | コンテンツ一体化 |
| パディング | spacing-lg/2xl | 0 | スペース最大化 |
| border-radius | 0（現在） | 0 | 変更なし |

### 3.2 維持する要素
- クラス名（変更不可）
- displayプロパティ
- フォントサイズ・行間
- 見出しスタイル

## 4. CSS実装詳細

### 4.1 追加するCSS
```css
@media (max-width: 768px) {
    /* レベルコンテンツのモバイル最適化 */
    .level-1-content,
    .level-2-content,
    .level-3-content {
        /* 装飾を完全に削除 */
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
        
        /* パディングを削除（コンテンツ内の要素で制御） */
        padding: 0 !important;
        
        /* マージンは維持（セクション間の区切り） */
        margin-top: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
    }
    
    /* 擬似要素（アイコン）も非表示 */
    .level-2-content:before,
    .level-3-content:before {
        display: none;
    }
}
```

### 4.2 変更場所
- ファイル: `/docs/assets/css/drug-page-v2.css`
- 位置: 既存の`@media (max-width: 768px)`セクション内に追加

## 5. テスト計画

### 5.1 動作確認項目
- [ ] レベル切り替え機能の正常動作
- [ ] PC表示の変更なし確認
- [ ] モバイル表示の装飾削除確認
- [ ] 各レベルコンテンツの可読性維持

### 5.2 テスト対象ページ
- pemafibrate.html
- domperidone.html
- その他の公開薬剤ページ

## 6. リスク評価

### 6.1 低リスク
- CSSのみの変更でJavaScript機能への影響なし
- !importantによる確実な上書き
- 既存のレスポンシブ構造を活用

### 6.2 考慮事項
- 将来的なデザイン変更時の!important対応
- 他のCSSファイルとの競合可能性（低い）

## 7. 実装スケジュール

1. ✅ 調査完了（01-INVESTIGATION_REPORT.md）
2. ✅ 計画策定（本文書）
3. ⏳ CSS実装（5分）
4. ⏳ テスト実施（10分）
5. ⏳ git commit & push（2分）

## 8. 成功基準

- モバイル表示でレベルコンテンツが純粋なテキストとして表示される
- PC表示は一切変更されない
- レベル切り替え機能が正常に動作する