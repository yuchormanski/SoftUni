/* 2.	Bunny Kill
In the underground world of bunnies, mafia and corruption have taken over. Snowball is on a mission to infiltrate a 
certain deserted military hanger, supposedly filled with convict bunnies. 

You will be given a matrix of integers, each integer separated by a single space, and each row on a new line, which 
will represent the current situation in the hangar. Then on the last line of input, you will receive 
indexes - coordinates to several cells in the hangar separated by a single space, in the following 
format: row1,column1 row2,column2 row3,column3… 

On those cells, there are bunnies with bombs. Snowball is smart and knows that bombs are 
an easy way to neutralize enemies, especially when they are the enemy’s bombs.
Snowball will proceed to eliminate every bunny with a bomb, one by one in the order they were given. When a bunny with a 
bomb is killed, it explodes and deals damage equal to its integer value, to all the cells around it (in every direction and 
    all diagonals). If a bomb bunny is caught in the explosion and killed, that bomb is no longer valid and will not explode. 
    When a bunny is damaged, it reduces its integer value by the damage value. When a bunny’s value reaches 0, it dies. 
    When a bunny explodes, it dies.
When Snowball is done with all the bomb bunnies, he will proceed to kill any other convict bunny, which has remained alive. 
You must count all the damage Snowball did in the hangar. Note that bomb explosion damage does not count as 
Snowballs damage, but the killing of bomb bunnies and other bunnies DOES. Snowball’s damage for every bunny is 
equal to the bunny at that cell’s integer value.

Input
•	The input data is passed to the first function found in your code as an array of strings.
•	Each entry in the array represents a row of the matrix, in the form of integers separated by a space.
•	On the last line, you will receive the coordinates of the cells with the bomb bunnies.

Output
•	On the first line, you need to print Snowball’s damage.
•	On the second line, you need to print the number of bunnies, who HE killed.

Constraints
•	The size of the matrix will be between [0…1000].
•	 The coordinates to the bomb bunnies will always be in the matrix.
•	The integers of the matrix will be in the range [0…10000].

 */

function bunnyKill(input) {
    let data = input.slice();
    const coordinates = data.pop().split(' '); //: row1,column1 
    const matrix = [];
    let headShot = 0, kills = 0, killPoints = 0;
    data.forEach(line => matrix.push(line.split(' ').map(Number)));

    for (let line of coordinates) {
        let [i, j] = line.split(',').map(Number);
        //main kill index
        let mainValue = matrix[i][j];
        //IF bomb index is not already exploded
        if (matrix[i][j] > 0) {
            headShot += mainValue;
            kills++;
        }
        //iterate for vertical radius
        for (let row = i - 1; row <= i + 1; row++) {
            killRange(row, j, mainValue);
        }
    }

    function killRange(i, j, mainValue) {
        //iterate for horizontal radius
        //IF row exist
        if (matrix[i]) {
            for (let k = j - 1; k <= j + 1; k++) {
                //IF column exist
                if (matrix[i][k]) {
                    (matrix[i][k] - mainValue) > 0 ? matrix[i][k] -= mainValue : matrix[i][k] = 0;
                };
            }
        }
        return matrix[i];
    }

    matrix.forEach(line => { killPoints += line.reduce((a, b) => a + b); line.forEach(x => x > 0 ? kills++ : null); });
    killPoints += headShot;
    console.log(`${killPoints}\n${kills}`);
}

// bunnyKill([
//     '10 10 10',
//     '10 20 10',
//     '10 30 10',
//     '0,0']);

// bunnyKill([
//     '5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1']);

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);

bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);