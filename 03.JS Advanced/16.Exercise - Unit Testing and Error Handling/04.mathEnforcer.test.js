const mathEnforcer = require('./index.js');
const { expect, assert } = require('chai');

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
        it('valid, invalud', () => {
            assert.equal(mathEnforcer.sum(1,'a'), undefined);
        });
        it('invalid, valid', () => {
            assert.equal(mathEnforcer.sum('a',1), undefined);
        });

    });
});

// const mathEnforcer = require('./index.js');
// const { expect, assert } = require('chai');

// describe('to test an object', () => {
//     describe('add() function that accepts a single element', () => {
//         it('test with number', () => {
//             expect(mathEnforcer.addFive(5)).to.equal(10);
//         });
//         it('negative integer with number', () => {
//             assert.equal(mathEnforcer.addFive(-5), 0);
//         });
//         it('positive decimal with number', () => {
//             assert.equal(mathEnforcer.addFive(5.5), 10.5);
//         });
//         it('test with string', () => {
//             expect(mathEnforcer.addFive('3')).to.be.undefined;
//         });
//         it('test with []', () => {
//             expect(mathEnforcer.addFive([])).to.be.undefined;
//         });
//         it('test with {}', () => {
//             expect(mathEnforcer.addFive({})).to.be.undefined;
//         });
//         it('test with true', () => {
//             expect(mathEnforcer.addFive(true)).to.be.undefined;
//         });
//         it('test with null', () => {
//             expect(mathEnforcer.addFive(null)).to.be.undefined;
//         });
//         it('test with undefined', () => {
//             expect(mathEnforcer.addFive(undefined)).to.be.undefined;
//         });
//     });
//     describe('subtractTen(num) function that accepts a single element', () => {
//         it('test with number', () => {
//             expect(mathEnforcer.subtractTen(20)).to.equal(10);
//         });
//         it('test with negative number', () => {
//             expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
//         });
//         it('test with negative number', () => {
//             expect(mathEnforcer.subtractTen(5)).to.equal(-5);
//         });
//         it('test with string', () => {
//             expect(mathEnforcer.subtractTen('3')).to.be.undefined;
//         });
//         it('test with []', () => {
//             expect(mathEnforcer.subtractTen([])).to.be.undefined;
//         });
//         it('test with {}', () => {
//             expect(mathEnforcer.subtractTen({})).to.be.undefined;
//         });
//         it('test with true', () => {
//             expect(mathEnforcer.subtractTen(true)).to.be.undefined;
//         });
//         it('test with true', () => {
//             expect(mathEnforcer.subtractTen(null)).to.be.undefined;
//         });
//         it('test with undefined', () => {
//             expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
//         });
//     });
//     describe('sum(num1, num2) - A function that accepts two parameters', () => {
//         it('test with two numbers', () => {
//             expect(mathEnforcer.sum(1, 1)).to.equal(2);
//         });
//         it('test with two negative numbers', () => {
//             expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
//         });
//         it('test with negative and positive numbers', () => {
//             expect(mathEnforcer.sum(-1, 1)).to.equal(0);
//         });
//         it('test with positive and negative numbers', () => {
//             expect(mathEnforcer.sum(1, -1)).to.equal(0);
//         });
//         it('test with number and decimal', () => {
//             expect(mathEnforcer.sum(1, 1.1)).to.equal(2.1);
//         });
//         it('test with decimal and number', () => {
//             expect(mathEnforcer.sum(1.2, 1)).to.equal(2.2);
//         });
//         it('test with decimal and decimal', () => {
//             expect(mathEnforcer.sum(1.7, 1.1)).to.equal(2.8);
//         });
//         //invalid
//         it('test with string and number', () => {
//             expect(mathEnforcer.sum('3', 1)).to.be.undefined;
//         });
//         it('test with number and string', () => {
//             expect(mathEnforcer.sum(1, '1')).to.be.undefined;
//         });
//         it('test with string and string', () => {
//             expect(mathEnforcer.sum('1', '1')).to.be.undefined;
//         });
//         // []
//         it('test with [] and number', () => {
//             expect(mathEnforcer.sum([], 1)).to.be.undefined;
//         });
//         it('test with number and []', () => {
//             expect(mathEnforcer.sum(1, [])).to.be.undefined;
//         });
//         it('test with [] and []', () => {
//             expect(mathEnforcer.sum([], [])).to.be.undefined;
//         });
//         // {}
//         it('test with {} and number', () => {
//             expect(mathEnforcer.sum({}, 1)).to.be.undefined;
//         });
//         it('test with number and {}', () => {
//             expect(mathEnforcer.sum(1, {})).to.be.undefined;
//         });
//         it('test with {} and {}', () => {
//             expect(mathEnforcer.sum({}, {})).to.be.undefined;
//         });
//         // true
//         it('test with true and number', () => {
//             expect(mathEnforcer.sum(true, 1)).to.be.undefined;
//         });
//         it('test with number and true', () => {
//             expect(mathEnforcer.sum(1, {})).to.be.undefined;
//         });
//         it('test with true and true', () => {
//             expect(mathEnforcer.sum(true, true)).to.be.undefined;
//         });
//     });
// });

// describe('to test an object', () => {
//     describe('add() function that accepts a single element', () => {
//         it('test with number', () => {
//             expect(mathEnforcer.addFive(5)).to.equal(10);
//         });
//         it('input is not a number', () => {
//             expect(mathEnforcer.addFive(typeof n !== 'number')).to.be.undefined;
//         });
//     });
//     describe('subtractTen(num) function that accepts a single element', () => {
//         it('test with number', () => {
//             expect(mathEnforcer.subtractTen(20)).to.equal(10);
//         });
//         it('input is not a number', () => {
//             expect(mathEnforcer.subtractTen(typeof n !== 'number')).to.be.undefined;
//         });
//     });
//     describe('sum(num1, num2) - A function that accepts two parameters', () => {
//         it('test with two numbers', () => {
//             expect(mathEnforcer.sum(1, 1)).to.equal(2);
//         });
//         it('input is not a number and number', () => {
//             expect(mathEnforcer.sum(typeof n1 !== 'number', 1)).to.be.undefined;
//         });
//         it('input is number and not a number', () => {
//             expect(mathEnforcer.sum(1, typeof n2 !== 'number')).to.be.undefined;
//         });
//         it('input is not a number and not a number', () => {
//             expect(mathEnforcer.sum(typeof n1 !== 'number', typeof n2 !== 'number')).to.be.undefined;
//         });
//     });
// });