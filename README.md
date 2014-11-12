ngrequire-webpack-plugin
========================

A webpack plugin to handle Angular module dependencies

#Example
With configuration of `new ngRequirePlugin([ './**/*.js' ])`

./a.js
```
angular.module('a', [])
  .factory('test', function(){
  });
```

./b.js
```
angular.module('b', [])
  .controller('controllerB', function (test) {
    // Module 'a' will be automatically required.
    // And 'test' factory will also be the injected
  })
```

#Usage

For more detailed usage please see ./test
```
var ngRequirePlugin = require('ngrequire-webpack-plugin');

{
  plugins: [ new ngRequirePlugin(['gulp-like file path list for your angular modules']) ]
}

```
