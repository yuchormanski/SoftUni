/* 4.	Draw a Filled Square
Draw at the console a filled square of size n like in the example:
Examples
Input	            Output
4	                --------
                    -\/\/\/-
                    -\/\/\/-
                    -------- 
*/

function drawA_FilledSquare(num) {
    let dashPrint = '';
    // MAKE first line and save it
    for (let dash = 0; dash < num; dash++) {
        dashPrint += '--';
    }
    console.log(dashPrint);
    let buff = '';
    let start = "-\\"  // USE \\ instead of \. The result will be \
    let end = "/-";
    // MAKE lines minus first and last
    for (let i = 0; i < num - 2; i++) {
        for (let j = 0; j < num; j++) {
            if (j === 0) {
                buff += start;
            } else if (j === num - 1) {
                buff += end;
            } else {
                let debug = '/\\';
                buff += '/\\';
            }
        }
        // ESPECIALLY for Judge - print two separate lines - if even ; if odd
        if (i % 2 === 0) {
            console.log(buff);
        } else {
            console.log(buff);
        }
        buff = '';
    }
    // USE saved first line
    console.log(dashPrint);
}
drawA_FilledSquare(5)