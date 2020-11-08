var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require("express-session");

require("dotenv").config();

var indexRouter = require("./routes/index");

var app = express();

var corrsOptions = {
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin:
        process.env.NODE_ENV === "production" ? "" : "http://localhost:8000",
    credentials: true,
};

app.use(logger("dev"));

app.use(
    session({
        key: "user_sid",
        secret: process.env.COOKIES_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            expires: 600000,
        },
    })
);
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors(corrsOptions));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: "Api is not found, plese, write to horse" });
});

module.exports = app;
