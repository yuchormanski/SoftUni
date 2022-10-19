
function theLift(touristOnLift) {
    let tourist = Number(touristOnLift.shift());
    let lift = touristOnLift.join(' ').split(" ").map(Number);
    let maxPeople = 4;
    let totalAvailable = lift.length * maxPeople;
    for (let cabin = 0; cabin < lift.length; cabin++) {
        
        let currentInLift = lift[cabin];
        let toEnter = maxPeople - currentInLift;
        if (toEnter > tourist) { toEnter = tourist }
        lift[cabin] += toEnter;
        tourist -= toEnter;
        totalAvailable -= toEnter;
        if (tourist <= 0) {
            tourist = 0;
            break;
        }
    }
    if (tourist === 0) {
        if (totalAvailable > 0) {
            console.log('The lift has empty spots!');
        }
    } else {
        console.log(`There isn't enough space! ${tourist} people in a queue!`);
    }
    console.log(`${lift.join(' ')}`);

}
theLift(["15", "0 0 0 0 0"])
theLift(["20", "0 2 0"])
