function flightSchedule(flightData) {
    let [flightList, changes, flightStatus] = [flightData.shift(), flightData.shift(), flightData.join('')];
    let flights = {};
    flightObject();
    changesFlight();

    // put all flights in object
    function flightObject() {
        for (let line of flightList) {
            let [flight, destination] = line.split(' ');
            flights[flight] = {
                Destination: destination,
                Status: 'Ready to fly'
            }

        }
    }

    //flight changes
    function changesFlight() {
        for (let change of changes) {
            let [changeFlight, changeStatus] = change.split(' ');
            if (flights.hasOwnProperty(changeFlight)) {
                flights[changeFlight].Status= changeStatus;
            }
        }
    }
    for(let element in flights) {
        flights[element].Status === flightStatus? console.log(flights[element]):null;
    }
}
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
    'SK430 Cancelled'],
['Cancelled']
    // ["Ready to fly"]
])