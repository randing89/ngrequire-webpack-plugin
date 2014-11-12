var ngRequirePlugin = require('../index');

var root = path.join(path.resolve(__dirname), 'fixture');

module.exports = {
    debug: true,
    context: root,
    entry: './example.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        root: root,
        alias: {
            angular: './angular.js'
        }
    },
    plugins: [
        new ngRequirePlugin([
            root + '/*.js',
            '!' + root + '/moduleOutsideIndexingScope.js'
        ])
    ]
};