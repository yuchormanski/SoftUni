const isOddOrEven = require('./index.js');
const { assert, expect } = require('chai')

describe('func test', () => {
    it('even length string test', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
    it('odd length string tst', () => {
        expect(isOddOrEven('aaa')).to.equal('odd');
    });
    it('test with number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });
    it('test with []', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('test with {}', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('test with empty input', () => {
        expect(isOddOrEven()).to.be.undefined;
    });
});

// describe('func test', () => {
//     it('even length string test', () => {
//         assert.equal(isOddOrEven('aa'),'even');
//     });
//     it('odd length string tst', () => {
//         assert.equal(isOddOrEven('aaa'),'odd');
//     });
//     it('test with number', () => {
//         assert.equal(isOddOrEven(2),undefined);
//     });
// });