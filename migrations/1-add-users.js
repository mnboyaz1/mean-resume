module.exports.id = "add-users";

module.exports.up = function (done) {
  var user = {
    id:1,
    first:'Michael',
    last:'Eccles',
    email:'mnboyaz@msn.com',
    title:'Web Developer',
    phone:'(520) 870-1152',
    summary:[
      'Web developer & QA engineer with emphasis on Javascript and PHP stacks. Currently seeking an interesting technology company who embraces new and energetic developers ready to fit into any team. I am open to a variety of roles, including QA testing and web development.',
    ].join(' ')
  }
  var db = this.db.collection('users');
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(user,done) // Insert you!
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('users');
  db.remove({},[],done);
};