FROM node:14.4

COPY . .

EXPOSE 8080

CMD ["npm","start:dev"]