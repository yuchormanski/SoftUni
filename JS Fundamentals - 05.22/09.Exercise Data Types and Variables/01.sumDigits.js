function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);
}
sumDigits(543)

/* 1.	Sum Digits
Write a function, which will be given a single number. Your task is to 
find the sum of its digits.
Examples
Input	        Output
(245678)        32
(97561)	        28
(543)	        12
 */