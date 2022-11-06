/* Write a program that prints the bit at position 1 of the given integer. 
We use the standard counting: from right to left, starting from 0. */

function bitAtPosition1(n) {
    let binary = n.toString(2);
    console.log(binary.slice(-2, -1));
}
bitAtPosition1(2);
bitAtPosition1()