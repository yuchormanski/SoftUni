/* Message Decrypter
Create a program that checks if inputs have a valid message and decrypt it. On the first line, 
you will receive a number that indicates how many inputs you will receive on the following lines.
A message is valid when:
• There is nothing else before and after it
It starts with a tag, which is surrounded by either "$" or "%" (but not both at the same time). 
The tag itself has to be minimum 3 characters long, start with an uppercase letter, followed only by lowercase letters
There is a colon and a single white space after the tag
There are 3 groups consisting of numbers between "[" and "]", followed by a pipe ("|")

Example for a valid message:
"$Request$: [73]|[115]|[32]|"
You must check if the message is valid, and if it is - decrypts it. If it isn't - print the following message:
"Valid message not found!"
Decrypting a message means taking all numbers and turn them into ASCII symbols. After successful decrypt, 
print it in the following format:
"{tag}: {decryptedMessage}"
Input
• On the first line - n - the count of inputs.
Output
On the next n lines - input that you have to check if it has a valid message.
• Print all results from each input, each on a new line. */


function messageDecrypter(input) {
    let data = input.slice();
    let lineCount = data.shift();
    let regex = /^(\$|%)(?<tag>[A-Z][a-z]{2,})\1: \[(?<first>[\d]+)\]\|\[(?<second>[\d]+)\]\|\[(?<third>[\d]+)\]\|$/;

    while (lineCount > 0) {
        let line = data.shift();
        let valid = regex.exec(line);

        if (valid) {
            let tag = valid.groups['tag'];
            let first = valid.groups['first'];
            let second = valid.groups['second'];
            let third = valid.groups['third'];
            first = String.fromCharCode(first);
            second = String.fromCharCode(second);
            third = String.fromCharCode(third);

            console.log(`${tag}: ${first + second + third}`);
        } else {
            console.log('Valid message not found!');
        }
        lineCount--;
    }
}
// messageDecrypter([
//     "4",
//     "$Request$: [73]|[115]|[105]|",
//     "%Taggy$: [73]|[73]|[73]|",
//     "%Taggy%: [118]|[97]|[108]|",
//     "$Request$: [73]|[115]|[105]|[32]|[75]|"
// ]);

/* Output
Request: Isi
Valid message not found!
Taggy: val
Valid message not found! */


messageDecrypter([
    "3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
]);

/* Output
Valid message not found!
Valid message not found!
Valid message not found! */

