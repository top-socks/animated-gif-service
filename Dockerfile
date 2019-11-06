FROM node:8-alpine

RUN apk update && apk upgrade

RUN mkdir /app
WORKDIR /app

COPY ./app/package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY app .

EXPOSE 8000
ENTRYPOINT ["node", "/app/index.js"]
