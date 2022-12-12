function easter(input) {
    let data = input.slice();

    /* 
"Replace {currentChar} {newChar}"
"Remove {substring}"
"Includes {string}"
"Change {Lower/Upper}"
"Reverse {startIndex} {endIndex}"
    */
    let message = data.shift();

    let current = data.shift();
    while (current !== 'Easter') {
        let [command, ...arg] = current.split(' ');

        if (command === 'Replace') {
            let regex = new RegExp(arg[0], 'g');
            let temp = message.replace(regex, arg[1]);
            message = temp;
            console.log(message);
        } else if (command === 'Remove') {
            if (message.includes(arg[0])) {
                let length = arg[0].length;
                let index = message.indexOf(arg[0]);
                let temp = message.split('');
                temp.splice(index, length);
                message = temp.join('')
            }
            console.log(message);
        } else if (command === 'Includes') {
            if (message.includes(arg[0])) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === 'Change') {
            if (arg[0] === 'Lower') {
                message = message.toLowerCase();
            } else {
                message = message.toUpperCase();
            }
            console.log(message);
        } else if (command === 'Reverse') {
            let index = Number(arg[0]);
            let end = Number(arg[1]);
            if (message[arg[0]] && message[arg[1]]) {
                let temp = message.slice(index, end + 1);
                temp = temp.split('').reverse().join('');
                console.log(temp);
            }
        }
        current = data.shift();
    }
}
// easter([
//     'EasteriEggsscomming',
//     'Replace i I',
//     'Remove Eggs',
//     'Remove commIng',
//     'Change Lower',
//     'Reverse 0 17',
//     'Easter'
// ]);

easter([
    'Easterbscomming',
    'Replace b I',
    'Includes ing',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'
]);