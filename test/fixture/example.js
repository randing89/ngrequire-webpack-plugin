require('./moduleOutsideIndexingScope');

// Test standard way of specifying dependency
angular.module('program', ['wrapper', 'aThirdParty'])
.factory('example', function (calculate, wrap, aaa) {
    var a = 1;
    return wrap(calculate(a)) + aaa;
});