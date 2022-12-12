/* Santa’s Gifts
You will be given an array of integers, which represent the house numbers you should visit. 
The commands will lead you to them. If they lead you to non-existing places, don’t move.
•	Forward {numberOfSteps}
•	Back {numberOfSteps}
    o	When you receive the “Forward” or “Back” command, you move the given number of times in this 
    direction and remove the house in this position from your list. Also, when you receive 
    the next command, you continue from this position. 
•	Gift {index} {houseNumber}
    o	Enter a new house number, which the dwarves have left out on purpose, 
    at the given position and move to its position. 
•	Swap {indexOfFirst} {indexOfSecond}
    o	Santa wants to rearrange his path and swap the order of two houses. You will receive the numbers of the houses,
    that need to be switched and he doesn’t need to move to fulfill this command.

Input 
•	On the first line you will receive the number of commands – integer in the range [1-50]
•	On the second line you will receive the array of integers, that represent the houses, 
split by a single space – valid integers in the range [1 – 500]
•	On the next n lines, you will receive the commands in the following format:
    o	Forward {steps}
    o	Back {steps}
    o	Gift {index} {value}
    o	Swap {value1} {value2}
Output
•	Print the last position and the remaining houses in the following format:
“Position {position}”
“{houseNumber}, {houseNumber}………, {houseNumber}”
Constraints
    •	The house numbers will be valid integers in the range [1 - 1000]
    •	The number of commands will be a valid integer in the range [1 - 50]
    •	The commands will be given in the exact format as they are written above
    •	There will always be at least one valid command */


function santasGifts(input) {
    let data = input.slice();
    let moves = Number(data.shift());
    let houses = data.shift().split(' ');
    let position = 0;
    let index;

    while (moves > 0) {
        let line = data.shift();
        let [command, ...indexes] = line.split(' ');

        if (command === 'Forward' || command === 'Back') {
            if (command === 'Forward') {
                index = position + Number(indexes[0]);
            } else {
                index = position - Number(indexes[0]);
            }
            if (houses[index]) {
                houses.splice(index, 1);
                position = index;
            }
        } else if (command === 'Gift') {
            index = Number(indexes[0]);
            if (houses[index]) {
                let newHouse = indexes[1];
                houses.splice(index, 0, newHouse);
                position = index;
            }
        } else if (command === 'Swap') {
            let firstHouse = houses.indexOf(indexes[0]);
            let secondHouse = houses.indexOf(indexes[1]);
            //check if both houses exist
            if (houses[firstHouse] && houses[secondHouse]) {
                //swap places
                [houses[firstHouse], houses[secondHouse]] = [houses[secondHouse], houses[firstHouse]];
            }
        }
        moves--;
    } // end moves

    console.log(`Position: ${position}`);
    console.log(houses.join(', '));
}
santasGifts([
    '5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3'
]);

// santasGifts([
//     '6',
//     '50 40 25 63 78 54 66 77 24 87',
//     'Forward 4',
//     'Back 3',
//     'Forward 3',
//     'Gift 2 88',
//     'Swap 50 87',
//     'Forward 1'
// ]);