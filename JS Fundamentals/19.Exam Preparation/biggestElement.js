/* 8.	Biggest Element
Write a JS function that finds the biggest element inside a matrix.
The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
The output is the return value of your function. Find the biggest element and return it.
Examples
Input	            Output
 ['20 50 10',
 '8 33 145']
                    145		

                     // judge input - [ [ 3, 5, 7, 12 ], [ -1, 4, 33, 2 ], [ 8, 3, 0, 4 ] ]
 ['3 5 7 12',
 '-1 4 33 2',
 '8 3 0 4']	        33
 */
function biggestElement(matrix) {
    let matrixLength = matrix.length;
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrixLength; row++) {
        let numR = matrix[row];
        let rowLength = numR.length;
        for (let column = 0; column < rowLength; column++) {
            let numC = numR[column]
            numC > biggest ? biggest = numC : null;
        }
    }
    console.log(biggest);
}
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])


