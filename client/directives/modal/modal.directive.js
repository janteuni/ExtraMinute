'use strict';

angular.module('extraMinute')
  .directive('modal', function () {
    return {
      restrict: 'EA',
      scope: { trigger: '=yolo' },
      transclude: true,
      templateUrl: 'directives/modal/modal.html',
      link: function (scope, element) {

        var modal = element.find('.modal-container');
        var shadow = element.find('.modal-shadow');
        var ota = element.find('.modal-content');
        var contain = element.find('.modal-container');
        var transclude = element.find('ng-transclude');

        shadow.hide();
        modal.hide();

        scope.$watch('trigger', function (value) {
          if (value === true) {
            showModal();
          } else {
            hideModal();
          }
        });

        shadow.on('click', function () {
          hideModal();
          scope.trigger = false;
          scope.$apply();
        });

        ota.on('click', function (e) {
          if (!angular.element(e.target).is(transclude)){
            return;
          }
          hideModal();
          scope.trigger = false;
          scope.$apply();
        });

        contain.on('click', function (e) {
          hideModal();
          scope.trigger = false;
          scope.$apply();
        });

        function showModal () {

          shadow.show();
          modal.show();

          TweenMax.set(modal, { opacity: 0, y: 30, scale: 0.5 });
          TweenMax.set(shadow, { opacity: 0 });

          new TimelineMax()
            .to(shadow, 0.5, { opacity: 1 })
            .to(modal, 0.5, { opacity: 1, y: 0, delay: -0.5, scale: 1, ease: 'Back.easeOut' });

        }

        function hideModal () {

          new TimelineMax()
            .to(modal, 0.3, { opacity: 0, y: 30, scale: 0.5, ease: 'Back.easeOut' })
            .to(shadow, 0.2, { opacity: 0, delay: -0.1 })
            .addCallback(function () {
              shadow.hide();
              modal.hide();
            });

        }

      }
    };
  });
