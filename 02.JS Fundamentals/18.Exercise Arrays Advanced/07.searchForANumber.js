/* 7.	Search for a Number
You will receive two arrays of integers. The second array is containing exactly three numbers. 

The first number represents the number of elements you have to take from the first array (starting from the first one).
The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
The third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
Examples
Input	                                Output	                    Comments
[5, 2, 3, 4, 1, 6],[5, 2, 3]	        Number 3 occurs 1 times.	First, we take 5 elements from the array. Delete the first 2 elements. 
                                                                    Then we search for the number 3.

[7, 1, 5, 8, 2, 7],[3, 1, 5]	        Number 5 occurs 1 times.	
 */

function searchForANumber(mainArray, commandArray) {
    let modeArray = mainArray.slice(0, commandArray[0]);
    let counter = 0;
    modeArray.splice(0, commandArray[1]);
    let arrayLength = modeArray.length;
    for (let i = 0; i < arrayLength; i++) {
        let currentDig = modeArray[i];
        currentDig === commandArray[2]? counter++: null;
    }
    console.log(`Number ${commandArray[2]} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5])
