var dollarRegexp = /\$/gi;

/**
 * Safe replace
 *
 * @param suffix
 * @returns {boolean}
 */
if (typeof String.prototype.safeReplace !== 'function') {
    String.prototype.safeReplace = function(exp, replacement) {
        return this.replace(exp, replacement.replace(dollarRegexp, '$$$$'));
    };
}

/**
 * Format a string
 *
 * @returns {String}
 */
if (typeof String.prototype.format !== 'function') {
    String.prototype.format = function () {
        var formatted = this;
        for (var i = 0; i < arguments.length; i++) {
            var regexp = new RegExp('\\{' + i + '\\}', 'gi');
            // All $ in string will be replaced with $$
            var value = (arguments[i] === undefined) ?
                'undefined':
                arguments[i].toString();
            formatted = formatted.safeReplace(regexp, value);
        }

        return formatted;
    };
}

if (typeof String.prototype.f !== 'function') {
    String.prototype.f = String.prototype.format;
}

/**
 * Test if string start with prefix
 *
 * @param prefix
 * @returns {boolean}
 */
if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function(suffix) {
        return this.indexOf(suffix) === 0;
    };
}

/**
 * Test if string end with suffix
 *
 * @param suffix
 * @returns {boolean}
 */
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

module.exports = {
    nullOrEmpty: function (s) {
        return (Object.prototype.toString.call(s) === '[object String]') ?
            (s.trim() === '') :
            (s === undefined || s === null);
    }
};
