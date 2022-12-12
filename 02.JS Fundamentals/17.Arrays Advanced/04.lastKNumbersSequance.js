/* 4.	Last K Numbers Sequence
You are given two integers n and k. Write a function that generates and 
prints the following sequence:
•	The first element is 1.
•	Every following element equals the sum of the previous k elements.
•	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the 
number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
Examples
Input	Output		
6, 3	1 1 2 4 7 13		
8, 2	1 1 2 3 5 8 13 21 */



function lastKNumbersSequence(n, k) {
    let arr = [1];
    let arr2 = [1];
    let sum = 0;
    //creating array with "k" - length
    function unshifting() {
        for (let m = 1; m < k; m++) {
            arr.unshift(0)
        }
    }

    function summing() {
        unshifting()
        // making "n" loops
        for (let i = 1; i < n; i++) {
            // return last "k" elements from array
            let num = arr.slice(-k);
            for (let j = 0; j < num.length; j++) {
                sum += Number(num[j])
            }
            //add new elemet to the end of array
            arr.push(sum);
            arr2.push(sum);
            sum = 0;
        }
    }
    summing()
    console.log(arr2.join(' '));
}
lastKNumbersSequence(8, 2)
lastKNumbersSequence(6, 3)

/* function lastKNumbersSequence(n, k) {
    let arr = [1];
    for(let m = 1; m < k; m++){
        arr.unshift(0)
    }
    let sum = 0;
    for (let i = 1; i < n; i++) {
        let num = arr.slice(-k).join('');
        for (let j = 0; j < num.length; j++) {
            sum += Number(num[j]);
        }
        arr.shift();
        arr.push(sum);
        console.log(sum);
    }

}
lastKNumbersSequence(8, 2) */