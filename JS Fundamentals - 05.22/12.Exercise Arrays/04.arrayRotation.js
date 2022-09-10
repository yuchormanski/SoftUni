function arrayRotation(arr, n) {
    let newArr = '';
    for (let i = 0; i < n; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
    }
    newArr = arr.join(' ');
    console.log(newArr);
}
arrayRotation([51, 47, 32, 61, 21], 2)

/* 4.	Array Rotation
Write a function that receives an array and the number of rotations you have to perform. 
Note: Depending on the number of rotations, the first element goes to the end.
Output
Print the resulting array elements separated by a single space.
Examples
Input	                                    Output
[51, 47, 32, 61, 21], 2	                    32 61 21 51 47
[32, 21, 61, 1], 4	                        32 21 61 1
[2, 4, 15, 31], 5	                        4 15 31 2
 */