'use strict';

angular.module('extraMinute')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messages', {
        templateUrl: 'views/messages/messages.html',
        controller: 'MessagesCtrl',
        navBar: true,
        controllerAs: 'vm'
      });
  });
