//       4.	Jan's Notation
//       Write a program that parses a series of instructions written in postfix notation and executes them 
//       (postfix means the operator is written after the operands). You will receive a series of 
//       instructions – if the instruction is a number, save it; otherwise, the instruction is an 
//       arithmetic operator (+-*/) and you must apply it to the most two most recently saved numbers. 
//       Discard these two numbers and in their place, save the result of the operation – this number is 
//       now eligible to be an operand in a subsequent operation. Keep going until all input instructions 
//       have been exhausted, or you encounter an error.
//       In the end, if you’re left with a single saved number, this is the result of the calculation and 
//       you must print it. 
//       If there are more numbers saved, then the user-supplied too many instructions 
//       and you must print "Error: too many operands!". If at any point during the calculation you don’t 
//       have two numbers saved, the user-supplied too few instructions and you must print "Error: not enough operands!".  
//       See the examples for more details.
//       Input
//       You will receive an array with numbers and strings – the numbers will be operands and must be saved; 
//       the strings will be arithmetic operators that must be applied to the operands.
//       Output
//       Print on the console on a single line the final result of the calculation or an error message, as instructed above.
//       Constraints
//       •	The numbers (operands) will be integers
//       •	The strings (operators) will always be one of +-*/
//       •	The result of each operation will be in the range [-253…253-1] (MAX_SAFE_INTEGER will never be exceeded)

/* [3,4,'+']	                        7

[5, 3, 4, '*', '-']                 -7

[7, 33, 8,'-']	                    Error: too many operands!	

[15,'/']	                        Error: not enough operands!

[31,2,'+',11,'/']                   3

[-1,1,'+',101,'*',18,'+',3,'/']     6
   */ 



function jansNotation(instructions) {
    let numArray = [];
    let operator = '';
    let first = 0;
    let second = 0;
    let result = 0;

    for (let i = 0; i < instructions.length; i++) {
        let current = instructions[i];
        // checking current element is number or string
        if (current * 1 === current) {
            numArray.push(current);
        } else {
            operator = current;
            //IF not enough operands < 2
            if (numArray.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            //IN order of adding to array 
            second = numArray.pop();
            first = numArray.pop();
            // checking operator type
            operator === '+' ? result = first + second :
                operator === '-' ? result = first - second :
                    operator === '*' ? result = first * second :
                        operator === '/' ? result = first / second : null;
            numArray.push(result);
        }
    }
    if (numArray.length === 1) {
        console.log(numArray.join(''));
        return;
    } else {
        console.log('Error: too many operands!');
    }
}
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/'])