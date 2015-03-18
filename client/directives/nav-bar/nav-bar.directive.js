'use strict';

angular.module('extraMinute')
  .directive('navBar', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'directives/nav-bar/nav-bar.html',
      link: function (scope, element) {
      }
    };
  });
