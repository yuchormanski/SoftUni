<<<<<<< HEAD
/* Equal Neighbors 
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings). 
The input comes as an array of arrays, containing string elements (2D matrix of strings). 
The output is the return value of your function. Save the number of equal pairs, you find and return it. 
Examples 

Input 

[['2', '3', '4', '7', '0'], 
 ['4', '0', '5', '3', '4'], 
 ['2', '3', '5', '4', '2'], 
 ['9', '8', '7', '5', '4']] 

Output
1 

[['test', 'yo', 'yo', 'ho'], 
['well', 'done', 'no', '6'], 
['not', 'done', 'yet', '5']] 

2 
 */


function equalNeighbors(inputArray) {
    let inputArrayLength = inputArray.length
    let counter = 0;
    let currentElement = null;
    let theElement;
    let i = 0;
    getElement();

    function getElement() {
        for (i; i < inputArrayLength; i++) {                      // Get arrays of input as element
            let arrElement = inputArray[i];
            for (let j = 0; j < arrElement.length; j++) {                     //Get internal element from the current array 'el'
                currentElement = arrElement[j];
                return checks();
            }
        }
    }
    

    function checks(){
        if (!theElement) {
            theElement = currentElement;
            getElement();
        } else if (theElement === currentElement) {
            counter++;
            getElement();
        }
    }



}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
=======
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
>>>>>>> 65e4dda8a51f9198abd507cbe343b8ef8351009d
