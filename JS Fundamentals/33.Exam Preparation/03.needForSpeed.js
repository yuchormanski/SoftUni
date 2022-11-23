/* On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain. On the next n lines, 
the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
"{car}|{mileage}|{fuel}"
Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:

•	"Drive : {car} : {distance} : {fuel}":
    o	You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
    o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print: 
    "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
    o	You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"

•	"Refuel : {car} : {fuel}":
    o	Refill the tank of your car. 
    o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, 
    take only what is required to fill it up. 
    o	Print a message in the following format: "{car} refueled with {fuel} liters"

•	"Revert : {car} : {kilometers}":
    o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
    "{car} mileage decreased by {amount reverted} kilometers"
    o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
    DO NOT print anything.

Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
Input/Constraints
    •	The mileage and fuel of the cars will be valid, 32-bit integers, and will never be negative.
    •	The fuel and distance amounts in the commands will never be negative.
    •	The car names in the commands will always be valid cars in your possession.
 */

function needForSpeed(data) {
    let numberOfCars = Number(data.shift())
    let vehicles = {};

    //collecting cars
    while (numberOfCars) {
        let [car, mileage, fuel] = data.shift().split('|');

        if (!vehicles[car]) {
            vehicles[car] = {
                mileage: Number(mileage),
                fuel: Number(fuel)
            }
        }
        //missing case if update car mileage and/or fuel
        numberOfCars--;
    }

    let current = data.shift();
    while (current !== 'Stop') {
        let [act, car, driveDistance, outgo] = current.split(' : ');
        [driveDistance, outgo] = [Number(driveDistance), Number(outgo)];

        if (act === 'Drive') {
            if (vehicles[car].fuel >= outgo) {
                vehicles[car].fuel -= outgo;
                vehicles[car].mileage += driveDistance;
                console.log(`${car} driven for ${driveDistance} kilometers. ${outgo} liters of fuel consumed.`);
            }
            //IF not enough fuel for given distance
            else {
                console.log('Not enough fuel to make that ride');
            }
            //IF reach 100000km - delete 
            if (vehicles[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete vehicles[car];
            }
        }

        else if (act === 'Refuel') {
            additionalFuel = driveDistance;
            let available = vehicles[car].fuel;
            let topUp = 0;
            vehicles[car].fuel += additionalFuel;

            if (vehicles[car].fuel > 75) {
                // reduce the fuel to max tank capacity
                vehicles[car].fuel = 75;
                //get topUp amount
                topUp = 75 - available;
            } else {
                topUp = additionalFuel;
            }
            console.log(`${car} refueled with ${topUp} liters`);
        }

        else if (act === 'Revert') {
            mileageReduce = driveDistance;
            vehicles[car].mileage -= mileageReduce;
            //print only if mileage is more than 10000km
            if (vehicles[car].mileage >= 10000) {
                console.log(`${car} mileage decreased by ${mileageReduce} kilometers`);
            } else {
                // minimum available mileage
                vehicles[car].mileage = 10000;
            }
        }
        current = data.shift();
    }

    for (const car in vehicles) {
        console.log(`${car} -> Mileage: ${vehicles[car].mileage} kms, Fuel in the tank: ${vehicles[car].fuel} lt.`);
    }

}
// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);