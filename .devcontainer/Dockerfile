FROM debian:stable-slim

WORKDIR /app

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    lsb-release \
    git \
    unzip \
    openssh-client \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs

# Установка Bun от root
RUN curl -fsSL https://bun.sh/install | bash

# Создание пользователя node
RUN useradd -ms /bin/bash node && \
    mkdir -p /home/node/.ssh && \
    chown -R node:node /home/node/.ssh && \
    chmod 700 /home/node/.ssh

# Копирование Bun в домашнюю директорию пользователя node
RUN cp -r /root/.bun /home/node/ && \
    chown -R node:node /home/node/.bun

# Настройка .bashrc для пользователя node
RUN echo 'export PATH="$PATH:/home/node/.bun/bin"' >> /home/node/.bashrc && \
    echo 'export BUN_INSTALL="/home/node/.bun"' >> /home/node/.bashrc && \
    chown node:node /home/node/.bashrc

USER node

CMD ["bash"]