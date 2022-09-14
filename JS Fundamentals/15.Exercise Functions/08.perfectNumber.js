function perfectNumber(num) {
    for (let i = 1; 1 <= num; i++) {
        //check prime number
        let n = i;
        function prime() {
            let isPrime = true;
            for (let j = 2; j < n; j++) {
                if (n % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                return n;
            }
        }
        prime()
        //2p−1(2p − 1)

    }
}
perfectNumber(6)

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

// perfect numbers are generated by the formula 2p−1(2p − 1)
//p = prime number,