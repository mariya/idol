describe("ProgramCtrl", function() {
  var httpBackend, mockProgram, scope;

  beforeEach(module('idolApp'));

  beforeEach(module(function($provide) {
    // Mock program data.
    mockProgram = {
      nid: "idol",
      name: "Idol",
      channel: "TV4",
      description: "A program where people sing and stuff",
      participant_groups: [],
      participantsByKey: {}
    };
  }));

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    httpBackend.expectGET('http://api.tv4play.se/site/programs/idol').respond(200, mockProgram);

    // Mock controller.
    controller = $controller('ProgramCtrl', {
      '$scope': scope
    });
  }));

  it('assigns the program to scope', function () {
    httpBackend.flush();
    expect(scope.program).toEqual(mockProgram);
  });

  it('assigns the participants list to root scope');
});
