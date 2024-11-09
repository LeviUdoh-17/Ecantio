module.exports = function (grunt) {
    // Load the required plugins
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-shell');
  
    // Project configuration
    grunt.initConfig({
      htmlmin: {                                     // Task for minifying HTML
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.html': 'index.html'      // Minifies src/index.html to dist/index.html
          }
        }
      },
      shell: {                                       // Task for running shell commands
        surge: {
          command: 'surge ./dist Ecantio.surge.sh'
        }
      }
    });
  
    // Register tasks
    grunt.registerTask('build', ['htmlmin']);        // Task for building
    grunt.registerTask('deploy', ['build', 'shell:surge']); // Task for building and deploying
  };
  