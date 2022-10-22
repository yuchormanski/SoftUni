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
    for(let el of seqArray){
        el > average? topFIve.push(el):null;
    }
    topFIve.length === 0? no():null;
    function no(){
        return console.log('No');
    }
    let output = topFIve.sort((a,b) => b -a).slice(0,5);
    console.log(output.join(' '));
}
//numbers('1 1 1 1 1 1 1')


function theLift(arr) {
    let people = Number(arr.shift());
    let lift = arr.shift().split(" ").map(Number);
    const maxCapacity = 4;
    let isFull = false;

    for (let i = 0; i < lift.length; i++) {
        if (people >= maxCapacity - lift[i]) {
            people -= maxCapacity - lift[i];
            lift[i] = maxCapacity;
        } else {
            lift[i] += people;
            people = 0;
        }
    }
    isFull = lift.every((wagon) => wagon === maxCapacity);
    if (people === 0 && !isFull) {
        console.log("The lift has empty spots!");
    } else if (people > 0 && isFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(lift.join(" "));
}