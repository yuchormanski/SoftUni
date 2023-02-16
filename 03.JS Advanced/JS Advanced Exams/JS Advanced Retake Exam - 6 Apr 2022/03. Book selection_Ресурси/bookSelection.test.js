const bookSelection = require('./index.js');
const { expect } = require('chai');

describe('test object bookSelection', function(){
    describe('isGenreSuitable (genre, age)', () => {
        //accepts two parameters: string and number;
        //o	There is no need for validation for the input
        it('age restriction under 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal('Books with Thriller genre are not suitable for kids at 1 age');
            expect(bookSelection.isGenreSuitable('Horror', 1)).to.equal('Books with Horror genre are not suitable for kids at 1 age');
        });
        it('over 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('other', 12)).to.equal(`Those books are suitable`);
        });
        it('not Horror', () => {
            expect(bookSelection.isGenreSuitable('other', 12)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('other', 1)).to.equal(`Those books are suitable`);
        });
    });

    describe('isItAffordable (price, budget)', () => {
        //accepts two parameters: number and number
        it('throw error if not numbers', () => {
            expect(() => bookSelection.isItAffordable('1','1')).to.throw();
            expect(() => bookSelection.isItAffordable(1,'1')).to.throw();
            expect(() => bookSelection.isItAffordable('1',1)).to.throw();
        });
        it('if result is negative number', () => {
            expect(bookSelection.isItAffordable(2,1)).to.equal('You don\'t have enough money');
        });
        it('can afford', () => {
            expect(bookSelection.isItAffordable(1,1)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(1,2)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(1,2.1)).to.equal(`Book bought. You have 1.1$ left`);
        });
    });

    describe('suitableTitles (books, wantedGenre)', () => {
        //accepts an array and string
        it('if not valid', () => {
            expect(() => bookSelection.suitableTitles('','a')).to.throw();
            expect(() => bookSelection.suitableTitles(['a'],1)).to.throw();
            expect(() => bookSelection.suitableTitles(['a'],[])).to.throw();
        });
        it('valid match', () => {
            const obj = {title: 'a', genre: 'b'};
            expect(bookSelection.suitableTitles([obj],'b')).to.deep.equal([ 'a' ]);
        });
        it('valid no match', () => {
            const obj = {title: 'a', genre: 'b'};
            expect(bookSelection.suitableTitles([obj],'bb')).to.deep.equal([]);
        });
   
    });
});

