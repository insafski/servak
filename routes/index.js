var express = require("express");
var authApi = require("../api/auth");
var hash = require("../api/hash");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({});
});

router.post("/signin", function (req, res) {
    var login = req.body.login;
    var password = req.body.password;

    // TODO: jwt
    if (login && password) {
        authApi
            .findUser(login)
            .then(function (data) {
                if (data.password) {
                    var decryptedPassword = hash.descrypt(data.password);

                    if (password === decryptedPassword) {
                        res.json({ auth: true });
                    } else {
                        res.json({
                            auth: false,
                            message: "Login or password incorrect",
                        });
                    }
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

router.post("/signup", function (req, res) {
    var login = req.body.login;
    var password = req.body.password;
    var name = req.body.name;

    if (login && password && name) {
        authApi
            .createUser(login, password, name)
            .then(function (data) {
                if (data.id) {
                    res.json({ signedup: true });
                } else {
                    res.json({
                        signedup: false,
                        message: "Something gone wrong",
                    });
                }
            })
            .catch(function () {
                res.json({ error: `Some server error` });
            });
    } else {
        res.json({ error: "I need at least some data, fucking damn" });
    }
});

router.delete("/auth", function (req, res) {
    if (req.session.loggedin) {
        req.session.destroy();
    }
});

module.exports = router;
