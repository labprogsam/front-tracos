FROM node:16.15.1 as build

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:stable

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .

# Config nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d


ENTRYPOINT ["nginx", "-g", "daemon off;"]