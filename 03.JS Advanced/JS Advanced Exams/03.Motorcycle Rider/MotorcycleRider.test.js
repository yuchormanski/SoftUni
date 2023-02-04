const motorcycleRider = require("./MotorcycleRider.js");
const { assert, expect } = require('chai');
const { licenseRestriction } = require("./MotorcycleRider.js");

describe('test motorcycleRider', () => {
    describe('licenseRestriction or category', () => {
        it('test for one string param valid', () => {
            assert.equal(licenseRestriction('AM'), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });
        it('test for one string param valid', () => {
            assert.equal(licenseRestriction('A1'), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });
        it('test for one string param valid A2', () => {
            assert.equal(licenseRestriction('A2'), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });
        it('test for one string param valid A', () => {
            assert.equal(licenseRestriction('A'), 'No motorcycle restrictions, and the minimum age is 24.')
        });
        // invalid
        it('test with different string', () => {
            assert.equal(licenseRestriction('AA'),'Invalid Information!');
        });
        it('test with number', () => {
            expect(licenseRestriction(1)).to.throw('Invalid Information!');
        });
        it('test with boolean', () => {
            expect(licenseRestriction(true)).to.throw('Invalid Information!');
        });
        it('test with []', () => {
            expect(licenseRestriction([])).to.throw('Invalid Information!');
        });
        it('test with {}', () => {
            expect(licenseRestriction({})).to.throw('Invalid Information!');
        });
    });
});