FROM debian:stable-slim

WORKDIR /app

RUN apt update && apt-get install -y \
    curl \
    lsb-release \
    git \
    unzip

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

RUN curl -fsSL https://bun.sh/install | bash

CMD ["bash"]