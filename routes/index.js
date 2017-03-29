var express = require('express');
var router = express.Router();

var index = require('../api/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mashup Service' });
});

router.post('/services', function(req,res){
    index.getAllServices(req,res);
});

module.exports = router;
