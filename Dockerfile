# syntax=docker/dockerfile:1

# FROM node:18-alpine
# WORKDIR /SERVER
# COPY . .
# RUN yarn install --production
# CMD ["node", "dist/app.js"]
# EXPOSE 8002

FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm install && npx tsc
EXPOSE 8002
CMD node dist/app.js
