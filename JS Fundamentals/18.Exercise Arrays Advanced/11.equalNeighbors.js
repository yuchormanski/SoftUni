/* 1.	Equal Neighbors
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as an array of arrays, containing string elements (2D matrix of strings).
The output is the return value of your function. Save the number of equal pairs, you find and return it.
Examples
Input	                            Output
[['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]	        1		

[['test', 'yo', 'yo', 'ho'],
 ['well', 'done', 'no', '6'],
 ['not', 'done', 'yet', '5']]	    2

[[2, 2, 5, 7, 4],
 [4, 0, 5, 3, 4],
 [2, 5, 5, 4, 2]]                   5
 */


function equalNeighbors(matrix) {
    let matrixLength = matrix.length;
    let counter = 0;

    for (let i = 0; i < matrixLength; i++) {
        let A = matrix[i];
        let B = matrix[i + 1]

        if(i === matrixLength - 1){
            for (let j = 0; j < A.length; j++) {
                let el = A[j];
                let next = A[j + 1]
                if (el === next) {
                    counter++;
                }
            }
            return console.log(counter);
        }

        for (let j = 0; j < A.length; j++) {
            let el = A[j];
            let elDown = B[j]
            let next = A[j + 1]
            if (el === next) {
                counter++;
            }
            if (el === elDown) {
                counter++;
            }
        }
    }
}
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])
