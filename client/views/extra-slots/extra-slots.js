'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/extra/slots', {
        templateUrl: 'views/extra-slots/extra-slots.html',
        controller: 'ExtraSlotsCtrl',
        navBar: true,
        controllerAs: 'vm'
      });
  });
