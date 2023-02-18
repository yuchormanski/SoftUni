const movieTheater = require('./index.js');
const { expect } = require('chai');


describe('movieTheatre obj', function () {
    describe('ageRestrictions (movieRating)', () => {
        //accepts one parameter: string
        //no need of validation
        it('movieRating === G', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });
        it('movieRating === PG', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it('movieRating === R', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it('movieRating === NC-17', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });
        it('movieRating === other', () => {
            expect(movieTheater.ageRestrictions('other')).to.equal(`There are no age restrictions for this movie`);
            expect(movieTheater.ageRestrictions('')).to.equal(`There are no age restrictions for this movie`);
            expect(movieTheater.ageRestrictions(1)).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe('moneySpent (tickets, food, drinks)', () => {
        // - A function that accepts three parameters: number, array and array
        it('errors string [],[]', () => {
            expect(() => movieTheater.moneySpent('1', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw();
        });
        it('errors not arr1 "",[]', () => {
            expect(() => movieTheater.moneySpent(15, 'Nachos', ['Soda', 'Water'])).to.throw();
        });
        it('errors not arr2 [],""', () => {
            expect(() => movieTheater.moneySpent(15, ['Nachos', 'Popcorn'], 'Water')).to.throw();
        });


        it('sum with nachos, soda', () => {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`)
        });
        it('sum with popcorn, water', () => {
            expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase is 21.00`)
        });
        it('sum with nachos, water', () => {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 22.50`)
        });
        it('sum with popcorn, soda', () => {
            expect(movieTheater.moneySpent(1, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase is 22.00`)
        });


        it('sum with nachos, soda discount', () => {
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 42.80`)
        });
        it('sum with popcorn, water discount', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 40.80`)
        });
        it('sum with nachos, water discount', () => {
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 42.00`)
        });
        it('sum with popcorn, soda discount', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 41.60`)
        });
    });

    describe('reservation (rowsArray, neededSeatsCount)', () => {
        // - A function that accepts array and number

        const obj = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 2 }]

        it('if not array; number', () => {
            expect(() => movieTheater.reservation('', 1)).to.throw();
            expect(() => movieTheater.reservation({}, 1)).to.throw();
            expect(() => movieTheater.reservation([], '1')).to.throw();

        });

        it('can Afford', () => {
            expect(movieTheater.reservation(obj, 4)).to.equal(2)
        });
        it('no such a free seats', () => {
            expect(movieTheater.reservation(obj, 8)).to.equal(-Infinity)
        });
    });
});