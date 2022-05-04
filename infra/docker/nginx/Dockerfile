FROM nginx:1.20

WORKDIR /data

ENV TZ=UTC

# nginx config file
COPY ./infra/docker/nginx/*.conf /etc/nginx/conf.d/
