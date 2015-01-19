var idolControllers = angular.module('idolControllers', []);

idolControllers.controller('ProgramCtrl', ['$scope', '$rootScope', 'ProgramSvc', function($scope, $rootScope, ProgramSvc) {
  ProgramSvc.success(function(d) {
    $scope.program = d;
  });
}]);

idolControllers.controller('ParticipantCtrl', ['$scope', '$rootScope', '$routeParams', 'ProgramSvc', 'VideoSvc', function($scope, $rootScope, $routeParams, ProgramSvc, VideoSvc) {
  var participantId = $routeParams.participantId;

  var getVideoPage = function(page) {
    $scope.videos = null;
    VideoSvc.get(participantId, page).success(function(data) {
      $scope.page = page;
      $scope.videos = data.results;
      if (page == 1) {
        $scope.numPages = Math.ceil(parseFloat(data.total_hits) / parseFloat(data.results.length));
      }
      $scope.hasPrevPage = (page > 1);
      $scope.hasNextPage = (page < $scope.numPages);
    });
  }

  ProgramSvc.success(function(d) {
    var participants = d.participantsByKey;
    $scope.participant = participants[participantId];
    getVideoPage(1);
  });

  $scope.prevPage = function() {
    var page = $scope.page;
    getVideoPage(page - 1);
  }

  $scope.nextPage = function() {
    var page = $scope.page;
    getVideoPage(page + 1);
  }
}]);
