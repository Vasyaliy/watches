FROM node:14

RUN npm install -g serve

WORKDIR /app

COPY package.json ./

RUN npm cache clean --force
RUN npm install

COPY . .

RUN npm run build
CMD serve -s dist -l 8080
