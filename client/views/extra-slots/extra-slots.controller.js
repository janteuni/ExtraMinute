'use strict';

angular.module('extraMinute')
  .controller('ExtraSlotsCtrl', function () {

    var vm = this;

    var jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    angular.extend(vm, {

      days: (function () {
        var out = [];
        var current = moment();
        var last = moment(current).add(7, 'days');
        while (!current.isSame(last)) {
          out.push(moment(current));
          current.add(1, 'days');
        }
        return out;
      })(),

      getLabel: function (day) {
        if (vm.days.indexOf(day) === 0) { return 'Aujourd\'hui'; }
        if (vm.days.indexOf(day) === 1) { return 'Demain'; }
        return jours[day.toDate().getDay()];
      }

    });

  });
