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