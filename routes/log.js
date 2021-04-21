const express = require("express");
const { Logs } = require("../database/models");

const router = express.Router();

router.post("/log ", logMe);

async function logMe(res, req) {
    console.log(res);

    
    //const user = await User.create(newUser);

} 

module.exports = router;
