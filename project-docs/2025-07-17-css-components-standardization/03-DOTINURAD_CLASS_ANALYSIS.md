# dotinurad.html固有クラス詳細分析

**作成日時**: 2025-07-17 03:25  
**分析対象**: `/docs/drugs/dotinurad.html`  
**分析目的**: components.css適用前の固有クラス使用状況の把握

## 1. クラス使用状況サマリー

### 1.1 標準クラス（既存CSS定義済み）
components.css追加前でも定義されているクラス：
- 基本構造：`drug-detail`, `sidebar-layout`, `sidebar`, `main-content`
- サイドバー：`sidebar-section`, `sidebar-title`, `sidebar-links`, `sidebar-link`
- レベル選択：`level-selector`, `level-selector__inner`, `level-btn`
- 薬剤ヘッダー：`drug-header`, `brand-name`, `generic-name`
- 分類：`drug-classification`, `drug-class`, `generation`
- レベル表示：`level-indicator`, `level-1-indicator`, `level-2-indicator`, `level-3-indicator`
- レベルコンテンツ：`level-1-content`, `level-2-content`, `level-3-content`
- 汎用：`container`, `impact-grid`, `impact-item`
- モバイル：`mobile-fab`, `bottom-sheet-*`系

### 1.2 一部定義済みクラス
- `indications`, `indications__list`
- `quick-summary`
- `prescribing-data`, `design-spec`
- `combination-drugs`, `combination-drugs__list`
- `drug-category`, `category-desc`
- `level-hint`

## 2. dotinurad.html固有クラス（未定義）

### 2.1 メカニズム関連（4クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 230 | `mechanism-detail` | div | メカニズム詳細のコンテナ |
| 233 | `mechanism-box` | div | 個別メカニズムのボックス |
| 243 | `mechanism-box` | div | 個別メカニズムのボックス（2回目） |

### 2.2 相互作用関連（11クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 267 | `interaction-detail` | div | 相互作用詳細のコンテナ |
| 270 | `interaction-cards` | div | 相互作用カードのグリッド |
| 271 | `interaction-item important` | div | 重要な相互作用項目 |
| 277 | `interaction-item` | div | 通常の相互作用項目 |
| 283 | `interaction-item` | div | 通常の相互作用項目（3回目） |
| 290 | `safety-comparison` | div | 安全性比較セクション |
| 292 | `drug-safety-scale` | div | 薬剤安全性スケール |
| 293-306 | `safety-item best/good/poor` | div | 安全性評価アイテム |
| 294-304 | `drug-name`, `caution-count`, `safety-bar` | span | 安全性詳細要素 |
| 307 | `reason` | span | 理由説明 |

### 2.3 薬剤比較関連（5クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 320 | `drug-comparison-cards` | div | 薬剤比較カードコンテナ |
| 321 | `drug-card highlight` | div | ハイライト付き薬剤カード |
| 323 | `drug-type` | p | 薬剤タイプ |
| 324 | `drug-features` | ul | 薬剤特徴リスト |
| 332+ | `drug-card` | div | 通常の薬剤カード |

### 2.4 開発ストーリー関連（5クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 377 | `development-story` | div | 開発ストーリーセクション |
| 380 | `story-section` | div | ストーリーサブセクション |
| 388 | `warning-box` | div | 警告ボックス（インラインスタイル付き） |
| 404 | `discovery-detail` | div | 発見詳細 |
| 419 | `development-milestone` | div | 開発マイルストーン |

### 2.5 臨床エビデンス関連（7クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 459 | `clinical-evidence` | div | 臨床エビデンスセクション |
| 462 | `trial-summary` | div | 試験サマリー |
| 464 | `trial-highlights` | ul | 試験ハイライト |
| 471 | `clinical-conclusion` | div | 臨床的結論 |
| 480 | `clinical-insight` | p | 臨床的洞察 |
| 499 | `trial-comparison` | table | 試験比較テーブル |
| 508 | `highlight-success` | tr | 成功行のハイライト |

### 2.6 グローバル展開関連（4クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 491 | `global-expansion` | div | グローバル展開セクション |
| 494, 529, 537 | `milestone-box` | div | マイルストーンボックス（3箇所） |
| 526 | `clinical-impact` | p | 臨床的インパクト |
| 531 | `approval-timeline` | ul | 承認タイムライン |

### 2.7 将来展望関連（4クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 555 | `future-perspectives` | div | 将来展望セクション |
| 557, 579 | `perspective-grid` | div | 展望グリッド（2箇所） |
| 558, 567, 580, 589 | `perspective-item` | div | 展望アイテム（4箇所） |
| 600 | `research-direction` | div | 研究方向 |

### 2.8 その他（1クラス）
| 行番号 | クラス名 | 使用場所 | 用途 |
|--------|----------|----------|------|
| 615 | `drug-footer` | footer | 薬剤専用フッター |

## 3. components.cssとのマッピング可能性

### 3.1 直接置換可能（高い互換性）
| 現在のクラス | components.css代替クラス | 備考 |
|-------------|------------------------|------|
| `warning-box` | `alert-box` | 黄色系の警告表示に最適 |
| `milestone-box` | `info-box` | 情報提示ボックスとして使用可能 |
| `clinical-impact` | `key-point-box` | 重要ポイントの強調に適している |
| `development-story` | `development-story` | 同名クラスが既に定義済み！ |
| `clinical-evidence` | `clinical-evidence` | 同名クラスが既に定義済み！ |
| `safety-comparison` | `safety-comparison` | 同名クラスが既に定義済み！ |

### 3.2 構造変更で対応可能（中程度の互換性）
| 現在のクラス | components.css代替構造 | 変更内容 |
|-------------|---------------------|----------|
| `perspective-grid` | `content-grid` | グリッドレイアウトの汎用版 |
| `perspective-item` | `content-item` | グリッドアイテムの汎用版 |
| `drug-comparison-cards` | `content-grid` | カード配置用グリッド |
| `drug-card` | `content-item` + `card` | 複合クラスで対応 |
| `research-direction` | `content-section` | セクション構造の標準化 |
| `future-perspectives` | `content-section` | セクション構造の標準化 |

### 3.3 HTML構造変更が必要（低い互換性）
| 現在のクラス | 対応方針 | 変更内容 |
|-------------|----------|----------|
| `mechanism-detail/box` | 特殊な構造 | content-section/info-boxの組み合わせで構造変更 |
| `interaction-cards/item` | 相互作用専用デザイン | content-grid/content-itemで構造変更 |
| `drug-safety-scale` | 安全性スケール表示 | comparison-tableに構造変更 |
| `safety-item best/good/poor` | 評価別スタイル | テーブル構造に変更して表現 |
| `trial-comparison` | テーブル専用スタイル | comparison-tableを使用 |
| `highlight-success` | 行ハイライト | HTML構造の見直しで対応 |
| `approval-timeline` | タイムライン表示 | リスト構造で代替 |

## 4. リスク評価と推奨事項

### 4.1 低リスク置換（即座に実施可能）
- `development-story` → 既に定義済み
- `clinical-evidence` → 既に定義済み
- `safety-comparison` → 既に定義済み

### 4.2 中リスク置換（確認後に実施）
- `warning-box` → `alert-box`
- `milestone-box` → `info-box`
- `clinical-impact` → `key-point-box`
- グリッド系の構造変更

### 4.3 高リスク要素（慎重な検討が必要）
- メカニズム関連クラス（独自デザインの可能性）
- 相互作用関連クラス（複雑な表示構造）
- 安全性スケール（視覚的に重要な情報）

## 5. 段階的適用計画

### Phase 1: components.css追加のみ（クラス置換なし）
1. components.cssリンクを追加
2. 表示崩れがないか確認
3. 既に定義済みの3クラスの表示確認

### Phase 2: 低リスク置換
1. 3つの同名クラスは追加作業不要
2. warning-box, milestone-box, clinical-impactの置換
3. 各置換後に表示確認

### Phase 3: 中リスク置換
1. グリッド系クラスの構造変更
2. セクション系クラスの統一化
3. 段階的な確認と調整

### Phase 4: 高リスク要素の検討
1. 置換困難なクラスの扱い決定
2. HTML構造の根本的な変更による対応
3. 既存クラスの組み合わせによる表現

## 6. 結論

dotinurad.htmlは約30個の固有クラスを使用していますが、そのうち3つ（development-story, clinical-evidence, safety-comparison）は既にcomponents.cssに定義されています。これは予想以上に良い状況です。

段階的アプローチにより、リスクを最小限に抑えながらcomponents.cssの適用を進めることが可能です。特に、既に定義済みのクラスが存在することで、components.css追加による即座の恩恵が期待できます。