FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

EXPOSE 8080
CMD serve -s dist -l 8080
