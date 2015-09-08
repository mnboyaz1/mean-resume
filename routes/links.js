var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Link = mongoose.model('Link');

router.get('/', function(req, res, next) {
  Link.find(function(err, data){
    if(err){ return next(err); }
    res.json(data);
  });
});

module.exports = router;