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

RUN curl -fsSL https://bun.sh/install | bash

# Create a non-root user
RUN useradd -ms /bin/bash node && \
    mkdir -p /home/node/.ssh && \
    chown -R node:node /home/node/.ssh && \
    chmod 700 /home/node/.ssh

USER node

CMD ["bash"]