var assert = require('assert');

var MD = require('md-as-code');


describe('File Test', function() {

    describe('start MD()', function() {
        it('should return -1 when the value is not present', function() {

            try {

                const md = new MD("test");
            } catch (e) {

                assert.ok(false);

            }
        });
    });
});