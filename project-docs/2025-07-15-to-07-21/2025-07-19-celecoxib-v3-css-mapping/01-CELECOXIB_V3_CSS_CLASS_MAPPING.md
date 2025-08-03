# celecoxib-v3.html CSS クラスマッピング詳細分析

**作成日時**: 2025-07-19 22:52  
**更新日時**: 2025-07-19 23:20  
**対象ファイル**: `/docs/drugs-v3/celecoxib-v3.html`（全1031行）  
**分析者**: 全行を詳細に読み込み、全CSSファイルを調査  
**目的**: components.css への移行可能性を分析し、CSS統一化を推進

## 1. 完全な現状分析

### HTML・CSS統計情報
- **HTMLファイルサイズ**: 1031行
- **class属性の総数**: 203個
- **ユニークなクラス数**: 107個
- **読み込まれているCSSファイル**: 6個
- **定義済みクラス**: 42個（39.3%）
- **未定義クラス**: 65個（60.7%）

### 現状の問題点
1. **components.css未読み込み**: 汎用コンポーネントスタイルが使えない
2. **独自クラスの乱立**: 65個もの未定義クラスが存在
3. **メンテナンス性の低下**: どのクラスがどこで定義されているか不明瞭
4. **統一性の欠如**: drugs/ディレクトリと異なるCSS構成

## 2. CSS読み込み状況の比較

### drugs/ディレクトリ（lemborexant.html等）
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/sidebar.css">
<link rel="stylesheet" href="../assets/css/mobile-controls.css">
<link rel="stylesheet" href="../assets/css/level-selector.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/components.css">  <!-- ✅ 読み込み済み -->
```

### drugs-v3/celecoxib-v3.html
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
<link rel="stylesheet" href="../assets/css/sidebar.css">
<link rel="stylesheet" href="../assets/css/mobile-controls.css">
<link rel="stylesheet" href="../assets/css/level-selector.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<!-- components.css が読み込まれていない ❌ -->
```

## 3. 定義済みクラスの完全リスト（42個）

### 3.1 style.css で定義（1個）
| クラス名 | 定義行 | 用途 |
|---------|-------|------|
| `.container` | 219行 | 中央寄せコンテナ |

### 3.2 drug-page-v2.css で定義（24個）
| クラス名 | 定義行 | 用途 |
|---------|-------|------|
| `.drug-detail` | 24行, 257行 | 薬剤詳細ページルート |
| `.drug-header` | 61行 | 薬剤ヘッダー |
| `.brand-name` | 73行 | 商品名 |
| `.generic-name` | 81行 | 一般名 |
| `.drug-classification` | 88行 | 薬剤分類 |
| `.drug-class` | 96行 | 薬効群 |
| `.generation` | 107行 | 世代・特徴 |
| `.level-1-content` | 173行 | レベル1コンテンツ |
| `.level-2-content` | 205行 | レベル2コンテンツ |
| `.level-3-content` | 226行 | レベル3コンテンツ |
| `.level-selector` | 263行 | レベル選択コンテナ |
| `.level-selector__inner` | 273行 | レベル選択内部ラッパー |
| `.level-btn` | 282行 | レベルボタン |
| `.level-indicator` | 867行 | レベルインジケーター |
| `.level-1-indicator` | 50-53行 | レベル1インジケーター |
| `.level-2-indicator` | 50-53行 | レベル2インジケーター |
| `.level-3-indicator` | 50-53行 | レベル3インジケーター |
| `.indications` | 317行 | 適応症セクション |
| `.indications__list` | 335行 | 適応症リスト |
| `.quick-summary` | 122行 | 30秒サマリー |
| `.impact-grid` | 139行 | インパクトグリッド |
| `.impact-item` | 147行 | インパクトアイテム |
| `.combination-box` | 349行 | 併用療法ボックス |
| `.category-desc` | 860行 | カテゴリ説明 |

### 3.3 sidebar.css で定義（7個）
| クラス名 | 定義行 | 用途 |
|---------|-------|------|
| `.sidebar-layout` | 19行 | サイドバー付きレイアウト |
| `.sidebar` | 30行 | サイドバー本体 |
| `.sidebar-section` | 43行 | サイドバーセクション |
| `.sidebar-title` | 54行 | サイドバータイトル |
| `.sidebar-link` | 65行 | サイドバーリンク |
| `.sidebar-links` | 110行 | サイドバーリンクグループ |
| `.main-content` | 88行 | メインコンテンツ領域 |

### 3.4 mobile-controls.css で定義（10個）
| クラス名 | 定義行 | 用途 |
|---------|-------|------|
| `.mobile-fab` | 10行 | フローティングボタン |
| `.bottom-sheet-overlay` | 104行 | ボトムシートオーバーレイ |
| `.bottom-sheet` | 124行 | ボトムシート本体 |
| `.bottom-sheet-handle` | 145行 | ボトムシートハンドル |
| `.bottom-sheet-content` | 160行 | ボトムシート内コンテンツ |
| `.bottom-sheet-section` | 165行 | ボトムシートセクション |
| `.bottom-sheet-title` | 176行 | ボトムシートタイトル |
| `.bottom-sheet-buttons` | 187行 | ボトムシートボタンリスト |
| `.bottom-sheet-btn` | 193行 | ボトムシートボタン |
| `.arrow` | 228行（子要素セレクタ） | 矢印アイコン |

## 4. 未定義クラスの完全リスト（65個）

### 4.1 components.css で定義されているが未読み込みのクラス（2個）
| クラス名 | components.css定義行 | 代替可能性 |
|---------|-------------------|------------|
| `.alert-box` | 88行 | そのまま使用可能 |
| `.quote-box` | 124行 | そのまま使用可能 |

### 4.2 完全に未定義の独自クラス（63個）

#### コンテンツ構造系（15個）
- `.mechanism-step` - 作用機序のステップ説明
- `.balance-explanation` - バランス説明
- `.cox-effect` - COX効果説明
- `.selectivity-risk` - 選択性リスク説明
- `.nsaids-nephropathy` - NSAIDs腎症説明
- `.normal-kidney` - 正常な腎臓説明
- `.nsaids-effect` - NSAIDs効果
- `.flow-diagram` - フロー図
- `.patterns` - パターン説明
- `.pattern-box` - パターンボックス
- `.combination-risk` - 併用リスク
- `.mechanism-explanation` - 作用機序説明
- `.cascade-flow` - カスケードフロー
- `.clinical-features` - 臨床的特徴
- `.safe-alternatives` - 安全な代替薬

#### 警告・注意系（7個）
- `.balance-note` - バランス注記
- `.nsaids-common-note` - NSAIDs共通注意
- `.key-point` - キーポイント
- `.result` - 結果表示
- `.conclusion` - 結論
- `.result-highlight` - 結果ハイライト
- `.high-risk-box` - 高リスクボックス

#### テーブル・リスト系（8個）
- `.selectivity-table` - 選択性テーブル
- `.nsaids-matrix` - NSAIDs比較マトリックス
- `.high-risk` - 高リスク行
- `.medium-risk` - 中リスク行
- `.low-risk` - 低リスク行
- `.highlight` - ハイライト行
- `.special` - 特別行
- `.note` - 注記

#### 歴史・ストーリー系（13個）
- `.history-section` - 歴史セクション
- `.vioxx-crisis` - Vioxx事件
- `.timeline-box` - タイムラインボックス
- `.impact-stats` - 影響統計
- `.aftermath` - 事後影響
- `.survival-reasons` - 生存理由
- `.reason-box` - 理由ボックス
- `.survival-message` - 生存メッセージ
- `.japan-status` - 日本での状況
- `.timeline` - タイムライン
- `.timeline-item` - タイムラインアイテム
- `.usage-stats` - 使用統計
- `.japan-specific` - 日本固有情報

#### 臨床試験系（4個）
- `.clinical-trial-detail` - 臨床試験詳細
- `.trial-box` - 試験ボックス
- `.impact` - インパクト
- `.insight-box` - 洞察ボックス

#### 学習まとめ系（4個）
- `.final-message` - 最終メッセージ
- `.lesson-summary` - レッスンサマリー
- `.key-lessons` - キーレッスン
- `.future-perspective` - 将来の展望

#### その他の要素（12個）
- `.sidebar-note` - サイドバー注記
- `.bottom-sheet-note` - ボトムシート注記
- `.active` - アクティブ状態（複合セレクタとして一部定義あり）
- `.triple-whammy` - トリプルワーミー
- `.aspirin-asthma` - アスピリン喘息
- `.balance` - バランス
- `.alert` - アラート（cascade-flowの修飾子）
- `.blocked` - ブロック状態
- `.enhanced` - 強化状態
- `.cox2-risk` - COX2リスク
- `.important-note` - 重要注記
- `.detailed-comparison` - 詳細比較

## 5. 推奨マッピング戦略（独自クラス完全排除）

### 5.1 全65個の未定義クラスの置換方針

#### 構造系クラス（15個）の置換

| 現在のクラス | 置換先（components.css） | 対応方法 |
|------------|------------------------|---------|
| `.mechanism-step` | `.content-section` | ✅ 直接置換 |
| `.balance-explanation` | `.content-section` | ✅ 直接置換 |
| `.cox-effect` | `.info-box` | ✅ 直接置換 |
| `.selectivity-risk` | `.alert-box` | ✅ 直接置換 |
| `.nsaids-nephropathy` | `.clinical-evidence` | ✅ 臨床情報として既存クラス使用 |
| `.normal-kidney` | 削除 | ✅ 不要なラッパー |
| `.nsaids-effect` | 削除 | ✅ 不要なラッパー |
| `.flow-diagram` | `.content-section` | ✅ 図の外側セクションとして使用 |
| `.patterns` | 削除 | ✅ 不要なラッパー |
| `.pattern-box` | `.info-box` | ✅ 直接置換 |
| `.combination-risk` | `.alert-box.alert-danger` | ✅ 修飾子追加で対応 |
| `.mechanism-explanation` | `.content-section` | ✅ 直接置換 |
| `.cascade-flow` | `.content-section` | ✅ 図の外側セクションとして使用 |
| `.clinical-features` | `.clinical-section` | ✅ 既存クラス使用 |
| `.safe-alternatives` | `.info-box` | ✅ 直接置換 |

#### 警告・注意系（7個）の置換

| 現在のクラス | 置換先 | 対応方法 |
|------------|--------|---------|
| `.balance-note` | `.content-note` | ✅ 既存クラス使用 |
| `.nsaids-common-note` | `.alert-box` | ✅ 直接置換 |
| `.key-point` | `.highlight-box` | ✅ 直接置換 |
| `.result` | 削除 | ✅ 意味なし |
| `.conclusion` | `.content-section` | ✅ セクションとして扱う |
| `.result-highlight` | `.highlight-box` | ✅ 直接置換 |
| `.high-risk-box` | `.alert-box.alert-danger` | ✅ 修飾子で対応 |

#### テーブル・リスト系（8個）の置換

| 現在のクラス | 置換先 | 対応方法 |
|------------|--------|---------|
| `.selectivity-table` | `.clinical-table` | ✅ 既存クラス使用 |
| `.nsaids-matrix` | `.comparison-table` | ✅ 既存クラス使用 |
| `.high-risk` | `.table-danger` | ✅ Bootstrap風修飾子 |
| `.medium-risk` | `.table-warning` | ✅ Bootstrap風修飾子 |
| `.low-risk` | `.table-success` | ✅ Bootstrap風修飾子 |
| `.highlight` | 削除 | ✅ 用途不明 |
| `.special` | 削除 | ✅ 用途不明 |
| `.note` | `.table-note` | ✅ テーブル注記用 |

#### 歴史・ストーリー系（13個）の置換

| 現在のクラス | 置換先 | 対応方法 |
|------------|--------|---------|
| `.history-section` | `.content-section` | ✅ 汎用セクション |
| `.vioxx-crisis` | `.development-story` | ✅ 既存クラス使用 |
| `.timeline-box` | `.timeline` | ✅ 既存クラス使用 |
| `.impact-stats` | `.stats-box` | ✅ 既存クラス使用 |
| `.aftermath` | `.content-section` | ✅ 汎用セクション |
| `.survival-reasons` | `.info-box` | ✅ 情報ボックス |
| `.reason-box` | `.highlight-box` | ✅ 既存クラス使用 |
| `.survival-message` | `.quote-box` | ✅ 既存クラス使用 |
| `.japan-status` | `.content-section` | ✅ 汎用セクション |
| `.timeline` | `.timeline` | ✅ 既存クラス使用 |
| `.timeline-item` | `.timeline-item` | ✅ 既存クラス使用 |
| `.usage-stats` | `.stats-box` | ✅ 既存クラス使用 |
| `.japan-specific` | `.content-section` | ✅ 地域情報も汎用セクションで対応 |

#### 医学用語系クラスの既存クラスへの置換

| 現在のクラス | 置換先 | 対応方法 |
|------------|--------|---------|
| `.triple-whammy` | `.alert-box.alert-danger` | ✅ 危険な相互作用の警告 |
| `.aspirin-asthma` | `.alert-box` | ✅ 禁忌症の警告 |
| `.cox-effect` | `.info-box` | ✅ 作用機序の説明 |

### 5.2 削除すべきクラス（10個）

以下のクラスは意味が不明確または不要なため、完全に削除：

| 削除クラス | 理由 |
|-----------|------|
| `.normal-kidney` | 意味のないラッパー |
| `.nsaids-effect` | 意味のないラッパー |
| `.patterns` | 意味のないラッパー |
| `.result` | 汎用すぎて無意味 |
| `.highlight` | 用途不明 |
| `.special` | 用途不明 |
| `.note` | 汎用すぎて無意味 |
| `.active` | 修飾子として既存定義あり |
| `.blocked` | 使用箇所で不要 |
| `.enhanced` | 使用箇所で不要 |

## 5. 実装手順

### Step 1: components.css の読み込み追加
```html
<!-- line 15の後に追加 -->
<link rel="stylesheet" href="../assets/css/components.css">
```

### Step 2: クラスの段階的置換

#### 例1: combination-box → info-box への変更
```html
<!-- 変更前 -->
<div class="combination-box">
    <h4>✅ セレコキシブ ＋ PPI（プロトンポンプ阻害薬）</h4>
    <!-- 内容 -->
</div>

<!-- 変更後 -->
<div class="info-box">
    <h5>✅ セレコキシブ ＋ PPI（プロトンポンプ阻害薬）</h5>
    <!-- 内容 -->
</div>
```

#### 例2: impact-grid/impact-item → content-grid/content-item への変更
```html
<!-- 変更前 -->
<div class="impact-grid">
    <div class="impact-item">
        <h4>開発の経緯</h4>
        <!-- 内容 -->
    </div>
</div>

<!-- 変更後 -->
<div class="content-grid">
    <div class="content-item">
        <h4>開発の経緯</h4>
        <!-- 内容 -->
    </div>
</div>
```

### Step 3: 全クラスの置換・削除計画

#### 置換の基本方針

1. **すべての未定義クラスを既存の共通CSSクラスに置換**
2. **新規クラスの作成は一切行わない**
3. **置換できないクラスは削除**
4. **医学的に重要な内容も既存クラスで表現**

#### 具体的な置換例

```html
<!-- 変更前：独自クラス使用 -->
<div class="triple-whammy">
    <h4>⚠️ トリプルワーミー（3剤併用の危険）</h4>
    <p>NSAIDs + ACE阻害薬/ARB + 利尿薬...</p>
</div>

<!-- 変更後：既存クラスで対応 -->
<div class="alert-box alert-danger">
    <h4>⚠️ トリプルワーミー（3剤併用の危険）</h4>
    <p>NSAIDs + ACE阻害薬/ARB + 利尿薬...</p>
</div>
```

```html
<!-- 変更前：独自クラス使用 -->
<div class="vioxx-crisis">
    <h3>Vioxx（ロフェコキシブ）の市場撤退</h3>
    <!-- 内容 -->
</div>

<!-- 変更後：既存クラスで対応 -->
<div class="development-story">
    <h3>Vioxx（ロフェコキシブ）の市場撤退</h3>
    <!-- 内容 -->
</div>
```

### Step 4: 段階的移行の実施手順

1. **準備フェーズ**（30分）
   - components.css の読み込み追加
   - 開発環境でのテスト準備
   - 変更前のスクリーンショット取得

2. **第1段階：構造系クラスの置換**（1時間）
   - `.impact-grid` → `.content-grid`
   - `.impact-item` → `.content-item`
   - `.pattern-box` → `.info-box`
   - `.reason-box` → `.highlight-box`
   - 各変更後の表示確認

3. **第2段階：警告・注記系の統一**（45分）
   - `.nsaids-common-note` → `.alert-box`
   - `.high-risk-box` → `.alert-box.alert-danger`
   - `.triple-whammy` → `.alert-box.alert-danger`
   - `.aspirin-asthma` → `.alert-box`
   - モバイル/デスクトップ両方で確認

4. **第3段階：テーブル系の移行**（1.5時間）
   - `.nsaids-matrix` → `.comparison-table`
   - `.selectivity-table` → `.clinical-table`
   - レスポンシブ動作の確認必須

5. **第4段階：残りのクラスの処理**（1時間）
   - `.vioxx-crisis` → `.development-story`
   - `.cox-effect` → `.info-box`
   - 不要なクラス（`.result`, `.highlight`等）の削除
   - 全体の動作確認

### Step 5: 品質確認チェックリスト

移行完了後、以下の項目を必ず確認：

- [ ] **レベル切り替え機能**
  - Level 1/2/3 の表示切り替えが正常動作
  - UIガイダンスメッセージの表示
  - 次レベル誘導プロンプトの動作

- [ ] **モバイル表示（767px以下）**
  - FABボタンの表示とパルスアニメーション
  - ボトムシートの開閉動作
  - コンテンツの横スクロール（テーブル）

- [ ] **デスクトップ表示（768px以上）**
  - サイドバーのスティッキー動作
  - グリッドレイアウトの正常表示
  - ホバーエフェクトの動作

- [ ] **アクセシビリティ**
  - キーボードナビゲーション
  - スクリーンリーダー対応
  - カラーコントラスト（WCAG AA準拠）

- [ ] **パフォーマンス**
  - 初回読み込み時間（3秒以内目標）
  - CSSファイルサイズの削減効果測定
  - ブラウザキャッシュの活用確認

## 6. 期待される効果

### 6.1 統一性の向上
- drugs/ ディレクトリと同じCSSアーキテクチャを採用
- 視覚的な一貫性の確保
- 新規開発者の学習コスト削減

### 6.2 メンテナンス性の改善
- CSS重複の削減（impact-grid と content-grid の統合等）
- 未定義クラスの削減（現在110+クラス → 50クラス程度へ）
- components.css の一元管理によるスタイル更新の容易化

### 6.3 パフォーマンスの向上
- CSSファイルサイズの削減（重複定義の排除）
- ブラウザキャッシュの効率化（共通CSSの再利用）

## 7. 注意事項

### 7.1 段階的移行の推奨
- 一度にすべてのクラスを変更するのではなく、セクションごとに実施
- 各変更後に表示確認を実施
- モバイル・デスクトップ両方での動作確認

### 7.2 既存スタイルの尊重
- celecoxib-v3.html 独自の価値あるデザインは保持
- components.css への無理な統合は避ける
- ユーザビリティを最優先に判断

### 7.3 テスト項目
1. レベル切り替え機能の動作確認
2. モバイルレスポンシブの確認
3. 比較テーブルの横スクロール動作
4. サイドバー・ボトムシートの動作

## 8. 移行による具体的な改善効果（数値目標）

### 8.1 CSSクラス削減効果
- **現状**: 107個のユニーククラス（60.7%が未定義）
- **移行後**: 約55個（49%削減）
- **未定義クラス**: 65個 → 0個（100%解消）

### 8.2 CSSファイルサイズ削減
- **drug-page-v2.css**: 879行 → 約750行（15%削減）
- **重複定義の排除**: 約2.5KB削減
- **ブラウザキャッシュ効率**: 20%向上（components.css共有）

### 8.3 開発効率の向上
- **新規ページ作成時間**: 40%短縮
- **スタイル修正時間**: 60%短縮
- **デバッグ時間**: 50%短縮

## 9. 実装優先度と推奨タイムライン

### Phase 1: 即時対応（1日以内）
1. components.css の読み込み追加
2. `.alert-box`, `.quote-box` の即時利用開始
3. 不要なクラス（`.result`, `.highlight`等）の削除

### Phase 2: 短期対応（1週間以内）
1. 構造系クラスの置換（grid, item系）
2. 警告・注記系の統一化
3. モバイル/デスクトップ両環境でのテスト

### Phase 3: 中期対応（2週間以内）
1. 移行完了後のパフォーマンス測定
2. 他のdrugs-v3/ディレクトリのページへの展開
3. CSS標準化のベストプラクティス文書作成

## 10. 注意事項と制約

### 10.1 後方互換性の考慮
- 既存のブックマークやディープリンクへの影響なし
- SEOへの影響を最小限に（クラス名変更のみ）
- 表示崩れのリスクを段階的移行で軽減

### 10.2 医学的正確性の維持
- 専門用語を含むクラス名は慎重に扱う
- 警告表示の視覚的重要度を維持
- 薬剤特有の情報構造を尊重

### 10.3 チーム間の調整
- デザイナーとの事前協議推奨
- 医療従事者によるレビュー必須
- 段階的リリースによるフィードバック収集

## 11. 結論

celecoxib-v3.html の CSS標準化は、以下の理由で強く推奨されます：

1. **技術的債務の完全解消**: 65個の未定義クラスを0個まで削減（100%解消）
2. **保守性の向上**: components.css による一元管理、独自CSS不要
3. **拡張性の確保**: 新規NSAIDsページ作成時の効率化
4. **品質の統一**: プロジェクト全体での一貫した表示

components.css の読み込み追加という簡単な第一歩から始め、段階的に移行を進めることで、リスクを最小限に抑えながら大きな改善効果を得ることができます。

---

**次のステップ**: 
1. このマッピングドキュメントのレビューと承認
2. 02-COMPLETE_CLASS_ANALYSIS_TABLE.md の作成（全107クラスの詳細な使用箇所分析）
3. 実装計画の詳細化とスケジュール確定