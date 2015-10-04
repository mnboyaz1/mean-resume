var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Model = mongoose.model('Skill');
router.get('/', function(req, res, next) {
  Model.find({}).exec(function(err, data){
    if(err){ return next(err); }
    res.json(data);
  });
});
module.exports = router;