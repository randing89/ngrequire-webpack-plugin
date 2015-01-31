angular.module('priorityA')
    .factory('factory', function() {
        return function () {
            return 'factory dep from a';
        }
    });
