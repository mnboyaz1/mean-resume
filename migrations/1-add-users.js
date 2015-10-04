module.exports.id = "add-users";

module.exports.up = function (done) {
  var user = {
    id:1,
    first:'Michael',
    last:'Eccles',
    email:'mnboyaz@msn.com',
    title:'Program and Web Developer',
    phone:'(520) 870-1152',
    summary:[
      'Mid level Developer, ready to move to next the level, ',
      'emphasis on Javascript and PHP stacks. ',
      'I have the knowledge, background and ability ',
      'to fit in and contribute to the team. ',
      'Success is the Goal I strive for.'
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