var idolServices = angular.module('idolServices', []);

idolServices.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolServices.service('ProgramSvc', ['$http', 'IDOL_API', function($http, IDOL_API) {
  // Process the participants list so it is easily
  // searchable by participant id.
  var participantsByKey = function(prog) {
    var ps = {};
    angular.forEach(prog.participant_groups, function(group, i) {
      angular.forEach(group.participants, function(participant, j) {
        ps[participant.person_tag] = participant;
      });
    });
    return ps;
  };

  this.get = function() {
    promise = $http.get(IDOL_API.programUrl).
      success(function(data, status, headers, config) {
        data.participantsByKey = participantsByKey(data);
        return data;
      }).
      error(function(data, status, headers, config) {
        console.log("ERROR: Could not fetch program info.");
      });
    return promise;
  };

  // Pre-fetch data on service instantiation.
  return this.get();
}]);

idolServices.service('VideoSvc', ['$http', 'IDOL_API', function($http, VideoSvc, IDOL_API) {
  this.get = function(participantId) {
    promise = $http.get(IDOL_API.programUrl).
      success(function(data, status, headers, config) {
        data.participantsByKey = participantsByKey(data);
        return data;
      }).
      error(function(data, status, headers, config) {
        console.log("ERROR: Could not fetch program info.");
      });
    return promise;
  };
}]);
