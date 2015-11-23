'use strict';

/**
 * @ngdoc overview
 * @name mpfeApp
 * @description
 * # mpfeApp
 *
 * Main module of the application.
 */
angular
  .module('mpfeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'Devise'
  ])

  // local until i can figure out the heroku settings
  .constant('SERVER', {
    url: 'http://api.marketplaceapi.dev'
  })


  .config(function ($routeProvider, AuthProvider, SERVER) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/auth/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'AuthCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products/index.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      AuthProvider.registerPath(SERVER.url + '/users/sign_up.json');
      AuthProvider.registerMethod('GET');
  });