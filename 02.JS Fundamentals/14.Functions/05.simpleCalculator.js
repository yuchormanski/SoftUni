function simpleCalculator(numOne, numTwo, operator) {
    operator === "multiply" ? console.log(numOne * numTwo) :
        operator === "divide" ? console.log(numOne / numTwo) :
            operator === "add" ? console.log(numOne + numTwo) :
                operator === "subtract" ? console.log(numOne - numTwo) : null
}
simpleCalculator(5, 5, 'multiply')

/* 5. Simple Calculator
Write a function that receives three parameters – two numbers and an operator (string) 
– and calculates the result depending on the operator. Operator can be 'multiply', 
'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
Bonus
Solve this task without using any conditional statements (no if or switch statements 
    or ternary operators).
Input
The input comes as parameters named numOne, numTwo, operator.
Examples
Input	                Output
5,5,'multiply'	            25
40,8,'divide'	            5
12,19,'add'	                31
50,13,'subtract'	        37
 */