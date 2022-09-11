function equalSums(arr) {
    let right = 0;
    let left = 0;
    // get the total sum of array elements
    for (let i = 0; i < arr.length; i++) {
        right += arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
        let current = arr[j];
        //subtract first element from right side
        right -= current;
        if (right === left) {
            console.log(j);
            /* console.log(`At a[${j}] -> left sum = ${left}, right sum = ${right}`);*/
            return;
        }
        //sum first element with left side
        left += current;
    }
    right !== left ? console.log(`no`) : null;
}
equalSums([1, 2, 3, 3])



/* 
6.	Equal Sums
Write a function that determines if there exists an element in the array of numbers such that the sum of the elements 
on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index.
Examples
Input	                                        Output	Comments
[1, 2, 3, 3]	                                2	    At a[2] -> left sum = 3, right sum = 3
                                                        a[0] + a[1] = a[3]
[1, 2]	                                        no	    At a[0] -> left sum = 0, right sum = 2
                                                        At a[1] -> left sum = 1, right sum = 0
                                                        No such index exists
[1]	                                            0	    At a[0] -> left sum = 0, right sum = 0
[1, 2, 3]	                                    no	    No such index exists
[10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]	            3	    At a[3] -> left sum = 20, right sum = 20
                                                        a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]
 */