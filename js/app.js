var idolApp = angular.module('idolApp', [
  'ngRoute',
  'idolControllers'
]);

idolApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'ProgramCtrl'
      }).
      when('/participants', {
        templateUrl: 'partials/participants.html',
        controller: 'ParticipantsCtrl'
      }).
      when('/participants/:participantId', {
        templateUrl: 'partials/participant-detail.html',
        controller: 'ParticipantDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
