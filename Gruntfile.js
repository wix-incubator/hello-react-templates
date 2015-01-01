'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            main: {
                src: ['src/**/*.rt.js']
            }
        },
        eslint: {
            all: {
                src: [
                    'src/**/*.js'
                ]
            }
        },
        watch: {
            rt: {
                files: [
                    'playground/*.rt'
                ],
                tasks: ['rt'],
                options: {
                    spawn: false
                }
            }
        },
        reactTemplates: {
            modules: 'amd',
            format: 'stylish',
            src: ['src/**/*.rt']
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('default', ['eslint', 'rt']);
    grunt.registerTask('test', []);

    grunt.registerTask('all', ['default', 'test']);
};
