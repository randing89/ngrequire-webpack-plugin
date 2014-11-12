var gulp = require('gulp');
var webpack = require('gulp-webpack');
var karma = require('gulp-karma');
var shell = require('gulp-shell');

var paths = {
    test: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'test/out/*.js',
        'test/spec*.js'
    ]
};

gulp.task('pack', function() {
    var webpackConf = require('./test/webpack.conf.js');

    return gulp.src([ './test/fixture/*.js' ])
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest('./test/out/'));
});

gulp.task('test', ['pack'], function() {
    return gulp.src(paths.test, {read: false})
        .pipe(karma({
            configFile: './test/karma.conf.js',
            action: 'run'
        }));
});

gulp.task('release', function () {
    // copy file
    gulp.src('')
        .pipe(shell(['npm version patch']))
        .pipe(shell(['npm pack']))
        .pipe(shell('mkdir -p ./dist && mv *.tgz ./dist/ngrequire-webpack-plugin.tgz'))
});
