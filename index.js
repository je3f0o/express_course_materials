/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2020-09-11
* Updated at  : 2020-10-06
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

const path               = require("path");
const express            = require("express");
const app                = express();
const {port, public_dir} = require("./config");

app.get('/', function (req, res) {
    const filepath = path.join(public_dir, "index.html");
    res.sendFile(filepath);
});

app.listen(port, function () {
    console.log(`Hello expressjs app listening at http://0.0.0.0:${port}`);
});
