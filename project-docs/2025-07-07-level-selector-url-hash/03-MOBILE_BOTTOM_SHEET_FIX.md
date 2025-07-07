# モバイルボトムシート レベル切り替え修正報告

**修正日時**: 2025-07-07 22:50  
**修正者**: Developer  
**目的**: モバイルボトムシートからのレベル切り替え機能を修復

## 問題の詳細

### 症状
モバイルのフロートメニュー（ボトムシート）からレベルボタンを押しても、レベルの切り替えが発生しない。

### 原因
ボトムシートのJavaScriptコードで存在しない関数`window.switchLevel`を呼び出していた。

```javascript
// 問題のコード（1024-1026行目）
if (window.switchLevel) {
    window.switchLevel(level);  // この関数は存在しない
}
```

level-selector.jsで公開されている正しい関数名は`window.showLevel`。

## 修正内容

### metformin-refined.html（1024-1026行目）
```javascript
// 修正前
if (window.switchLevel) {
    window.switchLevel(level);
}

// 修正後
if (window.showLevel) {
    window.showLevel(level);
}
```

## 動作確認

修正により以下が実現：
1. ✅ ボトムシートのレベルボタンクリックでレベルが切り替わる
2. ✅ URLハッシュも正しく更新される（#level-1, #level-2, #level-3）
3. ✅ サイドバーのボタンも連動してアクティブ状態が更新される
4. ✅ ボトムシートは自動的に閉じる

## 他のファイルへの影響

### 調査結果
- `window.switchLevel`を使用しているファイル：0件（修正前のmetformin-refined.htmlのみ）
- ボトムシート実装を持つファイル：metformin-refined.htmlのみ

他の21薬剤ページはまだボトムシート機能を実装していないため、追加の修正は不要。

## 今後の展開

### 他の薬剤ページへの展開時の注意
他の薬剤ページにボトムシート機能を実装する際は、必ず`window.showLevel`を使用すること。

### テンプレート化の推奨
ボトムシートのコードをテンプレート化し、正しい関数名を使用するよう徹底する。

## 技術的補足

`window.showLevel`を使用することで：
- URLハッシュの自動更新
- ブラウザ履歴の管理
- 戻るボタンの正常動作

これらすべてが正しく機能するようになりました。