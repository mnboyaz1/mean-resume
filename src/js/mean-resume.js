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

function highlight() {
  setTimeout(function() {
    var all = document.getElementsByTagName("code");
    console.log(all);
    for(var x=0; x<all.length; x++) {
      hljs.highlightBlock(all[x]);
    }
  },1000)
}

docReady(function() {
  window.onscroll = function() {
   if (document.body.scrollTop < 30) {
     document.getElementById("header").className="";
   } 
   else {
     document.getElementById("header").className="scrolling";
   }
  }
});