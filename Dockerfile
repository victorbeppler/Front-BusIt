FROM node:16-alpine

WORKDIR /home/beppler/git/Front-BusIt/

RUN yarn i

COPY . .

EXPOSE 3000

CMD ["yarn","start"]

