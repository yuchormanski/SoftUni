/* You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
The input comes as a single string argument.
The output is printed on the console on a single line, in the form of a comma-separated list. */

function extractText(inputString) {
    let regex = /(\([A-Z|a-z][a-z]+ [A-Z|a-z][a-z]+\))/gm;
    let output = [];
    // inputString.match(regex).forEach(thatMatched => output.push(thatMatched.slice(1,-1)));

    let found = regex.exec(inputString);
    while (found) {
        output.push(found[0].slice(1,-1));
        found = regex.exec(inputString);
    }
    console.log(output.join(', '));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');