FROM node:latest
WORKDIR /reactapp
ADD ./src .
RUN npm install
CMD ["node", "index.js"]
