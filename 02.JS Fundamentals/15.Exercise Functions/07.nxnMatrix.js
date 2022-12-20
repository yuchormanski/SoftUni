function nxnMatrix(num) {
    let current = 0;
    while(current !== num){
        let print = `${num} `;
        console.log(print.repeat(num));
        current++;
    }
}
nxnMatrix(7)

/* 7. NxN Matrix
Write a function that receives a single integer number n and prints nxn matrix with that number.
Examples
Input	        Output
3	            3 3 3
                3 3 3
                3 3 3

7	            7 7 7 7 7 7 7
                7 7 7 7 7 7 7
                7 7 7 7 7 7 7
                7 7 7 7 7 7 7
                7 7 7 7 7 7 7
                7 7 7 7 7 7 7
                7 7 7 7 7 7 7

2	            2 2
                2 2
 */