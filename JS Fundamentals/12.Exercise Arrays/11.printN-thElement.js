/* 11.	Print N-th Element
Write a function that collects each element of an array, on a given step.
The input comes as an array of strings. The last element is N - the step.
The collections are every element on the N-th step starting from the first one. 
If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, 
until you reach the end of the array. Then, print elements in a row, separated by a single space.
Examples
Input	                                        Output
['5', '20', '31', '4', '20', '2']	            5 31 20
['dsa', 'asd', 'test', 'test', '2']	            dsa test
['1', '2', '3', '4', '5', '6']	                1 */

function printNthElement(elArray) {
    let printArray = [];
    let stepN = Number(elArray.pop());
    let elArrayLength = elArray.length;
    let result = '';
    for (let i = 0; i < elArrayLength; i) {
        printArray.push(elArray[i]);
        i += stepN
    }
    result = printArray.join(' ')
    console.log(result);
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])
