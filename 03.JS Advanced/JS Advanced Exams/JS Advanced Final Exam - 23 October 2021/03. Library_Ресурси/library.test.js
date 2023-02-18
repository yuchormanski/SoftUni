const library = require('./index.js');
const { expect } = require('chai');


describe('library object', () => {
    describe('•	calcPriceOfBook (nameOfBook, year)', () => {
        // - A function that accepts a string and a number
        it('error if arg1 is not string', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw();
        });
        it('error if arg1 as []', () => {
            expect(() => library.calcPriceOfBook([], 1)).to.throw();
        });
        // - A function that accepts a string and a number
        it('error if arg2 is not number', () => {
            expect(() => library.calcPriceOfBook('a', '1')).to.throw();
        });
        it('error if arg2 is not integer', () => {
            expect(() => library.calcPriceOfBook('a', 1.1)).to.throw();
        });
        //
        it('year less or equal to 1980', () => {
            expect(library.calcPriceOfBook('a', 1980)).to.equal(`Price of a is 10.00`)
        });
        it('year less than 1980', () => {
            expect(library.calcPriceOfBook('a', 1979)).to.equal(`Price of a is 10.00`)
        });
        it('year more than 1980', () => {
            expect(library.calcPriceOfBook('a', 1981)).to.equal(`Price of a is 20.00`)
        });

    });

    describe('•	findBook (booksArr, desiredBook)', () => {
        //- A function that accepts an array and string
        it('with empty array error', () => {
            expect(() => library.findBook([],'a')).to.throw();
        });
        it('book found', () => {
            expect(library.findBook(['a'], 'a')).to.equal('We found the book you want.');
        });
        it('book found', () => {
            expect(library.findBook(['a','b','c'], 'b')).to.equal('We found the book you want.');
        });
        it('book not found', () => {
            expect(library.findBook(['a','b','c'], 'd')).to.equal('The book you are looking for is not here!');
        });
        
    });


    describe('•	arrangeTheBooks (countBooks)', () => {
        // - A function accept a number
        it('countBooks is not an integer number - error', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw();
        });
        it('countBooks is not an number - error', () => {
            expect(() => library.arrangeTheBooks('1')).to.throw();
        });
        it('countBooks is negative number - error', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw();
        });

        //
        it('can Afford 1', () => {
            expect(library.arrangeTheBooks(1)).to.equal('Great job, the books are arranged.');
        });
        it('can Afford up to 40', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('more than 40', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});