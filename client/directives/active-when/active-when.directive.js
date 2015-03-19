'use strict';

angular.module('extraMinute')
  .directive('activeWhen', function ($rootScope, $location) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $rootScope.$on('$routeChangeSuccess', function () {
          if ($location.path() === attrs.activeWhen) {
            return element.addClass('active');
          }
          element.removeClass('active');
        });
      }
    };
  });
