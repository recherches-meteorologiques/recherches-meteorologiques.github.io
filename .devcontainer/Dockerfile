FROM debian:stable-slim

WORKDIR /app

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
	curl \
	lsb-release \
	git \
	unzip

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
	apt-get install -y nodejs

RUN curl -fsSL https://bun.sh/install | bash

CMD ["bash"]