function addAndSubtract(arr) {
    let newArr = [];
    let originSum = 0;
    let moddedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let modded = 0;
        if (current % 2 === 0) {
            modded = current + i;
            newArr.push(` ${modded}`);
        } else {
            modded = current - i;
            newArr.push(` ${modded}`);
        }
        originSum += current;
        moddedSum += modded;
    }
    console.log(`[${newArr} ]\n${originSum}\n${moddedSum}`);
}
addAndSubtract([-5, 11, 3, 0, 2])

/* Submit your solutions in the SoftUni judge system at: https://judge.softuni.org/Contests/1256

1.	Add and Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the 
original array, on the third line print the sum of numbers from the modified array.
Examples
Input	                        Output
[5, 15, 23, 56, 35]	            [ 5, 14, 21, 59, 31 ]
                                134
                                130

[-5, 11, 3, 0, 2]	            [ -5, 10, 1, 3, 6 ] 
                                11
                                15

*/

