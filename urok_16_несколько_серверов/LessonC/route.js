"use strict";

const summa = require("./api/summa");
const raznost = require("./api/raznost");
const proiz = require("./api/proiz");

module.exports = function(app) {
    console.log("Start routing");

    app.get("/api/summa", function(request, response) {
        console.log(request.url);
        summa(request, response);
    });

    app.get("/api/raznost", function(request, response) {
        console.log(request.url);
        raznost(request, response);
    });

    app.get("/api/proiz", function(request, response) {
        console.log(request.url);
        proiz(request, response);
    });
}
