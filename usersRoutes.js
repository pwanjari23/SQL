const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/', usersController.addUser);
router.get('/', usersController.getUsers);

module.exports = router;
