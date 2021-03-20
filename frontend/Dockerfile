FROM node:14.16.0-buster-slim

USER node
RUN mkdir /home/node/app
# RUN mkdir /home/node/dependencies/app

WORKDIR /home/node/app
COPY --chown=node ["package.json", "./"]

RUN npm install
# ENV NODE_PATH /home/node/dependencies/node_modules:$NODE_PATH
ENV PATH /home/node/app/node_modules/.bin:$PATH

WORKDIR /home/node/app

EXPOSE 3000

COPY . ./

CMD ["npm", "start"]
