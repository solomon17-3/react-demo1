FROM nginx:1.20
FROM node:1.18-alpine

SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

WORKDIR /data

ENV TZ=UTC

RUN apk update && \
  apk add --update --no-cache --virtual=.build-dependencies g++

# node commandをnodeからインストールする
COPY --from=node /usr/local/bin /usr/local/bin

# npm commandをnodeからインストールする
COPY --from=node /usr/local/lib /usr/local/lib

# yarn commandをnodeからインストールする
COPY --from=node /opt /opt

# nginx config file
COPY ./infra/docker/nginx/*.conf /etc/nginx/conf.d/
