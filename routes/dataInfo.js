import express from 'express';
import { getPrivateData } from '../controllers/dataInfo';

const router = express.Router();
router.get('/', getPrivateData)

export default router;