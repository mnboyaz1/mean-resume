module.exports.id = "add-users";

module.exports.up = function (done) {
  var user = {
    id:1,
    first:'Noel',
    last:'Baron',
    email:'noel@goodfellaz.com',
    title:'Senior Architect, Full Stack Developer',
    phone:'(908) 377-5046',
    summary:[
      'Senior architect & team leader with',
      'emphasis on Javascript and PHP stacks.',
      'I have personally built many large-scale applications',
      'and am a veteran of B2B and B2C SDLC with 15+',
      'years of hands-on experience.'
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