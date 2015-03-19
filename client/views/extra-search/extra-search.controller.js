'use strict';

angular.module('extraMinute')
  .controller('ExtraSearchCtrl', function ($scope, $timeout) {

    $scope.settings = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/extra-search/modal.html'
      }
    };

    var vm = this;

    angular.extend(vm, {
      select : function(num) {
        vm.results[num].status = 'waiting';
      },
      results: [
        {
          name: 'Ze kitchen',
          img: 'assets/images/2.jpg',
          date: '20 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Sommelier', nb: '1/2' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Sola',
          img: 'assets/images/3.jpg',
          date: '20 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Sommelier', nb: '0/1' },
            { name: 'Service', nb: '0/1' }
          ]
        }, {
          name: 'Maison Blanche',
          img: 'assets/images/4.jpg',
          date: '21 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Barman', nb: '1/1' },
            { name: 'Service', nb: '0/1' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Petit Sommelier',
          img: 'assets/images/5.jpg',
          date: '21 Mars - Soirée',
          status: 'available',
          jobs: [
            { name: 'Service', nb: '0/1' },
            { name: 'Cuisto', nb: '0/1' }
          ]
        }, {
          name: 'Les climats',
          img: 'assets/images/6.jpg',
          date: '22 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Commis', nb: '1/2' },
            { name: 'Sommelier', nb: '0/2' }
          ]
        }, {
          name: 'La Truffière',
          img: 'assets/images/7.jpg',
          date: '22 Mars - Soirée',
          status: 'available',
          jobs: [
            { name: 'Sous-chef', nb: '1/1' },
            { name: 'Sommelier', nb: '0/1' }
          ]
        }, {
          name: 'Au fil du Zinc',
          img: 'assets/images/8.jpg',
          date: '23 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Barman', nb: '0/1' },
            { name: 'Sommelier', nb: '0/2' }
          ]
        }, {
          name: 'Ambassade de Bourgogne',
          img: 'assets/images/1.jpg',
          date: '24 Mars - Diner',
          status: 'available',
          jobs: [
            { name: 'Service', nb: '0/1' }
          ]
        }
      ]
    });

  });
