const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
//CREATE A USER
router.post("/signup", authController.signup);
//SIGN IN
router.post("/signin", authController.signin);

//GOOGLE AUTH
router.post("/google");

module.exports = router;
