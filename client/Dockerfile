FROM node:lts-alpine

WORKDIR /app
COPY package.json package.json
RUN npm i
COPY public public
COPY src src
COPY tsconfig.json tsconfig.json

ENV WDS_SOCKET_PORT 0
EXPOSE 3000

CMD ["npm", "run","start"]