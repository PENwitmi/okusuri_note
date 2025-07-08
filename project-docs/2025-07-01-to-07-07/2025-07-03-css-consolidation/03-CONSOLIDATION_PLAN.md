# CSS統合実装計画書（Option B: 機能別分離）

**作成日時**: 2025-07-03 02:50  
**作成者**: CEO  
**方針**: mobile-optimization.cssをresponsive.cssに統合、ダークモード削除

---

## 🎯 統合方針

### 最終的なファイル構成
```
docs/assets/css/
├── style.css           # 基本スタイル（ダークモード削除済）
├── responsive.css      # 全レスポンシブ対応（統合版）
├── drug-page-v2.css    # 薬剤ページ専用（変更なし）
├── drug-detail.css     # 薬剤詳細（変更なし）
├── interactive.css     # インタラクティブ要素（変更なし）
├── category-comparison.css  # カテゴリ比較（変更なし）
├── differentiation-table.css # 差別化テーブル（変更なし）
└── story-layout.css    # ストーリーレイアウト（変更なし）

削除予定:
├── mobile-optimization.css  # responsive.cssに統合
└── ver2-import-test.css    # テストファイル、不要
```

---

## 📋 実装手順

### Phase 1: 準備作業（30分）

#### 1.1 バックアップ作成
```bash
# バックアップディレクトリ作成
mkdir -p _old_files/backup_20250703_0250/css/

# 対象ファイルのバックアップ
cp docs/assets/css/style.css _old_files/backup_20250703_0250/css/
cp docs/assets/css/mobile-optimization.css _old_files/backup_20250703_0250/css/
cp docs/assets/css/responsive.css _old_files/backup_20250703_0250/css/
```

#### 1.2 作業ディレクトリ準備
```bash
mkdir -p docs/_internal/css_consolidation_work_20250703/
```

---

### Phase 2: ダークモード削除（15分）

#### 2.1 style.cssからダークモード削除
削除対象（1272-1297行）:
```css
/* ダークモード対応（将来拡張用） */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #1a1a1a;
        /* ... 約30行 ... */
    }
}
```

#### 2.2 影響確認
- 他のCSSファイルでダークモード変数を使用していないか確認
- JavaScriptでダークモード切り替え機能がないか確認

---

### Phase 3: CSS統合作業（2時間）

#### 3.1 新responsive.css構造
```css
/*
 * responsive.css - 統合版レスポンシブスタイル
 * 作成日: 2025-07-03
 * 内容: mobile-optimization.cssとresponsive.cssを統合
 */

/* ========================================
   基本設定（旧mobile-optimization Task 2.1）
======================================== */
* {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}

body {
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
}

html {
    scroll-behavior: smooth;
}

/* ========================================
   レスポンシブ画像
======================================== */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ========================================
   ブレークポイント定義
======================================== */
/* 
 * 小型スマホ: 320-480px
 * スマホ: 481-768px  
 * タブレット: 769-1024px
 * デスクトップ: 1025px+
 */

/* ========================================
   モバイル共通スタイル（max-width: 768px）
======================================== */
@media (max-width: 768px) {
    /* タッチフレンドリーUI（旧Task 2.2） */
    .nav-link,
    .drug-link,
    .story-link,
    .diff-link {
        display: block;
        min-height: 44px;
        padding: 12px 16px;
        text-align: center;
        border-radius: 6px;
    }
    
    /* 読みやすさ改善（旧Task 2.3） */
    body {
        font-size: 16px;
        line-height: 1.7;
        padding: 0 16px;
    }
    
    h1 { font-size: 1.75rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
    
    /* グリッドレイアウト（統合） */
    .drugs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

/* ========================================
   小型スマートフォン（320-480px）
======================================== */
@media (min-width: 320px) and (max-width: 480px) {
    /* より小さい画面用の調整 */
    .header-container {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .logo h1 {
        font-size: 1.375rem;
    }
}

/* ========================================
   タブレット（768-1024px）
======================================== */
@media (min-width: 768px) and (max-width: 1024px) {
    .drugs-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .header-container {
        padding: 1rem 2rem;
    }
}
```

#### 3.2 統合時の注意点

**重複解消ルール**:
1. 同じセレクタで異なる値 → 最新の値を採用
2. 同じブレークポイント → 統合して整理
3. 不要なコメント・空行 → 削除

**保持すべき重要要素**:
- 44pxタッチターゲット（iOS標準）
- 16px以上のフォントサイズ（可読性）
- CSS変数の使用（保守性）

---

### Phase 4: HTML更新（30分）

#### 4.1 CSS読み込み変更

**変更前**:
```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/mobile-optimization.css">
<link rel="stylesheet" href="assets/css/responsive.css">
```

**変更後**:
```html
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">
```

#### 4.2 対象HTMLファイル
- index.html
- drugs/*.html（22ファイル）
- categories/*.html
- その他すべてのHTMLファイル

---

### Phase 5: 検証（1時間）

#### 5.1 デスクトップ検証
- Chrome、Firefox、Safari
- 1920x1080、1366x768解像度

#### 5.2 モバイル検証
- iPhone（Safari）
- Android（Chrome）
- 実機およびDevTools

#### 5.3 重点確認項目
- [ ] metformin-clean.htmlの表示統一
- [ ] タッチターゲットサイズ（44px以上）
- [ ] フォントサイズ（16px以上）
- [ ] グリッドレイアウトの切り替え
- [ ] ダークモード削除の影響なし

---

## 📊 期待される成果

### 定量的成果
```
変更前:
- ファイル数: 3ファイル
- 総行数: 2,597行
- 重複コード: 約30-40%

変更後:
- ファイル数: 2ファイル（-33%）
- 総行数: 約1,500行（-42%）
- 重複コード: 0%
```

### 定性的成果
- **保守性**: 修正箇所の一元化
- **理解容易性**: 明確な役割分担
- **一貫性**: 全ページで同じCSS構成
- **パフォーマンス**: HTTPリクエスト削減

---

## ⚠️ リスク管理

### リスク1: 表示崩れ
**対策**: 
- 段階的実装（1ページずつ確認）
- 十分なバックアップ
- ロールバック手順の明確化

### リスク2: キャッシュ問題
**対策**:
- CSSファイル名にバージョン付与
- またはクエリパラメータ追加（?v=2.0）

### リスク3: 見落とし
**対策**:
- チェックリストによる確認
- 複数ブラウザでのテスト
- ユーザーフィードバック期間設定

---

**文書作成完了**: 2025-07-03 02:50