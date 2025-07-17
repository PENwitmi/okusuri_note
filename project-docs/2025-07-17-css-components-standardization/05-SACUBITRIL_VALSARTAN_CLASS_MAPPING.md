# sacubitril-valsartan.html クラスマッピングと適用計画

**作成日時**: 2025-07-17 04:50  
**対象ファイル**: `/docs/drugs/sacubitril-valsartan.html`  
**目的**: 使用クラスの定義場所特定とcomponents.css適用プランの策定

## 1. 使用クラス一覧と定義場所

### 1.1 基本レイアウトクラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `drug-detail` | drug-page-v2.css | body要素のベースクラス | ✅定義済み |
| `sidebar-layout` | sidebar.css | サイドバー付きレイアウト | ✅定義済み |
| `sidebar` | sidebar.css | サイドバー本体 | ✅定義済み |
| `main-content` | drug-page-v2.css | メインコンテンツエリア | ✅定義済み |

### 1.2 サイドバー関連クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `sidebar-section` | sidebar.css | サイドバーセクション | ✅定義済み |
| `sidebar-title` | sidebar.css | サイドバータイトル | ✅定義済み |
| `sidebar-links` | sidebar.css | リンクコンテナ | ✅定義済み |
| `sidebar-link` | sidebar.css | 個別リンク | ✅定義済み |
| `category-desc` | sidebar.css | カテゴリ説明 | ✅定義済み |
| `drug-category` | sidebar.css | 薬剤カテゴリ | ✅定義済み |

### 1.3 レベル選択関連クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `level-selector` | level-selector.css | レベル選択コンテナ | ✅定義済み |
| `level-selector__inner` | level-selector.css | レベル選択内部 | ✅定義済み |
| `level-btn` | level-selector.css | レベルボタン | ✅定義済み |
| `level-indicator` | drug-page-v2.css | レベルインジケーター | ✅定義済み |
| `level-1-indicator` | drug-page-v2.css | レベル1インジケーター | ✅定義済み |
| `level-2-indicator` | drug-page-v2.css | レベル2インジケーター | ✅定義済み |
| `level-3-indicator` | drug-page-v2.css | レベル3インジケーター | ✅定義済み |

### 1.4 コンテンツレベルクラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `level-1-content` | drug-page-v2.css | レベル1コンテンツ | ✅定義済み |
| `level-2-content` | drug-page-v2.css | レベル2コンテンツ | ✅定義済み |
| `level-3-content` | drug-page-v2.css | レベル3コンテンツ | ✅定義済み |

### 1.5 薬剤情報クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `drug-header` | drug-page-v2.css | 薬剤ヘッダー | ✅定義済み |
| `brand-name` | drug-page-v2.css | 商品名 | ✅定義済み |
| `generic-name` | drug-page-v2.css | 一般名 | ✅定義済み |
| `drug-classification` | drug-page-v2.css | 薬剤分類 | ✅定義済み |
| `drug-class` | drug-page-v2.css | 薬効分類 | ✅定義済み |
| `generation` | drug-page-v2.css | 世代表示 | ✅定義済み |

### 1.6 コンテンツ構造クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `container` | drug-page-v2.css | 基本コンテナ | ✅定義済み |
| `impact-grid` | drug-page-v2.css | インパクトグリッド | ✅定義済み |
| `impact-item` | drug-page-v2.css | インパクトアイテム | ✅定義済み |
| `indications` | drug-page-v2.css | 適応症セクション | ✅定義済み |
| `indications__list` | drug-page-v2.css | 適応症リスト | ✅定義済み |
| `quick-summary` | drug-page-v2.css | クイックサマリー | ✅定義済み |

### 1.7 処方・併用薬クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `prescribing-data` | drug-page-v2.css | 処方データ | ✅定義済み |
| `design-spec` | drug-page-v2.css | 処方仕様 | ✅定義済み |
| `combination-drugs` | drug-page-v2.css | 併用薬セクション | ✅定義済み |
| `combination-drugs__list` | drug-page-v2.css | 併用薬リスト | ✅定義済み |

### 1.8 特殊スタイルクラス（要置換候補）

| クラス名 | 定義場所 | 用途 | 状態 | components.css代替案 |
|---------|----------|------|------|-------------------|
| `quote-box` | components.css | 引用ボックス | ✅components.css使用中 | - |
| `faq-note` | drug-page-v2.css | FAQ注記 | ❌固有クラス | `info-box` |
| `combination-box` | drug-page-v2.css | 併用ボックス | ❌固有クラス | `highlight-box` |
| `level-hint` | drug-page-v2.css | レベルヒント | ❌固有クラス | （インラインで対応） |
| `card` | components.css | カード要素 | ✅components.css使用中 | - |
| `key-point-box` | components.css | キーポイント | ✅components.css使用中 | - |

### 1.9 モバイル関連クラス

| クラス名 | 定義場所 | 用途 | 状態 |
|---------|----------|------|------|
| `mobile-fab` | mobile-controls.css | フローティングボタン | ✅定義済み |
| `bottom-sheet-overlay` | mobile-controls.css | オーバーレイ | ✅定義済み |
| `bottom-sheet` | mobile-controls.css | ボトムシート | ✅定義済み |
| `bottom-sheet-handle` | mobile-controls.css | ハンドル | ✅定義済み |
| `bottom-sheet-content` | mobile-controls.css | コンテンツ | ✅定義済み |
| `bottom-sheet-section` | mobile-controls.css | セクション | ✅定義済み |
| `bottom-sheet-title` | mobile-controls.css | タイトル | ✅定義済み |
| `bottom-sheet-buttons` | mobile-controls.css | ボタングループ | ✅定義済み |
| `bottom-sheet-btn` | mobile-controls.css | ボタン | ✅定義済み |
| `arrow` | mobile-controls.css | 矢印 | ✅定義済み |

## 2. 装飾不足箇所の特定とcomponents.css適用計画

### 2.1 クラスが振られていない要素への対応

#### FAQ部分（260-273行目）
**現状**:
```html
<dl>
    <dt>Q: 「なぜ36時間も待たないといけないの？」</dt>
    <dd>A: ACE阻害薬の半減期は約12時間...</dd>
</dl>
```

**改善案**:
```html
<div class="info-box">
    <h5>💡 薬学生のよくある疑問</h5>
    <dl>
        <dt><strong>Q: なぜ36時間も待たないといけないの？</strong></dt>
        <dd>A: ACE阻害薬の半減期は約12時間...</dd>
    </dl>
</div>
```

#### レベル2コンテンツ内の各項目（282-307行目）
**現状**:
```html
<div>
    <h4>1. PARADIGM-HF試験の衝撃</h4>
    <p>8,442例という大規模試験で...</p>
</div>
```

**改善案**:
```html
<div class="info-box">
    <h5>1. PARADIGM-HF試験の衝撃</h5>
    <p>8,442例という大規模試験で...</p>
</div>
```

### 2.2 固有クラスの置換計画

#### faq-note → info-box
**対象**: 250行目
```html
<!-- 現状 -->
<p class="faq-note">
    <strong>薬学生へのメッセージ</strong>：...
</p>

<!-- 改善後 -->
<div class="info-box">
    <h5>薬学生へのメッセージ</h5>
    <p>36時間のwashout periodは絶対必須...</p>
</div>
```

#### combination-box → highlight-box
**対象**: 368, 382, 396, 410, 424行目
```html
<!-- 現状 -->
<div class="combination-box">
    <h4>開始用量の違い</h4>
    <p>ACE/ARBから：50mg×2回...</p>
</div>

<!-- 改善後 -->
<div class="highlight-box">
    <h5>開始用量の違い</h5>
    <p>ACE/ARBから：50mg×2回...</p>
</div>
```

#### level-hint → 削除（インラインスタイルで対応）
**対象**: 263行目
```html
<!-- 現状 -->
<span class="level-hint">（詳しくは研修編で）</span>

<!-- 改善後 -->
<span style="color: #7f8c8d; font-size: 0.9em;">（詳しくは研修編で）</span>
```

### 2.3 セクション構造の標準化

#### card → content-section（セクション全体の構造化）
**対象**: 278行目のセクション
```html
<!-- 現状 -->
<section class="card level-2-content">
    <h2>なぜHFrEFでACE阻害薬を超えた初めての心不全薬なのか</h2>
    <div>...</div>
</section>

<!-- 改善後 -->
<section class="content-section level-2-content">
    <h2>なぜHFrEFでACE阻害薬を超えた初めての心不全薬なのか</h2>
    <div>...</div>
</section>
```

## 3. 実装優先順位

### Phase 1: 即座に効果が見込める変更（優先度：高）
1. FAQ部分へのinfo-box適用
2. レベル2コンテンツ内の各項目へのinfo-box適用
3. faq-noteからinfo-boxへの置換

### Phase 2: 視覚的改善が大きい変更（優先度：中）
1. combination-boxからhighlight-boxへの置換（5箇所）
2. cardクラスからcontent-sectionへの変更
3. level-hintの削除とインラインスタイル化

### Phase 3: 構造的な最適化（優先度：低）
1. その他のクラスなし要素への適切なクラス付与
2. HTML構造の見直しによる標準化

## 4. 期待される効果

### 定量的効果
- 固有クラス削減：3個（faq-note, combination-box, level-hint）
- 装飾不足箇所の解消：約10箇所
- components.css活用率向上：現在3クラス → 目標6クラス以上

### 定性的効果
- FAQ部分の視覚的改善（構造化されたQ&A表示）
- レベル2コンテンツの読みやすさ向上（適切なボックス化）
- 他の薬剤ページとの視覚的統一性向上
- メンテナンス性の向上（標準クラスの使用）

## 5. 注意事項

1. **components.cssの原則を遵守**
   - 新規クラスの作成は行わない
   - 既存クラスの用途に囚われず、視覚的効果で選択
   - HTML構造を既存クラスに合わせて変更

2. **段階的な適用**
   - 各変更後に表示確認を実施
   - 問題があれば即座にロールバック
   - ユーザビリティを最優先

3. **既存の良好な部分は維持**
   - 正しく機能しているクラスは変更しない
   - components.css既使用部分（quote-box, key-point-box）は維持