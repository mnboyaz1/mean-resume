module.exports.id = "add-skillgroups";

module.exports.up = function (done) {
  var db = this.db.collection('skillgroups');
  var skillgroups = [
    {_id:1,title:"Full Stack Technologies"},
    {_id:2,title:"System Administration"},
    {_id:3,title:"Processes & Preferences"},
  ]
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(skillgroups,done) // Insert links!
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('skillgroups');
  db.remove({},[],done);
};