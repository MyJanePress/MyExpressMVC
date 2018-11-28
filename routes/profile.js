import express from 'express';
import { fileUpload, fileDownload } from '../controllers/loadingController';

const router = express.Router();

router.post('/', fileUpload);

router.get('/', fileDownload);

module.exports = router;
