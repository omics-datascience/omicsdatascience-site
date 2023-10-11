FROM node:16-alpine3.18

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]