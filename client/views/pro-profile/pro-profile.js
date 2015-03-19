'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pro/profile', {
        templateUrl: 'views/pro-profile/pro-profile.html',
        controller: 'ProProfileCtrl',
        navBar: true,
        controllerAs: 'vm'
      });
  });
