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
            temp.push('false');
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
        if (!board[0].includes('false') &&
            !board[1].includes('false') &&
            !board[2].includes('false')) {
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
        if (turn === 'false') {
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



    //From Rosen

/*     function ticTacToe(input) {

        let dashboard = [[false, false, false],
                        [false, false, false],
                        [false, false, false]];
    
        let hasFreeFields = (matrix) => matrix.some((arr) => arr.some(value => value === false))
        let win = false;
        let player = 'X';
    
        for (let i = 0; i < input.length && hasFreeFields(dashboard); i++) {
            let [row, col] = input[i].split(' ').map(num => Number(num));
    
            if (!dashboard[row][col]) {
                dashboard[row][col] = player;
    
                if (checkForWinner(dashboard, player)) {
                    win = true;
                    break;
                }
    
                player = player === 'X' ? 'O' : 'X';
            } else {
                console.log("This place is already taken. Please choose another!");
            }
    
        }
    
        if (win) {
            console.log(`Player ${player} wins!`);
        } else {
            console.log("The game ended! Nobody wins :(");
        }
        dashboard.forEach(line => {
            console.log(line.join('\t'));
        });
    
        function checkForWinner(currentBoard, sign) {
            let isWinner = false;
            
            for (let i = 0; i < 3; i++) {
                if (currentBoard[i][0] === sign && currentBoard[i][1] === sign && currentBoard[i][2] === sign) {
                    isWinner = true;
                    break;
                }
                if (currentBoard[0][i] === sign && currentBoard[1][i] === sign && currentBoard[2][i] === sign) {
                    isWinner = true;
                    break;
                }
            }
            if (!isWinner) {
                if ((currentBoard[0][0] === sign && currentBoard[1][1] === sign && currentBoard[2][2] === sign) ||
                    (currentBoard[2][0] === sign && currentBoard[1][1] === sign && currentBoard[0][2] === sign)) {
                    isWinner = true;
                }
            }
            return isWinner;
        }
    } */

