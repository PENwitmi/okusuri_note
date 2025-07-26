# 薬剤ページCSS背景色分析
作成日: 2025-07-26

## 問題の概要
薬剤ページが「色まみれ」で読みにくくなっている原因を分析。featureとindexページは比較的読みやすいため、薬剤ページに集中して改善を行う。

## 現状の背景色使用状況

### drug-page-v2.css（32箇所）
主要な背景色設定：
1. **drug-header**: var(--bg-secondary) - 薬剤ヘッダー全体にグレー背景
2. **badge要素**: var(--bg-accent) - バッジに背景色
3. **generation**: var(--pharma-primary) - 世代表示に青背景
4. **quick-summary**: var(--bg-study) - クイックサマリーに背景色
5. **impact-item**: white - インパクトアイテムは白背景
6. **level-1-content**: var(--bg-study) - レベル1コンテンツに背景色
7. **level-2-content**: var(--bg-secondary) - レベル2にグレー背景
8. **level-3-content**: グラデーション背景 - レベル3にグラデーション

### components.css（薬剤ページで使用される要素）
1. **content-section**: 白背景に変更済み ✓
2. **info-box**: #f0f7ff（薄い青）
3. **alert-box**: #fffbf0（薄い黄）
4. **highlight-box**: #f0fdf4（薄い緑）
5. **key-point-box**: #fff7ed（薄いオレンジ）
6. **clinical-evidence**: white
7. **development-story**: 白背景に変更済み ✓
8. **comparison-table**: ヘッダーが#34495e（ダークネイビー）

## 問題点の詳細

### 1. 大きな領域への背景色
- drug-header、quick-summary、各レベルコンテンツなど、大きな領域に背景色が設定されている
- これらが視覚的な「重さ」を生み出している

### 2. ネスト構造での色の重なり
例：
```
content-section（白背景）
└─ info-box（青背景）
   └─ テキスト
```

### 3. レベルごとの背景色
- Level 1: study背景
- Level 2: secondary背景  
- Level 3: グラデーション背景
各レベルで異なる背景色があり、統一感がない

## 改善の方向性

1. **大きな領域は白背景に**
   - drug-header、quick-summary、level-contentなど

2. **アクセントとしての色使い**
   - 小さなボックス（info-box等）のみ背景色を残す
   - 左装飾帯で色を表現

3. **階層の明確化**
   - ボーダーとシャドウで区切りを表現
   - 背景色ではなく、構造で階層を示す