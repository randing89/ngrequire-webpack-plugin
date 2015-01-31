angular.module('math')
.factory('add', function() {
    return function () {
        var sum = 0, i = 0, args = arguments, l = args.length;
        while (i < l) {
            sum += args[i++];
        }
        return sum;
    }
});
