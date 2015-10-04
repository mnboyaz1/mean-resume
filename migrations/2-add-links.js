module.exports.id = "add-links";

module.exports.up = function (done) {
  var db = this.db.collection('links');
  var links = [
    {id:1,title:'Twitter',icon:"fa-twitter",url:"https://twitter.com/mnboyaz"},
    {id:2,title:'LinkedIn',icon:"fa-linkedin",url:"https://www.linkedin.com/in/ecclesmichael"},
    {id:3,title:'Github',icon:"fa-github",url:"https://github.com/mnboyaz1"},
  ]
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(links,done) // Insert links!
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('links');
  db.remove({},[],done);
};