FROM node:latest

WORKDIR /app

ADD . /app

RUN yarn install

ENTRYPOINT [ "npm", "run"]
CMD ["start"]



