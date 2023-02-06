const mathEnforcer = require('./index.js');
const { expect } = require('chai');

describe('to test an object', () => {
    describe('add() function that accepts a single ', () => {
        it('test with number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('test with string', () => {
            expect(mathEnforcer.addFive('3')).to.be.undefined;
        });
        it('test with []', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('test with {}', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('test with true', () => {
            expect(mathEnforcer.addFive(true)).to.be.undefined;
        });
    });
    // describe('subtractTen(num) function that accepts a single ', () => {
        
    // });
    // describe('sum(num1, num2) - A function that accepts two parameters', () => {
        
    // });
});