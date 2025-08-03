# レベルコンテンツモバイル表示調査レポート

**作成日時**: 2025-08-03 14:50  
**調査者**: Claude Assistant  
**プロジェクト**: okusuri_note モバイル最適化

## 1. 調査背景

ユーザーからの報告により、薬剤個別ページのレベルコンテンツ表示について以下の問題が指摘された：

- **PC表示**: 左側に帯のあるカード様の表示で見やすい ✅
- **モバイル表示**: 装飾的要素が蛇足で画面スペースを無駄にしている ❌
- **制約**: レベル切り替え機能のため、クラス自体は残す必要がある

## 2. 現状分析

### 2.1 対象クラス
```
- .level-1-content（基礎レベル）
- .level-2-content（実習レベル）  
- .level-3-content（臨床レベル）
```

### 2.2 PC表示のスタイル（drug-page-v2.css）

#### Level 1
```css
.level-1-content {
    background: white;
    color: var(--text-reading);
    border-left: 4px solid var(--pharma-primary-light);
    padding: var(--spacing-lg);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    max-width: 1000px;
}
```

#### Level 2
```css
.level-2-content {
    background: white;
    border-left: 4px solid var(--pharma-nature);
    padding: var(--spacing-2xl);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    position: relative;
}
```

#### Level 3
```css
.level-3-content {
    background: white;
    border: 1px solid var(--border-light);
    border-left: 4px solid #6c757d;
    padding: var(--spacing-2xl);
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(52, 73, 94, 0.1);
}
```

### 2.3 現在のモバイル対応（@media max-width: 768px）

```css
.level-1-content,
.level-2-content,
.level-3-content {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
    padding-left: var(--spacing-base);
    padding-right: var(--spacing-base);
}
```

## 3. 問題点

現在のモバイル表示では以下の装飾的要素が残っている：

1. **左ボーダー**: 4px幅の色付きボーダーが画面幅を圧迫
2. **box-shadow**: モバイルでは不要な影効果
3. **背景色**: 白背景がコンテンツエリアを強調しすぎ
4. **パディング**: 上下のパディングが大きすぎる

## 4. 技術的考慮事項

### 4.1 レベル切り替え機能の仕組み
- JavaScriptがクラス名を参照して表示/非表示を制御
- クラス名の変更や削除は不可
- `display`プロパティの制御は維持する必要あり

### 4.2 アクセシビリティ
- コンテンツの可読性は維持
- レベル識別は見出しやアイコンで代替可能

## 5. 結論

モバイル表示において、装飾的要素（ボーダー、影、背景）を削除し、純粋なコンテンツ表示に特化することで、限られた画面スペースを最大限活用できる。