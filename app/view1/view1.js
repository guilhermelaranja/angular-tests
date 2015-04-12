'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.a = 0;
	$scope.b = 0;
	$scope.result = 0;

	$scope.$watch('a', function(oldValue, newValue) {
		$scope.sum();
	});

	$scope.$watch('b', function(oldValue, newValue) {
		$scope.sum();
	});

	$scope.sum = function() {
		$scope.result = parseInt($scope.a) + parseInt($scope.b);
	};
}]);