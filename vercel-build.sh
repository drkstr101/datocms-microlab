#!/usr/bin/env bash

npm install --global yarn @teambit/bvm && \
    export PATH=$PATH:$HOME/bin && \
    bvm install --force && \
    bit config set analytics_reporting false && \
    bit config set error_reporting false && \
    bit config set no_warnings true && \
    bit init --harmony && \
    bit install && \
    yarn next build
