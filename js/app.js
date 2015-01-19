var idolApp = angular.module('idolApp', [
  'ngRoute',
  'idolControllers',
  'idolServices'
]);

idolApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/participants/:participantId', {
        templateUrl: 'partials/participant.html',
        controller: 'ParticipantCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
