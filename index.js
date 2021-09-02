/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2020-09-11
* Updated at  : 2021-09-03
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

const http              = require("http");
const express           = require("express");
const socket_io         = require("socket.io");
const body_parser       = require("body-parser");
const route_handler     = require("./server/router");
const socket_io_handler = require("./server/socket_io");
const {
    port,
    is_production
} = require("./config");

const app       = express();
const server    = http.Server(app);
const io_server = socket_io(server);

// Socket.io handler
socket_io_handler(io_server);

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

server.listen(port, function () {
    console.log(`Hello expressjs app listening at http://0.0.0.0:${port}`);
    console.log(`And Socket.IO server too...`);
});
