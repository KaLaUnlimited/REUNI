var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/admin', (req, res) => res.render('admin'));
router.get('/checkin', (req, res) => res.render('checkin'));
router.get('/parent', (req, res) => res.render('parent'));
router.get('/result', (req, res) => res.render('result'));
router.get('/student', (req, res) => res.render('student'));

module.exports = router;