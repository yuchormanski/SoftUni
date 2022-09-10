
function mergeArrays(array1, array2) {
    let buff = '';
    for (let i = 0; i < array1.length; i++) {
        let sum = Number(array1[i]) + Number(array2[i]);
        i % 2 === 0 ? buff += sum : buff += `${array1[i]}${array2[i]}`;
        let interval = ` - `
        array1.length - 1 === i ? null : buff += interval;
    }
    console.log(buff);
}
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])

/* 3.	Merge Arrays
Write a function, which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements at that index
•	If the index of the element is odd, add the concatenation of both elements at that index
Input
As input, you will receive two string arrays (with equal length).
Output
As output, you should print the resulting third array, each element separated by " - ".
Examples
Input	                                                                Output
(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])	        22 - 1522 - 110 - 5636 - 46
(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'])	    35 - 12312333 - 10 - 77122 - 48 */
