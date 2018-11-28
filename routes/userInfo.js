import express from 'express';
import {
    userLogin,
    userInfo,
    userSignup,
    userInfoUpdate,
    userRemove,
} from '../controllers/userController';
import { getPrivateData } from '../controllers/dataInfo';
import { fileDownload, fileUpload } from '../controllers/loadingController';

const router = express.Router();

router.get('/userinfo', userInfo);

router.get('/privatedata', getPrivateData);

router.get('/filedownload', fileDownload);

router.post('/usersignup', userSignup);

router.post('/login', userLogin);

router.post('/file', fileUpload);

router.put('/userupdate', userInfoUpdate);

router.delete('/userremove', userRemove);

export default router;
