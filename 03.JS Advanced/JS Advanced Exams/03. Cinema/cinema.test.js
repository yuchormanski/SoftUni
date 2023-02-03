const cinema = require('./cinema.js');
const { assert } = require('chai');

describe('cinema function tests', () => {
    describe('function that accepts an array', () => {
        it('test with array with three movies', () => {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker');
        });
        it('test with array with one movie', () => {
            assert.equal(cinema.showMovies(['p0']), ['p0'].join(', '));
        });
        it('test with empty array', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });
    });
    describe('A function that accept string', () => {
        it('receive string as projection type', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12);
        });
        it('receive invalid projection type', () => {
            assert.equal(cinema.ticketPrice('something'),);
        });
    });
    describe('swapSeatsInHall(firstPlace, secondPlace)', () => {
        let unsuccess = 'Unsuccessful change of seats in the hall.';
        it('two valid numbers', () => {
            assert.equal(cinema.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.')
        });
        it('negative first and positive second', () => {
            assert.equal(cinema.swapSeatsInHall(-1, 2), unsuccess)
        });
        it('positive first and negative second', () => {
            assert.equal(cinema.swapSeatsInHall(1, -2), unsuccess)
        });
        it('equal first and second', () => {
            assert.equal(cinema.swapSeatsInHall(1, 1), unsuccess)
        });
        it('negative first and negative second', () => {
            assert.equal(cinema.swapSeatsInHall(-1, -2), unsuccess)
        });
        it('first missing', () => {
            assert.equal(cinema.swapSeatsInHall('', 2), unsuccess)
        });
        it('second missing', () => {
            assert.equal(cinema.swapSeatsInHall(1, ''), unsuccess)
        });
        it('first is not integer', () => {
            assert.equal(cinema.swapSeatsInHall(1.1, 2), unsuccess)
        });
        it('second is not integer', () => {
            assert.equal(cinema.swapSeatsInHall(1, 2.1), unsuccess)
        });
        it('first is bigger than 20', () => {
            assert.equal(cinema.swapSeatsInHall(21, 2), unsuccess)
        });
        it('second is bigger than 20', () => {
            assert.equal(cinema.swapSeatsInHall(1, 21), unsuccess)
        });
        it('first is equal to 0', () => {
            assert.equal(cinema.swapSeatsInHall(0, 2), unsuccess)
        });
        it('second is equal to 0', () => {
            assert.equal(cinema.swapSeatsInHall(1, 0), unsuccess)
        });
    });
});

// o	If one of the two numbers do not exist
// o	The numbers are not integers
// o	If one of the numbers is greater than the capacity of the hall – 20
// o	Seats are less or equal of 0
