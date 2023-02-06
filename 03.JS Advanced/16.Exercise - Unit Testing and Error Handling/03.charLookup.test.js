const lookupChar = require('./index.js');
const {assert, expect} = require('chai');

describe('function that retrieves a character ', () => {
    it('test with string and integer', () => {
        expect(lookupChar('abc', 1)).to.equal('b');
    });
    it('test with string and decimal number', () => {
        expect(lookupChar('abc', 1.1)).to.be.undefined;
    });
    it('test with string and bigger than string length', () => {
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
    });
    it('test with string and smaller than string length', () => {
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
    });
    it('test with number and number', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });
    it('test with [] and number', () => {
        expect(lookupChar([], 1)).to.be.undefined;
    });
    it('test with {} and number', () => {
        expect(lookupChar({}, 1)).to.be.undefined;
    });
    it('test with string and []', () => {
        expect(lookupChar('abc', [])).to.be.undefined;
    });
    it('test with string and {}', () => {
        expect(lookupChar('abc', {})).to.be.undefined;
    });
    it('test with string and string', () => {
        expect(lookupChar('abc', 'a')).to.be.undefined;
    });
});