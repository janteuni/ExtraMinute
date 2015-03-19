'use strict';

angular.module('extraMinute')
  .directive('navBar', function ($location) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'directives/nav-bar/nav-bar.html',
      controllerAs: 'vm',
      link: function (scope, element) {
        scope.vm = {
          logout: function () {
            $location.path('/');
          }
        };
      }
    };
  });
