# PharmaDX ビルドフロー改善計画
作成日時: 2025-06-30 17:20

## 概要

現在のビルドシステムの問題を解決し、価値あるコンテンツを最大限活用するための
具体的な改善計画と実装仕様を定義します。

## 1. 改善の目標

### 1.1 短期目標（即時対応）
- 既存の高品質HTMLファイルの保護
- 10薬剤のMDファイル（5,328行）のHTML化
- ファイルタイプの正確な判別

### 1.2 長期目標（持続可能性）
- 統一的なMD→HTML変換フロー
- 品質管理システムの確立
- 拡張性のあるアーキテクチャ

## 2. 改善後の処理フロー

### 2.1 全体フロー図

```
[開始]
  ↓
[コンテンツスキャン]
  ├─→ 薬効群モデル検出
  ├─→ 個別薬剤MD検出
  └─→ その他コンテンツ検出
  ↓
[既存ファイル保護チェック]
  ├─→ 高品質HTML（100行以上）→ スキップ
  └─→ それ以外 → 処理続行
  ↓
[コンテンツ種別に応じた処理]
  ├─→ 薬効群モデル → generateDrugGroupPage()
  ├─→ 個別薬剤MD → generateDrugDetailPage()
  └─→ ストーリー → generateStoryPage()
  ↓
[品質検証]
  ├─→ リンク整合性チェック
  └─→ 必須要素確認
  ↓
[完了レポート生成]
```

### 2.2 ファイル判別アルゴリズム

```javascript
function categorizeContentFile(filePath, content) {
    const filename = path.basename(filePath, '.md');
    
    // 1. ファイル名による判別
    if (isDrugGroupModelByName(filename)) {
        return { type: 'drugGroup', subtype: 'model' };
    }
    
    // 2. 内容による判別
    if (isIndividualDrugByContent(content)) {
        return { type: 'drug', subtype: 'detail' };
    }
    
    // 3. ディレクトリによる判別
    if (filePath.includes('/stories/')) {
        return { type: 'story', subtype: 'narrative' };
    }
    
    return { type: 'unknown', subtype: null };
}

function isDrugGroupModelByName(filename) {
    const modelPatterns = [
        '_evolution_model',
        '_prescription_reality',
        '_guide',
        '_ecosystem',
        '_treatment_ecosystem',
        '_orchestra_guide'
    ];
    
    return modelPatterns.some(pattern => filename.includes(pattern));
}

function isIndividualDrugByContent(content) {
    const drugPatterns = [
        /^#\s+.+（.+）詳細解説モデル/m,
        /##\s+📍\s+5分サマリー/,
        /###\s+薬剤の本質/,
        /##\s+🧬.*の歴史的背景/
    ];
    
    return drugPatterns.filter(pattern => pattern.test(content)).length >= 2;
}
```

## 3. 既存ファイル保護機能

### 3.1 保護基準

```javascript
function shouldProtectExistingFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    
    // 保護条件
    const protectionCriteria = {
        minLines: 100,              // 100行以上
        hasDetailedContent: checkDetailedContent(content),
        hasCustomStyling: content.includes('class="drug-hero"'),
        lastModified: getLastModified(filePath)
    };
    
    // 100行以上、または詳細コンテンツを含む場合は保護
    return lines >= protectionCriteria.minLines || 
           protectionCriteria.hasDetailedContent;
}

function checkDetailedContent(content) {
    const markers = [
        '30秒サマリー',
        'CHARM試験',
        'CIBIS-II試験',
        '臨床的意義',
        '処方選択のポイント'
    ];
    
    return markers.some(marker => content.includes(marker));
}
```

### 3.2 保護時の処理

```javascript
function processWithProtection(inputPath, outputPath, processor) {
    if (shouldProtectExistingFile(outputPath)) {
        console.log(`🛡️ 保護: ${outputPath} (高品質ファイル)`);
        
        // オプション: 更新可能な部分のみ更新
        if (canPartialUpdate(outputPath)) {
            return partialUpdate(outputPath, processor);
        }
        
        return { 
            status: 'protected', 
            reason: 'High quality content',
            lines: countLines(outputPath)
        };
    }
    
    // 通常の処理
    return processor(inputPath, outputPath);
}
```

## 4. 個別薬剤MD処理の実装

### 4.1 新規関数: generateDrugDetailPage()

```javascript
async generateDrugDetailPage(drugMdFile) {
    const content = fs.readFileSync(drugMdFile.filePath, 'utf8');
    const drugName = path.basename(drugMdFile.filePath, '.md');
    
    // MDから情報抽出
    const drugData = this.extractDrugDataFromMd(content);
    
    // テンプレート選択
    const template = drugData.lines > 500 ? 
        'detailed-drug-template' : 'standard-drug-template';
    
    // HTML生成
    const html = this.renderDrugTemplate(template, {
        ...drugData,
        originalMdPath: drugMdFile.filePath
    });
    
    // 保存
    const outputPath = `drugs/${drugName}.html`;
    this.saveHtmlFile(outputPath, html);
    
    return {
        status: 'generated',
        inputLines: drugData.lines,
        outputPath
    };
}

function extractDrugDataFromMd(mdContent) {
    const data = {
        title: '',
        brandName: '',
        summary5min: '',
        essence: '',
        history: '',
        clinicalUse: '',
        sideEffects: '',
        futureProspects: '',
        lines: mdContent.split('\n').length
    };
    
    // タイトル抽出
    const titleMatch = mdContent.match(/^#\s+(.+)（(.+)）/m);
    if (titleMatch) {
        data.title = titleMatch[1];
        data.brandName = titleMatch[2];
    }
    
    // セクション抽出
    const sections = this.extractSections(mdContent);
    data.summary5min = sections['5分サマリー'] || '';
    data.essence = this.extractEssence(data.summary5min);
    data.history = sections['歴史的背景'] || '';
    data.clinicalUse = sections['臨床使い分け'] || '';
    
    return data;
}
```

### 4.2 改良版テンプレート

```javascript
function renderDetailedDrugTemplate(data) {
    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${data.essence}">
    <title>${data.title}（${data.brandName}） | PharmaDx 薬剤図鑑</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/drug-detail.css">
</head>
<body>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <h1><a href="../index.html">PharmaDx</a></h1>
            </div>
        </div>
    </header>

    <main class="drug-detail">
        <!-- 5分サマリー -->
        <section class="summary-5min">
            <h2>📍 5分サマリー</h2>
            <div class="essence-box">
                <h3>薬剤の本質</h3>
                <p>${data.essence}</p>
            </div>
            ${data.summary5min}
        </section>

        <!-- 歴史的背景 -->
        ${data.history ? `
        <section class="history">
            <h2>🧬 歴史的背景</h2>
            ${data.history}
        </section>
        ` : ''}

        <!-- 臨床使い分け -->
        <section class="clinical-use">
            <h2>💊 臨床使い分けと実践</h2>
            ${data.clinicalUse}
        </section>

        <!-- 関連リンク -->
        <section class="related-links">
            <h2>📚 関連コンテンツ</h2>
            <div class="link-grid">
                <a href="../groups/${data.drugGroup}.html">
                    ${data.drugGroup}の全体像
                </a>
            </div>
        </section>
    </main>

    <footer>
        <p>Generated from: ${data.originalMdPath}</p>
        <p>Last updated: ${new Date().toISOString()}</p>
    </footer>
</body>
</html>`;
}
```

## 5. 実装手順

### Phase 1: ドキュメント作成（完了）
- ✅ BUILD_SYSTEM_ANALYSIS_20250630.md
- ✅ CONTENT_STRUCTURE_GUIDE_20250630.md
- ✅ BUILD_FLOW_IMPROVEMENT_PLAN_20250630.md（本書）

### Phase 2: 保護機能実装
1. `shouldProtectExistingFile()`関数の実装
2. 既存のsaveHtmlFile()への保護ロジック統合
3. 保護ログの実装

### Phase 3: 個別薬剤MD処理
1. ファイル判別ロジックの実装
2. `generateDrugDetailPage()`の実装
3. MDコンテンツ抽出関数の実装

### Phase 4: 統合テスト
1. 10薬剤のMD→HTML変換テスト
2. 既存高品質HTMLの保護確認
3. 全体的な動作検証

## 6. 品質管理チェックリスト

### ビルド前チェック
- [ ] バックアップ作成
- [ ] 既存高品質ファイルのリスト作成
- [ ] MDファイルの整合性確認

### ビルド後チェック
- [ ] 保護対象ファイルが変更されていないこと
- [ ] 新規生成ファイルの品質確認
- [ ] リンク整合性の検証
- [ ] エラーログの確認

## 7. 期待される成果

### 定量的成果
- **活用コンテンツ増加**: 5,328行のMDファイル活用
- **保護されるコンテンツ**: 約5,000行の既存HTML
- **総教育コンテンツ**: 10,000行以上

### 定性的成果
- 薬学生・医療従事者への包括的な教育価値提供
- 「なぜ似た薬が複数存在するのか」への詳細な回答
- 持続可能なコンテンツ管理体制の確立

## 8. リスクと対策

### リスク1: 保護ロジックの誤判定
**対策**: 
- 保護基準の慎重な設定（100行以上）
- 手動オーバーライドオプションの提供

### リスク2: MD→HTML変換の品質低下
**対策**:
- 元のMD構造を最大限保持
- セクション単位での変換処理

### リスク3: 処理時間の増加
**対策**:
- キャッシュ機能の実装
- 差分処理の導入

## 9. 次のアクション

1. **即時**: convert_pharmadx.jsのバックアップ作成
2. **Phase 2実装**: 保護機能のコーディング
3. **Phase 3実装**: 個別薬剤MD処理の実装
4. **検証**: テスト環境での動作確認

---

*この計画書は、PharmaDXプロジェクトの価値を守り、拡大するための詳細な設計書です。*
*実装時は本書を参照し、設計意図を正確に反映させることが重要です。*