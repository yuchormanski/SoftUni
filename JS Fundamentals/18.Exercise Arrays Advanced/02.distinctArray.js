/* 2.	Distinct Array
You will be given an array of integer numbers on the first line of the input.
Remove all repeating elements from the array. 
Print the result elements separated by a single space.
Examples
Input	                            Output	            Comments
[1, 2, 3, 4]	                    1 2 3 4	            No repeating elements
[7, 8, 9, 7, 2, 3, 4, 1, 2]	        7 8 9 2 3 4 1	    7 and 2 are already present in the array remove them
[20, 8, 12, 13, 4, 4, 8, 5]	        20 8 12 13 4 5	    4 and 8 are already present in the array remove them
 */

/* function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (current === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    arr[0] === arr[1] ? arr.splice(1, 1) : null;
    console.log(arr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
distinctArray([1, 1, 1, 1])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]) */

/* function distinctArray(arr) {
    let unique = []
    for(let i = 0; i < arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    console.log(unique.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]) */

function distinctArray(arr) {
    let unique = new Set(arr)
    console.log(...unique);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])