ngrequire-webpack-plugin
========================

[![Build Status](https://travis-ci.org/randing89/ngrequire.svg)](https://travis-ci.org/randing89/ngrequire)

A webpack plugin to handle Angular module dependencies

#Example
With configuration of `new ngRequirePlugin([ './**/*.js' ])`

./a.js
```javascript
angular.module('a', [])
  .factory('test', function(){
  });
```

./b.js
```javascript
angular.module('b', [])
  .controller('controllerB', function (test) {
    // Module 'a' will be automatically required.
    // And 'test' factory will also be the injected
  })
```

#Usage

For more detailed usage please see ./test
```javascript
var ngRequirePlugin = require('ngrequire-webpack-plugin');

{
  plugins: [
    new ngRequirePlugin(['gulp-like file path list for your angular modules'])
  ]
}

```
