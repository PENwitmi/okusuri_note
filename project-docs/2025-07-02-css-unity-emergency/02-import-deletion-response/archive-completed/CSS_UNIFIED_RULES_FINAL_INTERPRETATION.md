# CSS統一ルール最終解釈 - 公式ガイドライン

**作成日時**: 2025-07-02 18:25  
**作成者**: CEO  
**承認**: 実用性と保守性のバランスを重視した最終決定  
**効力**: 本書が統一ルールの公式解釈として効力を持つ

---

## 📌 エグゼクティブサマリー

### 統一ルールの核心
1. **HTMLインラインスタイル**: 完全禁止
2. **CSS内の色指定**: 基本は変数使用、特殊効果は直接指定を許可

この解釈により、実用的な開発と高い保守性を両立します。

---

## 🎯 統一ルールの最終解釈

### 1. HTMLレベル - 厳格適用

#### ❌ 絶対禁止
```html
<!-- インラインスタイルは一切禁止 -->
<div style="background: #ffcdd2; padding: 1rem;">
<span style="color: red;">
<p style="font-size: 16px;">
```

#### ✅ 正しい方法
```html
<!-- すべてクラス経由でスタイルを適用 -->
<div class="error-message-box">
<span class="highlight-text">
<p class="body-text">
```

**理由**: 
- コンテンツとプレゼンテーションの完全分離
- CSSの一元管理
- 保守性の確保

---

### 2. CSSレベル - 実用的適用

#### 2.1 変数定義（:root内）
```css
:root {
  /* 色の直接指定は完全にOK - ここが唯一の定義場所 */
  --pharma-primary: #1e5c8a;
  --text-body: #374151;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

#### 2.2 基本的なスタイル属性

##### ✅ 変数使用必須
```css
.example {
  /* 文字色、背景色、ボーダー色は変数必須 */
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border-color: var(--border-color);
}
```

##### ❌ 避けるべき
```css
.example {
  /* 基本色の直接指定は避ける */
  color: #333333;
  background: #ffffff;
  border: 1px solid #cccccc;
}
```

#### 2.3 特殊効果・装飾的要素

##### ✅ 直接指定を許可
```css
.example {
  /* 影の微妙な透明度調整 */
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
  
  /* グラデーション効果 */
  background: linear-gradient(135deg, #fff 0%, rgba(245, 124, 0, 0.08) 100%);
  
  /* 特殊な視覚効果 */
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
}
```

**許可理由**:
1. 微妙な透明度（0.08等）は変数化が非現実的
2. 一度きりの特殊効果
3. 統一ルール策定書自体がこの方式を採用

---

## 📊 適用基準マトリクス

| 要素 | 変数必須 | 直接指定可 | 理由 |
|------|----------|------------|------|
| 文字色 | ✅ | ❌ | ブランド統一性 |
| 背景色 | ✅ | ❌ | テーマ変更対応 |
| ボーダー色 | ✅ | ❌ | 一貫性確保 |
| 影の色 | △ | ✅ | 微調整の必要性 |
| 影の透明度 | ❌ | ✅ | 細かい数値調整 |
| グラデーション基準色 | △ | ✅ | 複雑な効果 |
| アニメーション値 | ❌ | ✅ | 動的な値 |

△ = ケースバイケース

---

## 🔧 実装ガイドライン

### STEP 1: 変数化の判断フロー
```
色を使用する
    ↓
再利用される？
    YES → 変数化必須
    NO  ↓
ブランドカラー？
    YES → 変数化必須
    NO  ↓
基本的な色（文字/背景/ボーダー）？
    YES → 変数化必須
    NO  ↓
特殊効果（影/グラデーション）？
    YES → 直接指定可
```

### STEP 2: 変数命名規則
```css
/* 用途別に明確な命名 */
--text-*        /* 文字色用 */
--bg-*          /* 背景色用 */
--border-*      /* ボーダー色用 */
--shadow-*      /* 影用（必要な場合） */
--accent-*      /* アクセント色用 */
```

---

## 💡 ベストプラクティス

### 推奨事項
1. **新規色は必ず:rootに変数として定義**
2. **既存変数の最大限の再利用**
3. **特殊効果でも、可能なら変数の色をベースに使用**

### 実装例
```css
:root {
  --shadow-base: rgba(0, 0, 0, 0.1);
}

.card {
  /* 基本の影 */
  box-shadow: 0 2px 4px var(--shadow-base);
}

.card-hover {
  /* 特殊な影（直接指定OK） */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 📝 チェックリスト

### コードレビュー時の確認事項
- [ ] HTMLにstyle属性が含まれていない
- [ ] 文字色・背景色・ボーダー色は変数使用
- [ ] 新規色は:rootに定義されている
- [ ] 特殊効果の直接指定には正当な理由がある
- [ ] 変数名は用途が明確

---

## 🚀 移行ガイド

### 既存コードの修正優先度
1. **最優先**: HTMLインラインスタイル除去
2. **高優先**: 基本色の変数化
3. **中優先**: 頻出する影の変数化
4. **低優先**: 一度きりの特殊効果

---

## 📌 最終宣言

本解釈により、CSS統一ルールは以下のように運用されます：

1. **HTMLインラインスタイル**: 例外なく完全禁止
2. **CSS基本色**: 変数使用必須
3. **CSS特殊効果**: 実用性を考慮し直接指定を許可

この解釈は、コードの保守性と開発の実用性のバランスを最適化し、
薬学教育革新プラットフォームの持続的発展を支援します。

---

**署名**: CEO  
**発効日**: 2025-07-02  
**次回見直し**: 必要に応じて随時