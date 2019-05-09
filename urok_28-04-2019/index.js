"use strict";

const express = require("express");
const app = express();
const port = 5000;
app.listen(port);
console.log("Server port: " + port);

app.set("view engine", "hbs");

app.get("/page/testing", function(request, response) {
    const name = "Maxim Kolotovkin";
    const mail = "maxim.kolotovkin@yandex.ru";
    const code = "<h1>Привет</h1>";
    const arr = [
        {
            userName: "Дима",
            message: "Всем привет!",
        },
        {
            userName: "Александр",
            message: "Как у вас дела?",
        },
        {
            userName: "Катя",
            message: "Я рада вас видеть.",
        },
    ];

    response.render("myTest.hbs", {
        myName: name,
        myMail: mail,
        codeHtml: code,
        myArr: arr,
    });
});

app.get("/api/code/get", function(request, response) {
    response.sendfile("file.js");
});

const chatArr = [];

app.post("/api/insert", function(request, response) {
    const bodyArr = [];
    request.on('data', (data) => {
        bodyArr.push(data.toString());
    }).on('end', () => {
        const bodyString = bodyArr.join("");
        const obj = JSON.parse(bodyString);
        const chatElement = {
            userName: obj.userName,
            message: obj.message,
        };
        chatArr.push(chatElement);
        response.end(" Сообщение успешно добавлено ");
    });
});

app.get("/page/chat", function(request, response) {
    response.render("chat.hbs", {
        arr: chatArr,
    });
});

