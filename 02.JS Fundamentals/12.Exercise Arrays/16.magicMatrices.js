/* 16.	Magic Matrices
Write a function that checks if a given matrix of numbers is magical. 
A matrix is magical if the sums of the cells of every row and every column are equal. 

Input
The input comes as an array of arrays, containing numbers (number 2D matrix). 
The input numbers will always be positive.

Output
The output is a Boolean result indicating whether the matrix is magical or not.
Examples
Input	                Output
[[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]	            true

 [[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]	        false

 [[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]	            true
Hints
•	You can read more about the magic square here https://en.wikipedia.org/wiki/Magic_square
 */

function magicMatrices(mainArray) {
    let sum;
    for (let r = 0; r < mainArray.length; r++) {
        let sumR = 0;
        for (let c = 0 ; c < mainArray[r].length; c++) {
            sumR += mainArray[r][c];
        }
        if (r === 0) {
            sum = sumR;
        }
        if (sum != sumR) {
            return false;
        }
    };
    for (let c = 0; c < mainArray[0].length; c++) {
        let sumC = 0;
        for (let r = 0 ; r < mainArray.length; r++) {
            sumC += mainArray[r][c];
        }
        if (sum != sumC) {
            return false;
        }
    };

    return true;

    let isMagical = false;
    let blockA = mainArray[0];
    let blockB = mainArray[1];
    let blockC = mainArray[2];
    let rowA = 0;
    let rowB = 0;
    let rowC = 0;
    let colA = 0;
    let colB = 0;
    let colC = 0;
    for (let i = 0; i < blockA.length; i++) {
        rowA += blockA[i];
        rowB += blockB[i];
        rowC += blockC[i];
        colA += blockA[i];
        colB += blockB[i];
        colC += blockC[i];
    }
    if (rowA === rowB && rowB === rowC &&
        colA === colB && colB === colC &&
        rowA === colA && rowB === colC) {
        isMagical = true;
    } else {
        isMagical = false;
    }
    console.log(isMagical);
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);