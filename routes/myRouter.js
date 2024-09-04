const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.home);
router.route('/juego').get(myController.juego);

module.exports = router;
