5/* . Palindrome Integers
A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, 
which receives an array of positive integers and checks if each integer is a palindrome or not.
Output
•	If the current integer is a palindrome, print: "true"
•	Otherwise, print: "false"
Examples
Input	                    Output		
[123,323,421,121]       	false
                            true
                            false
                            true

[32,2,232,1010]	            false
                            true
                            true
                            false
Hints
•	Read more about palindromes: https://en.wikipedia.org/wiki/Palindrome
 */

function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i].toString();
        ruc = cur.split('').reverse().join('');
        cur === ruc ? console.log(true) : console.log(false);
    }
}
palindromeIntegers([32, 2, 232, 1010])
