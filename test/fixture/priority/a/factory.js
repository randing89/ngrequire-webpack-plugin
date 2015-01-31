angular.module('priorityA')
    .factory('factoryA', function(factory) {
        return function () {
            return 'factory from a and ' + factory();
        }
    });
