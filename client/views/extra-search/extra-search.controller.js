'use strict';

angular.module('extraMinute')
  .controller('ExtraSearchCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      results: [
        {
          name: 'Ze kitchen',
          img: 'Ze kitchen',
          date: '20 Mars - Diner',
          jobs: [
            { name: 'Sommelier', nb: '1/2' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Sola',
          date: '20 Mars - Diner',
          jobs: [
            { name: 'Sommelier', nb: '0/1' },
            { name: 'Service', nb: '0/1' }
          ]
        }, {
          name: 'Maison Blanche',
          date: '21 Mars - Diner',
          jobs: [
            { name: 'Barman', nb: '1/1' },
            { name: 'Service', nb: '0/1' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Petit Sommelier',
          date: '21 Mars - Soirée',
          jobs: [
            { name: 'Service', nb: '0/1' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Les Benoit',
          date: '22 Mars - Diner',
          jobs: [
            { name: 'Commis', nb: '1/2' }
          ]
        }, {
          name: 'La Truffière',
          date: '22 Mars - Soirée',
          jobs: [
            { name: 'Sous-chef', nb: '1/1' },
            { name: 'Sommelier', nb: '0/1' }
          ]
        }, {
          name: 'Au fil du Zinc',
          date: '23 Mars - Diner',
          jobs: [
            { name: 'Barman', nb: '0/1' },
            { name: 'Sommelier', nb: '0/2' }
          ]
        }, {
          name: 'Ambassade de Bourgogne',
          date: '24 Mars - Diner',
          jobs: [
            { name: 'Service', nb: '0/1' },
            { name: 'Sommelier', nb: '0/2' },
            { name: 'Commis', nb: '0/1' }
          ]
        }
      ]
    });

  });
