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
router.get('/company', function(req, res, next) {
  res.render('company', { title: 'Company' });
});
/* GET hardware. */
router.get('/hardware', function(req, res, next) {
  res.render('hardware', { title: 'Hardware' });
});
/* GET maintenance. */
router.get('/maintenance', function(req, res, next) {
  res.render('maintenance', { title: 'Maintenance' });
});
/* GET coverage. */
router.get('/coverage', function(req, res, next) {
  res.render('coverage', { title: 'Maintenance' });
});

/*LEGACY*/

router.get('/eng/index.html', function(req, res, next){
	res.redirect(301, '/');
});
router.get('/eng/index.html', function(req, res, next){
	res.redirect(301, '/');
});
router.get('/eng/company.html', function(req, res, next){
	res.redirect(301, '/company');
});
router.get('/eng/services.html', function(req, res, next){
	res.redirect(301, '/services');
});
router.get('/eng/goods.html', function(req, res, next){
	res.redirect(301, '/hardware');
});
router.get('/eng/infraestructure.html', function(req, res, next){
	res.redirect(301, '/about');
});
router.get('/eng/clients.html', function(req, res, next){
	res.redirect(301, '/');
});
router.get('/esp/index.html', function(req, res, next){
	res.redirect(301, '/');
});
router.get('/esp/index.html', function(req, res, next){
	res.redirect(301, '/');
});
router.get('/esp/company.html', function(req, res, next){
	res.redirect(301, '/company');
});
router.get('/esp/services.html', function(req, res, next){
	res.redirect(301, '/services');
});
router.get('/esp/goods.html', function(req, res, next){
	res.redirect(301, '/hardware');
});
router.get('/esp/infraestructure.html', function(req, res, next){
	res.redirect(301, '/about');
});
router.get('/esp/clients.html', function(req, res, next){
	res.redirect(301, '/');
});

module.exports = router;
