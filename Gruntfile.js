module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
          // options: {
          //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          // },
          build: {
            src: 'js/script.js',
            dest: 'js/script.min.js'
          }
        },
    cssmin: {
    target: {
    files: [{
    expand: true,
    cwd: 'css/',
    src: ['css/style.css'],
    dest: 'css/',
    ext: '.min.css'
    }]
  }
},
    watch: {
        all: {
        files: ['sass/style.scss','css/style.css','js/script.js'],
        tasks: ['sass','csslint','jshint'],
        // options: {
        // spawn: false,
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss',       // 'destination': 'source'
        // 'widgets.css': 'widgets.scss'
      }
    }
  },
  csslint: {
      // strict: {
      //   options: {
      //     import: 2
      //   },
      //   src: ['css/*.css','!*min.css'] // Do not include min css files.
      // },
      lax: {
        options: {
          import: false,
          'order-alphabetical': false
        },
        src: ['css/*.css','!*min.css']
      }
    },
    jshint: {
    all: ['Gruntfile.js', 'js/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('cssmin', ['cssmin']);
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('default', ['watch']);


};
