/* 2. Flight Schedule
You will receive an array with arrays.
The first array (at index 0) will hold all flights on a specific sector in the airport. 
The second array (at index 1) will contain newly changed statuses of some of the flights at this airport. 
The third array (at index 2) will have a single string, which will be the flight status you need to check. 
When you put all flights into an object and change the statuses depends on the new information on the second array. 
You must print all flights with the given status from the last array.

•	If the value of the string obtained from the third array is "Ready to fly":
    o	then you must print flights that have not changed their status in the second array 
    o	and automatically change the status to "Ready to fly"
•	Otherwise, print only flights that have changed their status. */

function flightSchedule(flightData) {
    let [flightList, changes, flightStatus] = [flightData.shift(), flightData.shift(), flightData.join('')];
    let flights = {};
    flightObject();
    changesFlight();

    // put all flights in object
    function flightObject() {
        for (let sector of flightList) {
            let [flight, destination] = sector.split(' ');
            flights[flight] = destination;
        }
    }

    //flight changes
    function changesFlight() {
        for (let change of changes) {
            let [changeFlight, changeStatus] = change.split(' ');
            if (flights.hasOwnProperty(changeFlight)) {
                flights[changeFlight] = changeStatus;
            }
        }
    }

    //IF status is Ready to fly
    if (flightStatus === "Ready to fly") {
        flights.status = "Ready to fly";
        for (let el in flights) {
            if(flights[el] !== "Cancelled" && flights[el] !==  "Ready to fly")
            console.log(`{ Destination: '${flights[el]}', Status: '${flights.status}' }`);
        }
    } 
    // status is Cancelled
    else if (flightStatus === "Cancelled"){
        for(let key in flights){
            if(flights[key]=== "Cancelled"){
                for(let data of flightList){
                    let flightNum = data.split(' ').shift();
                    let flightName = data.split(' ').slice(1).join(' ');
                    if(key === flightNum){
                        console.log(`{ Destination: '${flightName}', Status: '${flights[key]}' }`);
                        break;
                    }
                }
                
            }
        }
    }

}
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
//     // ["Ready to fly"]
// ])

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],

 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])