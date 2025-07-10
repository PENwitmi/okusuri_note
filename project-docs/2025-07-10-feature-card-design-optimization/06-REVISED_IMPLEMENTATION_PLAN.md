# 修正版実装計画：実際のCSS構造に基づく最適化

**作成日時**: 2025-07-10 03:52  
**修正理由**: 既存CSS構造の詳細調査結果を反映  
**対象ファイル**: index.css、responsive-unified.css

## 既存CSS構造の理解

### 実稼働CSS（8ファイル）
1. **style.css** (513行) - 全サイト共通基盤
2. **responsive-unified.css** (516行) - レスポンシブ調整
3. **index.css** (605行) - メインページ専用（特集カード含む）
4. **interactive.css** (542行) - インタラクティブ機能
5. **drug-page-v2.css** (1006行) - 薬剤詳細ページ
6. **level-selector.css** (315行) - レベル選択
7. **sidebar.css** (129行) - サイドバー
8. **mobile-controls.css** (203行) - モバイル用UI

### 重要な発見
- **feature-page.css**は特集ページ自体（features/*.html）で使用
- **特集カードは index.css に定義**されている
- **responsive-unified.css**が全体のレスポンシブを管理

## 修正対象と実装方針

### 1. index.css の修正
**対象**: 特集ページカード（.features-grid, .feature-card）

#### 現在の実装（行392-397）
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-2xl);
}
```

#### 修正案
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* 2列固定 */
    gap: var(--spacing-xl);  /* より広いギャップ */
    margin-top: var(--spacing-2xl);
}
```

### 2. responsive-unified.css の修正

#### 薬剤カードのモバイル2列表示
**現在の実装（抜粋）**
```css
/* モバイル用グリッド（単一カラム） */
@media (max-width: 767px) {
    .drugs-grid,
    .categories-grid,
    .stories-grid,
    .differentiation-grid {
        display: grid;
        grid-template-columns: 1fr;
    }
}
```

#### 修正案
```css
/* モバイル用グリッド */
@media (max-width: 767px) {
    /* 薬剤カードは2列表示 */
    .drugs-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
    
    /* その他は1列維持 */
    .categories-grid,
    .stories-grid,
    .differentiation-grid {
        grid-template-columns: 1fr;
    }
    
    /* 特集カードは1列表示 */
    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* 超小型モバイル（480px以下） */
@media (max-width: 480px) {
    .drugs-grid {
        grid-template-columns: 1fr;  /* 1列に戻す */
    }
}
```

#### 特集カードのモバイルサイズ調整
```css
@media (max-width: 767px) {
    .feature-card {
        padding: var(--spacing-lg);  /* 余白を少し小さく */
    }
    
    .feature-icon {
        font-size: 2.5rem;  /* 3rem → 2.5rem */
    }
    
    .feature-title {
        font-size: 1.25rem;  /* 小さめに調整 */
    }
    
    .feature-subtitle {
        font-size: 0.875rem;
    }
}
```

### 3. CSS変数の追加（style.css）
必要に応じて以下を追加：
```css
:root {
    --spacing-xl: 32px;  /* 新規追加（存在しない場合） */
}
```

## 実装手順

### Phase 1: バックアップ作成（5分）
1. index.cssのバックアップ
2. responsive-unified.cssのバックアップ

### Phase 2: index.css修正（20分）
1. .features-gridを2列固定に変更
2. 必要に応じてギャップ調整
3. ブラウザで確認

### Phase 3: responsive-unified.css修正（30分）
1. 薬剤カードのモバイル2列表示追加
2. 特集カードのモバイル1列表示維持
3. 480px以下のブレークポイント追加
4. 特集カードのモバイルサイズ調整

### Phase 4: テスト（15分）
1. デスクトップ表示確認
   - 薬剤カード：3列
   - 特集カード：2列
2. タブレット表示確認（768px）
   - 薬剤カード：2列
   - 特集カード：2列
3. モバイル表示確認（767px以下）
   - 薬剤カード：2列
   - 特集カード：1列
4. 超小型モバイル確認（480px以下）
   - 薬剤カード：1列
   - 特集カード：1列

## リスク管理

### 既存デザインへの影響
- index.cssの変更は特集カードのみに影響
- responsive-unified.cssの変更は全体に影響するため慎重に

### ブレークポイントの整合性
- 既存：320px, 768px, 1024px
- 追加：480px（超小型モバイル用）

## 期待される成果

1. **PC表示**
   - 薬剤カード：現状維持（良好）
   - 特集カード：2列表示で視認性向上

2. **モバイル表示**
   - 薬剤カード：2列表示で情報密度最適化
   - 特集カード：1列表示でカードサイズ調整

3. **ユーザビリティ**
   - 特集ページと薬剤ページの視覚的区別
   - モバイルでの情報アクセス性向上

## 修正後の検証項目

- [ ] 薬剤カードのPC3列表示維持
- [ ] 薬剤カードのモバイル2列表示
- [ ] 特集カードのPC2列表示
- [ ] 特集カードのモバイル1列表示
- [ ] 480px以下での適切な表示
- [ ] カードサイズの適切な調整
- [ ] 既存ページへの悪影響なし