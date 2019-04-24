"use strict";

const express = require("express");
const fs = require("fs");

const app = express();
const port = 5000;
app.listen(port);

let count = 0;

app.get("/page/:pagename", function(request, response) {
    count++;
    console.log("Count: " + count + " " + request.url);

    response.header("Cache-Control", "max-age=120");

    const pagename = request.params.pagename + "";
    const fileName = "static/" + pagename;

    fs.readFile(fileName, 'utf8', function(err, content) {
        if(err) {
            response.end("   This file not found :(   ");
        } else {
            response.end(content);
        }
    });
});

app.get("/count/fact", function(request, response) {
    count++;
    console.log("Count: " + count + " " + request.url);

    let n = request.query["n"];
    n = parseInt(n);
    if(!n) n = 1;
    if(n <= 0) n = 1;

    let x = 1;
    for(let i = 1; i <= n; i++) x = x * i;

    response.header("Cache-Control", "max-age=120");

    response.end("alert(" + x + ");");
});





