/* 1.	Train
You will be given an array of strings.
The first element will be a string containing wagons (numbers). Each number inside 
the string represents the number of passengers that are currently in a wagon. 
The second element in the array will be the max capacity of each wagon (single number).
The rest of the elements will be commands in the following format:
•	Add {passengers} – add a wagon to the end with the given number of passengers.
•	{passengers} - find an existing wagon to fit all the passengers (starting from 
    the first wagon)
At the end, print the final state of the train (all the wagons separated by a space).
Example
Input	                        Output
['32 54 21 12 4 0 23',          72 54 21 12 4 75 23 10 0
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'] 

['0 0 0 10 2 4',                10 10 10 10 10 10 10
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']	
*/

function train(mainArray) {
    let wagons = mainArray.shift().split(' ').map(Number);
    let newComposition = [];
    let maxInWagon = mainArray.shift();

    maxInWagon = Number(maxInWagon);
    let passengers = 0;
    for (let i = 0; i < mainArray.length; i++) {
        let arrayElement = mainArray[i];
        let command = arrayElement.split(' ');

        if (command[0] === "Add") {
            let addWagon = Number(command[1]);
            wagons.push(addWagon)
        } else {
            //TODO modify only current wagon
            passengers = Number(command[0]);
            for(let j = 0; j < wagons.length; j++){
                let currentWagon = wagons[j];
                if(currentWagon + passengers <= maxInWagon){
                    let topup = currentWagon + passengers
                    wagons.shift();                         //
                    wagons.unshift(topup);                  //
                    break;                   
                }  
            }
        }
    }
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
