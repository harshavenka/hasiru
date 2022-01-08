const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth.controller');
//....
router.get('/signup',authController.getSignup);

router.get('/login', authController.getLogin);

router.post('/signup',authController.signup);

module.exports = router;