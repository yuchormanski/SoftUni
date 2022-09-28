/* 2.	Sign of Integer Number
Create a method that prints the sign of an integer number n.
Examples
Input	                    Output
2	                        The number 2 is positive.
-5	                        The number -5 is negative.
0	                        The number 0 is zero. */

function signOfIntegerNumber(number) {
    number < 0 ? console.log(`The number ${number} is negative.`) :
        number > 0 ? console.log(`The number ${number} is positive.`) :
            number === 0 ? console.log(`The number ${number} is zero.`) : null;

}
signOfIntegerNumber(0.1)