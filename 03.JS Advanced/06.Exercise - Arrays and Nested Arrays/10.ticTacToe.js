function ticTacToe(moves) {
    const length = 3;
    let board = [];
    for (let i = 0; i < length; i++) {
        let temp = [];
        for (let j = 0; j < length; j++) {
            temp.push(false);
        }
        board.push(temp);
    }
    // console.table(board) 
    for (const move of moves) {
        let [playerO, playerX] = move.split(' ');
        playerO = Number(playerO);
        playerX = Number(playerX);
        currentMove();
        function currentMove(){
            for(let turn of board[playerO]){ /// не става с фороф - направи фор цикъл
                if(turn === false){
                    turn = 'O';
                    return;
                }else{
                    console.log("This place is already taken. Please choose another!");
                }
            }
        }

    }
    console.table(board) // view board - debug

}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);