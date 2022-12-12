/* 6.	Process Odd Numbers
You are given an array of numbers. Write a JS function that prints the elements at odd 
positions from the array, doubled and in reverse order.
The input comes as array of string elements holding numbers.
The output is printed on the console on a single line, separated by space.
Examples
Input	                                Output		
['10', '15', '20', '25']	            50 30		
['3', '0', '10', '4', '7', '3']	        6 8 0

 */

function processOddNumbers(givenArray) {
    let output = [];
    for (let i = 0; i < givenArray.length; i++) {
        i % 2 !== 0 ? output.push(givenArray[i]) : null;
    }
    output.map(Number);
    console.log(output.map(x => x * 2).reverse().join(' '));
}
processOddNumbers(['10', '15', '20', '25'])