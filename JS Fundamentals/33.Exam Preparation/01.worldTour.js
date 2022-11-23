
function worldTour(tourList) {
    let tour = tourList.shift();
    let current = tourList.shift();

    while (current !== 'Travel') {
        let [command, arg1, arg2] = current.split(':');

        if (command === 'Add Stop') {
            arg1 = Number(arg1);

            if (tour[arg1]) {
                let fPart = tour.slice(0, arg1);
                let secondPart = tour.slice(arg1);
                let temp = fPart + arg2 + secondPart;
                tour = temp;
                console.log(tour);
            }else{
                console.log(tour);
            }
        } else if (command === 'Remove Stop') {
            arg1 = Number(arg1);
            arg2 = Number(arg2);
            if(tour[arg1] && tour[arg2]){
                let fPart = tour.slice(0, arg1);
                let secondPart = tour.slice(arg2+1);

                let temp = fPart + secondPart;
                tour = temp;
                console.log(tour);
            }
            else{
                console.log(tour);
            }
        } else if (command === 'Switch') {
            if(tour.includes(arg1)){
                let indexOfArg = tour.indexOf(arg1);
                let lgth = arg1.length;
                let fPart = arg2;
                let sPart = tour.slice((indexOfArg + lgth))
                tour = `${fPart}${sPart}`;
                console.log(tour);
            }
            else{
                console.log(tour);
            }
        }
        current = tourList.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}
// worldTour([
//     "Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);

worldTour(['Albania:Bulgaria:Albania:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])