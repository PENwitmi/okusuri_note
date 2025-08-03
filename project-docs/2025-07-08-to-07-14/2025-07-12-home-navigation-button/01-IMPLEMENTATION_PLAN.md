# トップページへ戻るボタン実装計画書

**作成日**: 2025-07-12  
**プロジェクト**: OkusuriNote  
**目的**: すべての薬剤個別ページからトップページ（index.html）へ戻る導線を追加

## 1. 背景と課題

### 現状の問題点
- 薬剤個別ページに入ると、トップページへ戻る直接的な方法がない
- ユーザーはブラウザの戻るボタンか、URL直接編集に頼るしかない
- ナビゲーション体験が不完全

### 対象範囲
- drugs/: 3ファイル（最新版）
- drugs-v3/: 26ファイル（移行中バージョン）
- 合計: 29ファイル

## 2. 設計詳細

### 2.1 配置位置

#### PCサイドバー
```html
<!-- 学習レベル選択セクションの直後に配置 -->
<div class="sidebar-section">
    <h3 class="sidebar-title">🏠 ナビゲーション</h3>
    <div class="sidebar-links">
        <a href="../index.html" class="sidebar-link">
            🏠 トップページへ戻る
            <span class="category-desc">薬剤一覧・特集ページ</span>
        </a>
    </div>
</div>
```

#### モバイルbottom-sheet
```html
<!-- 学習レベル選択セクションの直後に配置 -->
<div class="bottom-sheet-section">
    <h3 class="bottom-sheet-title">🏠 ナビゲーション</h3>
    <div class="bottom-sheet-buttons">
        <a href="../index.html" class="bottom-sheet-btn">
            <span>🏠 トップページへ戻る</span>
            <span class="arrow">→</span>
        </a>
    </div>
</div>
```

### 2.2 デザイン原則
- **一貫性**: 既存のUIパターンに従う
- **視認性**: 🏠アイコンで直感的に理解可能
- **説明性**: 「薬剤一覧・特集ページ」で行き先を明確化
- **アクセシビリティ**: 適切なセマンティックHTML

## 3. 実装手順

### Phase 1: テンプレート更新（優先度: 高）
1. `drugs-v3/_template-v3.html` にホームボタンセクションを追加
2. サイドバーとbottom-sheetの両方に実装
3. 位置は学習レベル選択セクションの直後

### Phase 2: パイロット実装（優先度: 高）
1. `drugs/metformin.html` で実装・動作確認
2. `drugs-v3/metformin-v3.html` で実装・動作確認
3. PC/モバイル両方での表示確認

### Phase 3: 自動化スクリプト作成（優先度: 中）
```bash
# 実装予定のスクリプト概要
# 1. 対象ファイルのバックアップ作成
# 2. 正規表現で挿入位置を特定
# 3. HTMLセクションを挿入
# 4. 実行ログを記録
```

### Phase 4: 一括更新（優先度: 高）
1. drugs/ ディレクトリの3ファイル更新
2. drugs-v3/ ディレクトリの26ファイル更新
3. 各ファイルの更新結果を記録

### Phase 5: 品質確認（優先度: 高）
1. 全ファイルでリンク動作確認
2. モバイル表示の確認
3. GitHub Pagesでの最終確認

## 4. 技術的考慮事項

### HTMLの挿入位置
1. **サイドバー**: `.level-selector` セクションの閉じタグ直後
2. **bottom-sheet**: 学習レベル選択の `.bottom-sheet-section` 直後

### 相対パス
- すべてのファイルで `../index.html` を使用
- drugsとdrugs-v3は同じ階層のため、パスは統一

### CSSクラス
- 既存のクラスを再利用（新規CSS不要）
  - `sidebar-section`, `sidebar-title`, `sidebar-links`, `sidebar-link`
  - `bottom-sheet-section`, `bottom-sheet-title`, `bottom-sheet-buttons`, `bottom-sheet-btn`

## 5. リスクと対策

### リスク1: 手動更新でのミス
**対策**: 自動化スクリプトによる一括更新

### リスク2: HTMLの破損
**対策**: 更新前の自動バックアップ作成

### リスク3: 不統一な実装
**対策**: テンプレートベースの実装、パイロット検証

## 6. 成功指標

1. **機能性**: すべての薬剤ページからindex.htmlへ移動可能
2. **一貫性**: 全ページで同じ位置・デザインで実装
3. **ユーザビリティ**: PC/モバイル両方で適切に表示
4. **保守性**: 今後の新規ページ追加時も同じパターンで実装可能

## 7. タイムライン

- **Day 1**: テンプレート更新、パイロット実装
- **Day 2**: 自動化スクリプト作成、一括更新
- **Day 3**: 品質確認、最終調整

## 8. 次のステップ

1. テスト計画書（02-TEST_PLAN.md）の作成
2. _template-v3.html の更新開始
3. パイロット実装による検証