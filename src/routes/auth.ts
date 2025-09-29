import { Router } from 'express';
import authController from '../controllers/authController';
import { validateSignup, validateLogin } from '../middleware/validation';

const router = Router();

router.post('/signup', validateSignup, authController.signup.bind(authController));
router.post('/login', validateLogin, authController.login.bind(authController));
router.get('/verify', authController.verify.bind(authController));

export default router;
