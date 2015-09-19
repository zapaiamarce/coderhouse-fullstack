var express = require('express');
var router = express.Router();


router.use('/users/',require('./users'));
// router.use('/apartments/',require('./apartments'));

module.exports = router;