FROM node:20-alpine

WORKDIR /app

COPY client/package.json .

RUN yarn install

COPY client/. .

RUN yarn run build

EXPOSE 5173

CMD [ "yarn", "run", "preview" ]