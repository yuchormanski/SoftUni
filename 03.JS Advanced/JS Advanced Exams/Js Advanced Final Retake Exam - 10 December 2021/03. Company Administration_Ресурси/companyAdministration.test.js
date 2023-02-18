const companyAdministration = require('./index.js');
const { expect } = require('chai');

describe('', function () {
    describe('hiringEmployee (name, position, yearsExperience) ', () => {
        //accepts three parameters: string, string, and number.
        //no need for validation 
        it('position is different from "Programmer", throw an error', () => {
            expect(() => companyAdministration.hiringEmployee('a','a',1)).to.throw();
        });
        it('yearsЕxperience are greater than or equal to 3', () => {
            expect(companyAdministration.hiringEmployee('a','Programmer', 3)).to.equal(`a was successfully hired for the position Programmer.`);
        });
        it('yearsЕxperience are greater than 3', () => {
            expect(companyAdministration.hiringEmployee('a','Programmer', 4)).to.equal(`a was successfully hired for the position Programmer.`);
        });
        it('yearsЕxperience are less than 3', () => {
            expect(companyAdministration.hiringEmployee('a','Programmer', 2)).to.equal(`a is not approved for this position.`);
        });
    });

    describe('•	calculateSalary (hours)', () => {
        //accepts one parameter: number
        it('error - the hours are not a number', () => {
            expect(() => companyAdministration.calculateSalary('1')).to.throw();
        });
        it('error - the hours are negative number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw();
        });

        it('employee has been working 1 hour', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
        });
        it('employee has been working 10 hours', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
        });
        it('employee has been working 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it('employee has been working 161 hours', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
    });

    describe('•	firedEmployee (employees, index)', () => {
        //accepts an array and number
        it('error if is not array', () => {
            expect(() => companyAdministration.firedEmployee('a', 0)).to.throw();
        });
        it('error if is not number', () => {
            expect(() => companyAdministration.firedEmployee(['a'], '0')).to.throw();
        });
        it('error if negative number', () => {
            expect(() => companyAdministration.firedEmployee(['a'], -1)).to.throw();
        });
        it('error if number is greater than length', () => {
            expect(() => companyAdministration.firedEmployee(['a'], 1)).to.throw();
        });
        it('error if number is greater than length', () => {
            expect(() => companyAdministration.firedEmployee(['a','b','c'], 3)).to.throw();
        });

        //

        it('valid result', () => {
            expect(companyAdministration.firedEmployee(['a','b','c'], 0)).to.equal('b, c');
            expect(companyAdministration.firedEmployee(['a','b','c'], 1)).to.equal('a, c');
            expect(companyAdministration.firedEmployee(['a','b','c'], 2)).to.equal('a, b');
        });
    });
});