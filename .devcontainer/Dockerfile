# Stage 1: Get Deno binary
FROM denoland/deno:bin AS deno
# Stage 2: Main development environment
FROM mcr.microsoft.com/devcontainers/base:debian
# Install Python 3 and pip
RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip3 install ipykernel --break-system-packages
# Copy Deno binary from Stage 1
COPY --from=deno /deno /usr/local/bin/deno
USER vscode
RUN curl -fsSL https://claude.ai/install.sh | bash