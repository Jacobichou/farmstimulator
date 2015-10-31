module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
        dist: {
          options: {
            transform: [["babelify", { "stage": 0 }]]
          },
          files: {
            "public/js/bundle.js": "public/js/app.js"
          }
        }
    },
    watch: {
      files: 'public/js/*',
      tasks: ['default']
    }
  });
}
