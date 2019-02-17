"use strict";

const express = require("express");
const fs = require("fs");

const app = express();

const port = 5005;
app.listen(port);
console.log("Port: " + port);

const peopleArr = [];

app.get('/', (request, response) => {
    fs.readFile('page.html', 'utf8', function(err, content) {
        response.end(content);
    });
});

app.get('/getfile/code', (request, response) => {
    fs.readFile('code.js', 'utf8', function(err, content) {
        response.end(content);
    });
});

app.post('/people/add', (request, response) => {
    const buffer = [];
    request.on('data', (data) => {
        buffer.push(data);
    }).on('end', () => {
        const bodyString = buffer.join("");
        const bodyObj = JSON.parse(bodyString);
        peopleArr.push(bodyObj);
        response.end(JSON.stringify({
            answer: "OK"
        }));
    });
});

app.get('/people/get/all', (request, response) => {
    response.end(JSON.stringify(peopleArr));
});
