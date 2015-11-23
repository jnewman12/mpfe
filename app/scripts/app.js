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
  .config(function ($routeProvider) {
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
  });

  .constant('SERVER', {
    // Local server
    //url: 'http://localhost:3000'

    // Public Heroku server
    url: 'https://api.damp-atoll-6985.herokuapp.com'
  });