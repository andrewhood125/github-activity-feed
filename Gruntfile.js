module.exports = function(grunt) {

  grunt.initConfig({
    blanket_mocha: {
      test: {
        src: ['test/index.html'],
        options: {
          threshold: 70,
          reporter: 'Spec'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-blanket-mocha');

  grunt.registerTask('default', ['blanket_mocha']);

};
