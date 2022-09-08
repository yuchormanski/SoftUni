function chessBoard(n) {
    let counter = 0;
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= n; i++) {
        console.log(`  <div>`);
        for (let j = 1; j <= n; j++) {
            counter++;
            if (counter % 2 !== 0) { console.log(`    <span class="black"></span>`); }
            else { console.log(`    <span class="white"></span>`); }
        }
        counter++
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
chessBoard(6)
/* 
6.	Chess Board
Write a function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.
Examples
Input	Output
(3)	    <div class="chessboard">
            <div>
                <span class="black"></span>
                <span class="white"></span>
                <span class="black"></span>
            </div>
            <div>
                <span class="white"></span>
                <span class="black"></span>
                <span class="white"></span>
            </div>
            <div>
                <span class="black"></span>
                <span class="white"></span>
                <span class="black"></span>
            </div>
        </div>
 */