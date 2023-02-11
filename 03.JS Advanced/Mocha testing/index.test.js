const carService = require('./index.js');
const { expect } = require('chai');


describe('carService', function () {
    describe('isItExpensive (issue)', () => {
        //accepts one parameter: string
        // no need for validation for the input
        // INVALID
        it('non valid string', () => {
            expect(carService.isItExpensive('joint')).to.equal('The overall price will be a bit cheaper');
        });
        //VALID
        it('Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });

    });

    describe('discount (numberOfParts, totalPrice) ', () => {
        // accepts two parameters: number and number
        //need to validate the input
        it('numberOfParts and totalPrice are not a numbers', () => {
            expect(() => carService.discount('1', '1')).to.throw();
        });
        it('numberOfParts is not a number', () => {
            expect(() => carService.discount('1', 1)).to.throw();
        });
        it('totalPrice is not a number', () => {
            expect(() => carService.discount(1, '1')).to.throw();
        });
        it('15% when numberOfParts is higher than 2 and smaller or equal to 7', () => {
            expect(carService.discount(3, 10)).to.equal('Discount applied! You saved 1.5$');
        });
        it('15% when numberOfParts is higher than 2 and smaller or equal to 7', () => {
            expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$');
        });
        it('30% when numberOfParts is higher than 7', () => {
            expect(carService.discount(8, 10)).to.equal('Discount applied! You saved 3$');
        });
        it('numberOfParts is smaller or equal to 2', () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
        });
        it('numberOfParts is smaller or equal to 2', () => {
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
        });

    });

    describe('partsToBuy (partsCatalog, neededParts) ', () => {
        //accepts two arrays
        it('partsCatalog is empty', () => {
            expect(carService.partsToBuy([], ["blowoff valve"])).to.equal(0);
        });
        it('partsCatalog is string', () => {
            expect(() => carService.partsToBuy('', ["blowoff valve"])).to.throw();
        });
        it('neededParts is string', () => {
            expect(() => carService.partsToBuy([{ part: 'a', price: 1 }], '')).to.throw();
        });
        it('string string', () => {
            expect(() => carService.partsToBuy('', '')).to.throw();
        });
        it('total price of the parts that are equal to the neededParts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 140 }],["blowoff valve", "injectors"])).to.equal(285);
        });
        it('total price of the parts that are equal to the neededParts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 140 }],["blowoff"])).to.equal(0);
        });
    });
});