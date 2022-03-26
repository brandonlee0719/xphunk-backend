const express = require('express');
const router = express.Router();
const xphunkController = require('../controllers/xphunk');

router.get('/', xphunkController.getAll);
router.post('/', xphunkController.create);

module.exports = router;
