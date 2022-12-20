function softUniReception(input) {
    let employees = input.slice(0, 3).map(Number).reduce((a, b) => a + b);
    let students = input.slice(-1).join();
    let counter = 0;

    while (students > 0) {
        counter++;
        if (counter % 4 !== 0) {
            students -= employees;
        }
    }
    console.log(`Time needed: ${counter}h.`);
}
//softUniReception(['3','2','5','40'])

function arrayModifier(input) {
    let numArray = input.slice(0, 1).join(' ').split(' ').map(Number);
    let commands = input.slice(1);

    for (let el of commands) {
        let [command, index1, index2] = el.split(' ');
        [index1, index2] = [Number(index1), Number(index2)];

        if (command === 'swap') { swap() }
        else if (command === 'multiply') { multiply() }
        else if (command === 'decrease') { decrease() }
        else if (command === 'end') {
            return console.log(numArray.join(', '));
        }

        function swap() {
            let buff = numArray[index1];
            numArray[index1] = numArray[index2];
            numArray[index2] = buff;
            return numArray;
        };
        function multiply() {
            let buff = numArray[index1] * numArray[index2];
            return numArray[index1] = buff;
        };
        function decrease() {
            return numArray = numArray.map(x => x - 1);
        };

    };

}
// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ])

function numbers(sequence) {
    let seqArray = sequence.split(' ').map(Number);
    let average = (seqArray.reduce((el, x) => el + x) / seqArray.length);
    let topFIve = [];
    for (let el of seqArray) {
        el > average ? topFIve.push(el) : null;
    }
    topFIve.length === 0 ? no() : null;
    function no() {
        return console.log('No');
    }
    let output = topFIve.sort((a, b) => b - a).slice(0, 5);
    console.log(output.join(' '));
}
//numbers('1 1 1 1 1 1 1')

function manOWar(warData) {
    let pirateShip = warData.slice(0, 1).join('').split('>').map(Number);
    let warShip = warData.slice(1, 2).join('').split('>').map(Number);
    let maxHealth = Number(warData.slice(2, 3).join(''));
    let commands = warData.slice(3);
    for (let el of commands) {
        let [command, index1, index2, index3] = el.split(' ');
        [index1, index2, index3] = [Number(index1), Number(index2), Number(index3)];

        if (command === 'Fire') {
            if (warShip[index1]) {
                warShip[index1] -= index2;
                if (warShip[index1] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            if (pirateShip[index1] && pirateShip[index2]) {
                for (let i = index1; i <= index2; i++) {
                    pirateShip[i] -= index3;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            if (pirateShip[index1]) {
                pirateShip[index1] += index2;
                pirateShip[index1] > maxHealth ? pirateShip[index1] = maxHealth : null;
            }
        } else if (command === 'Status') {
            let toRepair = maxHealth * 0.2;
            let count = 0;
            for (let section of pirateShip) {
                if (section < toRepair) { count++ }
            }
            console.log(`${count} sections need repair.`);
        } else if (command === 'Retire') { break }
    }
    let pirateShipSum = pirateShip.reduce((secP, x) => secP + x);
    let warshipSum = warShip.reduce((secW, y) => secW + y);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);


}
// manOWar(["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])


// manOWar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"])

function memoryGame(elements) {
    let memory = elements.slice(0, 1).join().split(' ');
    let counter = 0;
    let indexes = elements.slice(1);
    for (let el of indexes) {
        if (el === 'end') { break };
        let [index1, index2] = el.split(' ').map(Number);
        counter++;
        //IF cheat
        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= memory.length || index2 >= memory.length) {
            let elToAdd = `-${counter}a`;
            memory.splice(memory.length / 2, 0, elToAdd);
            memory.splice(memory.length / 2, 0, elToAdd);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }
        //IF found
        if(memory[index1] === memory[index2]){
            let element = memory[index1];
            if(index1 < index2){
                memory.splice(index2,1)
                memory.splice(index1,1)
            } else {
                memory.splice(index1,1)
                memory.splice(index2,1)
            }
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }

        //IF found all before end
        if(memory.length === 0){
            console.log(`You have won in ${counter} turns!`);
            return;
        }
    }
    console.log(`Sorry you lose :(\n${memory.join(' ')}`);
}
// memoryGame(["1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"])

// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )

// memoryGame([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )