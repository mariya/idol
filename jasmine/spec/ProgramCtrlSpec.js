describe("ProgramCtrl", function() {
  var controller, httpBackend, mockProgram, scope;

  beforeEach(module('idolApp'));

  beforeEach(inject(function ($injector, $controller, $rootScope) {
    controller = $controller;
    httpBackend = $injector.get('$httpBackend');
    scope = $rootScope.$new();

    // Mock controller.
    controller = $controller('ProgramCtrl', {
      '$scope': scope
    });

    // Mock POST response.
    mockProgram = {
      nid: "idol",
      name: "Idol",
      channel: "TV4",
      description: "A program where people sing and stuff"
    };
    httpBackend.whenPOST('http://api.tv4play.se/site/programs/idol').respond(mockProgram);
  }));

  it('fetches program information', function () {
    scope.fetchProgramInfo();
    expect(scope.program).toEqual(mockProgram);
  });
});
