const express = require('express');
const router = express.Router();
const xphunkController = require('../controllers/xphunk');

router.get('/', xphunkController.getAll);
router.get('/count', xphunkController.getCount);
router.post('/', xphunkController.create);

module.exports = router;
