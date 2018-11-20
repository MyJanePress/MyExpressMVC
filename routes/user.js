const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/userController');

// router.get('/', userControllers.getAll);

router.get('/:id', userControllers.userId);

router.post('/', userControllers.getContent);

router.put('/:id', userControllers.update);

router.delete('/:id', userControllers.dataDelete);

module.exports = router;
