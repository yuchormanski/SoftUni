/* 6.	Smallest Two Numbers
Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.
Examples
Input	                Output
[30, 15, 50, 5]	        5 15		
[3, 0, 10, 4, 7, 3]	    0 3
Hints
•	You can use the following function to sort the numbers in the array:
    let sortedInAscending = arr.sort((a - b) => {
        return a - b;
    })
•	Afterward the first two elements in the array are the smallest
•	You can use slice() to take the first two numbers */


function smallestTwoNumbers(arr) {
    arr.sort(function (a, b) { return a - b })
    console.log(arr.slice(0, 2).join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])