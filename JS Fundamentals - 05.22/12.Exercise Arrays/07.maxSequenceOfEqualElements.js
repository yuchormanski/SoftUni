function maxSequenceOfEqualElements(numberArray) {
    let buff = numberArray[0]; // first element to be compared
    let forCheck = buff; // buffer for first sequence
    let accumulator = ''; // buffer for longest sequence found
    let counter = 1;
    for (let i = 1; i < numberArray.length; i++) {
        let current = numberArray[i];
        if (forCheck === current) {
            buff += `${current}`;
            counter++;
        } else {
            forCheck = current;
            buff = current;
            counter = 1;
        }
        if (buff.length >= counter) {
            //check if first sequence length is smaller or bigger than saved
            if (accumulator.length < buff.length) {
                accumulator = buff;
            }
        }
    }
    // splitted the string to array and joined to new string with interval between elements
    accumulator = accumulator.split('').join(' ');
    console.log(accumulator);
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])

/* 7.	Max Sequence of Equal Elements
Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.
Examples
Input	                                        Output
[2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	                2 2 2
[1, 1, 1, 2, 3, 1, 3, 3]	                    1 1 1
[4, 4, 4, 4]	                                4 4 4 4
[0, 1, 1, 5, 2, 2, 6, 3, 3]	                    1 1
 */