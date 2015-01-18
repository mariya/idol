var idolApp = angular.module('idolApp', []);

idolApp.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolApp.controller('ProgramCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.fetchProgramInfo = function() {
    $scope.program = 'foo';
  };
}]);
