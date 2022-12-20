function binaryToDecimal(n) {
    let binary = n.toString();
    let digit = parseInt(binary, 2);
    console.log(digit);
}
binaryToDecimal('00001001')

/* Write a function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
Examples
Input	            Output
(00001001)	        9
(11110000)	        240
 */