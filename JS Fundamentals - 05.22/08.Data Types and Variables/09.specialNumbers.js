function specialNumbers(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){

        
        if(sum === 5 || sum === 7 || sum === 11 ){
          console.log(`${i} -> True`);  
        } else {
            console.log(`${i} -> False`);
        }     
    }
}
specialNumbers(20)

/* 9.	Special Numbers
Write a program that receives a number n.  For all numbers in the range [1…n] print the number 
and if it is special or not (True / False).
•	A number is special when its sum of digits is 5, 7 or 11.
Examples
Input	Output
15      1 -> False
        2 -> False
        3 -> False
        4 -> False
        5 -> True
        6 -> False
        7 -> True
        8 -> False
        9 -> False
        10 -> False
        11 -> False
        12 -> False
        13 -> False
        14 -> True
        15 -> False

20      1 -> False
        2 -> False
        3 -> False
        4 -> False
        5 -> True
        6 -> False
        7 -> True
        8 -> False
        9 -> False
        10 -> False
        11 -> False
        12 -> False
        13 -> False
        14 -> True
        15 -> False
        16 -> True
        17 -> False
        18 -> False
        19 -> False
        20 -> False
Hints
To calculate the sum of digits of given number num, you might repeat the following: 
sum the last digit (num % 10) and remove it (sum = sum / 10) until num reaches 0. 
Use parseInt() while dividing to get only integer numbers.
 */