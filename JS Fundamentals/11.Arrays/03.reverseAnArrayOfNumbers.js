function reverseAnArrayOfNumbers(n, array) {
    let newArray = [];
    let buff = '';
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }
    newArray.reverse();
    for (let j = 0; j < newArray.length; j++) {
        buff += `${newArray[j]} `
    }
    console.log(buff);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])

/* 3.	Reverse an Array of Numbers
Write a program, which receives a number n and an array of elements. Your task is to create a new array 
with n numbers from the original array, reverse it and print its elements on a single line, space-separated.
Examples
Input	                        Output
(3, [10, 20, 30, 40, 50])	    30 20 10
4, [-1, 20, 99, 5]	        5 99 20 -1
2, [66, 43, 75, 89, 47]	    43 66
 */