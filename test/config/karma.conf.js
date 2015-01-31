var path = require('path');

var rootPath = path.resolve(__dirname, '..');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        reporters: ['progress', 'coverage', 'coveralls'],
        coverageReporter: {
            type: 'lcov',
            dir: path.join(rootPath, 'coverage')
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};