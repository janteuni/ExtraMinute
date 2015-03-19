'use strict';

angular.module('extraMinute')
  .controller('ProSearchCtrl', function ($scope, $timeout) {

    var vm = this;

    // some stuff

    $scope.settings = {
      closeEl: '.close',
      modal: {
        templateUrl: 'views/pro-search/modal.html'
      }
    };

    angular.extend(vm, {
      all : false,
      nbSelected: 0,
      activateModal: function (event) {
        event.stopPropagation();
        vm.showmodal = true;
      },
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
      offer: {
        name:'Les Benoits',
        date: '21 Mars - Midi',
        desc: 'Super offre',
        jobs : [
          { name: 'Sommelier', nb: 1}
        ]
      },
      results: [
         {
          name: 'Thomas Dumant',
          img: 'assets/images/faces/2.jpg',
          stars: 4,
           select: false,
           status: 'available',
          job: ['Serveur', 'Sommelier']
        }, {
          name: 'Alice Poulis',
          status: 'available',
          img: 'assets/images/faces/3.jpg',
          stars: 4,
          select: false,
          job: ['Sommelier', 'Barman']
        }, {
          name: 'Christine Moh',
          img: 'assets/images/faces/4.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Serveur', 'Sommelier']
        }, {
          name: 'Paul Luanard',
          img: 'assets/images/faces/5.jpg',
          stars: 4,
          select: false,
          status: 'available',
          job: ['Sommelier', 'Cuisinier']
        }, {
          name: 'Vincent chomier',
          img: 'assets/images/faces/6.jpg',
          stars: 3,
          select: false,
          status: 'available',
          job: ['Plongeur']
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
          job: ['Serveur']
        }, {
          name: 'Charlotte Bauto',
          img: 'assets/images/faces/10.jpg',
          stars: 2,
          select: false,
          status: 'available',
          job: ['Cuisinier', 'Plongeur']
        }, {
          name: 'Alain louan',
          img: 'assets/images/faces/1.jpg',
          stars: 4,
          select: false,
          status: 'available',
          job: ['Serveur','Barman']
        }
      ]
    });

    // anim

    $timeout(function () {

      var results = angular.element('.yolo-result');
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
    });

  });
