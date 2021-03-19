FROM node:15.12-alpine

# ENV NODE_ENV=production
# RUN chown node:node /home/node/app

# ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . ./

CMD ["npm", "start"]
