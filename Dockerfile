FROM node:14-alpine as base

WORKDIR /code

COPY package*.json ./

FROM base as test
RUN npm install
COPY . .   
RUN npm run test

FROM base as coverage
RUN npm install
COPY . .   
RUN npm run coverage

FROM base as prod
RUN npm install --production
COPY . .
CMD ["npm","start"]