describe('Home Controller', function () {
  var 
    testUser = { id: '55ed98bb22adbfbf11db4bbf', first:'Noel', last:'Baron' },
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
    $provide.value('activeUserId',testUser.id);
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
    console.log(scope.user.current);
    expect(scope.user).to.be.an.instanceOf(User)
    expect(scope.user.fullName()).to.equal('Noel Baron');
  }));
})