var idolControllers = angular.module('idolControllers', []);

idolControllers.controller('ProgramCtrl', ['$scope', '$http', 'ProgramSvc', function($scope, $http, ProgramSvc) {
  ProgramSvc.get().success(function(d) {
    $scope.program = d;
  });
}]);
