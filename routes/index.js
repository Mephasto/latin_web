var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET services. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET jobs. */
router.get('/jobs', function(req, res, next) {
  res.render('jobs', { title: 'Jobs' });
});
/* GET about. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET hardware. */
router.get('/hardware', function(req, res, next) {
  res.render('hardware', { title: 'Hardware' });
});
/* GET maintenance. */
router.get('/maintenance', function(req, res, next) {
  res.render('maintenance', { title: 'Maintenance' });
});

module.exports = router;