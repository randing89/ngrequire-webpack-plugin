// Test priority
// FactoryB should only include dependency from folder b
angular.module('programB', [])
    .factory('exampleB', function (factoryB) {
        return factoryB();
    });