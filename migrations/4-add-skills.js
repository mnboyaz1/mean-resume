module.exports.id = "add-skills";

module.exports.up = function (done) {
  var db = this.db.collection('skills');
  var skills = [
    {skillgroups_id:1,title:'Node JS'},
    {skillgroups_id:1,title:'NPM'},
    {skillgroups_id:1,title:'Express'},
	{skillgroups_id:1,title:'Superagent'},
	{skillgroups_id:1,title:'Chance'},
	{skillgroups_id:1,title:'Expect'},
    {skillgroups_id:1,title:'Apache 2'},
    {skillgroups_id:1,title:'Naught'},
    {skillgroups_id:1,title:'MySQL'},
    {skillgroups_id:1,title:'MongoDB'},
    {skillgroups_id:1,title:'Agile Methodolgies'},
    {skillgroups_id:1,title:'JQuery'},
    {skillgroups_id:1,title:'Angular'},
    {skillgroups_id:1,title:'Bootstrap'},
    {skillgroups_id:1,title:'AJAX'},
    {skillgroups_id:1,title:'Javascript'},
    {skillgroups_id:1,title:'WAMP'},
    {skillgroups_id:1,title:'PHP'},
	{skillgroups_id:1,title:'CakePHP'},
	{skillgroups_id:1,title:'MVC'},
    {skillgroups_id:1,title:'CSS2/3'},
    {skillgroups_id:1,title:'LESS'},
    {skillgroups_id:1,title:'HTML5'},
    {skillgroups_id:1,title:'Grunt'},
    {skillgroups_id:1,title:'Uglify'},
    {skillgroups_id:1,title:'Karma'},
    {skillgroups_id:1,title:'Mocha'},
    {skillgroups_id:1,title:'Chai'},
    {skillgroups_id:1,title:'Request'},
    {skillgroups_id:1,title:'OOP'},
    {skillgroups_id:1,title:'Rest API'},
    {skillgroups_id:1,title:'Continuous [...]'},
    {skillgroups_id:1,title:'Various Frameworks'},
    {skillgroups_id:1,title:'Third Party API'},
    {skillgroups_id:1,title:'Github'},

    {skillgroups_id:2,title:'AWS'},
    {skillgroups_id:2,title:'EC2'},
    {skillgroups_id:2,title:'Command Line'},
    {skillgroups_id:2,title:'MySQL Work Bench'},
    {skillgroups_id:2,title:'Monitoring'},
    {skillgroups_id:2,title:'Github Services'},
    {skillgroups_id:2,title:'VPN Service'}

  ]
  var id = 0;
  for (var x=0; x<skills.length; x++) {
    id++;
    skills[x].id = id;
  }
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(skills,done);
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('skills');
  db.remove({},[],done);
};

