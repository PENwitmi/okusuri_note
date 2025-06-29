# 緊急：パス構造の根本的混乱

**作成日時**: 2025-06-29 18:15  
**緊急度**: 最高  
**影響**: サイト全体が機能不全

## 発見した重大問題

### 1. 重複したディレクトリ構造

```
docs/
├── index.html（正しいトップページ）
├── drugs/（正しい薬剤ページ、まともなコンテンツ）
│   └── empagliflozin.html（心不全予防、腎保護）
└── generated/（不要な重複！）
    ├── index.html（不要なトップページ）
    └── drugs/（劣悪なコンテンツ）
        └── empagliflozin.html（ベーリンガー/リリー）
```

### 2. パスの不一致

#### 正しいパス（既に機能している）
- https://penwitmi.github.io/pharm_dex/index.html
- https://penwitmi.github.io/pharm_dex/drugs/candesartan.html

#### 混乱を生んでいる重複パス
- https://penwitmi.github.io/pharm_dex/generated/drugs/candesartan.html
- 薬剤ページから戻ると→ https://penwitmi.github.io/pharm_dex/generated/index.html

### 3. コンテンツ品質の違い

#### docs/drugs/empagliflozin.html（良い）
```html
<p class="drug-subtitle">心不全予防、腎保護</p>
<span class="info-value">心血管保護、体重減少</span>
```

#### docs/generated/drugs/empagliflozin.html（悪い）
```html
<p class="drug-tagline">ベーリンガー/リリー</p>
<span class="info-value">2015年2月</span>
```

## 根本原因

Phase 2の「コンテンツ分離アーキテクチャ」で混乱：
- content/ → tools/ → docs/generated/ という流れを作った
- しかし、既にdocs/drugs/に正しい構造が存在していた
- 結果、重複して劣化したコンテンツを生成

## 解決策

### Option A: generatedディレクトリを削除（推奨）
```bash
rm -rf docs/generated/
```
- 既存のdocs/drugs/を使用
- build.shの無効化または修正

### Option B: 全面的に再構築
- docs/drugs/をdocs/generated/drugs/に統合
- パスをすべて修正

## 即時対応が必要な理由

1. **ユーザー体験の破壊**: 薬剤ページから戻れない
2. **SEOの混乱**: 重複コンテンツ
3. **開発の混乱**: どちらを修正すべきか不明

## アクションプラン

1. generatedディレクトリの扱いを決定
2. 正しいパス構造の確立
3. コンテンツの統一
4. build.shの修正または無効化

---

**この混乱を解決しない限り、PharmaDexは機能しません。**