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
          out.push({
            date: moment(current),
            midi: false,
            soir: false
          });
          current.add(1, 'days');
        }
        out[0].soir = true;
        out[1].soir = true;
        out[4].midi = true;
        out[5].soir = true;
        out[6].soir = true;
        return out;
      })(),

      getLabel: function (day) {
        if (vm.days.indexOf(day) === 0) { return 'Aujourd\'hui'; }
        if (vm.days.indexOf(day) === 1) { return 'Demain'; }
        return jours[day.date.toDate().getDay()];
      },

      setDisp: function (day, segment) {
        day[segment] = !day[segment];
      }

    });

    // anim

    var cal = angular.element('.calendar');

    new TimelineMax()
      .set(cal, { scale: 0.8 })
      .to(cal, 0.5, { scale: 1 });

  });
