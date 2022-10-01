
function memoryGame(main) {

    let game = main.slice(0, 1).join('').split(' ');
    let moves = main.slice(1, main.length - 1)
    let counter = 0; //  -{number of moves until now}a

    for (let i = 0; i !== 'end'; i++) {
        counter++;
        let currentMove = moves[i].split(' ');
        let indexOne = currentMove[0];
        let indexTwo = currentMove[1];

        //IF move has a negative index
        if (indexOne < 0 || indexTwo < 0) {
            console.log(`Invalid input! Adding additional elements to the board`);
            game.splice((game.length / 2), 0, `-${counter}a`);
            game.splice((game.length / 2 + 1), 0, `-${counter}a`)
        }

        //IF matched
        if (game[indexOne] === game[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${game[indexOne]}!`);
            game.splice(indexOne, 1);
            game.splice(indexTwo, 1)
        }

        
    }


}
memoryGame(["1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"])