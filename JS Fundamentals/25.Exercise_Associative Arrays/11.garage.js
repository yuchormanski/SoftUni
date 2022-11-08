/* 1.	Garage
Write a function that stores cars in garages. You will be given an array of strings. 
Each string will contain a number of a garage and info about a car. You have to store 
the car (with its info) in the given garage. The info about the car will be in the format:
 "{key1}: {value1}, {key2}: {value2}…"
If the garage does not exist, create it. The cars will always be unique. 
At the end print the result in the format:

"Garage № {number}:
--- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
--- {the same for the next car}
Garage № {number}: …" */

function garage(garageLine) {
    let garages = {};
    inGarage();

    function inGarage() {
        for (let el of garageLine) {
            let cage = Number(el.split(' - ')[0]);
            let cars = el.split(' - ')[1].split(', ');

            //create object
            if (!garages[cage]) {
                garages[cage] = [];
            }
            //create array for holding current cage cars
            let current = []
            // separate car of cars
            for (let car of cars) {
                //replace unneeded chars
                let line = car.replace(': ', ' - ');
                current.push(line);
            }
            //holding the current car
            garages[cage].push(current);
        }
    }
    //iterate if garages cages
    for (let [garage, cage] of Object.entries(garages)) {
        console.log(`Garage № ${garage}`);
        //iterate in current cage
        for (let car of cage) {
            console.log(`--- ${car.join(', ')}`);
        }
    }
}
garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])

// garage([
//     '1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol'
// ])