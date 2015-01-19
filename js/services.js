var idolServices = angular.module('idolServices', []);

idolServices.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolServices.factory('ProgramSvc', ['$http', 'IDOL_API', function($http, IDOL_API) {
  return {
    get: function() {
      var promise = $http.get(IDOL_API.programUrl).
        success(function(data, status, headers, config) {
          return data;
        }).
        error(function(data, status, headers, config) {
          console.log("ERROR: Could not fetch program info.");
        });
      return promise;
    }
  };
}]);
