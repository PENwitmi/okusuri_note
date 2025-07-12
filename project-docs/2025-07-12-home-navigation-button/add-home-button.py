#!/usr/bin/env python3
"""
ホームナビゲーションボタン追加スクリプト
作成日: 2025-07-12
用途: 薬剤HTMLページにトップページへ戻るボタンを追加
"""

import os
import re
import shutil
from datetime import datetime
from pathlib import Path

# 設定
BASE_DIR = Path("/Users/nishimototakashi/claude code/ai-team/code/okusuri_note")
PROJECT_DIR = BASE_DIR / "project-docs/2025-07-12-home-navigation-button"
BACKUP_DIR = PROJECT_DIR / "backups"
LOG_FILE = PROJECT_DIR / "update-log.txt"

# PCサイドバー用のHTML
SIDEBAR_HTML = """            
            <!-- Home Navigation Section -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">🏠 ナビゲーション</h3>
                <div class="sidebar-links">
                    <a href="../index.html" class="sidebar-link">
                        🏠 トップページへ戻る
                        <span class="category-desc">薬剤一覧・特集ページ</span>
                    </a>
                </div>
            </div>"""

# モバイルbottom-sheet用のHTML
BOTTOM_SHEET_HTML = """            
            <!-- Home Navigation Section -->
            <div class="bottom-sheet-section">
                <h3 class="bottom-sheet-title">🏠 ナビゲーション</h3>
                <div class="bottom-sheet-buttons">
                    <a href="../index.html" class="bottom-sheet-btn">
                        <span>🏠 トップページへ戻る</span>
                        <span class="arrow">→</span>
                    </a>
                </div>
            </div>"""

def create_backup_dir():
    """バックアップディレクトリを作成"""
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)

def log_message(message):
    """ログメッセージを記録"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}"
    print(log_entry)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(log_entry + "\n")

def backup_file(file_path):
    """ファイルのバックアップを作成"""
    backup_path = BACKUP_DIR / f"{file_path.name}.backup"
    shutil.copy2(file_path, backup_path)
    log_message(f"バックアップ作成: {backup_path}")

def add_home_navigation(file_path):
    """HTMLファイルにホームナビゲーションを追加"""
    log_message(f"処理開始: {file_path.name}")
    
    # ファイルを読み込む
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 既にホームナビゲーションが存在するかチェック
    if "Home Navigation Section" in content:
        log_message(f"  スキップ: 既にホームナビゲーションが存在します")
        return False
    
    # バックアップ作成
    backup_file(file_path)
    
    # PCサイドバーへの追加
    # パターン: 研修中ボタン -> </div> -> </div> -> 空行 -> ここに挿入
    sidebar_pattern = r'(button class="level-btn" data-level="3">研修中</button>\s*</div>\s*</div>\s*\n)(\s*<!-- Related Drugs Section -->)'
    
    if re.search(sidebar_pattern, content):
        content = re.sub(sidebar_pattern, r'\1' + SIDEBAR_HTML + r'\n\2', content)
        log_message(f"  サイドバーにホームナビゲーション追加")
    else:
        log_message(f"  警告: サイドバーパターンが見つかりません")
    
    # モバイルbottom-sheetへの追加
    # パターン: 研修中ボタン（bottom-sheet版） -> </div> -> </div> -> 空行 -> ここに挿入
    bottom_pattern = r'(👨‍⚕️ 研修中</span>\s*<span class="arrow">→</span>\s*</button>\s*</div>\s*</div>\s*\n)(\s*<!-- Related Drugs Section -->)'
    
    if re.search(bottom_pattern, content):
        content = re.sub(bottom_pattern, r'\1' + BOTTOM_SHEET_HTML + r'\n\2', content)
        log_message(f"  bottom-sheetにホームナビゲーション追加")
    else:
        log_message(f"  警告: bottom-sheetパターンが見つかりません")
    
    # ファイルに書き戻す
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    log_message(f"  完了: {file_path.name}")
    return True

def main():
    """メイン処理"""
    create_backup_dir()
    
    # ログ開始
    log_message("=== ホームボタン追加スクリプト実行開始 ===")
    
    # 処理済みファイルのリスト
    processed_files = ["metformin.html", "metformin-v3.html", "_template-v3.html"]
    
    # drugs-v3/ディレクトリのファイルを処理
    drugs_v3_dir = BASE_DIR / "docs/drugs-v3"
    updated_count = 0
    
    log_message("\n=== drugs-v3/ディレクトリの処理 ===")
    
    for file_path in sorted(drugs_v3_dir.glob("*.html")):
        if file_path.name not in processed_files:
            if add_home_navigation(file_path):
                updated_count += 1
    
    log_message(f"\n=== 処理完了 ===")
    log_message(f"更新されたファイル数: {updated_count}")
    log_message(f"ログファイル: {LOG_FILE}")
    log_message(f"バックアップ: {BACKUP_DIR}")

if __name__ == "__main__":
    main()