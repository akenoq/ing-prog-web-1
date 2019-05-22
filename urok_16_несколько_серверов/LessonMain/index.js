"use strict";

const request = require("request");

const express = require("express");
const app = express();
const port = 5005;
app.listen(port);
console.log("Server: " + port);

const headers = {};
headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
headers["Connection"] = "close";

function sendQuery(url, callback) {
    request.get({
        url: url,
        body: null,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}

let number = 5001;

app.get("/count/work", function(request, response) {
    if(number === 5001) {
        number = 5002;
    } else if(number === 5002) {
        number = 5003;
    } else if (number === 5003) {
        number = 5001;
    }

    const type = request.query["type"] + "";
    const x = request.query["x"] + "";
    const y = request.query["y"] + "";

    let url = "";

    if(type === "s") {
        url = "http://localhost:" + number + "/api/summa?a=" + x + "&b=" + y;
    }
    if(type === "r") {
        url = "http://localhost:" + number + "/api/raznost?a=" + x + "&b=" + y;
    }
    if(type === "p") {
        url = "http://localhost:" + number + "/api/proiz?a=" + x + "&b=" + y;
    }

    sendQuery(url, function(answer) {
        if(answer === null) {
            response.end("ERROR");
        } else {
            response.end("Result: " + answer);
        }
    });
});