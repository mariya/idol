var idolControllers = angular.module('idolControllers', []);

idolControllers.controller('ProgramCtrl', ['$scope', '$rootScope', 'ProgramSvc', function($scope, $rootScope, ProgramSvc) {
  ProgramSvc.get().success(function(d) {
    $scope.program = d;
  });
}]);

idolControllers.controller('ParticipantCtrl', ['$scope', '$rootScope', '$routeParams', 'ProgramSvc', 'ParticipantSvc', function($scope, $rootScope, $routeParams, ProgramSvc, ParticipantSvc) {
  var participantId = $routeParams.participantId;

  ProgramSvc.get().success(function(d) {
    var participants = ProgramSvc.getParticipants();
    $scope.participant = participants[participantId];
  });
}]);
