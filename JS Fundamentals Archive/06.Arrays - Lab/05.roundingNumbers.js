/* 5.	Rounding Numbers Away from Zero
Write a program to read an array of real numbers (space separated values), round them to the nearest integer 
in “away from 0” style and print the output as in the examples below.
Rounding in “away from zero” style means:
•	To round to the nearest integer, e.g. 2.9  3; -1.75  -2
•	In case the number is exactly in the middle of two integers (midpoint value), round it to the next 
integer which is away from the 0:

Examples
Input	                    Output
0.9 1.5 2.4 2.5 3.14	    0.9 => 1
                            1.5 => 2
                            2.4 => 2
                            2.5 => 3
                            3.14 => 3 */


function roundingNumbers(arr) {
    for (let el of arr) {
        console.log(`${el} => ${el.toFixed()}`);
    }
}
roundingNumbers([0.9, 1.5, 2.4, 2.5, 3.14])