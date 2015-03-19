'use strict';

angular.module('extraMinute')
  .controller('ProOffersCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      selectOffer: function() {
        vm.offers[0].jobs[1].status = 'booked';
        vm.offers[0].jobs.splice(2);
      },
      offers: [
        {
          date: '20 Mars - Diner',
          status: 'available',
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
          date: '21 Mars - Diner',
          status: 'available',
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

  });
