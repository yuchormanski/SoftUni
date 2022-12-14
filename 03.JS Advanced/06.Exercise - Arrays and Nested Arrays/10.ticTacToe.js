function ticTacToe(moves) {
    const length = 3;
    let board = [];
    let onTurn = '';
    let count = 0;
    let isWin = false;

    //CREATE board
    for (let i = 0; i < length; i++) {
        let temp = [];
        for (let j = 0; j < length; j++) {
            temp.push(false);
        }
        board.push(temp);
    }

    //Moves
    for (const move of moves) {
        // IF has winner
        if (isWin) {
            console.log(`Player ${onTurn} wins!`);
            return printBoard();
        }
        //IF board is full
        if (!board[0].includes(false) &&
            !board[1].includes(false) &&
            !board[2].includes(false)) {
            console.log('The game ended! Nobody wins :(');
            return printBoard();
        }
        let [row, col] = move.split(' ');

        row = Number(row);
        col = Number(col);
        //IF indexes are true
        if (row >= 0 && row <= length && col >= 0 && col <= length) {
            //change players order
            count % 2 === 0 ? onTurn = 'X' : onTurn = 'O';
            currentMove(row, col);
        } else {
            continue;
        }
    }

    function currentMove(row, col) {
        let turn = board[row][col];
        // IF field is empty 
        if (turn === false) {
            board[row][col] = onTurn;
            count++;

            // checking if has 3 on line
            check(row, col, onTurn);
            return;
        } else {
            console.log('This place is already taken. Please choose another!');
            return;
        }
    }
    // check for 3 in line
    function check(i, j, onTurn) {
        if (j === 0) {
            if (i === 0) {
                if ((board[i][j] === onTurn && board[i + 1][j] === onTurn && board[i + 2][j] === onTurn) ||            //vertical
                    (board[i][j] === onTurn && board[i][j + 1] === onTurn && board[i][j + 2] === onTurn) ||            //horizontal
                    (board[i][j] === onTurn && board[i + 1][j + 1] === onTurn && board[i + 2][j + 2] === onTurn)) {    //diagonal
                    isWin = true;
                }
            }
            else if (i === 1) {
                if ((board[i - 1][j] === onTurn && board[i][j] === onTurn && board[i + 1][j] === onTurn) ||            //vertical
                    (board[i][j] === onTurn && board[i][j + 1] === onTurn && board[i][j + 2] === onTurn)) {            //horizontal
                    isWin = true;
                }
            } else if (i === 2) {
                if ((board[i - 2][j] === onTurn && board[i - 1][j] === onTurn && board[i][j] === onTurn) ||            //vertical
                    (board[i][j] === onTurn && board[i][j + 1] === onTurn && board[i][j + 2] === onTurn) ||            //horizontal
                    (board[i - 2][j - 2] === onTurn && board[i - 1][j - 1] === onTurn && board[i][j] === onTurn)) {    //diagonal
                    isWin = true;
                }
            }
        } else if (j === 1) {
            if (i === 0) {
                if ((board[i][j] === onTurn && board[i + 1][j] === onTurn && board[i + 2][j] === onTurn) ||            //vertical
                    (board[i][j - 1] === onTurn && board[i][j] === onTurn && board[i][j + 1] === onTurn)) {            //horizontal
                    isWin = true;
                }
            } else if (i === 1) {
                if ((board[i - 1][j] === onTurn && board[i][j] === onTurn && board[i + 1][j] === onTurn) ||            //vertical
                    (board[i][j - 1] === onTurn && board[i][j] === onTurn && board[i][j + 1] === onTurn)) {            //horizontal
                    isWin = true;
                }
            } else if (i === 2) {
                if ((board[i - 2][j] === onTurn && board[i - 1][j] === onTurn && board[i][j] === onTurn) ||            //vertical
                    (board[i][j - 1] === onTurn && board[i][j] === onTurn && board[i][j + 1] === onTurn)) {            //horizontal
                    isWin = true;
                }
            }
        } else if (j === 2) {
            if (i === 0) {
                if ((board[i][j] === onTurn && board[i + 1][j] === onTurn && board[i + 2][j] === onTurn) ||            //vertical
                    (board[i][j] === onTurn && board[i][j - 1] === onTurn && board[i][j - 2] === onTurn) ||            //horizontal
                    (board[i][j] === onTurn && board[i + 1][j - 1] === onTurn && board[i + 2][j - 2] === onTurn)) {    //diagonal
                    isWin = true;
                }
            } else if (i === 1) {
                if ((board[i - 1][j] === onTurn && board[i][j] === onTurn && board[i + 1][j] === onTurn) ||            //vertical
                    (board[i][j - 2] === onTurn && board[i][j - 1] === onTurn && board[i][j] === onTurn)) {            //horizontal
                    isWin = true;
                }
            } else if (i === 2) {
                if ((board[i - 2][j] === onTurn && board[i - 1][j] === onTurn && board[i][j] === onTurn) ||            //vertical
                    (board[i][j - 2] === onTurn && board[i][j - 1] === onTurn && board[i][j] === onTurn) ||            //horizontal
                    (board[i - 2][j - 2] === onTurn && board[i - 1][j - 1] === onTurn && board[i][j] === onTurn)) {    //diagonal
                    isWin = true;
                }
            }
        }
    }

    // print board at the end
    function printBoard() {
        board.forEach(row => {
            let print = row.join(`\t`);
            console.log(print);
        });
    }
}
// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);

// ticTacToe([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);

// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]);

// ticTacToe([
//     "0 1",
//     "0 0",
//     "2 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "0 2",
//     "2 1",
//     "0 0"]);

ticTacToe([
    "2 0",
    "0 0",
    "2 1",
    "0 1",
    "1 2",
    "0 2",
    "1 2",
    "0 2",
    "2 1",
    "0 0"]);

