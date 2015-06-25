'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/:page', controller.index);
router.get('/product/:id', controller.show);

module.exports = router;