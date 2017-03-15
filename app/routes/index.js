var express = require('express');
var router = express.Router();
var igApi = require('../api/instagram');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Mashup Service' });
  igApi.getMediasByTag("montreal");
  res.send(200);
});

/* GET home page. */
router.post('/', function(req, res, next) {
  // res.render('index', { title: 'Mashup Service' });
  console.log(JSON.stringify(res.body, null, 2));
  res.send(200);
});

module.exports = router;
