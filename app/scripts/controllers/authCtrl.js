'use strict';

angular.module('mpfeApp')
.controller('AuthCtrl', [
	'$scope',
	'$log',
	'$location',
	'Auth',
	// register scope functions to signup or login
	// function($scope, $location, $log, Auth) {
	//   $scope.register = function() {
	// 	Auth.register($scope.user).then(function(user) {
	// 	  $log(user);	
	// 	  $location.path('/products');
	// 	 });
	//   };
	//   $scope.login = function() {
	// 	Auth.login($scope.user).then(function(user) {
	// 	  $log(user);	
	// 	  $location.path('/products');
	// 	});
	//    };		
	// }
	function register($scope, $location, $log, Auth) {
     var credentials = {
         email: 'email@mail.com',
         password: 'password1',
         passwordConfirmation: 'password1'
     };
     var config = {
         headers: {
             'X-HTTP-Method-Override': 'GET',
             'Access-Control-Allow-Origin': 'http://localhost:9000'
         }
     };


     Auth.register(credentials, config).then(function(registeredUser) {
         console.log(registeredUser); // => {id: 1, ect: '...'}
     }, function(error) {
         console.log('error:' + error);
     });

     $scope.$on('devise:new-registration', function(event, user) {
         console.log('from devise:new-registration event');
         console.log(user);
     });
    } 
]);
