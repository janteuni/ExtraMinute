'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pro/search', {
        templateUrl: 'views/pro-search/pro-search.html',
        controller: 'ProSearchCtrl',
        controllerAs: 'vm'
      });
  });
