/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__, __ngrequire_module_wrapper__, __ngrequire_module_cal__) {__webpack_require__(1);

	// Test standard way of specifying dependency
	__ngrequire_load__('program', 'wrapper', 'cal', 'aThirdParty');

	angular.module('program', [])
	.factory('example', function (calculate, wrap, aaa) {
	    var a = 1;
	    return wrap(calculate(a)) + aaa;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(2), __webpack_require__(3)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__) {angular.module('aThirdParty')
	.factory('aaa', function() {
	    return 'aaa';
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__) {angular.module('wrapper')
	.factory('wrap', function() {
	    return function (s) {
	        return '#' + s + '#';
	    }
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__, __ngrequire_module_math__) {/* WEBPACK VAR INJECTION */(function(__ngrequire_module_math__) {// Shortcut way
	__ngrequire_load__('cal', 'math');

	angular.module('cal', [])
	.factory('calculate', function(add, minus) {
	    return function (val) {
	        return minus(add(val, 10), 2);
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))}.call(exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ngRegisteredModules = [];

	module.exports = (function () {
	    var angular = window.angular;

	    if (!angular) {
	        throw new Error('window.angular is not defined');
	    }

	    var origMethod = angular.module;
	    angular.module = function(name, reqs, configFn) {
	        reqs = reqs || [];
	        var module = null;

	        if (ngRegisteredModules[name]) {
	            module = origMethod(name);
	            module.requires.push.apply(module.requires, reqs);
	        } else {
	            module = origMethod(name, reqs, configFn);
	            ngRegisteredModules[name] = module;
	        }

	        return module;
	    };

	    return angular;
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (moduleName) {
	    var angular = window.angular;

	    if (!angular) {
	        throw new Error('window.angular is not defined');
	    }

	    var providers = Array.prototype.slice.call(arguments, 1);
	    var angularModule = angular.module;

	    var requires = angularModule(moduleName).requires || [];

	    for (var i = 0; i < providers.length; i++) {
	        var provider = providers[i];
	        if (requires.indexOf(provider) === -1) {
	            requires.push(provider);
	        }
	    }
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__) {angular.module('math')
	.factory('minus', function() {
	    return function () {
	        var sum = arguments[0], i = 1, args = arguments, l = args.length;
	        while (i < l) {
	            sum -= args[i++];
	        }
	        return sum;
	    }
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, __ngrequire_load__) {angular.module('math')
	.factory('add', function() {
	    return function () {
	        var sum = 0, i = 0, args = arguments, l = args.length;
	        while (i < l) {
	            sum += args[i++];
	        }
	        return sum;
	    }
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ }
/******/ ])