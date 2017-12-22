module.exports = function (grunt) {
    return {
        main: {
            options: {
                add    : (grunt.option('cleanup') ? false : true),
                base   : 'dist',
                branch : 'gh-pages',
                message: global.release_target ? 'Release to ' + global.release_target : 'Auto-generated commit',
            },
            src: global.branch ? [global.branch_prefix + global.branch + '/**'] : ['**', '!' + (global.branch_prefix || 'br_') + '*/**']
        },
        test: { // TODO: to be removed
            options: {
                add    : (grunt.option('cleanup') ? false : true),
                base   : 'dist',
                branch : 'gh-pages',
                repo   : 'git@github.com:ashkanx/binary-static.git',
                message: global.release_target ? 'Release to ' + global.release_target : 'Auto-generated commit',
            },
            src: global.branch ? [global.branch_prefix + global.branch + '/**'] : ['**', '!' + (global.branch_prefix || 'br_') + '*/**']
        },
        trigger_tests: {
            options: {
                add    : true,
                base   : 'dist',
                branch : 'master',
                repo   : 'git@github.com:binary-com/robot-framework.git',
                message: 'Trigger tests',
            },
            src: grunt.option('staging') ? 'version' : '',
        },
    }
};
