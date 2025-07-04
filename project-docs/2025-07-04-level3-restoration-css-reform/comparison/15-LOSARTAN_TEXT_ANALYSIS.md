# 15-LOSARTAN_TEXT_ANALYSIS.md
# ロサルタン：文章内容の比較分析

**作成日時**: 2025-07-04 09:24
**分析者**: CEO
**対象ファイル**:
- クリーン版: `/docs/_internal/css_cleanup/losartan-clean.html` (764行)
- Refined版: `/docs/drugs-v2/losartan-refined.html` (512行)

## 📊 基本統計

| 項目 | クリーン版 | Refined版 | 差分 |
|------|-----------|-----------|------|
| 総行数 | 764行 | 512行 | -252行 ⚠️ |
| 医師の証言 | 2名分（詳細） | なし | **完全削除** ❌ |
| 世界初ARB説明 | あり | 保持 | レベル1-2に配置 ✅ |
| LIFE試験 | 詳細あり | 保持 | レベル2に配置 |

## 🚨 重要な発見：医師の証言が完全削除された

ロサルタンは、クリーン版にあった**2名の医師の証言が完全に削除**されています。また全体の行数が33%減少しており、内容の簡略化が顕著です。

## 🔍 文章配置の詳細

### レベル1（薬学生向け）- 初期表示
**含まれる文章**:
- 薬剤ヘッダーに「AT1受容体拮抗の開拓者」
- 30秒サマリーで「世界初のARB」を明記
- 統計データ（市場シェア20%、尿酸排泄促進）
- 3つのインパクト要素（世界初ARB、尿酸排泄、ジェネリック最強）

**良い点**:
- ✅ 「世界初ARB」が明確に伝わる
- ✅ 尿酸排泄という特徴が初期表示

### レベル2（実習中向け）- JavaScriptで制御
**配置された文章**:
- First-in-Class革命の説明
- AT1受容体選択的拮抗の画期性
- LIFE試験の詳細
- ジェネリック時代の戦略的生存
- 技術的限界（半減期）と克服戦略
- 国試・実習のポイント

### レベル3 - 存在しない
このファイルにはレベル3セクションが実装されていません。

### 削除された重要な内容

#### 医師の証言（完全削除）
```
「ACE阻害薬で空咳に悩まされていた患者に、初めてロサルタンを処方した時の感動は忘れられない。
空咳なしで血圧が下がる奇跡を目の当たりにした」
- 循環器内科医（1995年当時、30代）

「ロサルタンの登場により、高血圧治療の選択肢が劇的に広がった。
これは新たな治療時代の幕開けだった」
- 日本高血圧学会 理事長コメント（1995年）
```

## 🔍 削除と非表示の区別

### 削除された文章：252行（33%）
- 医師の証言（2名分）
- 歴史的な詳細説明の一部
- 使い分けの詳細セクション

### 非表示の文章：実質なし
- レベル2：JavaScriptで表示可能
- レベル3：そもそも存在しない

### 価値損失評価
- 初期表示での損失：**中（30-40%）**
- 完全削除による損失：**高（40%）**
- 総合評価：**中〜高（内容簡略化が顕著）**

## 💡 特記事項

### ロサルタン実装の問題点
1. **医師の証言が完全削除（感動的要素の喪失）**
2. **全体の内容が33%削減**
3. **レベル3が存在しない（深い学習不可）**
4. **1995年の歴史的インパクトが薄い**

### 削除内容の影響
| 要素 | クリーン版 | Refined版 | 影響 |
|------|-----------|-----------|------|
| 医師の証言 | 2名分詳細 | 削除 | 感動的要素喪失 |
| 歴史的詳細 | 充実 | 簡略化 | 革新性の希薄化 |
| 使い分け詳細 | あり | 削除 | 実践的価値低下 |
| レベル3 | - | なし | 深い学習不可 |

## 📈 価値評価

### 残された良い点
- **「世界初ARB」は初期表示で明確**
- **尿酸排泄促進の特徴は保持**
- **LIFE試験のデータは残存**
- **国試対策は充実**

### 失われた価値
- **1995年当時の感動が伝わらない**
- **空咳回避の革命性が数値のみ**
- **医療現場への衝撃が削除**
- **深い学習（レベル3）が不可能**

### 教育的影響
- **歴史的意義：60%に低下**
- **感動的要素：0%（完全喪失）**
- **実用的価値：70%（基本は保持）**

## 🎯 結論

ロサルタンは、refined版実装の**部分的失敗例**です：

1. **核心価値の可視性**：70%（世界初は明確、感動なし）
2. **内容の完全性**：67%（33%削減）
3. **感動的要素**：0%（医師の証言削除）
4. **構造の簡潔性**：レベル1-2のみ

**「世界初のARB」という歴史的価値は伝わるものの、1995年当時の医療現場の感動と革命的インパクトが失われた残念な実装です。**

## 💭 改善提案

1. **医師の証言の復活**：少なくとも1名分はレベル1に配置
2. **歴史的文脈の充実**：1995年の革命性をもっと詳しく
3. **レベル3の追加**：深い薬理学的考察や将来展望
4. **内容の復元**：削減された252行から重要部分を選別復活

医師の証言という「人間の感動」を削除したことで、薬剤の真の価値が半減してしまった例として記憶すべきです。