/* 8	. *Array Manipulator
Write a function that receives an array of integers and an array of string commands and executes them over the array. The commands are as follows:

•	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
•	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
•	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
•	remove <index> – removes the element at the specified index.
•	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
•	print – stop receiving more commands and print the last state of the array in the following format:
         `[ {element1}, {element2}, …elementN} ]`
  Note: The elements in the array must be joined by comma and space (, ).
Examples
Input	                                                                                        Output
[1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']         	                  0 -1
                                                                                                [ 1, 8, 2, 4, 5, 6, 7 ]
[1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']	        -1
                                                                                                [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]

[2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"]                                                [ 6, 6, 6 ]
[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]    [ -1, -2, -3, 6, 6, 6 ]
 */

function arrayManipulator(mainArray, commandsArray) {
  let arrayLength = commandsArray.length;
  let isPrint = false;
  let final = ``;
 
  for (let el = 0; el < arrayLength; el++) {
    let currentCommand = commandsArray[el];
    currentCommand = currentCommand.split(' ');
    let command = currentCommand[0];
 
    command === 'add' ? add() :
      command === 'addMany' ? addMany() :
        command === 'contains' ? contains() :
          command === 'remove' ? remove() :
            command === 'shift' ? shift() :
              command === 'sumPairs' ? sumPairs() :
                command === 'print' ? print() : null
 
 
    function add() { //add <index> <element> – adds element at the specified index
      mainArray.splice(currentCommand[1], 0, currentCommand[2])
    }
    
    function addMany() { //addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index
      let i = currentCommand[1];
      let j = currentCommand.splice(2);
      for (let el of j) {
        mainArray.splice(i++, 0, el)
      }
    }
 
    function contains() { //contains <element> – prints the index of the first occurrence of the specified element
      let indexOfEl = Number(currentCommand[1]);
      if (mainArray.includes(indexOfEl)) {
        return console.log(mainArray.indexOf(indexOfEl));
      } else { return console.log(-1); }
    }
 
    function remove() { //remove <index> – removes the element at the specified index
      if (currentCommand[1] < 0) {
        return;
      }
      mainArray.splice(currentCommand[1], 1);
    }
 
    function shift() { //shift <positions> – shifts every element of the array the number of positions to the left (with rotation)
      if (currentCommand[1] < 0) {
        return;
      }
      let times = currentCommand[1];
      for (let count = 0; count < times; count++) {
        let buff = mainArray.shift();
        mainArray.push(buff);
      }
    }
 
    function sumPairs() { //sumPairs – sums the elements in the array by pairs
      let mainArrayLength = mainArray.length;
      let mutantArray = [];
      let arrIndex = 0;
      for (let i = 1; i < mainArrayLength; i++) {
        mainArray = mainArray.map(Number)
        if (i % 2 !== 0) {
          let sum = mainArray[arrIndex] + mainArray[arrIndex + 1];
          mutantArray.push(sum);
        }
        arrIndex++;
      }
      if (mainArrayLength % 2 !== 0) {
        let last = mainArray.slice(-1).join('');
        mutantArray.push(last)
      }
      mainArray = mutantArray;
    }
 
    function print() { //print – stop receiving more commands and print the last state of the array
      final = `[ ${mainArray.join(', ')} ]`
      return isPrint = true;
    }
 
    if (isPrint) {
      console.log(final);
      return;
    }
  }
}
arrayManipulator([2, 2, 4, 2, 4,], ["add 1 4", "sumPairs", "print"]) 