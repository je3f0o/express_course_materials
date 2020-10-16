/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : user_api.js
* Created at  : 2020-10-16
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

const {Router} = require("express");

const router = new Router();

router.get("/user/:id", (req, res) => {
    res.set("Hello-header", "blablabla");
    res.send(`User requested id: ${req.params.id}`);
});

router.post("/user", (req, res) => {
    res.sendStatus(201); // Created
});

router.put("/user/:id", (req, res) => {
    res.sendStatus(200); // OK
});

router.delete("/user/:id", (req, res) => {
    res.sendStatus(200); // OK
});

module.exports = router;
