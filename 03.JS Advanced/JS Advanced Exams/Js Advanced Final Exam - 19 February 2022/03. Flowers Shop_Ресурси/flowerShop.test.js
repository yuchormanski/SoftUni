const { expect } = require('chai');
const flowerShop = require('./index.js');

describe('flowerShop obj', () => {
    describe('calcPriceOfFlowers(flower, price, quantity)', () => {
        //accepts three parameters (one string and two numbers):
        it('errors invalid inputs', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('1', '1', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('1', 1, '1')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('a', 1.1, 1)).to.throw();
        });
        it('valid', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 1)).to.equal('You need $1.00 to buy a!');
            expect(flowerShop.calcPriceOfFlowers('a', 3, 2)).to.equal('You need $6.00 to buy a!');
        });

    });

    describe('checkFlowersAvailable(flower, gardenArr)', () => {
        //accepts two parameters (string and array):
        //no need for validation for input
        it('no existing flower', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['b', 'c'])).to.equal('The a are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('a', ['b'])).to.equal('The a are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('a', [])).to.equal('The a are sold! You need to purchase more!');
        });
        it('existing flower', () => {
            expect(flowerShop.checkFlowersAvailable('b', ['b', 'c'])).to.equal('The b are available!');
            expect(flowerShop.checkFlowersAvailable('b', ['a', 'b', 'c'])).to.equal('The b are available!');
            expect(flowerShop.checkFlowersAvailable('b', ['a', 'c', 'b'])).to.equal('The b are available!');
            expect(flowerShop.checkFlowersAvailable('b', ['b'])).to.equal('The b are available!');

        });

    });

    describe('sellFlowers(gardenArr, space)', () => {
        //accepts two parameters (array and number):
        it('errors', () => {
            expect(() => flowerShop.sellFlowers('', 1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a'], '')).to.throw();
            expect(() => flowerShop.sellFlowers([], 1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a'], -1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a'], 1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b', 'c'], 3)).to.throw();
        });
        it('valid', () => {
            expect(flowerShop.sellFlowers(['a'],0)).to.equal('');
            expect(flowerShop.sellFlowers(['a','b','c'],0)).to.equal('b / c');
            expect(flowerShop.sellFlowers(['a','b','c'],2)).to.equal('a / b');
            expect(flowerShop.sellFlowers(['a','b','c'],1)).to.equal('a / c');
        });

    });
});
