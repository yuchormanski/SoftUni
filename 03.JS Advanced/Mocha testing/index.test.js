const carService = require('./index.js');
const {expect} = require('chai');


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
});