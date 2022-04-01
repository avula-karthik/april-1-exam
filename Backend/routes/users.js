var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

/* GET users listing. */
router.get('/', userController.homePage);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
