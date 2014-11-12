describe('ngRequire Webpack Plugin', function () {
    it('should run', function () {
        angular.mock.module('program');
        angular.mock.inject(function (example) {
            expect(example).to.be.equals('#9#aaa');
        })
    });
});