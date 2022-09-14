function factorialDivision(num1, num2) {
    let buff1 = num1;
    let buff2 = num2;

    for (let i = num1 - 1; i >= 1; i--) {
        buff1 *= i;
    }
    for (let j = num2 - 1; j >= 1; j--) {
        buff2 *= j;
    }
    console.log((buff1 / buff2).toFixed(2));
}
factorialDivision(6, 2)

/* 10. Factorial Division
Write a function that receives two integer numbers. Calculate the factorial of each number. 
Divide the first result by the second and print the division formatted to the second decimal point.
Examples
Input	            Output	
5,2	                60.00
6,2	                360.00

Hints
•	Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
•	You can use recursion

5factorial = 5 * 4 * 3 * 2 * 1 = 5 * 24 = 120
 */