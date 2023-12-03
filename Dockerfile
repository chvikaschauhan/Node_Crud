# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /SERVER
COPY . .
RUN yarn install --production
CMD ["node", "dist/app.js"]
EXPOSE 8002