var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sample = mongoose.model('Sample');

router.get('/', function(req, res, next) {
  Sample.find(function(err, data){
    if(err){ return next(err); }
    res.json(data);
  });
});

module.exports = router;