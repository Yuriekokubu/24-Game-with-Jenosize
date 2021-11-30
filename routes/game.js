const express = require('express');
const router = express.Router();

const { calGame } = require('../controller/jenosize');
const { validationData } = require('../middleware/validate');

router.route('/jenosize').post(validationData, calGame);

module.exports = router;
