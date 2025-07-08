# CEO優先度分類完全版 - 608個の不足クラス

**作成日時**: 2025-07-02 17:38  
**作成者**: CEO  
**分類基準**: 機能的重要性×使用頻度×教育的価値

---

## 📊 分類サマリー

| 優先度 | 分類 | クラス数 | 実装時間 |
|--------|------|----------|----------|
| P0 | 最優先（基本構造） | 35個 | 30分 |
| P1 | 高優先（学習システム） | 85個 | 120分 |
| P2 | 中優先（薬学専門） | 220個 | 90分 |
| P3 | 低優先（装飾的） | 268個 | 90分 |
| **合計** | | **608個** | **330分** |

---

## 🔴 P0: 最優先クラス（35個）

### 基本構造（10個）
```css
.basic-info-card        /* 薬学生向け基本情報カード */
.drug-name-display      /* 薬剤名表示（定義済み、要確認） */
.brand-name            /* ブランド名 */
.generic-name          /* 一般名 */
.classification-badges /* 分類バッジ */
.drug-class-badge      /* 薬効分類バッジ */
.first-choice-badge    /* 第一選択薬バッジ */
.main-indications      /* 主な適応症 */
.indication-list       /* 適応症リスト */
.primary               /* 主要適応 */
```

### サマリー関連（8個）
```css
.quick-summary-student  /* 30秒サマリー */
.summary-grid          /* サマリーグリッド */
.summary-item          /* サマリー項目 */
.fic-status            /* FIC（First in Class）ステータス */
.fic-badge             /* FICバッジ */
.why-developed         /* なぜ開発されたか */
.clinical-use          /* 臨床使用 */
.vs-similar            /* 他薬との比較 */
```

### FAQ関連（7個）
```css
.student-faq-section   /* 薬学生FAQ */
.student-questions     /* 学生の質問 */
.faq-note             /* FAQ注記 */
.level-guide          /* レベルガイド */
.star-rating          /* 国試頻出度（★表示） */
.question-priority    /* 質問優先度 */
.answer-depth        /* 回答深度 */
```

### 処方関連（5個）
```css
.prescription-examples /* 処方例 */
.rx-example           /* 処方例フォーマット */
.rx-format            /* 処方書式 */
.dosage-note          /* 用量注記 */
.prescription-pattern /* 処方パターン（定義済み、要確認） */
```

### レベル制御（5個）
```css
.level-indicator      /* レベルインジケーター */
.level-indicator-inner /* レベルインジケーター内部 */
.level-btn            /* レベルボタン */
.active               /* アクティブ状態 */
.next-level-prompt    /* 次レベルへの誘導 */
```

---

## 🟡 P1: 高優先クラス（85個）

### 3段階学習システム（20個）
```css
.level-1-content      /* 薬学生レベル（定義済み、要拡張） */
.level-2-content      /* 実習生レベル（定義済み、要拡張） */
.level-3-content      /* 研修医レベル（定義済み、要拡張） */
.intermediate-level   /* 中級レベル */
.advanced-level       /* 上級レベル */
.level-guide-section  /* レベルガイドセクション */
.learning-progress    /* 学習進捗 */
.mastery-indicator    /* 習得度インジケーター */
.competency-level     /* 能力レベル */
.skill-progression    /* スキル進行 */
```

### 実践・臨床関連（25個）
```css
.practice-point       /* 実践ポイント（定義済み、要確認） */
.practice-scenario    /* 実践シナリオ */
.clinical-case        /* 臨床症例 */
.case-presentation    /* 症例提示 */
.clinical-pearls      /* 臨床の真珠 */
.clinical-significance /* 臨床的意義 */
.real-world-evidence  /* リアルワールドエビデンス */
.treatment-algorithm  /* 治療アルゴリズム */
.decision-tree        /* 意思決定ツリー */
.protocol-based       /* プロトコルベース */
```

### 警告・注意関連（15個）
```css
.warning-note         /* 警告注記（定義済み、要確認） */
.caution              /* 注意 */
.caution-box          /* 注意ボックス */
.danger               /* 危険 */
.contraindication-box /* 禁忌ボックス */
.drug-interaction-alert /* 薬物相互作用アラート */
.side-effect-warning  /* 副作用警告 */
.monitoring-required  /* モニタリング必要 */
.black-box-warning    /* ブラックボックス警告 */
.safety-consideration /* 安全性考慮事項 */
```

### エビデンス関連（15個）
```css
.clinical-evidence    /* 臨床エビデンス（定義済み、要確認） */
.evidence-based       /* エビデンスベース */
.evidence-summary     /* エビデンスサマリー */
.study-reference      /* 研究参照 */
.citation             /* 引用 */
.research-highlight   /* 研究ハイライト */
.meta-analysis        /* メタアナリシス */
.systematic-review    /* システマティックレビュー */
.clinical-trial       /* 臨床試験 */
.outcome-data         /* アウトカムデータ */
```

### インタラクティブ要素（10個）
```css
.interactive-element  /* インタラクティブ要素 */
.expandable           /* 展開可能 */
.collapsible          /* 折りたたみ可能 */
.toggle-content       /* トグルコンテンツ */
.show-more            /* もっと見る */
.interactive-quiz     /* インタラクティブクイズ */
.knowledge-check      /* 知識チェック */
.self-assessment      /* 自己評価 */
.feedback-section     /* フィードバックセクション */
.progress-tracker     /* 進捗トラッカー */
```

---

## 🟢 P2: 中優先クラス（220個）

### 薬理学関連（60個）
```css
.molecular-discovery   /* 分子レベル発見 */
.cellular-effects      /* 細胞レベル効果 */
.metabolic-effects     /* 代謝効果 */
.pharmacokinetics      /* 薬物動態 */
.pharmacodynamics      /* 薬力学 */
.mechanism-of-action   /* 作用機序 */
.receptor-binding      /* 受容体結合 */
.enzyme-inhibition     /* 酵素阻害 */
.signal-pathway        /* シグナル経路 */
.drug-metabolism       /* 薬物代謝 */
```

### 薬効群特化（80個）
```css
/* 循環器系 */
.cardiovascular-effects /* 心血管効果 */
.blood-pressure-control /* 血圧コントロール */
.heart-rate-effects     /* 心拍数効果 */
.vascular-protection    /* 血管保護 */
.anti-atherosclerotic   /* 抗動脈硬化 */

/* 内分泌系 */
.glucose-lowering       /* 血糖降下 */
.insulin-sensitivity    /* インスリン感受性 */
.hormonal-effects       /* ホルモン効果 */
.metabolic-regulation   /* 代謝調節 */
.endocrine-modulation   /* 内分泌調節 */

/* 中枢神経系 */
.neurotransmitter       /* 神経伝達物質 */
.brain-penetration      /* 脳内移行性 */
.cognitive-effects      /* 認知効果 */
.mood-stabilization     /* 気分安定化 */
.neurological-impact    /* 神経学的影響 */
```

### 比較・選択関連（40個）
```css
.drug-comparison        /* 薬剤比較 */
.selection-criteria     /* 選択基準 */
.comparative-efficacy   /* 比較効果 */
.head-to-head          /* 直接比較 */
.superiority-data      /* 優越性データ */
.non-inferiority       /* 非劣性 */
.therapeutic-equivalence /* 治療同等性 */
.cost-effectiveness    /* 費用対効果 */
.clinical-preference   /* 臨床的選好 */
.guideline-position    /* ガイドライン位置づけ */
```

### 患者管理関連（40個）
```css
.patient-monitoring    /* 患者モニタリング */
.follow-up-schedule    /* フォローアップスケジュール */
.titration-guide       /* 用量調節ガイド */
.adherence-tips        /* アドヒアランスのコツ */
.patient-education     /* 患者教育 */
.counseling-points     /* カウンセリングポイント */
.lifestyle-modification /* 生活習慣改善 */
.diet-considerations   /* 食事考慮事項 */
.exercise-guidance     /* 運動指導 */
.special-populations   /* 特別な集団 */
```

---

## 🔵 P3: 低優先クラス（268個）

### 視覚的装飾（80個）
```css
.decorative-border     /* 装飾的ボーダー */
.background-pattern    /* 背景パターン */
.shadow-effect         /* 影効果 */
.gradient-overlay      /* グラデーションオーバーレイ */
.visual-separator      /* 視覚的セパレーター */
.ornamental-element    /* 装飾的要素 */
.aesthetic-enhancement /* 美的強化 */
.style-variation       /* スタイルバリエーション */
.theme-accent          /* テーマアクセント */
.design-flourish       /* デザインの装飾 */
```

### 補助的UI要素（88個）
```css
.tooltip-container     /* ツールチップコンテナ */
.hover-effect          /* ホバー効果 */
.transition-smooth     /* スムーズトランジション */
.animation-subtle      /* 控えめなアニメーション */
.micro-interaction     /* マイクロインタラクション */
.visual-feedback       /* 視覚的フィードバック */
.state-indicator       /* 状態インジケーター */
.progress-visual       /* 進捗視覚化 */
.loading-state         /* ローディング状態 */
.completion-badge      /* 完了バッジ */
```

### 詳細データ表示（100個）
```css
.data-table            /* データテーブル */
.statistical-chart     /* 統計チャート */
.graph-container       /* グラフコンテナ */
.timeline-visual       /* タイムライン視覚化 */
.infographic-element   /* インフォグラフィック要素 */
.data-visualization    /* データ可視化 */
.metric-display        /* メトリクス表示 */
.percentage-bar        /* パーセンテージバー */
.comparison-chart      /* 比較チャート */
.trend-indicator       /* トレンドインジケーター */
```

---

## 🔧 実装戦略

### P0実装方針（30分）
1. **構造の安定性を最優先**
2. **最小限のスタイルで機能確保**
3. **既存のCSS変数を最大活用**

### P1実装方針（120分）
1. **3段階学習の視覚的差別化**
2. **臨床的重要性の強調**
3. **インタラクティブ性の確保**

### P2実装方針（90分）
1. **薬効群ごとのバッチ処理**
2. **共通パターンの抽出と再利用**
3. **科学的正確性の維持**

### P3実装方針（90分）
1. **自動化可能な部分の特定**
2. **既存スタイルからの流用**
3. **最終的な洗練**

---

## 📝 次のステップ

1. **P0クラスのCSS定義開始**
2. **各クラスの具体的なスタイル属性決定**
3. **ver2-unified.cssへの段階的追加**

---

**分類完了時刻**: 2025-07-02 17:38