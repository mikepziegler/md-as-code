var assert = require('assert');

const MD = require('md-as-code');

const md1 = new MD("test");
console.log(md1.getFilePath());

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




        it('should contain name "untitled" when passing no value', function() {
            const md = new MD();




            assert.equals()
        });

    });
});