'use strict';

angular.module('mpfeApp')
.controller('AuthCtrl', [
	'$scope',
	'$log',
	'$location',
	'Auth',
	// register scope functions to signup or login
	function($scope, $location, $log, Auth) {
	  $scope.register = function() {
		Auth.register($scope.user).then(function(user) {
		  $log(user);	
		  $location.path('/products');
		 });
	  };
	  $scope.login = function() {
		Auth.login($scope.user).then(function(user) {
		  $log(user);	
		  $location.path('/products');
		});
	   };		
	}
]);
