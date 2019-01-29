Инициализация приложения
`npm init --yes`

Установка express для обработки http-запросов
`npm install express --save`

Создаем `server.js`
```js
"use strict";

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
    response.sendfile("static/index.html");
});

let port = 5000;
app.listen(port);
console.log("server work on port " + port)
```

Запускаем сервер
`node server.js`

##### Для тестирования запросов
1) Установите Postman для браузера: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=ru

2) Метод запроса выбрать `POST`

3) Указать адрес `http://localhost:5000/api/register`

4) Во вкладке `Body` выбрать `raw`

5) Чуть правее из списка выбрать `JSON(application/json)`, чтобы перед отправкой проверялась корректность вашей json-строки

6) `{"login":"admin", "password":123}` или `{"login":"admin", "password":"admin123"}`

7) Нажимаем `Send`

##### Запуск дома проектов с урока
1) Скачиваете проект

2) Установка зависимостей `npm install` => появляется папка node_modules

3) И запускаем сервер `node server.js`

