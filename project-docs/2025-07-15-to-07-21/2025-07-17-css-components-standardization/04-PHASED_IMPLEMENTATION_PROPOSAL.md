# components.css段階的適用提案書

**作成日時**: 2025-07-17 03:30  
**提案者**: AI開発チーム  
**対象**: dotinurad.htmlへのcomponents.css適用

## エグゼクティブサマリー

dotinurad.htmlの詳細分析により、約30個の固有クラスのうち3つの重要なクラス（`development-story`, `clinical-evidence`, `safety-comparison`）が既にcomponents.cssに定義されていることが判明しました。これは予想以上に有利な状況であり、段階的適用によるリスク最小化が可能です。

## 重要原則

**components.css使用における絶対原則**：
1. 新規クラスの作成は一切行わない
2. 既存のcomponents.cssクラスのみを使用する
3. 対応するクラスがない場合は、HTML構造を既存クラスに合わせて変更する
4. クラス名は用途を限定するものではなく、あくまで用例として捉える

## 1. 重要な発見

### 既にcomponents.cssに定義済みのクラス
```css
/* dotinurad.htmlで使用 → components.cssに既存 */
.development-story  /* 開発ストーリーセクション（行327-332） */
.clinical-evidence  /* 臨床エビデンスセクション（行352-367） */  
.safety-comparison  /* 安全性比較セクション（行377-390） */
```

これらは薬剤ページの核心的なセクションであり、components.css追加により即座に統一的なスタイルが適用されます。

## 2. 段階的実装プラン

### 🟢 Phase 1: 即時実行可能（リスク：極小）

#### 実施内容
1. **components.cssリンク追加のみ**
   ```html
   <link rel="stylesheet" href="../assets/css/components.css">
   ```
2. **既存3クラスの恩恵を確認**
   - development-story
   - clinical-evidence
   - safety-comparison

#### 期待効果
- 3つの重要セクションが即座に統一デザインに
- 他のHTMLファイルとの視覚的一貫性向上
- クラス置換作業なしで部分的な改善実現

#### 確認項目
- [ ] 表示崩れがないか
- [ ] 3つのセクションが適切にスタイル適用されているか
- [ ] 他の要素への副作用がないか

### 🟡 Phase 2: 低リスク置換（リスク：小）

#### 対象クラス（6個）
| 現在 | 置換後 | 行番号 | 確認優先度 |
|------|--------|--------|-----------|
| `warning-box` | `alert-box` | 388 | 高（視覚的に重要） |
| `milestone-box` | `info-box` | 494, 529, 537 | 中 |
| `clinical-impact` | `key-point-box` | 526 | 高（重要情報） |
| `future-perspectives` | `content-section` | 555 | 低 |
| `research-direction` | `content-section` | 600 | 低 |
| `drug-footer` | （削除） | 615 | 低 |

#### 実施手順
1. 1クラスずつ置換
2. 各置換後に表示確認
3. 問題があれば即座にロールバック

### 🟠 Phase 3: 中リスク置換（リスク：中）

#### 対象：グリッド系の構造変更（8個）
```
perspective-grid → content-grid（2箇所）
perspective-item → content-item（4箇所）  
drug-comparison-cards → content-grid
drug-card → content-item（複数箇所）
```

#### 注意事項
- HTML構造の調整が必要な可能性
- レスポンシブ動作の確認必須
- 段階的な適用と検証

### 🔴 Phase 4: 高リスク要素の個別対応（リスク：高）

#### 対象：特殊な表示要素（約15個）
- メカニズム関連：`mechanism-detail`, `mechanism-box`
- 相互作用関連：`interaction-cards`, `interaction-item`
- 安全性スケール：`drug-safety-scale`, `safety-item`
- 試験比較：`trial-comparison`, `highlight-success`

#### 対応方針
1. **原則**: HTML構造を既存のcomponents.cssクラスに合わせて変更
2. **方法**: 複数の既存クラスの組み合わせで表現
3. **重要**: 新規クラスの作成は一切行わない

## 3. 実装スケジュール提案

### 本日（2025-07-17）
- ✅ ドキュメント作成完了
- ⏳ Phase 1実施（5分）
- ⏳ Phase 1結果確認（10分）

### 明日以降
- Phase 2実施（必要に応じて）
- Phase 3-4は状況を見て判断

## 4. リスク管理マトリックス

| Phase | リスクレベル | 影響範囲 | ロールバック難易度 | 推奨度 |
|-------|------------|----------|------------------|--------|
| Phase 1 | 極小 | 追加効果のみ | 即座に可能 | ★★★★★ |
| Phase 2 | 小 | 6要素 | 容易 | ★★★★☆ |
| Phase 3 | 中 | グリッド構造 | やや複雑 | ★★★☆☆ |
| Phase 4 | 高 | 特殊表示 | 複雑 | ★★☆☆☆ |

## 5. 意思決定ポイント

### Phase 1実施の判断
- **推奨**: 即座に実施
- **理由**: リスクが極めて低く、3つの重要セクションが改善される
- **所要時間**: 15分以内

### Phase 2以降の判断基準
1. Phase 1の結果が良好か
2. 時間的余裕があるか
3. 視覚的統一性の重要度
4. 他の優先タスクとのバランス

## 6. 結論と推奨事項

### 推奨アクション
1. **本日中にPhase 1を実施**
   - components.cssリンク追加のみ
   - 3つの既存クラスの恩恵を即座に享受
   
2. **Phase 2以降は結果を見て判断**
   - 急ぐ必要はない
   - 品質を優先した慎重な進行

### 期待される成果
- **短期**: 3つの重要セクションの視覚的改善
- **中期**: 6つの追加要素の標準化
- **長期**: 全薬剤ページの完全な視覚的統一

この段階的アプローチにより、リスクを最小限に抑えながら、着実にcomponents.cssの恩恵を拡大できます。特に、既に定義済みのクラスが存在することは大きなアドバンテージです。