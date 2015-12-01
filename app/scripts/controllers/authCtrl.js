'use strict';

angular.module('mpfeApp')
.controller('AuthCtrl', [
	'$scope',
	'$log',
	'$location',
	'Auth',
    function($scope, $location, $log, Auth) {
    	$scope.register = function() {
         var credentials = {
             email: $scope.email,
             password: $scope.password,
             password_confirmation: $scope.password_confirmation
         };
         var config = {
            headers: {
              'X-HTTP-Method-Override': 'GET'
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
        };

        // $scope.login = function( {

        // }; 
    }
]);


// App.controller('AuthCtrl', [
//     '$scope',
//     '$state',
//     'Auth',
//     function($scope, $state, Auth) {
//     // these functions to Auth. These return promises, which redirect the user to home state if auth/registration is successful 
//     $scope.login = function() {
//         Auth.login($scope.user).then(function(){
//             $state.go('home');
//         });
//     };
//     $scope.register = function() {
//         Auth.register($scope.user).then(function(){
//             $state.go('home');
//         });
//     };
// }])