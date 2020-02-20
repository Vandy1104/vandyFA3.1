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
        imagemin: {
        static: {
            // options: {
            //     optimizationLevel: 3,
            //     svgoPlugins: [{removeViewBox: false}],
            //     use: [mozjpeg()] // Example plugin usage
            // },
            files: {
                'imagemin/*.png': 'images/*.png',
                'imagemin/*.jpg': 'images/*.jpg',
                'imagemin/*.gif': 'images/*.gif'
            }
        },
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['images/*.{png,jpg,gif}'],
                dest: 'imagemin/'
            }]
        }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['style.css', '!*.min.css'],
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


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');



  // Default task(s).
  // grunt.registerTask('imgmin', ['imagemin']);
  // grunt.registerTask('cssmin', ['cssmin']);
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('default', ['imagemin','cssmin','csslint','watch']);


};
