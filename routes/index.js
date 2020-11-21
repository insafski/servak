const express = require("express");
const authApi = require("../api/auth");
const hash = require("../api/hash");
const { user } = require("../controllers");
const router = express.Router();

/* GET home page. */

router.put("/signup", user.create);
router.post("/signin", user.auth);
router.post("/restore", user.restore);
router.post("/update", user.update);
router.delete("/signup", user.delete);

// router.get(
//     "/api/auth/verification/verify-account/:userId/:secretCode",
//     user.verify
// );

//     const { login, password, name } = req.body;

//     if (login && password && name) {
//         const newUser = { login, password, name };
//         authApi
//             .createUser(newUser)
//             .then((data) => {
//                 console.log(data);
//                 if (data.id) {
//                     res.json({ created: !!id });
//                 } else {
//                     res.json({ error: data });
//                 }
//             })
//             .catch(() => res.json({ error: `Error on user creation` }));
//     } else {
//         res.json({ error: "I need at least some data, fucking damn" });
//     }
// });
// (req, res) => {
//     const { login, password } = req.body;

//     // TODO: jwt
//     if (login && password) {
//         authApi
//             .findUser(login)
//             .then(({ password: encryptedPassword }) => {
//                 if (encryptedPassword) {
//                     const auth = hash.descrypt(encryptedPassword) === password;
//                     res.json({ auth });
//                 } else {
//                     res.json({ auth: false });
//                 }
//             })
//             .catch(() => res.json({ error: "Some server error" }));
//     } else {
//         res.json({ error: "I need at least some data, fucking damn" });
//     }
// });

// BASE UNAUTHORISATION
// router.delete("/signin", (req, res) => {
//     if (req.session.loggedin) {
//         req.session.destroy();
//         res.json({ signOut: true });
//     } else {
//         res.json({ error: "Error!" });
//     }
// });

// REGISTARTION USER

// EDIT USER
// router.post("/signup", (req, res) => {
//     const { data } = req.body;

//     if (data.login) {
//         authApi
//             .updateUser(data)
//             .then(({ id }) => {
//                 res.json({ signedup: !!id });
//             })
//             .catch(() => res.json({ error: `Some server error` }));
//     } else {
//         res.json({ error: "I need at least some data, fucking damn" });
//     }
// });

// // DELETE USER
// router.delete("/signup", (req, res) => {
//     const { login } = req.body;

//     if (login) {
//         authApi
//             .deleteUser(login)
//             .then(() => {
//                 res.json({
//                     deleted: true,
//                     message: "User account eas deleted",
//                 });
//             })
//             .catch(() => {
//                 res.json({
//                     deleted: false,
//                     error: "Error on delete user account",
//                 });
//             });
//     }
// });

module.exports = router;
