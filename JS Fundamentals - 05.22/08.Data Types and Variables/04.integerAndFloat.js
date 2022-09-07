function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    /*if(sum === parseInt(sum)){
            console.log(`${sum} - Integer`);
        }else {
            console.log(`${sum} - Float`);
        } */

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerAndFloat(100, 200, 303)

/* 4.	Integer and Float
You will receive 3 numbers. Your task is to find their sum and print result 
to the console in the following format:
`{sum} - {type of the number (Integer or Float)}`

Examples
Input	            Output
(9, 100, 1.1)	    110.1 - Float
(100, 200, 303)	    603 - Integer
 */