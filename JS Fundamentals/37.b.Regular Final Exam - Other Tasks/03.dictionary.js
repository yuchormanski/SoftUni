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
    
//TODO: output for both conditions 

    if(command === 'Test'){

    } else if (command === 'Hand Over'){

    }

}
// dictionary([
//     "programmer: an animal, which turns coffee into code | developer: a magician",
//     "fish | domino",
//     "Hand Over"
// ]);

dictionary([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);

