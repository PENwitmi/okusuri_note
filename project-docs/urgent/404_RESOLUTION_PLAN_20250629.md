# 404エラー解決計画書
**作成日時**: 2025-06-29 18:18
**状況**: 全薬剤ページで404エラー発生中

## 🚨 問題の詳細分析

### 1. CSSファイルの参照問題
| ファイル名 | 存在 | 参照元 | 対応 |
|-----------|------|--------|------|
| drug-page.css | ❌ | 20薬剤ページ | drug-detail.cssをリネーム |
| drug-detail.css | ✅ | なし | drug-page.cssにリネーム |
| category-comparison.css | ✅ | cardiovascular_arb.html | そのまま |
| differentiation-table.css | ✅ | cardiovascular_arb.html | そのまま |
| story-layout.css | ✅ | insulin.html, penicillin.html | そのまま |

### 2. JSファイルの参照問題
| ファイル名 | 存在 | 参照元 | 対応 |
|-----------|------|--------|------|
| drug-page.js | ❌ | 20薬剤ページ | 参照を削除 |
| navigation.js | ✅ | 1ファイル | そのまま |
| search.js | ✅ | 3ファイル | そのまま |

### 3. 内部リンクの問題
| 問題 | 影響範囲 | 対応 |
|------|----------|------|
| ../groups/ARB.html等が存在しない | 全薬剤ページ | TODO: 一時的に../index.html#categoriesに変更 |
| 日本語ファイル名リンク | candesartan.html | テルミサルタン.html → telmisartan.html |

## 📋 実行計画

### Phase 1: CSSファイル修正（2分）
```bash
# 1. drug-detail.css を drug-page.css にリネーム
mv docs/css/drug-detail.css docs/css/drug-page.css
```

### Phase 2: 薬剤ページ修正（30分）
各薬剤ページを個別に編集：

#### 2-1. 削除する行
```html
<script src="../js/drug-page.js"></script>
```

#### 2-2. 修正するリンク
```html
<!-- 変更前 -->
<a href="../groups/ARB.html">ARB</a>
<!-- 変更後（TODO: 一時対応）-->
<a href="../index.html#categories">ARB</a>
```

#### 2-3. 日本語ファイル名修正（該当ファイルのみ）
```html
<!-- 変更前 -->
<a href="テルミサルタン.html">
<!-- 変更後 -->
<a href="telmisartan.html">
```

### Phase 3: 動作確認（5分）
1. ローカルサーバーで全ページ確認
2. 404エラーが解消されていることを確認
3. git add, commit, push

## 📝 修正対象ファイル一覧
1. docs/drugs/atorvastatin.html
2. docs/drugs/bisoprolol.html
3. docs/drugs/candesartan.html ← 日本語リンクあり
4. docs/drugs/carvedilol.html
5. docs/drugs/dapagliflozin.html
6. docs/drugs/digoxin.html
7. docs/drugs/empagliflozin.html
8. docs/drugs/enalapril.html
9. docs/drugs/escitalopram.html
10. docs/drugs/esomeprazole.html
11. docs/drugs/furosemide.html
12. docs/drugs/lansoprazole.html
13. docs/drugs/losartan.html
14. docs/drugs/metformin.html
15. docs/drugs/omeprazole.html
16. docs/drugs/perindopril.html
17. docs/drugs/rosuvastatin.html
18. docs/drugs/sertraline.html
19. docs/drugs/spironolactone.html
20. docs/drugs/telmisartan.html
21. docs/drugs/vancomycin.html
22. docs/drugs/warfarin.html

## 🔄 更新履歴
- 2025-06-29 18:18: 初版作成