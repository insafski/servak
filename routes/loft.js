const express = require("express");
const { loft } = require("../controllers");

const router = express.Router();

router.post("/loft_call", loft.loft_call);

module.exports = router;
