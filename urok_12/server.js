"use strict";

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
    response.sendfile("static/index.html");
});

let users = [];

/**
 * Запрос на регистрацию
 * {"login": "Max", "password": "max123"}
 */
app.post('/api/register', function (request, response) {
    let dataString = "";
    request.on('data', (data) => {
        dataString += data;
    }).on('end', () => {

        let dataObj = JSON.parse(dataString);
        users.push(dataObj);

        console.log("_____________");
        console.log(users);

        response.end("USER ADDED");
    })
});

// function name() {}

// function () {}
// () => {}

let port = 5000;
app.listen(port);
console.log("server work on port " + port);

// for start `node server.js`
