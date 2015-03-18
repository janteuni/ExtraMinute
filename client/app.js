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

    $rootScope.$on('$routeChangeSuccess', function (e, route) {
      $rootScope.ui.navBar = !!route.$$route.navBar;
    });

  });
