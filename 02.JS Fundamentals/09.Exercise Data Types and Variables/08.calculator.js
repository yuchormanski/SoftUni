function calculator(n1, operator, n2){
    if(operator === '+'){console.log((n1 + n2).toFixed(2))}
    else if(operator === '-'){console.log((n1 - n2).toFixed(2))}
    else if(operator === '*'){console.log((n1 * n2).toFixed(2))}
    else if(operator === '/'){console.log((n1 / n2).toFixed(2))}
}
calculator(5,'+',10)

/* 8.	*Calculator
Write a function that receives 3 parameters: a number, an operator (string), and another 
number.
The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the 
console formatted to the second decimal point.
Examples
Input	        Output
(5,'+',10)	    15.00
(25.5,'-',3)	22.50
 */