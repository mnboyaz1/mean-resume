var app = angular.module('mean-resume', ['ui.router']);
app.value('activeUserId','55ed98bb22adbfbf11db4bbf')
app.config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  function($stateProvider,$locationProvider,$urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
      });
    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });
  }
]);
app.factory('User', ['activeUserId','$http','$q', function UserFactory(activeUserId,$http,$q){
  return function User(userId) {
    var self = this;
    self.current = { id:0, first:'Guest', last:'User' }
    self.get = function(callback) {
      var deferred = $q.defer();
      $http.get('/users/'+activeUserId)
      .success(function(data) {
        self.set(data);
        callback();
        deferred.resolve(data);
      })
      .error(function(err) {
        callback()
        deferred.resolve(data);
      })
      return deferred.promise;
    }
    self.set = function(data) {
      self.current = data;
    }
    self.fullName = function() {
      return self.current.first+' '+self.current.last;
    }
  } 
}]);
app.controller('HomeCtrl', function($scope,User,activeUserId) {
  $scope.user = new User();
  $scope.user.get(function() {
    console.log('done');
  });
});