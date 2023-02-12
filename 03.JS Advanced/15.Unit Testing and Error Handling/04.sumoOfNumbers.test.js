const sum = require('./index.js');
const {expect } = require('chai');

describe('function sum', () => {
    it('Take an array of numbers as an argument', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('Take an array of numbers as an argument', () => {
        expect(sum([1])).to.equal(1);
    });
    it('empty array', () => {
        expect(sum([])).to.equal(0);
    });

});