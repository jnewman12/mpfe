'use strict';

angular.module('mpfeApp')
  .service('tokenHandler', function($rootScope) {
  var token = null;
  var tokenHandler = {
  set: function(value) { token = value; },
  get: function() { 
    if (!token) {
      $rootScope.$broadcast('event:unauthorized');
    } else {
    return token; 
      }
  }
  };
  return tokenHandler;
});