# Manager CSS品質チェック指示書

## 担当薬剤（10薬剤）
1. atorvastatin-refined.html
2. bisoprolol-refined.html
3. carvedilol-refined.html
4. digoxin-refined.html
5. esomeprazole-refined.html
6. furosemide-refined.html
7. lansoprazole-refined.html
8. omeprazole-refined.html
9. spironolactone-refined.html
10. warfarin-refined.html

## チェック手順

### 1. 各薬剤のユニーククラス数確認
```bash
cd '/Users/nishimototakashi/claude code/ai-team/code/okusuri_note'
grep -o 'class="[^"]*"' docs/drugs-v2/[薬剤名]-refined.html | sort | uniq | wc -l
```

### 2. 必須クラスの存在確認
メトホルミンを基準に、以下のクラスが存在するか確認：

#### 基本構造（必須）
- [ ] drug-detail (body要素)
- [ ] data-category="[適切なカテゴリ]"
- [ ] level-selector
- [ ] level-selector__inner
- [ ] level-btn (最低3個)
- [ ] drug-header
- [ ] brand-name
- [ ] generic-name
- [ ] drug-classification
- [ ] drug-class
- [ ] generation

#### コンテンツ系（推奨）
- [ ] quick-summary
- [ ] impact-grid
- [ ] impact-item (複数)
- [ ] level-1-content
- [ ] level-2-content
- [ ] level-3-content
- [ ] container
- [ ] card

#### 薬学生向け（あると良い）
- [ ] indications（適応症）
- [ ] indications__list
- [ ] faq-note（FAQ注記）
- [ ] statistics（統計情報）

### 3. data-categoryの確認
各薬剤の薬効群に応じた適切なカテゴリが設定されているか：

| 薬剤 | 期待されるカテゴリ |
|------|-------------------|
| atorvastatin | cardiovascular |
| bisoprolol | cardiovascular |
| carvedilol | cardiovascular |
| digoxin | cardiovascular |
| esomeprazole | gastro または digestive |
| furosemide | cardiovascular |
| lansoprazole | gastro または digestive |
| omeprazole | gastro または digestive |
| spironolactone | cardiovascular |
| warfarin | cardiovascular |

### 4. レポート記載項目
各薬剤について以下を記載：
1. ユニーククラス数
2. 不足している必須クラス
3. data-categoryの適切性
4. その他の問題点（インラインスタイル等）

## 未定義クラスについて
以下のクラスは先ほどCSSに追加しました：
- card
- statistics
- stat-conclusion
- summary-item

これらは使用されていても問題ありません。

## レポート提出先
`/Users/nishimototakashi/claude code/ai-team/code/okusuri_note/project-docs/2025-07-04-css-quality-check/MANAGER_CHECK_RESULTS.md`
として作成してください。