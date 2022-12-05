/* 01.Decrypting-Commands-условие
Problem 1 - Decrypting Commands

On the first line, you are going to receive a string. You will receive "decrypting" commands on the following lines
until you get the "Finish" command. There are five possible commands:

"Replace {currentChar} {newChar}"
。Replace all occurrences of the current char with the new char, then print the resulting message. 

"Cut {startIndex} {endIndex}"
。Remove the substring from the start index until the end index (both inclusive), then print the resulting message.
If any of the indexes is not valid, print: "Invalid indices!".

"Make (Upper/Lower}"
。 Replace all letters with upper/lower case and print the resulting message.

"Check {string}"
。If the message contains the given string, print: "Message contains {string}".
Otherwise, print: "Message doesn't contain {string}".

"Sum {startIndex} {endIndex}"
。Get the substring from the start index to the end index (both inclusive) and print the sum of the ASCII values of the substring.
If any of the given indices are invalid, print: "Invalid indices!". An index is valid when it is non- negative 
and less than the size of the collection.

Note: At any time, the message will contain at least one character.

Input
• On the first line, you are going to receive the string.
Output
On the following lines, until the "Finish" command is received, you will be receiving commands.
Print the output of every command in the format described above.
Constraints
The indexes will be integers in the range [-50...150]. */


function decryptingCommands(input) {
    let data = input.slice();
    let message = data.shift();
    let command = data.shift();

    while (command !== 'Finish') {
        let line = command.split(' ');

        if (line[0] === 'Replace') {

            let old = line[1];
            let regex = new RegExp(old, 'g')
            let newOne = line[2];
            // let temp = message.split(old).join(newOne);
            let temp = message.replace(regex, newOne);
            message = temp;
            console.log(message);

        } else if (line[0] === 'Make') {
            let temp;
            if (line[1] === 'Upper') {
                temp = message.toUpperCase();

            } else if (line[1] === 'Lower') {
                temp = message.toLowerCase();
            }
            message = temp;
            console.log(message);

        } else if (line[0] === 'Check') {
            if (message.includes(line[1])) {
                console.log(`Message contains ${line[1]}`);
            } else {
                console.log(`Message doesn't contain ${line[1]}`);
            }


        } else if (line[0] === 'Sum') {
            let start = Number(line[1]);
            let end = Number(line[2]);
            let count = (end +1);

            if (start >= 0 && end < message.length) {
                let part = message.slice(start, count);
                let sum = 0;
                for (const char of part) {
                    sum += char.charCodeAt();
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        } else if (line[0] === 'Cut') {
            let start = Number(line[1]);
            let end = Number(line[2]) + 1;
            let count = end - start;

            if (start >= 0 && end < message.length) {
                let part = message.split('');
                part.splice(start, count);
                part = part.join('');
                message = part;
                console.log(message);
            } else {
                console.log('Invalid indices!');
            }
        }
        command = data.shift();
    }
}
decryptingCommands([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
]);

// decryptingCommands(["HappyNameDay",
//     "Replace p r",
//     "Make Lower",
//     "Cut 2 23",
//     "Sum -2 2",
//     "Finish"]);

// DinnerIsServed
// Make Upper
// Check Dinner
// Replace N M
// Finish
