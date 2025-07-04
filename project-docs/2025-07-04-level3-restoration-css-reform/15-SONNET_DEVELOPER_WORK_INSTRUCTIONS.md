# 15-SONNET_DEVELOPER_WORK_INSTRUCTIONS.md
# Sonnet開発者向け作業指示書 - Phase 2-4実装

**作成日時**: 2025-07-04 15:25  
**作成者**: CEO  
**対象**: Sonnet開発者（Dev1, Dev2, Dev3）  
**目的**: JavaScript外部ファイル化とUIガイダンス実装の並列作業  
**重要度**: 🔴 明日（7/5）の作業指示

---

## 📌 作業概要

22薬剤のHTMLファイルを更新し、以下を実現します：
1. インラインJavaScriptを削除
2. 外部JSファイルを参照
3. UIガイダンスを実装
4. コンテンツ配置を最適化（該当薬剤のみ）

**総作業時間**: 並列実行で6-8時間（1人あたり2-3時間）

---

## 👥 作業分担

### Dev1（7薬剤担当）
```
atorvastatin-refined.html
bisoprolol-refined.html
candesartan-refined.html
carvedilol-refined.html
dapagliflozin-refined.html
digoxin-refined.html
empagliflozin-refined.html
```

### Dev2（7薬剤担当）
```
enalapril-refined.html
escitalopram-refined.html
esomeprazole-refined.html
furosemide-refined.html
lansoprazole-refined.html
losartan-refined.html
metformin-refined.html
```

### Dev3（8薬剤担当）
```
omeprazole-refined.html
perindopril-refined.html
rosuvastatin-refined.html
sertraline-refined.html
spironolactone-refined.html
telmisartan-refined.html
vancomycin-refined.html
warfarin-refined.html
```

---

## 🔧 Phase 2: HTML更新作業（必須・全薬剤）

### Step 1: CSSファイル参照の追加

**現在の状態を確認**：
```html
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/drug-page-v2.css">
<link rel="stylesheet" href="../assets/css/responsive-unified.css">
```

**以下を追加**：
```html
<link rel="stylesheet" href="../assets/css/level-selector.css">
```

### Step 2: インラインJavaScriptの削除と置換

**パターン1: showLevel関数実装の薬剤**（16薬剤）
```javascript
// 削除対象の例
function showLevel(level) {
    // すべて非表示
    level1Contents.forEach(el => el.style.display = 'none');
    // ... 約50行のコード
}
```

**パターン2: インライン実装の薬剤**（2薬剤: carvedilol, digoxin）
```javascript
// 削除対象の例
levelBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // ... 約30行のコード
    });
});
```

**パターン3: スクロール実装の薬剤**（4薬剤: metformin, rosuvastatin, telmisartan, warfarin）
```javascript
// 削除対象の例
targetSections[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});
```

**すべてを以下の1行に置換**：
```html
<script src="../assets/js/level-selector.js"></script>
```

### 重要な注意事項
- `<script>` タグ内のすべてのコードを削除
- 外部ファイル参照は`</body>`タグの直前に配置
- 他のJavaScriptコード（もしあれば）は削除しない

---

## 🎨 Phase 3: UIガイダンス実装（任意・推奨）

### UIガイダンスの自動挿入について

**重要**: level-selector.jsには自動挿入機能があるため、手動追加は任意です。

自動挿入される内容：
```html
<div class="level-selector__guide">
    <span class="guide-text">👇 あなたの学習段階を選んでください</span>
    <span class="guide-sub">クリックで表示内容が切り替わります</span>
</div>
```

各ボタンにも自動で説明が追加されます：
```html
<span class="level-desc">基本を学ぶ</span>
<span class="level-desc">実践を学ぶ</span>
<span class="level-desc">深く学ぶ</span>
```

### 手動で追加したい場合（オプション）

レベル間誘導を手動追加する例：
```html
<!-- Level 1の最後に追加 -->
<div class="next-level-prompt">
    <p>🎓 基本を理解できましたか？</p>
    <button onclick="showLevel('2')" class="next-level-btn">
        実践的な内容を見る（Level 2）→
    </button>
</div>
```

---

## 📊 Phase 4: コンテンツ配置最適化（該当薬剤のみ）

### 対象薬剤の判別方法

Phase 2.5の分析結果に基づき、以下の薬剤は配置調整が必要：

**グループA: すべてLevel 1の薬剤**（配置見直し必要）
- 分析ドキュメントで「すべてLevel 1」と記載された薬剤
- Level 2, 3のコンテンツを適切に分割

**グループB: 不適切配置の薬剤**（一部調整必要）
- 重要な基本情報がLevel 2-3に埋没している薬剤
- Level 1を充実させる必要あり

### 配置基準
| レベル | 内容 | 目標分量 |
|--------|------|----------|
| Level 1 | 基本情報、主要効能、重要警告 | 30-40% |
| Level 2 | 詳細薬理、相互作用、処方例 | 30-35% |
| Level 3 | 開発経緯、最新知見、専門情報 | 30-35% |

---

## ✅ 作業チェックリスト

各薬剤で以下を確認してください：

### 必須項目
- [ ] level-selector.css の参照を追加
- [ ] インラインJavaScriptをすべて削除
- [ ] level-selector.js の参照を追加（</body>直前）
- [ ] ブラウザでエラーが出ないことを確認
- [ ] レベル切替が動作することを確認

### 推奨項目
- [ ] UIガイダンスが自動表示されることを確認
- [ ] コンテンツインジケーターが表示されることを確認
- [ ] 必要に応じてコンテンツ配置を調整

### 品質確認
- [ ] HTMLの構造が壊れていない
- [ ] 既存のスタイルが維持されている
- [ ] レスポンシブ対応が機能している

---

## 🚨 トラブルシューティング

### Q: レベル切替が動作しない
A: 以下を確認してください：
1. level-selector.jsが正しく読み込まれているか
2. .level-btn クラスが存在するか
3. .level-N-content クラスが存在するか

### Q: UIガイダンスが表示されない
A: .level-selector 要素内に .level-selector__inner が存在することを確認

### Q: コンソールにエラーが出る
A: インラインJavaScriptの削除漏れがないか確認

---

## 📢 報告方法

作業完了時は以下の形式で報告してください：

```
【完了報告】Dev[番号]
完了薬剤数: X/Y
作業時間: XX分
特記事項: （あれば）
```

問題発生時：
```
【質問】Dev[番号]
薬剤名: XXXXX-refined.html
問題: 具体的な内容
```

---

## 🎯 期待される成果

1. **技術的成果**
   - 1,100行の重複コード削除
   - 保守性95.5%向上
   - バグ修正箇所の一元化

2. **UX改善**
   - 「Level 3が見えない」問題の完全解決
   - 操作方法が一目で分かる
   - 段階的学習の促進

3. **将来性**
   - 新薬剤追加が容易（1行追加のみ）
   - 新機能追加が簡単（1ファイル修正）
   - A/Bテストが可能

---

**作業開始予定**: 2025-07-05 09:00  
**作業完了目標**: 2025-07-05 15:00

以上の指示に従って作業を進めてください。不明点があればManagerに質問してください。