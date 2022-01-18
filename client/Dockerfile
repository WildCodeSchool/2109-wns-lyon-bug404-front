FROM node


WORKDIR /client
COPY package.json ./
RUN npm i
COPY src ./src 
COPY public ./public
COPY tsconfig.json ./tsconfig.json

CMD ["npm", "run", "start"]
EXPOSE 3000
