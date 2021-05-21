FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/


ENV PATH=$PATH:$HOME/bin
RUN sudo apt update && sudo apt upgrade -y && \
    npm install --global yarn pnpm npm prettier eslint jest @teambit/bvm && \
    export PATH=$PATH:$HOME/bin && \
    bvm install && \
    bit config set analytics_reporting true && \
    bit config set error_reporting false && \
    bit config set no_warnings true && \
    bit init --harmony && \
    bit install && \
    bit build && \
    echo 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc
