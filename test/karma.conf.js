var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: path.join(path.resolve(__dirname), 'fixture'),
        frameworks: ['mocha', 'chai'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};