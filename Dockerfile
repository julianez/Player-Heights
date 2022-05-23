FROM node:14-alpine as base

WORKDIR /code

COPY package*.json ./

FROM base as prod
RUN npm install --production
COPY . .
CMD ["npm","start"]