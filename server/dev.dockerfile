FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY *.json ./

RUN npm i
COPY src src
COPY interface interface

CMD npm start