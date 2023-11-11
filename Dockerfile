FROM node:18-alpine as base
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx

COPY --from=base app/dist/list-compras /usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t app-list .

