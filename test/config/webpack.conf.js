
module.exports = {
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            angular: './angular.js'
        }
    },
    plugins: [],
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                exclude: /(test|node_modules|bower_components)\//,
                loader: 'istanbul-instrumenter'
            }
        ]
    }
};