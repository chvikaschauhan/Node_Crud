"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cookie_parser_1 = require("cookie-parser");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var routes_js_1 = require("./postgres/routes/routes.js");
dotenv_1["default"].config();
//Connection to the dataBase
var app = (0, express_1["default"])();
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use((0, cookie_parser_1["default"])());
app.use('/api', routes_js_1["default"]);
app.get("/", function (req, res) {
    console.log("here it reached");
    res.status(200).send("hello2222");
});
var server = app.listen(8002, function () {
    console.log("server running", server.address());
});
