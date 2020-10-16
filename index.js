/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2020-09-11
* Updated at  : 2020-10-16
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
const app           = express();
const {port}        = require("./config");
const route_handler = require("./server/router");

route_handler(app);

app.use(express.static("public"));

app.listen(port, function () {
    console.log(`Hello expressjs app listening at http://0.0.0.0:${port}`);
});
