'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pro/offers', {
        templateUrl: 'views/pro-offers/pro-offers.html',
        controller: 'ProOffersCtrl',
        navBar: true,
        controllerAs: 'vm'
      });
  });
