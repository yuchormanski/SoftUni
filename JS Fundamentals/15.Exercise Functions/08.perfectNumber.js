function perfectNumber(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
perfectNumber(28);

/* 8. Perfect Number
Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Output
•	If the number is perfect, print: "We have a perfect number!"
•	Otherwise, print: "It's not so perfect."
Examples

Input	                      Output 	                    Comments
6	                         We have a perfect number!	    1 + 2 + 3
28	                         We have a perfect number!	    1 + 2 + 4 + 7 + 14
1236498	                     It's not so perfect.

Hint
Equivalently, a perfect number is a number that is half the sum of all of its positive
divisors (including itself) => 6 is a perfect number because it is the sum
of 1 + 2 + 3 (all of which are divided without residue).
•	Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number
 */
/* 
Note : According to Wikipedia : In number theory, a perfect number is a positive integer 
that is equal to the sum of its proper positive divisors, that is, the sum of its positive 
divisors excluding the number itself (also known as its aliquot sum). Equivalently, 
a perfect number is a number that is half the sum of all of its positive 
divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper 
positive divisors, and 1 + 2 + 3 = 6. 
Equivalently, the number 6 is equal to half the 
sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
 */
