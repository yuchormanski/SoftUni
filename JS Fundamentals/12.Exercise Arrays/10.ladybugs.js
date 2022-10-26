function ladybug(mainArray) {
    let fieldLength = mainArray.shift();
    let moves = mainArray.shift().split(' ').join('');
    let [field,startIndex, direction, targetIndex] = [[], 0, '', 0];
    let bug;

    makeField(); //   field creation
    fillField(); //   field occupation 

    for (let i = 0; i < mainArray.length; i++) {
        //taking each separate move and split it to strings
        let currentMove = mainArray[i].split(' ');
        startIndex = Number(currentMove[0]);
        direction = currentMove[1];
        if (direction === 'right') {
            targetIndex = startIndex + Number(currentMove[2]);
        } else {
            targetIndex = startIndex - Number(currentMove[2]);
        }
        seekingPlace()
    }
    console.log(field.join(' '));

    //make field
    function makeField() {
        for (let i = 0; i < fieldLength; i++) {
            field.splice(i, 1, 0)
        }
    }
    //fill field
    function fillField() {
        for (let j = 0; j < moves.length; j++) {
            bug = moves[j]
            field.splice(bug, 1, 1)
        }
    }
    // change targetIndex until is empty
    function seekingPlace() {

        if (field[startIndex] === 0 || startIndex < 0) { // IF given index is 0 or startIndex is out of field
            return;
        } else if (field[targetIndex] < 0 || field[targetIndex] >= field.length) { // If target index is outside the field
            return;
        } else if (field[targetIndex] === 0) {
            field.splice(startIndex, 1, 0); //free startIndex place
            field.splice(targetIndex, 1, 1); //land on endIndex place
        } else if (field[targetIndex] === 1) {
            while (field[targetIndex] !== 0) {
                if (direction === 'right') {
                    field[++targetIndex];
                } else if (direction === 'left') {
                    field[--targetIndex];
                } else if (direction !== 'right' || direction !== 'left') { // IF direction is different than RIGHT or LEFT
                    return;
                }
                if (targetIndex < 0 || targetIndex >= field.length) {
                    return outOfField()
                }
            }
            field.splice(startIndex, 1, 0); //free startIndex place
            field.splice(targetIndex, 1, 1); //land on endIndex place
        } else if (targetIndex < 0 || targetIndex >= field.length) {
            outOfField()
        }
    }
    // IF targetIndex is out of field
    function outOfField() {
        return field.splice(startIndex, 1, 0); //free startIndex place
    }
}
// ladybug([3, '0 1', '-1 right 1', '0 right 1', '2 right 1', '1 right 5'])
ladybug([3, '0 1', '0 right 1', '2 right 1'])
//ladybug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
//ladybug([5, '3', '2 right 1', '3 left 2', '1 left -2'])

/* 10.	* Ladybugs
You are given a field size and the indexes of ladybugs inside the field. A ladybug changes its position either to its 
left or to its right by a given fly length. A command to a ladybug looks like this: "0 right 1". This means that the 
little insect placed on index 0 should fly one index to its right. If the ladybug lands on a fellow ladybug, it 
continues to fly in the same direction by the same fly length. If the ladybug flies out of the field, it is gone.
For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. If the ladybug on index 0 needs 
to fly to its right by the length of 1 (0 right 1) it will attempt to land on index 1 but as there is another ladybug 
there it will continue further to the right by an additional length of 1, landing on index 2. After that, if the same 
ladybug needs to fly to its right by the length of 1 (2 right 1), it will land somewhere outside of the field, so it flies away.
If you are given a ladybug index that does not have a ladybug there, nothing happens. If you are given a ladybug index that is 
outside the field, nothing happens. 
Your job is to create the program, simulating the ladybugs flying around doing nothing. In the end, print all cells in the field 
separated by blank spaces. For each cell that has a ladybug on it print '1' and for each empty cell print '0'. For the example 
above, the output should be '0 1 0'. 
Input
•	You will receive an array of strings and the first element is an integer – the size of the field
•	The second element is a string containing the initial indexes of all ladybugs separated by a blank space. The given indexes 
may or may not be inside the field range
•	The next elements in the array are commands in the format:                                                                         
 "{ladybug index} {direction} {fly length}"
Output
•	Print the all cells within the field in format: `{cell} {cell} … {cell}`
o	If a cell has a ladybug in it, print '1'
o	If a cell is empty, print '0' 
Constrains
•	The size of the field will be in the range [0 … 1000]
•	The ladybug indexes will be in the range [-2,147,483,647 … 2,147,483,647]
•	The number of commands will be in the range [0 … 100] 
•	The fly length will be in the range [-2,147,483,647 … 2,147,483,647]
Examples
Input	                                           Output	    Comments
[ 3, '0 1','0 right 1','2 right 1']	               0 1 0	    1 1 0 - Initial field
                                                                0 1 1 - field after "0 right 1"
                                                                0 1 0 - field after "2 right 1"

[ 3, '0 1 2','0 right 1','1 right 1','2 right 1']	0 0 0		
[ 5, '3','3 left 2','1 left -2']	                0 0 0 1 0
 */