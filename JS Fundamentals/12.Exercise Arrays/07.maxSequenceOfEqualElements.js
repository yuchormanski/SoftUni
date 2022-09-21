function maxSequenceOfEqualElements(arr) {
    let counter = 0;
    let buff = '';
    let safe = '';
    let safeCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentI = arr[i];
        let j = i + 1;
        buff = `${currentI} `
        for (j; j < arr.length; j++) {
            let currentJ = arr[j];
            if (currentI === currentJ) {
                buff += `${currentI} `
                counter++;
            } else {
                if (counter > safeCounter) {
                    safe = buff;
                    safeCounter = counter;
                }
                counter = 0;
                break;
            }
        }
        if (j === arr.length) {
            if (counter > safeCounter) {
                safe = buff;
                safeCounter = counter;
            }
            return console.log(safe);
        }
    }
    console.log(safe);
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])

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