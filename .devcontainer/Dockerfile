# Node.js 18 (LTS) の公式イメージを使用する　ファイルサイズ削減のためslim版使用
FROM node:18-slim

# タイムゾーンを東京に設定 (ターミナルでの日時表示などに影響)
ENV TZ=Asia/Tokyo

# OSパッケージをアップデートし、合わせてgit、sudoもインストール（※slim版にはnode.jsが入っていない）
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git sudo

# pnpmをインストール
RUN npm install -g pnpm

# 一般ユーザーを作成し、sudoを許可
# from <https://github.com/csutter/devcontainer-templates>
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# これ以降のコマンドは一般ユーザーで実行
USER node

# （一般ユーザーで実行するコマンドがあればここに記載）

