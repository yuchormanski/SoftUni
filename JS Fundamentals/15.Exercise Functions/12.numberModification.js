function numberModification(num) {
    let [temp, average, counter, i, buff] = [0, 0, 0, 0, ''];
    let numStr = num.toString().split('');

    while (average < 5) {
        
        // if first digit of number is greater or equal to 5
        if (Number(numStr[i]) >= 5) {
            return console.log(num);
        }
        counter++;
        // append a 9 to the end of the number
        if (i >= numStr.length) {
            temp += 9;
            buff += `9`;
        } else {
            temp += Number(numStr[i]);
            buff += `${numStr[i++]}`;
        }
        //average value of all digits of temp
        average = temp / counter;
    }
    console.log(`${buff}`);
}
numberModification(1)

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