angular.module('math')
.factory('minus', function() {
    return function () {
        var sum = arguments[0], i = 1, args = arguments, l = args.length;
        while (i < l) {
            sum -= args[i++];
        }
        return sum;
    }
});
