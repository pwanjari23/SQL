const express = require('express');
const router = express.Router();
const busesController = require('../controllers/busesController');

router.post('/', busesController.addBus);
router.get('/available/:seats', busesController.getAvailableBuses);

module.exports = router;
