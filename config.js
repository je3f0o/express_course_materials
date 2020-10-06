/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : config.js
* Created at  : 2020-10-06
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

const path     = require("path");
const base_dir = process.cwd();

exports.port       = process.env.NODE_PORT || 3000;
exports.root_dir   = base_dir;
exports.public_dir = path.join(base_dir, "public");
