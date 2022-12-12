/* Dictionary

You have homework to present different words and their definitions.
You are in the library, looking for words to write down in your notebook. Your first task is to store every word with its definition.
You will receive all the words and definitions, separated by "|", and each word and its definition will be separated by ":" 
Note: you could receive the same word more than once with different definitions - you need to store all of them in your notebook.
Next, you will receive only words, again separated by "|". These are the words that your teacher will test you on. In the end, you will receive one command, which will be either "Test" or "Hand Over":

• If the command is "Test", you should find each word that your teacher will test you on (if it exists in your notebook) 
and print all its definitions in the following format:
"(word):"
" -{definition1}" 
" -{definition2)"
" -{definitionN}"

• If the command is "Hand Over", you should print only the words that are in your notebook, without the definitions, 
separated by a space (" ").

Input
• On the first line, you will receive pairs of words and their definition, separated by " | ". 
Within each pair, the word is separated from the definition with ":"
On the second line, you will receive only words, separated by" | ".
• On the third line, you will receive a command either "Test" or "Hand Over".

Output
•  Print the appropriate message after the "Test" or "Hand Over" command. */


function dictionary(input) {
    let data = input.slice();
    let dictionary = {};
    let firstLine = data.shift().split(' | ');
    let words = data.shift().split(' | ');
    const command = data.shift();

    // collecting words into Object
    for (let line of firstLine) {
        const [word, definition] = line.split(': ')
        if (!dictionary[word]) {
            dictionary[word] = [];
        }
        // not in condition but case if eventually word has the same definition
        if (!dictionary[word].includes(definition)) {
            dictionary[word].push(definition);
        }
    } // end object creating


    // print output depending on input conditions
    if (command === 'Test') {
        words.forEach(word => {
            if (dictionary[word]) {
                console.log(`${word}:`);
                dictionary[word].forEach(definition => console.log(` -${definition}`));
            }
        });
    } else if (command === 'Hand Over') {
        let notebook = Object.keys(dictionary).join(' ');
        console.log(notebook);
    }
}
// dictionary([
//     "programmer: an animal, which turns coffee into code | developer: a magician",
//     "fish | domino",
//     "Hand Over"
// ]);

// dictionary([
//     "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//     "care | kitchen | flower",
//     "Test"
// ]);

dictionary([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"
]);

