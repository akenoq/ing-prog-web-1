"use strict";

const route = require("./route");

const express = require("express");
const app = express();
const port = 5003;
app.listen(port);
console.log("Server on port: " + port);

route(app);
