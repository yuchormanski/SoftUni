/* Value of a String
Write a function, which finds the sum of the ASCII codes of the letters in a given string.  Your tasks will be a bit harder 
because you will have to find the sum of either the lowercase or the uppercase letters.
On the first line, you will receive the string.
On the second line, you will receive one of two possible inputs:
•	If you receive "UPPERCASE"  find the sum of all uppercase English letters in the previously received string
•	If you receive "LOWERCASE"  find the sum of all lowercase English letters in the previously received string
You should not sum the ASCII codes of any characters, which are not letters.
At the end print the sum in the following format:
•	The total sum is: {sum} */

function valueOfA_String(data) {
    let sum = 0;
    for (let char of data[0]) {
        if (data[1] === 'LOWERCASE') {
            if (char === char.toLowerCase()) {
                char = char.charCodeAt();
                if (char > 96 && char < 123) {
                    sum += char;
                }
            }
        } else if (data[1] === 'UPPERCASE') {
            if (char === char.toUpperCase()) {
                char = char.charCodeAt();
                if (char > 64 && char < 91) {
                    sum += char;
                }
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
// valueOfA_String(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfA_String(['AC/DC','UPPERCASE']
)