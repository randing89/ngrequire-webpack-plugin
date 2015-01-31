angular.module('priorityB')
    .factory('factory', function() {
        return function () {
            return 'factory dep from b';
        }
    });
