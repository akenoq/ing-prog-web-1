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
    });

    request.on('end', () => {

        let dataObj = JSON.parse(dataString);

        // dataObj.login уже есть в массиве?
        let flag = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === dataObj.login) {
                flag += 1;
            }
        }

        if (flag === 0) {
            users.push(dataObj);
            response.end("USER ADDED");
        } else {
            response.end("USER ALREADY EXISTS");
        }

        console.log("_____________");
        console.log(users);
    })
});

app.post('/api/login', function (request, response) {
    let dataString = "";

    request.on('data', (data) => {
        dataString += data;
    });

    request.on('end', () => {
        let dataObj = JSON.parse(dataString);

        // проверяем пару логин/пароль
        let flag = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === dataObj.login &&
                users[i].password === dataObj.password) {
                flag += 1;
                break;
            }
        }

        // есть ли совпадение
        if (flag === 0) {
            response.end(JSON.stringify({
                status: "ERROR",
                message: "USER NOT FOUND"
            }))
        } else {
            response.end(JSON.stringify({
                status: "OK",
                authString: dataObj.login + '_' + dataObj.password
            }))
        }
    })
});

function getIndexUserByToken(userToken) {
    let userName = userToken.split('_')[0];
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === userName) {
            return i;
        }
    }
    return -1;
}

function getIndexUserByName(userName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === userName) {
            return i;
        }
    }
    return -1;
}

app.post('/api/post/create', (request, response) => {
    let dataString = "";

    request.on('data', (data) => {
        dataString += data;
    });

    request.on('end', () => {
        let dataObj = JSON.parse(dataString);
        let userToken = dataObj.authString;

        let index = getIndexUserByToken(userToken);

        console.log(index);
        console.log(dataObj);
        console.log(users[index].posts);
        
        if (index !== -1) {
            if (!users[index].posts) {
                users[index].posts = [];
            }

            users[index].posts.push({
                title: dataObj.title,
                text: dataObj.text
            })

            response.end(JSON.stringify({
                status: "OK",
                posts: users[index].posts
            }))
        } else {
            response.end(JSON.stringify({
                status: "ERROR"
            }))
        }
    })
});

/**
 * Запрос поста по имени юзера 
 * http://localhost:5000/api/post/get/Maxim
 */
app.get('/api/post/get/:username', (request, response) => {
    const username = request.params.username;
    let index = getIndexUserByName(username);
    if (index !== -1) {
        response.end(JSON.stringify(users[index].posts))
    } else {
        response.end(
            JSON.stringify({
                status: "ERROR",
                message: "User not found"
            })
        )
    }
});

// function name() {}

// function () {}
// () => {}

let port = 5000;
app.listen(port);
console.log("server work on port " + port);

// for start `node server.js`
