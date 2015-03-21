ngrequire-webpack-plugin
========================

[![Build Status](https://travis-ci.org/randing89/ngrequire-webpack-plugin.svg?branch=master)](https://travis-ci.org/randing89/ngrequire-webpack-plugin)
[![Coverage Status](https://coveralls.io/repos/randing89/ngrequire-webpack-plugin/badge.svg?branch=master)](https://coveralls.io/r/randing89/ngrequire-webpack-plugin?branch=master)
[![Dependency Status](https://gemnasium.com/randing89/ngrequire-webpack-plugin.svg)](https://gemnasium.com/randing89/ngrequire-webpack-plugin)


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
    new ngRequirePlugin(['file path list for your angular modules. eg: src/**/*.js'])
  ]
}

```
