/* 8.	Array Manipulations
Write a function that manipulates an array of numbers. 
•	Add {number}: add a number to the end of the array
•	Remove {number}: remove all occurrences of a particular number from the array
•	RemoveAt {index}: removes number at a given index
•	Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
The input comes as an array of strings. The first element will be a string containing the array to manipulate. 
Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.
Example
Input	                Output
['4 19 2 53 6 43',      4 53 6 8 43 3
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']

['6 12 2 65 6 42',      6 2 6 65 42 8
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']	 */

function arrayManipulations(mainArray) {
    let numArray = mainArray.shift().split(' ');
    numArray.map(Number)
    for (let i = 0; i < mainArray.length; i++) {
        let current = mainArray[i];

        function add() {
            if (current.includes('Add')) {
                let command = Number(current.slice(-1));
                numArray.push(command);
            }
        }

        function removeAt() {
            if (current.includes('RemoveAt')) {
                let command = Number(current.slice(-1));
                numArray.splice(command, 1)
            }
        }

        function remove() {
            if (current.includes('Remove')) {
                let command = current.split(' ');
                let toBeRemoved = Number(command[1])
                // filtered the numArray to remove specific element
                let filteredArray = numArray.filter(function (e) { return e !== toBeRemoved })
                numArray = filteredArray
            }
        }

        function insert() {
            if (current.includes('Insert')) {
                current = current.split(' ');
                let addThis = Number(current[1]);
                let atIndex = Number(current[2]);
                numArray.splice(atIndex, 0, addThis);
            }
        }
        add();
        remove();
        removeAt();
        insert();
    }
    console.log(numArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])
