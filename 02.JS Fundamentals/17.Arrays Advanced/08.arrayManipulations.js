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
    let numArray = mainArray.shift().split(' ').map(Number);

    for (let i = 0; i < mainArray.length; i++) {
        let current = mainArray[i];
        current = current.split(' ');

        if (current[0] === 'Add') { add() }
        else if (current[0] === 'RemoveAt') { removeAt() }
        else if (current[0] === 'Remove') { remove() }
        else if (current[0] === 'Insert') { insert() }
        
        function add() {
            let command = Number(current[1]);
            numArray.push(command);
        }

        function removeAt() {
            let command = Number(current[1]);
            numArray.splice(command, 1);
        }

        function remove() {
            let toBeRemoved = Number(current[1]);
            // filtered the numArray to remove specific element
            //let filteredArray = numArray.filter(function (e) { return e !== toBeRemoved })
            let filteredArray = numArray.filter(el => el !== toBeRemoved);
            numArray = filteredArray;
        }

        function insert() {
            let addThis = Number(current[1]);
            let atIndex = Number(current[2]);
            numArray.splice(atIndex, 0, addThis);
        }
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

/*  from the web
    function solve(commands) {
        let arr = commands.shift().split(' ').map(Number);
        for (let i = 0; i < commands.length; i++) {
            let [command, firstNum, secondNum] = commands[i].split(' ');
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            switch (command) {
                case 'Add':
                    add(firstNum);
                    break;
                case 'Remove':
                    remove(firstNum);
                    break;
                case 'RemoveAt':
                    removeAt(firstNum);
                    break;
                case 'Insert':
                    insert(firstNum, secondNum);
                    break;
            }
        }
        function add(el) {
            arr.push(el);
        }
        function remove(num) {
            arr = arr.filter(el => el !== num);
        }
        function removeAt(index) {
            arr.splice(index, 1);
        }
        function insert(num, index) {
            arr.splice(index, 0, num);
        }
        console.log(arr.join(' '));
    }
    solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']) */

        //converting array from string to Numbers
    /* numArray = numArray.map(str => {
        return Number(str);
    }); */