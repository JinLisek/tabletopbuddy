FROM node:14.16.0-buster-slim

RUN apt-get update && apt-get install sudo git -y
RUN usermod -aG sudo node

USER node

ENV FRONTEND_PATH=/home/node/app/frontend

RUN mkdir -p $FRONTEND_PATH
WORKDIR $FRONTEND_PATH

COPY --chown=node ["package.json", "./"]

RUN npm install
ENV PATH $FRONTEND_PATH/node_modules/.bin:$PATH

EXPOSE 3000

COPY --chown=node . ./

CMD ["npm", "start"]
