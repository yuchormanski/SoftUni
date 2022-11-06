/* You are given a positive integer number and one binary digit B (0 or 1). 
Your task is to write a program that finds the number of binary digits (B) in a given integer. */

function binaryDigitsCount(n,b) {
    let binary = n.toString(2);
    let count = 0;
    binary.split('').forEach(char => char == b? count++:null);
    console.log(count);
}
binaryDigitsCount(20, 0)
// binaryDigitsCount(15, 1)
// binaryDigitsCount(10, 0)