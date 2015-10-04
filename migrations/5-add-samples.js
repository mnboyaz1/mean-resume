var eof = require('multiline');
module.exports.id = "add-samples";

module.exports.up = function (done) {
  var db = this.db.collection('samples');
  var list = [
{_id:1,
  title:"Javascript : Angular",
  description:"This is the angular code that powers this website.",
  code:eof(function() {/*
var app = angular.module('mean-resume', ['ui.router']);
app.value('activeUserId',1)
app.config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  function($stateProvider,$locationProvider,$urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl',
      resolve: {
        User: function(UserService) { 
          return UserService.get();
        }
      }
    });
    $stateProvider.state('samples', {
      url: '/samples',
      templateUrl: '/templates/samples.html',
      controller: 'SampleCtrl',
      resolve: {
        User: function(UserService) { 
          return UserService.get();
        }
      }
    });
    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });
  }
]);
app.service('UserService',function(activeUserId,$http,$q){
    var user = { id:0, first:'Please', last:'Wait', title:'Loading...' }
    user.set = function(obj) {
      for(var s in obj) {
        user[s] = obj[s];
      }
    }
    user.get = function() {
      var deferred = $q.defer();
      var calls = [
        $http.get('/api/users/'+activeUserId).then(function(resp) {
          user.set(resp.data);
        }),
        $http.get('/api/links').then(function(resp) {
          user.set({links:resp.data});
        }),
        $http.get('/api/skillgroups').then(function(resp) {
          user.set({skillgroups:resp.data});
        }),
        $http.get('/api/samples').then(function(resp) {
          user.set({samples:resp.data});
        })
      ]
      $q.all(calls).then(function() {
        deferred.resolve(user);
      })
      return deferred.promise;
    }
    user.fullName = function() {
      return user.first+' '+user.last;
    }
    return user;
});
app.controller('HomeCtrl', function($scope,User,activeUserId) {
  $scope.user = User
});
app.controller('SampleCtrl', function($scope,User,activeUserId) {
  $scope.user = User
  highlight();
});
*/})},
{_id:2,
  title:"Javascript : DOM",
  description:"This is the code that changes the style of the "+
                    "navigation bar based on its scroll position.",
  code:eof(function() {/*
window.onscroll = function() {
 if (document.body.scrollTop < 30) {
   document.getElementById("header").className="";
 } 
 else {
   document.getElementById("header").className="scrolling";
 }
}
*/})},
{_id:3,
  title:"LESS : CSS : GRUNT",
  description:"This is LESS code that generates standard CSS "+
                    "for the navigation bar using Grunt.",
  code:eof(function() {/*
#header {
    padding: 0;
    width: 100%;
    background-color: rgba(255,255,255,0.7);
    border-bottom: 1px solid #a7a7a7;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  :first-child {
    border-left:none;
  }
  :last-child {
    border-right:none;
  }
  a {
    &:hover {
      background-color:#fff;
    }
    i {
      font-size: 16px;
      margin: -1px 5px 0 0;
      float: left;
    }
    display: inline-block;
    padding: 11px 13px;
    border-right: 1px solid rgba(239, 239, 239, 0.44);
    border-left: 1px solid rgba(88, 88, 88, 0.18);
    .darkLink;
  }
  .transition;
}

#header.scrolling {
  background-color:#fff;
}
*/})},
{_id:4,
  title:"Node JS , Javascript API",
  description:"app.js file that requires the Models and Controllers "+
                    "and sets the routes.",
  code:eof(function() {/*
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require(__dirname+'/helpers/db');
//var routes = require('./routes/index');
//var users = require('./routes/users');

var models = {
	contact:require(__dirname+'/models/contact'),
	contactBio:require(__dirname+'/models/contactBio'),
	contactLocation:require(__dirname+'/models/contactLocation'),
	contactNumber:require(__dirname+'/models/contactNumber'),
	contactSkill:require(__dirname+'/models/contactSkill'),
	contactBlog:require(__dirname+'/models/contactBlog'),
}

var controllers = {
	homePages:require(__dirname+'/web/controllers/homePages'),
	
	contacts:require(__dirname+'/controllers/contacts'),
	contactBios:require(__dirname+'/controllers/contactBios'),
	contactLocations:require(__dirname+'/controllers/contactLocations'),
	contactNumbers:require(__dirname+'/controllers/contactNumbers'),
	contactSkills:require(__dirname+'/controllers/contactSkills'),
	contactBlogs:require(__dirname+'/controllers/contactBlogs'),
}

var app = express();
app.use(express.static(path.join(__dirname + '/public')));

app.models = {
	contact:new models.contact(db),
	contactBio:new models.contactBio(db),
	contactLocation:new models.contactLocation(db),
	contactNumber:new models.contactNumber(db),
	contactSkill:new models.contactSkill(db),
	contactBlog:new models.contactBlog(db),
}

app.controllers = {
	homePages:new controllers.homePages(app, express),
	
	contacts:new controllers.contacts(app, express),
	contactBios:new controllers.contactBios(app, express),
	contactLocations:new controllers.contactLocations(app, express),
	contactNumbers:new controllers.contactNumbers(app, express),
	contactSkills:new controllers.contactSkills(app, express),
	contactBlogs:new controllers.contactBlogs(app, express),
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'jade');
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/faviconME.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


for (var x in app.controllers) {
	console.log(x)
	app.controllers[x].init()
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.jade', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.jade', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
*/})},
{_id:5,
  title:"Node JS",
  description:"Sample Controller File for Javascript API "+
                    "and sets HTTP verbs.",
  code:eof(function() {/*
    var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contact bios route 
		self.route.get('/', function(req,res) {
			app.models.contactBio.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contact bio w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contactBio.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contactBio.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contactBio.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contactBio.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contactBio.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contactBios',self.route)
		
	}
}
module.exports = controller;
*/})},
{_id:6,
  title:"Node JS",
  description:"Sample Models File for Javascript API "+
                    "and executes Database Queries.",
  code:eof(function() {/*
    var model = function(db) {
	var self = this;
	self.table = 'contact_bios';
	
	self.find = function(id, callback) {
		// Execute SQL Query
		var query='select * from ?? where id = ? limit 1 ';
		var params=[ 
			self.table,
			id
		]
		db.query(query,params,function(err,data) { 
			// Send data using callback(data)
			if (err)
				callback({status:400,message:err.message})
			else if (!data.length)
				callback({status:404,message:"Not found"})
			else
				callback({status:200,message:data[0]})
		})
			
	}
	
	self.get = function(data,callback) {
		//Execute Query
		var query = 'select * from ??';
		var params=[
			self.table
		]
		db.query(query,params, function(err,data){
			//send data using callback(data)
			if(err)
				callback({status:400,message:err.message})
			else if (!data.length)
				callback ({status:404,message:"Not Found"})
			else 
				callback({status:200,message:data})
		})
	}
	
	self.post = function(data,callback) {
		// Execute SQL Query
		var query = "insert into contact_bios set ?";
	
		db.query(query,data,function(err, data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(data.insertId,function(response) {
					callback(response)
				})
			}
		})
	}
	
	self.patch = function(contactId,data,callback) {
		// Execute SQL Query
		var query = 'update contact_bios set ? where id = ?';
		var params=[ 
			data,
			contactId
		]
		console.log(db.format(query,params))
		db.query(query,params,function(err, data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(insertId,function(response){
					callback(response)
				})
			}
		})
	}
	
	self.put = function(contactId,data,callback){
		//Execute sql query
		var query = 'update contact_bios set ? where id = ?';
		var params=[
			data,
			contactId
		]

		db.query(query,params,function(err,data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(insertId,function(response){
					callback(response)
				})
			}	
		})
	}
	
	self.delete = function(contactId,data,callback){
		//Execute sql query
		
		var query = 'delete from contact_bios where id = ? limit 1';
		var params=[
			contactId,
		]
		console.log(db.format(query,params))
		db.query(query,params,function(err,data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				callback({status:202,message:"Contact Bio Deleted"})
			}
		})
	}

}
module.exports = model;
  */})}
]
  db.remove({},[],function(err,data) { // Wipe clean
    db.insert(list,done) // Insert links!
  })
};

module.exports.down = function (done) {
  var db = this.db.collection('samples');
  db.remove({},[],done);
};