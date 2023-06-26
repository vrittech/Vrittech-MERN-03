# Docker File for node js application

FROM node:16-alpine

# Working directory of our application

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

RUN npm install -g pnpm

COPY . .

EXPOSE 8082

CMD ["pnpm","start"]