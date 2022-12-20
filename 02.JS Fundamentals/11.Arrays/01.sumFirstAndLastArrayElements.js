function sumFirstAndLastArrayElements(arr) {
    let last = arr.length - 1;
    let sum = arr[0] + arr[last];
    console.log(sum);
}
sumFirstAndLastArrayElements([10, 17, 22, 33])

/* 1.	Sum First and Last Array Elements
Write a function that receives an array of numbers and prints the sum of the first and last element in that array.
Examples
Input	            Output
[20, 30, 40]	    60
[10, 17, 22, 33]	43
[11, 58, 69]	    80
 */