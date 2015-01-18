var idolApp = angular.module('idolApp', []);

idolApp.constant('IDOL_API', {
  programUrl: 'http://api.tv4play.se/site/programs/idol',
  videoAssetsUrl: 'http://api.tv4play.se/play/video_assets.json'
});

idolApp.controller('ProgramCtrl', function ($scope) {
  // todo: Display information about the program.
});
