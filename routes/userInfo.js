import express from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.userInfo);

router.post('/', userController.userSignup);

router.put('/', userController.userInfoUpdate);

router.delete('/', userController.userRemove);

export default router;
