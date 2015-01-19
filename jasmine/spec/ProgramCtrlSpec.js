describe("ProgramCtrl", function() {
  var mockProgram, scope;

  beforeEach(module('idolApp'));

  beforeEach(module(function($provide) {
    // Mock program data.
    mockProgram = {
      nid: "idol",
      name: "Idol",
      channel: "TV4",
      description: "A program where people sing and stuff"
    };

    // Mock ProgramSvc.
    $provide.value('ProgramSvc',{
      get: function() {
        return {
          success: function(callback) { return callback(mockProgram);}
        };
      }
    });
  }));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    // Mock controller.
    controller = $controller('ProgramCtrl', {
      '$scope': scope
    });
  }));

  it('assigns the program to scope', function () {
    expect(scope.program).toEqual(mockProgram);
  });
});
