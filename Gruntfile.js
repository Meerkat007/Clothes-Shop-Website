/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    // By default, your `index.html`'s Usemin block (<!-- build:js <path> -->) will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // concat: {
    //   venderJS: {
    //     src: [
    //       'bower_components/jquery/dist/jquery.js',
    //       'bower_components/angular/angular.js',
    //       'bower_components/angular-route/angular-route.js',
    //       'bower_components/bootstrap/dist/js/bootstrap.js'
    //       ],
    //     dest: '../build/scripts/vender.js'
    //   },
    //   customJS: {
    //     src: 'app/**/*.js',
    //     dest: '../build/scripts/custom.js'
    //   },
    //   customCSS: {
    //     src: ['app/**/*.css', 'styles/*css'],
    //     dest: '../build/styles/main.css'
    //   }
    // },
    // uglify: {
    //   venderJS: {
    //     src: '<%= concat.venderJS.dest %>',
    //     dest: '../build/scripts/vender.min.js'
    //   },
    //   customJS: {
    //     src: '<%= concat.customJS.dest %>',
    //     dest: '../build/scripts/custom.min.js'
    //   }
    // },
    
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
        html: 'index.html',
        options: {
            dest: '../build/'
        }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
        html: '<%= useminPrepare.options.dest %>/index.html',
    },
    
    copy: {
      main: {
        files: [
          {
            expand: true, 
            src: ['./*.html', 'app/**/*.html', 'app/**/*.{png,jpg}'], 
            dest: '../build/'
          }
        ],
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          $: true,
          jQuery: true
        },
        predef: ['angular']
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['app/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    bowerInstall: {
      target: {

          // Point to the files that should be updated when
          // you run `grunt bower-install`
          src: [
              'index.html',   // .html support...
          ],

          // Optional:
          // ---------
          cwd: '',
          dependencies: true,
          devDependencies: false,
          exclude: [],
          fileTypes: {},
          ignorePath: '',
          overrides: {}
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-bower-install');
  
  // Build task.
  grunt.registerTask('build', function(capp) {
        grunt.task.run([
            'bowerInstall',
            'useminPrepare',
            'concat',
            'cssmin',
            'uglify',
            'copy',
            
            'usemin'
        ]);
    });
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);

};
