const express = require('express')
const router = express.Router();
const { register, login, accessToken, logOut } = require('../controllers/authentication')

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/').get(accessToken);
router.route('/logout').post(logOut);

module.exports = router
