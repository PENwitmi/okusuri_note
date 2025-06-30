# 404エラー修正作業指示書（Developer向け）
**作成日時**: 2025-06-29 18:30
**作成者**: CEO
**承認者**: Manager（要承認）

## 🎯 作業概要
薬剤ページ（18ファイル）の404エラーを解消するための定型的な修正作業

## 📋 修正対象ファイル一覧（18ファイル）
※ candesartan.html、telmisartan.html は修正済み

1. docs/drugs/atorvastatin.html
2. docs/drugs/bisoprolol.html
3. docs/drugs/carvedilol.html
4. docs/drugs/dapagliflozin.html
5. docs/drugs/digoxin.html
6. docs/drugs/empagliflozin.html
7. docs/drugs/enalapril.html
8. docs/drugs/escitalopram.html
9. docs/drugs/esomeprazole.html
10. docs/drugs/furosemide.html
11. docs/drugs/lansoprazole.html
12. docs/drugs/losartan.html
13. docs/drugs/metformin.html
14. docs/drugs/omeprazole.html
15. docs/drugs/perindopril.html
16. docs/drugs/rosuvastatin.html
17. docs/drugs/spironolactone.html
18. docs/drugs/vancomycin.html
19. docs/drugs/warfarin.html

## 🔧 修正内容（各ファイル共通）

### 1. 不要なJavaScript参照の削除
**削除する行**:
```html
    <script src="../js/drug-page.js"></script>
```
※ この行を完全に削除（drug-page.jsは存在しないため）

### 2. 薬効群リンクの修正
**変更前**:
```html
<a href="../groups/薬効群名.html">薬効群名</a>
```
**変更後**:
```html
<a href="../index.html#categories">薬効群名</a> <!-- TODO: 薬効群ページ作成後に修正 -->
```

**注意**: 薬効群名の部分は各ファイルで異なります
- ARB系: ARB
- PPI系: PPI
- スタチン系: スタチン
- SGLT2阻害薬系: SGLT2阻害薬
- β遮断薬系: β遮断薬
- ACE阻害薬系: ACE阻害薬
- SSRI系: SSRI
- 利尿薬系: 利尿薬
- その他: 各薬剤に応じた薬効群名

### 3. 日本語ファイル名リンクの修正（該当する場合のみ）
**確認方法**: 各ファイルで以下のパターンを検索
```html
<a href="薬剤名（日本語）.html" class="related-item">
```

**修正例**:
- カンデサルタン.html → candesartan.html
- テルミサルタン.html → telmisartan.html
- エソメプラゾール.html → esomeprazole.html
- ランソプラゾール.html → lansoprazole.html
- ロスバスタチン.html → rosuvastatin.html
- アトルバスタチン.html → atorvastatin.html
- エンパグリフロジン.html → empagliflozin.html
- ダパグリフロジン.html → dapagliflozin.html
- カルベジロール.html → carvedilol.html
- ビソプロロール.html → bisoprolol.html
- エナラプリル.html → enalapril.html
- ペリンドプリル.html → perindopril.html
- セルトラリン.html → sertraline.html
- エスシタロプラム.html → escitalopram.html
- フロセミド.html → furosemide.html
- スピロノラクトン.html → spironolactone.html
- ジゴキシン.html → digoxin.html
- バンコマイシン.html → vancomycin.html
- ワルファリン.html → warfarin.html
- メトホルミン.html → metformin.html
- ロサルタン.html → losartan.html
- オメプラゾール.html → omeprazole.html

## 📝 作業手順
1. 各ファイルを開く
2. 上記3つの修正を実施
3. 修正後、ファイルを保存
4. 次のファイルへ

## ⚠️ 重要な注意事項
- **Editツールを使用**: Writeツールは使わない
- **一つずつ確実に**: 急がず、確実に修正
- **日本語リンクは必ず確認**: すべてのファイルにあるとは限らない
- **TODOコメントを忘れずに**: 薬効群リンクの修正時は必ずTODOコメントを追加

## 🎯 完了基準
- 全18ファイルの修正が完了
- 各ファイルで上記3点（または2点）の修正が実施されている
- エラーなく保存されている

## 📢 報告
作業完了後、以下を報告してください：
1. 修正したファイル数
2. 日本語リンクを修正したファイルのリスト
3. 何か問題があった場合はその詳細