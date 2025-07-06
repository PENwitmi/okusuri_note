# 19-CSS_NAMING_CONVENTION_AGREEMENT.md

**プロジェクト**: UI/UX ビューポート最適化 CSS命名規則合意書  
**作成日**: 2025-07-06 14:05  
**作成者**: CEO  
**目的**: 今後のCSS開発での競合防止と一貫性確保  
**重要**: 本来Phase 1で作成すべきだった文書（深い反省）

---

## 🚨 **なぜこの文書が必要だったか**

### **今回の失敗**
- Phase 1で「クラス名・構造の明確化」を約束
- 実際は文書化せずに実装開始
- 結果：content-with-sidebar競合発生
- ユーザーの正当な怒り

### **教訓**
**設計→文書化→レビュー→実装** の順序を厳守

---

## 📋 **既存CSSクラス名調査結果**

### **レイアウト関連（使用禁止）**
```
.content-with-sidebar   → responsive-unified.css で使用済み
.sidebar               → responsive-unified.css で定義済み
.main-content          → responsive-unified.css で定義済み
.container             → 多数のファイルで使用
.wrapper               → 汎用的すぎる
```

### **ヘッダー・フッター関連（使用注意）**
```
.header                → 既存
.footer                → 既存
.navigation            → 既存
```

### **薬剤ページ固有（okusuri-note特有）**
```
.drug-detail           → body要素で使用
.drug-header           → 薬剤名表示
.level-selector        → レベル選択UI
.level-*-content       → レベル別コンテンツ
```

---

## 🎯 **新規クラス命名規則**

### **1. プロジェクトプレフィックス**
新規の汎用クラスには`okusuri-`プレフィックスを付与
```css
/* Good */
.okusuri-sidebar-layout
.okusuri-mobile-controls
.okusuri-floating-button

/* Bad */
.sidebar-layout    /* プレフィックスなし */
.content-wrapper   /* 汎用的すぎる */
```

### **2. BEM命名規則の適用**
```css
/* Block__Element--Modifier */
.okusuri-sidebar__section
.okusuri-sidebar__section--active
.okusuri-sidebar__title
.okusuri-sidebar__link
```

### **3. 機能ベース命名**
何をするかを明確に
```css
.okusuri-toggle-sidebar
.okusuri-show-on-mobile
.okusuri-hide-on-desktop
```

---

## 📝 **今回のプロジェクトでの命名**

### **採用した名前（競合回避後）**
| クラス名 | 用途 | ファイル |
|---------|------|---------|
| .sidebar-layout | サイドバー付きレイアウト | sidebar.css |
| .mobile-fab | フローティングボタン | mobile-controls.css |
| .bottom-sheet | ボトムシート | mobile-controls.css |
| .bottom-sheet-overlay | オーバーレイ | mobile-controls.css |

### **理想的だった命名**
```css
.okusuri-sidebar-layout
.okusuri-mobile-fab
.okusuri-bottom-sheet
.okusuri-bottom-sheet-overlay
```

---

## 🚫 **使用禁止リスト**

### **絶対に使用してはいけないクラス名**
1. **既に使用されている名前**
   - content-with-sidebar
   - sidebar（単体）
   - main-content
   - container
   - wrapper

2. **汎用的すぎる名前**
   - content
   - main
   - section
   - item
   - box

3. **HTMLタグと同名**
   - header
   - footer
   - nav
   - article
   - aside

---

## ✅ **実装前チェックリスト**

### **新規クラス作成時の必須確認**
- [ ] 既存CSSファイル全体をGrep検索
- [ ] メディアクエリ内も含めて確認
- [ ] プロジェクトプレフィックスを検討
- [ ] BEM命名規則に従っているか
- [ ] 機能が明確に伝わる名前か
- [ ] チームメンバーとレビュー実施

---

## 📊 **既存ファイル別クラス数**

| ファイル | クラス数 | 主な用途 |
|---------|---------|---------|
| style.css | 150+ | 基本スタイル |
| responsive-unified.css | 80+ | レスポンシブ |
| drug-page-v2.css | 100+ | 薬剤ページ |
| level-selector.css | 30+ | レベル選択 |
| interactive.css | 20+ | インタラクション |

**合計**: 400以上のクラスが既に存在

---

## 🎯 **今後の開発フロー**

### **必須プロセス**
1. **設計フェーズ**
   - 機能要件定義
   - UI/UXデザイン
   - **クラス名設計書作成** ← 今回欠けていた

2. **文書化フェーズ**
   - 設計合意文書
   - クラス名一覧
   - 既存調査結果

3. **レビューフェーズ**
   - チーム内レビュー
   - 既存資産との整合性確認
   - ユーザー承認

4. **実装フェーズ**
   - ようやく実装開始
   - 文書に基づいた開発

---

## 💭 **反省と決意**

### **今回の失敗**
- 実装を急ぎすぎた
- 「大丈夫だろう」という慢心
- プロセスの軽視

### **得られた教訓**
- 急がば回れ
- 文書化は時間の節約
- ユーザーの信頼は簡単に失われる

### **今後への決意**
**二度と中途半端な仕事はしません。**
**設計文書なしの実装は行いません。**
**プロセスを守ることが最速の道です。**

---

**作成者**: CEO  
**承認**: Manager  
**適用開始**: 即時（21薬剤適用から）