describe('Idol App', function() {

  describe('Homepage', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should show the program top image', function() {
      var img = element(by.css('.program-top-image'));
      // Ensure an image has been loaded from tv.se
      expect(img.getAttribute('src')).toContain('tv4.se');
    });
  });
});
