# JavaScript使用状況分析

**作成日時**: 2025-07-31 10:45  
**作成者**: Claude  
**プロジェクト**: OkusuriNote JavaScript最適化  

## 現在のJS使用状況

### 実際に使用されているファイル
1. **level-selector.js**（8.6KB）- 薬剤ページ10個で使用中
2. **responsive-elements.js**（29KB）- index.htmlで使用中
3. **main.js**（63B）- 薬剤ページで読み込まれているが中身は空

### 未使用または限定使用のファイル
4. **interactive-features.js**（38KB）- 完全未使用
5. **navigation.js**（14KB）- dev-check.htmlのみ
6. **search.js**（15KB）- dev-check.htmlのみ
7. **mobile-nav.js**（7.1KB）- dev-check.htmlのみ

## 提案

### 1. 未使用ファイルのアーカイブ
```bash
# アーカイブディレクトリ作成と移動
mkdir -p docs/_archive/unused-js-20250731
mv docs/assets/js/interactive-features.js docs/_archive/unused-js-20250731/
mv docs/assets/js/navigation.js docs/_archive/unused-js-20250731/
mv docs/assets/js/search.js docs/_archive/unused-js-20250731/
mv docs/assets/js/mobile-nav.js docs/_archive/unused-js-20250731/
mv docs/assets/js/main.js docs/_archive/unused-js-20250731/
```

### 2. drug-page-controls.js新規作成
薬剤ページの370行のインラインスクリプトを共通化：
- toggleBottomSheet関数
- レベルボタンのイベントハンドリング
- ボトムシートとlevel-selector.jsの連携

### 3. 薬剤ページの更新
```html
<!-- main.jsをdrug-page-controls.jsに変更 -->
<script src="../assets/js/drug-page-controls.js"></script>
<script src="../assets/js/level-selector.js"></script>
<!-- インラインスクリプト削除 -->
```

## 効果
- ファイル数：7個 → 3個
- 総容量：115KB → 41KB（64%削減）
- インラインスクリプト：370行 → 0行