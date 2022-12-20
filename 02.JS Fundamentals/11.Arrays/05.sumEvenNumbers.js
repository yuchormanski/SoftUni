/* function sumEvenNumbers(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        let current = Number(numArr[i]);
        current % 2 === 0 ? sum += current : null;
    }
    console.log(sum);
} */
function sumEvenNumbers(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = Number(numArr[i]);
    }
     let sum = 0;
     for(let num of numArr){
        num % 2 === 0? sum += num: null;
     }
    console.log(sum);
}
sumEvenNumbers(['2', '4', '6', '8', '10'])

/* 5.	Sum Even Numbers
Write a program, which receives an array of strings, parse them into numbers, and 
sum only the even numbers.
Examples
Input	                    Output
['1','2','3','4','5','6']	12
['3','5','7','9']	        0
['2','4','6','8','10']	    30
Hints
•	Parse each string to number
•	Create a variable for the sum
•	Iterate through all elements in the array with a for-of loop
•	Check if the number is even
•	Print the total sum
 */