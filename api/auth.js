var db = require("./db");
var hash = require("./hash");

var Auth = {};

// TODO:
Auth.findUser = function (login) {
    return db
        .one("SELECT password FROM users WHERE login = $1", login)
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            return error;
        });
};

Auth.createUser = function (login, password, name) {
    var encryptedPassword = hash.encrypt(password);

    return db
        .one(
            "INSERT INTO users(login, password, name) VALUES(${login}, ${encryptedPassword}, ${name}) RETURNING id",
            { login, encryptedPassword, name }
        )
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            return error;
        });
};

module.exports = Auth;
