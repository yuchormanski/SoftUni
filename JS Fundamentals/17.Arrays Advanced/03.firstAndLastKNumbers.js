/* 3.	First and Last K Numbers
Write a function that prints the first k and the last k elements from an array of numbers.
The input comes as an array of number elements. The first element represents the number k, 
all other elements are from the array that needs to be processed.
The output is printed on the console on two lines. On the first line, 
print the first k elements, separated by space. On the second line, print the last k elements, 
separated by space.
Examples
Input	            Output
[2, 7, 8, 9]	    7 8
                    8 9

[3, 6, 7, 8, 9]	    6 7 8
                    7 8 9
 */

function firstAndLastKNumbers(numArray) {
    let k = numArray.shift();
    let end = numArray.length - k;
    let first = numArray.slice(0, k);
    let last = numArray.slice(end);
    console.log(first.join(' '));
    console.log(last.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])

function firstAndLastKNumbers(numArray) {
    let k = numArray.shift();
    let first = '';
    let second = '';
    for (let i = 0; i < k; i++) {
        let current = numArray[i];
        first += `${current} `;
    }
    for (let j = numArray.length - k; j < numArray.length; j++) {
        let current = numArray[j];
        second += `${current} `;
    }
    console.log(`${first}\n${second}`);
}
firstAndLastKNumbers([3, 6, 7, 8, 9])