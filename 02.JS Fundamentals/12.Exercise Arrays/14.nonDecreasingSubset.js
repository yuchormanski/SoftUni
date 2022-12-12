/* 14.	Non-Decreasing Subset
Write a function that extracts only those numbers that form a non-decreasing subset. 
In other words, you start from the first element and continue to the end of the given array of numbers. 
Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher 
than the current biggest one you set it as the current biggest one and you continue to the next number. 

Input
The input comes as an array of numbers.

Output
The output is the processed array after the filtration, which should be a non-decreasing subset. 
The elements should be printed on one line, separated by a single space.
Examples
Input	                                                    Output
[ 1, 3, 8, 4, 10, 12, 3, 2, 24]	                            1 3 8 10 12 24
[ 1, 2, 3, 4]	                                            1 2 3 4
[ 20, 3, 2, 15, 6, 1]	                                    20

Hints
·	The Array.filter() built-in function might help you a lot with this problem.
 */

function nonDecreasingSubset(arrayOfNumbers) {
    let max = Number.MIN_SAFE_INTEGER;
    let theLength = arrayOfNumbers.length;
    let result = [];

    for (let i = 0; i < theLength; i++) {
        let el = arrayOfNumbers[i]
        if (el >= max) {
            max = el
            result.push(el)
        }
    }
    return console.log(result.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])