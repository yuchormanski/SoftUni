const chooseYourCar = require('./index.js');
const { expect } = require('chai');

describe('test {chooseYourCar}', () => {
    describe('choosingType (type, color, year)', () => {
        //accepts three parameters: string, string, and number
        // always be given two strings, and number

        // INVALID
        it('year is less than 1900 ', () => {
            expect(() => chooseYourCar.choosingType('a','a', 1899)).to.throw();
        });
        it('year is more than 2022 ', () => {
            expect(() => chooseYourCar.choosingType('a','a', 2023)).to.throw();
        });
        it('type is different from "Sedan"', () => {
            expect(() => chooseYourCar.choosingType('Coupe','a', 2000)).to.throw();
        });
        it('year of the car is less than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan','color', 2009)).to.equal('This Sedan is too old for you, especially with that color color.');
        });

        // VALID
        it('year of the car is greater or equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan','color', 2010)).to.equal('This color Sedan meets the requirements, that you have.');
        });

    });

    describe('brandName (brands, brandIndex) ', () => {
        // accepts an array and number
        // There is a need for validation for the input

        // INVALID
        it('string instead []', () => {
            expect(() => chooseYourCar.brandName('a', 0)).to.throw();
        });
        it('string instead index number', () => {
            expect(() => chooseYourCar.brandName(['a','b','c'], '0')).to.throw();
        });
        it('negative index', () => {
            expect(() => chooseYourCar.brandName(['a','b','c'], -1)).to.throw();
        });
        it('bigger index than array length', () => {
            expect(() => chooseYourCar.brandName(['a','b','c'],['a','b','c'].length )).to.throw();
        });
        it('empty array', () => {
            expect(() => chooseYourCar.brandName([],0)).to.throw();
        });

        // VALID
        it('can afford', () => {
            expect(chooseYourCar.brandName(['a','b','c'], 0)).to.equal('b, c');
        });
        it('can afford', () => {
            expect(chooseYourCar.brandName(['a','b','c'], 2)).to.equal('a, b');
        });
        it('can afford', () => {
            expect(chooseYourCar.brandName(['a','b','c'], 1)).to.equal('a, c');
        });
        
    });

    describe('carFuelConsumption (distanceInKilometers, consumptedFuelInLitres)', () => {
        // accepts two parameters: number, number
        // need to validate the input
        it('distanceInKilometers as string', () => {
            expect(() => chooseYourCar.carFuelConsumption('a', 1)).to.throw();
        });
        it('consumptedFuelInLitres  as string', () => {
            expect(() => chooseYourCar.carFuelConsumption(1, '1')).to.throw();
        });
        it('negative first', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw();
        });
        it('negative second', () => {
            expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw();
        });
        it('big consumption', () => {
            expect(chooseYourCar.carFuelConsumption(2, 1)).to.equal('The car burns too much fuel - 50.00 liters!');
        });
        it('big consumption', () => {
            expect(chooseYourCar.carFuelConsumption(250, 20)).to.equal('The car burns too much fuel - 8.00 liters!');
        });
        it('big consumption', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7.1)).to.equal('The car burns too much fuel - 7.10 liters!');
        });
        // VLAID 
        it('can afford', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });
        it('can afford', () => {
            expect(chooseYourCar.carFuelConsumption(100, 6.9)).to.equal('The car is efficient enough, it burns 6.90 liters/100 km.');
        });

    });
});