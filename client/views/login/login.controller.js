'use strict';

angular.module('extraMinute')
  .controller('LoginCtrl', function ($location, $scope, $rootScope) {

    var vm = this;

    var box = angular.element('.card.pad');
    var back = angular.element('.login-back');
    var login = angular.element('.login');
    var loader = angular.element('.login-loader .hook');
    var header = angular.element('.login > header');
    var demoExtra = angular.element('.mockup .btn:nth-child(1)');
    var demoResto = angular.element('.mockup .btn:nth-child(2)');

    // animation

    var t = new TimelineMax();

    t
      .set(box, { y: 250, opacity: 0 })
      .set(back, { opacity: 0, y: -30 })
      .set(loader, { opacity: 0, scale: 2 })
      .set(demoExtra, { x: '-110%', opacity: 0 })
      .set(demoResto, { x: '-110%', opacity: 0 })
      .to(box, .5, { y: 0, opacity: 1, ease: 'Back.easeOut' })
      .to(back, .5, { y: 0, opacity: 1, ease: 'Back.easeOut', delay: -.1 })
      .to(demoExtra, 0.3, { opacity: 1, x: '0%', ease: 'Back.easeOut', delay: -0.5 })
      .to(demoResto, 0.3, { opacity: 1, x: '0%', ease: 'Back.easeOut', delay: -0.45 });

    // vm

    angular.extend(vm, {
      user: {},
      usedMockup: false,
      login: function () {
        var t = new TimelineMax();

        if (!vm.usedMockup) {
          t
            .to(demoResto, 0.25, { x: '-110%', opacity: 0, ease: 'Back.easeIn' })
            .to(demoExtra, 0.25, { x: '-110%', opacity: 0, delay: -0.15, ease: 'Back.easeIn' });
        }
        t
          .to(back, 0.25, { y: -30, opacity: 0 })
          .to(box, .5, { y: 30, opacity: 0, delay: -0.1 })
          .to(loader, 0.25, { scale: 1, opacity: 1, delay: -0.5, ease: 'Back.easeOut' })
          .to(header, 0.5, { opacity: 0, y: 50, delay: 0.5, ease: 'Back.easeIn' })
          .to(loader, 0.5, { opacity: 0, y: 50, delay: -0.25 })
          .addCallback(function () {
            $location.path(({
              extra: '/extra/slots',
              resto: '/pro/offers'
            })[$rootScope.user.type]);
            $scope.$apply();
          });
      },
      mockup: function (type) {
        vm.user = ({
          extra: {
            email: 'j.bon@gmail.com',
            password: 'yolo',
            type: 'extra',
            image: 'assets/images/faces/6.jpg',
            messages: 4
          },
          resto: {
            email: 'contact@benoit.com',
            password: 'yolooentuhonetuoenoesuhoentuhoesunoethsuoen',
            type: 'resto',
            image: 'assets/images/mockupresto.jpg',
            messages: 137
          }
        })[type];
        $rootScope.user = vm.user;
        (({
          extra: function () {
            new TimelineMax()
              .to(demoExtra, 0.25, { x: '-110%', opacity: 0, ease: 'Back.easeIn' })
              .to(demoResto, 0.25, { x: '-110%', opacity: 0, delay: -0.15, ease: 'Back.easeIn' });
          },
          resto: function () {
            new TimelineMax()
              .to(demoResto, 0.25, { x: '-110%', opacity: 0, ease: 'Back.easeIn' })
              .to(demoExtra, 0.25, { x: '-110%', opacity: 0, delay: -0.15, ease: 'Back.easeIn' });
          }
        })[type])();
        vm.usedMockup = true;
      }
    });

  });
