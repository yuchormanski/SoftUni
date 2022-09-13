function addAndSubtract(a, b, c) {
    //calculate the sum of the first two integers
    let sum = function (a, b) {
        return a + b;
    }
    let firstAction = sum(a, b); // sum(a, b) - invoke first function result

    // subtracts the result of the function the sum() and the third integer
    let subtract = function (firstAction, c) {
        return firstAction - c;
    }
    let secondAction = subtract(firstAction, c) // subtract(firstAction, c) - invoke second function result

    console.log(secondAction); // result from first and second functions
}
addAndSubtract(42,58,100)

// Arrow function

function addAndSubtract2(a, b, c) {
    let sum = (a, b) => a + b;
    let firstAction = sum(a, b);


    let subtract = (firstAction, c) => firstAction - c;
    let secondAction = subtract(firstAction, c)

    console.log(secondAction); 
}
addAndSubtract2(42,58,100)



/* 2. Add and Subtract
You will receive three integer numbers. 
Write a function sum() to calculate the sum of the first two integers and a function 
subtract(), which subtracts the result of the function the sum() and the third integer.
Examples
Input	                Output
23,6,10	                19
1,17,30	                -12
42,58,100	            0
 */