FROM node:18-bookworm

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY dist/ /usr/share/nginx/html
