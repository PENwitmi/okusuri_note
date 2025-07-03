# 01-LEVEL3_DISPLAY_ISSUE_INVESTIGATION.md
# Level 3 表示問題の詳細調査報告書

**作成日時**: 2025-07-04 04:42  
**作成者**: CEO  
**調査期間**: 2025-07-04 03:50 - 04:30  
**最終更新**: 2025-07-04 04:42

## 📋 エグゼクティブサマリー

薬剤個別ページのLevel 3（研修中）コンテンツが表示されない重大な問題を発見。調査の結果、複数の原因が複合的に作用していることが判明：

1. **技術的問題**: 3ファイルでの`style="display: none;"`ハードコード
2. **実装漏れ**: 1ファイルでのクラス欠落
3. **根本的問題**: 多数のファイルでLevel 3コンテンツ自体が削除されている

影響範囲は全22薬剤に及び、PharmaDxの最も価値ある「感動的な医師証言」「歴史的物語」の89%が失われている状態。

## 🔍 問題の発見経緯

### 2025-07-04 03:50 - ユーザーからの初期報告
```
「適切に表示されていないのか、もしくは内容が失われているのかさっぱりわからないんですが、
元のHTMLに比べて表示されている内容が格段に少ないです。
特に「研修中」と呼ばれるレベル3の内容がほとんどのページで見えないようになっている気がします。」
```

### 具体的な症状
- Level 1（薬学生）: 正常表示
- Level 2（実習中）: 正常表示
- Level 3（研修中）: **表示されない**
- 「ジゴキシンのページとかかなりなくなってませんか?」

## 🔬 技術的調査結果

### 1. HTML構造の調査

#### A. ハードコードされた`display: none`問題（3ファイル）

**影響ファイル**:
1. `/docs/drugs-v2/digoxin-refined.html`
2. `/docs/drugs-v2/carvedilol-refined.html`
3. `/docs/drugs-v2/warfarin-refined.html`

**問題のコード例（digoxin）**:
```html
<!-- Level 3: 研修中向け高度情報 -->
<section class="level-3-content" style="display: none;">
    <div class="container">
        <!-- コンテンツは存在するが強制非表示 -->
    </div>
</section>
```

**原因**: 開発時のデバッグ用設定が本番環境に残存した可能性

#### B. クラス欠落問題（1ファイル）

**影響ファイル**: `/docs/drugs-v2/vancomycin-refined.html`

**問題のコード**:
```html
<!-- Level 3: 研修中向け高度情報 -->
<section>  <!-- class="level-3-content"が欠落 -->
    <div class="container">
```

**影響**: JavaScriptのレベル切り替え機能が動作しない

### 2. コンテンツ削除の実態

#### A. 削除されたコンテンツの種類

**Manager作成の秘密レポート**（03-COMPREHENSIVE_HTML_COMPARISON_INVESTIGATION_REPORT.md）より：

1. **医師・患者の証言（89%削除）**
   ```html
   <!-- 削除された例 -->
   <div class="doctor-voice emotion-moved">
       <blockquote>
           「ある70代の患者さんは、複数の新薬で副作用に悩まされていました。
           メトホルミンに戻して6ヶ月後、久しぶりに笑顔で
           『やっぱりメトグルコが一番安心です』と。
           医師として、この薬の67年間の重みを実感する瞬間です」
       </blockquote>
       <cite>- 大学病院 糖尿病内分泌科医</cite>
   </div>
   ```

2. **詳細な歴史的タイムライン（95%削除）**
   - 日本の44年遅延の詳細経緯
   - フェンホルミン事件のトラウマ
   - 厚労省の慎重姿勢の背景

3. **臨床現場の実践的知識（92%削除）**
   - 処方パターンの詳細
   - 併用薬の実例と根拠
   - 副作用対処の具体的方法

#### B. 削除前の豊富なコンテンツ（css_cleanupディレクトリに残存）

**例: `/docs/_internal/css_cleanup/digoxin-clean.html`**
- 1890年代からの歴史物語
- Withering博士の発見秘話  
- 「最後の砦」としての位置づけ
- TDM必須となった経緯

## 📊 影響範囲の分析

### 定量的影響
- **影響薬剤数**: 22/22（100%）
- **技術的問題**: 4/22（18.2%）
- **コンテンツ削除**: 18/22（81.8%）
- **失われた価値**: 医師証言89%、歴史物語95%

### 定性的影響
1. **教育価値の喪失**: 研修医向けの深い理解が不可能に
2. **差別化要素の消失**: PharmaDx独自の「感動」要素が失われた
3. **ブランド価値の毀損**: 「薬学教育に革命を」という理念との乖離

## 🔧 発見された技術的課題

### 1. JavaScript実装の不整合
```javascript
// レベル切り替え機能は存在するが...
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        // display: noneのインラインスタイルが優先され機能しない
    });
});
```

### 2. CSS優先順位の問題
- インラインスタイル（`style="display: none;"`）が最優先
- `drug-page-v2.css`の`.level-3-content`定義が無効化

### 3. 品質管理プロセスの欠如
- 全レベルの表示確認が実施されていない
- 自動テストの不在

## 💡 根本原因の分析

### 1. CSS統合プロジェクトの副作用
- Ver2移行時にコンテンツの大幅削除が発生
- 「クリーン」の解釈が「簡素化」となり価値が失われた

### 2. プロジェクト間の連携不足
- CSS統合チームとコンテンツチームの分断
- 削除の影響が共有されていない

### 3. 品質基準の曖昧さ
- 「クリーンなHTML」の定義が不明確
- 教育価値 vs 技術的シンプルさのバランス欠如

## 📝 調査で使用したコマンドと結果

### 1. display: none の検出
```bash
grep -n "level-3-content.*display.*none" /docs/drugs-v2/*.html
```
結果: 3ファイルで検出

### 2. クラス欠落の検出
```bash
grep -L "class=\"level-3-content\"" /docs/drugs-v2/*.html | \
xargs grep -l "Level 3:"
```
結果: vancomycin-refined.htmlのみ

### 3. コンテンツ量の比較
```bash
# 元ファイル
wc -l /docs/_internal/css_cleanup/*-clean.html
# 平均: 892行

# 現在のファイル  
wc -l /docs/drugs-v2/*-refined.html
# 平均: 198行（77.8%削減）
```

## 🎯 結論と次のステップ

### 即座に対応すべき事項
1. **技術的修正**（4ファイル）
   - `style="display: none;"`の削除（3ファイル）
   - `class="level-3-content"`の追加（1ファイル）

### 中期的対応
2. **コンテンツ復元**（18ファイル）
   - css_cleanupディレクトリからの価値あるコンテンツのサルベージ
   - 新しいLevel構造への適応

### 根本的改革
3. **CSS構造の見直し**
   - style.cssとdrug-page-v2.cssの責務明確化
   - インデックス用と個別ページ用の分離

この調査により、表面的な表示問題の裏に、PharmaDxの価値の根幹に関わる重大な課題が存在することが明らかになった。早急な対応が必要である。

## 📎 関連ドキュメント
- `/project-docs/2025-07-04-v2html-content-check/03−COMPREHENSIVE_HTML_COMPARISON_INVESTIGATION_REPORT.md`
- `/project-docs/2025-07-04-v2html-content-check/05-CSS_AWARE_CONTENT_RESTORATION_PLAN.md`
- `/docs/_internal/css_cleanup/` ディレクトリ（元コンテンツ）