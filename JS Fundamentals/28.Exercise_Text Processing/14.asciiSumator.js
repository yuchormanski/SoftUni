/* Ascii Sumator
Write a function that prints a sum of all characters between two given characters (their ASCII code). 
On the first line, you will get a character. On the second line, you get another character. 
On the last line, you get a random string. Find all the characters between the two given and print their ASCII sum. */

function asciiSumator(input) {
    let first = input[0].charCodeAt();
    let second = input[1].charCodeAt();
    let line = input[2];
    let sum = 0;
    if (first > second) {
        [first, second] = [second, first];
    }
    for (let el of line) {
        if (el.charCodeAt() > first && el.charCodeAt() < second) {
            let digit = el.charCodeAt();
            sum += digit;
        }
    }
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
// asciiSumator(['?', 'E', '@ABCEF']);
// asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);