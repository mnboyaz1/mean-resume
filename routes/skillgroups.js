var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Model = mongoose.model('SkillGroup');
var Skill = mongoose.model('Skill');
router.get('/', function(req, res, next) {
  Model.find().lean().exec(function(err, data){
    if(err){ return next(err); }
    parseGroups(0,data,res);
  });
});
function parseGroups(key,list,res) {
  if (key >= list.length) {
    res.send(list);
    return;
  }
  Skill.find({skillgroups_id:list[key]._id},{_id:0,title:1},function(err,data) {
    console.log(data); 
    list[key].skills = data;
    parseGroups(key+1,list,res);
  })
}
module.exports = router;