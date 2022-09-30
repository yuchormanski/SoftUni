/* 13.	Rotate Array
Write a function that rotates an array. The array should be rotated to the right side, meaning that the 
last element should become the first, upon rotation. 
The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.
Examples
Input	                                                Output
['1', '2', '3', '4', '2']	                            3 4 1 2
['Banana', 'Orange', 'Coconut', 'Apple', '15']	        Orange Coconut Apple Banana

Hints
·	Check if there is a built-in function for inserting elements at the start of the array.
 */


function rotateArray(mainArray) {
    let counter = Number(mainArray.pop());
    for (let i = 0; i < counter; i++) {
        let el = mainArray.pop();
        mainArray.unshift(el);
    }
    console.log(mainArray.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])