/* 4.	Book Shelf
Write a function that stores information about shelves and the books on the shelves. 
Each shelf has an Id and a genre of books that can be on it. Each book has a title, an author, and a genre. 
The input comes as an array of strings. They will be in the format:
"{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
"{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add the book to the shelf.
After finishing reading input, sort the shelves by a count of books in it in descending. 
For each shelf sort the books by title in ascending. Then print them in the following format.
"{shelfOne id} {shelf genre}: {books count}
--> {bookOne title}: {bookOne author}
--> {bookTwo title}: {bookTwo author}
…
{shelfTwo id} {shelf genre}: {books count}
…" */

function bookShelf(libraryData) {
    let shelves = {};
    let ids = []; //array for keeping shelf ID and corresponding genre
    collectingBooks();
    ordering();

    function collectingBooks() {
        for (let line of libraryData) {
            //  depend of string for split
            if (line.includes(' -> ')) {
                let [id, genre] = line.split(' -> ');
                if (!shelves[genre]) {

                    if (!ids.includes(id) && !ids.includes(genre)) {
                        shelves[genre] = {};
                        ids.push(genre, id);
                    }
                }
            }
            // book line
            else if (line.includes(': ')) {
                // create IF not exist

                let title = line.split(': ')[0];
                let bookLine = line.split(': ')[1];
                let [author, currentGenre] = bookLine.split(', ');

                // add book to shelf if it exist
                if (shelves[currentGenre]) {
                    shelves[currentGenre][title] = author;
                }
            }
        }
    }

    function ordering() {

        //get to array genres + books qty
        let bookCountArray = [];
        for (let [genre, books] of Object.entries(shelves)) {
            let bookCount = Object.keys(books).length;
            bookCountArray.push([genre, bookCount])
        }
        //sort descending by books Count
        let sorted = bookCountArray.sort((a, b) => b[1] - a[1]);

        //iterate sorted 
        for (let [genre, bookCount] of sorted) {
            //get id of the current genre
            let theID = ids[ids.indexOf(genre) + 1];
            // print shelf ID , genre , books count
            console.log(`${theID} ${genre}: ${bookCount}`);
            //sort books in current genre alphabetical
            let sortedBooks = Object.entries(shelves[genre]).sort((a, b) => a[0].localeCompare(b[0]));
            // print books every on new line
            for(let book of sortedBooks){
                let [bookTitle, bookAuthor] = [book[0], book[1]];
                console.log(`--> ${bookTitle}: ${bookAuthor}`)
            }
        }
    }
}
// bookShelf([
//     '1 -> history',
//     '1 -> action',
//     'Death in Time: Criss Bell, mystery',
//     '2 -> mystery',
//     '3 -> sci-fi',
//     '1 -> mystery',
//     'Child of Silver: Bruce Rich, mystery',
//     'Hurting Secrets: Dustin Bolt, action',
//     'Future of Dawn: Aiden Rose, sci-fi',
//     'Lions and Rats: Gabe Roads, history',
//     '2 -> romance',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi',
//     'Pilots of Stone: Brook Jay, history'
// ]);

bookShelf([
    '1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);