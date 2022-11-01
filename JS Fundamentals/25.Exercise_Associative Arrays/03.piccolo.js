/* 3.	Piccolo
Write a function that:
•	Records a car number for every car that enters the parking lot
•	Removes a car number when the car goes out
•	Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".
 */

function piccolo(parkingLot) {
    //object
    let parking = {};

    for (let car of parkingLot) {
        let [inOut, license] = car.split(', ');
        //IF in add to object by license number as key
        if (inOut === "IN") {
            parking[license] = inOut;
        }
        // IF out delete entry
        else {
            delete parking[license];
        }
    }
    // IF object is empty -> empty message
    if (Object.keys(parking).length === 0) { return console.log('Parking Lot is Empty') };
    // sort object keys and print 
    let numbers = Object.keys(parking).sort((a, b) => a.localeCompare(b));
    numbers.forEach(car => console.log(car));
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'])