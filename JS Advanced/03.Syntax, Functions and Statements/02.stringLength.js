/* 2.	String Length
Write a JS function that takes three string arguments as an input. Calculate the sum of the 
length of the strings and the average length of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console in two lines. */


function stringLength(a, b, c) {
    let buffer = 0;
    let input = [a, b, c];
    input.forEach(el => buffer += el.length);
    console.log(`${buffer}\n${Math.floor(buffer/input.length)}`);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3')