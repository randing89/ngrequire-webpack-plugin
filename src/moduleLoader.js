module.exports = function (moduleName) {
    var angular = window.angular;

    if (!angular) {
        throw new Error('window.angular is not defined');
    }

    var providers = Array.prototype.slice.call(arguments, 1);
    var angularModule = angular.module;

    var requires = angularModule(moduleName).requires || [];

    for (var i = 0; i < providers.length; i++) {
        var provider = providers[i];
        if (requires.indexOf(provider) === -1) {
            requires.push(provider);
        }
    }
};
