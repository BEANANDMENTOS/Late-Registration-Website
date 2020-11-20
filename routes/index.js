var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  res.render('home', { title: 'nice' });
});

router.get('/agreement', function (req, res, next) {
  res.render('agreement', { title: 'well' });
});

router.get('/attdoc', function (req, res, next) {
  res.render('attdoc', { title: 'good' });
});


module.exports = router;
