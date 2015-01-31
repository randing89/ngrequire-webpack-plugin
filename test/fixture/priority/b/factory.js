angular.module('priorityB')
    .factory('factoryB', function(factory) {
        return function () {
            return 'factory from b and ' + factory();
        }
    });
