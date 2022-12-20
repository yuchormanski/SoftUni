/* 1.	Sum First and Last
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as an array of string elements holding numbers.
The output is printed on the console.
Examples
Input	                    Output
['20', '30', '40']	        60
['5', '10']         	    15 */

// Keeps the original array
function sumFirstAndLast(numArray) {
    let [first, last] = [Number(numArray[0]), Number(numArray[numArray.length - 1])];
    console.log(first + last);
}
sumFirstAndLast(['20', '30', '40'])

// destroying the original array. Cut its elements
function sumFirstAndLast2(numArray) {
    let [first, last] = [Number(numArray.shift()), Number(numArray.pop())];
    console.log(first + last);
}
sumFirstAndLast2(['20', '30', '50'])

// Keep the original array
function sumFirstAndLast3(numArray) {
    let [first, last] = [Number(numArray.slice(0,1)), Number(numArray.slice(-1))];
    console.log(first + last);
}
sumFirstAndLast3(['20', '30', '60'])


