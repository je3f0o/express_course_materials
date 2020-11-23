/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2020-09-11
* Updated at  : 2020-11-24
* Author      : jeefo
* Purpose     :
* Description :
* Reference   :
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.*/
// ignore:start
"use strict";

/* globals*/
/* exported*/

// ignore:end

const express       = require("express");
const body_parser   = require("body-parser");
const app           = express();
const config        = require("./config");
const route_handler = require("./server/router");
const {port, is_production} = config;

app.disable("x-powered-by");

// middlewares...
app.use("/api/v1/", body_parser.json({limit: "20mb"}));
app.use("/api/v1/", body_parser.urlencoded({extended: true}));

if (! is_production) {
    const morgan = require("morgan");
    app.use(morgan("short"));
}

// routes...
route_handler(app);

// static files
app.use(express.static("public"));

app.listen(port, function () {
    console.log(`Hello expressjs app listening at http://0.0.0.0:${port}`);
});
