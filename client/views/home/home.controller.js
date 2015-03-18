'use strict';

angular.module('extraMinute')
  .controller('HomeCtrl', function ($location, $timeout) {

    var vm = this;

    angular.extend(vm, {

      navigate: function (location) {
        vm.transparent = true;
        $timeout(function () {
          $location.path(location);
        }, 300);
      }

    });

  });
