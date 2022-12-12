function primeNumberChecker(num){
    let isPrime = true;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
        }
    }
    isPrime === true? console.log(true): console.log(false);
}
primeNumberChecker(9)

/* 2.	Prime Number Checker
Write a function to check if a number is prime (only divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
Examples
Input	Output
7	    true
8	    false
81	    false
 */