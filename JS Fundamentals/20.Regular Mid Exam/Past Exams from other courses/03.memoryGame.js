/*
Write a program that recreates the Memory game.
On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. 
Until the player receives "end" from the console, you will receive strings with two integers separated 
by a space, representing the indexes of elements in the sequence.
If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, 
you should add two matching elements at the middle of the sequence in the following format:
"-{number of moves until now}a" 
Then print this message on the console:
"Invalid input! Adding additional elements to the board"
Input
•	On the first line, you will receive a sequence of elements
•	On the following lines, you will receive integers until the command "end"

Output
•	Every time the player hit two matching elements, you should remove them from the sequence and print on the 
console the following message:
"Congrats! You have found matching elements - ${element}!"

•	If the player hit two different elements, you should print on the console the following message:
"Try again!"

•	If the player hit all matching elements before he receives "end" from the console, you should print on the 
console the following message: 
"You have won in {number of moves until now} turns!"

•	If the player receives "end" before he hits all matching elements, you should print on the 
console the following message:

"Sorry you lose :(
{the current sequence's state}"

Constraints
•	All elements in the sequence will always have a matching element.
INput: 
["1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]

Output:
Congrats! You have found matching elements - 1!
Invalid input! Adding additional elements to the board
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 3!
Congrats! You have found matching elements - -2a!
Sorry you lose :(
4 4 5 5




["a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]

Congrats! You have found matching elements - a!
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 4!
You have won in 3 turns!

    
["a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end",
]
Try again!
Try again!
Try again!
Try again!
Sorry you lose :(
a 2 4 a 2 4

*/


function memoryGame(main) {
    // SLICE to keep main array untouched
    let game = main.slice(0, 1).join('').split(' ');
    let moves = main.slice(1)
    let counter = 0;

    for (let i = 0; i < moves.length; i++) {

        let currentMove = moves[i];
        // IF receives 'end' before find all titles
        if (currentMove === 'end') {
            return console.log(`Sorry you lose :(\n${game.join(' ')}`);
        }
        counter++;
        currentMove = currentMove.split(' ');
        let indexOne = Number(currentMove[0]);
        let indexTwo = Number(currentMove[1]);

        //SETTING to remove element with bigger index to avoid reducing the array length
        let bigger = Math.max(indexOne, indexTwo);
        let smaller = Math.min(indexOne, indexTwo);
        indexOne = bigger;
        indexTwo = smaller;


        //IF move has a negative index or cheat
        if (indexOne < 0 || indexTwo < 0 || indexOne === indexTwo) {
            console.log(`Invalid input! Adding additional elements to the board`);
            game.splice((game.length / 2), 0, `-${counter}a`);
            game.splice((game.length / 2 + 1), 0, `-${counter}a`)
            continue;
        }

        //IF matched
        if (game[indexOne] === game[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${game[indexOne]}!`);

            //FIRST version
            // let removed = game[indexOne];
            // game.splice(indexOne, 1);

            // if (game.includes(removed)) {
            //     indexTwo = game.indexOf(removed)
            // }
            // game.splice(indexTwo, 1)

            //SECOND version
            game.splice(indexOne, 1);
            game.splice(indexTwo, 1)
        } else {   // IF not matched
            console.log(`Try again!`);
        }

        // IF founded all matching titles
        if (game.length === 0) {
            return console.log(`You have won in ${counter} turns!`);
        }
    }
}
/* memoryGame(["1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]) */
/* memoryGame(["a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]) */
memoryGame(["a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end",
])