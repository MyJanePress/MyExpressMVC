const express = require('express');
const router = express.Router();
const indexController=require('../controllers/indexController');
const path = require('path');

router.get('/customer', indexController.login);

router.get('/', indexController.index);

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
module.exports = router;