# PharmaDx ビルドシステム更新計画

**作成日**: 2025-06-30 17:03  
**作成者**: CEO  
**目的**: 新ディレクトリ構造に対応するビルドシステムの更新

## 1. 影響分析サマリー

### 1.1 影響を受けるコンポーネント
1. **tools/config.json**: パス定義の全面更新必要
2. **tools/convert_pharmadx.js**: パス解決ロジックの修正
3. **tools/build.sh**: 除外ディレクトリの追加
4. **内部リンク**: 相対パスの大規模更新

### 1.2 影響度評価
- **高影響**: config.jsonのcontentPaths設定
- **中影響**: 変換スクリプトのディレクトリ走査ロジック
- **低影響**: ビルドスクリプトのコピー処理

## 2. config.json 更新内容

### 2.1 現在の構造
```json
{
  "contentPaths": {
    "stories": "content/stories",
    "drugDatabase": "content/drug_database",
    "studyTools": "content/study_tools",
    "resources": "content/resources"
  }
}
```

### 2.2 新構造への更新
```json
{
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
}
```

### 2.3 薬剤カテゴリマッピング追加
```json
{
  "drugCategories": {
    "cardiovascular": {
      "displayName": "循環器系",
      "subcategories": {
        "ace_inhibitors": "ACE阻害薬",
        "arbs": "ARB",
        "beta_blockers": "β遮断薬",
        "diuretics": "利尿薬",
        "statins": "スタチン",
        "anticoagulants": "抗凝固薬",
        "others": "その他"
      }
    },
    "gastrointestinal": {
      "displayName": "消化器系",
      "subcategories": {
        "ppis": "プロトンポンプ阻害薬",
        "h2_blockers": "H2受容体拮抗薬"
      }
    },
    "endocrine": {
      "displayName": "内分泌系",
      "subcategories": {
        "sglt2_inhibitors": "SGLT2阻害薬",
        "biguanides": "ビグアナイド"
      }
    }
  }
}
```

## 3. convert_pharmadx.js 更新内容

### 3.1 ディレクトリ走査の更新

#### 現在のコード
```javascript
function processDrugDatabase() {
  const drugDbPath = path.join(config.contentPaths.drugDatabase);
  const categories = fs.readdirSync(drugDbPath);
  // ...
}
```

#### 更新後のコード
```javascript
function processDrugs() {
  const drugsPath = path.join(config.contentPaths.drugs);
  const categories = fs.readdirSync(drugsPath)
    .filter(cat => !cat.startsWith('_')); // アンダースコア除外
  
  categories.forEach(category => {
    const categoryPath = path.join(drugsPath, category);
    const subcategories = fs.readdirSync(categoryPath);
    
    subcategories.forEach(subcat => {
      const subcatPath = path.join(categoryPath, subcat);
      const drugFiles = fs.readdirSync(subcatPath)
        .filter(file => file.endsWith('.md'));
      // 処理継続
    });
  });
}

function processDrugEvolution() {
  const evolutionPath = path.join(config.contentPaths.drugEvolution);
  const subPaths = config.evolutionSubPaths;
  
  Object.keys(subPaths).forEach(key => {
    const dirPath = path.join(evolutionPath, subPaths[key]);
    processEvolutionContent(dirPath, key);
  });
}
```

### 3.2 パス解決関数の追加

```javascript
// 新しいヘルパー関数
function resolveDrugPath(drugName, category, subcategory) {
  return path.join(
    config.contentPaths.drugs,
    category,
    subcategory,
    `${drugName}.md`
  );
}

function resolveEvolutionPath(modelName, type) {
  const subPath = config.evolutionSubPaths[type] || 'evolution_models';
  return path.join(
    config.contentPaths.drugEvolution,
    subPath,
    `${modelName}.md`
  );
}
```

### 3.3 リンク更新ロジック

```javascript
function updateInternalLinks(content, currentPath) {
  // 旧パス形式を新パス形式に変換
  const linkPatterns = [
    {
      // drug_database/category/drug.md → drugs/category/subcat/drug.md
      pattern: /\[([^\]]+)\]\(\.\.\/drug_database\/([^\/]+)\/([^)]+)\)/g,
      replacement: (match, text, category, file) => {
        const drugName = file.replace('.md', '');
        const subcat = findSubcategory(drugName, category);
        return `[${text}](../../drugs/${category}/${subcat}/${file})`;
      }
    },
    {
      // evolution_model.md → drug_evolution/evolution_models/...
      pattern: /\[([^\]]+)\]\([^)]*evolution_model\.md\)/g,
      replacement: (match, text, path) => {
        // 適切なパスに変換
        return updateEvolutionLink(match, text, path);
      }
    }
  ];
  
  let updatedContent = content;
  linkPatterns.forEach(({pattern, replacement}) => {
    updatedContent = updatedContent.replace(pattern, replacement);
  });
  
  return updatedContent;
}
```

## 4. build.sh 更新内容

### 4.1 除外ディレクトリの追加

#### 現在のスクリプト
```bash
# コンテンツのコピー
cp -r ../content/* ../docs/content/
```

#### 更新後のスクリプト
```bash
# アンダースコアで始まるディレクトリを除外してコピー
rsync -av --exclude='_*' --exclude='drug_database_originated' \
  ../content/ ../docs/content/

# または find と cp を組み合わせ
find ../content -type d -name '_*' -prune -o \
  -type d -name 'drug_database_originated' -prune -o \
  -type f -print0 | xargs -0 cp --parents -t ../docs/
```

### 4.2 ビルド前検証の追加

```bash
# ビルド前にディレクトリ構造を検証
validate_structure() {
  local required_dirs=(
    "content/drugs"
    "content/drug_evolution"
    "content/drug_stories"
    "content/study_guides"
  )
  
  for dir in "${required_dirs[@]}"; do
    if [ ! -d "../$dir" ]; then
      echo "Error: Required directory $dir not found"
      exit 1
    fi
  done
  
  echo "Directory structure validated ✓"
}

# メイン処理の前に実行
validate_structure
```

## 5. 段階的実装計画

### 5.1 Phase 1: 準備（リスク: 低）
1. config.jsonのバックアップ作成
2. 新しい設定項目の追加（既存を残したまま）
3. ヘルパー関数の追加（既存コードに影響なし）

### 5.2 Phase 2: 並行実装（リスク: 中）
1. 新旧両方のパスをサポートする移行モード実装
2. フラグによる切り替え機能
```javascript
const USE_NEW_STRUCTURE = process.env.NEW_STRUCTURE || false;
const contentPaths = USE_NEW_STRUCTURE ? 
  config.newContentPaths : config.contentPaths;
```

### 5.3 Phase 3: 切り替え（リスク: 高）
1. 新構造への完全移行
2. 旧コードの削除
3. 最終テストと検証

## 6. テスト計画

### 6.1 単体テスト
```javascript
// test/path-resolution.test.js
describe('Path Resolution', () => {
  test('resolveDrugPath correctly builds path', () => {
    const path = resolveDrugPath('enalapril', 'cardiovascular', 'ace_inhibitors');
    expect(path).toBe('content/drugs/cardiovascular/ace_inhibitors/enalapril.md');
  });
});
```

### 6.2 統合テスト
1. **ビルド成功テスト**: エラーなく完走
2. **ファイル数一致テスト**: 入力と出力のファイル数
3. **リンク整合性テスト**: 404リンクがないこと
4. **コンテンツ品質テスト**: HTMLの妥当性

### 6.3 回帰テスト
- 既存の公開サイトとの差分比較
- 重要ページの目視確認

## 7. ロールバック計画

### 7.1 即時ロールバック手順
```bash
# 1. 現在の設定をバックアップ
cp tools/config.json tools/config.json.new

# 2. 旧設定を復元
cp tools/config.json.backup tools/config.json

# 3. 旧ディレクトリ構造を復元
rm -rf content/
cp -r _old_files/backup_20250630_1700/content/ ./

# 4. ビルド再実行
cd tools && ./build.sh
```

### 7.2 部分的ロールバック
- 特定のディレクトリのみ旧構造に戻す
- config.jsonで混在モードをサポート

## 8. パフォーマンス最適化

### 8.1 並列処理の導入
```javascript
// 各カテゴリを並列処理
const promises = categories.map(category => 
  processCategory(category)
);
await Promise.all(promises);
```

### 8.2 キャッシュの活用
```javascript
// 変換済みコンテンツのキャッシュ
const cache = new Map();
function getCachedOrProcess(filePath) {
  if (cache.has(filePath)) {
    return cache.get(filePath);
  }
  const result = processFile(filePath);
  cache.set(filePath, result);
  return result;
}
```

## 9. 監視とアラート

### 9.1 ビルド監視項目
- ビルド時間（閾値: 5分）
- エラー数（閾値: 0）
- 警告数（閾値: 10）
- 出力ファイル数（期待値との差分）

### 9.2 品質チェック
```bash
# ビルド後の自動チェック
check_build_quality() {
  local error_count=$(grep -c "ERROR" build.log)
  local warning_count=$(grep -c "WARNING" build.log)
  local file_count=$(find ../docs/generated -name "*.html" | wc -l)
  
  echo "Build Quality Report:"
  echo "- Errors: $error_count"
  echo "- Warnings: $warning_count"
  echo "- Generated files: $file_count"
  
  if [ $error_count -gt 0 ]; then
    echo "Build failed quality check!"
    exit 1
  fi
}
```

## 10. 長期的な改善提案

### 10.1 設定の外部化
- 環境変数による設定オーバーライド
- 複数環境のサポート（開発/本番）

### 10.2 プラグインアーキテクチャ
- コンテンツタイプごとのプロセッサー
- カスタム変換ルールの追加が容易

### 10.3 自動化の強化
- ディレクトリ構造の自動検証
- リンクチェッカーの統合
- 変更検知による差分ビルド

## 11. 結論

この更新計画により、ビルドシステムは新しいディレクトリ構造に完全対応し、以下を実現します：

1. **保守性向上**: 明確な設定と処理フロー
2. **拡張性確保**: 300薬剤への対応準備完了
3. **品質保証**: 自動検証とテストの充実
4. **開発効率**: エラーの早期発見と修正

段階的実装とテストにより、リスクを最小化しながら確実な移行を実現します。