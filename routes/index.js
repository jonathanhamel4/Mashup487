var express = require('express');
var router = express.Router();
var igApi = require('../api/instagram');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mashup Service' });
});

module.exports = router;
