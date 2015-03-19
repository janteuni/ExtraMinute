'use strict';

angular.module('extraMinute')
  .controller('LoginCtrl', function ($location, $scope) {

    var vm = this;

    var box = angular.element('.card.pad');
    var back = angular.element('.login-back');
    var login = angular.element('.login');
    var loader = angular.element('.login-loader');
    var header = angular.element('.login > header');

    // animation

    var t = new TimelineMax();

    t
      .set(box, { y: 250, opacity: 0 })
      .set(back, { opacity: 0, y: -30 })
      .set(loader, { opacity: 0, y: 40 })
      .to(box, .5, { y: 0, opacity: 1, ease: 'Back.easeOut' })
      .to(back, .5, { y: 0, opacity: 1, ease: 'Back.easeOut', delay: -.1 });

    // vm

    angular.extend(vm, {
      login: function () {
        var t = new TimelineMax();
        t
          .to(back, 0.25, { y: -30, opacity: 0 })
          .to(box, .5, { y: 30, opacity: 0, delay: -0.1 })
          .to(loader, 0.5, { scale: 1, y: 0, opacity: 1, delay: -0.5, ease: 'Back.easeInOut' })
          .to(loader, 0.25, { opacity: 0, y: 30, delay: 0.5, ease: 'Back.easeInOut' })
          .to(header, 0.25, { opacity: 0, y: 30, delay: -0.25 })
          .addCallback(function () {
            $location.path('/extra/slots');
            $scope.$apply();
          });
      }
    });

  });
