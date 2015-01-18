var idolApp = angular.module('idolApp', []);

idolApp.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolApp.controller('ProgramCtrl', ['$scope', '$http', 'IDOL_API', function($scope, $http, IDOL_API) {
  $scope.fetchProgramInfo = function() {
    $http.get(IDOL_API.programUrl).
      success(function(data, status, headers, config) {
        $scope.program = data;
      }).
      error(function(data, status, headers, config) {
        console.log("ERROR: Could not fetch program info.")
      });
  };

  $scope.fetchProgramInfo();
}]);
