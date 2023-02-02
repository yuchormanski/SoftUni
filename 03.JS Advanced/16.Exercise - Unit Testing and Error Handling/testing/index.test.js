/* const sum = require('./index.js');
const { assert } = require('chai');

describe('sum function test', () => {
    it('test with two numbers', () => {
        assert.equal(sum(3, 4), 7);
    })
    it('test with string and number', () => {
        assert.equal(sum('3', 4), 7);
    })
}) */

//---------------

/* const isOddOrEven = require('./index.js');
const { assert } = require('chai');

describe('isOddOrEven function test', () => {
    it('should return undef if param is number', () => {
        assert.equal(isOddOrEven(10), undefined)
    });
    it('should return undef if param is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined)
    });
    it('should return undef if param is null', () => {
        assert.equal(isOddOrEven(null), undefined)
    });
    it('should return undef if param is object', () => {
        assert.equal(isOddOrEven({}), undefined)
    });
    it('should return undef if param is array', () => {
        assert.equal(isOddOrEven([]), undefined)
    });
    it('should return even', () => {
        assert.equal(isOddOrEven('aa'), 'even')
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('a'), 'odd')
    });

}); */

// -------------------------


/* const lookupChar = require('./index.js');
const { assert } = require('chai');


describe('lookupChar function tests', () => {
    // valid values test
    it('test with string and valid index', () => {
        // expect(err.message).to.equal("bad error");
        assert.equal(lookupChar('abcde', 2), 'c');
    });
    it('test with string and valid index', () => {
        assert.equal(lookupChar('a', 0), 'a');
    });
    it('test with index bigger than string length', () => {
        assert.equal(lookupChar('abcde', 10), 'Incorrect index');
    });
    it('test with negative index', () => {
        assert.equal(lookupChar('abcde', -10), 'Incorrect index');
    });

    it('test with number instead string', () => {
        assert.equal(lookupChar(1, 1), undefined);
    });
    it('test with string and floating point number', () => {
        //expect(myValue).to.be.stringOrNumber();
        assert.equal(lookupChar('abcde', 10.1), undefined);
    });
    it('test with string instead index num', () => {
        assert.equal(lookupChar('abcde', 'a'), undefined);
    });
    it('test with empty string', () => {
        assert.equal(lookupChar('', '0'), undefined);
    });
}); */

//--------------------

/* const mathEnforcer = require('./index.js');
const { assert } = require('chai');

describe('mathEnforcer functions tests', () => {
    describe('tests for addFive', () => {
        //negative
        it('should return undef with string', () => {
            assert.equal(mathEnforcer.addFive('a'), undefined);
        });
        it('should return undef with {}', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('should return undef with []', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('should return undef with undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        it('should return undef with null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });
        //
        it('positive integer with number', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('negative integer with number', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
        it('positive decimal with number', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });

    });
    describe('tests for subtractTen', () => {
        it('sould return undef with string', () => {
            assert.equal(mathEnforcer.subtractTen('a'), undefined);
        });
        it('sould return undef with {}', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('sould return undef with []', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });
        it('sould return undef with undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        it('sould return undef with null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });
        //
        it('positive integer with number', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });
        it('negative integer with number', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });
        it('positive decimal with number', () => {
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
        });
    });
    describe('tests for sum', () => {
        //valid inputs
        it('two positive', () => {
            assert.equal(mathEnforcer.sum(1,1), 2);
        });
        it('two negative', () => {
            assert.equal(mathEnforcer.sum(-5,-3), -8);
        });
        it('two decimal nums', () => {
            assert.equal(mathEnforcer.sum(5.2,3.5), 8.7);
        });
        //invalid 
        it('valid, invalid', () => {
            assert.equal(mathEnforcer.sum(1,'a'), undefined);
        });
        it('invalid, valid', () => {
            assert.equal(mathEnforcer.sum('a',1), undefined);
        });

    });
}); 
*/

//--------------------------