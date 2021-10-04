var assert = require('assert');
var MD = require('md-as-code');

describe('Function Test', function() {
    describe('start MD()', function() {
        it('should start MD()', function() {
            const testPath = "test";

            const md = new MD(testPath);
            assert.equal(md.getFilePath(), testPath + ".md");
        });

        it('should contain name "untitled" when passing no value', function() {
            const md = new MD();
            assert.equal(md.getFilePath(), "untitled.md");
        });

    });
});