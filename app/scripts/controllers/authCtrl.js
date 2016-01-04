'use strict';


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