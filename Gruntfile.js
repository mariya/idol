module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      idol: ['js/*.js', 'jasmine/spec/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
