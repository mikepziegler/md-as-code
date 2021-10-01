var assert = require('assert');

var MD = require('md-as-code');


describe('Function Test', function() {
    describe('start MD()', function() {
        it('should start MD()', function() {
            try {
                const md = new MD("test");
                assert.ok(true);
            } catch (e) {
                assert.ok(false);
            }
        });

        it('should not start MD() without passing parameter', function() {
            try {
                const md = new MD();

            } catch (e) {

            }
        });

        it('should not start MD() with an empty string as passing parameter', function() {

            const testLine = "Test Zeile";

            try {
                const md = new MD("");

            } catch (e) {

            }
        });
    });
});