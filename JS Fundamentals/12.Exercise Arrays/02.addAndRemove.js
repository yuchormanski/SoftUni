/* 12.	Add and Remove
Write a function that adds and removes numbers to/from an array. You will receive a command, which can either be "add" or "remove". 
The initial number is 1. Each input command should increase that number, regardless of what it is.
•	Upon receiving an "add" command, you should add the current number to your array.
•	 Upon receiving the "remove" command, you should remove the last entered number, currently existent in the array.
Input
The input comes as an array of strings. Each element holds a command.
Output
Print elements in a row, separated by a single space. In case of an empty array, just print "Empty".
Examples

Input	                                            Output
['add', 'add', 'add', 'add']	                    1 2 3 4
['add', 'add', 'remove', 'add', 'add']	            1 4 5
 */


function addAndRemove(commandArray) {
    let num = 0;
    let output = [];
    let commandArrayLength = commandArray.length;

    for (let i = 0; i < commandArrayLength; i++) {
        num++;
        if (commandArray[i] === 'add') {
            output.push(num);
        } else {
            if (output.length === 0) {
                continue;
            }
            output.pop();
        }
    }
    if (output.length === 0) {
        return console.log('Empty');
    } else {
        console.log(output.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove'])