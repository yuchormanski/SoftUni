function lowerOrUpper(str) {
    let letter = str.charCodeAt();
    if (letter >= 65 && letter <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}
lowerOrUpper('L')

/* 7.	Lower or Upper
Write a function that prints whether a given character is upper-case or lower-case.
Examples
Input	Output
'L'	    upper-case
'f'	    lower-case
 */