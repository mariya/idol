describe('Idol App', function() {

  describe('Homepage', function() {

    beforeEach(function() {
      browser.get('/');
    });

    it('should redirect / to /home', function() {
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/home');
      });
    });

    it('should show the program top image', function() {
      var img = element(by.css('.program-top-image'));
      // Ensure an image has been loaded from tv.se
      expect(img.getAttribute('src')).toContain('tv4.se');
    });
  });
});
