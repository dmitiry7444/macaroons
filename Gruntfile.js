
module.exports = function (grunt) {

    grunt.initConfig({
            less: {
                development: {
                    options: {
                        paths: ['dist']
                    },
                    files: {
                        // target.css file: source.less file
                        "dist/styles.css": "src/styles.less",
                        "dist/adaptive.css": "src/adaptive.less"

                    }
                }
            },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles.min.css': ['dist/styles.css'],
                    'dist/adaptive.min.css': ['dist/adaptive.css']

                }
            }
        },clean: ['dist/styles.css', 'dist/adaptive.css'],
        watch: {
        styles: {
            files: ['src/*.less'], // which files to watch
                tasks: ['less','cssmin', 'clean', 'watch'],
                options: {
                nospawn: true
            }
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','cssmin', 'clean', 'watch']);
};