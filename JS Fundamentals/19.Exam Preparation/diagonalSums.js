/* Diagonal Sums
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). 
Write a JS function that finds the sum at the main and at the secondary diagonals.
The input comes as array of string elements. Each element contains the elements from one row of a matrix, 
separated by space.
The output is printed on the console, on a single line separated by space. First print the sum at 
the main diagonal, then the sum at the secondary diagonal.
Examples
Input	                    Output	
['20 40',
 '10 60']	                80 50	 	

 ['3 5 17',
 '-1 7 14',
 '1 -8 89'] 	            99 25
 */

function diagonalSums(mat) {
    let n = mat.length;
    let principal = 0;
    let secondary = 0;

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {

    //         // Condition for principal diagonal
    //         if (i == j)
    //             principal += mat[i][j];

    //         // Condition for secondary diagonal
    //         if ((i + j) == (n - 1))
    //             secondary += mat[i][j];
    //     }
    // }
    // console.log(`${principal} ${secondary}`);

    for (let i = 0; i < n; i++) {
        principal += mat[i][i];
        secondary += mat[i][n - i - 1];
    }
    console.log(`${principal} ${secondary}`);
}
diagonalSums(
    [[3, 5, 17,],
    [-1, 7, 14],
    [1, -8, 89]])