const { expect } = require('chai');
const testNumbers = require('./index.js')

describe('test Object testNumbers', function () {
    describe('sumNumber(num1, num2)', () => {
        // - A function that accepts two parameters
        it('test with string & number ', () => {
            expect(testNumbers.sumNumbers('a', 1)).to.equal(undefined)
        })
        it('test with number & string', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined)
        })
        it('test with positive mumbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00')
        })
        it('test with negative mumbers', () => {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00')
        })
        it('test with positive & negative numbers', () => {
            expect(testNumbers.sumNumbers(1, -1)).to.equal('0.00')
        })
        it('test with negative & positive numbers', () => {
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00')
        })
    })

    describe('numberChecker(input)', () => {
        //accepts a single parameter parsed to number
        it('error if NaN', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
        it('error if empty string', () => {
            expect(() => testNumbers.numberChecker()).to.throw();
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker('0')).to.equal('The number is even!');
        });

        it('parse to number', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
        });

        it('parse to number', () => {
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        });
        it('parse to number', () => {
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
        });

    });

    describe('averageSumArray(arr)', () => {
        //accept single parameter (array):
        //array will be always valid
        it('with 1 element', () => {
            expect(testNumbers.averageSumArray([1])).to.equal(1);
        });
        it('with 3 element', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('with 3 element', () => {
            expect(testNumbers.averageSumArray([1.2, 2, 3.15])).to.equal(2.1166666666666667);
        });
    });
});