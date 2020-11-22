var express = require('express');
var router = express.Router();
var path = require("path");
var https = require("https");
var http = require("https");
const db = require('monk')("localhost:27017/InformationDB")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  res.render('home', { title: 'nice' });
});

router.get('/accInfo', function (req, res, next) {
  res.render('accInfo', { title: 'nice' });
});

router.get('/agreement', function (req, res, next) {
  res.render('agreement', { title: 'well' });
});

router.get('/attdoc', function (req, res, next) {
  res.render('attdoc', { title: 'good' });
});

router.get('/addsubject', function (req, res, next) {
  res.render('addsubject', { title: 'good' });
});

router.get('/bts', function (req, res, next) {
  res.render('BTS x ARMY', { title: 'YEAH' });
});

router.get('/information', function (req, res, next) {
  res.render('information', { title: 'YEAH' });
});

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'YEAH' });
});

router.post("/login", async (req, res) => {
  //api
});

module.exports = router;
