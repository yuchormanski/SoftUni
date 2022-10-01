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

["a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ] 
    
    ["a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end",
] */


function memoryGame(main) {
    let game = main.slice(0, 1).join('').split(' ');
    let moves = main.slice(1, main.length)
    let counter = 0;

    for (let i = 0; i !== 'end'; i++) {
        counter++;
        let currentMove = moves[i].split(' ');
        let indexOne = currentMove[0];
        let indexTwo = currentMove[1];

        // IF receives 'end' before find all titles
        if (indexOne === 'end') {
            return console.log(`Sorry you lose :(\n${game.join(' ')}`);
        }

        //IF move has a negative index
        if (indexOne < 0 || indexTwo < 0 || indexOne === indexTwo) {
            console.log(`Invalid input! Adding additional elements to the board`);
            game.splice((game.length / 2), 0, `-${counter}a`);
            game.splice((game.length / 2 + 1), 0, `-${counter}a`)
            continue;
        }

        //IF matched
        if (game[indexOne] === game[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${game[indexOne]}!`);
            let removed = game[indexOne];
            game.splice(indexOne, 1);

            if (game.includes(removed)) {
                indexTwo = game.indexOf(removed)
            }
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