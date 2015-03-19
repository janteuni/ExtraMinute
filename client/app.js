'use strict';

angular.module('extraMinute', [
  'ngRoute',
  'ngAnimate'
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
      type: 'resto',
      messages: 32,
      image: 'assets/images/mockupresto.jpg'
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
