'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  var view1Ctrl;
  var rootScope;
  var scope;
  
  beforeEach(inject(function($controller, $rootScope) {
  	rootScope = $rootScope;
  	scope = $rootScope.$new();

  	view1Ctrl = $controller('View1Ctrl', {
  		$scope: scope
  	});
  }));

  describe('view1 controller', function() {

	it('should have all variables on scope initialized with 0', function() {
      expect(scope.a).toBe(0);
      expect(scope.b).toBe(0);
      expect(scope.result).toBe(0);
    });

	it('should sum a and b when sum is called', function() {
      scope.a = '2';
      scope.b = '4';
      scope.sum();

      expect(scope.result).toBe(6);
    });

  });
});