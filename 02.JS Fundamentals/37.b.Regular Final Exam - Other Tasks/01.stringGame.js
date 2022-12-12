/* Problem 1 - String Game
Create a program that executes changes over a string.On the first line, you are going to receive the string. 
On the following lines, you will be receiving commands until the "Done" command.There are six possible commands:


• "Change {char} {replacement}"
• Replace all occurrences of the char with the given replacement, then print the string.

• "Includes {substring}"
。 Check if the string includes the given substring with and print "True" or "False". 

"End (substring}"
• Check if the string ends with the given substring and print "True" or "False". 

"Uppercase"
。Make the whole string uppercased, then print it.

"FindIndex {char}"
• Find the index of the first occurrence of the given char, then print it.

"Cut {startIndex} {count}"
• Remove all characters from the string, except those starting from the given start index and the next count of characters. 
Print only the cut chars.

    Input
• On the first line, you are going to receive the string.
On the following lines, until the "Done" command is received, you will be receiving commands. 
• All commands are case -sensitive.
    Output
The input will always be valid.
• Print the output of every command in the format described above. */


function stringGame(input) {
    let data = input.slice();
    let sentence = data.shift();
    let line = data.shift();
    while (line !== 'Done') {
        let [command, ...arg] = line.split(' ');
        switch (command) {
            case 'Change':
                const [old, newOne] = [arg[0], arg[1]];
                const regex = new RegExp(old, 'g');
                sentence = sentence.replace(regex, newOne);
                console.log(sentence);
                break;
            case 'Includes':
                sentence.includes(arg[0]) ? console.log(true) : console.log(false);
                break;
            case 'End':
                sentence.endsWith(arg[0]) ? console.log(true) : console.log(false);
                break;
            case 'Uppercase':
                sentence = sentence.toUpperCase();
                console.log(sentence);
                break;
            case 'FindIndex':
                console.log(sentence.indexOf(arg[0]));
                break;
            case 'Cut':
                let cutString = [...sentence].splice(arg[0], Number(arg[1]));
                sentence = cutString.join('')
                console.log(sentence);
                break;
        }
        line = data.shift();
    }

}
// stringGame([
//     "//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"
// ]);

stringGame([
    "*S0ftUni is thw B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);