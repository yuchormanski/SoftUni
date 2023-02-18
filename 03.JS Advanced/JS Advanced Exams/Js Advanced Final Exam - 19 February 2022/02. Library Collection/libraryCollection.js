class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }


    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        const found = this.books.find(obj => obj.bookName === bookName);
        if (!found) throw new Error(`${bookName} is not in the collection.`);
        if (found.payed === true) throw new Error(`${bookName} has already been paid.`)
        found.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        const found = this.books.find(obj => obj.bookName === bookName);
        if (!found) throw new Error(`The book, you're looking for, is not found.`);
        if (found.payed === false) throw new Error(`${bookName} need to be paid before removing from the collection.`)
        let index = this.books.indexOf(found);
        this.books.splice(index, 1);
        this.capacity++;
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const result = [];
        let isPayed = '';
        if (bookAuthor === undefined) {
            result.push(`The book collection has ${this.capacity} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(book => {
                    if (book.payed === true) {
                        isPayed = 'Has Paid';
                    } else {
                        isPayed = 'Not Paid';
                    }
                    result.push(`${book.bookName} == ${book.bookAuthor} - ${isPayed}.`)
                });
            return result.join('\n');
        } else{
            const found = this.books.find(obj => obj.bookAuthor === bookAuthor);
            if (!found) throw new Error(`${bookAuthor} is not in the collection.`);
            if (found.payed === true) {
                isPayed = 'Has Paid';
            } else {
                isPayed = 'Not Paid';
            }
            return `${found.bookName} == ${found.bookAuthor} - ${isPayed}.`;
        }

    }

}
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

