function numberModification(num) {
    let average = 0;
    let numToString = num.toString();

    while (average <= 5) {
        let numLength = numToString.length;
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        if (sum / numLength < 5) {
            numToString += 9;
        } else {
            average = sum / numLength
        }
    }
    console.log(numToString);
}
numberModification(5835)
//numberModification(101)

/* 12.	Number Modification
Write a JS program that changes a number until the average of all its digits is not higher than 5. 
To modify the number, your program should append a 9 to the end of the number, when the average 
value of all its digits is higher than 5 the program should stop appending. 
The input is a single number.
The output should consist of a single number - the final modified number which has an average 
value of all its digits higher than 5. The output should be printed on the console.
Constraints
•	The input number will consist of no more than 6 digits.
•	The input will be a valid number (there will be no leading zeroes).
Examples
Input	                Output
101	                    1019999
5835	                5835
 */

