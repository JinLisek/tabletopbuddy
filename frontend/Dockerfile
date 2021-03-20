FROM node:15.12-alpine

USER node:node
RUN mkdir /home/node/dependencies
RUN mkdir /home/node/dependencies/app

WORKDIR /home/node/dependencies
COPY --chown=node:node ["package.json", "./"]

RUN npm install
# ENV NODE_PATH /home/node/dependencies/node_modules:$NODE_PATH
ENV PATH /home/node/dependencies/node_modules/.bin:$PATH

WORKDIR /home/node/dependencies/app

EXPOSE 3000

COPY . ./

CMD ["npm", "start"]
