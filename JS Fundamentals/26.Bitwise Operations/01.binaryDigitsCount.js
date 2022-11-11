/* You are given a positive integer number and one binary digit B (0 or 1). 
Your task is to write a program that finds the number of binary digits (B) in a given integer. */

function binaryDigitsCount(n, b) {
    let binary = n.toString(2);
    console.log(binary);
    let count = 0;
    binary.split('').forEach(char => char == b ? count++ : null);
    console.log(count);
}
// binaryDigitsCount(20, 1)
// binaryDigitsCount(15, 1)
// binaryDigitsCount(10, 0)

function binaryDigitsCount(n, b) {
    let counter = 0;
    while (n > 0) {

        if (n % 2 === 0) {
            if (b === 0) {
                counter++;
            }
            n = parseInt(n / 2);
        } else {
            if (b === 1) {
                counter++;
            }
            n = parseInt(n / 2);
        }
    }
    console.log(counter);
}
binaryDigitsCount(20, 1)
