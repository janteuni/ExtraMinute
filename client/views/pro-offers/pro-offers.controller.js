'use strict';

angular.module('extraMinute')
  .controller('ProOffersCtrl', function ($timeout, $location, $rootScope) {

    var vm = this;

    angular.extend(vm, {
      activateModal: function (event) {
        event.stopPropagation();
        vm.showmodal = true;
      },
      goRechercher: function () {
        $rootScope.omgyolo = true;
        $location.path('/pro/search');
      },
      newOffer: {
        date: '21 Mars - Midi',
        status: 'available',
        posts : [
          { name: 'Sommelier', nb: 1}
        ],
        jobs: []
      },
      addOffer: function () {
        vm.offers.unshift(vm.newOffer);
        vm.shittyModal = false;
      },
      activ : false,
      tabStars: [false, false, false, false],
      stars : function(num) {
        vm.tabStars[num] = true;
      },
      shittyModal: false,
      selectOffer: function() {
        vm.offers[0].jobs[1].status = 'booked';
        vm.offers[0].jobs.splice(2);
      },
      getJobIcon: function (job) {
        return ({
            'Sommelier': 'icon-bottle',
            'Cuisto': 'icon-couvert',
            'Sous-chef': 'icon-toque',
            'Service': 'icon-clo',
            'Barman': 'icon-glass',
            'Commis': 'icon-cut'
          })[job] || 'ion-help';
      },
      offers: [
        {
          date: '20 Mars - Soir',
          status: 'available',
          posts : [
            { name: 'Sommelier', nb: 1},
            { name: 'Cuisinier', nb: 1}
          ],
          jobs: [
            {
              name: 'Cuisto',
              extra: 'Luis Azealo',
              status: 'booked'
            },
            {
              name: 'Sommelier',
              extra: 'Anne Poulis',
              status: 'confirmed'
            },
            {
              name: 'Sommelier',
              extra: 'Vincent Tourah',
              status: 'asked'
            },
            {
              name: 'Sommelier',
              extra: 'Marc Loupp',
              status: 'asked'
            }
          ]
        },
        {
          date: '21 Mars - Soir',
          status: 'available',
          posts : [
            { name: 'Sommelier', nb: 2}
          ],
          jobs: [
            {
              name: 'Sommelier',
              extra: 'Anne Poulis',
              status: 'asked'
            },
            {
              name: 'Sommelier',
              extra: 'Paul Bichat',
              status: 'asked'
            }
          ]
        }
      ]
    });

    // anim

    $timeout(function () {

      var results = angular.element('.yolo-result');
      var results2 = angular.element('.yolo-yallah');

      TweenMax.staggerFrom(
        results,
        0.5,
        {
          scale: 0.5,
          opacity: 0,
          ease: Back.easeOut,
          force3D: true
        },
        0.05
      );

      TweenMax.staggerFrom(
        results2,
        1,
        {
          y: 20,
          opacity: 0,
          ease: Back.easeOut,
          force3D: true
        },
        0.3
      );

    });

  });
