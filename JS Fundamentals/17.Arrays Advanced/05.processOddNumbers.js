/* 5.	Process Odd Numbers
You are given an array of numbers. Write a function that prints the elements at odd 
positions from the array, doubled and in reverse order.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.
Examples
Input	                    Output
[10, 15, 20, 25]	        50 30		
[3, 0, 10, 4, 7, 3]	        6 8 0 */


function processOddNumbers(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            let current = arr[i];
            current *= 2;
            arr2.unshift(current);
        }
    }
    console.log(arr2.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])
processOddNumbers([10, 15, 20, 25])