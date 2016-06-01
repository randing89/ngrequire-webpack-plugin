var NullDependency = require('webpack/lib/dependencies/NullDependency');

function PushDependency(currentModule, requiredModules, filePath, expression) {
    NullDependency.call(this);
    this.constructor = PushDependency;
    this.expression = expression;
    this.range = expression.range;

    this.filePath = filePath;
    this.currentModule = currentModule;
    this.requiredModules = requiredModules;
}

module.exports = PushDependency;

PushDependency.prototype = Object.create(NullDependency.prototype);

PushDependency.Template = function PushDependencyTemplate() {};

PushDependency.Template.prototype.apply = function(dep, source, outputOptions, requestShortener) {
    var requiredModules = dep.requiredModules;

    if (requiredModules.length === 0) {
        // Do not proceed if nothing to require
        return;
    }

    var moduleNames = [];
    requiredModules.forEach(function (requiredModuleName) {
        moduleNames.push(requiredModuleName);
    });

    var arguments = dep.expression.arguments;
    // We don't want lose existing dependencies
    if (arguments.length > 1 && arguments[1].type === 'ArrayExpression') {
        // Put existing drpendencies to moduleNames list
        arguments[1].elements.forEach(function (element) {
            if (moduleNames.indexOf(element.value) === -1) {
                moduleNames.push(element.value);
            }
        });
    }

    // Add quotes
    moduleNames = moduleNames.map(function (moduleName) {
        return "'{0}'".f(moduleName);
    });

    var sourceHeader = "__ngrequire_load__('{0}', {1});\n\n".f(dep.currentModule, moduleNames.join(', '));
    source.replace(dep.range[0], dep.range[1]-1, sourceHeader + "angular.module('{0}', [])".f(dep.currentModule));
};
