const cinema = require('./index.js');
const { expect, assert } = require('chai');

describe('test {} cinema', () => {
    describe('showMovies(movieArr)', () => {
        it('test with array length = 0', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });
        it('test with array length 3', () => {
            expect(cinema.showMovies(['aaa', 'bbb', 'ccc'])).to.equal('aaa, bbb, ccc');
        });
        it('test with array length 1', () => {
            expect(cinema.showMovies(['aaabbbccc'])).to.equal('aaabbbccc');
        });
    });
    describe('ticketPrice(projectionType)', () => {
        it('checks the submitted projectionType is present in the schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
        });
        it('checks the submitted projectionType is present in the schedule', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
        });
        it('checks the submitted projectionType is present in the schedule', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });
        it('checks the submitted projectionType is present in the schedule', () => {
            expect(() => cinema.ticketPrice("Other")).to.throw(Error);
        });
        it('checks the submitted projectionType is present in the schedule', () => {
            expect(() => cinema.ticketPrice('a')).to.throw(Error);
        });
    });
    describe('swapSeatsInHall(firstPlace, secondPlace)', () => {
        it('test with valid number inputs', () => {
            assert.equal(cinema.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.')
        });
        it('test with equal inputs', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with zero first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and zero second inputs', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with zero first and zero second inputs', () => {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and invalid second inputs', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with invalid first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with invalid first and invalid second inputs', () => {
            expect(cinema.swapSeatsInHall(21, 22)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with "" first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall('', 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and "" second inputs', () => {
            expect(cinema.swapSeatsInHall(1, '')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with decimal first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall(1.1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and decimal second inputs', () => {
            expect(cinema.swapSeatsInHall(1, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with decimal first and decimal second inputs', () => {
            expect(cinema.swapSeatsInHall(1.1, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with decimal first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall(1.1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with [] first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall([], 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and [] second inputs', () => {
            expect(cinema.swapSeatsInHall(1, [])).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with [] first and [] second inputs', () => {
            expect(cinema.swapSeatsInHall([], [])).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with string first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and string second inputs', () => {
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with string first and string second inputs', () => {
            expect(cinema.swapSeatsInHall('1', '2')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with boolean first and valid second inputs', () => {
            expect(cinema.swapSeatsInHall(true, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with valid first and boolean second inputs', () => {
            expect(cinema.swapSeatsInHall(1, true)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test with boolean first and boolean second inputs', () => {
            expect(cinema.swapSeatsInHall(true, false)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});