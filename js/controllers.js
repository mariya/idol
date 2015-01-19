var idolControllers = angular.module('idolControllers', []);

idolControllers.controller('ProgramCtrl', ['$scope', '$rootScope', 'ProgramSvc', function($scope, $rootScope, ProgramSvc) {
  ProgramSvc.success(function(d) {
    $scope.program = d;
  });
}]);

idolControllers.controller('ParticipantCtrl', ['$scope', '$rootScope', '$routeParams', 'ProgramSvc', 'VideoSvc', function($scope, $rootScope, $routeParams, ProgramSvc, VideoSvc) {
  var participantId = $routeParams.participantId;

  var getVideoPage = function(page) {
    VideoSvc.get(participantId, page).success(function(data) {
      $scope.page = 1;
      $scope.videos = data.results;
      $scope.totalResults = data.total_hits;
      $scope.resultsPerPage = data.results.size;
      var numPages = Math.ceil(parseFloat($scope.totalResults) / parseFloat($scope.resultsPerPage));
      $scope.hasPrevPage = (page > 1);
      $scope.hasNextPage = (page < numPages);
    });
  }

  ProgramSvc.success(function(d) {
    var participants = d.participantsByKey;
    $scope.participant = participants[participantId];
    getVideoPage(1);
  });

  $scope.nextPage = function() {
    var page = $scope.page;
    getVideoPage(page + 1);
  }
}]);
