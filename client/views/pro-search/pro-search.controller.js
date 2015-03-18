'use strict';

angular.module('extraMinute')
  .controller('ProSearchCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      getNumber: function(num) {
        return new Array(num);
      },
      results: [
         {
          name: 'Thomas Dumant',
          img: 'assets/images/faces/2.jpg',
          stars: 4,
           jobs: [
             'Service', 'Sommelier'
           ]
        }, {
          name: 'Alice Poulis',
          img: 'assets/images/faces/3.jpg',
          stars: 4,
          job: ['Service', 'Barman']
        }, {
          name: 'Christine Moh',
          img: 'assets/images/faces/4.jpg',
          stars: 2,
          job: ['Service']
        }, {
          name: 'Paul Luanard',
          img: 'assets/images/faces/5.jpg',
          stars: 4,
          job: ['Sommelier', 'Service']
        }, {
          name: 'Vincent chomier',
          img: 'assets/images/faces/6.jpg',
          stars: 3,
          job: 'Commis'
        }, {
          name: 'Delphine Plusis',
          img: 'assets/images/faces/7.jpg',
          stars: 3,
          job: ['Sommelier']
        }, {
          name: 'Marc Lotus',
          img: 'assets/images/faces/11.jpg',
          stars: 2,
          job: 'Barman'
        }, {
          name: 'Gilles Devinc',
          img: 'assets/images/faces/9.jpg',
          stars: 2,
          job: 'Service'
        }, {
          name: 'Charlotte Bauto',
          img: 'assets/images/faces/10.jpg',
          stars: 2,
          job: 'Commis'
        }, {
          name: 'Alain louan',
          img: 'assets/images/faces/1.jpg',
          stars: 4,
          job: 'Barman'
        }
      ]
    });
  });
