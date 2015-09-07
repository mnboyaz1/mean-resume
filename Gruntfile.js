module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files:[{
          expand:true,
          cwd:'src/js',
          src:'**.js',
          dest: 'build/js'
        }]
      },
      options: {
        mangle:false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, src:'**', cwd:'build/js', dest: 'public/javascripts' },
        ],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['copy']);

};
