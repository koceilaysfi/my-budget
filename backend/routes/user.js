const express = require("express");
const authCntrl = require("../controllers/user.js");

const router = express.Router();

router.post("/signup", authCntrl.signup);
router.post("/login", authCntrl.login);

module.exports = router;