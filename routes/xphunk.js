const express = require('express');
const router = express.Router();
const xphunkController = require('../controllers/xphunk');

router.get('/', xphunkController.getAll);
router.get('/count', xphunkController.getCount);
router.get('/updateall', xphunkController.updateAll);
router.post('/', xphunkController.create);
router.post('/update', xphunkController.update);

module.exports = router;
