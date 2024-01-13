FROM node:latest
WORKDIR /app
ADD ./src /app
RUN npm install
EXPOSE 3000
CMD npm start
