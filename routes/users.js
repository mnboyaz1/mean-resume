var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }
    res.json(users);
  });
});

router.param('userId',function(req,res,next,id) {
  var q = User.findOne({id:req.params.userId},function(err,user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error('can\'t find user')); }
    req.user = user;
    return next();
  })
})

router.get('/:userId', function(req, res, next) {
  res.send(req.user);
});

module.exports = router;
