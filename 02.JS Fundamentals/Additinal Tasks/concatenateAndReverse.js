// 02. Concatenate and Reverse
// Write a JS function that reverses a series of strings and prints them concatenated from last to first.
// The input comes as an array of strings.
// The output is printed on the console. Print all strings concatenated on a single line, 
// starting from the last input string, going to the first. Reverse each individual string’s letters.

function concatenateAndReverse(input) {
    let text = '';
    for (let i = 0; i < input.length; i++) {
        text += input[i];
    }
    console.log(text.split('').reverse().join(''));
}
concatenateAndReverse(['I', 'am', 'student']);