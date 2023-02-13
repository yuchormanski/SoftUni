const flowerShop = require('./index.js');
const { expect } = require('chai');

describe('flowerShop obj', () => {
    describe('calcPriceOfFlowers(flower, price, quantity)', () => {
        //accepts three parameters (string ,number, number)
        it('invalid params', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('a', '1', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('a', 1, '1')).to.throw();
            // expect(() => flowerShop.calcPriceOfFlowers('a', -1, 1)).to.throw();
            // expect(() => flowerShop.calcPriceOfFlowers('a', 0, 1)).to.throw();
        });
        //`You need $${result.toFixed(2)} to buy ${flower}!`
        it('calc', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 1)).to.equal(`You need $1.00 to buy a!`)
            expect(flowerShop.calcPriceOfFlowers('a', 1, 10)).to.equal(`You need $10.00 to buy a!`)
            expect(flowerShop.calcPriceOfFlowers('a', 10, 1)).to.equal(`You need $10.00 to buy a!`)
            expect(flowerShop.calcPriceOfFlowers('a', 0, 1)).to.equal(`You need $0.00 to buy a!`)
            expect(flowerShop.calcPriceOfFlowers('a', 1, 0)).to.equal(`You need $0.00 to buy a!`)
        });

    });

    describe('checkFlowersAvailable(flower, gardenArr) ', () => {
        //accepts two parameters (string and array):
        it('solded', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['b', 'c', 'd'])).to.equal(`The a are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('a', [])).to.equal(`The a are sold! You need to purchase more!`);
        });
        it('available', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c'])).to.equal('The a are available!');
            expect(flowerShop.checkFlowersAvailable('b', ['a', 'b', 'c'])).to.equal('The b are available!');
            expect(flowerShop.checkFlowersAvailable('b', ['b'])).to.equal('The b are available!');
        });
    });

    describe('sellFlowers(gardenArr, space)', () => {
        //accepts two parameters (array and number)
        it('invalid', () => {
            expect(() => flowerShop.sellFlowers('', 1)).to.throw();
            expect(() => flowerShop.sellFlowers([], '1')).to.throw();
            expect(() => flowerShop.sellFlowers([], 1)).to.throw();
            expect(() => flowerShop.sellFlowers(['a'], 5)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b', 'c'], 5)).to.throw();
            expect(() => flowerShop.sellFlowers(['a', 'b', 'c'], -1)).to.throw();
        });
        it('valid', () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c')
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 0)).to.equal('b / c')
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 2)).to.equal('a / b')
            expect(flowerShop.sellFlowers(['a'], 0)).to.equal('')
        });
    });
});