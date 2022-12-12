/* function triangleOfNumbers(n) {
    let buff = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            buff += `${i} `
        }
        console.log(buff);
        buff = '';
    }
} */
function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} `.repeat(i));
    }
}
triangleOfNumbers(5)

/*
7.	Triangle of Numbers
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
Constraints
·	n will be in the interval [1...20].
Examples
Input	Output		
(3)	    1
        2 2 
        3 3 3
(5)	    1
        2 2 
        3 3 3
        4 4 4 4
        5 5 5 5 5		

(6)	    1
        2 2 
        3 3 3
        4 4 4 4
        5 5 5 5 5
        6 6 6 6 6 6

*/