const express = require("express");

const { user } = require("../controllers");

const router = express.Router();

router.put("/signup", user.create);
router.post("/signin", user.auth);
router.post("/restore", user.restore);
router.post("/update", user.update);
router.delete("/signup", user.delete);
router.get("/auth/verification/:userId/:secretCode", user.confirmEmail);

module.exports = router;
