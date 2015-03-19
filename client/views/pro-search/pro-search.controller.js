'use strict';

angular.module('extraMinute')
  .controller('ProSearchCtrl', function ($scope) {

    var vm = this;

    $scope.settings = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/pro-search/modal.html'
      }
    };

    angular.extend(vm, {
      all : false,
      nbSelected: 0,
      getNumber: function(num) {
        return new Array(num);
      },
      selectAll: function() {
        vm.all = !vm.all;
        for (var i = 0; i <  vm.results.length; i++) {
          var tmp = vm.results[i].select;
          vm.results[i].select = (vm.all) ? true : false;
          if (tmp != vm.results[i].select) {
            vm.nbSelected = vm.results[i].select ? vm.nbSelected + 1 : vm.nbSelected - 1;
          }
        }
      },
      select: function(i) {
        vm.nbSelected = vm.results[i].select ? vm.nbSelected - 1 : vm.nbSelected  + 1;
        vm.results[i].select = !vm.results[i].select;
      },
      sendEmail: function() {
        for (var i = 0; i <  vm.results.length; i++) {
          if (vm.results[i].select) {
            vm.results[i].status = 'asked';
          }
        }
      },
      showProfile: function(event) {
        event.stopPropagation();
      },
      offer: {
        name:'Les Benoits',
        date: '19 Mars - Soirée',
        desc: 'Sommelier, cravate noire, chemise blanche. Service, tout en noir. dispo de 18h a 1h',
        jobs : [
          { name: 'Sommelier', nb: 2},
          { name: 'Service', nb: 2},
          { name: 'Barman', nb: 1}
        ]
      },
      results: [
         {
          name: 'Thomas Dumant',
          img: 'assets/images/faces/2.jpg',
          stars: 4,
           select: false,
           status: 'available',
          job: ['Service', 'Sommelier']
        }, {
          name: 'Alice Poulis',
          status: 'available',
          img: 'assets/images/faces/3.jpg',
          stars: 4,
          select: false,
          job: ['Service', 'Barman']
        }, {
          name: 'Christine Moh',
          img: 'assets/images/faces/4.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Service']
        }, {
          name: 'Paul Luanard',
          img: 'assets/images/faces/5.jpg',
          stars: 4,
          select: false,
          status: 'available',
          job: ['Sommelier', 'Service']
        }, {
          name: 'Vincent chomier',
          img: 'assets/images/faces/6.jpg',
          stars: 3,
          select: false,
          status: 'available',
          job: ['Commis']
        }, {
          name: 'Delphine Plusis',
          img: 'assets/images/faces/7.jpg',
          stars: 3,
          select: false,
          status: 'available',
          job: ['Sommelier']
        }, {
          name: 'Marc Lotus',
          img: 'assets/images/faces/11.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Barman']
        }, {
          name: 'Gilles Devinc',
          img: 'assets/images/faces/9.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Service']
        }, {
          name: 'Charlotte Bauto',
          img: 'assets/images/faces/10.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Commis', 'Cuisto']
        }, {
          name: 'Alain louan',
          img: 'assets/images/faces/1.jpg',
          stars: 4,
          select: false,
          status: 'available',
          job: ['Service','Barman']
        }
      ]
    });
  });
