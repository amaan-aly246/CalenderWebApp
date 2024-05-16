import { Router } from 'express';
const router = Router();
import { register, login, user, logOut } from '../controllers/authentication.js'

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get(user);
router.route('/logout').get(logOut);

export default router 
