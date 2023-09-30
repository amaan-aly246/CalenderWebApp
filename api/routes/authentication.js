const express = require('express')
const router = express.Router();
const { register, login, user, logOut } = require('../controllers/authentication')

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get(user);
router.route('/logout').get(logOut);

module.exports = router
