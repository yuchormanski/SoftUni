/* Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.

Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console. */

function mathOperations(a, b, operator) {
    let result = 0;

    // switch (operator) {
    //     case '+': result = a + b; break;
    //     case '-': result = a - b; break;
    //     case '*': result = a * b; break;
    //     case '/': result = a / b; break;
    //     case '%': result = a % b; break;
    //     case '**': result = a ** b; break;
    // }

    operator === '+' ? result = a + b :
        operator === '-' ? result = a - b :
            operator === '*' ? result = a * b :
                operator === '/' ? result = a / b :
                    operator === '%' ? result = a % b :
                        operator === '**' ? result = a ** b : null;

    console.log(result);
}
mathOperations(5, 6, '+');