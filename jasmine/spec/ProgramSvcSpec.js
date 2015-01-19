describe('ProgramSvc', function(){
  var httpBackend, mockProgram, svc;

  beforeEach(module('idolApp'));

  beforeEach(inject(function ($injector) {
    httpBackend = $injector.get('$httpBackend');
    svc = $injector.get('ProgramSvc');

    // Mock GET response.
    mockProgram = {
      nid: "idol",
      name: "Idol",
      channel: "TV4",
      description: "A program where people sing and stuff"
    };
  }));

  it('fetches program information', function (done) {
    var testProgram = function(program) {
      expect(program.name).toBe(mockProgram.name);
      expect(program.nid).toBe(mockProgram.nid);
    };

    httpBackend.expectGET('http://api.tv4play.se/site/programs/idol').respond(200, mockProgram);

    svc.get()
      .success(testProgram)
      .finally(done);

    httpBackend.flush();
  });
});
