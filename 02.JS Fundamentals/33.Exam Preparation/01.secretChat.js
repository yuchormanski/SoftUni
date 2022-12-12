/* You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in!
On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, 
you will receive strings with instructions for different operations that need to be performed upon the concealed message to 
interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
    •	"InsertSpace:|:{index}":
        o	Inserts a single space at the given index. The given index will always be valid.
    •	"Reverse:|:{substring}":
        o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
        o   If not, print "error".
        o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
    •	"ChangeAll:|:{substring}:|:{replacement}":
        o	Changes all occurrences of the given substring with the replacement text.

Input / Constraints
•	On the first line, you will receive a string with a message.
•	On the following lines, you will be receiving commands, split by ":|:".
Output
•	After each set of instructions, print the resulting string. 
•	After the "Reveal" command is received, print this message:
"You have a new text message: {message}" */

function secretChat(message) {
    let hidden = message.shift();
    let index = 0;
    let command = message[index];
    let firstPart;

    while (command !== 'Reveal') {
        let [current, arg1, arg2] = command.split(":|:");

        if (current === 'ChangeAll') {   
            if(hidden.includes(arg1)){
                //the arg1 could be more than one char
                while(hidden.includes(arg1)){
                  let start = hidden.indexOf(arg1);
                  let argLength = arg1.length;
                  firstPart = hidden.slice(0, start) + arg2 + hidden.slice((start + argLength)); 
                  hidden = firstPart;
                }    
            }
            console.log(hidden);

        } else if (current === 'Reverse') {
            if (hidden.includes(arg1)) {
                let argLength = arg1.length;
                let start = hidden.indexOf(arg1);
                let rev = arg1.split('').reverse().join('');
                //IF index of  arg1 is  = 0
                if (start === 0) {
                    firstPart = hidden.slice((start + argLength)) + rev;
                } else {
                    firstPart = hidden.slice(0, start) + hidden.slice((start + argLength)) + rev;
                }
                hidden = firstPart;
                console.log(hidden);
            } else {
                console.log('error');
            }

        } else if (current === 'InsertSpace') {
            let indexToInsert = Number(arg1);
            //STUPID but if index to insert is = 0
            if (indexToInsert === 0) {
                firstPart = " " + hidden.slice((indexToInsert));
            } else {
                firstPart = hidden.slice(0, indexToInsert) + " " + hidden.slice((indexToInsert));
            }
            hidden = firstPart
            console.log(hidden);
        }
        command = message[++index];
    }
    console.log(`You have a new text message: ${hidden}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
// ]);