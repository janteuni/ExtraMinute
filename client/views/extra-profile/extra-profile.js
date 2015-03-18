'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/extra/profile', {
        templateUrl: 'views/extra-profile/extra-profile.html',
        controller: 'ExtraProfileCtrl',
        controllerAs: 'vm'
      });
  });
