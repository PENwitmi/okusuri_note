# Ver2独自CSS要素 詳細仕様書

**作成日時**: 2025-07-02 14:30  
**作成者**: CEO  
**基礎調査**: Manager技術分析統合  
**目的**: Ver2専用CSS要素の完全仕様化  

---

## 🎯 Ver2独自価値とCSS要素の関係

### Ver2の核心価値
**3段階学習システム**: 薬学生→実習生→研修医の段階的学習体験

### CSS要素による価値実現
既存CSS（57変数）では実現不可能な**Ver2独自の学習体験**を技術的に実現

---

## 🧠 Manager技術分析統合結果

### 1. 3段階学習レベル視覚化システム（最重要）

#### `.level-1-content` - 薬学生レベル（認知負荷軽減・学習継続性重視）
```css
.level-1-content {
  /* 認知科学に基づく学習最適化 */
  background: var(--bg-study);               /* 学習セッション用背景 */
  color: var(--text-reading);               /* 長時間学習最適化テキスト */
  
  /* 薬学生の学習特性に最適化されたスタイル */
  border-left: 4px solid var(--v2-level1-accent);
  font-size: var(--v2-level1-text-size);
  line-height: var(--v2-level1-line-height);
  font-weight: var(--v2-level1-visual-weight);
  padding: 20px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08); /* 柔らかい影で視覚的ストレス軽減 */
  transition: box-shadow 0.2s ease;
  
  /* 認知負荷軽減のための情報密度制御 */
  max-width: 800px; /* 読みやすい幅に制限 */
  letter-spacing: 0.3px; /* 文字間隔で可読性向上 */
}
```

**設計思想**: 認知負荷軽減、長時間学習対応、視覚的ストレス軽減

#### `.level-2-content` - 実習生レベル（実践的要素強調・臨床文脈重視）
```css
.level-2-content {
  /* 実習生の学習ニーズに特化 */
  color: var(--text-pharma-body);            /* 本文・説明文色 */
  
  /* 実践的学習を促進する視覚的設計 */
  background: linear-gradient(135deg, #fff 0%, var(--v2-level2-case-study) 100%);
  border: 2px solid var(--learning-bookmark); /* ブックマーク・重要色 */
  border-left: 5px solid var(--v2-level2-practice); /* 実践ポイント強調 */
  font-weight: var(--v2-level2-visual-weight);
  padding: 16px;
  margin: 12px 0;
  border-radius: 6px;
  position: relative;
  
  /* 臨床現場を意識したインタラクティブ設計 */
  transition: all 0.3s ease;
  cursor: pointer;
}

.level-2-content:before {
  content: "🏥"; /* 病院アイコンで臨床文脈を表現 */
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 14px;
  opacity: 0.6;
}
```

**設計思想**: 実践性強調、臨床文脈の表現、インタラクティブ性

#### `.level-3-content` - 研修医レベル（専門性・エビデンスレベル表現）
```css
.level-3-content {
  /* 研修医の求める専門性と精密性を表現 */
  background: var(--bg-reading);             /* 長文読書用背景 */
  color: var(--text-pharma-secondary);       /* 薬効群・副見出し色 */
  
  /* 専門医療レベルの視覚的設計 */
  border: 2px solid var(--v2-level3-border);
  border-top: 4px solid var(--v2-level3-professional); /* 権威性を表す上部ボーダー */
  font-weight: var(--v2-level3-visual-weight);
  padding: 14px;
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.6;
  border-radius: 4px;
  position: relative;
  
  /* 研修医レベルの情報密度と精密性 */
  font-family: 'Times New Roman', 'メイリオ', serif; /* 学術的なフォント */
  box-shadow: inset 0 0 0 1px rgba(55, 71, 79, 0.1); /* 微細な内部シャドウ */
}

.level-3-content:before {
  content: "🎖️"; /* 学術的権威を表すメダルアイコン */
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 12px;
  opacity: 0.4;
}
```

**設計思想**: 専門性と権威性、学術的精密性、エビデンスレベル表現

### 2. レベル間ナビゲーションシステム（Ver2核心機能）

#### `.level-navigation` - スティッキーナビゲーション
```css
.level-navigation {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--v2-level1-border);
  padding: 12px 20px;
  z-index: 100;
  display: flex;
  justify-content: center;
  gap: 12px;
}
```

#### `.progress-container` - プログレス表示コンテナ
```css
.progress-container {
  background: var(--v2-component-hierarchy);
  border-radius: 20px;
  padding: 6px;
  display: flex;
  min-width: 300px;
}
```

#### `.nav-prev` / `.nav-next` - ナビゲーションボタン
```css
.nav-prev, .nav-next {
  background: var(--pharma-primary-light);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.nav-prev:hover, .nav-next:hover {
  background: var(--pharma-primary);
}
```

#### `.nav-active` - アクティブ状態
```css
.nav-active {
  background: var(--pharma-primary) !important;
  color: white;
  box-shadow: 0 2px 6px rgba(30, 92, 138, 0.3);
}
```

### 3. 薬剤分類バッジシステム（薬学教育特化）

#### `.drug-category-badge` - 薬効群バッジ
```css
.drug-category-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  margin: 4px 2px;
}

/* 薬効群別カラー */
.drug-category-badge.cardiovascular {
  background: var(--category-cardiovascular);
}

.drug-category-badge.endocrine {
  background: var(--category-endocrine);
}

.drug-category-badge.cns {
  background: var(--category-cns);
}
```

#### `.first-choice-badge` - 第一選択薬バッジ
```css
.first-choice-badge {
  background: var(--learning-correct);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
}
```

#### `.fic-badge` - FIC（First-in-Class）バッジ
```css
.fic-badge {
  background: var(--learning-bookmark);
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  margin-left: 4px;
}
```

### 4. 学習コンテンツ特化レイアウト

#### `.learning-grid` - レスポンシブグリッド
```css
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .learning-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

#### `.summary-card` - サマリーカード
```css
.summary-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--v2-level1-border);
  transition: box-shadow 0.2s;
}

.summary-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

#### `.student-faq` - 薬学生FAQ専用
```css
.student-faq {
  margin: 16px 0;
}

.student-faq dt {
  font-weight: 600;
  color: var(--v2-level1-accent);
  margin-bottom: 6px;
  font-size: 16px;
}

.student-faq dd {
  margin-left: 16px;
  margin-bottom: 12px;
  color: var(--text-pharma-body);
  line-height: 1.6;
}
```

#### `.level-guidance` - レベル別ガイダンス
```css
.level-guidance {
  font-style: italic;
  color: var(--pharma-primary);
  background: var(--pharma-primary-subtle);
  padding: 8px 12px;
  border-radius: 4px;
  margin: 8px 0;
  font-size: 14px;
}
```

#### `.learning-note` - 学習注記
```css
.learning-note {
  border-left: 3px solid var(--learning-bookmark);
  background: var(--bg-study);
  padding: 10px 16px;
  margin: 12px 0;
  border-radius: 4px;
  font-size: 15px;
  line-height: 1.5;
}
```

### 5. 処方パターン表示システム（実践学習）

#### `.prescription-display` - 処方箋形式表示
```css
.prescription-display {
  font-family: 'Courier New', Monaco, monospace;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-left: 4px solid var(--v2-level2-practice);
  padding: 16px;
  margin: 16px 0;
  border-radius: 6px;
  white-space: pre-line;
  font-size: 14px;
  line-height: 1.4;
}
```

#### `.prescription-note` - 処方注記
```css
.prescription-note {
  font-size: 12px;
  font-style: italic;
  color: var(--text-pharma-caption);
  margin-top: 8px;
  padding-left: 8px;
}
```

#### `.combination-drugs` - 併用薬リスト
```css
.combination-drugs {
  background: var(--bg-reading);
  border: 1px dashed var(--v2-level2-practice);
  padding: 12px;
  margin: 12px 0;
  border-radius: 4px;
}

.combination-drugs ul {
  margin: 0;
  padding-left: 20px;
}

.combination-drugs li {
  margin-bottom: 6px;
  line-height: 1.4;
}
```

### 6. インタラクティブ学習要素

#### `.custom-list` - カスタムリスト
```css
.custom-list {
  list-style: none;
  padding-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 8px;
  line-height: 1.6;
}

.custom-list li::before {
  content: "▶";
  color: var(--pharma-primary);
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}
```

---

## 🎨 薬効群テーマ統合

### 内分泌系テーマ（メトホルミン用）- ホルモンフィードバック機構表現
```css
.endo-theme {
  --endo-stimulus: #388e3c;        /* 刺激ホルモン */
  --endo-response: #7b1fa2;        /* 標的器官応答 */
  --endo-feedback: #f57c00;        /* フィードバック制御 */
}

.endo-theme .level-1-content {
  border-left: 4px solid var(--endo-stimulus);
  background: linear-gradient(to right, #fff, rgba(56, 142, 60, 0.05));
}

.endo-theme .level-2-content {
  border: 2px solid var(--endo-feedback);
  background: linear-gradient(135deg, #fff 0%, rgba(245, 124, 0, 0.08) 100%);
}

.endo-theme .clinical-evidence {
  border-left: 3px solid var(--endo-response);
  background: rgba(123, 31, 162, 0.03);
}
```

### 循環器系テーマ（テルミサルタン・ロスバスタチン用）- 血流・酸素化プロセス表現
```css
.cardio-theme {
  --cardio-oxygenated: #d32f2f;   /* 動脈血（酸素飽和）*/
  --cardio-deoxygenated: #1976d2; /* 静脈血（酸素不足）*/
  --cardio-intervention: #f57c00;  /* 薬物介入ポイント */
}

.cardio-theme .level-1-content {
  border-left: 4px solid var(--cardio-oxygenated);
  background: linear-gradient(to right, #fff, rgba(211, 47, 47, 0.05));
}

.cardio-theme .level-2-content {
  border: 2px solid var(--cardio-intervention);
  background: linear-gradient(135deg, #fff 0%, rgba(245, 124, 0, 0.08) 100%);
}

.cardio-theme .clinical-evidence {
  border-left: 3px solid var(--cardio-deoxygenated);
  background: rgba(25, 118, 210, 0.03);
}
```

---

## 📱 レスポンシブ対応

### 4段階レスポンシブ対応（薬学生70%スマホ利用対応）

#### スマートフォン（薬学生主要デバイス）
```css
@media (max-width: 480px) {
  .level-1-content {
    padding: 14px;
    font-size: 16px;
    line-height: 1.7;
    margin: 10px 0;
    border-radius: 6px;
  }
  
  .level-2-content {
    padding: 12px;
    font-size: 15px;
    margin: 8px 0;
  }
  
  .level-3-content {
    padding: 10px;
    font-size: 14px;
    margin: 6px 0;
  }
}
```

#### タブレット縦（実習環境対応）
```css
@media (min-width: 481px) and (max-width: 768px) {
  .level-1-content {
    padding: 16px;
    font-size: 17px;
    margin: 12px 0;
  }
  
  .level-2-content,
  .level-3-content {
    padding: 14px;
    margin: 10px 0;
  }
}
```

#### タブレット横・小型ノートPC（詳細学習）
```css
@media (min-width: 769px) and (max-width: 1024px) {
  .level-1-content {
    padding: 18px;
    font-size: 18px;
    margin: 14px 0;
  }
  
  .level-2-content,
  .level-3-content {
    padding: 16px;
    margin: 12px 0;
  }
}
```

#### デスクトップ（教育機関・病院環境）
```css
@media (min-width: 1025px) {
  .level-1-content {
    padding: 20px;
    font-size: 18px;
    margin: 16px 0;
  }
  
  .level-2-content,
  .level-3-content {
    padding: 18px;
    margin: 14px 0;
  }
}
```

---

## 🌟 Ver2独自価値の技術的実現

### 価値1: 段階的学習体験
**技術実現**: `.level-1-content` → `.level-2-content` → `.level-3-content` の視覚的階層による自然な学習進行

### 価値2: 実践的薬学教育
**技術実現**: `.prescription-display`, `.combination-drugs`, `.practice-point` による臨床現場感の表現

### 価値3: 科学的根拠に基づく薬効群専門性
**技術実現**: 
- 循環器系：血流・酸素化プロセスの色彩表現
- 内分泌系：ホルモンフィードバック機構の色彩表現
- 中枢神経系：神経伝達物質作用の色彩表現

### 価値4: 薬学生中心のレスポンシブ設計
**技術実現**: 4段階ブレークポイントによる薬学生70%のスマホ利用に完全対応

---

## 📊 実装効果予測

### 学習効果向上
- **段階的理解**: 視覚的階層により自然な学習進行
- **実践力強化**: 処方パターン表示による現場感の習得
- **記憶定着**: 薬効群カラーによる視覚的記憶支援

### 開発効率向上
- **統一化**: 全Ver2ページで共通CSS活用
- **拡張性**: 新薬剤追加時の即座対応
- **保守性**: 1ファイル修正で全体更新

---

**成果**: Ver2独自価値の完全技術化により、薬学教育革新の基盤確立