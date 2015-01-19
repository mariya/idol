var idolServices = angular.module('idolServices', []);

idolServices.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolServices.service('ProgramSvc', ['$http', 'IDOL_API', function($http, IDOL_API) {
  var participants, program;

  // Process the participants list so it is easily
  // searchable by participant id.
  var processParticipants = function(prog) {
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
        program = data;
        participants = processParticipants(program);
        return data;
      }).
      error(function(data, status, headers, config) {
        console.log("ERROR: Could not fetch program info.");
      });
    return promise;
  };

  this.getParticipants = function() {
    return participants;
  }

  // Pre-fetch data on service instantiation.
  return this.get();
}]);

idolServices.service('ParticipantSvc', ['$http', 'ProgramSvc', 'IDOL_API',
  function($http, ProgramSvc, IDOL_API) {
}]);
