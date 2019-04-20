"use strict";

const express = require("express");
const app = express();

const port = 5000;
app.listen(port);

console.log("Server on port: " + port);

const params = {
    database: "postgres",
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
};

const pg = require("pg");

function createNewClient() {
    return new pg.Client({
        user: params.user,
        host: params.host,
        database: params.database,
        password: params.password,
        port: params.port,
    });
}

function makeQuery(query, arr, callback) {
    const client = createNewClient();
    client.connect();

    client.query(query, arr, (err, res) => {
        client.end();
        callback(res.rows);
    });
}

app.get('/api/adduser', function(request, response) {
    const dict = request.query;

    const name = dict["name"] + "";
    const age = dict["age"] + "";

    const query = " INSERT INTO pupil (pupil_name, pupil_age) VALUES($1, $2); ";
    const arr = [
        name,
        age
    ];
    makeQuery(query, arr, (ansArr) => {
        response.end("ADD_USER_OK");
    });
});

app.get('/api/getusers', function(request, response) {
    const query = " SELECT * FROM pupil ORDER BY pupil_age ASC; ";
    const arr = [];
    makeQuery(query, arr, (ansArr) => {
        const s = JSON.stringify(ansArr);
        response.end(s);
    });
});

app.get('/api/getnumber', function(request, response) {
    const query = " SELECT COUNT(*) FROM pupil; ";
    const arr = [];
    makeQuery(query, arr, (ansArr) => {
        const s = ansArr[0].count + "";
        response.end(s);
    });
});
