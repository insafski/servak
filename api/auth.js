// var db = require("./db");
var hash = require("./hash");

var Auth = {};

// // TODO:
// Auth.findUser = (login) =>
//     db
//         .one("SELECT * FROM users WHERE login = $1", login)
//         .then((data) => data)
//         .catch((error) => error);

// Auth.createUser = ({ login, password, name }) => {
//     var encryptedPassword = hash.encrypt(password);

//     return Auth.findUser(login)
//         .then((data) => {
//             if (data.id) {
//                 return "User Already Exists! Login or choose another user login";
//             } else {
//                 return db
//                     .one(
//                         "INSERT INTO users(login, password, name) VALUES(${login}, ${encryptedPassword}, ${name}) RETURNING id",
//                         { login, encryptedPassword, name }
//                     )
//                     .then((data) => data)
//                     .catch((error) => error);
//             }
//         })
//         .catch((e) => e);
// };

// Auth.updateUser = (data) =>
//     Auth.findUser(data.login)
//         .then((data) => {
//             if (data.id) {
//                 return db
//                     .none("UPDATE users SET $1 where login = $2 RETURNING *", [
//                         data.columns,
//                         data.login,
//                     ])
//                     .then((data) => data)
//                     .catch((error) => error);
//             } else {
//                 return `User with login ${data.login} is not found`;
//             }
//         })
//         .catch((error) => error);

// Auth.deleteUser = (login) =>
//     db
//         .none(
//             "UPDATE users SET deleted_at = $1 WHERE login = $2 RETURNING id",
//             [
//                 // TODO:
//                 "now()",
//                 login,
//             ]
//         )
//         .then((data) => data)
//         .catch((error) => error);

module.exports = Auth;
