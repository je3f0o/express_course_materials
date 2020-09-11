/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2020-09-11
* Updated at  : 2020-09-11
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

const express = require("express");
const app     = express();
const port    = process.env.NODE_PORT || 3000;

app.listen(port, function () {
    console.log(`Hello expressjs app listening at http://0.0.0.0:${port}`);
});
/*
app.get('/', (req, res) => {
    res.send('Hello World!');
});
*/





