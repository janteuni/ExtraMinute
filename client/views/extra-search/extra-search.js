'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/extra/search', {
        templateUrl: 'views/extra-search/extra-search.html',
        controller: 'ExtraSearchCtrl',
        controllerAs: 'vm'
      });
  });
