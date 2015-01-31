describe('ngRequire Webpack Plugin', function () {
    it('should use module that has shortest relative path', function () {
        angular.mock.module('programA');
        angular.mock.inject(function (exampleA) {
            expect(exampleA).to.be.equal('factory from a and factory dep from a');
        })
    });

    it('should use module that has shortest relative path', function () {
        angular.mock.module('programB');
        angular.mock.inject(function (exampleB) {
            expect(exampleB).to.be.equal('factory from b and factory dep from b');
        })
    });
});