FROM node:lts-alpine

WORKDIR /app
COPY package.json package.json
RUN npm i
COPY src src
COPY tsconfig.json tsconfig.json

ENV SERVER=mysql
ENV DB_HOST=localhost
ENV DB=db
ENV DB_USER=root
ENV DB_PASSWORD=password
ENV PORT=4000

CMD ["npm", "run","start"]