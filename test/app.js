/*
TBD: Redo thsi test. Outdated.
*/
describe('Home Controller', function () {
  var 
    testUser = { _id: 1, first:'Noel', last:'Baron' },
    User,
    Controller, 
    scope, 
    activeUserId, 
    $q, 
    $httpBackend,
    deferred;
  beforeEach(module('ui.router'))
  beforeEach(module('mean-resume'));
  beforeEach(module(function ($provide) {
    $provide.value('activeUserId',testUser._id);
  }));
  beforeEach(inject(function($rootScope,$controller,_User_,_$httpBackend_, _$q_){
    User = _User_;
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(/\/users\/.*/).respond(testUser);
    $q = _$q_;
    createController = function() {
      return $controller("HomeCtrl", {'$scope':scope, User:User});    
    }  
  }))  
  it('validates user instance', inject(function($rootScope) {
    $httpBackend.expectGET(/\/users\/.*/);
    var controller = createController();
    $httpBackend.flush();
    expect(scope.user).to.be.an.instanceOf(User)
    expect(scope.user.fullName()).to.equal('Noel Baron');
  }));
})