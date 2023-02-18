const findNewApartment = require('./index.js');
const { expect } = require('chai');

describe('', () => {
    describe('•	isGoodLocation (city, nearPublicTransportation)', () => {
        //accepts two parameters: string and boolean
        it('if city is different than a "Sofia", "Plovdiv" or "Varna"', () => {
            expect(findNewApartment.isGoodLocation('a', true)).to.equal('This location is not suitable for you.');
        });
        it('If the value of the boolean is false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
        it('if the above conditions are not met', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
        it('error', () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation("Sofia", 1)).to.throw();
            expect(() => findNewApartment.isGoodLocation("Sofia", '1')).to.throw();
        });
    });

    describe('•	isLargeEnough (apartments, minimalSquareMeters)', () => {
        //accepts an array and number
        it('can afford', () => {
            expect(findNewApartment.isLargeEnough([1], 1)).to.equal('1');
        });
        it('can afford', () => {
            expect(findNewApartment.isLargeEnough([1,2], 2)).to.equal('2');
        });
        it('can afford', () => {
            expect(findNewApartment.isLargeEnough([1,2,3], 1)).to.equal('1, 2, 3');
        });
        //errors
        it('invalid array', () => {
            expect(() => findNewApartment.isLargeEnough('',1)).to.throw();
        });
        it('invalid minSqM', () => {
            expect(() => findNewApartment.isLargeEnough([1],'1')).to.throw();
        });
        it('empty array', () => {
            expect(() => findNewApartment.isLargeEnough([],1)).to.throw();
        });
    });

    describe('•	isItAffordable (price, budget)', () => {
        //accepts two parameters: number and number
        //errors
        it('if not number arr1', () => {
            expect(() => findNewApartment.isItAffordable('1',1)).to.throw();
        });
        it('if not number arr2', () => {
            expect(() => findNewApartment.isItAffordable(1,'1')).to.throw();
        });
        it('if negative number arr1', () => {
            expect(() => findNewApartment.isItAffordable(-1,1)).to.throw();
        });
        it('if negative number arr2', () => {
            expect(() => findNewApartment.isItAffordable(1,-1)).to.throw();
        });

        //
        it('if result < 0', () => {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
        });
        it('if result = 0', () => {
            expect(findNewApartment.isItAffordable(1, 1)).to.equal("You can afford this home!");
        });
        it('if result > 0', () => {
            expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
        });
    });
});