/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2021-09-03
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

module.exports = function socket_server_handler (io_server) {

    io_server.on("connection", function (socket) {
        console.log("Hello client!");

        socket.on("disconnect", (reason) => {
            console.log(`Socket client disconnected reason: ${reason}`);
        });

        socket.on("location_changed", coordinate => {
            console.log(`locaiton changed: (${coordinate})`);
        });
    });

};