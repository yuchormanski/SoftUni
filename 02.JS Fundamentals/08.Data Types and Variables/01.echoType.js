function echoType(input) {
    let check = typeof (input);
    check !== 'object' ? console.log(`${check}\n${input}`) : console.log(`${check}\nParameter is not suitable for printing`);
}
echoType(null)

/* 1.	Echo Type
Write a JS function that takes one parameter and prints on two lines the type of the 
parameter and then one of the following:
•	If the parameter type is either string or number, print its value
•	Otherwise, print the text 'Parameter is not suitable for printing'
Examples
Input	                                Output
'Hello, JavaScript!'	                string
                                        Hello, JavaScript!

18	                                    number
                                        18

null	                                object
                                        Parameter is not suitable for printing

Hints
•	Write a function that receives a single parameter.
•	Use the console.log function to print text on the console. Each call prints a new 
line automatically.
•	The typeof operator is used to determine the data type of a given value.

 */