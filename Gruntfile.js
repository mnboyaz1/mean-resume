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
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "build/css/<%= pkg.name %>.css": "src/less/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['src/less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src:'**', cwd:'build/js', dest: 'public/javascripts' },
          {expand: true, src:'**', cwd:'build/css', dest: 'public/stylesheets' },
        ],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['less','uglify','copy']);

};
