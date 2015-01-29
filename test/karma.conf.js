var path = require('path');

var currentPath = path.resolve(__dirname);

module.exports = function (config) {
    config.set({
        basePath: path.join(currentPath, 'fixture'),
        frameworks: ['mocha', 'chai'],
        reporters: ['progress', 'coverage', 'coveralls'],
        coverageReporter: {
            type: 'lcov',
            dir: path.join(currentPath, '../coverage')
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};