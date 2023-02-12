const motorcycleRider = require('./index.js');
const { expect } = require('chai');

describe('motorcycleRider', function() {
    describe('licenseRestriction (category', () => {
        it('am', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });
        it('a1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });
        it('a2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });
        it('a', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
        it('error', () => {
            expect(() => motorcycleRider.licenseRestriction('other')).to.throw();
            expect(() => motorcycleRider.licenseRestriction('')).to.throw();
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw();
            expect(() => motorcycleRider.licenseRestriction([])).to.throw();
            expect(() => motorcycleRider.licenseRestriction({})).to.throw();
            expect(() => motorcycleRider.licenseRestriction(true)).to.throw();
            expect(() => motorcycleRider.licenseRestriction(null)).to.throw();
            expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw();
        });
    });

    describe('motorcycleShowroom (engineVolume, maximumEngineVolume()) ', () => {
        it('array and number errors', () => {
            expect(() => motorcycleRider.motorcycleShowroom('', 1)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(1, 1)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom({}, 1)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(true, 1)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(null, 1)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 1)).to.throw();

            expect(() => motorcycleRider.motorcycleShowroom([], '')).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], [])).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], {})).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], true)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], null)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], undefined)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], 51)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([1], 49)).to.throw();
        });
        it('array and number', () => {
            expect(motorcycleRider.motorcycleShowroom([125,200], 125)).equal('There are 1 available motorcycles matching your criteria!')
        });
        it('array and number', () => {
            expect(motorcycleRider.motorcycleShowroom([125,200], 325)).equal('There are 2 available motorcycles matching your criteria!')
        });
        it('array and number', () => {
            expect(motorcycleRider.motorcycleShowroom([125], 125)).equal('There are 1 available motorcycles matching your criteria!')
        });
    });

    describe('otherSpendings (equipment, consumables, discount) ', () => {
        // array, array and boolean
        it('error', () => {
//         expect(() => motorcycleRider.otherSpendings([],[],true)).to.throw();
        expect(() => motorcycleRider.otherSpendings('',[],true)).to.throw();
        expect(() => motorcycleRider.otherSpendings([],'',true)).to.throw();
        expect(() => motorcycleRider.otherSpendings([],[],'')).to.throw();
        });

        it('no discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],false)).to.equal('You spend $270.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil'],false)).to.equal('You spend $570.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)).to.equal('You spend $600.00 for equipment and consumables!');

            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil'],true)).to.equal("You spend $513.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
            
        });
        
    });
});