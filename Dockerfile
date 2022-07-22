FROM node:16.14

COPY . .

EXPOSE 8080

CMD ["npm","run","start:dev"]