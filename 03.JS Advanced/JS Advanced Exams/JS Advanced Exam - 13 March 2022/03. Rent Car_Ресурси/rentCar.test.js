const rentCar = require('./rentCar.js');
const { expect , assert } = require('chai');


describe('object rentCar test', function () {
    describe('searchCar(one array and one string)', () => {
        it('[1], string', () => {
            expect(rentCar.searchCar(['a', 'b', 'c'], 'a')).to.equal('There is 1 car of model a in the catalog!')
        });
        it('[2+], string', () => {
            expect(rentCar.searchCar(['a', 'b', 'a', 'a'], 'a')).to.equal('There is 3 car of model a in the catalog!')
        });
        it('invalid - string, string', () => {
            expect(() => rentCar.searchCar('a', 'a')).to.throw()
        });
        it('invalid - number, string', () => {
            expect(() => rentCar.searchCar(1, 'a')).to.throw()
        });
        it('[], number - invalid', () => {
            expect(() => rentCar.searchCar(['a', 'b', 'a'], 1)).to.throw()
        });
        it('[], not found - invalid', () => {
            expect(() => rentCar.searchCar(['a', 'b', 'a'], 'd')).to.throw()
        });
    });
    describe('calculatePriceOfCar(string and number)', () => {
        // VALID
        it('valid brand, valid days', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.equal('You choose BMW and it will cost $45!');
        });
        it('valid brand, valid days', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal('You choose Audi and it will cost $72!');
        });
        //INVALID
        it('string - invalid, valid days', () => {
            expect(() => rentCar.calculatePriceOfCar('other', 2)).to.throw();
        });
        it('[] - invalid, valid days', () => {
            expect(() => rentCar.calculatePriceOfCar(['other'], 2)).to.throw();
        });
        it('string, days - invalid', () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', '1')).to.throw();
        });
    });
    describe('checkBudget(costPerDay, days, budget) ', () => {
        // VALID
        it('number, number, number', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!')
        });
        it('number, number, number', () => {
            expect(rentCar.checkBudget(2, 1, 2)).to.equal('You rent a car!')
        });
        // INVALID
        it('string, number, number', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw();
        });
        it('number, string, number', () => {
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw();
        });
        it('number, number, string', () => {
            expect(() => rentCar.checkBudget(1, 1, '1')).to.throw();
        });
        it('bigger than budget, days, budget', () => {
            expect(rentCar.checkBudget(2, 1, 1)).to.equal('You need a bigger budget!')
        });
        it('coast, days, budget', () => {
            expect(rentCar.checkBudget(1, 2, 1)).to.equal('You need a bigger budget!')
        });
    });
});