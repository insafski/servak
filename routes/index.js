var express = require("express");
var authApi = require("../api/auth");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({});
});

/* Base auth */
router.post("/auth", function (req, res) {
    var login = req.body.login;
    var password = req.body.password;

    // TODO: jwt
    if (login && password) {
        authApi
            .findUser([login, password])
            .then(function (data) {
                if (data.id) {
                    res.json({ auth: true });
                } else {
                    res.json({ auth: false });
                }
            })
            .catch(function () {
                res.json({ error: "Some server error" });
            });
    } else {
        res.json({ error: "I need at least some data, fucking damn" });
    }
});

module.exports = router;
