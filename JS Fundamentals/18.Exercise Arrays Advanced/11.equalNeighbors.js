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