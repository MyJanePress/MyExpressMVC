import express from 'express';
import userController from '../controllers/userController'
const router = express.Router();

router.get('/', userController.userInfo);

router.post('/', userController.userSignup)

export default router;