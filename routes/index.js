var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Express' });
});

router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'Express' });
});

router.get('/download', function(req, res, next) {
  res.render('download', { title: 'Express' });
});

module.exports = router;
