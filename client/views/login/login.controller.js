'use strict';

angular.module('extraMinute')
  .controller('LoginCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'LoginCtrl'
    });

    // animation

    var box = angular.element('.card.pad');
    var back = angular.element('.login-back');

    var t = new TimelineMax();

    t
      .set(box, { y: 250, opacity: 0 })
      .set(back, { opacity: 0, y: -30 })
      .to(box, .5, { y: 0, opacity: 1, ease: 'Back.easeOut' })
      .to(back, .5, { y: 0, opacity: 1, ease: 'Back.easeOut', delay: -.1 });

  });
