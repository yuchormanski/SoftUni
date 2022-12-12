//01. Print Letters
// Write a JS function that prints all the symbols of a string, each on a new line.
// The input comes as a single string argument.
// The output is printed on the console, each letter on a new line.

function printLetters(inputString) {
    inputString.split('').forEach((str, x) => console.log(`str[${x++}] -> ${str}`));
}
// printLetters('Hello, World!');
//---------------------------------------


//---------------------------------------