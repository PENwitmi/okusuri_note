# 02-CURRENT_STRUCTURE_ANALYSIS.md - 現在の構造分析

**作成日**: 2025-07-08  
**分析対象**: index.html  
**関連CSS**: index.css, style.css, responsive-unified.css, interactive.css

---

## 📊 現在のページ構造

### ヘッダーナビゲーション
```html
<nav class="main-nav">
    <ul class="nav-list">
        <li><a href="#drugs" class="nav-link">薬剤一覧</a></li>
        <li><a href="#categories" class="nav-link">薬効群</a></li>
        <li><a href="#stories" class="nav-link">ストーリー</a></li>
        <li><a href="#differentiation" class="nav-link">使い分け</a></li>
    </ul>
</nav>
```

### セクション構成
1. **ヒーローセクション** - 維持
2. **薬剤一覧** (#drugs) - 維持（ただし現在は2薬剤のみ表示）
3. **薬効群別ガイド** (#categories) - 削除対象
4. **薬学史10大ストーリー** (#stories) - 削除対象
5. **薬剤使い分けの極意** (#differentiation) - 削除対象

---

## 🗂️ 削除対象セクション詳細分析

### 1. 薬効群別ガイド（#categories）
**構造**:
```html
<section id="categories" class="categories-section">
    <div class="section-container">
        <h2 class="section-title">薬効群別ガイド</h2>
        <p class="section-description">...</p>
        <div class="categories-grid">
            <!-- 7つのcategory-card -->
        </div>
    </div>
</section>
```

**カード内容**:
1. 循環器オーケストラガイド（9薬剤）
2. 消化器系薬剤（2薬剤）
3. 脂質異常症薬（2薬剤）
4. 精神神経系薬（2薬剤）
5. 糖尿病薬（2薬剤）
6. 利尿薬（2薬剤）
7. その他重要薬（4薬剤）

**使用CSS**: `.category-card`クラス

### 2. 薬学史10大ストーリー（#stories）
**構造**:
```html
<section id="stories" class="stories-section">
    <div class="section-container">
        <h2 class="section-title">薬学史 10大ストーリー</h2>
        <p class="section-description">...</p>
        <div class="stories-grid">
            <!-- 10のstory-card -->
        </div>
    </div>
</section>
```

**カード内容**:
1. ペニシリンの奇跡（1928年）
2. インスリンの光と影（1921年）
3. 高血圧治療への挑戦（1977年）
4. バンコマイシンの最後の砦（1958年）
5. アスピリンの奇跡（1897年）
6. がん治療薬の夜明け（1940年）
7. 精神科薬の光と影（1950年）
8. ワクチンの奇跡（1796年）
9. 耐性菌との攻防（1940年）
10. 個別化医療の始まり（2003年）

**使用CSS**: `.story-card`クラス

### 3. 薬剤使い分けの極意（#differentiation）
**構造**:
```html
<section id="differentiation" class="differentiation-section">
    <div class="section-container">
        <h2 class="section-title">薬剤使い分けの極意</h2>
        <p class="section-description">...</p>
        <div class="differentiation-grid">
            <!-- 10のdiff-card -->
        </div>
    </div>
</section>
```

**カード内容**:
1. SGLT2阻害薬の適応別使い分け
2. スタチンの強度別使い分け
3. PPIの代謝特性による選択
4. β遮断薬の選択性による使い分け
5. ARBの臓器保護作用別選択
6. 利尿薬の病期別使い分け
7. SSRIの副作用プロファイル比較
8. ACE阻害薬のエビデンス別選択
9. TDM対象薬の管理ポイント
10. 抗凝固薬の選択基準

**使用CSS**: `.diff-card`クラス

---

## 🎨 カードデザイン比較

### category-card特徴
- **サイズ**: minmax(280px, 1fr)
- **デザイン**: 中央揃え、アイコン大きめ
- **ホバー**: 上方向8px移動、背景グラデーション
- **カラー**: 薬剤数バッジあり

### story-card特徴
- **サイズ**: minmax(320px, 1fr)
- **デザイン**: 左揃え、絵文字アイコン
- **ホバー**: 上方向6px移動、右上グラデーション
- **メタ情報**: 年代とインパクト表示

### diff-card特徴
- **サイズ**: minmax(350px, 1fr)
- **デザイン**: 左揃え、番号バッジ右上
- **ホバー**: 上方向4px移動
- **特徴**: 左側に縦グラデーションライン

---

## 📊 CSS使用状況

### index.css内の関連スタイル
```css
/* セクション背景色 */
.categories-section { background: var(--bg-secondary); }
.stories-section { background: var(--bg-primary); }
.differentiation-section { background: var(--bg-light); }

/* グリッドレイアウト */
.categories-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.stories-grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.differentiation-grid { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); }
```

---

## 🔗 リンク先分析

### categories関連リンク
- cardiovascular-orchestra.html（特殊ページ）
- categories/*.html（6ファイル）

### stories関連リンク
- stories/*.html（10ファイル）

### differentiation関連リンク
- groups/*.html（10ファイル）

**合計**: 27個のリンク先ページが影響を受ける

---

## 📏 行数統計

### 削除対象行数
- categories セクション: 約60行
- stories セクション: 約120行
- differentiation セクション: 約100行
- **合計**: 約280行削除

### CSS削除対象
- category-card関連: 約90行
- story-card関連: 約80行
- diff-card関連: 約85行
- **合計**: 約255行（コメントアウト推奨）

---

## 🚨 影響範囲

### 直接的影響
1. index.htmlの構造簡素化
2. ナビゲーションメニューの項目減少
3. 27個のリンク切れ発生

### 間接的影響
1. SEOへの影響（内部リンク構造変更）
2. ユーザーの既存ブックマーク無効化
3. サイト全体のIA（情報アーキテクチャ）変更

---

## 💡 移行に向けた推奨事項

### リンク処理
1. 404ページの充実化
2. リダイレクトの検討（.htaccessまたはJavaScript）
3. サイトマップ更新

### CSS最適化
1. 使用されなくなるスタイルのコメントアウト
2. 新feature-cardクラスへの統合検討
3. ファイルサイズ削減の機会

### コンテンツ移行
1. 重要な情報の特集ページへの統合
2. 薬剤個別ページへの情報移植
3. アーカイブページの作成検討

---

**次のステップ**: 03-NEW_FEATURE_SECTION_DESIGN.mdで新しい特集ページセクションを設計