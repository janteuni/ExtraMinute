'use strict';

angular.module('extraMinute')
  .controller('HomeCtrl', function ($location, $timeout) {

    var vm = this;

    var actions = angular.element('.home-actions');

    // anim

    var t = new TimelineMax();

    t
      .set(actions, { y: -150 })
      .to(actions, 0.4, { y: 0, ease: 'Back.easeOut' });

    // vm

    angular.extend(vm, {

      navigate: function (location) {
        vm.transparent = true;
        $timeout(function () {
          $location.path(location);
        }, 300);
      }

    });

  });
