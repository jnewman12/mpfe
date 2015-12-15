'use strict';

// angular.module('mpfeApp')
// .controller('AuthCtrl', [
// 	'$scope',
// 	'$log',
// 	'$location',
// 	'Auth',
//     function($scope, $location, $log, Auth) {
//     	$scope.signup = function() {
//          var credentials = {
//              email: $scope.email,
//              password: $scope.password,
//              password_confirmation: $scope.password_confirmation
//          };
//          var config = {
//             headers: {
//               'X-HTTP-Method-Override': 'GET'
//             }
//          };

//          Auth.register(credentials, config).then(function(registeredUser) {
//              console.log(registeredUser); // => {id: 1, ect: '...'}
//          }, function(error) {
//              console.log('error:' + error);
//          });

//          $scope.$on('devise:new-registration', function(event, user) {
//              console.log('from devise:new-registration event');
//              console.log(user);
//          });
//         }; 
//     }
// ]);

angular.module('mpfeApp')
 .controller('AuthCtrl', ['tokenHandler', '$location', '$scope', '$http', 
  function($location, $scope, $http, tokenHandler) { 
    $scope.signup = function() {
      $http({
        url: 'http://api.marketplaceapi.dev' + 'users/sign_in',
        method: 'POST',
        data: {
          user: $scope.user
      }
    }).success(function(data) { 
        if (data.success) {
            $scope.ngModel = data.data.data;
            tokenHandler.set(data.data.auth_token);
            $location.path('/');
            console.log('OMFG!!!');
        } else {
            $scope.ngModel = data; 
            $scope.user.errors = data.info;
        }
    }).error(function(msg) { 
        $scope.user.errors =  'Something is wrong with the service. Please try again';
        console.log(msg);
    }); 
  };
}]);