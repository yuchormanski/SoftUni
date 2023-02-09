const library = require('./index.js');
const { expect, assert } = require('chai');

describe('test object Library', () => {
    describe('method calcPriceOfBook', () => {
        //ERRORS
        it('test error with string and a decimal', () => {
            expect(() => library.calcPriceOfBook('Book Name', 1990.1)).to.throw(Error);
        });
        it('test error with number and a number', () => {
            expect(() => library.calcPriceOfBook(123, 1990)).to.throw(Error);
        });
        it('test error with number and a decimal', () => {
            expect(() => library.calcPriceOfBook(123, 1990.1)).to.throw(Error);
        });
        it('test error with [] and a number', () => {
            expect(() => library.calcPriceOfBook([], 1990)).to.throw(Error);
        });
        it('test error with {} and a number', () => {
            expect(() => library.calcPriceOfBook({}, 1990)).to.throw(Error);
        });
        it('test error with true and a number', () => {
            expect(() => library.calcPriceOfBook(true, 1990)).to.throw(Error);
        });
        it('test error with null and a number', () => {
            expect(() => library.calcPriceOfBook(null, 1990)).to.throw(Error);
        });
        it('test error with undefined and a number', () => {
            expect(() => library.calcPriceOfBook(undefined, 1990)).to.throw(Error);
        });
        it('test error with string and a []', () => {
            expect(() => library.calcPriceOfBook('abc', [])).to.throw(Error);
        });
        it('test error with {} and a number', () => {
            expect(() => library.calcPriceOfBook('abc', {})).to.throw(Error);
        });
        it('test error with true and a number', () => {
            expect(() => library.calcPriceOfBook('abc', true)).to.throw(Error);
        });
        it('test error with "" and a number', () => {
            expect(() => library.calcPriceOfBook('abc', "")).to.throw(Error);
        });
        it('test error with null and a number', () => {
            expect(() => library.calcPriceOfBook('abc', null)).to.throw(Error);
        });
        it('test error with undefined and a number', () => {
            expect(() => library.calcPriceOfBook('abc', undefined)).to.throw(Error);
        });
        // book price
        it('test with equal year 1980', () => {
            expect(library.calcPriceOfBook('abc', 1980)).to.equal(`Price of abc is 10.00`);
        });
        it('test with year before 1980', () => {
            expect(library.calcPriceOfBook('abc', 1979)).to.equal(`Price of abc is 10.00`);
        });
        it('test with year before 1980', () => {
            expect(library.calcPriceOfBook('abc', 1909)).to.equal(`Price of abc is 10.00`);
        });
        it('test with year after 1980 ', () => {
            expect(library.calcPriceOfBook('abc', 1981)).to.equal(`Price of abc is 20.00`);
        });
        it('test with year after 1980 ', () => {
            expect(library.calcPriceOfBook('abc', 2000)).to.equal(`Price of abc is 20.00`);
        });
    });
    describe('test findBook method', () => {
        //ERRORS
        it('test with empty array and string', () => {
            expect(() => library.findBook([], 'abc')).to.throw(Error);
        });
        it('test with array and string', () => {
            expect(library.findBook(['abc'], 'abd')).to.equal('The book you are looking for is not here!');
        });
        // valid
        it('test with array and string', () => {
            expect(library.findBook(['abc'], 'abc')).to.equal('We found the book you want.');
        });
        it('test with array and string', () => {
            expect(library.findBook(['abc','dfg','hij'], 'abc')).to.equal('We found the book you want.');
        });

    });
    describe('test arrangeTheBooks', () => {
        // ERRORS
        it('test with true', () => {
            expect(() => library.arrangeTheBooks(true)).to.throw(Error);
        });
        it('test with undefined', () => {
            expect(() => library.arrangeTheBooks(undefined)).to.throw(Error);
        });
        it('test with null', () => {
            expect(() => library.arrangeTheBooks(null)).to.throw(Error);
        });
        it('test with string', () => {
            expect(() => library.arrangeTheBooks('abc')).to.throw(Error);
        });
        it('test with string', () => {
            expect(() => library.arrangeTheBooks('a')).to.throw(Error);
        });
        it('test with {}', () => {
            expect(() => library.arrangeTheBooks({})).to.throw(Error);
        });
        it('test with []', () => {
            expect(() => library.arrangeTheBooks([])).to.throw(Error);
        });
        it('test with decimal', () => {
            expect(() => library.arrangeTheBooks(1.2)).to.throw(Error);
        });
        it('test with negative', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error);
        });
        it('test with negative', () => {
            expect(() => library.arrangeTheBooks(-10)).to.throw(Error);
        });
        it('test with more books than available space', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it('test with more books than available space', () => {
            expect(library.arrangeTheBooks(81)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        // VALID
        it('test with valid count books 0', () => {
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        });
        it('test with valid count books 40', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
    });
});