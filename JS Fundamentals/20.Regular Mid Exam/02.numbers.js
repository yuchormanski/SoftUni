/* 
 02 - Numbers
You are given numbers in a sequence on a single line, separated by a space. 
After that, you will receive commands that modify the sequence differently:
"Add {value}" - you should add the given value to the end of the sequence.
"Remove {value}"- you should remove the first occurrence of the given value if there is such.
"Replace (value} (replacement}" - you should replace the first occurrence of the given 
value with the replacement if there is such occurrence.
"Collapse {value}" you must remove each number with a value less than the given one.
When you receive the command "Finish", you should print the modified sequence and end the program.
Input / Constraints
On the first line, you will receive a sequence with numbers, separated by spaces - integers in the range [-1000...1000].
On the following lines, you will receive commands until the "Finish" command is received.
The commands will always be valid.
Output
Print a single line the array of numbers separated by a space, with the modified values.

•	The possible commands are:
o	"Add {value}"
o	"Remove {value}"
o	"Replace {value} {replacement}"
o	"Collapse {value}"
o	"Finish"
 */

function numbers(inputCommands) {
    let sequence = inputCommands.shift().split(' ').map(Number);
    for (let el of inputCommands) {
        let [command, value, replacement] = el.split(' ');
        [value, replacement] = [Number(value), Number(replacement)];
        //"Add {value}"
        if (command === 'Add') {
            sequence.push(value);
        }
        //"Remove {value}"
        else if (command === 'Remove') {
            if (sequence.includes(value)) {
                let index = sequence.indexOf(value)
                sequence.splice(index, 1);
            }
        }
        //"Replace {value} {replacement}"
        else if (command === 'Replace') {
            if (sequence.includes(value)) {
                let index = sequence.indexOf(value)
                sequence.splice(index, 1, replacement);
            }
        }
        //"Collapse {value}"
        else if (command === 'Collapse') {
            let temp = [];
            for (let j = 0; j < sequence.length; j++) {
                if (sequence[j] >= value) {
                    temp.push(sequence[j]);
                }
            }
            sequence = temp;
        }
        //"Finish"
        else if (command === 'Finish') {
            console.log(sequence.join(' '));
        }
    }
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"])
numbers(["5 9 70 -56 9 9","Replace 9 10","Remove 9","Finish"])
numbers(["1 20 -1 10", "Collapse 8", "Finish"])