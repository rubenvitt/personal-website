FROM node:14-slim as development

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN yarn build

FROM node:14-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
COPY --from=development /usr/src/app/dist ./dist/
CMD ["node", "dist/main"]