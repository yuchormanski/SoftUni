/* You are a pianist, and you like to keep a list of your favorite piano pieces. Create a program to help you organize it and add, change, remove pieces from it!
On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have. 
On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".

Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:

•	"Add|{piece}|{composer}|{key}":
        o	You need to add the given piece with the information about it to the other pieces and print:
        "{piece} by {composer} in {key} added to the collection!"
        o	If the piece is already in the collection, print:
        "{piece} is already in the collection!"
•	"Remove|{piece}":
        o	If the piece is in the collection, remove it and print:
        "Successfully removed {piece}!"
        o	Otherwise, print:
        "Invalid operation! {piece} does not exist in the collection."
•	"ChangeKey|{piece}|{new key}":
        o	If the piece is in the collection, change its key with the given one and print:
        "Changed the key of {piece} to {new key}!"
        o	Otherwise, print:
        "Invalid operation! {piece} does not exist in the collection."

Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
"{Piece} -> Composer: {composer}, Key: {key}"

Input/Constraints
•	You will receive a single integer at first – the initial number of pieces in the collection
•	For each piece, you will receive a single line of text with information about it.
•	Then you will receive multiple commands in the way described above until the command "Stop".
Output
•	All the output messages with the appropriate formats are described in the problem description. */

function thePianist(list) {
    let pieces = Number(list.shift());
    let partituras = {};
    let currentPiece = list.shift();
    createParituras();
    manipulatingPartituras();

    //Object creation
    function createParituras() {
        while (pieces > 0) {
            //extracting info
            let [piece, composer, key] = currentPiece.split('|');
            if (!partituras[piece]) {
                partituras[piece] = {
                    composer,
                    key,
                };
            }
            currentPiece = list.shift();
            pieces--;
        }  
    }// end of Object creation

    // Add, Remove or Change Object properties
    function manipulatingPartituras() {
        let line = currentPiece;
        while (line !== 'Stop') {
            let destructing = line.split('|');
            let command = destructing.shift();


            //IF command is Add
            if (command === 'Add') {
                let [piece, composer, key] = [destructing[0], destructing[1], destructing[2]];
                //check if piece didn't exist - add it
                if (!partituras[piece]) {
                    partituras[piece] = {
                        composer,
                        key,
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                //IF exist skip adding and print response
                else {
                    console.log(`${piece} is already in the collection!`);
                }
            }
            //IF command is Remove
            else if (command === 'Remove') {
                let piece = destructing[0];
                // check IF exist
                if (partituras[piece]) {
                    delete partituras[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
                // IF not exist
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
            }
            //IF command is Change key
            else if (command === 'ChangeKey') {
                let [piece, key] = [destructing[0], destructing[1]];
                // check IF exist
                if (partituras[piece]) {
                    partituras[piece].key = key;
                    console.log(`Changed the key of ${piece} to ${key}!`);
                }
                // IF not exist 
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
            }
            line = list.shift();
        } // end of While to Stop
    }// end of Add, Remove or Change Object properties


    //iterate Object and print info
    for (let piece in partituras) {
        console.log(`${piece} -> Composer: ${partituras[piece].composer}, Key: ${partituras[piece].key}`);
    }
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);