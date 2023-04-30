FROM node:latest

WORKDIR /usr/app/backend
COPY ./backend/package.json /usr/app/backend
RUN npm install
COPY ./backend/ /usr/app/backend

RUN npm install -g nodemon
CMD nodemon "express/server.js" -L