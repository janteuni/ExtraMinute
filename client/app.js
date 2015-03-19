'use strict';

angular.module('extraMinute', [
  'ngRoute',
  'ngAnimate',
  'ngMorph'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  })
  .run(function ($rootScope) {

    $rootScope.ui = {
      navBar: false
    };

    $rootScope.user = {
      email: 'jean.bon@gmail.com',
      password: 'yolo',
      type: 'extra',
      image: 'assets/images/faces/6.jpg'
    };

    $rootScope.$on('$routeChangeSuccess', function (e, route) {
      $rootScope.ui.navBar = !!route.$$route.navBar;
    });

    $rootScope.isExtra = function () {
      return $rootScope.user.type === 'extra';
    };

    $rootScope.isResto = function () {
      return $rootScope.user.type === 'resto';
    };

  });
