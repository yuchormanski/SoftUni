/* Write a function that takes three number arguments as input and finds the largest of them. 
Print the following text on the console:  `The largest number is {number}.`.
The input comes as three number arguments passed to your function.
The output should be printed to the console.
 */
function largestNumber(a, b, c) {
    console.log(`The largest number is ${Math.max(a, b, c)}.`);
}
largestNumber(5, -3, 16);