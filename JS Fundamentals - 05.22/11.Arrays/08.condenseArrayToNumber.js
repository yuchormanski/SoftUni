function condenseArrayToNumber(arr){
    let sum = 0;
    let arrLength = arr.length-1;
    for(let i = 0; i < arrLength; i++){
        sum += (arr[i] + arr[i + 1])
    }
    if(arrLength === 0){
        sum = arr[0];
    }
    console.log(sum);
}
condenseArrayToNumber([5,0,4,1,2])
/* 
8.	Condense Array to Number
Write a program, which receives an array of numbers, and condenses them by summing 
adjacent couples of elements until a single number is obtained. 
Examples
For example, if we have 3 elements [2, 10, 3], we sum the first two and the second 
two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
Input	            Output	            Comments
[2,10,3]	        25	                2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25
[5,0,4,1,2]	        35	                5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35
[1]	                1	                1 is already condensed to number
 */

//направи вложени цикли и още един array , който да съдържа текущите суми