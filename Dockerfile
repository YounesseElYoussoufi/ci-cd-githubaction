FROM node:20
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD ["yarn","run","start"]
