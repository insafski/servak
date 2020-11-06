var db = require("./db");

var Auth = {};

// TODO:
Auth.findUser = function ([login, password]) {
    return db
        .one("SELECT * from users where login = $1 and password = $2", [
            login,
            password,
        ])
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            return error;
        });
};

module.exports = Auth;
