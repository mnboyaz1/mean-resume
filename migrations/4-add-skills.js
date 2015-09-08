module.exports.id = "add-skills";

module.exports.up = function (done) {
  var db = this.db.collection('skills');
  var skills = [
    {skillgroups_id:1,title:'Node JS'},
    {skillgroups_id:1,title:'NPM'},
    {skillgroups_id:1,title:'Socket.io'},
    {skillgroups_id:1,title:'Express'},
    {skillgroups_id:1,title:'Apache 2'},
    {skillgroups_id:1,title:'NGINX'},
    {skillgroups_id:1,title:'Naught'},
    {skillgroups_id:1,title:'MySQL'},
    {skillgroups_id:1,title:'MongoDB'},
    {skillgroups_id:1,title:'MsSQL'},
    {skillgroups_id:1,title:'Redis'},
    {skillgroups_id:1,title:'Memcached'},
    {skillgroups_id:1,title:'Ionic'},
    {skillgroups_id:1,title:'Appcelerator'},
    {skillgroups_id:1,title:'Service Oriented Architecture'},
    {skillgroups_id:1,title:'JQuery'},
    {skillgroups_id:1,title:'Angular'},
    {skillgroups_id:1,title:'Bootstrap'},
    {skillgroups_id:1,title:'AJAX'},
    {skillgroups_id:1,title:'Avanced Javascript'},
    {skillgroups_id:1,title:'LAMP'},
    {skillgroups_id:1,title:'PHP'},
    {skillgroups_id:1,title:'Ruby on Rails'},
    {skillgroups_id:1,title:'CSS2/3'},
    {skillgroups_id:1,title:'LESS'},
    {skillgroups_id:1,title:'HTML5'},
    {skillgroups_id:1,title:'Grunt'},
    {skillgroups_id:1,title:'Uglify'},
    {skillgroups_id:1,title:'Capistrano'},
    {skillgroups_id:1,title:'Chef'},
    {skillgroups_id:1,title:'SpiderCD'},
    {skillgroups_id:1,title:'Linux'},
    {skillgroups_id:1,title:'Mac'},
    {skillgroups_id:1,title:'Mobile'},
    {skillgroups_id:1,title:'Tablet'},
    {skillgroups_id:1,title:'D3'},
    {skillgroups_id:1,title:'Visualizations'},
    {skillgroups_id:1,title:'Big Data'},
    {skillgroups_id:1,title:'Karma'},
    {skillgroups_id:1,title:'Mocha'},
    {skillgroups_id:1,title:'Chai'},
    {skillgroups_id:1,title:'Request'},
    {skillgroups_id:1,title:'xUnit'},
    {skillgroups_id:1,title:'OOP'},
    {skillgroups_id:1,title:'Rest API'},
    {skillgroups_id:1,title:'Continuous [...]'},
    {skillgroups_id:1,title:'Various Frameworks'},
    {skillgroups_id:1,title:'TDD'},
    {skillgroups_id:1,title:'BDD'},
    {skillgroups_id:1,title:'Third Party API'},
    {skillgroups_id:1,title:'Github'},

    {skillgroups_id:2,title:'AWS'},
    {skillgroups_id:2,title:'EC2'},
    {skillgroups_id:2,title:'SES'},
    {skillgroups_id:2,title:'Route 52'},
    {skillgroups_id:2,title:'DNS'},
    {skillgroups_id:2,title:'PRIV'},
    {skillgroups_id:2,title:'DMZ'},
    {skillgroups_id:2,title:'Master/Slave'},
    {skillgroups_id:2,title:'RDS'},
    {skillgroups_id:2,title:'Elasticache'},
    {skillgroups_id:2,title:'SOLR'},
    {skillgroups_id:2,title:'YUM'},
    {skillgroups_id:2,title:'Uptime'},
    {skillgroups_id:2,title:'Monitoring'},
    {skillgroups_id:2,title:'Github Services'},

    {skillgroups_id:3,title:'Kanban'},
    {skillgroups_id:3,title:'WIP'},
    {skillgroups_id:3,title:'Scrum'},
    {skillgroups_id:3,title:'XP'},
    {skillgroups_id:3,title:'Peer'},
    {skillgroups_id:3,title:'Waterfall'},
    {skillgroups_id:3,title:'Continuous [...]'},
    {skillgroups_id:3,title:'Automation'},
    {skillgroups_id:3,title:'MVC'},
    {skillgroups_id:3,title:'Rapid Dev'},
    {skillgroups_id:3,title:'Cloud'},
    {skillgroups_id:3,title:'Remote Teams'},
    {skillgroups_id:3,title:'No Gantt!'}
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

