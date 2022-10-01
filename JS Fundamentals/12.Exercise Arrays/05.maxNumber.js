function maxNumber(arr) {
    let result = [];
    while (arr.length !== 0) {
        let current = arr.shift(); // take the first number from array
        let arrMax = Math.max(...arr); // find biggest number in array left
        current > arrMax ? result.push(current) : null; // compared one to each other
    }
    console.log(result.join(' '));
}

//from the web:
/* function maxNumber(arr){
    let result = [];
    while(arr.length !== 0) {
        let [current, biggest] = [arr.shift(), Math.max(...arr)]
        if(current > biggest) result.push(current);
   }
   console.log(result.join(' '));
} */
maxNumber([13, 45, 48])

/* 5.	Max Number
Write a function to find all the top integers in an array. A top integer is an integer, 
which is bigger than all the elements to its right. 
Output
Print all top integers on the console, separated by a single space.
Examples
Input	                        Output
[1, 4, 3, 2]	                4 3 2
[14, 24, 3, 19, 15, 17]	        24 19 17
[41, 41, 34, 20]	            41 34 20
[27, 19, 42, 2, 13, 45, 48]	    48
 */
