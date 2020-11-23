/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : user_api.js
* Created at  : 2020-10-16
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

const {Router} = require("express");
const router   = new Router();

const user = {username: "jaku", password: 123};

router.get("/user/:id", (req, res) => {
    res.set("Hello-header", "blablabla");
    res.send(`User requested id: ${req.params.id}`);
});

router.post("/user/register", (req, res) => {
    res.sendStatus(201); // Created
});

router.post("/user/login", (req, res) => {
    const {username, password} = req.body;
    if (! username || ! password) {
        return res.sendStatus(400);
    }

    if (username === user.username && password === user.password) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

router.put("/user/:id", (req, res) => {
    res.sendStatus(200); // OK
});

router.delete("/user/:id", (req, res) => {
    res.sendStatus(200); // OK
});

module.exports = router;
