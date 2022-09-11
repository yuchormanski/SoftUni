function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let currentI = arr[i];
        let j = i + 1;
        for (j; j < arr.length; j++) {
            let currentJ = arr[j];
            if (currentI + currentJ === num) {
                console.log(`${currentI} ${currentJ}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)

/* 8.	Magic Sum
Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
Examples
Input	                                Output
([1, 7, 6, 2, 19, 23],8)	            1 7 6 2
([14, 20, 60, 13, 7, 19, 8], 27)	    14 13 20 7 19 8
([1, 2, 3, 4, 5, 6],6)	                1 5 2 4
 */