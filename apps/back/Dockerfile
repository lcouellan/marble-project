FROM node:10.2-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./src/    ./src/

EXPOSE 8070

CMD [ "yarn", "start" ]