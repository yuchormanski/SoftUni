/* On the first line of the input you will receive the encrypted message. 
After that, until the "Decode" command is given, you will be receiving strings 
with instructions for different operations that need to be performed upon the 
concealed message to interpret it and reveal its true content. There are several 
types of instructions, split by '|'
•	Move {number of letters}
o	Moves the first n letters to the back of the string. 
•	Insert {index} {value}
o	Inserts the given value before the given index in the string.
•	ChangeAll {substring} {replacement} 
o	Changes all occurrences of the given substring with the replacement text.
Input / Constraints
•	On the first line, you will receive a string with message.
•	On the next lines, you will be receiving commands, split by '|' .
Output
•	After the "Decode" command is received, print this message:
"The decrypted message is: {message}" */


function theImitationGame(line) {
    let message = line.shift();
    let currentCommand = line.shift();

    while (currentCommand) {
        let [command, arg1, arg2] = currentCommand.split('|');
        if (command === 'ChangeAll') {
            message = message.split(arg1).join(arg2);
        } else if (command === 'Insert') {
            arg1 = Number(arg1);
            message = message.slice(0, arg1) + arg2 + message.slice(arg1);
        } else if (command === 'Move') {
            arg1 = Number(arg1);
            let cut = message.slice(0, arg1);
            message = message.slice(arg1) + cut;
        }
        currentCommand = line.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
// theImitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
// ]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);

    