FROM node:lts-alpine

# устанавливаем простой HTTP-сервер для статики
RUN npm install -g serve

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог '>
COPY . .

# собираем приложение для production с минификацией
RUN npm run build
CMD serve -s dist -l 8080