#!/bin/bash

echo "=== PharmaDex Git Worktree + Tmux 並列処理環境 ==="
echo ""
echo "4つのworktreeが作成されています："
echo "1. main - 薬学コンテンツ・ドキュメント管理"
echo "2. student-tools - 薬学生向けツール開発（最優先）"
echo "3. frontend - Webサイト UI開発"
echo "4. backend - API・データベース開発"
echo ""
echo "tmuxで4分割画面を作成します..."
echo ""

# tmuxセッション作成
tmux new-session -d -s pharma-dev

# 4分割画面の作成
tmux split-window -h -t pharma-dev
tmux split-window -v -t pharma-dev:0.0
tmux split-window -v -t pharma-dev:0.1

# 各ペインでworktreeに移動
tmux send-keys -t pharma-dev:0.0 "cd '/Users/nishimototakashi/claude code/ai-team/code/pharma_dex' && clear" C-m
tmux send-keys -t pharma-dev:0.1 "cd '/Users/nishimototakashi/claude code/ai-team/code/pharma_dex/worktrees/student-tools' && clear" C-m
tmux send-keys -t pharma-dev:0.2 "cd '/Users/nishimototakashi/claude code/ai-team/code/pharma_dex/worktrees/frontend' && clear" C-m
tmux send-keys -t pharma-dev:0.3 "cd '/Users/nishimototakashi/claude code/ai-team/code/pharma_dex/worktrees/backend' && clear" C-m

# 各ペインにブランチ情報を表示
tmux send-keys -t pharma-dev:0.0 "echo '=== コンテンツ管理 (main) ===' && git branch --show-current && echo ''" C-m
tmux send-keys -t pharma-dev:0.1 "echo '=== 薬学生向けツール開発 (feature/student-tools) 【最優先】 ===' && git branch --show-current && echo ''" C-m
tmux send-keys -t pharma-dev:0.2 "echo '=== フロントエンド開発 (feature/frontend) ===' && git branch --show-current && echo ''" C-m
tmux send-keys -t pharma-dev:0.3 "echo '=== バックエンド開発 (feature/backend) ===' && git branch --show-current && echo ''" C-m

# 使い方を表示
echo "準備完了！"
echo ""
echo "tmuxセッションに接続するには："
echo "  tmux attach-session -t pharma-dev"
echo ""
echo "各ペインで異なるClaude Codeを起動できます："
echo "  左上: claude \"5分サマリーの薬学生向け改修\""
echo "  右上: claude \"ARB vs ACE阻害薬の暗記カード作成【最優先】\""
echo "  左下: claude \"暗記カード表示UIの実装\""
echo "  右下: claude \"暗記カードAPIの実装\""
echo ""
echo "ペイン間の移動："
echo "  Ctrl-a + 矢印キー（カスタム設定による）"
echo ""
echo "セッションを終了："
echo "  tmux kill-session -t pharma-dev"