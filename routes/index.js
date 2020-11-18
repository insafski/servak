var express = require("express");
var authApi = require("../api/auth");
var hash = require("../api/hash");
var jwt = require("../api/jwt");

var router = express.Router();

/* GET home page. */
router.get("/auth", (req, res, next) => {
    jwt().then((token) => {
        res.json({ token });
    });
});

//BASE AUTHORISATION
router.post("/signin", (req, res) => {
    const { login, password } = req.body;

    // TODO: jwt
    if (login && password) {
        authApi
            .findUser(login)
            .then(({ password }) => {
                if (password) {
                    const auth = hash.descrypt(password) === decryptedPassword;

                    res.json({ auth });
                } else {
                    res.json({ auth: false });
                }
            })
            .catch(() => res.json({ error: "Some server error" }));
    } else {
        res.json({ error: "I need at least some data, fucking damn" });
    }
});

// BASE UNAUTHORISATION
router.delete("/signin", (req, res) => {
    if (req.session.loggedin) {
        req.session.destroy();
        res.json({ signOut: true });
    } else {
        res.json({ error: "Error!" });
    }
});

// REGISTARTION USER
router.put("/signup", (req, res) => {
    const { login, password, name } = req.body;

    if (login && password && name) {
        const newUser = { login, password, name };
        authApi
            .createUser(newUser)
            .then(({ id }) => {
                res.json({ signedup: !!id });
            })
            .catch(() => res.json({ error: `Some server error` }));
    } else {
        res.json({ error: "I need at least some data, fucking damn" });
    }
});

// EDIT USER
router.post("/signup", (req, res) => {
    const { data } = req.body;

    if (data.login) {
        authApi
            .updateUser(data)
            .then(({ id }) => {
                res.json({ signedup: !!id });
            })
            .catch(() => res.json({ error: `Some server error` }));
    } else {
        res.json({ error: "I need at least some data, fucking damn" });
    }
});

// DELETE USER
router.delete("/signup", (req, res) => {
    const { login } = req.body;

    if (login) {
        authApi
            .deleteUser(login)
            .then(() => {
                res.json({
                    deleted: true,
                    message: "User account eas deleted",
                });
            })
            .catch(() => {
                res.json({
                    deleted: false,
                    error: "Error on delete user account",
                });
            });
    }
});

module.exports = router;
