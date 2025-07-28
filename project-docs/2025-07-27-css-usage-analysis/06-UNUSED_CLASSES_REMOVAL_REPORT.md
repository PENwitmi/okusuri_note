# feature-page.css 未使用クラス削除レポート

**作成日**: 2025-07-27 22:39  
**対象ファイル**: docs/assets/css/feature-page.css  
**バックアップ**: _old_files/backup_20250727_2230/feature-page.css

## 削除結果サマリー

| 項目 | 削除前 | 削除後 | 削減量 |
|------|--------|--------|--------|
| ファイルサイズ | 24,580バイト | 17,666バイト | 6,914バイト (28.1%) |
| 行数 | 1,343行 | 966行 | 377行 |
| 定義クラス数 | 111個 | 51個 | 60個 |

## 削除の基準

以下の条件をすべて満たすクラスを削除：
1. 4つの公開特集ページで使用されていない（使用率0%）
2. MR拮抗薬、心不全、抗血栓薬、ドーパミンの特集ページで検索して発見されない

## 削除されたクラス一覧（60個）

### フロー関連（6個）
- drug-flow
- drug-flow-item  
- drug-number
- drug-type
- drug-role
- flow-arrow

### デバイス関連（4個）
- device-cards
- device-card
- device-features
- feature-item

### 患者プロファイル関連（5個）
- patient-profile
- profile-grid
- profile-item
- patient-card
- patient-type

### 療法関連（9個）
- smart-therapy
- triple-therapy
- smart-concept
- smart-definition
- smart-patients
- smart-reason
- triple-patients
- triple-reasons
- adaptation-reason

### チェックリスト関連（3個）
- checklist-box
- checklist
- checklist-item

### テーブル関連（5個）
- table-responsive
- indication-table
- dosing-table
- indication-comparison
- indication-item

### ボックス関連（3個）
- risk-box
- benefit-box
- reason-box

### コンポーネントタグ（5個）
- component
- component.saba
- component.ics
- component.laba
- component.lama

### 症状・診断関連（2個）
- symptoms-comparison
- diagnostic-challenge

### その他のセクション・レイアウト（18個）
- drug-details
- drug-icon
- key-points
- principles
- principle-list
- summary-section
- classification-intro
- lvef-explanation
- treatment-note
- future-prediction
- comparison-section
- emphasis
- highlight-text
- warning-note
- reason
- restriction-explanation
- four-grid
- info-item.full-width

### サブクラス（4個）
- drug-category.saba
- drug-category.ics-laba
- drug-category.ics-laba.smart
- drug-category.triple

## 削除の影響

### 良い影響
1. **ファイルサイズの削減**: 28.1%の削減により、ページ読み込み速度が向上
2. **保守性の向上**: 使用されていないコードがなくなり、メンテナンスが容易に
3. **可読性の向上**: 実際に使用されているクラスのみが残り、理解しやすい

### 注意点
1. 削除されたクラスは主に吸入薬特集用に作成されたものが多い
2. 今後、吸入薬特集を公開する場合は、これらのクラスの復元が必要
3. バックアップは `_old_files/backup_20250727_2230/` に保存済み

## 削除後の状態

### 残存クラス（51個）
主に以下のカテゴリのクラスが残存：
- 基本構造（feature-hero, feature-section等）
- 情報表示（drug-info-card, info-grid等）
- 比較表（comparison-table等）
- 一部のボックス（warning-box, point-card等）

### コードの品質
- 削除により空のセクションや不完全な定義が発生していないことを確認
- CSSの構文エラーがないことを確認
- モバイル対応の定義も適切に保持されている

## まとめ

feature-page.cssから60個の未使用クラス（全体の54%）を削除し、ファイルサイズを28.1%削減しました。これにより、CSSファイルがより効率的で保守しやすいものになりました。削除されたクラスは主に未公開の特集ページ用のものであり、現在公開中の4つの特集ページの表示には影響ありません。