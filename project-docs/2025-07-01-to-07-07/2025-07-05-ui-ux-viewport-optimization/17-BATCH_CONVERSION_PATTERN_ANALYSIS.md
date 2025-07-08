# 17-BATCH_CONVERSION_PATTERN_ANALYSIS.md

**プロジェクト**: UI/UX ビューポート最適化 一括変換パターン分析  
**作成日**: 2025-07-06 13:25  
**作成者**: CEO  
**目的**: metformin-refined.htmlの成功パターンを21薬剤に適用するための詳細分析

---

## 📊 **現状分析**

### **統合状況**
- ✅ **統合済み**: 1薬剤（metformin-refined.html）
- ❌ **未統合**: 21薬剤（dapagliflozin-refined.html等）

### **未統合ページの典型例（dapagliflozin）**
```html
<!-- CSSリンク（9-13行）-->
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">  <!-- 重複 -->
<link rel="stylesheet" href="../assets/css/level-selector.css">
<!-- sidebar.css と mobile-controls.css が欠如 -->

<!-- body直下にヘッダー -->
<body class="drug-detail" data-category="endocrine">
    <header>
    <!-- content-with-sidebar ラッパーなし -->
```

---

## 🎯 **変換パターン詳細**

### **1. CSS追加パターン**

#### **変換前**
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">  <!-- 重複を削除 -->
<link rel="stylesheet" href="../assets/css/level-selector.css">
```

#### **変換後**
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/sidebar.css">        <!-- 追加 -->
<link rel="stylesheet" href="../assets/css/mobile-controls.css"> <!-- 追加 -->
<link rel="stylesheet" href="../assets/css/level-selector.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
```

### **2. HTML構造変換パターン**

#### **変換前**
```html
<body class="drug-detail" data-category="[カテゴリ]">
    <header>...</header>
    <main>
        <!-- レベル選択UI -->
        <div class="level-selector">...</div>
        <!-- コンテンツ -->
        <section class="level-1-content">...</section>
        ...
    </main>
    <footer>...</footer>
</body>
```

#### **変換後**
```html
<body class="drug-detail" data-category="[カテゴリ]">
    <div class="content-with-sidebar">  <!-- 新規ラッパー -->
        <main class="main-content">      <!-- mainにclass追加 -->
            <!-- header移動 -->
            <header>...</header>
            
            <!-- レベル選択UIを除去（サイドバーへ移動） -->
            
            <!-- コンテンツはそのまま -->
            <section class="level-1-content">...</section>
            ...
            
            <!-- footer移動 -->
            <footer>...</footer>
        </main>
        
        <aside class="sidebar">          <!-- 新規サイドバー -->
            <!-- レベル選択セクション -->
            <!-- 関連薬剤セクション -->
            <!-- 薬効群セクション -->
        </aside>
    </div>
    
    <!-- モバイル要素追加 -->
    <button class="mobile-fab">📋</button>
    <div class="bottom-sheet-overlay"></div>
    <div class="bottom-sheet">...</div>
    
    <!-- JavaScript追加 -->
    <script>...</script>
</body>
```

### **3. サイドバー生成パターン**

#### **薬剤固有データの抽出**
各薬剤から以下を抽出：
1. **薬剤名**: `<h1 class="brand-name">`から
2. **カテゴリ**: `data-category`属性から
3. **関連薬剤**: 薬効群に基づいて自動生成

#### **サイドバーテンプレート**
```html
<aside class="sidebar">
    <!-- レベル選択セクション -->
    <div class="sidebar-section">
        <h3 class="sidebar-title">📚 学習レベル</h3>
        <div class="level-selector__guide">
            <span class="guide-text">あなたの知識に合わせて選択</span>
        </div>
        <div class="level-selector__inner">
            <!-- 既存のレベルボタンを移動 -->
        </div>
    </div>
    
    <!-- 関連薬剤セクション -->
    <div class="sidebar-section">
        <h3 class="sidebar-title">🔗 関連薬剤</h3>
        <div class="sidebar-links">
            <!-- カテゴリに基づいて自動生成 -->
        </div>
    </div>
    
    <!-- 薬効群セクション -->
    <div class="sidebar-section">
        <h3 class="sidebar-title">🎯 薬効群</h3>
        <div class="sidebar-links">
            <a href="../categories/[カテゴリ].html" class="sidebar-link">
                [カテゴリ名]薬剤一覧
            </a>
        </div>
    </div>
</aside>
```

### **4. モバイル要素パターン**

固定テンプレート（全薬剤共通）：
```html
<button class="mobile-fab" onclick="toggleBottomSheet()">📋</button>

<div class="bottom-sheet-overlay" onclick="toggleBottomSheet()"></div>

<div class="bottom-sheet">
    <div class="bottom-sheet-handle" onclick="toggleBottomSheet()"></div>
    <div class="bottom-sheet-content">
        <!-- サイドバーと同じ3セクション構造 -->
    </div>
</div>
```

### **5. JavaScript追加パターン**

```javascript
<script>
function toggleBottomSheet() {
    const overlay = document.querySelector('.bottom-sheet-overlay');
    const sheet = document.querySelector('.bottom-sheet');
    
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        sheet.classList.remove('active');
    } else {
        overlay.classList.add('active');
        sheet.classList.add('active');
    }
}

// レベル切替連携
document.querySelectorAll('.bottom-sheet .level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const level = this.dataset.level;
        // 既存のswitchLevel関数を呼び出し
        if (typeof switchLevel === 'function') {
            switchLevel(level);
        }
        toggleBottomSheet();
    });
});
</script>
```

---

## 📋 **薬剤カテゴリマッピング**

### **endocrine（内分泌系）**
- metformin（完了）
- dapagliflozin
- sitagliptin

### **cardiovascular（循環器系）**
- atorvastatin
- bisoprolol
- enalapril
- amlodipine
- carvedilol

### **gastrointestinal（消化器系）**
- esomeprazole
- lansoprazole
- famotidine

### **その他カテゴリ**
要確認...

---

## 🛠️ **スクリプト要件**

### **処理フロー**
1. **バックアップ作成**: 全21ファイルを`_old_files/backup_YYYYMMDD_HHMM/`へ
2. **CSS重複削除**: drug-page-v2.cssの重複を削除
3. **CSS追加**: sidebar.css, mobile-controls.css
4. **HTML構造変換**: content-with-sidebarラッパー追加
5. **要素移動**: header, footer, level-selector
6. **サイドバー生成**: カテゴリに基づく関連薬剤
7. **モバイル要素追加**: FAB, ボトムシート
8. **JavaScript追加**: toggleBottomSheet関数

### **エラーハンドリング**
- 既に統合済みのファイルはスキップ
- 変換失敗時は個別に記録
- バックアップからの復元機能

---

## 🎯 **期待される成果**

### **統一された体験**
- 全22薬剤で同じUI/UX
- PC 85%、モバイル 90%コンテンツ表示
- 一貫したナビゲーション

### **保守性向上**
- 責務分離されたCSS構造
- 統一されたHTML構造
- 将来の拡張が容易

---

**準備完了**: 詳細パターン分析に基づく一括変換仕様  
**次ステップ**: スクリプト実装と実行  
**リスク**: 最小限（バックアップとエラーハンドリング完備）