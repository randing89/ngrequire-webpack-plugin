angular.module('wrapper')
.factory('wrap', function() {
    return function (s) {
        return '#' + s + '#';
    }
});
