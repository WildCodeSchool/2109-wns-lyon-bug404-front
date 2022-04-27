FROM node:16.13.2-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY public public
COPY src src

CMD npm start