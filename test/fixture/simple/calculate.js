// Shortcut way
angular.module('cal')
    .factory('calculate', function (add, minus) {
        return function (val) {
            return minus(add(val, 10), 2);
        }
    });