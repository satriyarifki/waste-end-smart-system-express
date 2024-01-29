var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const multer = require('multer');
const upload = multer();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var salesRouter = require("./routes/sales");
var authRouter = require("./routes/auth");
var writeoffRouter = require("./routes/writeoff");

var app = express();

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(upload.array());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/api/sales", salesRouter);
app.use("/auth", authRouter);
app.use("/api/write-off", writeoffRouter);

module.exports = app;
