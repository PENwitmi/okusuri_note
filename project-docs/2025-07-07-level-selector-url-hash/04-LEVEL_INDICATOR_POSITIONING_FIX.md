# 04. レベルインジケーター配置修正

**作成日時**: 2025-07-07 23:52  
**作成者**: CEO  
**対応課題**: レベルインジケーターの配置とレベル切り替え時の表示制御

## 問題の本質

### 初期の誤った実装
```html
<!-- 間違い：レベルコンテンツの中に配置 -->
<section class="level-1-content">
    <div class="level-indicator">📚 レベル1：薬学生向け基本情報</div>
    <!-- コンテンツ -->
</section>
```

この実装では、レベル切り替え時にコンテンツと一緒にインジケーターも非表示になってしまい、現在のレベルが不明になる。

### 正しい実装
```html
<!-- 正解：レベルコンテンツの外（前）に配置 -->
<div class="level-indicator level-1-indicator">📚 レベル1：薬学生向け基本情報</div>
<section class="level-1-content">
    <!-- コンテンツ -->
</section>
```

## 実装内容

### 1. HTML構造の修正
- 各レベルのインジケーターをsectionタグの外側（前）に配置
- level-N-indicatorクラスを追加（N=1,2,3）

### 2. CSS更新（drug-page-v2.css）
```css
/* レベル2と3のコンテンツとインジケーターは初期非表示 */
.level-2-content,
.level-3-content,
.level-2-indicator,
.level-3-indicator {
    display: none;
}
```

### 3. JavaScript更新（level-selector.js）
- インジケーターの取得と制御を追加
- レベル切り替え時に適切なインジケーターのみ表示

## 効果
- レベル切り替え時も現在のレベルが常に明確
- UIの一貫性向上
- ユーザー体験の改善（現在位置の把握が容易）

## 影響範囲
- 全22薬剤ページに同様の修正が必要
- level-selector.jsは共通なので1回の更新で全ページ対応