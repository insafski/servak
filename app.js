require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const CronJob = require("cron").CronJob;

const { COOKIES_SECRET } = require("./configs/envs");
const user = require("./routes/user");
const loft = require("./routes/loft");
const { User, sequelize } = require("./database/models");
const { Op } = require("sequelize");

const app = express();

const corrsOptions = {
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin:
        process.env.NODE_ENV === "production" ? "*" : "http://localhost:8000",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(logger("dev"));

app.use(
    session({
        key: "user_sid",
        secret: COOKIES_SECRET,
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

app.use("/", user);
app.use("/loft/", loft);

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
    res.json({ error: "Some server error, plese, write to horse" });
});

const job = new CronJob("0 */1 * * * *", async function () {
    try {
        await sequelize.transaction(async (t) => {
            await User.destroy(
                {
                    where: {
                        status: "pending",
                        createdAt: {
                            [Op.lte]: new Date(new Date() - 10000 * 60),
                        },
                    },
                },
                { transaction: t }
            );
        });
    } catch (error) {
        console.log("Unconfirmed user delete: ", error);
    }
});
job.start();

module.exports = app;
