const express = require("express");
const { user } = require("../controllers");

const router = express.Router();

router.put("/signup", user.create);
router.post("/signin", user.auth);
router.post("/checkSignUpParams", user.checkSignUpParams);
router.post("/requestPassword", user.requestPassword);
router.post("/update", user.update);
router.post("/reestablish", user.reestablish);
router.delete("/signup", user.delete);
router.get("/auth/confirmEmail/:userId/:secretKey", user.confirmEmail);
router.get("/auth/requestPassword/:userId/:secretKey", user.confirmPassword);

module.exports = router;
