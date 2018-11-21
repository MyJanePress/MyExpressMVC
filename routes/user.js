const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/userController');

router.post('/', userControllers.userLogin);

module.exports = router;
