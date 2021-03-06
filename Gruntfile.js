module.exports = function(grunt){
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      src: ["lib/**/*.js"]
    },
    mochify: {
      options: {
        reporter: 'spec'
      },
      unit: {
        src: ['lib/**/*-spec.js']
      }
    },
    wfmTemplate: {
      module: "wfm.file.directives",
      templateDir: "lib/templates",
      outputDir: "lib/dist"
    }
  });
  grunt.loadNpmTasks('fh-wfm-template-build');
  grunt.registerTask('eslint', ['eslint']);
  grunt.registerTask('test', ['mochify:unit']);};
