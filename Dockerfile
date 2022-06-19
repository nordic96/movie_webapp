FROM node:16.0-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.15

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build/ /usr/share/nginx/html

EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
