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

/* function arrayManipulator(mainArray, commandsArray) {
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
arrayManipulator([2, 2, 4, 2, 4,], ["add 1 4", "sumPairs", "print"])  */

/* function arrayManipulator(mainArray, commandsArray) {

  for(let i = 0; i < commandsArray.length; i++){
    let currentCommand = commandsArray[i].split(' ');

    if(currentCommand[0] === "add"){
      mainArray.splice(currentCommand[1],0,currentCommand[2]);

    } else if (currentCommand[0] === "addMany"){ 
      currentCommand.shift();
      let index = currentCommand.shift();
      let k =0;
      while(currentCommand.length !== 0){
        let cur = currentCommand.shift();
        mainArray.splice(index +k, 0, cur);
        k++;
      }
    } else if(currentCommand[0] === "contains"){ 
      currentCommand[1] = Number(currentCommand[1]);
      if(mainArray.includes(currentCommand[1])){
          console.log(mainArray.indexOf(currentCommand[1]));
      } else {console.log(-1)}
    }else if(currentCommand[0] === "remove"){
      mainArray.splice(currentCommand[1],1);
    }else if(currentCommand[0] === "shift"){
      let times = currentCommand[1];
      for(let d = 0; d < times; d++){
        let taken = mainArray.shift();
        mainArray.push(taken);
      }
    }else if(currentCommand[0] === "sumPairs"){
      let copy = [];
      for(let m = 0; m < mainArray.length; m+=2){
        if(m === mainArray.length-1){
          mainArray[m+1] = 0;
        }
        let cur = Number(mainArray[m])+ Number(mainArray[m+1])
        copy.push(cur);
      }
      mainArray = copy;
    }
    if(currentCommand[0] === "print"){

      let end = mainArray.map(Number).join(', ');
      console.log(`[ ${end} ]`);
      return
    } 
    
  }
}
arrayManipulator([2, 2, 4, 2, 4],
  ["add 1 4", "sumPairs", "print"]
  )  */

function arrayManipulator(mainArray, commandsArray) {

  for (let i = 0; i < commandsArray.length; i++) {
    let commands = commandsArray[i].split(' ');
    let command = commands.shift();

    if (command === 'add') {
      let index = Number(commands[0]);
      //IF mainArray index is valid
      if (mainArray[index]) {
        let element = Number(commands[1]);
        mainArray.splice(index, 0, element);
      }
      continue;
    }

    else if (command === 'addMany') {
      let index = Number(commands.shift());
      //IF mainArray index is valid
      // if (mainArray[index]) {
        for (let j = index; commands.length > 0; j++) {
          mainArray.splice(j, 0, Number(commands.shift()));
        }
      // }
      continue;
    }

    else if(command === 'contains'){
      let elIndex = Number(commands[0]);
      if(mainArray.includes(elIndex)){
        console.log(mainArray.indexOf(elIndex));
      } else {
        console.log(-1);
      }
      continue;
    }

    else if(command === 'remove'){
      let index = Number(commands.shift());
      mainArray.splice(index,1);
    }

    else if(command === 'shift'){
      let position = Number(commands[0]);
      for(let k = 0; k < position; k++){
        let buff = mainArray.splice(0,1).join();
        mainArray.push(Number(buff));
      }
    }

    else if(command === 'sumPairs'){
      for(let l = 0; l < mainArray.length; l++){
        let el1 = mainArray[l];
        let el2 = mainArray[l + 1];
        if (!el2){el2 = 0};
        let sum = el1 + el2;
        mainArray.splice(l,2,sum);
      }
    }


    else if (command === 'print'){
      console.log(`[ ${mainArray.join(', ')} ]`);
      return;
    }
  }

}
arrayManipulator([1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
  ) 

  //-1
// [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]
