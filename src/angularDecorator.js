var ngRegisteredModules = [];

module.exports = (function () {
    var angular = window.angular;

    if (!angular) {
        throw new Error('window.angular is not defined');
    }

    var origMethod = angular.module;
    angular.module = function(name, reqs, configFn) {
        reqs = reqs || [];
        var module = null;

        if (ngRegisteredModules[name]) {
            module = origMethod(name);
            module.requires.push.apply(module.requires, reqs);
        } else {
            module = origMethod(name, reqs, configFn);
            ngRegisteredModules[name] = module;
        }

        return module;
    };

    return angular;
})();