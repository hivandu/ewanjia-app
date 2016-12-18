module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        // less compiler
        less: {
            development: {
                files: {
                    "css/ewanjia.css" : "less/*.less"
                   // where compile to
                                       // less source
                }
            }
        }
    });

    // load npm task components
    grunt.loadNpmTasks('grunt-contrib-less');

    // define task
    grunt.registerTask('compileLess', ['less:development']);
};