function lowerOrUpper(str) {
    let letter = str.charCodeAt();
    if (letter >= 65 && letter <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}
lowerOrUpper('L')

/* function lowerOrUpper(char){
    char === char.toUpperCase()? console.log(`upper-case`): console.log(`lower-case`);
} */

/* 7.	Lower or Upper
Write a function that prints whether a given character is upper-case or lower-case.
Examples
Input	Output
'L'	    upper-case
'f'	    lower-case
 */