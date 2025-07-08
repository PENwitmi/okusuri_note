# PharmaDx ビルドシステム更新 実行計画書

**作成日時**: 2025-06-30 17:38  
**作成者**: Manager  
**目的**: 新ディレクトリ構造に対応するビルドシステムの実装計画

## 1. 実装概要

### 1.1 対象ファイル
1. **tools/config.json**: パス定義の更新、新セクション追加
2. **tools/convert_pharmadx.js**: ディレクトリ走査ロジックの修正
3. **tools/build.sh**: 統計生成パスの更新

### 1.2 バックアップ状況
- convert_pharmadx.js.backup_20250630_1720: 既存（CEOによる）
- config.json、build.sh: 実装前にバックアップ作成予定

## 2. config.json 詳細更新内容

### 2.1 contentMappingセクションの更新

#### 現在の状態
```json
"contentMapping": {
  "drugGroups": {
    "ARB": "content/drug_database/cardiovascular/ARB_evolution_model.md",
    "PPI": "content/drug_database/gastrointestinal/PPI_evolution_model.md",
    // ...
  },
  "htmlCards": {
    "ジゴキシン": "content/study_tools/digoxin_kokushi_card.html",
    // ...
  },
  "stories": {
    "ペニシリン": "content/stories/01_penicillin/01_penicillin_story_pure.md",
    // ...
  }
}
```

#### 更新後
```json
"contentMapping": {
  "drugGroups": {
    "ARB": "content/drug_evolution/evolution_models/cardiovascular/ARB_evolution_model.md",
    "PPI": "content/drug_evolution/evolution_models/gastrointestinal/PPI_evolution_model.md",
    "スタチン": "content/drug_evolution/evolution_models/cardiovascular/statin_evolution_model.md",
    "SGLT2阻害薬": "content/drug_evolution/prescription_patterns/SGLT2_prescription_reality.md",
    "β遮断薬": "content/drug_evolution/evolution_models/cardiovascular/beta_blocker_evolution_model.md",
    "ACE阻害薬": "content/drug_evolution/evolution_models/cardiovascular/ACE_inhibitor_evolution_model.md",
    "SSRI": "content/drug_evolution/evolution_models/psychotropic/SSRI_evolution_model.md",
    "利尿薬": "content/drug_evolution/evolution_models/cardiovascular/diuretics_evolution_model.md"
  },
  "htmlCards": {
    "ジゴキシン": "content/study_guides/memory_tools/digoxin_kokushi_card.html",
    "バンコマイシン": "content/study_guides/memory_tools/vancomycin_exam_memory_card.html"
  },
  "stories": {
    "ペニシリン": "content/drug_stories/discovery_legends/01_penicillin/01_penicillin_story_pure.md",
    "アスピリン": "content/drug_stories/discovery_legends/05_aspirin/05_aspirin_chronicles.md",
    "インスリン": "content/drug_stories/development_dramas/02_insulin/02_insulin_story_pure.md"
  }
}
```

### 2.2 新規セクションの追加

```json
"contentPaths": {
  "drugs": "content/drugs",
  "drugEvolution": "content/drug_evolution",
  "drugStories": "content/drug_stories",
  "studyGuides": "content/study_guides"
},
"excludePaths": [
  "content/_resources",
  "content/_system",
  "content/drug_database_originated"
],
"evolutionSubPaths": {
  "models": "evolution_models",
  "comparisons": "comparative_analyses",
  "prescriptions": "prescription_patterns",
  "ecosystems": "clinical_ecosystems"
}
```

## 3. convert_pharmadx.js 詳細更新内容

### 3.1 パス参照の更新（行番号付き）

```javascript
// 80行目
// 変更前: const allMdFiles = this.getFiles('../content/drug_database', '.md');
// 変更後:
const allMdFiles = [
    ...this.getFiles('../content/drugs', '.md'),
    ...this.getFiles('../content/drug_evolution', '.md')
].filter(file => !file.includes('/_'));

// 100行目
// 変更前: const htmlCardFiles = this.getFiles('../content/study_tools', '.html');
// 変更後:
const htmlCardFiles = this.getFiles('../content/study_guides/memory_tools', '.html');

// 108行目
// 変更前: const storyFiles = this.getFiles('../content/stories', '.md');
// 変更後:
const storyFiles = this.getFiles('../content/drug_stories', '.md');
```

### 3.2 新規メソッドの追加

```javascript
/**
 * 新構造：drugs/ディレクトリの処理
 */
async processDrugs() {
    const drugsPath = '../content/drugs';
    const categories = fs.readdirSync(drugsPath)
        .filter(cat => !cat.startsWith('_'));
    
    for (const category of categories) {
        const categoryPath = path.join(drugsPath, category);
        const subcategories = fs.readdirSync(categoryPath);
        
        for (const subcat of subcategories) {
            const subcatPath = path.join(categoryPath, subcat);
            const drugFiles = fs.readdirSync(subcatPath)
                .filter(file => file.endsWith('.md'));
            
            for (const file of drugFiles) {
                const filePath = path.join(subcatPath, file);
                const content = fs.readFileSync(filePath, 'utf8');
                // 既存の処理ロジックを適用
                this.processIndividualDrug(content, filePath);
            }
        }
    }
}

/**
 * 新構造：drug_evolution/ディレクトリの処理
 */
async processDrugEvolution() {
    const evolutionPath = '../content/drug_evolution';
    const subDirs = ['evolution_models', 'comparative_analyses', 
                     'prescription_patterns', 'clinical_ecosystems'];
    
    for (const subDir of subDirs) {
        const dirPath = path.join(evolutionPath, subDir);
        if (fs.existsSync(dirPath)) {
            const files = this.getFiles(dirPath, '.md');
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                this.processDrugGroupModel(content, file);
            }
        }
    }
}
```

### 3.3 getFiles関数の更新（アンダースコア除外）

```javascript
// 714行目から
getFiles(dir, extension) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        // アンダースコアで始まるディレクトリを除外
        if (entry.isDirectory() && !entry.name.startsWith('_')) {
            const fullPath = path.join(dir, entry.name);
            files.push(...this.getFiles(fullPath, extension));
        } else if (entry.isFile() && entry.name.endsWith(extension)) {
            files.push(path.join(dir, entry.name));
        }
    }
    
    return files;
}
```

## 4. build.sh 詳細更新内容

### 4.1 統計生成パスの更新（39-45行目）

```bash
# Phase 1: コンテンツ統計
echo "📊 Phase 1: コンテンツ統計生成..."

# 新構造に対応した統計
stories_count=$(find ../content/drug_stories -name "*.md" 2>/dev/null | wc -l || echo "0")
drugs_count=$(find ../content/drugs -name "*.md" 2>/dev/null | wc -l || echo "0")
evolution_count=$(find ../content/drug_evolution -name "*.md" 2>/dev/null | wc -l || echo "0")
study_guides_count=$(find ../content/study_guides -name "*.html" -o -name "*.md" 2>/dev/null | wc -l || echo "0")

echo "   ストーリー: ${stories_count}ファイル"
echo "   個別薬剤: ${drugs_count}ファイル"
echo "   薬効群モデル: ${evolution_count}ファイル"
echo "   学習ガイド: ${study_guides_count}ファイル"
```

### 4.2 除外ディレクトリの追加

```bash
# アンダースコアで始まるディレクトリを除外してコピー
rsync -av --exclude='_*' --exclude='drug_database_originated' \
  ../content/ ../docs/content/
```

## 5. 実装手順

### 5.1 事前準備（5分）
1. 作業ディレクトリ確認
2. バックアップ作成
   ```bash
   cp config.json config.json.backup_20250630_1740
   cp build.sh build.sh.backup_20250630_1740
   ```

### 5.2 config.json更新（5分）
1. contentMappingセクションの全パス更新
2. contentPaths新規セクション追加
3. excludePathsとevolutionSubPaths追加
4. JSON構文検証

### 5.3 convert_pharmadx.js更新（10分）
1. 3箇所のパス参照更新（80, 100, 108行目）
2. processDrugs()メソッド追加
3. processDrugEvolution()メソッド追加
4. getFiles()にアンダースコア除外ロジック追加
5. analyzeExistingContent()メソッドの呼び出し修正

### 5.4 build.sh更新（5分）
1. 統計生成部分のパス更新
2. rsyncコマンドの除外オプション追加
3. スクリプト動作確認

### 5.5 検証（5分）
1. 各ファイルの構文チェック
2. テストビルド実行
3. エラーログ確認
4. 生成ファイル数の確認

## 6. リスク管理

### 6.1 想定リスク
1. **パス参照ミス**: 新旧パスの混在によるファイル未検出
2. **除外ロジック不備**: 必要なファイルまで除外
3. **階層構造の処理ミス**: drugs/の3階層構造の処理エラー

### 6.2 対策
1. **段階的実装**: 1つずつ更新して動作確認
2. **詳細なログ出力**: console.logで処理状況を可視化
3. **バックアップからの復旧**: 問題発生時は即座にロールバック

## 7. 成功基準

1. **ビルドエラーなし**: エラーなく完走すること
2. **ファイル数一致**: 想定どおりのHTMLファイル生成
3. **リンク整合性**: 404リンクがないこと
4. **パフォーマンス**: 5分以内にビルド完了

## 8. 実装後の確認事項

1. 生成されたHTMLファイルの内容確認
2. 内部リンクの動作確認
3. CSS/JSの参照確認
4. index.htmlの薬剤カード表示確認

---

**準備完了**: 本計画に基づき、慎重かつ確実に実装を進めます。