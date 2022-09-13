function amazingNumbers(num){
    let strNum = num.toString();
    let sum = 0;
    for(let i = 0; i < strNum.length; i++){
        sum += Number(strNum[i]); 
    }
    // string.includes('')
    if(sum.toString().includes('9')){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233)

/* 5.	Amazing Numbers
Write a function, which as input will receive a number.
Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {True or False}"
An amazing number includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 
583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

Examples
Input	         Output
(1233)	         1233 Amazing? True
(999)            999 Amazing? False
 */