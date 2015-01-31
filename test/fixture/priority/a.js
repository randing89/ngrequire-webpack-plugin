// Test priority
// FactoryA should only include dependency from folder a
angular.module('programA', [])
    .factory('exampleA', function (factoryA) {
        return factoryA();
    });