/* School Library
Your task is to do an online book library.
On the first line, you will receive a string representing a shelf with books in the library. Every book is separated with "&"
On the next lines until the "Done" command, you will be receiving the commands separated with " | "

"Add Book | {book name}":
Add the book in the first place on the shelf.If the book is already present on the shelf, ignore the command.

"Take Book {book name}":
Remove the book with the given name only if the book is on the shelf.Otherwise, ignore this command.

"Swap Books | {book1} | {book2}":
o If both books are on the shelf, swap their places.  If at least one is missing, ignore the command.

"Insert Book | {book name}":
o Add the given book at the end of the shelf. If the book is already present on the shelf, ignore the command.

"Check Book {index}":
Print the name of the book, which is at the given index. If the index is invalid, ignore the command.

Input

On the 1s* line, you will receive a string representing a shelf with books in the library, separated by "&".
On the following lines, until you receive "Done", you will be receiving commands in the format described above.
Output

• Print the collection of books joined by ", ":
"{firstBook}, {secondBook}, … {lastBook}"

Constraints
• You won't receive duplicate book names in the initial list of books.

Input
•	The possible commands are:
o	"Add Book | {book name}"
o	"Take Book | {book name}"
o	"Swap Books | {book1} | {book2}"
o	"Insert Book | {book name}"
o	"Check Book | {index}"
o	"Done"
Output
•	The possible outputs are:
o	"{firstBook}, {secondBook}, … {lastBook}"

(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])

(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])

(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
 */

function schoolLibrary(data) {
    let bookShelf = data.slice(0, 1).join().split('&');
    let commands = data.slice(1)
    for (const el of commands) {
        let [command, value] = el.split(' | ');
        // "Add Book | {book name}"
        // "Take Book | {book name}"
        // "Swap Books | {book1} | {book2}"
        // "Insert Book | {book name}"
        // "Check Book | {index}"
        // "Done"
    }

}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])