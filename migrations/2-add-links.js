module.exports.id = "add-links";

module.exports.up = function (done) {
  var db = this.db.collection('links');
  var links = [
    {id:1,title:'Twitter',icon:"fa-twitter",url:"https://twitter.com/noelbaron"},
    {id:2,title:'LinkedIn',icon:"fa-linkedin",url:"https://linkedin.com/in/noelbaron"},
    {id:3,title:'Github',icon:"fa-github",url:"https://github.com/noelbaron"},
    {id:4,title:'Agile Blog',icon:"fa-bookmark",url:"https://www.crocagile.com/learn"},
  ]
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(links,done) // Insert links!
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('links');
  db.remove({},[],done);
};