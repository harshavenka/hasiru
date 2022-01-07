const express = require("express");
const router = express.router();
const authController = require('../controllers/auth.controller');
//....
router.get('/signup',authController.getSignup)

module.exports = router;