FROM node:16.14

COPY . .

RUN npm install -g npm@8.15.0

RUN yarn install

EXPOSE 3000

CMD ["yarn","start:dev"]
