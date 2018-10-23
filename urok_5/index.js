"use strict";

let express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send("hello NODE");
});

app.get('/index', function (req, res) {
   res.sendfile('static/index.html');
});

// localhost:5555/summa/?a=5&b=7
app.get('/summa', function (req, res) {
   console.log(req.query);
   let body = '';
   req.on('data', (data) =>
       body += data
   ).on('end', () => {
        let summa = 0;
        let a = req.query.a.toString();
        let b = req.query.b.toString();
        console.log("Параметры запроса " + a + " " + b);
        res.end('summa = ' + summa);
   });
});

let port = process.env.PORT || 80;
app.listen(port);

console.log("server work on port = " + port);
