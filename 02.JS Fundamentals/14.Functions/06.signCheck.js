function signCheck(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let sign = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i] < 0 ? sign++ : null;
    }
    sign === 1 || sign === 3 ? console.log("Negative") : console.log("Positive");
}
signCheck(-5, 1, 1)

/* 6. Sign Check
Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree 
is positive or negative. 
Try to do this WITHOUT multiplying the 3 numbers.
Input
The input comes as parameters named numOne, numTwo, numThree.
Output
•	If the result is positive, print on the console -> "Positive"
•	Otherwise, print -> "Negative"
Example
Input	                                Output
 5, 12,-15	                            Negative
-6,-12, 14	                            Positive
-1,-2,-3	                            Negative
-5, 1, 1	                            Negative
Hints
•	Consider how the sign of each of the three input parameters will affect their product.
•	Check all the different combinations for the three numbers.
 */