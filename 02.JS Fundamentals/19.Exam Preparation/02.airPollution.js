/* Air Pollution
Because of recent events you have become very conscious of the air quality in Sofia.That’s why you decided 
to keep track of the air pollution levels by making a map.Each block of the map displays a number that 
represents the current particle pollution in the air at this moment.There are different forces which affect 
the air quality in various ways.So how clean is the air in Sofia now ?
    Write a JavaScript program that tracks the pollution in the air above Sofia.You will receive two arguments – the 
first is the map of Sofia represented by a matrix of numbers and the second is an array of strings representing 
the forces affecting the air quality.The map will always be with 5 rows and 5 columns in total of 25 elements - blocks. 
Each block’s particle pollution(PM) is affected by 3 forces received in the following formats:
•	"breeze {index}" – index is the row where all column’s value drops by 15 PM
•	"gale {index}" – index is the column in all rows where value drops by 20 PM
•	"smog {value}" – all blocks in the map increase equally by the given value’s PM
The threshold in each block is 50 PM.If it is below that number, the block’s air is considered normal but if it 
reaches or goes over it, that block’s air is considered polluted.Also note, that the polluted particles in a 
block cannot go below zero.
    Finally, your program needs to find if there are any polluted blocks and print them in the format given below.
        Input
You will receive two arguments: 
•	The first argument is an array with five strings – rows of the matrix with columns separated by space that 
must be parsed as numbers, representing the map of Sofia. 
•	The second argument is an array of strings – each string consists of one of the words(breeze / gale / smog) and a 
number separated by space, representing the different forces.
    Output
Print on the console a single line:
•	If there are polluted blocks in the map, use their coordinates in the following format:
o	"[{rowIndex}-{columnIndex}]"
Note that you must start from the top left corner of the map moving to the bottom right corner horizontally. 
Then separate each formatted block’s coordinates with comma and space and print them in a single line in the following format:
o	"Polluted areas: {block1}, {block2}, {block3}, …"
•	If there are no polluted blocks in the map print:
o	"No polluted areas"
Constraints
•	The number of rows and columns for the matrix will always be 5
•	The number in each block will be an integer in range[0..1000]inclusive
•	The number of elements in the second input argument will be in range[0..100]inclusive 
•	Given smog’s value will be an integer in range[0..100]inclusive
•	Given indexes will always be valid

Examples
Input	                                        Output
["5 7 72 14 4",
"41 35 37 27 33",
"23 16 27 42 12",
"2 20 28 39 14",
"16 34 31 10 24",],
    ["breeze 1", "gale 2", "smog 25"]	            Polluted areas: [0 - 2], [1 - 0], [2 - 3], [3 - 3], [4 - 1]

["5 7 3 28 32",
"41 12 49 30 33",
"3 16 20 42 12",
"2 20 10 39 14",
"7 34 4 27 24",],
    ["smog 11", "gale 3",
            "breeze 1", "smog 2"]	                No polluted areas

["5 7 2 14 4",
"21 14 2 5 3",
"3 16 7 42 12",
"2 20 8 39 14",
"7 34 1 10 24",],
["breeze 1", "gale 2", "smog 35"]	                Polluted areas: [2 - 1], [2 - 3], [3 - 1], [3 - 3], [4 - 1], [4 - 4]
 */
// https://judge.softuni.org/Contests/Practice/Index/954#1

function airPollution(mapOfSofia, forces) {
    let polluted = '';
    let mapLength = mapOfSofia.length;
    let isPolluted = false;
    for (let i = 0; i < forces.length; i++) {
        let force = forces[i].split(' ')[0];
        let power = Number(forces[i].split(' ')[1]);

        if (force === 'breeze') {
            breeze();
        }
        if (force === 'gale') {
            gale();
        }
        if (force === 'smog') {
            smog();
        }

        function breeze() {
            let block = mapOfSofia[power];
            block = block.split(' ').map(Number);
            for (let i = 0; i < block.length; i++) {
                block[i] -= 15;
                if (block[i] < 0) {
                    block[i] = 0;
                }
            }
            block = block.join(' ');
            mapOfSofia[power] = block;
            return mapOfSofia;
        } // end 'breeze'

        function gale() {
            let rowMap;
            for (let i = 0; i < mapLength; i++) {
                rowMap = mapOfSofia[i].split(' ').map(Number);
                for (let j = 0; j < rowMap.length; j++) {
                    if (j === power) {
                        rowMap[j] -= 20;
                        if (rowMap[j] < 0) {
                            rowMap[j] = 0;
                        }
                    }
                }
                rowMap = rowMap.join(' ');
                mapOfSofia[i] = rowMap;
            }
            return mapOfSofia;
        } // end 'gale'

        function smog() {
            let rowMap;
            for (let i = 0; i < mapLength; i++) {
                rowMap = mapOfSofia[i].split(' ').map(Number);
                for (let j = 0; j < rowMap.length; j++) {
                    rowMap[j] += power;
                }
                rowMap = rowMap.join(' ');
                mapOfSofia[i] = rowMap;
            }
            return mapOfSofia;
        } //end 'smog'
    }

    pollute();
    function pollute() {
        let rowMap;
        let contamination = [];
        for (let i = 0; i < mapLength; i++) {
            rowMap = mapOfSofia[i].split(' ').map(Number);
            for (let j = 0; j < rowMap.length; j++) {
                if (rowMap[j] >= 50) {
                    isPolluted = true;
                    let element = `[${i}-${j}]`;
                    contamination.push(element);
                    polluted = contamination.join(', ')
                }
            }
        }
        return isPolluted;
    }
    if (isPolluted) {
        console.log(`Polluted areas: ${polluted}`);
    } else {
        console.log(`No polluted areas`);
    }
}
// airPollution([
//     "5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24"],
//     ["breeze 1", "gale 2", "smog 25"])

// airPollution([
//     "5 7 3 28 32",
//     "41 12 49 30 33",
//     "3 16 20 42 12",
//     "2 20 10 39 14",
//     "7 34 4 27 24",
//   ],
//   [ 
//     "smog 11", "gale 3", 
//     "breeze 1", "smog 2"
//   ]
//   )

airPollution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"])