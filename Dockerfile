FROM node:16.14

RUN mkdir /app

COPY package*.json /app

WORKDIR /app

RUN npm install -g npm@8.15.0

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn","start"]


