# 薬剤個別ページ実装ガイド
**作成日**: 2025-07-01 22:50  
**作成者**: CEO  
**目的**: 開発者向けの具体的な実装手順とベストプラクティス

---

## 🚀 クイックスタート

### 必要なファイル
1. `DRUG_PAGE_TEMPLATE_2025.md` - 構成テンプレート（このガイドと併せて参照）
2. 既存の薬剤ページHTML - コンテンツの移行元
3. 新規作成する薬剤ページHTML - 実装先

### 基本的な作業フロー
```
1. 既存ページの分析（30分）
   ↓
2. コンテンツの分類・整理（1時間）
   ↓
3. 新構成への再配置（2時間）
   ↓
4. デザイン・インタラクション実装（1時間）
   ↓
5. レビュー・調整（30分）
```

---

## 📋 実装チェックリスト

### 必須実装項目
- [ ] レベルインジケーター（sticky配置）
- [ ] 基本情報カード（ファーストビュー）
- [ ] 30秒サマリー（薬学生向け）
- [ ] 実習ポイントセクション
- [ ] 処方例（Rp形式）
- [ ] 併用禁忌・注意（視覚的強調）
- [ ] 服薬指導テンプレート
- [ ] 患者FAQ（最低3つ）
- [ ] 用量調整表
- [ ] レスポンシブ対応

### 推奨実装項目
- [ ] スムーズスクロール
- [ ] プリント用CSS
- [ ] アクセシビリティ対応（WCAG AAA）
- [ ] 検索機能（ページ内）
- [ ] ブックマーク機能

---

## 🎨 デザイン実装詳細

### 1. カラーシステム
```css
/* レベル別カラー定義 */
:root {
    /* 薬学生レベル */
    --student-primary: #2196f3;
    --student-light: #e3f2fd;
    --student-dark: #1976d2;
    
    /* 中級レベル */
    --intermediate-primary: #9c27b0;
    --intermediate-light: #f3e5f5;
    --intermediate-dark: #7b1fa2;
    
    /* 上級レベル */
    --advanced-primary: #f44336;
    --advanced-light: #fce4ec;
    --advanced-dark: #d32f2f;
    
    /* 共通カラー */
    --danger: #dc3545;
    --warning: #ffc107;
    --success: #28a745;
    --info: #17a2b8;
}
```

### 2. レイアウトシステム
```css
/* セクション基本構造 */
.content-section {
    padding: 2rem 0;
    margin-bottom: 3rem;
    position: relative;
}

.student-level {
    background: var(--student-light);
    border-left: 5px solid var(--student-primary);
    padding-left: 2rem;
}

/* グリッドシステム */
.summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

/* カード型UI */
.info-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.info-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
```

### 3. 強調表示システム
```css
/* 危険度別ボックス */
.danger-box {
    background: #ffebee;
    border: 2px solid var(--danger);
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem 0;
    position: relative;
}

.danger-box::before {
    content: "🚫";
    position: absolute;
    top: -10px;
    left: 10px;
    background: white;
    padding: 0 5px;
    font-size: 1.2rem;
}

.warning-box {
    background: #fff8e1;
    border: 2px solid var(--warning);
    /* 同様のスタイル */
}

.info-box {
    background: #e1f5fe;
    border: 2px solid var(--info);
    /* 同様のスタイル */
}
```

### 4. インタラクティブ要素
```javascript
// レベルインジケーターの実装
class LevelIndicator {
    constructor() {
        this.indicator = document.querySelector('.study-level-indicator');
        this.levels = document.querySelectorAll('.level');
        this.sections = this.getSections();
        
        this.init();
    }
    
    init() {
        // クリックイベント
        this.levels.forEach(level => {
            level.addEventListener('click', (e) => this.scrollToSection(e));
        });
        
        // スクロールイベント
        window.addEventListener('scroll', () => this.updateActiveLevel());
        
        // 初期状態
        this.updateActiveLevel();
    }
    
    getSections() {
        return [
            { name: '薬学生', selector: '.student-level', element: null },
            { name: '臨床薬剤師', selector: '.intermediate-level', element: null },
            { name: '専門医療者', selector: '.advanced-level', element: null }
        ].map(section => {
            section.element = document.querySelector(section.selector);
            return section;
        });
    }
    
    scrollToSection(e) {
        const targetName = e.target.textContent;
        const targetSection = this.sections.find(s => s.name === targetName);
        
        if (targetSection && targetSection.element) {
            targetSection.element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }
    
    updateActiveLevel() {
        const scrollPosition = window.scrollY + 100;
        
        let activeSection = null;
        this.sections.forEach(section => {
            if (section.element) {
                const rect = section.element.getBoundingClientRect();
                const absoluteTop = rect.top + window.scrollY;
                
                if (scrollPosition >= absoluteTop) {
                    activeSection = section;
                }
            }
        });
        
        if (activeSection) {
            this.setActiveLevel(activeSection.name);
        }
    }
    
    setActiveLevel(levelName) {
        this.levels.forEach(level => {
            if (level.textContent === levelName) {
                level.classList.add('active');
            } else {
                level.classList.remove('active');
            }
        });
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    new LevelIndicator();
});
```

---

## 📝 コンテンツ移行ガイド

### 1. 既存コンテンツの分類
既存の薬剤ページから以下のように分類：

#### 薬学生レベルに配置
- 薬剤の基本情報（商品名、一般名、分類）
- 主な適応症
- 基本的な用法用量
- 主要な副作用
- 重要な相互作用

#### 中級レベルに配置
- 詳細な適応症と使い分け
- 用量調整の考え方
- 類薬との比較
- 臨床での位置づけ

#### 上級レベルに配置
- 開発の歴史
- 詳細な作用機序
- 最新の研究知見
- 専門的な使用法

### 2. 新規作成が必要なコンテンツ

#### 薬学生向け30秒サマリー
```html
<!-- テンプレート -->
<div class="summary-item fic-status">
    <h4>開発の位置づけ</h4>
    <p class="fic-badge">[First In Class / Best In Class / Me Too]</p>
    <p>[この薬剤の開発における位置づけを1文で]</p>
</div>

<div class="summary-item why-developed">
    <h4>なぜ作られた？</h4>
    <p>[開発の背景・ニーズを1-2文で説明]</p>
</div>

<div class="summary-item clinical-use">
    <h4>実際どう使われてる？</h4>
    <p>[現在の臨床での使用状況を1-2文で]</p>
</div>
```

#### 実習向け処方例
```html
<!-- 処方箋形式で記載 -->
<div class="rx-format">
    Rp) [薬剤名] [規格]  
        1回[用量] 1日[回数] [用法]  
        [日数]日分
</div>
<p class="rx-note">※ [処方のポイント・注意点]</p>
```

#### 調剤上の注意事項（重要度で判断）
```html
<!-- 注意事項がある薬剤の例 -->
<div class="alert-box">
    <ul class="formulation-cautions">
        <li class="no-crush">
            <strong>粉砕不可</strong>
            <span class="reason">（腸溶錠のため）</span>
        </li>
    </ul>
</div>

<!-- よくある注意事項の例 -->
- 粉砕不可: 腸溶錠、徐放錠、フィルムコート錠の一部
- 水以外での服用不可: テトラサイクリン系（牛乳NG）、ビスホスホネート系
- 冷所保存: インスリン製剤、一部の生物学的製剤
- 遮光保存: ニトログリセリン、一部のビタミン剤
- 食前服用厳守: α-グルコシダーゼ阻害薬
- 噛み砕き不可: 舌下錠、バッカル錠

<!-- 注意: 粉砕可能、一包化可能などの「普通のこと」は記載しない -->
```

#### 患者FAQ
最低3つは必要。実際に聞かれる質問を選定：
1. 効果に関する質問
2. 副作用に関する質問
3. 服用方法に関する質問

### 3. コンテンツの品質基準

#### 薬学生向けセクション
- **文字数**: 1項目あたり50-100文字
- **専門用語**: 最小限に、必要なら注釈
- **図表**: シンプルで理解しやすいもの

#### 中級セクション
- **文字数**: 1項目あたり100-200文字
- **専門用語**: 適切に使用
- **図表**: より詳細なデータ

#### 上級セクション
- **文字数**: 制限なし
- **専門用語**: 自由に使用
- **図表**: 学術的なグラフ・表

---

## 🔧 技術的実装のポイント

### パフォーマンス最適化
```javascript
// 遅延読み込みの実装
const lazyLoadSections = () => {
    const advancedSections = document.querySelectorAll('.advanced-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 詳細コンテンツの読み込み
                loadAdvancedContent(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '200px'
    });
    
    advancedSections.forEach(section => {
        observer.observe(section);
    });
};
```

### アクセシビリティ対応
```html
<!-- スキップリンク -->
<nav class="skip-links" aria-label="ページ内ナビゲーション">
    <a href="#student-content" class="skip-link">薬学生向け情報へ</a>
    <a href="#intermediate-content" class="skip-link">臨床情報へ</a>
    <a href="#advanced-content" class="skip-link">詳細情報へ</a>
</nav>

<!-- セクションの適切なマークアップ -->
<section class="student-level" 
         role="region" 
         aria-label="薬学生向け基本情報"
         id="student-content">
    <!-- コンテンツ -->
</section>
```

### プリント対応
```css
@media print {
    /* レベルインジケーターは非表示 */
    .study-level-indicator {
        display: none;
    }
    
    /* セクション間の改ページ */
    .content-section {
        page-break-before: auto;
        page-break-after: auto;
        page-break-inside: avoid;
    }
    
    /* 背景色の調整 */
    .student-level,
    .intermediate-level,
    .advanced-level {
        background: none !important;
        border-left-width: 2px;
        border-left-color: #333 !important;
    }
    
    /* リンクのURL表示 */
    a[href]::after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
        color: #666;
    }
}
```

---

## 🐛 トラブルシューティング

### よくある実装の問題と解決法

#### 問題1: レベルインジケーターが正しく動作しない
**原因**: セクションのセレクタが間違っている
**解決**: 
```javascript
// セレクタの確認
console.log(document.querySelector('.student-level')); // nullでないこと確認
```

#### 問題2: モバイルでレイアウトが崩れる
**原因**: グリッドの最小幅が大きすぎる
**解決**:
```css
@media (max-width: 480px) {
    .summary-grid {
        grid-template-columns: 1fr;
    }
}
```

#### 問題3: プリント時に内容が切れる
**原因**: page-break設定の不備
**解決**: 上記のプリント用CSSを適用

---

## 📚 参考リソース

### 内部ドキュメント
- `/project-docs/2025-07-01-drug-page-redesign/DRUG_PAGE_TEMPLATE_2025.md`
- `/docs/drugs/` - 既存の薬剤ページ

### 外部リソース
- [WCAG 2.1 ガイドライン](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout)
- [薬学教育モデル・コアカリキュラム](https://www.mext.go.jp/a_menu/01_d/08091815.htm)

---

## 🤝 サポート

実装で困ったら：
1. このガイドの該当セクションを確認
2. 既存の実装例を参照
3. チームメンバーに相談

**このガイドは継続的に更新されます。実装中の気づきや改善案があれば、フィードバックをお願いします。**