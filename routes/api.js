var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var courseRouter = require("./course");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/course/", courseRouter);

module.exports = app;