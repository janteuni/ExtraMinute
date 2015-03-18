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
          name: 'Annie Touhi',
          img: 'assets/images/2.jpg',
          stars: 3,
          job: 'Sommelier'
        }, {
          name: 'Thomas Dumant',
          img: 'assets/images/2.jpg',
          stars: 4,
          job: 'Service'
        }, {
          name: 'Alice Poulis',
          img: 'assets/images/2.jpg',
          stars: 4,
          job: 'Service'
        }, {
          name: 'Christine Moh',
          img: 'assets/images/2.jpg',
          stars: 2,
          job: 'Service'
        }, {
          name: 'Paul Luanard',
          img: 'assets/images/2.jpg',
          stars: 4,
          job: 'Sommelier'
        }, {
          name: 'Vincent chomier',
          img: 'assets/images/2.jpg',
          stars: 3,
          job: 'Commis'
        }, {
          name: 'Delphine Plusis',
          img: 'assets/images/2.jpg',
          stars: 3,
          job: 'Sommelier'
        }, {
          name: 'Marc Lotus',
          img: 'assets/images/2.jpg',
          stars: 2,
          job: 'Barman'
        }, {
          name: 'Gilles Devinc',
          img: 'assets/images/2.jpg',
          stars: 2,
          job: 'Service'
        }, {
          name: 'Charlotte Bauto',
          img: 'assets/images/2.jpg',
          stars: 2,
          job: 'Commis'
        }, {
          name: 'Aline louan',
          img: 'assets/images/2.jpg',
          stars: 4,
          job: 'Barman'
        }
      ]
    });
  });
