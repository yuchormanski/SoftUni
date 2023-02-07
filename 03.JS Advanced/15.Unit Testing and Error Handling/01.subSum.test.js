const subSum = require('./index.js');
const { expect, assert } = require('chai');

describe('test function subSum', () => {
    it('test with array, valid start, valid end indexes', () => {
        expect(subSum([1,2,3,4,5], 1, 3)).to.equal(9)
    });
    it('test with array, invalid start, valid end indexes', () => {
        expect(subSum([1,2,3,4,5], -1, 3)).to.equal(10)
    });
    it('test with array, valid start, invalid end indexes', () => {
        expect(subSum([1,2,3,4,5], -1, 3)).to.equal(10)
    });
    it('test with array, valid start, invalid end indexes', () => {
        expect(subSum([1,2,3,4,5], 1, 0)).to.equal(2)
    });
    it('test with array, valid start, outOFBound end indexes', () => {
        expect(subSum([1,2,3,4,5], 3, 10)).to.equal(9)
    });
    it('test with empty array, valid start, valid end indexes', () => {
        expect(subSum([], 1, 3)).to.equal(0)
    });
    //
    it('test with array, string element and valid indexes', () => {
        expect(subSum(['1',2,3,4,5], 0, 3)).to.be.NaN;
    });
    it('test with array, boolean element and valid indexes', () => {
        expect(subSum([1,2,true,4,5], 0, 3)).to.be.NaN;
    });
});