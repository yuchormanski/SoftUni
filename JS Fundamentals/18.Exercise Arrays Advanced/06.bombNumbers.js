/* 6.	Bomb Numbers
Write a function that receives two parameters: sequence of numbers and special bomb 
number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according 
to its power his neighbors from left and right. Detonations are performed from left 
to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence 
and the second contains the special bomb number and its power.
The output is the sum of the remaining elements in the sequence.

Input                                               Output
[1, 2, 2, 4, 2, 2, 2, 9],[4, 2]	                    12
[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]               4
[1, 4, 4, 2, 8, 9, 1],[9, 3]	                    5
[1, 7, 7, 1, 2, 3],[7, 1]	                        6


Comments
The special number is 4 with power 2. After detonation, we are left with 
the sequence [1, 2, 9] with sum 12. */

function bombNumbers(bombField, bombArray) {
    let bombIndex = null;
    let power = bombArray[1];
    let sum = 0;
    let chargedBomb = bombField.includes(bombArray[0])

    if (chargedBomb) { // IF there isn't special-bomb-number DO NOTHING
        while (chargedBomb) {  //IF there is more than one bobs
            bombIndex = bombField.indexOf(bombArray[0]) //Index of special-bomb-number
            bombField.splice(bombIndex + 1, power); // Removing element on the right side of the bomb excluding bomb
            if (bombIndex - power < 0) { //IF bombs will deploy elements before 0;
                bombField.splice(0, bombIndex + 1); //  Removing all elements including bombIndex
            } else {
                bombField.splice(bombIndex - power, power + 1); // Starting index , power + bomb
            }
            chargedBomb = bombField.includes(bombArray[0]) // check for another bomb
        }
        for (let i = 0; i < bombField.length; i++) {
            sum += bombField[i];
        }
        console.log(sum);
    }
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
